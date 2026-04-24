import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Info from "./Components/Info";

export default function RecipeCard(){
    return(
        <div className="recipe-container">
            <Header/>
            <Info/>
            <Footer/>
        </div>
    )
}