import axios from 'axios';

// Retrieves corresponding page
export const changePage = page => async dispatch => {
    const res = await axios.get(`https://swapi.co/api/people/?page=${page}`);
    dispatch({
        type: 'GET_STAR_WARS_CHARACTERS',
        payload: res.data
    });
};

// Retrieves the searched character
export const searchCharacter = search => async dispatch => {
    const res = await axios.get(`https://swapi.co/api/people/?search=${search}`);
    dispatch({
        type: 'GET_STAR_WARS_CHARACTERS',
        payload: res.data
    });
};