import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchAlbums = () => async dispatch => {
    const response = await jsonPlaceholder.get('/albums');
    dispatch({ type: 'FETCH_ALBUMS', payload: response.data});
};
