import chefIcon from '../assets/chefIcon.png'

export default function Header(){
    return(
        <header>
            <img src={chefIcon} alt='AI Chef Icon'/>
            <h1>AI Chef</h1>
        </header>
    )
}