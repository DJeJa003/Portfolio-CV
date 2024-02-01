import "./Skills.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";


const data = [
    {
        id: 1,
        image: Image2,
        title: "Web Development",
        description: "I've created some web apps using React, this webpage is the latest work. I really enjoy the process and seeing the progress while working on it.",
    },
    {
        id: 2,
        image: Image2,
        title: "Python",
        description: "I've used Python mostly as a tool in mathemathics, but recently I learned a lot more about it on my exchange trip to Japan. ",
    },
    {
        id: 3,
        image: Image1,
        title: "Continuous learning",
        description: "I'm a fast learner, who quickly picks up on new concepts, even those I've never encountered before, and I am always ready for new challenges.",
    }
]

const Skills = () => {
    return (
        <section className='services container section' id="Skills">
            <h2 className='section_title'>Key Skills</h2>

            <div className="services_container grid">
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className="services_card" key={id}>
                            <img src={image} alt="Image" className='services_img'/>
                            <h3 className='services_title'>{title}</h3>
                            <p className='services_description'>{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Skills