import { Link } from 'react-router-dom';
import logo from "../assets/img_Landing_icon-10-10.png";


function Header() {
    return (
        <>
            
            <ul class="nav">
                <li class="nav-item"><Link to="/"><img src={logo} /></Link></li>
                <li class="nav-item"><Link to="/">About</Link></li>
                <li class="nav-item"><Link to="/">News</Link></li>
                <li class="nav-item"><Link to="/">Member</Link></li>
                <li class="nav-item nav-item-button"><Link to="/">signout</Link></li>
            </ul>
        </>
    )

}



export default Header;