import React, { createContext } from "react";

type ReaderContextType = {
  // audio: HTMLAudioElement | null;
  // setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement | null>>;
  handleTextChunk: (texts: string) => string[];
};

const ReaderContext = createContext<ReaderContextType | null>(null);

export default ReaderContext;