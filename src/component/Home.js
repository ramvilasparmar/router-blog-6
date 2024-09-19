import { useNavigate, useLocation } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const navToPage = (url)=>{
        navigate(url)
    }
    return(
        <div>
            <h1>Home Page</h1>
            <br />
            <button onClick={()=> navToPage('/about')}>Go To About Page</button>
            <br />
            <button onClick={()=> navToPage('/filter')}> Go To Filter Page</button>
            </div>
    )
}

export default Home;