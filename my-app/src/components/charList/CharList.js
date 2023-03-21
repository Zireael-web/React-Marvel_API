import { useState, useEffect, useRef, useMemo} from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import setContentList from '../../utils/setContentList';

import './charList.scss';



const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);
    
    const {getAllCharacters, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    // eslint-disable-next-line
    }, [])

    const onRequest = (offset, initial) => {
        
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'));   
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);
    }

    const itemRefs = useRef([]);


    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }


    function renderItems(arr) {
        const items =  arr.map((item, i) => {
            const imgStyle = (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') ? {objectFit: 'unset'} : null

            return (
                    <li 
                    tabIndex={0}
                    className="char__item"
                    ref={el => itemRefs.current[i] = el}
                    key={item.id}
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                        }}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                    </li>
            )
        });

        return (
            <ul className="char__grid">
                    {items}
            </ul>
        )
    }   

    const elements = useMemo(() => {
        return setContentList(process, () => renderItems(charList), newItemLoading);
    // eslint-disable-next-line
    }, [process]);

    return (
        <div className="char__list">
            {elements}
            <button
            disabled={newItemLoading}
            style={{'display': charEnded ? 'none' : 'block'}}
            onClick={() => onRequest(offset)}
            className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;