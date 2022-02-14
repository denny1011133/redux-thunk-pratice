import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchAlbums = () => async dispatch => {
    const response = await jsonPlaceholder.get('/albums');
    dispatch({ type: 'FETCH_ALBUMS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};
