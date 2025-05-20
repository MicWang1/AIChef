import {useState} from 'react'

export default function Main(){
    const [ingredients, setIngredients] = useState([])
    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const ingredientsList = ingredients.map((ingredient) => {
        return <li>{ingredient}</li>
    })
    

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form"> 
                <input
                    type="text" 
                    placeholder="e.g. tomatoes" 
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>+ Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}