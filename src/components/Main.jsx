import React  from "react"
import Form from "./Form"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"
import MessageIngredients from "./MessageIngredients"
import Loader from "./Loader"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [loading, setLoading] = React.useState(false);
    const [recipe, setRecipe] = React.useState(false)

    async function getRecipe() {
        setLoading(true)
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(generatedRecipe)
        setLoading(false)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
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
            <Form addIngredient = {addIngredient} />
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