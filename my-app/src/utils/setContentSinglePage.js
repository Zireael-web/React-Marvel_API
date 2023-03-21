import Spinner from '../components/spinner/spinner';
import ErrorMessageWithText from '../components/errorMessage/ErrorMessageWithText';
import Skeleton from '../components/skeleton/Skeleton';

const setContent = (process, Component, data) => {
    switch(process) {
        case 'waiting':
            return <Skeleton/>;
        case 'loading':
            return <Spinner/>;
        case 'confirmed':
            return <Component data={data}/>;
        case 'error':
            return <ErrorMessageWithText/>;  /* СДЕЛАТЬ ТАК ЧТО ЕСЛИ ЕСТЬ ПРОПС ТО ПИШЕТСЯ SORRY SUCH COMICS/CHAR NOT FOUND!!! */
            // т е можно (двойной)   условный рендер в самом errorWithText - пропса нет - пишем page, пропс есть - смотрим это герой или комикс(можно узнать например по самому содержанию ссылки/по айди/ по типу фетча и так далее, но это возможно придется получать пропсы еще и из самого singleiteminfo)
        default:
            throw new Error('Unexpected FSM error');
    }
}

export default setContent;