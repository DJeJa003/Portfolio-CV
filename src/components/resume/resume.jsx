import "./resume.css";
import Data from './data';
import Card from './card';

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section_title">Education</h2>

            <div className='resume_container grid'>
                <div className='timeline grid'>
                    {Data.map((val, id) => {
                        if (val.category === "education") {
                            return (
                                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className='timeline grid'>
                    {Data.map((val, index) => {
                        if (val.category === "experience") {
                            return (
                                <Card key={index} title={val.title} year={val.year} desc={val.desc}/>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    )
}

export default Resume