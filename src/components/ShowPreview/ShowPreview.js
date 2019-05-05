// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ShowPreview.module.css';

class ShowPreview extends Component {
  render() {
    const { image, name, id, summary } = this.props;

    return (
      <div className={`${styles.container} t-preview`}>
        <div>
          <NavLink to={`/shows/${id}`} className="t-link">
            {name}
          </NavLink>
          {image && <img src={image.medium} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
