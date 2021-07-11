import Button from "./Button"
import {useLocation} from "react-router-dom"

const Header = (props) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{props.title}</h1>
            {   
                location.pathname === '/' && (
                    <Button 
                    clickedButton={props.onAddClicked}
                    color={props.addTaskShown ? 'red': 'green'} 
                    text={props.addTaskShown ? 'Close': 'Add'}/>
                )
            }
        </header>
    )
}

export default Header