// import React, { useState } from 'react';
import "./contact.css";


  
const Contact = () => {

    //const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        //setLoading(true);
        const formData = new FormData(event.target);
        const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
        
        if (!data.email || !data.name || !data.message) {
            alert('Please fill out all fields.');
            //setLoading(false);
            return;
            }
    
        try {
            const response = await fetch(process.env.react_app_emailservice, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            });
      
          if (response.ok) {
            alert('Form successfully sent!');
            setTimeout(() => {
              window.location.href = 'https://janhunenjere.com'
            }, 50);
          } else {
            alert('Something went wrong, please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Something went wrong.');
        }// } finally {
        //     setLoading(false);
        // }
      };
    return (
        <section className='contact container section' id='contact'>
            <h2 className='section_title'>Contact Me</h2>

            <div className='contact_container grid'>
                <div className='contact_info'>
                    <p className='contact_details'>Want to know more? Please feel free to contact me through the form and I will get back to you ASAP.</p>
                </div>
                {/* {loading && <div className="loading-circle"></div>} */}

                <form  onSubmit={handleSubmit} className='contact_form'>
                    <div className='contact_form-group'>
                        <div className='contact_form-div'>
                            <input type="text" name="name" className='contact_form-input' placeholder='Name'/>
                        </div>

                        <div className='contact_form-div'>
                            <input type="email" name="email" className='contact_form-input' placeholder='Email'/>
                        </div>
                    </div>
                    <div className='contact_form-div'>
                            <input type="text" name="subject" className='contact_form-input' placeholder='Subject'/>
                    </div>

                    <div className='contact_form-div contact_form-area'>
                        <textarea name="message" cols="30" rows="10" className='contact_form-input' placeholder='Enter your message here'></textarea>
                    </div>
                    <button type="submit" className='btn'>Send</button>

                </form>
            </div>
        </section>
    )
}

export default Contact