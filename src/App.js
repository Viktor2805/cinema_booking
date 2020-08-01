import React from 'react';
import './scss/normalize.css'; 
import './scss/App.css';
import Seats from './components/Seats.js';
import CheckOut from './components/CheckOut.js';
import Movie from './components/Movie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.childRef  = React.createRef();
    this.state = {
      seats:[],
      selected:[],
      positionOfBasket:{},
      pathToMove:{},
      basketOpen:false
    };
  }
  
    // create free seats and make reserved seats random
    componentDidMount = () => {
      // coordinates of basket for animation --> move to basket
      let {x,y} = this.childRef.current.myRef.current.getBoundingClientRect();
      this.setState({positionOfBasket:{xOfSeat:x,yOfSeat:y}});

      let seats = [];
      let num = 1;
      for (let i = 1; i <= 20; i++) {
        for (let index = 1; index <= 40; index++) {
          let numOfSeat = String.fromCharCode(i + 64) + index;
          if (Math.floor(Math.random() * 9) === 5) {
            seats.push({id:num++,"numOfseat":numOfSeat,reserved:true,selected:false});
          }
          else seats.push({id:num++,"numOfSeat":numOfSeat,reserved:false,selected:false});
        };
      };
      this.setState({seats});
    };
  
    selectSeat = (id,e) => {
      // path to move seat elem to basket
      let {x,y} = e.currentTarget.getBoundingClientRect();
      let {xOfSeat,yOfSeat} = this.state.positionOfBasket;
      this.setState({pathToMove:{x:xOfSeat - x, y:yOfSeat - y, idOfSeat:id}});

      this.setState({
        seats: this.state.seats.map(seat => {
          if (seat.id === id && !seat.reserved) {
            seat.selected = !seat.selected;
            if (!seat.selected) {
              this.setState({selected:this.state.selected.filter(x => {
                if (x.id !== seat.id) return x;
              })});
            } else this.setState({selected:[...this.state.selected,seat]});
          };
          return seat;
        })
      });
    };

    // toggle between opening and closinf basket
    basketToggle = (e) => {
      if (this.state.selected.length !==0) {
        this.setState({basketOpen:!this.state.basketOpen})
      }
    }  
    // remove ticket from basket
    removeTicket = (id) => {
      this.setState({
        seats: this.state.seats.map(seat => {
          if (seat.id === id && !seat.reserved) {
            seat.selected = !seat.selected;
            if (!seat.selected) {
              this.setState({selected:this.state.selected.filter(x => {
                if (x.id !== seat.id) return x;
              })});
            } 
          };
          return seat;
        })
      });
    }
    
    render() {
      const {id,seats,selected,pathToMove,basketOpen} = this.state;
      return (
        <div className="App">
          <Movie></Movie>
          <Seats pathToMove={pathToMove} seats={seats} selectSeat={this.selectSeat}></Seats>
          <CheckOut ref={this.childRef} selected={selected}
            basketToggle={this.basketToggle}
            basketOpen={basketOpen} removeTicket={this.removeTicket}>
          </CheckOut>
        </div>
      )
	}
}

export default App;
