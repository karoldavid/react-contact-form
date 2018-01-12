import { SUBMIT_FORM_DATA, SUBMIT_FORM_DATA_SUCCESS, SUBMIT_FORM_DATA_ERROR } from "./types";
import firebase from "../utils/firebase";

export const submitData = params => {
	return dispatch => {
		dispatch({
			type: SUBMIT_FORM_DATA
		});
		const companiesRef = firebase.database().ref("companies");
		companiesRef.push(params, error => {
			if (error) dispatch({
					type: SUBMIT_FORM_DATA_ERROR
				});
			else
				dispatch({
					type: SUBMIT_FORM_DATA_SUCCESS
				});
		});
	};
};
