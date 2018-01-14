import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, getFormSyncErrors } from "redux-form";
import { TextField, RaisedButton, LinearProgress } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./ContactForm.css";
import * as actions from "../actions";
import { validate } from "../utils/helpers";

class ContactForm extends Component {
	renderTextField = ({
		input,
		label,
		meta: { touched, error },
		...custom
	}) => (
		<TextField
			hintText={label}
			floatingLabelText={label}
			errorText={touched && error}
			{...input}
			{...custom}
		/>
	);

	makeForm = ({ name, label }) => {
		return (
			<div key={name}>
				<Field
					name={name}
					component={this.renderTextField}
					label={label}
				/>
			</div>
		);
	};

	onFormSubmit = params => {
		this.props.submitData({ params, message: "" }, () =>
			this.props.reset()
		);
	};

	getProgress(errors, data) {
		const required = data.reduce((previous, item) => {
			return item.required ? previous + 1 : previous;
		}, 0);
		const stillToEnter = Object.keys(errors).length;
		return (required - stillToEnter) * (100 / required);
	}

	render() {
		const { errors, handleSubmit, fields } = this.props;

		return (
			<MuiThemeProvider>
				<form onSubmit={handleSubmit(this.onFormSubmit)}>
					<LinearProgress
						mode="determinate"
						max={100}
						value={this.getProgress(errors, fields)}
					/>

					{fields.map(field => this.makeForm(field))}

					<div>
						<RaisedButton
							primary
							labelColor="#FFFFFF"
							type="submit"
							label="Submit"
							className={"submit-button"}
						/>
					</div>
				</form>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = state => {
	return {
		errors: getFormSyncErrors("contactForm")(state)
	};
};

export default reduxForm({
	form: "contactForm",
	validate
})(connect(mapStateToProps, actions)(ContactForm));
