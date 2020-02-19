import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './style.scss';

const App = () => {
    return (
        <div id="app" className="App">
            <Header />
            <Footer />
        </div>
    );
}

export default App;
