const initGlobalState = {
  isLoading: false,
  isModalConfirm: false,
  isModalRemark: false,
  isModalMonth: false,
  isEnabled: false,
  isRemarkSelected: '',
  isCountToday: 1,
};

export const globalReducer = (state = initGlobalState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    case 'SET_IS_ENABLED':
      return {
        ...state,
        isEnabled: action.value,
      };
    case 'SET_MODAL_REMARK': {
      return {
        ...state,
        isModalRemark: action.value,
      };
    }
    case 'SET_MODAL_CONFIRM': {
      return {
        ...state,
        isModalConfirm: action.value,
      };
    }
    case 'SET_REMARK_SELECT': {
      return {
        ...state,
        isRemarkSelected: action.value,
      };
    }
    case 'SET_MONTH_SELECT': {
      return {
        ...state,
        isModalMonth: action.value,
      };
    }
    case 'SET_COUNT_TODAY': {
      return {
        ...state,
        isCountToday: action.value,
      };
    }
    default:
      return state;
  }
};
