import { useState } from "react";
import ReaderContext from "../context/ReaderContext";
import { chunkText } from "../utils/chunkText";
import puter from "@heyputer/puter.js";

export const ReaderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const generateAudo = async (texts: string) => {
    setLoading(true);
    setAudioUrl([]);
    try {
      const chunks = chunkText(texts);

      for (const chunk of chunks) {
        const audio = await puter.ai.txt2speech(chunk);
        // Ensure you get a valid URL string from the audio object
        setAudioUrl((prev) => [...prev, audio.src]);
      }
    } catch (error) {
      console.error("Error generating audio:", error);
      alert("Failed while reading text.");
    } finally {
      setLoading(false);
    }
  };

  const [audioUrl, setAudioUrl] = useState<string[]>([]);
  return (
    <ReaderContext.Provider
      value={{
        audioUrl,
        setAudioUrl,
        generateAudo,
        loading,
        setLoading,
      }}
    >
      {children}
    </ReaderContext.Provider>
  );
};

export default ReaderContextProvider;
