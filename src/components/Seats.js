import React, { Component } from 'react'
import Seat from "./Seat"
import PropTypes from 'prop-types'

class Seats extends Component {   
     render() {
        return (
            <div className="seats">
                <h1>Seating plan</h1>
                {this.props.seats.map((seat) => (   
                <Seat key={seat.id} seat={seat}  
                selectSeat={this.props.selectSeat}
                pathToMove={this.props.pathToMove}
                />))}
                <ul className="legend">
                    <li className="legend__item legend__item--free">Free</li>
                    <li className="legend__item legend__item--reserved">Reserved</li>
                    <li className="legend__item legend__item--selected">Selected</li>
                </ul>
            </div>
        )
    }
}

// PropTypes
Seats.propTypes = {
    seats: PropTypes.array.isRequired,
    selectSeat: PropTypes.func.isRequired,
    pathToMove: PropTypes.object.isRequired,
}
export default Seats;
