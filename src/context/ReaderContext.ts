import React, { createContext } from "react";

type ReaderContextType = {
  audioUrl: string[];
  setAudioUrl: React.Dispatch<React.SetStateAction<string[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  generateAudo: (texts: string) => Promise<void>;
};

const ReaderContext = createContext<ReaderContextType | null>(null);

export default ReaderContext;