import React, { PureComponent } from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

class Show extends PureComponent {
  state = {
    showId: '',
    data: ''
  };

  async componentDidUpdate(prevProps) {
    const { showId } = this.props;
    if (showId !== prevProps) {
      const showView = await getShowInfo(showId);
      this.setState({
        showId,
        data: showView
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { showId } = props;
    console.log(showId);
    if (showId === state.showId) {
      return null;
    } else {
      return {
        showId: showId,
        data: null
      };
    }
  }

  render() {
    const { showId, data } = this.state;
    if (showId === '' || data === null) {
      return (
        <span className="show-inforation t-show-info">Шоу не выбрано</span>
      );
    } else if (showId !== '' && data !== null) {
      const { genres, image, name, summary } = data;
      const genresString = genres.join(', ');
      const { original } = image;
      return (
        <div className="Show">
          <img className="show-image" src={original} alt={name} />
          <h2 className="show-label t-show-name">{name}</h2>
          <p className="show-text t-show-genre">
            <b>Жанр: </b>
            {genresString}
          </p>
          <p
            className="show-text t-show-summary"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
      );
    }
  }
}
export default Show;
