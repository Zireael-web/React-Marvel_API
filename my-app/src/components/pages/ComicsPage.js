import { Helmet } from 'react-helmet';

import ComicsList from '../comicsList/ComicsList';
import AppBanner from '../appBanner/AppBanner';

import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const ComicsPage = () => {
    return (
        <>
        <Helmet>
                <meta name="description" content="Comics list page"/>
                <title>Comics page</title>
        </Helmet>
        <AppBanner/>
        <ErrorBoundary>
            <ComicsList/>
        </ErrorBoundary>
        </>
    )
}

export default ComicsPage