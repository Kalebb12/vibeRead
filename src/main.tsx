import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ReaderContextProvider from "./components/ReaderContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReaderContextProvider>
      <App />
    </ReaderContextProvider>
  </StrictMode>
);
