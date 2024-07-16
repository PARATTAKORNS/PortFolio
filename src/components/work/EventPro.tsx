import Navbar from "../Navbar"
import Footer from "../Footer"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function EventPro(){
    return(
        <>
            <Navbar />
            <section className="font-mulish mx-auto max-w-7xl py-28">
            <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="mr-2 ml-16 lg:ml-0" />Back</Link>
                <img src="banner3.jpg" className="mt-8 max-w-sm md:max-w-xl mx-auto" alt="" />

            <div className="topic mt-12">
                <h1 className="text-5xl font-bold lg:ml-48 px-4">Event Pro Application</h1>
                <p className="text-xl text-gray-500 mb-12 mt-4 lg:ml-48 px-4">Work Experience</p>
            </div>
            
            <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-3xl my-4 font-bold">Summary</h3>
                <p className="mt-4">This work, I was employed to design Event Pro Application.my responsibilty is design in partner.
                </p>

                <h2 className="text-3xl mt-4 font-bold">What I do</h2>
                <p className="mt-4">1. Design Application by following the research document to match the user's requirement.</p>
                <li className="text-xl mt-4">Design System in this Project</li>
                <div className="img">
                    <img src="Design Systems.jpg" className="p-8" alt="" />    
                </div>
                <p className="">2. Design Application with Figma. <span className="text-gray-500">(This is some Examples of Design)</span></p>
                <div className="img">
                    <img src="EventPro.jpg" className="p-8" alt="" />    
                </div>

                <h2 className="text-3xl mt-4 font-bold">What I Learn</h2>
                <p className="mt-4">1. how to work with team.</p>
                <p className="">2. The research is important for design process.</p>
                <p className="">3. Learn more about the Figma tools.</p>
            </div>
            </section>
        <Footer />
        </>
    )
}

export default EventPro
