import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    },[pathname])
  
    const [isOpen, setIsOpen] = useState(false);

    function Burger() {
        setIsOpen(!isOpen); // !false = true
    };

    return(
        <nav className="navbar font-mulish fixed w-full top-0 z-50 p-6 bg-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <Link to="/" className="text-3xl font-bold">Parattakorn</Link>
                </div>
                {/* Button Burger */}
                <div className="burger md:hidden">
                    <button onClick={Burger} className='text-3xl'>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                {/* Desktop */}
                <ul className='text-2xl hidden md:flex space-x-12'>
                    <Link to="/">Work</Link>
                    <Link to="/Play">Play</Link>
                    <Link to="/About">About</Link>
                </ul>
            </div>
            
            {/* mobile */}
            {isOpen ? (
                <ul className='flex flex-col md:hidden'>
                    <Link to="/" className='py-2'>Work</Link>
                    <Link to="/Play" className='py-2'>Play</Link>
                    <Link to="/About" className='py-2'>About</Link>
                </ul>
            ) : null}
        </nav>
    )
}

export default Navbar