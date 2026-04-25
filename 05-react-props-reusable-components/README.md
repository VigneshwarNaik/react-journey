# 🚀 React Day-05 

Welcome to **Day-05 of my React Journey** 🎯
Today I learned **Props**, **Reusable Components**, **Props Destructuring**, and how React builds dynamic UI.

---

## 📚 Topics Covered

* What are Props
* Passing Data Parent to Child
* Reusable Components
* Props Destructuring
* Dynamic UI with Props
* Project Structure
* CSS Concepts Used
* Why Props are Important

---

## 📌 What are Props?

**Props = Properties**

Props are used to pass data from **Parent Component** to **Child Component**.

### Example

```jsx id="rd51"
<RecipeCard RecipeName="Dosa" />
```

Here:

* `RecipeCard` = Child Component
* `RecipeName="Dosa"` = Prop

Props make components dynamic.

---

## 📌 Parent to Child Communication

```text id="rd52"
main.jsx  → Parent
Recipe.jsx → Child
```

Parent sends data:

```jsx id="rd53"
<RecipeCard RecipeName="Tea" Time="10 min" />
```

Child receives:

```jsx id="rd54"
function RecipeCard(props) {
  return <h1>{props.RecipeName}</h1>;
}
```

---

## 📌 Reusable Components

Write once, use many times.

```jsx id="rd55"
<RecipeCard RecipeName="Tea" />
<RecipeCard RecipeName="Coffee" />
<RecipeCard RecipeName="Dosa" />
```

Same design, different data.

---

## 📌 Props Destructuring

Instead of:

```jsx id="rd56"
function RecipeCard(props)
```

Use:

```jsx id="rd57"
function RecipeCard({ RecipeName, Time, serving })
```

Then directly use:

```jsx id="rd58"
<h1>{RecipeName}</h1>
<p>{Time}</p>
```

### Benefits

✔ Cleaner Code
✔ Easy to Read
✔ Less Typing
✔ Professional Style

---

## 🍽️ Mini Project Built

# Recipe Menu Card App

Recipes Included:

* ☕ Masala Chai
* 🥞 Dosa
* 🍛 Biryani
* 🍨 Ice Cream

Each card shows:

✔ Image
✔ Recipe Name
✔ Time
✔ Serving
✔ Difficulty
✔ Type
✔ Chef Name

---

## 📌 main.jsx

```jsx id="rd59"
<RecipeCard RecipeName="Masala Chai" />
<RecipeCard RecipeName="Dosa" />
<RecipeCard RecipeName="Biryani" />
<RecipeCard RecipeName="Ice Cream" />
```

---

## 📌 Recipe.jsx

```jsx id="rd510"
function RecipeCard({ RecipeName }) {
  return <h1>{RecipeName}</h1>;
}
```

---

## 🎨 CSS Concepts Used

* Flexbox
* Gap
* Card Layout
* Hover Effects
* Border Radius
* Box Shadow
* Responsive Design

---

## 📁 Project Structure

```bash id="rd511"
src/
│── main.jsx
│── Recipe.jsx
│── index.css
```

---

## 💡 What I Learned Today

✔ Props pass data
✔ Parent → Child communication
✔ Components become reusable
✔ Dynamic UI building
✔ Better project structure
✔ Clean coding style

---

## 🚀 Why Props Important?

Used in real projects:

* Netflix Movie Cards
* Amazon Product Cards
* YouTube Video Cards
* Student Cards
* Food Menu Apps

---

## 🚀 Next Topic

➡️ **Rendering Arrays in React**

---

## ⭐ Support

If this repository helped you, give it a **Star ⭐**

---

## ✅ Day-05 Completed Successfully
