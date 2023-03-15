import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';

import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';

import './singleItemInfo.scss';

// itemType = CharacterByName/Comic
const SingleItemInfo = ({itemType, itemId}) => {
    const [item, setItem] = useState(null);
    const {loading, error, [`get${itemType}`]: getItem, clearError} = useMarvelService();

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
    }
    
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    
    let content;
    let basicCondition = !(loading || error || !item);
    
    if (basicCondition && itemType === `Comic`) {
            content = <ViewComic comic={item}/>} 
        else if (basicCondition && itemType === `Character`) {
            content = <ViewChar char={item}/> } 
        else {
            content = null;
            }
    /* const content = !(loading || error || !item) ? <View item={item}/> : null; */


    return (
        <>
            <AppBanner/>
            {spinner}
            {errorMessage}
            {content}
        </>
    )
}

const ViewComic = ({comic}) => {
    const {title, description, pageCount, thumbnail, lang, price } = comic;

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

const ViewChar = ({char}) => {
    const {name, description, thumbnail} = char;

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