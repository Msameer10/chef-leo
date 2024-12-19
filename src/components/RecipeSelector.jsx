import React from "react";

export default function RecipeSelector({ setCuisine }) {
    function handleCuisineChange(e) {
        setCuisine(e.target.value);
    }

    return (
        <div className="recipe-selector mb-3">
            <label htmlFor="cuisine-select" className="form-label">
                Cuisine:
            </label>
            <select
                id="cuisine-select"
                className="form-select"
                name="cuisine"
                onChange={handleCuisineChange}
                defaultValue="any"
            >
                <option value="any">Any</option>
                <option value="italian">Italian</option>
                <option value="indian">Indian</option>
                <option value="lebanese">Lebanese</option>
                <option value="french">French</option>
                <option value="mexican">Mexican</option>
                <option value="japanese">Japanese</option>
                <option value="american">American</option>
                <option value="chinese">Chinese</option>
                <option value="thai">Thai</option>
                <option value="greek">Greek</option>
                <option value="spanish">Spansih</option>
            </select>
        </div>
    );
}
