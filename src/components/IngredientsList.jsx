export default function IngredientsList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section className="container mt-4">
            <h4>Ingredients on hand:</h4>
            <p className="mt-4">Add atleast <i><b>four ingredients</b></i> to be able to generate a recipe. <br />
                {props.ingredients.length > 3 && <small>Feel free to add more ingredients if you want!</small>}</p>
                <ul className="ingredients-list container" aria-live="polite">
                    {ingredientsListItems}
                </ul>
                {props.ingredients.length > 3 &&
                <div className="getRecipeContainer">
                    <div>
                        <h4>Ready for a Recipe?</h4>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="btn" onClick={props.getRecipe}>Get a Recipe</button>
                </div>}
        </section>
    )
}