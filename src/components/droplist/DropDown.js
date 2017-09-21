import React, { Component } from 'react';
import DropListItem from './DropListItem';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
  }

  toggle() {
    this.setState( {
      showing: !this.state.showing
    });
  }
  render() {

    let kids = this.state.showing ? this.props.children : undefined;

    return(
      <div>
        <p onClick={() => this.toggle()}>{this.props.name}</p>
        <ul>
          {kids}
        </ul>
      </div>
    );
  }
}

export default DropDown;
