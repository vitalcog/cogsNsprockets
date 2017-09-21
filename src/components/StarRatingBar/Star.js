import React, { Component } from 'react';

// filled in star: &#9733;
// empty star:     &#9734;

class Star extends Component {
  render() {

    const shinyStar = {
      display: 'flex',
      alignContent: 'center',
      color: 'gold',
      textShadow: '0 0 10px gold',
      fontSize: '40px',
      height: '55px',
      width: '55px',
      paddingLeft: '5px',
    };

    const droopyStar = {
      display: 'flex',
      alignContent: 'center',
      color: 'darkgray',
      textShadow: '0 0 10px black',
      fontSize: '40px',
      height: '55px',
      width: '55px',
      paddingLeft: '5px',
    };

    if (this.props.star === false) {
      return(
        <div
          style={droopyStar}
          onMouseLeave={this.props.leave}
          onMouseEnter={this.props.hover}
          onClick={this.props.click}>
          &#9734;
        </div>
      );
    } else {
      return(
        <div
          style={shinyStar}
          onMouseLeave={this.props.leave}
          onMouseEnter={this.props.hover}
          onClick={this.props.click}>
          &#9733;
        </div>
      );
    }
  }
}

export default Star;
