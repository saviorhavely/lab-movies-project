import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import './style.scss';

export default class ListMovies extends Component{

    constructor(props){
        super(props);
        this.state =  {
            movies: [],
            error: false,
            loading: true,
            page: 1
        }
    }

    

    componentDidMount()
    {
        this.loadMovies();
    }

    async loadMovies(page = 1){

        const response = await api.get(`/3/discover/movie?api_key=486beaa8063678ee880f508e132236ee&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);

        const { results, ...moviesInfo } = response.data;

        this.setState({...this.state, movies: results });

    }

    render(){
        const { movies } = this.state;

        return(            
            <section className="list-movies container py-4">
            <div className="row justify-content-center">
                {movies.map( movie => (
                    <article className="col-md-4 col-lg-3 mb-4" key={movie.id}>
                        <figure>
                            <img src={"https://image.tmdb.org/t/p/w500/"+ movie.poster_path} />
                        </figure>
                        <div className="about t">
                            <h5>{movie.title}</h5>
                            <p className="desc">{movie.overview}</p>
                            <Link className="btn btn-success" to={`/movie/${movie.id}`}>Acessar</Link>
                        </div>
                    </article>
                ))}
            </div>
            </section>
        )
    }
}