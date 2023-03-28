import './contact.css';
import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // const [nameError, setNameError] = useState('');
    // const [emailError, setEmailError] = useState('');
    // const [messageError, setMessageError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name'){
            setName(inputValue)
        } else if (inputType === 'email'){
            setEmail(inputValue)
        } else if (inputType === 'message'){
            setMessage(inputValue)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage("Please submit a valid email!")
            return;
        }

        if (name === '' || email === '' || message === ''){
            setErrorMessage("Please fill out all fields!")
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="contact">
            <h1>Contact Levi</h1>
            <form>
                <input 
                value ={name}
                name = "name"
                onChange={handleInputChange}
                type = "text"
                placeholder='Name'
                />
                <input 
                value ={email}
                name = "email"
                onChange={handleInputChange}
                type = "text"
                placeholder='Email'
                />
                <textarea 
                value ={message}
                name = "message"
                onChange={handleInputChange}
                type = "textarea"
                placeholder='Message'
                />
                <button type = "button" onClick={handleSubmit}>Submit</button>
                {errorMessage && (
                    <div>
                        <p className='error-message'>{errorMessage}</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Contact;