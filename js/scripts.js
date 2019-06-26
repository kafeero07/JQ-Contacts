
// creates a contact object
$(document).ready(function(){
	$("img").delay(400).fadeOut(500, function() {
		$(this).attr("src", "img/david.jpeg.jpg").fadeIn(500);
	});
	$("p").hide();
	
});
function Contact(firstname, phone) {
	this.firstname = firstname;
	this.phone = phone;
};

// create an array to store the contacts
var contacts = [];

// get the input from the form and save it to contacts array
var saveContact = () => {
	var firstname = document.querySelector('[name="firstname"]').value;
	var phone = document.querySelector('[name="phone"]').value;
	// create a contact object using the constructor
	var newcontact = new Contact(firstname, phone);
	// save the contact
	contacts.push(newcontact);
	// print the array of contacts
	console.log('saved!');
	// console.log(contacts[0].firstname);
};


var searchContacts = () => {
	// clear the element
	document.getElementById("result").innerHTML = "";
	// get search querry from the form
	var search_phrase = document.querySelector('[name="search_phrase"]').value;
	// loop through indexes of elements in the contacts array
	for (i = 0; i < contacts.length; i++) {
		// get the contact at that index
		contact = contacts[i];
		// get the first name of that contact
		firstname = contact.firstname;
		phone = contact.phone;
		// if the name includes what the user is serching for, 
		if (firstname.includes(search_phrase)) {
		// print the name
		console.log(firstname, " found!") 
		// return the contact info to the page
		var ptag = document.createElement("p");
		var node = document.createTextNode(firstname + ": "+ phone);
		ptag.appendChild(node);
		var element = document.getElementById("result");
		element.appendChild(ptag);
	} else {
		// else, return an error message
		console.log("Not found!")
	}
	};
};


