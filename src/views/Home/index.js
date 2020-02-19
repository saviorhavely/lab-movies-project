import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

export default class Home extends Component{

    state = {

    }

    componentDidMount(){

    }

    render(){
        return(
            <section className="home">
                <ul className="list-unstyled">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/listar">Listar Filmes</Link>
                    </li>
                    <li>
                        <Link to="/procurar">Procurar Filme</Link>
                    </li>
                    <li>
                        <Link to="/categorias">Categorias</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </section>
        )
    }
}