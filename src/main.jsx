import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import "./index.css"
const rootEl = document.getElementById("root");

const root = createRoot(rootEl);


root.render(<Home />);
