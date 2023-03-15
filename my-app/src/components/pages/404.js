import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import ErrorMessage from "../errorMessage/errorMessage";


const Page404 = () => {
    return (
        <>  
            <Helmet>
                <meta name="description" content="404 error page"/>
                <title>Error page</title>
            </Helmet>
            <div>
                <ErrorMessage/>
                <p
                style={{textAlign: "center", fontSize: 24, fontWeight: "bold", marginTop: 25}}
                >Sorry, such page does not exist</p>
                <Link 
                style={{display: "block", textAlign: "center", fontWeight: "bold", fontSize: 24, marginTop: 10, color: '#9f0013'}}
                to="/">Back to the main page</Link>
            </div>
        </>
    )
}

export default Page404 ;