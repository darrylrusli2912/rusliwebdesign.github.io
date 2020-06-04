"use strict";

// Unobtrusive scripting - not mixing up JS & HTML code, not getting in the way of other peoples' JS code, etc...


// Get reference to the form
let contactForm = document.getElementById("contact-form");

// Check that the form exists
if (contactForm) {

	// Disable HTML5 validation (novalidate is a boolean attribute)
	contactForm.setAttribute("novalidate", "");

	// Handle the submit event (add event listener)
	contactForm.addEventListener("submit", (event) => {

		// Clear previously-shown error messages
		hideAllErrors(contactForm);

		// Get references to the form fields
		//let firstName = document.getElementById("firstName");
		let name = contactForm.elements["txtName"];
		let phone = contactForm.elements["txtPhone"];
		let email = contactForm.elements["txtMail"];
		let comments = contactForm.elements["projectDescription"];

		// Check form field values are valid...

		// Validate name
		if (name.value.trim().length < 2) {

/*			// Stop the form submitting
			event.preventDefault();

			// Display an error message
			name.style.color = "red";
			name.style.backgroundColor = "#ffcccc";
			name.focus();
			name.parentNode.classList.add("error");*/

			//Show the error for the name field - pass through the event object & the error message
			showError(name, event, "Must be 2 or more characters.");
		}


		// Create regular expression (regex) pattern to match an Australian phone number (isn't it beautiful?)
		let phoneRegex = /^((000|112|106)|(((\+61 ?\(?0?)|(\(?0))[23478]\)?([- ]?[0-9]){8})|((13|18)([- ]?[0-9]){4}|(1300|1800|1900)([- ]?[0-9]){6}))$/;

		// Validate phone
		if (phone.value === "" && !phoneRegex.test(phone.value)) {
			showError(phone, event, "Must be a valid Australian phone number.");
		}


		// Create regular expression (regex) pattern to match an email address
		let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		// Validate email
		if (email.value === "") {
			showError(email, event, "Email is required.");
		}
		else if (!emailRegex.test(email.value.trim())) {
			showError(email, event, "Must be a valid email address.");
		}


		
		// Validate comments
		if (comments.value.trim().length < 20) {
			showError(comments, event, "Must be 20+ characters. Verbosity monstrosity.");
		}

		/*
		 * Check topics/languages (2 or more)
		 */

		// OPTION 1

/*		// Get all the topic checkboxes
		let checkboxes = contactForm.querySelectorAll("input[name^=topic]");

		// Define a counter for the checked checkboxes
		let checkCount = 0;

		// Loop through each checkbox
		checkboxes.forEach((checky) => {

			// Check if Checky the checkbox is checked and update the counter if it's checked
			if (checky.checked) {
				checkCount++;
			}

			//checkCount += checky.checked ? 1 : 0;
			//checkCount += Number(checky.checked);
			//checkCount += checky.checked;

		});

		// Check how many checkboxes have been checked
		if (checkCount < 2) {
			showError(topicDesc, event, "Must choose 2 or more topics.");
		}
*/



		
	});


	function showError(element, event, errorMessage) {

		// Stop the form submitting
		event.preventDefault();

		// Add the "error" class to the input element's parent
		element.parentNode.classList.add("error");

		// Find span.error-message
		let errorSpan = element.parentNode.querySelector(".error-message");

		// Check if error span doesn't exist... create a new one!  :)
		if (!errorSpan) {
			errorSpan = document.createElement("span");
			errorSpan.classList.add("error-message");
			element.parentNode.appendChild(errorSpan);
		}

		// Update error span's message
		errorSpan.innerHTML = errorMessage;

	}

	function hideAllErrors(form) {

		// Find all elements with a class of "error" in the form
		let errors = form.querySelectorAll(".error");

		// Loop through each element and remove the "error" class
		for (let i = 0; i < errors.length; i++) {
			errors[i].classList.remove("error");
		}

		// Different way of looping through the elements... using forEach() and arrow functions
		//errors.forEach((item) => {item.classList.remove("error")});

	}
}