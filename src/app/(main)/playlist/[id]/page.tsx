'use client'

import { useParams } from 'next/navigation'
import { songs, playlists, ISong } from '@/lib/songs'
import { ListVideo, Clock, Play, Heart, Pause } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useMusicContext } from '@/contexts/MusicContext'

export default function PlaylistDetail() {
  const params = useParams()
  const id = Number(params?.id)
  const playlist = playlists.find(p => p.id === id)
  const playlistSongs = songs.filter(song => song.playlistId === id)
  const [isLiked, setIsLiked] = useState(false)
  const { currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef } = useMusicContext()

  useEffect(() => {
    // Reset playing state when component mounts or playlist changes
    setIsPlaying(false)
  }, [id, setIsPlaying])

  if (!playlist) {
    return <div>Playlist not found</div>
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  const handlePlaySong = (song: ISong) => {
    if (currentSong && currentSong.id === song.id) {
      // If the clicked song is already the current song, toggle play/pause
      setIsPlaying(!isPlaying)
    } else {
      // If it's a new song, set it as current and start playing
      setCurrentSong(song)
      setIsPlaying(true)
      if (audioRef.current) {
        audioRef.current.src = song.audio;
        audioRef.current.play();
      }
    }
  }

  const handlePlayAll = () => {
    if (playlistSongs.length > 0) {
      const firstSong = playlistSongs[0];
      setCurrentSong(firstSong)
      setIsPlaying(true)
      if (audioRef.current) {
        audioRef.current.src = firstSong.audio;
        audioRef.current.play();
      }
    }
  }

  return (
    <div className="p-6">
      <div className="flex items-end gap-6 mb-6">
        <div className="w-52 h-52 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
          <ListVideo className="h-24 w-24 text-white opacity-70" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase mb-2">Playlist</p>
          <h1 className="text-6xl font-bold mb-4">{playlist.name}</h1>
          <p className="text-sm text-gray-400">{playlistSongs.length} songs</p>
        </div>
      </div>
      <div className="mb-6">
        <button 
          onClick={handlePlayAll}
          className="bg-green-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-green-400 transition-colors mr-4"
        >
          <Play className="inline-block mr-2" size={20} />
          Play
        </button>
        <button onClick={toggleLike} className="text-gray-400 hover:text-white transition-colors">
          <Heart className={`inline-block ${isLiked ? 'text-green-500 fill-current' : ''}`} size={32} />
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800 text-left text-sm text-gray-400">
            <th className="pb-2 w-12">#</th>
            <th className="pb-2">Title</th>
            <th className="pb-2">Album</th>
            <th className="pb-2 text-right">
              <Clock className="inline-block" size={16} />
            </th>
          </tr>
        </thead>
        <tbody>
          {playlistSongs.map((song: ISong, index: number) => (
            <tr 
              key={song.id} 
              className="group hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={() => handlePlaySong(song)}
            >
              <td className="py-3 w-12">
                {currentSong && currentSong.id === song.id && isPlaying ? (
                  <Pause className="text-green-500" size={16} />
                ) : (
                  <>
                    <span className="text-gray-400 group-hover:hidden">{index + 1}</span>
                    <Play className="text-white hidden group-hover:inline-block" size={16} />
                  </>
                )}
              </td>
              <td className="py-3">
                <div className={`font-semibold ${currentSong && currentSong.id === song.id ? 'text-green-500' : ''}`}>
                  {song.title}
                </div>
                <div className="text-sm text-gray-400">{song.artist}</div>
              </td>
              <td className="py-3 text-sm text-gray-400">Album Name</td>
              <td className="py-3 text-right text-sm text-gray-400">{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}