import { useParams } from 'react-router-dom';
import SingleItemInfo from '../../singleItemInfo/SingleItemInfo';

const SingleCharPage = () => {
    const {charId} = useParams();
    const itemType = 'Character';
    return (
    <SingleItemInfo itemType={itemType} itemId={charId}/>
    )
}

export default SingleCharPage; 