import { Link } from "react-router-dom";

const NotFound = () => {

    return(
        <div className="h-screen fade-in w-screen flex flex-col justify-center items-center">
            <h1 className=" text-3xl text-center">NotFound :) Hit <Link className="hover:text-black/50 transition-all duration-500 ease-in-out" to="/">back</Link> button</h1><br/>    
        </div>
    )
}

export default NotFound;