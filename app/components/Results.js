import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        Results
      </div>
    );
  }
}

Results.propTypes = {

};

export default Results;