import React, {Component, Fragment} from 'react';
import Film from './Film'
import '../App.css';

class FilmList extends Component {

    render(){

        const filmList = this.props.films.map(film =>{
            return(
                <Film key={film.id} url={film.url}> {film.name} </Film>
            )
        })

        return(
            <Fragment>
                {filmList}
            </Fragment>
        )
    }
}

export default FilmList;