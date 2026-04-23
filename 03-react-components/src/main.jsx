// Import createRoot from react-dom/client
import { createRoot } from "react-dom/client";

// Import CSS file
import "./index.css";

// Select root element from index.html
const root = createRoot(document.getElementById("root"));

/* =========================
   Child Component 1
   Navbar Component
========================= */
function Navbar() {
  return (
    <nav className="navbar">
      <img
        src="./src/assets/react.svg"
        alt="React Logo"
        className="logo"
      />
      <h1>Rules of JSX</h1>
    </nav>
  );
}

/* =========================
   Child Component 2
   Rules List Component
========================= */
function RulesList() {
  return (
    <ul className="rules">
      <li>Must have one parent element</li>
      <li>Close all tags properly</li>
      <li>Use className instead of class</li>
      <li>Use camelCase for attributes</li>
      <li>Use {} for JavaScript</li>
    </ul>
  );
}

/* =========================
   Child Component 3
   Footer Component
========================= */
function Footer() {
  return <p className="footer">Keep Learning React 🚀</p>;
}

/* =========================
   Parent Component
========================= */
function App() {
  return (
    <div className="card">
      <Navbar />
      <RulesList />
      <Footer />
    </div>
  );
}

/* =========================
   Render Parent Component
========================= */
root.render(<App />);