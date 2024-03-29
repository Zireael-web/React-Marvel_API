import { useHttp } from "../hooks/http.hook";

const useMarvelService= () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=8c90f394deb15174c26c478db73f5f48';
    const _baseOffset = 210;
    const _baseOffsetComics = 0;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter)
    } 

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getCharacterByName = async (name) => {
		const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	};

    const _transformCharacter = (char) => {
        return {
        name: char.name ,
        description: (char.description) ? char.description : 'There is no description about the character',   
        thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
        homepage: char.urls[0].url,
        wiki: char.urls[1].url,
        id: char.id,
        comics: char.comics.items
        }
    }

    const getAllComics = async (offset = _baseOffsetComics) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map((comic, i) => _transformComic(comic, i));
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComic(res.data.results[0]);
    }

    const _transformComic = (comic) => {
        return {
            title: comic.title,
            description: (comic.description) ? comic.description : 'No description about that comics',
            pageCount: (comic.pageCount) ? comic.pageCount : 'No info about the amount of pages in the comics',
            price: (comic.prices[0].price) ? `${comic.prices[0].price}$` : 'Not available',
            id: comic.id,
            lang: (comic.textObjects[0]) ?  `Language: ${comic.textObjects[0].language}` : 'No info about the language of the comic',
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
        }
    }

    return {clearError, 
            process, 
            getAllCharacters, 
            getCharacter, 
            getAllComics, 
            getComic, 
            getCharacterByName,
            setProcess}
}

export default useMarvelService;