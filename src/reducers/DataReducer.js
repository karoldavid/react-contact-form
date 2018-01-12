import {
	SUBMIT_FORM_DATA,
	SUBMIT_FORM_DATA_SUCCESS,
	SUBMIT_FORM_DATA_ERROR,
	SUBMIT_FORM_DATA_RESET
} from "../actions/types";

const INITIAL_STATE = {
	submitting: false,
	success: false,
	error: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SUBMIT_FORM_DATA:
			console.log(action.type);
			return { ...state, submitting: true, success: false };
		case SUBMIT_FORM_DATA_SUCCESS:
			console.log(action.type);
			return { ...state, submitting: false, success: true };
		case SUBMIT_FORM_DATA_ERROR:
			console.log(action.type);
			return { ...state, submitting: false, success: false, error: true };
		case SUBMIT_FORM_DATA_RESET:
			console.log(action.type);
			return INITIAL_STATE;
		default:
			return state;
	}
}
