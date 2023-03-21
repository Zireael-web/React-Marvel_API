import { Helmet } from "react-helmet";

import ErrorMessageWithText from "../errorMessage/ErrorMessageWithText";


const Page404 = () => {
    return (
        <>  
            <Helmet>
                <meta name="description" content="404 error page"/>
                <title>Error page</title>
            </Helmet>
            <ErrorMessageWithText/>
        </>
    )
}

export default Page404 ;