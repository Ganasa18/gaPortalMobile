const initReportState = {
  reportData: null,
  selectedCar: null,
};

export const reportReducer = (state = initReportState, action) => {
  switch (action.type) {
    case 'SET_REPORT':
      return {
        ...state,
        reportData: action.value,
      };
    case 'SET_SELECTED_CAR':
      return {
        ...state,
        selectedCar: action.value,
      };
    default:
      return state;
  }
};
