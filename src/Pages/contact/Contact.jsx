
import React, { useState } from 'react';
import "./contact.scss";
import { makeStyles } from '@material-ui/core/styles';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FadeIn from 'react-fade-in';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    pin: {
        '& svg': {
            fontSize: 60
        }
    },
    insta: {
        '& svg': {
            fontSize: 60
        }
    },
    in: {
        '& svg': {
            fontSize: 60
        }
    },
}));

export default function Contact() {

    const [result, setResult] = useState(null);

    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('/send', { ...state })
            .then(response => {
                setResult(response.data);
                setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            })
            .catch(() => {
                setResult({
                    success: false,
                    message: 'Something went wrong. Please try again later'
                });
            });
    }
    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };


    const classes = useStyles();
    return (

        <div className="contact" id="contact">
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )}
            <div className="left">
                <FadeIn delay="100" transitionDuration="500">
                    <div className="title">
                        GET IN TOUCH
                    </div>
                    <div className="linkedin">
                        <div className={classes.in}>
                        <a href="https://www.linkedin.com/in/thngyuxuan/" rel="noreferrer" target="_blank"><LinkedInIcon /></a>
                        </div>
                        <a href="https://www.linkedin.com/in/thngyuxuan/" rel="noreferrer" target="_blank" className="link">in/thngyuxuan</a>
                    </div>
                    <div className="insta">
                        <div className={classes.insta}>
                            <a href="https://www.instagram.com/yuxuanthng/" rel="noreferrer" target="_blank"><InstagramIcon /></a>
                        </div>
                        <a href="https://www.instagram.com/yuxuanthng/" rel="noreferrer" target="_blank" className="link">@yuxuanthng</a>
                    </div>
                </FadeIn>
            </div>
                <div className="right">
                    <FadeIn delay="100" transitionDuration="500">
                        <h2>Drop me a message!</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" onChange={onInputChange} />
                            <input type="email" placeholder="Email" onChange={onInputChange} />
                            <textarea placeholder="Message" onChange={onInputChange} />
                            <button type="submit">Send</button>
                        </form>
                    </FadeIn>
                </div>
            </div>

    )
    
}
