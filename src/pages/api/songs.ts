// import type { NextApiRequest, NextApiResponse } from 'next'

// export type Song = {
//   id: number
//   title: string
//   artist: string
//   album: string
//   src: string
//   coverArt: string
// }

// const mockSongs: Song[] = [
//   {
//     id: 1,
//     title: "Cứ Để Anh Ta Rời Đi",
//     artist: "Anh Trai Say Hi",
//     src: "/anhTraiTap7/CỨ ĐỂ ANH TA RỜI ĐI (feat. Dương Domic, Quang Hùng MasterD, Lou Hoàng, Song Luân & Bảo Anh).mp3",
//     playlistId: 1,
//     duration: "5:55" // Add duration for each song
//   },
//   {
//     id: 2,
//     title: "Ngân Nga",
//     artist: "Anh Trai Say Hi",
//     src: "/anhTraiTap7/NGÂN NGA (feat. Isaac, HURRYKNG, Negav, Gin Tuấn Kiệt & Vũ Thảo My).mp3",
//     playlistId: 1,
//     duration: "8:02"
//   },
//   {
//     id: 3,
//     title: "Ngáo Ngơ",
//     artist: "Anh Trai Say Hi",
//     src: "/anhTraiTap7/NGÁO NGƠ (feat. HIEUTHUHAI, ERIK, Anh Tú Atus, JSOL & Orange).mp3",
//     playlistId: 1,
//     duration: "6:30"
//   },
//   {
//     id: 4,
//     title: "Regret",
//     artist: "Anh Trai Say Hi",
//     src: "/anhTraiTap7/REGRET (feat. Quân A.P, Pháp Kiều, Quang Trung, Ali Hoàng Dương & Lâm Bảo Ngọc).mp3",
//     playlistId: 1,
//     duration: "6:30"
//   },
//   {
//     id: 5,
//     title: "Anh Trai Nước Việt",
//     artist: "Anh Trai Say Hi",
//     src: "/anhTraiTap10/ANH TRAI NƯỚC VIỆT (feat. ERIK, Đức Phúc, Quân A.P, Jsol & Hùng Huỳnh).mp3",
//     playlistId: 10,
//     duration: "6:30"
//   },
//   {
//     id: 6,
//     title: "Bao Lời Con Chưa Nói",
//     artist: "Anh Trai Say Hi",
//     src: "/anhTraiTap10/BAO LỜI CON CHƯA NÓI (feat. Dương Domic, Anh Tú Atus, Song Luân, Quang Trung & Anh Tú).mp3",
//     playlistId: 10,
//     duration: "6:30"
//   },
//   {
//     id: 7,
//     title: "Chân Thành",
//     artist: "Anh Trai Say Hi",
//     src: "/anhTraiTap10/CHÂN THÀNH (feat. RHYDER, Captain, Quang Hùng MasterD, WEAN & Ali Hoàng Dương).mp3",
//     playlistId: 10,
//     duration: "6:30"
//   },
//   {
//     id: 8,  
//     title: "Sau Đêm Nay",
//     artist: "Anh Trai Say Hi",
//     src: "/anhTraiTap10/SAU ĐÊM NAY (feat. ERIK, Đức Phúc, Quân A.P, Jsol & Hùng Huỳnh).mp3",
//     playlistId: 10,
//     duration: "6:30"
//   },
//   {
//     id: 9,
//     title: "Walk",
//     artist: "Anh Trai Say Hi",
//     src: "/anhTraiTap10/WALK (feat. HURRYKNG, HIEUTHUHAI, Negav, Pháp Kiều & Isaac).mp3",
//     playlistId: 10,
//     duration: "6:30"
//   },
// ];

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Song[]>
// ) {
//   res.status(200).json(mockSongs)
// }