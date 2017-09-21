import React, { Component } from 'react';
import Star from './Star';
import RatingNumber from './RatingNumber';

class StarBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      permaScore: false,
    };
  }

  updateRating(value) {
    if (this.state.permaScore === false) {
      this.setState({
        rating: value,
      });
    }
  }

  default() {
    if (this.state.permaScore === false) {
      this.setState({
        rating: 0,
      });
    }
  }

  select(value) {
    this.setState({
      rating: value,
      permaScore: true,
    });
  }

  render() {

    const flexSpan = {
      display: 'flex',
      alignItems: 'baseLine',
      height: '55px',
      width: '330px',
      backgroundColor: 'lightgray',
      borderRadius: '8px',
    };

    const firstStar = {
    };

    return(
      <span style={flexSpan}>

        <RatingNumber
          howGood={this.state.rating}
          display={this.state.rating}
        />

        <Star style={firstStar}
          star={this.state.rating > 0}
          hover={ event => this.updateRating(1)}
          leave={ event => this.default()}
          click={ event => this.select(1)}
        />

        <Star star={this.state.rating > 1}
          hover={ event => this.updateRating(2)}
          leave={ event => this.default()}
          click={ event => this.select(2)}
        />

        <Star star={this.state.rating > 2}
          hover={ event => this.updateRating(3)}
          leave={ event => this.default()}
          click={ event => this.select(3)}
        />

        <Star star={this.state.rating > 3}
          hover={ event => this.updateRating(4)}
          leave={ event => this.default()}
          click={ event => this.select(4)}
        />

        <Star star={this.state.rating > 4}
          hover={ event => this.updateRating(5)}
          leave={ event => this.default()}
          click={ event => this.select(5)}
        />
      </span>
    );
  }
}

export default StarBar;
