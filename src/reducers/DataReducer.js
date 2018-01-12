import {
	SUBMIT_FORM_DATA,
	SUBMIT_FORM_DATA_SUCCESS,
	SUBMIT_FORM_DATA_ERROR,
	SUBMIT_FORM_DATA_RESET
} from "../actions/types";

const INITIAL_STATE = {
	submitting: false,
	success: false,
	error: false,
	message: "",
	open: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SUBMIT_FORM_DATA:
			return { ...state, submitting: true };
		case SUBMIT_FORM_DATA_SUCCESS:
			return {
				...state,
				submitting: false,
				success: true,
				open: true,
				message: action.payload
			};
		case SUBMIT_FORM_DATA_ERROR:
			return {
				...state,
				submitting: false,
				success: false,
				error: true,
				open: true,
				message: action.payload
			};
		case SUBMIT_FORM_DATA_RESET:
			return INITIAL_STATE;
		default:
			return state;
	}
}
