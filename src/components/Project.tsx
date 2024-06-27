import Myproject from '../project.json';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Project(){
    return(
        <>
        {
            Myproject.map( data => {
                return(
                    <section className="box border-b border-black font-mulish max-w-7xl mx-auto md:p-10 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto gap-4">
                            <div className="right">
                                <h1 className='text-3xl md:text-5xl font-bold'>{data.title}</h1>
                                <h3 className="text-xl mt-3 md:text-2xl text-gray-700">{data.content}</h3>
                            </div>
                            <div className="left">
                                <p className="text-lg md:text-2xl mb-6">{data.description}</p>
                                <Link to={`/${data.linkUrl}`} className='text-orange text-lg md:text-2xl'>View More <FontAwesomeIcon icon={faArrowRight} className='inline-block'/></Link>
                            </div>
                        </div>
                        <div className="flex justify-center py-8">
                            <img src={data.img} alt="" className='md:w-1/2'/>
                            </div>
                    </section>
                )
            })
        }
        </>
    )
}

export default Project