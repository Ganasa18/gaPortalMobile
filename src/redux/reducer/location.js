const initLocationState = {
  formLocation: [
    {
      key: 1,
      category: '',
      location: '',
    },
    {
      key: 2,
      category: '',
      location: '',
    },
  ],
  formIdSelect: null,
  formCategorySelect: null,
};

export const locationReducer = (state = initLocationState, action) => {
  switch (action.type) {
    case 'SET_FORM_LOCATION':
      return {
        ...state,
        formLocation: action.value,
      };
    case 'SET_FORM_SELECT_ID':
      return {
        ...state,
        formIdSelect: action.value,
      };
    case 'SET_FORM_SELECT_CATEGORY':
      return {
        ...state,
        formCategorySelect: action.value,
      };
    default:
      return state;
  }
};
