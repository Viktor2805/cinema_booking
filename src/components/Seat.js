import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Seat extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    styleSeat = () => {
        let {id,reserved,selected} = this.props.seat;
        let {x,y,idOfSeat} = this.props.pathToMove;
        // add rule keyframes to css //
        let styleSheet = document.styleSheets[0];
        let keyframes =
        `@keyframes ${"rainbow"} {
            0% {transform:translate(0px, 0px)} 
            100% {transform:translate(${x - 33}px, ${y + 40}px) rotate(20deg)}
        }`;
        
        if (selected && idOfSeat === id) {
            styleSheet.insertRule(keyframes, styleSheet.cssRules.length); 
        }
        // style for seat 
        const styleSeat = {
            backgroundColor: "",
            marginTop: "",
            marginRight: "",
        };
        // change backgroundColor seat if it is reserved
        if (reserved) styleSeat.backgroundColor = "#de6363";
        // separate seats horizontally into two parts
        if (id % 10 === 0 && !Number.isInteger(id / 20)) {
            styleSeat.marginRight = "20px";
        }
         // separate seats vertically into two parts
        if (id > 400 && id <= 420) styleSeat.marginTop = "20px";
        if (selected) {
            styleSeat.backgroundColor = "#21c252"
            styleSeat.animationName = "rainbow"
            styleSeat.animationDuration = "0.5s"
        }
        return styleSeat;
    }

    render() {
        const {id,reserved,numOfSeat} = this.props.seat;
        // doesn't show hint on seat
        let tooltip = reserved ? "": "tooltip";
        return (
            <div ref = {this.ref} className={"seat " + tooltip} 
             data-tooltip={numOfSeat} style={this.styleSeat()}
             onClick={(e) => this.props.selectSeat(id,e,this.ref)}>
            </div>
        )
    }
}

// PropTypes
Seat.propTypes = {
    seat: PropTypes.object.isRequired,
}
export default Seat;
