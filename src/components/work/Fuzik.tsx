import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Navbar from "../Navbar"
import Footer from "../Footer"

function Fuzik(){
    return(
        <>
        <Navbar />
        <section className="font-mulish mx-auto max-w-7xl py-28">
        <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="mr-2 ml-16 md:ml-0" />Back</Link>
        <img src="banner2.jpg" className="mt-8 max-w-sm md:max-w-xl mx-auto" alt="" />

        <div className="topic mt-12">
            <h1 className="text-5xl font-bold ml-48 px-4 md:text-center">Cooperative Program in UX/UI Devloper</h1>
            <p className="text-xl text-gray-500 mb-12 mt-4 md:ml-48 px-4">Internship</p>    
        </div>
        
        <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl my-4 font-bold">Summary</h3>
            <p className="mt-4">In the Cooperative Program, I'm Positioning in UX/UI Designer and Front-End Developer for 4 Months (July - Oct 2023) in Fuzik Connex
                to re-design Main Website With Figma,Develop with WordPress and develop Online Music platform with VueJS, TailwindCSS and JavaScript.
            </p>
            <div className="my-8">
                <img src="Fuzik.png" className='w-3/5 mx-auto p-4' alt="" />
                <p className="text-center">Fuzik in Katalyst 2023</p>
            </div>

            <h2 className="text-3xl mt-4 font-bold">What I do</h2>
            <p className="mt-4">1. Re-design Main Website With Figma.</p>
            <div className="img">
                <img src="Lo-fi Wireframe.jpg" className="p-8" alt="" />    
            </div>
            <p className="">2. Develop website with WordPress.</p>
            <p className="">3. Develop Music online platform with NuxtJS, TailwindCSS, JavaScript, Wave-Surfer.(TypeScript library)</p>
            <h2 className="text-3xl mt-4 font-bold">What I Learn</h2>
            <p className="mt-4">1. How to manage time to work.</p>
            <p className="">2. Learn New Programming Language.(NuxtJS, TypeScript)</p>
            <p className="">3. I got to know what work it really was like.</p>    
        </div>
        
        </section>
        <Footer></Footer>
        </>
     )
}

export default Fuzik