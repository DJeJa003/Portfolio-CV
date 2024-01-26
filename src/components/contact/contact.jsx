import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <section className='contact container section' id='contact'>
            <h2 className='section_title'>Get in touch</h2>

            <div className='contact_container grid'>
                <div className='contact_info'>
                    <h3 className='contact_title'></h3>
                    <p className='contact_details'>Rather send an email straight? You can send it to jere-janhunen@hotmail.com</p>
                </div>
{/** */}
                <form action="" className='contact_form'>
                    <div className='contact_form-group'>
                        <div className='contact_form-div'>
                            <input type="text" className='contact_form-input' placeholder='Insert your name'/>
                        </div>

                        <div className='contact_form-div'>
                            <input type="email" className='contact_form-input' placeholder='Insert your email'/>
                        </div>
                    </div>
                    <div className='contact_form-div'>
                            <input type="text" className='contact_form-input' placeholder='Insert your subject'/>
                    </div>

                    <div className='contact_form-div contact_form-area'>
                        <textarea name="" id="" cols="30" rows="10" className='contact_form-input' placeholder='Write your message here'></textarea>
                    </div>
                    <button className='btn'>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact