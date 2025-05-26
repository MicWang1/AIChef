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
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 ?
                <section>
                    <h2>Ingredients on hand:</h2>

                    <ul className='ingredients-list' aria-live='polite'>
                        {ingredientsList}
                    </ul>

                    {ingredients.length >= 3 ?
                        <div className='get-recipe-container'>
                            <div>
                                <h3>Ready for recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button>Get a recipe</button>
                        </div> : null}


                </section> :
                null
            }
        </main>
    )
}