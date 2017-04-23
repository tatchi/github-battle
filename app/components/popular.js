import React, { Component } from 'react';

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    this.setState(() => ({
      selectedLanguage: language,
    }));
  }

  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    const liStyle = {
      color: 'red',
    };

    /*return (
      <ul className="languages">
        {languages.map(language => (
          <li
            key={language}
            onClick={() => this.updateLanguage(language)}
            style={this.state.selectedLanguage === language ? liStyle : null}>
            {language}
          </li>
        ))}
      </ul>
    );*/

    return (
      <ul className="languages">
        {languages.map(function(language) {
          return (
            <li
              key={language}
              onClick={this.updateLanguage.bind(null, language)}
              style={this.state.selectedLanguage === language ? liStyle : null}>
              {language}
            </li>
          );
          // bind this keywoard to the upper one and not the one from the map function itself.
        }, this)} 
      </ul>
    );
  }
}

export default Popular;
