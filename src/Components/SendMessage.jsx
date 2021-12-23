import React, { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

export default function SendMessage() {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [warnMessage, setWarnMessage] = useState('');
    const send_Message = () => {
        if (state.name !== '' && state.email !== '' && state.subject !== '' && state.message !== '') {
            console.log(state)
        }
        else {
            setWarnMessage("Please Fill All Input Is Correctly")
            setTimeout(() => {
                setWarnMessage('');
            }, 3000);
        }
    }
    useEffect(() => {

    }, [])
    return (
        <div className="col-md-6 mb-5 mb-md-0">
            <h1 className='heading pb-3'>Send Message Us</h1>
            <div className="form-group pt-3">
                {warnMessage &&
                    <div className="mb-3">
                        <Alert variant="filled" severity="warning">{warnMessage}</Alert>
                    </div>}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="name_input" placeholder="Your Name" onChange={(e) => setState({ ...state, name: e.target.value })} value={state.name} />
                    <label for="name_input">Your Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email_input" placeholder="Your Email" onChange={(e) => setState({ ...state, email: e.target.value })} value={state.email} />
                    <label for="email_input">Your Email</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="subject_input" placeholder="Subject" onChange={(e) => setState({ ...state, subject: e.target.value })} value={state.subject} />
                    <label for="subject_input">Subject</label>
                </div>

                <div className="mb-3">
                    <textarea className="form-control" placeholder="Message" rows="5" onChange={(e) => setState({ ...state, message: e.target.value })} value={state.message}></textarea>
                </div>

                <div className="text-center">
                    <Button variant="contained" className='bg-primary text-white px-5 py-2 rounded-pill' onClick={() => send_Message()}>Send Message</Button>
                </div>

            </div>
        </div>
    )
}
