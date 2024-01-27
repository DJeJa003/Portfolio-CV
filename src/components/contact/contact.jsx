import "./contact.css";
import { useNavigate } from 'react-router-dom';
  
const Contact = () => {
    const navigate = useNavigate();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     // Your existing form submission logic
    //     const response = await fetch('https://us-central1-portfolio22-19acd.cloudfunctions.net/sendEmail', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     });
    
    //     const data = await response.json();
    
    //     // Check if the email was sent successfully
    //     if (response.ok) {
    //       alert(data.message); // Display success message
    //       setTimeout(() => {
    //         navigate.push('/'); // Redirect to the homepage
    //       }, 1500);
    //     } else {
    //       // Handle the case where email sending failed
    //       alert('Email sending failed.');
    //     }
    //   };

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const formData = new FormData(event.target);
        const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
    
      try {
        const response = await fetch('https://us-central1-portfolio22-19acd.cloudfunctions.net/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      
          if (response.ok) {
            alert('Email sent successfully!');
            setTimeout(() => {
              navigate.push('https://janhunenjere.com');
            }, 1500);
          } else {
            alert('Failed to send email.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred.');
        }
      };
    return (
        <section className='contact container section' id='contact'>
            <h2 className='section_title'>Contact Me</h2>

            <div className='contact_container grid'>
                <div className='contact_info'>
                    <p className='contact_details'>Want to know more? Please feel free to contact me through the form and I will get back to you ASAP.</p>
                </div>
{/** action="https://us-central1-portfolio22-19acd.cloudfunctions.net/sendEmail"*/}
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
                            <input type="text" name="subject" className='contact_form-input' placeholder='Write your subject'/>
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