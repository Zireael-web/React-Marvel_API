import { useParams } from 'react-router-dom';

import SingleItemInfo from '../../singleItemInfo/SingleItemInfo';

const SingleComicPage = () => {
    const {comicId} = useParams();
    const itemType = 'Comic';
    return (
    <SingleItemInfo itemType={itemType} itemId={comicId}/>
    )
}

export default SingleComicPage; 