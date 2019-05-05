// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ShowPage.module.css';
import { showsRequest } from '../../actions';

class ShowPage extends Component {
  componentDidMount() {
    const { showsRequest, match } = this.props;
    showsRequest(match.params.id);
  }

  renderShow = data => (
    <div className="App">
      <p>{data.name}</p>
      {data.image && <img alt={data.name} src={data.image.medium} />}
      <div dangerouslySetInnerHTML={{ __html: data.summary }} />
      <div className={styles.cast}>
        {data._embedded &&
          data._embedded.cast.map(actor => (
            <div
              key={`${actor.character.id} + ${actor.person.id}`}
              className="t-person"
            >
              <p>{actor.person.name}</p>
              {actor.person.image && (
                <img alt={actor.person.name} src={actor.person.image.medium} />
              )}
            </div>
          ))}
      </div>
    </div>
  );

  renderError = error => (
    <div className="App">Произошла ошибка: {error.message}</div>
  );

  render() {
    const { isLoading, showData, error } = this.props;
    if (isLoading) {
      return <p>Происходит загрузка</p>;
    } else if (error) {
      return this.renderError(error);
    } else if (showData) {
      return this.renderShow(showData);
    } else {
      return <p>Что-то пошло не так.</p>;
    }
  }
}

const mapStateToProps = state => state.shows;
const mapDispatchToProps = { showsRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
