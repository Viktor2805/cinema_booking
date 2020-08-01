import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BasketSvg from './BasketSvg.js';
import Ticket from "./Ticket"



class Basket extends Component {
    constructor(props) {
        super(props);
        this.myRef  = React.createRef();
    }
       
    render() {
        let {selected,basketOpen} = this.props;
        // changing backgroundColor of basket and counts tickets
        let showCounter = {};
        let backgroundColor = {};
        if (selected.length === 0) {
            showCounter = {transform:"scale(0)"}
            backgroundColor = {backgroundColor: "#48724e"};
        } else {
            backgroundColor = {backgroundColor: "#017374"};
        }

        // add animation to basket 
        let basketAnimation = "";    

        // css for hidding tickets in basket bnefore opening its (h2 and .tickets scrollbar) 
        let styleToHide = {};

        if (basketOpen && selected.length !== 0) {
            basketAnimation = "wrapper-basket animation"
            styleToHide.display = "flex"
        }
        else {
            styleToHide.display = "none";
            basketAnimation = "wrapper-basket";
        }
        let priceOfTicket = 70;
        return (
            <div className="checkout">
                <div className={basketAnimation}>
                    <div onClick={(e) => this.props.basketToggle(e)} style={backgroundColor} className="button-basket">
                        <BasketSvg></BasketSvg>
                        <span ref={this.myRef} style={showCounter}>{selected.length}</span>
                    </div>
                    <h2 style={styleToHide}>Tickets</h2>
                    <div style={styleToHide} className="tickets scrollbar" id="style-2">
                    {/* div for creating customize overflow */}
                    <div className="force-overflow"></div>
                        {selected.map((seat) => (   
                        <Ticket removeTicket={this.props.removeTicket} key={seat.id} seat={seat}  
                        />))}
                    </div>
                </div>
                <button className="total">Total - $({selected.length * priceOfTicket})</button>
                <button className="action action--buy">Buy tickets</button>
          </div>
        )
    }
}

// PropTypes
Basket.propTypes = {
    basketToggle: PropTypes.func.isRequired,
    removeTicket: PropTypes.func.isRequired,
}
export default Basket;
