import React, {Component} from 'react';
import '../App.css';

class UpcomingReleases extends Component {

    render(){
        return(
            <a className='release' href = 'https://www.imdb.com/calendar/?region=gb' target='blank' > View more upcoming Releases >> </a>
        )
    }
}

export default UpcomingReleases;