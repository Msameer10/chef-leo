export default function Form(props) {
    return (
        <form action={props.addIngredient} className="add-ingredient-form mt-2">
            <input className="form-control" type="text" placeholder="  e.g. tomatoes" name="ingredient" aria-label="Add Ingredient"/>
            <button className="btn" type="submit">Add Ingredient</button>
        </form>
    )
}