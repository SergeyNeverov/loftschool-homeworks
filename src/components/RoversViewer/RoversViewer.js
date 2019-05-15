import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchPhotosRequest,
  changeSol
} from '../../modules/RoverPhotos/actions';
import {
  getSol,
  getPhotos,
  getIsLoadedCurry,
  getErrorCurry
} from '../../modules/RoverPhotos/RoverPhotos';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import styles from './RoversViewer.module.css';

class RoversViewer extends Component {
  rovers = ['curiosity', 'opportunity', 'spirit'];

  componentDidMount() {
    const { fetchPhotosRequest } = this.props;
    this.rovers.forEach(rover =>
      fetchPhotosRequest({
        name: rover,
        sol: 1
      })
    );
  }

  render() {
    const {
      photos,
      changeSol,
      sol: { current, min, max },
      getIsLoaded,
      getError
    } = this.props;

    return (
      <div className={styles.root}>
        <SelectSol
          changeSol={changeSol}
          minSol={min}
          maxSol={max}
          selectedSol={current}
        />
        <div className={styles.сontainer}>
          {this.rovers.map(rover => {
            if (
              getIsLoaded(rover)(current)(photos) &&
              !getError(rover)(current)(photos)
            ) {
              return (
                <RoverPhotos
                  key={rover}
                  name={rover}
                  photos={photos[rover][`${current}`].photos}
                />
              );
            } else if (
              getIsLoaded(rover)(current)(photos) &&
              getError(rover)(current)(photos)
            ) {
              return <div key={rover}>Ошибка загрузки</div>;
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sol: getSol(state),
  photos: getPhotos(state),
  getIsLoaded: getIsLoadedCurry(state),
  getError: getErrorCurry(state)
});
const mapDispatchToProps = { fetchPhotosRequest, changeSol };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoversViewer);
