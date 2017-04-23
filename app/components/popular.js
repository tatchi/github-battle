import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

const SelectLanguage = props => {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  const liStyle = {
    color: '#d0021b',
  };
  return (
    <ul className="languages">
      {languages.map(function(language) {
        return (
          <li
            key={language}
            onClick={props.onSelect.bind(null, language)}
            style={props.selectedLanguage === language ? liStyle : null}>
            {language}
          </li>
        );
        // bind this keywoard to the upper one and not the one from the map function itself.
      }, this)}
    </ul>
  );
};

SelectLanguage.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
};

const RepoGrid = props => {
  return (
    <ul className="popular-list">
      {props.repos.map((repo, index) => (
        <li key={repo.name} className="popular-item">
          <div className="popular-rank">
            #{index + 1}
          </div>
          <ul className="space-list-items">
            <li>
              <img className="avatar" src={repo.owner.avatar_url} alt={`Avatar for ${repo.owner.login}`} />
            </li>
            <li>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
            <li>
              @{repo.owner.login}
            </li>
            <li>
              {repo.stargazers_count} stars
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    // if (this.state.selectedLanguage !== language) {
    this.setState(() => ({
      selectedLanguage: language,
      repos: null,
    }));

    api.fetchPopularRepos(language).then(repos =>
      this.setState(prevState => {
        // console.log(prevState.selectedLanguage === language);
        return {
          repos: repos,
        };
      }),
    );
    // }
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  render() {
    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} />
        {!this.state.repos ? <p>LOADING</p> : <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
}

export default Popular;
