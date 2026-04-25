export default function RecipeCard({
  RecipeName,
  Time,
  serving,
  difficulty,
  type,
  chefname,
  img,
}) {
  return (
    <div className="recipe-container">
      <img src={img} alt={RecipeName} className="recipe-image" />

      <header className="recipe-header">
        <h2>{RecipeName}</h2>
        <p>{Time}</p>
      </header>

      <section className="recipe-details">
        <p>{serving}</p>
        <p>{difficulty}</p>
        <p>{type}</p>
      </section>

      <footer className="recipe-footer">
        <small>{chefname}</small>
      </footer>
    </div>
  );
}