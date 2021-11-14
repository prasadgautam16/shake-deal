import axios from 'axios';
import { GET_TEAM, SET_MESSAGE } from './actionsConst';

//Get all team
export const getAllTeam = () => async dispatch => {
    try {
        const res = await axios.get('teams');

        dispatch({
            type: GET_TEAM,
            payload: res.data
        });

    } catch (error) {
        console.error(error);
    }
}

export const assignTask = (formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { task, teamSelected } = formData;
        const body = JSON.stringify({ team: teamSelected, taskContent: task });

    
        const res = await axios.post('assignTask', body, config);

        dispatch({
            type: SET_MESSAGE,
            payload: res.data
        });

    } catch (error) {
        console.error(error);
    }
}