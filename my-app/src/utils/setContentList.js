import Spinner from '../components/spinner/spinner';
import ErrorMessage from '../components/errorMessage/errorMessage';

const setContentList = (process, Component, newItemLoading) => {
    switch(process) {
        case 'waiting':
            return null; 
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
        case 'confirmed':
            return <Component/>;    
        case 'error':
            return <ErrorMessage/>;
        default:
            throw new Error('Unexpected FSM error');
    }
}

export default setContentList;