import Spinner from '../components/spinner/spinner';
import ErrorMessage from '../components/errorMessage/errorMessage';

const setContentSinglePage = (process, View) => {
    switch(process) {
        case 'loading':
            return <Spinner/>;
        case 'confirmed':
            return View;
        case 'error':
            return <ErrorMessage/>;
        default:
            throw new Error('Unexpected FSM error');
    }
}

export default setContentSinglePage;