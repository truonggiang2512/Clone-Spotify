'use client'
import { Button } from "@/components/ui/button";
import React from "react";
import { Play } from "lucide-react";
import Link from "next/link";

type Props = {};

const HomeComp = (props: Props) => {
  interface IData {
    id: number;
    img: string;
    name: string;
    desc: string;
  }
  const fakeData: IData[] = [
    {
      id: 1,
      img: "/Rectangle 32 (1).png",
      name: "Anh Trai Say Hi Tap 7",
      desc: "This is the description for item one. It provides some details about what makes this item unique or interesting.",
    },
    {
      id: 2,
      img: "/Rectangle 32 (2).png",
      name: "Anh Trai Say Hi Tap 10",
      desc: "This is the description for item two. It includes information about the features and benefits of this particular item.",
    },
    {
      id: 3,
      img: "/Rectangle 32 (3).png",
      name: "Anh Trai Say Hi Tap 12",
      desc: "This is the description for item three. It details the specifications and advantages of this item.",
    },
    {
      id: 4,
      img: "/Rectangle 32 (4).png",
      name: "Item Four",
      desc: "This is the description for item four. It highlights the key aspects and uses of the item.",
    },
    {
      id: 5,
      img: "/Rectangle 32 (5).png",
      name: "Item Five",
      desc: "This is the description for item five. It covers what makes this item stand out from others.",
    },
  ];

  return (
    <div>
      <div className="Playlist">
        <div className="flex items-center py-5">
          <h1 className="text-lg font-semibold md:text-2xl">Focus</h1>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 items-center justify-center rounded-lg shadow-sm">
          {fakeData.map((item) => (
            <Link href={`/playlist/${item.id}`} key={item.id}>
              <div className="group flex flex-col bg-black items-center gap-2 text-center w-full max-w-xs mx-auto">
                <div className="relative w-full">
                  <img
                    src={item.img}
                    className="w-full h-auto object-cover"
                    alt={item.name}
                  />
                  <button
                    className="absolute bottom-8 right-8 mx-auto bg-primary text-xs py-3 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => {
                      e.preventDefault(); 
                      console.log('Play button clicked');
                    }}
                  >
                    <Play className="text-black fill-current size-5" />
                  </button>
                </div>
                <div className="py-2 px-4 text-start w-full">
                  <p className="text-xs text-white font-medium line-clamp-2">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="Playlist">
        <div className="flex items-center py-5">
          <h1 className="text-lg font-semibold md:text-2xl">
            Spotify Playlists Show all
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 items-center justify-center rounded-lg shadow-sm">
          {fakeData.map((item) => (
            <Link href={`/playlist/${item.id}`} key={item.id}>
              <div className="group cursor-pointer flex flex-col bg-black items-center gap-2 text-center w-full max-w-xs mx-auto">
                <div className="relative w-full">
                  <img
                    src={item.img}
                    className="w-full h-auto object-cover"
                    alt={item.name}
                  />
                  <button
                    className="absolute bottom-8 right-8 mx-auto bg-primary text-xs py-3 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation when clicking the play button
                      // Add your play functionality here
                    }}
                  >
                    <Play className="text-black fill-current size-5" />
                  </button>
                </div>
                <div className="py-2 px-4 text-start w-full">
                  <p className="text-xs text-white font-medium line-clamp-2">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
