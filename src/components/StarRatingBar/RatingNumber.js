import React, { Component } from 'react';

class RatingNumber extends Component {
  render() {

    const nobodyCares = {
      flexGrow: '1',
      fontSize: '2.2em',
      fontWeight: 'bold',
      paddingLeft: '5px',
      color: 'gray',
    };

    const onebodyCares = {
      flexGrow: '1',
      fontSize: '2.2em',
      fontWeight: 'bold',
      paddingLeft: '5px',
      color: 'red',
    };

    const somebodyCares = {
      flexGrow: '1',
      fontSize: '2.2em',
      fontWeight: 'bold',
      paddingLeft: '5px',
      color: 'orange',
    };

    const allottaBodyCares = {
      flexGrow: '1',
      fontSize: '2.2em',
      fontWeight: 'bold',
      paddingLeft: '5px',
      color: 'yellow',
    };

    const EVERYBODYcares = {
      flexGrow: '1',
      fontSize: '2.2em',
      fontWeight: 'bold',
      paddingLeft: '5px',
      color: 'green',
    };

    if (this.props.howGood === 0) {
      return(
        <div style={nobodyCares}>{this.props.display}</div>
      );
    }
    else if (this.props.howGood === 1) {
      return(
        <div style={onebodyCares}>{this.props.display}</div>
      );
    }
    else if (this.props.howGood === 2 || this.props.howGood === 3) {
      return(
        <div style={somebodyCares}>{this.props.display}</div>
      );
    }
    else if (this.props.howGood === 4) {
      return(
        <div style={allottaBodyCares}>{this.props.display}</div>
      );
    }
    else {
      return(
        <div style={EVERYBODYcares}>{this.props.display}</div>
      );
    }
  }
}

export default RatingNumber;
