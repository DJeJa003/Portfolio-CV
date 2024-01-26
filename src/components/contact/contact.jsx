import "./contact.css";

const Contact = () => {
    return (
        <section className='contact container section' id='contact'>
            <h2 className='section_title'>Contact Me</h2>

            <div className='contact_container grid'>
                <div className='contact_info'>
                    <p className='contact_details'>Want to know more? Please feel free to contact me through the form and I will get back to you ASAP.</p>
                </div>
{/** */}
                <form action="https://us-central1-portfolio22-19acd.cloudfunctions.net/sendEmail" className='contact_form'>
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
                        <textarea name="" id="" cols="30" rows="10" className='contact_form-input' placeholder='Write your message here'></textarea>
                    </div>
                    <button type="submit" className='btn'>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact