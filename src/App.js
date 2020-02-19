import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';
import ListMovies from './views/ListMovies';
import Movie from './views/Movie';

import './style.scss';


const App = () => {
    return (
        <div id="app" className="App">
            <Header title="Welcome to Lab Movie" />
            <main>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/listar" component={ListMovies} />
                        <Route exact path="/movie/:id" component={Movie} />
                    </Switch>
                </Router>
            </main>
            <Footer />
        </div>
    );
}

export default App;
