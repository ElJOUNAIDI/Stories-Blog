import React from 'react'
import { useEffect } from 'react'
export default function Contact() {
	useEffect(() => {
        const form = document.querySelector('.validate-form');
        if (!form) return;

        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        const subjectInput = form.querySelector('input[name="subject"]');
        const messageInput = form.querySelector('textarea[name="message"]');

        form.addEventListener('submit', function(event) {
            let check = true;

            if (nameInput.value.trim() === '') {
                showValidate(nameInput);
                check = false;
            }

            if (subjectInput.value.trim() === '') {
                showValidate(subjectInput);
                check = false;
            }

            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailInput.value.trim().match(emailPattern)) {
                showValidate(emailInput);
                check = false;
            }

            if (messageInput.value.trim() === '') {
                showValidate(messageInput);
                check = false;
            }

            if (!check) {
                event.preventDefault();
            }
        });

        const inputs = form.querySelectorAll('.input1');
        inputs.forEach(function(input) {
            input.addEventListener('focus', function() {
                hideValidate(this);
            });
        });

        function showValidate(input) {
            const thisAlert = input.parentElement;
            thisAlert.classList.add('alert-validate');
        }

        function hideValidate(input) {
            const thisAlert = input.parentElement;
            thisAlert.classList.remove('alert-validate');
        }
    }, []);
  return (
    <>
        <div className="contact1">
		<div classNameName="container-contact1">
			<form className="contact1-form validate-form">
				<span className="contact1-form-title">
					Contact
				</span>

				<div className="wrap-input1 validate-input" data-validate = "Name is required">
					<input className="input1" type="text" name="name" placeholder="Name"></input>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input1" type="text" name="email" placeholder="Email"></input>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Subject is required">
					<input className="input1" type="text" name="subject" placeholder="Subject"></input>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea className="input1" name="message" placeholder="Message"></textarea>
					<span className="shadow-input1"></span>
				</div>

				<div className="container-contact1-form-btn">
					<button className="contact1-form-btn">
						<span>
							Send Email
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
    </>
  )
}
