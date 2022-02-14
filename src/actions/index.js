import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/alubms');

    dispatch({ type: 'FETCH_ALBUMS', payload: response });
};
