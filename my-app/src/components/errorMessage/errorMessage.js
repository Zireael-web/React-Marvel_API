import img from './error.gif'

const ErrorMessage = () => {
    return  (
        <img style={{display: 'block', width: 250, height: 250, margin: 'auto', objectFit: 'contain'}} src={img} alt='Error'/>
    )
}

export default ErrorMessage;