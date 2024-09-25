"use client";

import { useParams } from "next/navigation";
import { songs, playlists, ISong } from "@/lib/songs";
import { ListVideo, Clock, Play, Heart } from "lucide-react";
import { useState } from "react";
import { useMusicContext } from "@/contexts/MusicContext";

// ... rest of the file remains unchanged ...
