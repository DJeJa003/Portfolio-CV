import './about.css';


const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section_title">About Me</h2>

            <div className='about_container grid'></div>
                {/* <img src={Image} alt="" className='about_img'/> */}

                <div className='about_data grid'>
                    <div className='about_info'>
                        <p className='about_desc'>My name is Jere Janhunen, and I'm a software engineering student at South-Eastern Finland 
                        University of Applied Sciences in Mikkeli. My whole life I've been intrigued by everything about computers and the Internet,
                        and how it all works. That is why I'm becoming a software engineer; to find some answers for my questions. 
                        While I may not have the most experience in programming just yet, I am learning and growing each passing day.</p>
                        <a href="https://drive.google.com/file/d/1NK9DMNt5LkTNoVDWEqcVcxzVGFFN4HW8/view" download="CV_Janhunen" className='btn'>Download CV</a>
                    </div>

                    <div className='about_skills grid'>
                        <div className='skills_data'>
                            <div className='skills_titles'>
                                <h3 className='skills_name'>Development</h3>
                                    <span className='skills_number'>75%</span>
                            </div>
                            <div className='skills_bar'>
                                <span className='skills_percentage development'></span>
                            </div>
                        </div>

                        <div className='skills_data'>
                            <div className='skills_titles'>
                                <h3 className='skills_name'>Problem solving</h3>
                                    <span className='skills_number'>85%</span>
                            </div>
                            <div className='skills_bar'>
                                <span className='skills_percentage problem'></span>
                            </div>
                        </div>

                        <div className='skills_data'>
                            <div className='skills_titles'>
                                <h3 className='skills_name'>Continuous learning</h3>
                                    <span className='skills_number'>100%</span>
                            </div>
                            <div className='skills_bar'>
                                <span className='skills_percentage learning'></span>
                            </div>
                        </div>

                        <div className='skills_data'>
                            <div className='skills_titles'>
                                <h3 className='skills_name'>Python</h3>
                                    <span className='skills_number'>85%</span>
                            </div>
                            <div className='skills_bar'>
                                <span className='skills_percentage python'></span>
                            </div>
                        </div>

                        <div className='skills_data'>
                            <div className='skills_titles'>
                                <h3 className='skills_name'>C#</h3>
                                    <span className='skills_number'>70%</span>
                            </div>
                            <div className='skills_bar'>
                                <span className='skills_percentage sharp'></span>
                            </div>
                        </div>

                        <div className='skills_data'>
                            <div className='skills_titles'>
                                <h3 className='skills_name'>React</h3>
                                    <span className='skills_number'>70%</span>
                            </div>
                            <div className='skills_bar'>
                                <span className='skills_percentage react'></span>
                            </div>
                        </div>

                        <div className='skills_data'>
                            <div className='skills_titles'>
                                <h3 className='skills_name'>HTML/CSS/JS</h3>
                                    <span className='skills_number'>80%</span>
                            </div>
                            <div className='skills_bar'>
                                <span className='skills_percentage html'></span>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default About