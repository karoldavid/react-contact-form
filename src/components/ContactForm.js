import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, getFormSyncErrors } from "redux-form";
import { TextField, RaisedButton, LinearProgress, Snackbar } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./ContactForm.css";
import * as actions from "../actions";

const FIELDS = [
	{ name: "firstName", label: "First Name", required: true },
	{ name: "lastName", label: "Last Name", required: true },
	{ name: "company", label: "Company Name", required: true },
	{ name: "email", label: "Email Address", required: true },
	{ name: "number", label: "Phone Number", required: false },
	{ name: "skype", label: "Skype ID", required: false },
	{
		name: "projectDescription",
		label: "Project Description",
		required: true
	}
];

const REQUIRED = FIELDS.reduce((previous, field) => {
	return field.required ? previous + 1 : previous;
}, 0);

const MAX = 100;

const validate = values => {
	const errors = {};
	const requiredFields = FIELDS.reduce((previous, field) => {
		if (field.required) previous.push(field.name);
		return previous;
	}, []);
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = "Required";
		}
	});
	if (
		values.email &&
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Invalid email address";
	}
	return errors;
};

class ContactForm extends Component {
	state = {
		open: false,
		message: "Your Form has been submitted",
		duration: 3000
	};

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
		this.props.submitData(params);
		this.setState({
			open: true
		});
		this.props.reset();
	};

	render() {
		const { errors, handleSubmit } = this.props;
		const stillToEnter = Object.keys(errors).length;
		const progress = (REQUIRED - stillToEnter) * (100 / REQUIRED);

		return (
			<MuiThemeProvider>
				<form onSubmit={handleSubmit(this.onFormSubmit)}>
					<LinearProgress
						mode="determinate"
						max={MAX}
						value={progress}
					/>

					{FIELDS.map(field => this.makeForm(field))}

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
						open={this.state.open}
						message={this.state.message}
						autoHideDuration={this.state.duration || 5000}
						onRequestClose={() =>
							this.setState({
								open: false
							})
						}
					/>
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
