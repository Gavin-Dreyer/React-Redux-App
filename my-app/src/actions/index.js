import axios from 'axios'

export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCES'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const fetchArtist = () => dispatch => {
    dispatch({ type: START_FETCHING })
        const artistArray = ['https://api.discogs.com/artists/286', 'https://api.discogs.com/artists/25872', 'https://api.discogs.com/artists/151223', 'https://api.discogs.com/artists/25058']
        let emptyArray = []

        artistArray.forEach(item => {
            axios.get(item)
                .then(res => dispatch({ type: FETCH_SUCCESS, payload: emptyArray = [...emptyArray, res.data]}))
                .catch(err => dispatch({ type: FETCH_FAILURE, payload: err}))
        })
}