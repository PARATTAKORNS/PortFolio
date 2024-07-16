function Footer(){
    return(
        <>
            <div className="footer flex justify-between font-mulish text-md md:text-xl max-w-7xl py-4 md:max-w-4xl mx-auto">
                <div className="flex gap-4 md:gap-8">
                    <a href="/Resume_Parattakorn.pdf" download="Resume_parattakorn.pdf" target="blank" className="mt-6">Resume</a>
                    <a href="https://www.linkedin.com/in/parattakorn-singwiset/" target="blank" className="mt-6">LinkedIn</a>
                    <a href="https://github.com/PARATTAKORNS" target="blank" className="mt-6">Github</a>
                </div>
                <div className="md:mt-6 w-1/3 md:w-2/5 text-lg">
                    <p className="text-right">Dev & Design By Parattakorn S.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
