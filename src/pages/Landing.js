import React, { Component } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Landing.css';
import plus from './plus.png';
import Typography from '@material-ui/core/Typography';
import { connect, Provider } from 'react-redux';
import {
  addProject
} from '../actions/landingAction';
import store from '../reducers';

const landingData = [
  { id: 0, name: 'Churn Project', detail: 'Midwest 2018' },
  { id: 1, name: 'Churn Project', detail: 'East Coast 2018' },
  { id: 2, name: 'Complaints Analysis', detail: '2017 - 2018 data' },
];

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: landingData,
    };
  }

  render() {
    return (
      <div className="landing">
      <div className="add" onClick={addProject}>
        <img src={plus} alt="fireSpot" class="plus"/>
        <Typography id="newtext" variant="title" color="textSecondary">Create New Project</Typography>
      </div>
      <div className="cards">
        {landingData.map((dataItem) => <ProjectCard data={dataItem}/>)}
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { test } = state.landingReducer;
  return { test };
};

const landingActions = {
  addProject,
};

const ConnectedLanding = connect(
  mapStateToProps,
  { ...landingActions }
)(Landing);

export default callback => (
  () => (
    <Provider store={store}>
      <ConnectedLanding callback={callback} />
    </Provider>
  )
);
