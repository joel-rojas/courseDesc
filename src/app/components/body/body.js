import React, {PropTypes, Component} from 'react';

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        {this.props.content}
      </div>
    );
  }
}

Body.propTypes = {
  content: PropTypes.element
};
