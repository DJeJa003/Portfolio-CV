import "./contact.css";

const Contact = () => {
    return (
        <section className='contact container section' id='contact'>
            <h2 className='section_title'>Get in touch</h2>

            <div className='contact_container grid'>
                <div className='contact_info'>
                    <h3 className='contact_title'></h3>
                    <p className='contact_details'>Want to know more? Please feel free to contact me through the form and I will get back to you ASAP.</p>
                </div>
{/** */}
                <form action="" className='contact_form'>
                    <div className='contact_form-group'>
                        <div className='contact_form-div'>
                            <input type="text" className='contact_form-input' placeholder='Name'/>
                        </div>

                        <div className='contact_form-div'>
                            <input type="email" className='contact_form-input' placeholder='Email'/>
                        </div>
                    </div>
                    <div className='contact_form-div'>
                            <input type="text" className='contact_form-input' placeholder='Write your subject'/>
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