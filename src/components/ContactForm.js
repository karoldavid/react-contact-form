import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { TextField, RaisedButton } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const validate = values => {
	const errors = {};
	const requiredFields = ["firstName", "lastName", "email", "company", "position", "request"];
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

	  onFormSubmit = params => {

	    console.log(params)
	  };

	render() {
		const { handleSubmit } = this.props;

		return (
			<MuiThemeProvider>
				<form onSubmit={handleSubmit(this.onFormSubmit)}>
					<div>
						<Field
							name="firstName"
							component={this.renderTextField}
							label="First Name"
						/>
					</div>
					<div>
						<Field
							name="lastName"
							component={this.renderTextField}
							label="Last Name"
						/>
					</div>
					<div>
						<Field
							name="email"
							component={this.renderTextField}
							label="email"
						/>
					</div>
					<div>
						<Field
							name="company"
							component={this.renderTextField}
							label="company"
						/>
					</div>
					<div>
						<Field
							name="position"
							component={this.renderTextField}
							label="position"
						/>
					</div>
					<div>
						<Field
							name="request"
							component={this.renderTextField}
							label="request"
						/>
					</div>
					<RaisedButton primary labelColor="#FFFFFF" type="submit" label="Submit" />
				</form>
			</MuiThemeProvider>
		);
	}
}

export default reduxForm({
	form: "ContactForm",
	validate
})(ContactForm);
