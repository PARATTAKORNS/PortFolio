import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Hero(){
    return(
        // 2 columns for hero
        <div className="grid md:grid-cols-3 grid-cols-1 mt-12 py-56 mx-auto max-w-6xl font-mulish border-b border-black gap-y-16">
            <div className="left-side md:col-span-2 col-span-1 md:text-left px-8">
                <h1 className="text-4xl md:text-7xl font-bold">Hi! I'm <span className="text-orange">Parattakorn</span></h1>
                <h3 className="max-w-md text-3xl md:text-4xl mt-4">Passion for UX/UI Designer & Front-End Developer</h3>
                <div className="btn-social flex space-x-4 mt-8">
                    <div className="linkedin-btn">
                        <a href="https://www.linkedin.com/in/parattakorn-singwiset/" target='blank'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='bg-linkedin p-3 text-3xl text-white rounded-lg'/>
                        </a>
                    </div>
                    <div className="github-btn">
                        <a href="https://github.com/PARATTAKORNS" target='blank'>
                        <FontAwesomeIcon icon={faGithub} className='bg-black p-3 text-3xl text-white rounded-lg'/>
                        </a>
                    </div>
                    <div className="Resume-btn">
                        <a href="/Resume_Parattakorn.pdf" download="Resume_parattakorn.pdf" target="blank">
                        <p className='bg-orange py-4 px-8 font-bold hover:text-white rounded-lg'>Resume</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="right-side px-8">
                <img src="./public/me-profile.jpg"
                alt=""
                className='rounded-full h-72 w-72'
                />
            </div>
        </div>
    )
}

export default Hero