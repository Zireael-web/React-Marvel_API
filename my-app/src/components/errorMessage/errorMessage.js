import img from './error.gif'

import './errorPicture.scss'

const ErrorMessage = () => {
    return  (
        <img 
            className="error__picture"
            src={img} 
            alt='Error'/>
    )
}

export default ErrorMessage;