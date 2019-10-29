import React, {Component} from 'react';
import '../App.css';

class Film extends Component {

    render(){
        return(
            <li><a href={this.props.url} target='blank' > {this.props.children} </a></li>
        )
    }
}

export default Film;