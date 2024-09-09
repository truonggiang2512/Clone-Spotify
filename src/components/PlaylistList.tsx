import Link from 'next/link';
import { playlists } from '@/lib/songs';

export default function PlaylistList() {
  return (
    <div>
      <h2>Your Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <Link href={`/home/playlist/${playlist.id}`}>
              {playlist.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}