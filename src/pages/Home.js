import brd from '../assets/bard/brd.webp'
import scroll from '../assets/scroll.svg'
import tel from '../assets/icons/tel.webp'
import dex from '../assets/icons/dex.webp'
import twt from '../assets/icons/twt.webp'
import eth from '../assets/icons/eth.webp'
import { Link } from 'react-router-dom'


const Home = () => {

    return(
        <div className=" relative transition-all duration-300 ease-in-out ">
            <div className='toppp fixed top-10 right-5 '>
                <Link to='/app' className='bg-black transition-all duration-300 ease-in-out hover:bg-black/80 text-white px-8 py-4 rounded-full'>Open App</Link>
            </div>
            <section className='h-screen flex flex-col justify-center items-center'>
                    <img className='w-[10rem] noselect' alt='' src={brd} />
                <div className='text-center'>    
                    <div>
                        <p className='rale mt-16 font-black  text-4xl'>BARD AI</p>
                        <p className='text-black/50 text-sm  mt-2'>Accelerating the development of AI technology</p>
                    </div>
                </div>
                <br/>
                <br/>
                <a href='#about'><img className='mix-blend-difference w-6 opacity-30' alt='' src={scroll} /></a>
            </section>

            <section id='about' className='relative'>
                <div className='pt-12'>
                    <h2 className='font-black text-center text-2xl md:text-4xl rale'>About BARD-AI</h2>
                    <p className='w-10/12 md:w-[60%] mt-12 m-auto text-justify md:text-center'>
                        Technology giants go head to head in the Artificial Intelligence race as news regarding the release of BardAI for public access as a response to ChatGPT, the other AI program that is currently open to the public, circulates social media outlets stirring excitement and curiosity amongst the masses!
                    </p>
                    <p className='w-10/12 md:w-[60%] mt-12 m-auto text-justify md:text-center'>
                        BardAI brings the next step towards accelerating the development of AI technology as it boosts adoption by providing the AI chatbot technology to millions of users around the globe while sparking innovation as more and more tech giants beging to release more products and services adopting AI technology.
                    </p>
                    <p className='w-10/12 md:w-[60%] mt-12 m-auto text-justify md:text-center'>
                        The BARDAI token represents the BardAI project built on the Ethereum Network, BardAI adopts the latest Artificial Intelligence Chatbot technology and creates further utilities aside from the Chatbot, starting with a telegram bot that can be utilized personally, in groups or channels, both private and public. 
                    </p>
                    <p className='w-10/12 md:w-[60%] mt-12 m-auto text-justify md:text-center'>
                        The BardAI Telegram bot allows users to access the rapidly growing Artificial Intelligence technology which utilizes the extensive data libraries and machine learning algorithms that tech giants provided in order for AI to exponentially grow in response to public demand.
                        <br/>Use the BardAI bot today and join the journey of technology's next leap forward with BARDAI, as the masses utilize the ever growing Artificial Intelligence technology and evolve!
                    </p>
                </div>
            </section>

            <section>
                <div className='flex gap-12 p-12 justify-center mt-12'>
                    <a rel="noreferrer" target='_blank' className='opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out' href='https://t.me/BardAi_ERC'><img alt='' src={tel} /></a>
                    <a rel="noreferrer" target='_blank' className='opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out' href='https://www.dextools.io/app/en/ether/pair-explorer/0x948b0bab68c1fbd6af824a0ad56513c8dd3bb778'><img alt='' src={dex} /></a>
                    <a rel="noreferrer" target='_blank' className='opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out' href='https://twitter.com/bardai_erc20'><img alt='' src={twt} /></a>
                    <a rel="noreferrer" target='_blank' className='opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out' href='https://etherscan.io/address/0x3b88BB02BD2F50EEdf30DE6B94Cd5351CecD3658'><img alt='' src={eth} /></a>
                </div>
                <br/>
                <p className='my-12 text-center text-xs'>Copyrights recieved by BARD AI - 2023</p>
            </section>


        </div>
    )
}

export default Home;
