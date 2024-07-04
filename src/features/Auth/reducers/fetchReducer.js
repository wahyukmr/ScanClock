export const initialState = {
  options: [],
  loading: true,
  error: null,
};

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        options: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
