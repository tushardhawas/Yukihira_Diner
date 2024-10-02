import React, { useState } from "react";
import { marked } from "marked"; 
import { Link } from "react-router-dom";

const RecipeAI = () => {
  const [ingredients, setIngredients] = useState("");
  const [numberOfRecipes, setNumberOfRecipes] = useState(10);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [spoonData, setSpoonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumberOfRecipes(e.target.value);
  };

  // Function to handle Generative AI submission
  const handleGenerateAIRecipe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSpoonData([]); // Clear previous spoon data

    try {
      const response = await fetch("http://localhost:3000/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: inputText }] }],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from the server.");
      }

      const data = await response.json();
      const formattedData = data.candidates[0].content.parts[0].text;
      setOutputText(formattedData || "No output generated");

      // Extract ingredients from the generated recipe
      const extractedIngredients = extractIngredients(formattedData);
      setIngredients(extractedIngredients.join(", ")); // Set ingredients for Spoonacular API
      // Automatically trigger finding recipes based on generated ingredients
      handleFindRecipes(extractedIngredients);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to extract ingredients from the generated recipe
  const extractIngredients = (recipeText) => {
    const ingredientRegex = /(?:\d+\s+)?([a-zA-Z\s]+)(?=\n|$)/g; // Simple regex to match ingredients
    return recipeText.match(ingredientRegex) || [];
  };

  // Function to handle Spoonacular API submission
  const handleFindRecipes = async (ingredientsList) => {
    setLoading(true);
    setError(null);
    setOutputText(""); // Clear previous output text

    try {
      const apiKey = process.env.REACT_APP_MY_SPOON_API;
      const ingredients = ingredientsList.join(", "); // Join for API request

      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}&number=${numberOfRecipes}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipes.");
      }

      const data = await response.json();
      setSpoonData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Left Side - Forms */}
      <div className="flex flex-col w-1/2 pr-4">
        {/* Generative AI Form */}
        <form onSubmit={handleGenerateAIRecipe} className="mb-6 space-y-4">
          <h2 className="text-lg font-semibold text-[#006D77]">AI Recipe Generator:</h2>
          <textarea
            placeholder="Ask me to generate a recipe..."
            value={inputText}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#006D77]"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-semibold text-white bg-[#006D77] hover:bg-[#004d5e] transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Generating..." : "Generate Recipe"}
          </button>
        </form>

        {/* Spoonacular API Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFindRecipes(ingredients.split(", "));
          }}
          className="space-y-4"
        >
          <h2 className="text-lg font-semibold text-[#006D77]">Find Recipes by Ingredients:</h2>
          <input
            type="text"
            value={ingredients}
            onChange={handleIngredientsChange}
            placeholder="Enter ingredients (comma separated)"
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#006D77]"
          />
          <input
            type="number"
            value={numberOfRecipes}
            onChange={handleNumberChange}
            min="1"
            max="100"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#006D77]"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-semibold text-white bg-[#006D77] hover:bg-[#004d5e] transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Finding Recipes..." : "Find Recipes"}
          </button>
        </form>
      </div>

      {/* Right Side - Output Display */}
      <div className="flex-1 pl-4">
        {outputText && (
          <div className="mt-6 p-4 border border-gray-300 rounded-md bg-[#EDF6F9]">
            <h2 className="text-lg font-semibold text-[#006D77]">Generated Recipe:</h2>
            <div
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: marked(outputText) }} // Render parsed markdown as HTML
            />
          </div>
        )}

        <ul className="space-y-4 mt-4">
          {spoonData.map((recipe) => (
            <li key={recipe.id} className="text-gray-800">
              <Link to={`/recipe/${recipe.id}`} className="font-bold text-[#006D77] hover:underline">
                {recipe.title}
              </Link>
              <img
                src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
                alt={recipe.title}
                className="w-64 h-64 object-cover rounded-md mt-2"
              />
            </li>
          ))}
        </ul>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default RecipeAI;
