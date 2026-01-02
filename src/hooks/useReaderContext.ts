import { useContext } from "react";
import ReaderContext from "../context/ReaderContext";

export const useReaderContext = () => {
  const context = useContext(ReaderContext);
  if (!context) {
    throw new Error("useReaderContext must be used within a ReaderContextProvider");
  }
  return context;
}