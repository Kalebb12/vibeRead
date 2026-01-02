import ReaderContext from "../context/ReaderContext";
import { chunkText } from "../utils/chunkText";

export const ReaderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const handleTextChunk = (texts: string): string[] => {
    return chunkText(texts);
  };
  return (
    <ReaderContext.Provider value={{ handleTextChunk }}>
      {children}
    </ReaderContext.Provider>
  );
};

export default ReaderContextProvider;
