import Spinner from '../components/spinner/spinner';
import ErrorMessage from '../components/errorMessage/errorMessage';

const setContentList = (process, Component, newItemLoading) => {
    switch(process) {
        case 'waiting':
            return <Spinner/>;
            // eslint-disable-next-line
            break;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
            // eslint-disable-next-line
            break;
        case 'confirmed':
            return <Component/>;    
            // eslint-disable-next-line
            break;
        case 'error':
            return <ErrorMessage/>;
            // eslint-disable-next-line
            break;
        default:
            throw new Error('Unexpected FSM error');
    }
}

export default setContentList;