import Navbar from "../Navbar"
import Footer from "../Footer"

function About(){
    return(
        <>
        <Navbar />
        <section className="font-mulish mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-12 py-56">
                <div className="right col-span-1 md:col-span-2">
                    <h1 className="text-4xl md:text-7xl font-bold md:w-4/5">I’m Parattakorn👋 Based in Thailand</h1>
                    <p className="md:w-4/5 mt-4">I recently graduated from King Mongkut Institute's Technology Ladkrabang
                    School of Information Technology and Now I’m seeking in UX/UI Designer or Front-End Developer</p>
                    <p className="md:w-4/5 mt-4">I have a passion for User Experience. I enjoy to design and it can solve their problems with my design. In addition, 
                        I love to care How they feel and that why I want to be UX/UI Designer.</p>
                    <p className="md:w-4/5 mt-4">I have experience about Web Development like HTML / CSS / JavaScript and Vue.JS. And now I’m learning about ReactJS.</p>
                </div>
                <div className="left">
                    <img src="Me_Japan.jpg" className="w-3/4 md:w-4/5 rounded-full" alt="" />
                </div>
            </div>
            <div className="hobbies mx-auto border-t border-black p-3 my-8">
                <div className="grid grid-cols-1 md:grid-cols-3 mt-12 space-y-8">
                    <div className="hobbies text-xl">
                        <h2 className="text-3xl font-bold">What I Like</h2>
                        <p className="mt-3">⚽ Football</p>
                        <p className="mt-3">🎮 Video Games</p>
                        <p className="mt-3">🦔 Hedgehog</p>
                    </div>
                    <div className="learn text-xl">
                    <h2 className="text-3xl font-bold">At free time</h2>
                        <p className="mt-3">📖 Reading Books</p>
                        <p className="mt-3">🧘 Mediation</p>
                        <p className="mt-3">🎧 Listening Podcast</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    )
}

export default About