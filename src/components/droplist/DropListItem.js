import React, { Component } from 'react';

class DropListItem extends Component {
  render() {
    return(
      <li>{this.props.name}</li>
    );
  }
}

export default DropListItem;
