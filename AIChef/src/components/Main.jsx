export default function Main(){
    const ingredients = []
    
    function handleSubmit(e) {
        e.preventDefault()
        
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form"> 
                <input
                    type="text" 
                    placeholder="e.g. tomatoes" 
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>+ Add ingredient</button>
            </form>
        </main>
    )
}