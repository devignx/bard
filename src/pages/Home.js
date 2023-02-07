import { useState } from 'react';
import brd from '../assets/bard/brd.webp'
import scroll from '../assets/scroll.svg'
import bg from '../assets/bard/bg.webp'
import tel from '../assets/icons/tel.webp'
import dex from '../assets/icons/dex.webp'
import twt from '../assets/icons/twt.webp'
import eth from '../assets/icons/eth.webp'


const Home = () => {

    return(
        <div className=" relative">
            <div className='fixed top-10 right-5 '>
                <a href='/app' className='toppp bg-black/90 transition-all duration-300 ease-in-out hover:bg-black text-white px-8 py-4 rounded-full'>Open App</a>
            </div>
            <section className='h-screen flex flex-col justify-center items-center'>
                    <img className='w-[10rem]' src={brd} />
                <div className='text-center'>    
                    <div>
                        <p className='rale mt-16 font-black  text-4xl'>BARD AI</p>
                        <p className='text-black/50 text-sm  mt-2'>Accelerating the development of AI technology</p>
                    </div>
                </div>
                <br/>
                <br/>
                <a href='#about'><img className='mix-blend-difference w-6 opacity-30' src={scroll} /></a>
            </section>

            <section id='about' className='relative'>
                <div>
                    <h2 className='font-black text-center text-4xl rale'>About BARD-AI</h2>
                    <p className='w-10/12 md:w-[60%] mt-12 m-auto text-justify md:text-center'>
                        Technology giants, Microsoft and Google, go head to head in the Artificial Intelligence race as Google anounces the release of BardAI for public access as a response to ChatGBT, the other AI program that is currently open to the public.
                    </p>
                    <p className='w-10/12 md:w-[60%] mt-12 m-auto text-justify md:text-center'>
                        BardAI brings the next step towards accelerating the development of AI technology as it boosts adoption by providing the AI chatbot technology to the millions of Google users around the globe while sparking innovation as further competition continues to happen amongst the tech giants.
                    </p>
                    <p className='w-10/12 md:w-[60%] mt-12 m-auto text-justify md:text-center'>
                        The BARDAI token represents the BardAI project that adopts the Google AI Chatbot, BardAI, and creates further utilities aside from the Chatbot, starting with a telegram bot that can be utilized personally, in groups or channels, both private and public. The BardAI Telegram bot allows users to access the GoogleAI technology which will utilize the extensive data library of the Google search engine!
                    </p>
                    <p className='w-10/12 md:w-[60%] mt-12 m-auto text-justify md:text-center'>
                    Use the BardAI bot today and join the journey of technology's next leap forward with BARDAI, as Google brings the masses to the evergrowing Artificial Intelligence technology.</p>
                </div>
            </section>

            <section>
                <div className='flex gap-12 p-12 justify-center mt-12'>
                    <a className='opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out' href='https://t.me/BardAi_ERC'><img src={tel} /></a>
                    <a className='opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out' href='https://www.dextools.io/app/en/ether/pair-explorer/0x948b0bab68c1fbd6af824a0ad56513c8dd3bb778'><img src={dex} /></a>
                    <a className='opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out' href='https://twitter.com/bardai_erc20'><img src={twt} /></a>
                    <a className='opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out' href='https://etherscan.io/address/0x3b88BB02BD2F50EEdf30DE6B94Cd5351CecD3658'><img src={eth} /></a>
                </div>
                <br/>
                <p className='my-12 text-center text-xs'>Copyrights recieved by BARD AI - 2023</p>
            </section>


        </div>
    )
}

export default Home;