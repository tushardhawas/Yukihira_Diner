import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const apiKey = process.env.REACT_APP_MY_SPOON_API;
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}&includeNutrition=false`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recipe details.");
        }

        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [recipeId]);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="mt-4 w-full h-auto rounded-lg shadow-md" />

      <div className="mt-6 space-y-2">
        <p className="text-lg"><strong>Servings:</strong> {recipe.servings}</p>
        <p className="text-lg"><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
        <p className="text-lg"><strong>Health Score:</strong> {recipe.healthScore}</p>
        <p className="text-lg">
          <strong>Source:</strong> 
          <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> {recipe.sourceName}</a>
        </p>
        <p className="mt-2 text-gray-700" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      </div>

      <h2 className="text-2xl font-semibold mt-6">Ingredients:</h2>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id} className="text-lg">{ingredient.original}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Instructions:</h2>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} className="mt-2 text-gray-700" />

      {recipe.winePairing && recipe.winePairing.pairedWines.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Wine Pairing:</h2>
          <p>{recipe.winePairing.pairingText}</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {recipe.winePairing.pairedWines.map((wine, index) => (
              <li key={index} className="text-lg">{wine}</li>
            ))}
          </ul>
          {recipe.winePairing.productMatches.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg">Recommended Wine:</h3>
              {recipe.winePairing.productMatches.map((wine) => (
                <div key={wine.id} className="flex items-center mt-2 bg-gray-100 p-2 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <img src={wine.imageUrl} alt={wine.title} className="w-16 h-16 rounded mr-2" />
                  <div>
                    <p className="font-bold text-lg">{wine.title}</p>
                    <p>{wine.description}</p>
                    <p className="text-sm text-gray-600">Price: {wine.price}</p>
                    <a href={wine.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Buy Now</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
