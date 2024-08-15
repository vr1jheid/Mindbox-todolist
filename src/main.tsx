import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./Components/App/App.tsx";
import "./index.css";
import "./reset.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>
);
