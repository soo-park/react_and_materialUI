const defaultState = {
  test: 0,
};

export default function landingReducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_PROJECT': {
      const newState = {
        ...state,
        test: ++ state.test,
      }
      return newState;
    }
    default: {
      return state;
    }
  }
};
