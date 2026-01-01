import puter from "@heyputer/puter.js";
import { useState } from "react";
import AudioPlayerWrapper from "./components/AudioPlayerWrapper";

const App = () => {
  const [texts, setTexts] = useState<string>("");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit: (e: React.FormEvent) => void = async (e) => {
    e.preventDefault();
    setAudio(null);
    setLoading(true);
    if (!texts) {
      setLoading(false);
      return;
    }
    const audio = await puter.ai.txt2speech(texts);
    setAudio(audio);
    setLoading(false);
  };

  return (
    <div className="text-center space-y-3">
      <h2 className="text-3xl font-bold">Upload text document here</h2>
      <form action="" className="flex items-center gap-3 flex-col">
        <textarea
          required
          name=""
          onChange={(e) => setTexts(e.target.value)}
          value={texts}
          id=""
          className="border border-black/80 rounded w-full max-w-200 h-50"
        ></textarea>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? "Generating Audio..." : "Generate Audio"}
        </button>
      </form>
      <AudioPlayerWrapper audio={audio} />
    </div>
  );
};

export default App;
