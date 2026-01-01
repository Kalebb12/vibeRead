// import { useRef, useState } from "react";

// const AudioPlayer = ({ audio }: { audio: HTMLAudioElement | null }) => {
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);

//   const handlePlay: () => void = () => {
//     if (!audio) return;
//     console.log("audio", audio);
//     audio.play();
//     console.log("ran");
//   };

//   const togglePlay = () => {
//     if (!audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }

//     setIsPlaying(!isPlaying);
//   };

//   const setSpeed = (rate: number) => {
//     if (audioRef.current) {
//       audioRef.current.playbackRate = rate;
//     }
//   };

//   return (
//     <div>
//       {audio && (
//         <div>
//           <audio ref={audioRef} src={audio?.src}></audio>
//           <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
//           <button onClick={() => setSpeed(0.5)}>0.5x</button>
//           <button onClick={() => setSpeed(1)}>1x</button>
//           <button onClick={() => setSpeed(1.5)}>1.5x</button>
//           <button onClick={() => setSpeed(2)}>2x</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioPlayer;
import "react-h5-audio-player/lib/styles.css";
import React from "react";
import AudioPlayer from "react-h5-audio-player";

const AudioPlayerWrapper = ({ audio }: { audio: HTMLAudioElement | null }) => {
  if (!audio) return;

  return <AudioPlayer src={audio.src} className="max-w-150 mx-auto"/>;
};

export default AudioPlayerWrapper;
