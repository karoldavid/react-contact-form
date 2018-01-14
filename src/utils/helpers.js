export const validate = (values, props) => {
	const errors = {};

	const requiredFields = props.fields.reduce((previous, field) => {
		if (field.required) previous.push(field.name);
		return previous;
	}, []);

	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = "Required";
		}
	});

	if (values.firstName && values.firstName.length < 2) {
		errors.firstName = "First Name too short";
	}
	if (values.lastName && values.lastName.length < 2) {
		errors.lastName = "Last Name too short";
	}
	if (values.company && values.company.length < 2) {
		errors.company = "Company Name too short";
	}
	if (
		values.email &&
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Invalid email address";
	}
	if (values.number && values.number.length < 10) {
		errors.number = "Number too short";
	}
	if (values.skype && (values.skype.length < 6 || values.skype.length > 32)) {
		errors.skype =
			"Skype ID cannot be shorter than six characters or longer than 32";
	}
	if (values.projectDescription && values.projectDescription.length < 20) {
		errors.projectDescription =
			"Project Description cannot be shorter than 20 characters";
	}

	return errors;
};

export const getProgress = (errors, data) => {
	const required = data.reduce((previous, item) => {
		return item.required ? previous + 1 : previous;
	}, 0);
	const stillToEnter = Object.keys(errors).length;
	return (required - stillToEnter) * (100 / required);
};
