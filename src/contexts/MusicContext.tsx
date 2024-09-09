'use client'
import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import { ISong, songs } from '@/lib/songs';

interface MusicContextType {
  currentSong: ISong | null;
  setCurrentSong: (song: ISong) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  isShuffling: boolean;
  setIsShuffling: (isShuffling: boolean) => void;
  isRepeating: boolean;
  setIsRepeating: (isRepeating: boolean) => void;
  skipToNext: () => void;
  skipToPrevious: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<ISong | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const setCurrentSongAndPlay = (song: ISong) => {
    console.log("Setting current song:", song);
    setCurrentSong(song);
    setIsPlaying(true);
    if (audioRef.current) {
      console.log("Setting audio src:", song.src);
      audioRef.current.src = song.src;
      audioRef.current.play().catch(error => console.error("Error playing audio:", error));
    }
  };

  useEffect(() => {
    const savedSong = localStorage.getItem('currentSong');
    if (savedSong) {
      setCurrentSong(JSON.parse(savedSong));
    }
  }, []);

  useEffect(() => {
    if (currentSong) {
      localStorage.setItem('currentSong', JSON.stringify(currentSong));
    }
  }, [currentSong]);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.src;
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong, isPlaying]);

  const skipToNext = () => {
    console.log("Skipping to next song");
    if (!currentSong) {
      console.log("No current song, setting to first song in the list");
      const firstSong = songs[0];
      console.log("Skipping to:", firstSong);
      setCurrentSongAndPlay(firstSong);
      return;
    }
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    console.log("Current index:", currentIndex);
    let nextIndex;
    if (isShuffling) {
      do {
        nextIndex = Math.floor(Math.random() * songs.length);
      } while (nextIndex === currentIndex && songs.length > 1);
    } else {
      nextIndex = (currentIndex + 1) % songs.length;
    }
    console.log("Next index:", nextIndex);
    const nextSong = songs[nextIndex];
    console.log("Skipping to:", nextSong);
    setCurrentSongAndPlay(nextSong);
  };

  const skipToPrevious = () => {
    console.log("Skipping to previous song");
    if (!currentSong) {
      console.log("No current song, setting to last song in the list");
      const lastSong = songs[songs.length - 1];
      console.log("Skipping to:", lastSong);
      setCurrentSongAndPlay(lastSong);
      return;
    }
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    console.log("Current index:", currentIndex);
    let previousIndex;
    if (isShuffling) {
      do {
        previousIndex = Math.floor(Math.random() * songs.length);
      } while (previousIndex === currentIndex && songs.length > 1);
    } else {
      previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    }
    console.log("Previous index:", previousIndex);
    const previousSong = songs[previousIndex];
    console.log("Skipping to:", previousSong);
    setCurrentSongAndPlay(previousSong);
  };

  return (
    <MusicContext.Provider value={{
      currentSong,
      setCurrentSong: setCurrentSongAndPlay,
      isPlaying,
      setIsPlaying,
      isShuffling,
      setIsShuffling,
      isRepeating,
      setIsRepeating,
      audioRef,
      skipToNext,
      skipToPrevious
    }}>
      {children}
      <audio ref={audioRef} />
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusicContext must be used within a MusicProvider');
  }
  return context;
};