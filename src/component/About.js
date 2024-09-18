import { NavLink } from "react-router-dom";

function About()
{
    return(
        <div>
            <h1>About Page</h1>
            <ul>
            <li><NavLink to='/user/ram'>Ram</NavLink></li>
            <li><NavLink to='/user/piter'>Piter</NavLink></li>
            </ul>
        </div>
    )
}

export default About;