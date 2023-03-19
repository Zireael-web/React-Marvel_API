import { lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/singleComicPage/SingleComicPage'));
const SingleCharPage = lazy(() => import('../pages/singeCharPage/SingleCharPage'));






const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route element={<MainPage />} path="/" />
                            <Route element={<ComicsPage/>} path="/comics" />
                            <Route element={<SingleComicPage/>} path="/comics/:comicId" /> 
                            <Route element={<SingleCharPage/>} path="/characters/:charId" />  
                            <Route element={<Page404/>} path="*" />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}


export default App;