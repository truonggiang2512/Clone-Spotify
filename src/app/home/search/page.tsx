import React from "react";

type Props = {};
interface Song {
  songId: number;
  image: string; // URL to the song image or album cover
  name: string; // Title of the song
  desc: string; // Description or lyrics snippet
  artist: string; // Name of the artist
  duration: number; // Duration of the song in seconds
  album: string;
  rating: number;
  playCount: number;
  releaseDate: string; // Release date in ISO format (e.g., '2023-08-17')
}

interface Genre {
  id: number;
  genreName: string; // Name of the genre (e.g., 'Rock', 'Pop')
  description?: string; // Optional description of the genre
  songs: Song[];
  genreImage: string;
}

interface Data {
  data: Genre[];
}

const SearchComp = (props: Props) => {
  const spotifyData: Data = {
    data: [
      {
        id: 1,
        genreName: "Rock",
        genreImage:
          "https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa",
        description:
          "Rock music is characterized by a strong rhythm and often revolves around guitars.",
        songs: [
          {
            songId: 101,
            image:
              "https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa",
            name: "Rock Anthem",
            desc: "An epic rock anthem with electrifying solos.",
            artist: "Rock Star",
            duration: 250, // 4 minutes and 10 seconds
            releaseDate: "2023-07-22",
            album: "Epic Rock",
            rating: 4.8, // Out of 5
            playCount: 1500000, // Number of times played
          },
          {
            songId: 102,
            image:
              "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
            name: "Classic Rock",
            desc: "A timeless classic rock track with powerful vocals.",
            artist: "Classic Band",
            duration: 210, // 3 minutes and 30 seconds
            releaseDate: "2022-09-10",
            album: "Greatest Hits",
            rating: 4.7, // Out of 5
            playCount: 1200000, // Number of times played
          },
        ],
      },
      {
        id: 2,
        genreImage:
          "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
        genreName: "Pop",
        description:
          "Pop music features catchy rhythms and simple lyrics, making it highly accessible.",
        songs: [
          {
            songId: 201,
            image: "https://example.com/image3.jpg",
            name: "Catchy Pop Hit",
            desc: "A chart-topping pop hit with an infectious chorus.",
            artist: "Pop Icon",
            duration: 180, // 3 minutes
            releaseDate: "2023-05-18",
            album: "Top Charts",
            rating: 4.9, // Out of 5
            playCount: 2000000, // Number of times played
          },
          {
            songId: 202,
            image: "https://example.com/image4.jpg",
            name: "Summer Vibes",
            desc: "A feel-good summer pop song perfect for the beach.",
            artist: "Summer Star",
            duration: 210, // 3 minutes and 30 seconds
            releaseDate: "2023-06-25",
            album: "Summer Hits",
            rating: 4.6, // Out of 5
            playCount: 1800000, // Number of times played
          },
        ],
      },
      {
        id: 3,
        genreName: "Jazz",
        genreImage:
          "https://i.scdn.co/image/ab67fb8200005caf194fec0fdc197fb9e4fe8e64",
        description:
          "Jazz music is known for its swing and blue notes, call and response vocals, and improvisation.",
        songs: [
          {
            songId: 301,
            image: "https://example.com/image5.jpg",
            name: "Smooth Jazz",
            desc: "A smooth jazz track perfect for relaxing.",
            artist: "Jazz Legend",
            duration: 300, // 5 minutes
            releaseDate: "2022-11-01",
            album: "Smooth Collection",
            rating: 4.9,
            playCount: 800000,
          },
          {
            songId: 302,
            image: "https://example.com/image6.jpg",
            name: "Classic Jazz",
            desc: "A classic jazz tune with incredible improvisation.",
            artist: "Classic Jazz Artist",
            duration: 240, // 4 minutes
            releaseDate: "2021-10-15",
            album: "Jazz Essentials",
            rating: 4.8,
            playCount: 600000,
          },
        ],
      },
      {
        id: 4,
        genreName: "Electronic",
        genreImage:
          "https://i.scdn.co/image/ab67fb8200005cafe3ace120cac714821f256c93",
        description:
          "Electronic music is created with electronic devices and technology, often featuring synthesized sounds and rhythms.",
        songs: [
          {
            songId: 401,
            image: "https://example.com/image7.jpg",
            name: "Electronic Pulse",
            desc: "An energetic electronic track with a pulsating beat.",
            artist: "EDM Master",
            duration: 220, // 3 minutes and 40 seconds
            releaseDate: "2024-01-01",
            album: "EDM Hits",
            rating: 4.7,
            playCount: 1000000,
          },
          {
            songId: 402,
            image: "https://example.com/image8.jpg",
            name: "Future Bass Anthem",
            desc: "A future bass anthem with captivating drops.",
            artist: "Future Bass Producer",
            duration: 210, // 3 minutes and 30 seconds
            releaseDate: "2023-12-15",
            album: "Future Sounds",
            rating: 4.8,
            playCount: 950000,
          },
        ],
      },
      {
        id: 5,
        genreName: "Hip Hop",
        genreImage:
          "https://i.scdn.co/image/ab67fb8200005caf66d545e6a69d0bfe8bd1e825",
        description:
          "Hip Hop is a genre characterized by rhythmic vocal style and beats, often with a focus on lyrics.",
        songs: [
          {
            songId: 501,
            image: "https://example.com/image9.jpg",
            name: "Hip Hop Hit",
            desc: "A top-charting hip hop track with a catchy beat.",
            artist: "Hip Hop Artist",
            duration: 200, // 3 minutes and 20 seconds
            releaseDate: "2023-03-10",
            album: "Hip Hop Classics",
            rating: 4.7,
            playCount: 1400000,
          },
          {
            songId: 502,
            image: "https://example.com/image10.jpg",
            name: "Rap Battle",
            desc: "A high-energy rap battle track with impressive lyrics.",
            artist: "Rap Genius",
            duration: 180, // 3 minutes
            releaseDate: "2022-12-05",
            album: "Rap Legends",
            rating: 4.6,
            playCount: 1300000,
          },
        ],
      },
      {
        id: 6,
        genreName: "Classical",
        genreImage:
          "https://i.scdn.co/image/ab67fb8200005caf4b42030ee01cf793663dbb73",
        description:
          "Classical music is known for its complex structure and orchestral arrangements, often composed for symphonies.",
        songs: [
          {
            songId: 601,
            image: "https://example.com/image11.jpg",
            name: "Symphony No. 5",
            desc: "A timeless classical symphony with grand orchestration.",
            artist: "Classical Composer",
            duration: 320, // 5 minutes and 20 seconds
            releaseDate: "2021-01-15",
            album: "Symphonic Masterpieces",
            rating: 4.9,
            playCount: 700000,
          },
          {
            songId: 602,
            image: "https://example.com/image12.jpg",
            name: "Nocturne in E-flat",
            desc: "A beautiful nocturne showcasing intricate piano work.",
            artist: "Piano Virtuoso",
            duration: 270, // 4 minutes and 30 seconds
            releaseDate: "2022-08-30",
            album: "Classical Elegance",
            rating: 4.8,
            playCount: 600000,
          },
        ],
      },
      {
        id: 7,
        genreName: "Reggae",
        genreImage:
          "https://i.scdn.co/image/ab67fb8200005caf3c7749936299ad94cce65d83",
        description:
          "Reggae music is known for its laid-back rhythms and socially conscious lyrics.",
        songs: [
          {
            songId: 701,
            image: "https://example.com/image13.jpg",
            name: "Reggae Vibes",
            desc: "A relaxed reggae track with a positive message.",
            artist: "Reggae Artist",
            duration: 230, // 3 minutes and 50 seconds
            releaseDate: "2023-04-25",
            album: "Island Grooves",
            rating: 4.6,
            playCount: 900000,
          },
          {
            songId: 702,
            image: "https://example.com/image14.jpg",
            name: "Dub Style",
            desc: "A classic dub reggae track with deep bass and echo effects.",
            artist: "Dub Master",
            duration: 240, // 4 minutes
            releaseDate: "2022-10-10",
            album: "Dub Essentials",
            rating: 4.7,
            playCount: 850000,
          },
        ],
      },
    ],
  };
  const colors = [
    "#FF6347",
    "#FFD700",
    "#8A2BE2",
    "#1E90FF",
    "#32CD32",
    "#DAA520",
    "#FF4500",
  ];

  interface GenreItemProps {
    genre: Genre;
    color: string;
  }
  const GenreItem: React.FC<GenreItemProps> = ({ genre, color }) => {
    return (
      <div
        className="relative h-32 w-full text-white rounded-md overflow-hidden  p-4"
        style={{ backgroundColor: color }}
      >
        <h2 className="text-2xl font-bold z-10">{genre.genreName}</h2>

        <img
          src={genre.genreImage}
          alt={`${genre.genreName} background`}
          className="absolute bottom-0 -right-3 w-24 h-24 object-cover transform rotate-25 "
        />
      </div>
    );
  };

  const GenreList = ({ data }: Data) => {
    return (
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {data.map((genre, index) => (
          <GenreItem
            key={genre.id}
            genre={genre}
            color={colors[index % colors.length]}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="my-4">
        <p className="text-2xl font-medium">Your top genres</p>
      </div>

      <GenreList data={spotifyData.data} />
    </div>
  );
};

export default SearchComp;
