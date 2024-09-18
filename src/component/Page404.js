import { NavLink } from "react-router-dom";

function Page404()
{
    return(
        <div>
            <h1>404 Page</h1>
            <p>This is URL is not present</p>
            <NavLink to="/">Go To Home Page</NavLink>
        </div>
    )
}

export default Page404;