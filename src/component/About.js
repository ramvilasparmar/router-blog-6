import { Link } from "react-router-dom";

function About()
{
    return(
        <div>
            <h1>About Page</h1>
            <ul>
            <li><Link to='/user/ram' state={{name:'ram', age:20}}>Ram</Link></li>
            <li><Link to='/user/piter'>Piter</Link></li>
            </ul>
        </div>
    )
}

export default About;