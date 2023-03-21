import { Link, useNavigate } from 'react-router-dom';

import ErrorMessage from './errorMessage';

import './errorText.scss'

const ErrorMessageWithText = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div style={{marginTop: 50}}>
                <ErrorMessage/>
                <p 
                className='error__text-sorry'
                >
                    Sorry, such page does not exist
                </p>
                <Link 
                className='error__link-prev'
                onClick={goBack}
                >
                    Back to the previous page
                </Link>
                <Link 
                className='error__link-main'
                to="/">
                    Back to the main page
                </Link>
            </div>
    )
}

export default ErrorMessageWithText;