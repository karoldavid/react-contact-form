import firebase from "firebase";

const config = {
	apiKey: "AIzaSyCuQ0aAklvGzwGmoQ-UBFH88YXn3ywbDw0",
	authDomain: "agile-form.firebaseapp.com",
	databaseURL: "https://agile-form.firebaseio.com",
	projectId: "agile-form",
	storageBucket: "",
	messagingSenderId: "335520414086"
};
firebase.initializeApp(config);

export default firebase;
