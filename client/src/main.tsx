import { createRoot } from "react-dom/client";
import App from "./App";
import { startDevelopmentRefreshAgent } from "./dev-refresh-agent";
import "./index.css";

startDevelopmentRefreshAgent();

createRoot(document.getElementById("root")!).render(<App />);
