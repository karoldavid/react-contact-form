import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { TextField, RaisedButton } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const FIELDS = [
	{ name: "firstName", label: "First Name" },
	{ name: "lastName", label: "Last Name" },
	{ name: "company", label: "Company" },
	{ name: "email", label: "Email" },
	{ name: "number", label: "Number" },
	{ name: "skype", label: "Skype ID" },
	{ name: "projectDescription", label: "Project Description" }
];

const validate = values => {
	const errors = {};
	const requiredFields = ["firstName"];
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
		console.log(params);
	};

	render() {
		const { handleSubmit, reset, submitting } = this.props;

		return (
			<MuiThemeProvider>
				<form onSubmit={handleSubmit(this.onFormSubmit)}>
					{FIELDS.map(field => this.makeForm(field))}

					<div>
						<RaisedButton
							primary
							labelColor="#FFFFFF"
							type="submit"
							disabled={submitting}
							label="Reset"
							onClick={reset}
						/>

						<RaisedButton
							primary
							labelColor="#FFFFFF"
							type="submit"
							disabled={submitting}
							label="Submit"
						/>
					</div>
				</form>
			</MuiThemeProvider>
		);
	}
}

export default reduxForm({
	form: "ContactForm",
	validate
})(ContactForm);
