import React  from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"
import MessageIngredients from "./MessageIngredients"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState(false)

    async function getRecipe() {
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(generatedRecipe)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            { ingredients == 0 && <MessageIngredients />}
            <form action={addIngredient} className="add-ingredient-form">
                <input className="form-control" type="text" placeholder="  e.g. tomatoes" name="ingredient" aria-label="Add Ingredient"/>
                <button className="btn" type="submit">Add Ingredient</button>
            </form>

            {ingredients.length > 0 && 
                <IngredientsList ingredients = {ingredients} getRecipe = {getRecipe} />}
                {recipe && <Recipe recipe = {recipe} />}
        </main>
    )
}