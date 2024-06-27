import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Play(){
    return(
        <>
        <Navbar />
        <section className="mx-auto max-w-7xl my-56 font-mulish">
            <h1 className="text-3xl md:text-5xl font-bold px-4">Me in another w🌎rld</h1>
            <p className="mt-4 px-4">This is My Artwork Zone. Please Enjoy</p>
            <div className="img-section mx-auto max-w-5xl p-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <img src="BetBox.PNG" alt="" />
                    <img src="ITPOLO_winner.jpg" alt="" />
                    <img src="PosterCharlie2.png" alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <img src="PostBoxLogin.PNG" alt="" />
                    <img src="Project1.JPG" alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <img src="Matchday5.png" alt="" />
                    <img src="Futsal.png" alt="" />
                    <img src="Matchday6.png" alt="" />
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Play