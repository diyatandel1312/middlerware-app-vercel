const fetchDataRequest = () => ({
    type: 'FETCH_DATA_REQUEST',
  });
  
const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  });
  
const fetchDataFailure = (error) => ({
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  });
  
export const fetchDataFromAPI = () => {
    return async (dispatch) => {
      dispatch(fetchDataRequest());
      try {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
  };
