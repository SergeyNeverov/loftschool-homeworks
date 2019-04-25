import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (storageKey, data) => WrappedComponent => {
  return class extends Component {
    state = {
      savedData: load(storageKey) ? load(storageKey) : data
    };

    saveData = data => {
      save(storageKey, data);
      this.setState({ savedData: data });
    };

    render() {
      const { savedData } = this.state;
      return (
        <WrappedComponent savedData={savedData} saveData={this.saveData} />
      );
    }
  };
};

export default withLocalstorage;
