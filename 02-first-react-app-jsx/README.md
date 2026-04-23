# 🚀 First React App & JSX

Welcome to the **Day 2** section of my **React Journey** repository.

This folder contains my second day of React learning, where I created my first React application using **Vite** and learned the fundamentals of **JSX**, `createRoot()`, and `root.render()`.

---

# 📌 What I Learned in Day 2

* Creating a React project using **Vite**
* Running React app on localhost
* Understanding project folder structure
* Role of `index.html`
* Role of `main.jsx`
* Understanding `createRoot()`
* Rendering UI using `root.render()`
* Basics of JSX
* Using JavaScript variables inside JSX
* Applying CSS styling

---

# ⚡ Create React App Using Vite

## Commands Used

```bash id="7x3jpw"
npm create vite@latest
cd project-name
npm install
npm run dev
```

## Explanation

* `npm create vite@latest` → Creates React project
* `npm install` → Installs required packages
* `npm run dev` → Starts development server

---

# 🌐 Localhost Server

After running the project:

```text id="sn4b3l"
http://localhost:5173
```

## Meaning

* `localhost` = Your computer
* `5173` = Port number

This is where the React app runs.

---

# 📂 Project Structure

```bash id="2sqvt9"
02-first-react-app-jsx/
│── src/
│   ├── main.jsx
│   ├── index.css
│   └── assets/
│── index.html
│── package.json
│── notes.md
│── README.md
```

---

# 📄 index.html

```html id="9shgby"
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

## Explanation

* `root` is the container where React loads the app.
* `main.jsx` is the entry file.

---

# 🧠 main.jsx Code

```jsx id="ljyp2m"
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

# 🏠 Easy Real-Life Example of createRoot()

Imagine building a new house.

* Empty land = `<div id="root"></div>`
* Father starts project = `createRoot()`
* Constructor = `root`
* Building house = `root.render()`
* Final house = UI on browser

This makes React easy to remember.

---

# 🧠 What is JSX?

JSX stands for **JavaScript XML**.

It allows us to write HTML-like code inside JavaScript.

## Example

```jsx id="tqj5nr"
<h1>Hello React</h1>
```

React converts JSX into JavaScript behind the scenes.

---

# 🔥 Why JSX is Useful

* Easy to read
* Looks like HTML
* Supports JavaScript
* Faster UI development
* Cleaner code

---

# 📚 Important Rules of JSX

## 1. Use One Parent Element

```jsx id="jlwm0x"
<div>
  <h1>Hello</h1>
  <h2>Hi</h2>
</div>
```

---

## 2. Use Curly Braces for JavaScript

```jsx id="6e2tx1"
{name}
```

---

## 3. Use `className` Instead of `class`

```jsx id="6y7g4m"
<h1 className="title">Hello</h1>
```

---

## 4. Close Tags Properly

```jsx id="9p8jq3"
<img />
<input />
```

---

# 🎨 CSS Styling

```css id="gh8m31"
body {
  background-color: blueviolet;
  color: black;
  font-family: sans-serif;
}
```

---

# 💡 What I Practiced

* Created first React project
* Rendered content using React
* Used variables inside JSX
* Applied CSS styling
* Understood React file structure
* Learned JSX syntax

---

# 📂 What This Folder Covers

Inside this folder:

* First React App
* JSX Basics
* createRoot()
* root.render()
* Variables in JSX
* CSS Styling
* Project Structure

---

# 🎯 My Goal

To build a strong React foundation through daily hands-on practice.

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
