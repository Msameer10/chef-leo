import React  from "react"
import Form from "./Form"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"
import MessageIngredients from "./MessageIngredients"
import Loader from "./Loader"
import RecipeSelector from "./RecipeSelector"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [cuisine, setCuisine] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [recipe, setRecipe] = React.useState(false)
    const [error, setError] = React.useState("");

    async function getRecipe() {
        setLoading(true)
        setError("")
        const generatedRecipe = await getRecipeFromMistral(ingredients, cuisine)
        setRecipe(generatedRecipe)
        setLoading(false)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient").trim().toLowerCase();

        if (!newIngredient) {
            setError("Please enter something that can be eaten, perhaps..?")
            return;
        }

        if (ingredients.includes(newIngredient)) {
            setError("Uh-oh, déjà vu! That ingredient's already on the list.");
            return;
        }

        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        setError("");
    }

    React.useEffect(() => {
        if (recipe) {
            const recipeElement = document.getElementById("recipe-section");
            recipeElement.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipe]);

    return (
        <main>
            { ingredients == 0 && <MessageIngredients />}
            <RecipeSelector setCuisine={setCuisine} />
            <Form addIngredient = {addIngredient} />
            {error && <p className="error-message container text-center">{error}</p>}
            {ingredients.length > 0 && 
                <IngredientsList ingredients = {ingredients} getRecipe = {getRecipe} loading = {loading} recipe = {recipe} />}

            {loading &&  <Loader loading={loading} /> }
            {!loading && recipe && 
                <div id="recipe-section">
                    <Recipe recipe={recipe} />
                </div>
            }
        </main>
    )
}