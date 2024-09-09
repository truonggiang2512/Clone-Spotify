"use client"
import "../globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  HomeIcon,
  LibraryBig,
  LineChart,
  Menu,
  MessageSquareHeart,
  Package,
  Package2,
  Search,
  ShoppingCart,
  SquarePlus,
  Users,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Play,
  ListVideo,
  MonitorSmartphone,
  Volume2,
  Heart,
  PictureInPicture2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from 'react';
import MusicPlayer from '@/components/MusicPlayer';
import { ISong } from '@/lib/songs';
import { useRouter } from 'next/navigation';
import { useMusicContext } from '@/contexts/MusicContext';
import PlaylistList from '@/components/PlaylistList';
import { songs } from '@/lib/songs';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const isLogin: boolean = false;
  const [isLiked, setIsLiked] = useState(false);
  const [playlist, setPlaylist] = useState<ISong[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isShuffling, setIsShuffling] = useState(false);
  const { currentSong } = useMusicContext();

  useEffect(() => {
    // Use the imported songs data directly
    setPlaylist(songs);
    setIsLoading(false);
  }, []);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSongChange = (index: number) => {
    setCurrentSongIndex(index);
  };

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="dark h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-56 lg:w-72 bg-black">
          <div className="flex-shrink-0 h-14 border-b border-gray-800 px-4 flex items-center">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <img src="/Rectangle 12.png" className="h-14 w-30" alt="" />
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* Sidebar content */}
            <nav className="px-2 pt-4 space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/home/search"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
              >
                <Search className="h-4 w-4" />
                Search
              </Link>
              <Link
                href="/home/urLibrary"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
              >
                <LibraryBig className="h-4 w-4" />
                Your Library
              </Link>
            </nav>
          </div>
          <div className="p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {!isLogin && (
            <header className="flex-shrink-0 h-14 bg-muted/40 border-b border-gray-800 px-4 flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Package2 className="h-6 w-6" />
                      <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <HomeIcon className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        6
                      </Badge>
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Package className="h-5 w-5" />
                      Products
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Users className="h-5 w-5" />
                      Customers
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      Analytics
                    </Link>
                  </nav>
                  <div className="mt-auto">
                    <Card>
                      <CardHeader>
                        <CardTitle>Upgrade to Pro</CardTitle>
                        <CardDescription>
                          Unlock all features and get unlimited access to our
                          support team.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button size="sm" className="w-full">
                          Upgrade
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </SheetContent>
              </Sheet>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                  </div>
                </form>
              </div>
              <div className="flex gap-2">
                <Link href="/register">
                  <Button variant="ghost">Sign up</Button>
                </Link>
                <Link href="/login">
                  <Button>Log in</Button>
                </Link>
              </div>
            </header>
          )}
          <main className="flex-1 overflow-y-auto p-4 lg:p-6">
            {children}
          </main>
        </div>
      </div>

      {/* Play bar */}
      <div className="h-24 bg-gradient-to-b from-background to-background/90 border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto h-full flex items-center px-4">
          {currentSong ? (
            <>
              <div className="flex items-center w-1/4">
                <div>
                  <h1 className="text-sm text-foreground tracking-wide">
                    {currentSong.title}
                  </h1>
                  <h2 className="text-xs text-muted-foreground tracking-wide">
                    {currentSong.artist}
                  </h2>
                </div>
                <div className="flex ml-4 items-center">
                  <button onClick={toggleLike} className="bg-transparent border-none cursor-pointer">
                    <Heart 
                      className={`size-5 ${isLiked ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                      fill={isLiked ? 'currentColor' : 'none'}
                    />
                  </button>
                  <PictureInPicture2 className="size-5 ml-2 text-muted-foreground hover:text-foreground"/>  
                </div>
              </div>
              <div className="flex-1">
                <MusicPlayer 
                  playlist={playlist} 
                  currentSongIndex={currentSongIndex} 
                  onSongChange={handleSongChange} 
                  isShuffling={isShuffling} 
                  onShuffleToggle={toggleShuffle} 
                />
              </div>
            </>
          ) : (
            <div>No song selected</div>
          )}
        </div>
      </div>
    </div>
  );
}
