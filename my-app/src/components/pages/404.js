import ErrorMessage from "../errorMessage/errorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p
            style={{textAlign: "center", fontSize: 24, fontWeight: "bold", marginTop: 25}}
            >Sorry, such page does not exist</p>
            <Link 
            style={{display: "block", textAlign: "center", fontWeight: "bold", fontSize: 24, marginTop: 10, color: '#9f0013'}}
            to="/">Back to the main page</Link>
        </div>
    )
}

export default Page404 ;