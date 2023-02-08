import bg from '../assets/bard/bg.webp'
import brd from '../assets/bard/brd.webp'
import mic from '../assets/bard/mic.webp'

import { useState } from 'react';
import { Link } from 'react-router-dom';


const Bard = () => {
    const [popup,setPop] = useState(false);
    
    const handleClickOpen = () => {
        setPop(!popup);
    }
    const closePopup = () => {
        setPop(!popup);
    }

    return(
        <div className=" fade-in h-screen w-screen flex flex-col justify-between bg-white relative">
            <img className=' w-screen blur-[2px] noselect' alt='' src={bg} />
            <div className='absolute top-16 m-auto w-full'> 
                <Link to='/'><img className='m-auto h-[5rem] md:h-[6rem]' alt='' src={brd} /></Link>
            </div>
            <div className='w-full'>
                <div onClick={handleClickOpen} className='text-center cursor-pointer w-full scale-[66%] transition-all duration-500 ease-in-out py-6 border-solid  m-auto  rounded-2xl'>
                    <p className='font-bold text-xl text-blue-500'>HINT</p>      
                    <br/>
                    <h1 className='text-black/50'>Try Asking</h1>
                    <p className='font-semibold mt-1 underline shrink-0'>What will be a better society feels like?</p>
                </div>
                <br/>
                <div className='relative flex items-center mb-14 md:mb-12'>
                    <img onClick={handleClickOpen} className='topppp absolute right-[10%] md:right-[28%] w-[3rem] m-auto' alt='' src={mic} />
                    <input onClick={handleClickOpen} type="text" readOnly className='rounded-full cursor-text outline-none p-6 bg-white  drop-shadow-lg m-auto w-[85%] md:w-[40rem] '  placeholder='Ask your questions'></input>
                </div>
            </div>
            <div  onClick={closePopup} className='fixed cursor-pointer topppp'>
                { popup?
                    <div className="fixed justify-center items-center text-xs centerh md:text-lg bottom-10 flex flex-row-reverse md:flex-row gap-4 w-10/12 md:w-auto md:right-12 border-[3px] topppp drop-shadow-lg shad border-red-400 bg-white rounded-xl p-5">
                        <button onClick={closePopup} className="p-3 py-2 md:py-1 rounded-full bg-red-400 toppp text-white">x</button>
                        <p className='topppp'>Going Live Sooner than you anticipate 😉</p>
                    <div className='w-screen h-screen scale-[125%] bottom-0 bg-white/60 backdrop-blur-lg cursor-pointer absolute'></div>
                    </div>
                :""}
            </div>
            
        </div>
    )
}

export default Bard;