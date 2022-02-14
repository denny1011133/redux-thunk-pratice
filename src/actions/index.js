import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchAlbums = async () => {
    const response = await jsonPlaceholder.get("/alubms")
    return {
        type: "FETCH_ALBUMS",
        payload: response
    }
}