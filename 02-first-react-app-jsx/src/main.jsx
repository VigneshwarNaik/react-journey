// Import createRoot function from react-dom/client package
import { createRoot } from "react-dom/client";

// Select HTML element with id="root" and connect React to it
const root = createRoot(document.getElementById("root"));

// Create a JavaScript variable
const name = "Vigneshwar";

// Render JSX content to the browser screen
root.render(
  // Parent container (JSX must have one parent element)
  <div>
    
    {/* Display static heading */}
    <h1>Hello React</h1>

    {/* Display dynamic heading using variable */}
    <h1>Hi {name}</h1>

  </div>
);