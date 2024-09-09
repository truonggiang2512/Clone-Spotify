import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, VolumeX, ListVideo, MonitorSmartphone } from 'lucide-react';
import { useMusicContext } from '@/contexts/MusicContext';
import { ISong } from '@/lib/songs';  // Import ISong instead of Song

interface MusicPlayerProps {
  playlist: ISong[];  // Change this from Song[] to ISong[]
  currentSongIndex: number;
  onSongChange: (index: number) => void;
  isShuffling: boolean;
  onShuffleToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  playlist, 
  currentSongIndex, 
  onSongChange, 
  isShuffling, 
  onShuffleToggle 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isRepeating, setIsRepeating] = useState(false);
  const [volume, setVolume] = useState(1);
  const [prevVolume, setPrevVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    if (isShuffling) {
      const indices = Array.from({ length: playlist.length }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      setShuffledIndices(indices);
    }
  }, [isShuffling, playlist.length]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const time = Number(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  const handleSkipBack = () => {
    if (isShuffling) {
      const currentIndex = shuffledIndices.indexOf(currentSongIndex);
      const newIndex = (currentIndex - 1 + shuffledIndices.length) % shuffledIndices.length;
      onSongChange(shuffledIndices[newIndex]);
    } else {
      onSongChange((currentSongIndex - 1 + playlist.length) % playlist.length);
    }
  }

  const handleSkipForward = () => {
    if (isShuffling) {
      const currentIndex = shuffledIndices.indexOf(currentSongIndex);
      const newIndex = (currentIndex + 1) % shuffledIndices.length;
      onSongChange(shuffledIndices[newIndex]);
    } else {
      onSongChange((currentSongIndex + 1) % playlist.length);
    }
  }

  const toggleShuffle = () => {
    onShuffleToggle();
  }

  const toggleRepeat = () => {
    setIsRepeating(!isRepeating);
    const audio = audioRef.current;
    if (audio) {
      audio.loop = !isRepeating;
    }
  }

  const handleEnded = () => {
    if (isRepeating) {
      audioRef.current?.play();
    } else {
      handleSkipForward();
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume);
      setIsMuted(false);
      if (audioRef.current) {
        audioRef.current.volume = prevVolume;
      }
    } else {
      setPrevVolume(volume);
      setVolume(0);
      setIsMuted(true);
      if (audioRef.current) {
        audioRef.current.volume = 0;
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div className='w-full'>
      <div className="flex items-center justify-center space-x-4 mb-2">
        <button onClick={onShuffleToggle} className={`text-muted-foreground hover:text-foreground ${isShuffling ? 'text-primary' : ''}`}>
          <Shuffle size={16} />
        </button>
        <button onClick={handleSkipBack} className="text-muted-foreground hover:text-foreground">
          <SkipBack size={16} />
        </button>
        <button onClick={togglePlay} className="p-1 rounded-full bg-foreground text-background hover:bg-foreground/90">
          {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
        </button>
        <button onClick={handleSkipForward} className="text-muted-foreground hover:text-foreground">
          <SkipForward size={16} />
        </button>
        <button onClick={toggleRepeat} className={`text-muted-foreground hover:text-foreground ${isRepeating ? 'text-primary' : ''}`}>
          <Repeat size={16} />
        </button>
      </div>
      <div className="flex-grow mx-4">
        <div className="w-3/4 flex mx-auto items-center space-x-2">
          <span className="text-xs text-muted-foreground w-8 text-right">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleTimeChange}
            className="flex-grow h-1 bg-secondary rounded-full appearance-none"
          />
          <span className="text-xs text-muted-foreground w-8">{formatTime(duration)}</span>
        </div>
      </div>
      </div>
     
      <div className="flex items-center space-x-2">
        <ListVideo className="text-base text-muted-foreground hover:text-foreground cursor-pointer" />
        <MonitorSmartphone className="text-base text-muted-foreground hover:text-foreground cursor-pointer" />
        <button onClick={toggleMute} className="text-muted-foreground hover:text-foreground">
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 h-1 bg-secondary rounded-full appearance-none"
        />
      </div>
      <audio ref={audioRef} src={playlist[currentSongIndex].src} />
    </div>
  );
};

export default MusicPlayer;