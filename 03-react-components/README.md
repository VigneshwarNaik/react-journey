# 🚀 Day 3 - React Components 

Welcome to the **Day 3** section of my **React Journey** repository.

Today I built a small React project using **Components** and revised important **JSX Rules**.

This project helped me understand how React applications are divided into reusable parts like Navbar, Content, and Footer.

---

# 📌 What I Learned Today

* What is a React Component
* Function Components
* Parent and Child Components
* Reusability of Components
* Fragment in React
* JSX Rules Revision
* Rendering Components using `root.render()`
* Importing CSS in React
* Creating clean UI using components

---

# 🧠 What is a Component?

A Component is a **JavaScript function** that returns JSX.

JSX looks like HTML but works inside JavaScript.

## Example

```jsx id="r31"
function Welcome() {
  return <h1>Hello React</h1>;
}
```

---

# ⚡ Why Components?

Without Components:

* Large messy code
* Hard to maintain
* Repeated HTML

With Components:

* Clean structure
* Reusable UI
* Easy maintenance
* Better readability

---

# 🧱 Project Structure

```bash id="r32"
03-react-components/
│── src/
│   ├── main.jsx
│   ├── index.css
│   └── assets/
│       └── react.svg
│── index.html
│── package.json
│── README.md
```

---

# 📌 Components Used in This Project

## 1️⃣ Navbar Component

Displays logo and heading.

```jsx id="r33"
function Navbar() {
  return (
    <nav>
      <img src="react.svg" />
      <h1>Rules of JSX</h1>
    </nav>
  );
}
```

---

## 2️⃣ RulesList Component

Displays JSX rules list.

```jsx id="r34"
function RulesList() {
  return (
    <ul>
      <li>Use one parent element</li>
      <li>Close tags properly</li>
    </ul>
  );
}
```

---

## 3️⃣ Footer Component

Displays final message.

```jsx id="r35"
function Footer() {
  return <p>Keep Learning React 🚀</p>;
}
```

---

## 4️⃣ App Component (Parent)

Combines all child components.

```jsx id="r36"
function App() {
  return (
    <div>
      <Navbar />
      <RulesList />
      <Footer />
    </div>
  );
}
```

---

# 📌 Fragment in React

Fragment allows multiple JSX elements without adding extra `<div>` to the DOM.

## Example

```jsx id="r50"
<>
  <h1>Hello</h1>
  <p>Welcome</p>
</>
```

## Why Use Fragment?

* Avoid unnecessary div tags
* Clean HTML structure
* Better DOM performance

---

# 📌 Parent and Child Components

In this project:

* `App` = Parent Component
* `Navbar` = Child Component
* `RulesList` = Child Component
* `Footer` = Child Component

---

# 🔁 Reusability of Components

Create once and use many times.

```jsx id="r37"
<Card />
<Card />
<Card />
```

This saves time and code.

---

# 📚 JSX Rules Practiced

## ✅ 1. One Parent Element

```jsx id="r38"
<div>
  <h1>Hello</h1>
  <p>Hi</p>
</div>
```

---

## ✅ 2. Use `className`

```jsx id="r39"
<div className="box"></div>
```

---

## ✅ 3. Close Tags

```jsx id="r40"
<img />
<input />
```

---

## ✅ 4. JavaScript in Curly Braces

```jsx id="r41"
const name = "Vigneshwar";

<h1>Hello {name}</h1>;
```

---

# 🎨 CSS Styling

Used `index.css` for:

* Card design
* Navbar styling
* Rules list styling
* Footer styling
* Responsive layout

---

# 💻 Output

This project shows:

* React Logo
* Rules of JSX Title
* JSX Rules List
* Footer Message

---

# 🔥 Why This Project is Important

This project teaches the real React development style:

* Divide UI into components
* Reuse code
* Keep files clean
* Build scalable applications

---

# 📂 What This Folder Covers

Inside this folder:

* React Components
* Parent Child Components
* Fragment
* JSX Rules
* CSS Styling
* Real Mini Project

---

# 🎯 My Goal

To master Components because they are the heart of React.

---

# 🚀 Next Step

After this topic:

➡️ **Introduction to Props**

Props help us pass data from one component to another component and make components reusable.

---

# ⭐ Support

If this repository helps you, please give it a star ⭐

---

# 👨‍💻 Author

**Vigneshwar Naik**
Aspiring Frontend Developer
