import React from 'react';
import api from '../../services/api';

export default class Movie extends React.Component{

    constructor(props){
        super(props);
        this.state =  {
            movie: []
        }
    }

    componentDidMount()
    {
       
    }

    render(){
        return (
            <div className="container">
                interna de filmes
            </div>
        );
    }
    
}