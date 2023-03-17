import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';

import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';
import setContentSinglePage from '../../utils/setContent';

import './singleItemInfo.scss';

// itemType = CharacterByName/Comic
const SingleItemInfo = ({itemType, itemId}) => {
    const [item, setItem] = useState(null);
    const {[`get${itemType}`]: getItem, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateItem()
    }, [itemId])

    const onItemLoaded = (item) => {
        setItem(item);
    }

    const updateItem = () => {
        clearError();

        getItem(itemId)
            .then(onItemLoaded)
            .then(() => setProcess('confirmed'))
    }
    
    
    const createView = () => {
        switch (itemType) {
            case 'Comic':
                return <ViewComic data={item}/>;
            case 'Character':
                return <ViewChar data={item}/>;
            default:
                return null;
        }
    }

    return (
        <>
            <AppBanner/>
            {setContentSinglePage(process, () => createView())};
        </>
    )
}

const ViewComic = ({data}) => {
    const {title, description, pageCount, thumbnail, lang, price } = data;

    return (
        <>
            <Helmet>
                    <meta name="description" content={`'${title}' comics page`}/>
                    <title>{title}</title>
            </Helmet>
            <div className="single-comic">
                <img src={thumbnail} alt={title} className="single-comic__img"/>
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{title}</h2>
                    <p className="single-comic__descr">{description}</p>
                    <p className="single-comic__descr">{pageCount}</p>
                    <p className="single-comic__descr">Language: {lang}</p>
                    <div className="single-comic__price">{price}</div>
                </div>
                <Link to='/comics' className="single-comic__back">Back to all</Link>
            </div>
        </>
    )
}

const ViewChar = ({data}) => {
    const {name, description, thumbnail} = data;

    return (
        <>
            <Helmet>
                    <meta name="description" content={`${name} page`}/>
                    <title>{name}</title>
            </Helmet>
            <div className="single-comic">
                <img src={thumbnail} alt={name} className="single-char__img"/>
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{name}</h2>
                    <p className="single-comic__descr">{description}</p>
                </div>
                <Link to='/' className="single-comic__back">Back to Main Page</Link>
            </div>
        </>
    )
}

export default SingleItemInfo; 