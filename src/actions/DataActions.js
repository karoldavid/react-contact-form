import {
	SUBMIT_FORM_DATA,
	SUBMIT_FORM_DATA_SUCCESS,
	SUBMIT_FORM_DATA_ERROR,
	SUBMIT_FORM_DATA_RESET
} from "./types";
import firebase from "../utils/firebase";

export const submitData = ({ params, message }, callback) => {
	return dispatch => {
		dispatch({
			type: SUBMIT_FORM_DATA,
			payload: message
		});
		const companiesRef = firebase.database().ref("companies");
		companiesRef.push(params, error => {
			if (error)
				dispatch({
					type: SUBMIT_FORM_DATA_ERROR,
					payload: "Data submission failed!"
				});
			else
				dispatch({
					type: SUBMIT_FORM_DATA_SUCCESS,
					payload: "Data successfully submitted!"
				});
			if (callback) callback();
		});
	};
};

export const resetData = () => {
	return {
		type: SUBMIT_FORM_DATA_RESET
	};
};
