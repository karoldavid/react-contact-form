import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, getFormSyncErrors } from "redux-form";
import { LinearProgress, RaisedButton, Snackbar } from "material-ui";
import "./ContactForm.css";
import * as actions from "../actions";
import { validate, getProgress } from "../utils/helpers";
import FormFields from "./FormFields";

class ContactForm extends Component {
	onFormSubmit = params => {
		this.props.submitData({ params, message: "" }, () =>
			this.props.reset()
		);
	};

	render() {
		const {
			errors,
			fields,
			handleSubmit,
			message,
			open,
			resetData
		} = this.props;

		return (
			<form onSubmit={handleSubmit(this.onFormSubmit)}>
				<LinearProgress
					mode="determinate"
					max={100}
					value={getProgress(errors, fields)}
				/>

				<FormFields fields={fields} />

				<div>
					<RaisedButton
						primary
						labelColor="#FFFFFF"
						type="submit"
						label="Submit"
						className={"submit-button"}
					/>
				</div>
				<Snackbar
					open={open}
					message={message}
					autoHideDuration={5000}
					onRequestClose={() => resetData()}
				/>
			</form>
		);
	}
}

const mapStateToProps = state => {
	const { message, open } = state.data;
	return {
		errors: getFormSyncErrors("contactForm")(state),
		message,
		open
	};
};

export default reduxForm({
	form: "contactForm",
	validate
})(connect(mapStateToProps, actions)(ContactForm));
