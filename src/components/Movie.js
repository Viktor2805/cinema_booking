import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CinemaLogo from './CinemaLogo.js';

class Movie extends Component {
    render() {
        return (
            <div className="movie">
                <div className="wrapper-logo">
                    <CinemaLogo></CinemaLogo> 
                    <p>Cinema</p>
                </div>
                <img src="https://i.pinimg.com/564x/a1/3c/c5/a13cc59013b3554919aa67998d788bf0.jpg" alt=""></img>
                <div className="price">Ticket Price - $70</div>
            </div>
        )
    }
}

export default Movie;
