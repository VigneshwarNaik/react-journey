# 🚀 Day 04 React Learning

## 📚 Topics Covered

* What is a Component in React
* Rules of Components
* JSX Basics
* React Project Structure
* Why Use Components
* Reusability in React
* Import and Export Components
* Props Introduction
* Passing Dynamic Data
* Recipe Card Project

---

## 📌 What is a Component?

A component is a **JavaScript function** that returns JSX.

```jsx id="r41"
function Header() {
  return <h1>Hello</h1>;
}
```

✔ Components help break UI into reusable parts.

Examples:

* Navbar
* Footer
* Card
* Sidebar
* Product Box

---

## 📌 Rules of Components

### ✅ 1. Component Name Must Start with Capital Letter

```jsx id="r42"
function Header() {}
```

### ✅ 2. Must Return JSX

```jsx id="r43"
return <h1>Hello</h1>;
```

### ✅ 3. One Parent Element Required

```jsx id="r44"
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

---

## 📌 Why Use Components?

Instead of writing everything in one file, React allows us to split UI into smaller parts.

✔ Clean Code
✔ Easy Maintenance
✔ Better Structure
✔ Reusable Code
✔ Faster Development

---

## 📌 Folder Structure

```bash id="r45"
src/
│── components/
│   │── Header.jsx
│   │── Info.jsx
│   │── Footer.jsx
│── Recipe.jsx
│── main.jsx
│── index.css
```

---

## 📌 Recipe Card Mini Project

### Header.jsx

```jsx id="r46"
function Header() {
  return (
    <header className="recipe-header">
      <h2>Masala Chai Recipe</h2>
      <p>Prep Time: 5 min | Cook Time: 10 min</p>
    </header>
  );
}

export default Header;
```

---

### Info.jsx

```jsx id="r47"
function Info() {
  return (
    <section className="recipe-details">
      <p>Serves: 2 people</p>
      <p>Difficulty: Easy</p>
      <p>Type: Beverage</p>
    </section>
  );
}

export default Info;
```

---

### Footer.jsx

```jsx id="r48"
function Footer() {
  return (
    <footer className="recipe-footer">
      <small>Tea By Harshit</small>
    </footer>
  );
}

export default Footer;
```

---

### Recipe.jsx

```jsx id="r49"
import Header from "./components/Header";
import Info from "./components/Info";
import Footer from "./components/Footer";

function Recipe() {
  return (
    <div className="container">
      <Header />
      <Info />
      <Footer />
    </div>
  );
}

export default Recipe;
```

---

### main.jsx

```jsx id="r50"
import { createRoot } from "react-dom/client";
import "./index.css";
import Recipe from "./Recipe";

const root = createRoot(document.getElementById("root"));

root.render(<Recipe />);
```

---

## 📌 What is Props?

Props means **Properties**.

Used to pass data from Parent Component to Child Component.

---

## Example

```jsx id="r51"
<Card name="Vigneshwar" />
<Card name="Rahul" />
<Card name="Anu" />
```

### Child Component

```jsx id="r52"
function Card(props) {
  return <h1>Hello {props.name}</h1>;
}
```

### Output

```bash id="r53"
Hello Vigneshwar
Hello Rahul
Hello Anu
```

---

## 📌 Reusability in React

One component can be used many times with different data.

```jsx id="r54"
<Card name="A" />
<Card name="B" />
<Card name="C" />
```

Used in:

* Netflix Movie Cards
* YouTube Video Cards
* Amazon Product Cards
* Student Cards

---

## 📌 JSX + JavaScript

```jsx id="r55"
let name = "Vigneshwar";

<h1>Hello {name}</h1>;
```

### Output

```bash id="r56"
Hello Vigneshwar
```

---

## 📌 Key Learnings Day 04

✔ Components are functions
✔ JSX = HTML + JavaScript
✔ Use separate files for clean code
✔ Props pass dynamic data
✔ Components are reusable
✔ React UI becomes easier to manage

---

## 🎯 Summary

React helps developers build websites using reusable components and dynamic data.

---

## 🚀 Next Topic

➡️ **Creating Reusable Components Using Props**

---

## ⭐ Support

If this repository helped you, give it a **Star ⭐**

---

## 🔥 Day 04 Completed Successfully
