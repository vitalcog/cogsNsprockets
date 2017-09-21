import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { id: 0, name: 'Calculator' },
        { id: 1, name: 'Snippets' },
        { id: 2, name: 'Gabble' },
      ],
    };
  }

  render() {
    const rp = this.props.match.params;
    const project = this.state.projects[rp.id];

    return(
      <div>The {project.name}</div>
    );
  }
}

export default Project;
