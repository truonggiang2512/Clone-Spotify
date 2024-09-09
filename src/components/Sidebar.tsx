import Link from "next/link";
import {
  Bell,
  HomeIcon,
  LibraryBig,
  Search,
  SquarePlus,
  MessageSquareHeart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Sidebar() {
  return (
    <div className="hidden border-r bg-black md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        {/* Sidebar content */}
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold"
          >
            <img
              src="/Rectangle 12.png"
              className="h-14 w-30"
              alt="Logo"
            />
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="ml-auto h-8 w-8"
          >
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 divide-y space-y-4">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/search"
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
            >
              <Search className="h-4 w-4" />
              Search
            </Link>
            <Link
              href="/urLibrary"
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
            >
              <LibraryBig className="h-4 w-4" />
              Your Library
            </Link>
          </nav>
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <SquarePlus className="h-4 w-4" />
              Create Playlist
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <MessageSquareHeart className="h-4 w-4" />
              Liked Songs
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our
                support team.
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
    </div>
  );
}