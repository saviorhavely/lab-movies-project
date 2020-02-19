import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import './style.scss';

export default class ListMovies extends Component{

    state =  {
        movies: [],
        error: false,
        loading: true,
        page: 1
    }

    componentDidMount()
    {
        this.loadMovies();
    }

    loadMovies = async (page = 1) => {

        const response = await api.get(`/3/discover/movie?api_key=486beaa8063678ee880f508e132236ee&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);

        const { results, ...moviesInfo } = response.data;

        this.setState({...this.state, movies: results });

        console.log(this.state.movies);

    }

    render(){
        const { movies } = this.state;

        return(            
            <section className="list-movies container py-4">
            <div className="row justify-content-center">
                {movies.map( movie => (
                    <article className="col-md-4" key={movie.id}>
                        <figure>
                            <img src={"https://image.tmdb.org/t/p/w500/"+ movie.poster_path} />
                        </figure>
                        <div className="">                            
                            <h5>{movie.title}</h5>
                        </div>
                        <div className="about">
                            <p className="desc">{movie.overview}</p>
                        </div>
                    </article>
                ))}
            </div>
            </section>
        )
    }
}