import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RecipeCard from "./Recipe";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header className="main-header">
      <h1>🍴 Recipe Menu Card</h1>
      <p>Tasty Foods using React Props</p>
    </header>

    <div className="main-parent">
      <RecipeCard
        RecipeName="Masala Chai"
        Time="Prep Time: 5 min | Cook Time: 10 min"
        serving="Serves: 2 People"
        difficulty="Difficulty: Easy"
        type="Type: Beverage"
        chefname="Tea By Harshit"
        img="https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <RecipeCard
        RecipeName="Dosa"
        Time="Prep Time: 15 min | Cook Time: 10 min"
        serving="Serves: 2 People"
        difficulty="Difficulty: Medium"
        type="Type: Breakfast"
        chefname="Dosa By Vicky"
        img="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <RecipeCard
        RecipeName="Biryani"
        Time="Prep Time: 30 min | Cook Time: 45 min"
        serving="Serves: 4 People"
        difficulty="Difficulty: Hard"
        type="Type: Lunch"
        chefname="Biryani By Naik"
        img="https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <RecipeCard
        RecipeName="Ice Cream"
        Time="Prep Time: 2 min | Cook Time: 0 min"
        serving="Serves: 1 Person"
        difficulty="Difficulty: Easy"
        type="Type: Dessert"
        chefname="Ice Cream By Rahul"
        img="https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </div>
  </React.StrictMode>
);