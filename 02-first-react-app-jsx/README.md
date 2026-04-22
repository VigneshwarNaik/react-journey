# 🚀 First React App & JSX

Welcome to the **First React App & JSX** section of my **React Journey** repository.

This folder contains my second day of React learning, where I created my first React application using **Vite**, understood the project structure, and learned the basics of **JSX**.

---

# 📌 What I Learned in Day 2

- Creating a React project using **Vite**
- Understanding basic project files
- Writing my first React code
- Using `createRoot()`
- Rendering UI with `root.render()`
- Understanding JSX syntax
- Using variables inside JSX
- Applying CSS styling

---

# ⚡ React Project Setup

## Command Used

```bash
npm create vite@latest
```

This command creates a modern React project quickly.

---

# 📂 Project Structure

```bash
02-first-react-app-jsx/
│── src/
│   ├── main.jsx
│   └── index.css
│── index.html
│── package.json
```

---

# 🧠 main.jsx Code

```jsx
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const name = "Vigneshwar";

root.render(
  <div>
    <h1>Hello React</h1>
    <h1>Hi {name}</h1>
  </div>
);
```

---

# 📌 Code Explanation

## `import { createRoot }`

Imports React rendering function.

## `document.getElementById("root")`

Selects root HTML element.

## `createRoot()`

Connects React with HTML page.

## `root.render()`

Displays JSX content on browser screen.

## `{name}`

Used to show JavaScript variable inside JSX.

---

# 🧠 What is JSX?

JSX stands for **JavaScript XML**.

It allows us to write HTML-like code inside JavaScript.

## Example

```jsx
<h1>Hello React</h1>
```

---

# 📄 index.html Code

```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

## Explanation

- `root` is the container where React app loads.
- `main.jsx` is the starting file of React project.

---

# 🎨 CSS Styling (index.css)

```css
body {
  background-color: blueviolet;
  color: black;
  font-family: sans-serif;
}
```

## Output

- Purple background
- Black text
- Clean font style

---

# 📚 Important Rules of JSX

## 1. Use One Parent Element

```jsx
<div>
  <h1>Hello</h1>
  <p>React</p>
</div>
```

## 2. Use Curly Braces for Variables

```jsx
{name}
```

## 3. Close Tags Properly

```jsx
<img />
<input />
```

---

# 💡 What I Practiced

- Render text using React
- Use variables inside JSX
- Connect React with root div
- Apply CSS styling
- Understand first React app flow

---

# 📂 What This Folder Covers

Inside this folder:

- First React App
- JSX Basics
- createRoot()
- render()
- Variables in JSX
- index.html connection
- CSS styling

---

# 🎯 My Goal

To build a strong React foundation through daily practice.

---

# 🚀 Next Step

After this topic:

➡️ **React Components**

---

# ⭐ Support

If this repository helps you, please give it a star ⭐

---

# 👨‍💻 Author

**Vigneshwar Naik**  
Aspiring Frontend Developer
