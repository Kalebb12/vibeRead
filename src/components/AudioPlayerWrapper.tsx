import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";

const AudioPlayerWrapper = ({ audio }: { audio: HTMLAudioElement | null }) => {
  if (!audio) return;

  return <AudioPlayer src={audio.src} className="max-w-150 mx-auto"  />;
};

export default AudioPlayerWrapper;
