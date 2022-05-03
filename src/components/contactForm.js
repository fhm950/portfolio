import emailjs from "emailjs-com";
import React, {useState} from 'react';
import "../css/style.css";

export default function ContactUs() {

    const [mailSent, SetMailSent] = useState(false);
    

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_u2o3pdu', 'template_32dd9xl', e.target, 'aVJpdCvfgw9_yJyb9')
            .then((result) => {
                if (result.text === "OK") {
                    SetMailSent(true);
                }
            }, (error) => {
                SetMailSent(false);
            });
            e.target.reset();
            SetMailSent(false);
    }



    return (
        <div>
            <div className="container">
                <h3 class="m-4 text-center text-white">Why not make a one-to-one meeting?</h3>
                <form onSubmit={sendEmail} className="signin-form">
                    <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Meet Link" name="meet"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Mail"></input>
                        </div>
                    </div>
                </form>
                {mailSent &&(
                    <div class="alert alert-success alert-dismissible mt-4">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <strong>Success!</strong> You Got Him...... Will Come Back to you Very Soon 😛
                    </div>
                )}
            </div>
        </div>
    )

    
}