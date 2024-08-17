export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchData = () => ({ type: FETCH_DATA });
export const fetchDataSuccess = (payload) => ({ type: FETCH_DATA_SUCCESS, payload });
