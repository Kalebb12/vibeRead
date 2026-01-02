import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";

const AudioPlayerWrapper = ({ audioUrl }: { audioUrl: string[] }) => {
  return (
    <div>
      {audioUrl.map((url) => {
        return <AudioPlayer src={url} className="max-w-150 mx-auto" />;
      })}
    </div>
  );
};

export default AudioPlayerWrapper;
