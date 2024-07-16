import Navbar from "../Navbar"
import Footer from "../Footer"
import Interview from "./Interview"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Minibus(){
    return(
        <>
        <Navbar />
        <section className="font-mulish mx-auto max-w-7xl py-28">
            <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="mr-2 ml-16 lg:ml-0" />Back</Link>
            <img src="banner1.jpg" className="mt-8 max-w-sm md:max-w-xl mx-auto" alt="" />    

            <div className="topic">
                <h1 className="text-5xl font-bold md:ml-48 px-4 md:text-center">Minibus Application UX/UI Design</h1>
                <p className="text-xl text-gray-500 mb-12 mt-4 md:ml-48 px-4">Case Study</p>
            </div>
            
            <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-3xl my-4 font-bold">Overview</h3>
                <p className="mt-4">At KMITL, Some Students go to university with AirPort Rail Link(APL) and then go to KMITL with minibus(Two-line Cars), but the painpoint is they don’t know when minibus will coming from somewhere around Ladkrabang to APL.
                </p>

                <h2 className="text-3xl mt-8 font-bold">What I do</h2>
                <p className="mt-4">My role is make a Interview document for Research and Design Wireframe.</p>

                <h2 className="text-3xl mt-8 font-bold">Process</h2>

                <div className="border-b border-black">
                    <p className="text-2xl my-4 text-center">Emphatize</p>
                </div>
                <div className="">
                <p className="text-xl mt-4 text-center"><span className="underline">Interviewer</span> : Infomation Technology, KMITL students.</p>
                    <Interview />
                </div>

                {/* Part Define */}
                <div className="border-b border-black">
                    <p className="text-2xl mt-12 mb-6 text-center">Define</p>
                </div>
                <h2 className="text-2xl mt-6 underline underline-offset-1">User Persona</h2>
                <div className="grid grid-cols-1 my-8 md:grid-cols-3 md:gap-x-4 gap-y-4">
                    <div className="flex justify-center">
                        <img src="Punch.png" alt="" className="rounded-lg mt-4 md:mt-0"/>    
                    </div>
                    
                    <div className="col-span-2 p-4">
                        <p className="text-3xl">"When the minibus will coming"</p>
                        <div className="grid md:grid-cols-3 gap-2 mt-4">
                            <p className="text-xl">Name : Punch</p>
                            <p className="text-xl">Age : 21</p>    
                        </div>
                        
                        <p className="text-xl mt-2">Student at Information Technology,KMITL</p>
                        <div className="grid md:grid-cols-2 text-xl gap-4 mt-2">
                            <div className="">
                                <p className="mt-2 font-bold">Pain Point</p>
                                <li className="mt-2">She wait minibus too much until she was late in morning class.</li>
                                <li className="mt-2">She don't know where are minibus?</li>
                            </div>
                            <div className="">
                                <p className="mt-2 font-bold">Goals</p>
                                <li className="mt-2">Want to know where are minibus and forecast time</li>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-2xl mb-2 underline underline-offset-1">User Story</p>
                <p>As a student, I want to check minibus at Ladkrabang, so that i can forecast my time.</p>

                {/* Part Ideate */}
                <div className="border-b border-black">
                    <p className="text-2xl mb-4 mt-12 text-center">Ideate</p>
                </div>

                <p className="text-2xl my-4 underline underline-offset-1">Goal Statement</p>
                <p>Our minibus app (2-taew 2-Jai) will let users where the minibus is now, 
                    which will affect users who have rush hour to know where the bus is by accurately estimating the time when they are on the airport link, 
                    we will measure effectiveness by at time on display.</p>
                <p className="text-2xl mt-4 mb-2 underline underline-offset-1">Sitemap</p>
                <div className="flex justify-center">
                    <img src="sitemap.png" alt="" className="w-4/5 p-5"/>
                </div>
                
                {/* Part Wireframe */}
                <div className="border-b border-black">
                    <p className="text-2xl mt-12 mb-4 text-center">Wireframes</p>
                </div>

                <p className="text-center text-xl my-6">Paper Wireframe</p>
                <div className="">
                    <img src="paper wireframe.png" alt="" className="mx-auto rounded-xl"/>
                </div>

                <p className="text-center text-xl my-6">Hi-fi Wireframe</p>
                <div className="">
                    <img src="Hifi-wireframe.png" alt="" className="mx-auto rounded-xl"/>
                </div>

                <div className="flex justify-center mt-8">
                    <a href="https://www.figma.com/proto/c4sEM812X9pbQi0v97fFpN/Project_HID?node-id=10%3A15&scaling=scale-down&page-id=0%3A1&starting-point-node-id=10%3A15&show-proto-sidebar=1" target="blank" className="bg-orange p-4 rounded-lg hover:text-white">View Prototype Here</a>  
                </div>

                <div className="border-b border-black">
                    <p className="text-2xl mt-12 mb-4 text-center">Testing</p>
                </div>
                <p className="text-2xl mt-4 underline underline-offset-1">Testimonials</p>

                <div className="grid md:grid-cols-2 mt-4 md:gap-x-6 gap-y-4">
                    <div className="">
                        <p className="text-xl font-bold">Pim said :</p>
                        <p>“Overall can solve the problem and my needs, but the page button used to change the date of the car schedule is small and not conspicuous, and don’t know that can select other tables by pressing the date”</p></div>
                    <div className="">
                        <p className="text-xl font-bold">Kong said :</p>
                        <p>“It can answer the question for a while. Make travel decisions using the app. but the car table page where the car number is displayed. I don’t know what it is, because I didn’t notice it from the first page and the status of the car should make color stand out, and should make the color more pornounced. ”</p></div>
                </div>
                
                <div className="mt-4">
                    <h2 className="text-xl font-bold underline underline-offset-1">Summary</h2>
                    <p>This application can solve their problems, but the new problem is about Color Contrast and Text Size to small for reading that make confusion in this app.</p>    
                </div>
                

            </div>
            </section>
            <Footer />
        </>
    )
}

export default Minibus
