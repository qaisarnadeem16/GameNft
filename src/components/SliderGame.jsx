import React from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import Slider from "react-slick";
import game1 from '../assets/game3.jpeg'
import game2 from '../assets/game2.jpeg'
import game3 from '../assets/game1.jpeg'
import game4 from '../assets/game4.jpeg'

import { motion } from 'framer-motion'


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className=' text-[rgba(255,255,0,0.79)] text-[3rem] z-10 absolute left-[-5px] md:top-[49%] top-[32%]  '
            onClick={onClick} >  <BiLeftArrow />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className=' text-[rgba(255,255,0,0.79)] text-[3rem] z-10 absolute right-[-5px]  md:top-[49%] top-[32%] '
            onClick={onClick} >  <BiRightArrow />
        </div>
    );
}

const SliderGame = () => {
    const transition = { type: 'spring', duration: 1 }
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="slider px-4" id='game'>
                <motion.div
                    initial={{ bottom: '-100px' }}
                    whileInView={{ top: '2px' }}
                    transition={{ ...transition, type: 'tween' }} style={{ position: 'relative' }}>
                    <div className="flex justify-center p-7">
                        <div className="bg-gray-700 rounded-lg  opacity-90 main-div main-div1">
                            <h1 className="text-white text-3xl text-center font-black ">GAMEPLAY</h1>
                        </div>
                    </div>

                    <Slider {...settings}>
                    <div className='relative'>
                            <div className='md:mx-6 '>
                                <div className="rounded-md shadow w-full  overflow-hidden">
                                    <img src={game4} alt='' className='' />
                                </div>
                                <div className="text">
                                    <div className="py-4 flex justify-center"><h2 className="text-white main-div main-div1 bg-gray-800 rounded-md  text-xl font-bold text-center p-2 ">CITY CAR </h2></div>
                                    <div className="main-div main-div2">

                                        <p className="p-3 text-white">
                                        GAME MODE: THE CITY IS HIGHLY GRAPHIC QUALITY IN METAVERSE GAMES. YOU CAN SELECT PLAYER AND RACE WITH AI CAR IN THE CITY CAR..
                                        </p>
                                    </div>

                                    <div className="main-div main-div2 !mt-7 ">
                                        <h2 className="text-[rgba(0,255,255,0.91)] text-sm font-semibold tracking-widest pt-3 pl-3 ">UTILITY OF GAME :- </h2>
                                        <p className="p-3 text-white">
                                        THIS GAME IS PERFORMING IN 3D IN VIRTUAL CITY, AND THE CITY & CAR IS DESIGNED IN AI WITH INCREDIBLE CHARECTOR.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='md:mx-6 '>
                                <div className="rounded-md shadow w-full  overflow-hidden">
                                    <img src={game1} alt='' className='' />
                                </div>
                                <div className="text">
                                    <div className="py-4 flex justify-center"><h2 className="text-white main-div main-div1 bg-gray-800 rounded-md  text-xl font-bold text-center p-2 ">ANIMO BATTLE </h2></div>
                                    <div className="main-div main-div2">

                                        <p className="p-3 text-white">
                                            GAME MODE: THE ANIMO BATTLE IS HIGHLY GRAPHIC QUALITY IN METAVERSE AI GAMES. YOU CAN SELECT PLAYER AND IMPORT YOUR CHARECTOR IN THE BATTLE TO START MATCHING IN GAME.
                                        </p>
                                    </div>

                                    <div className="main-div main-div2 !mt-7 ">
                                        <h2 className="text-[rgba(0,255,255,0.91)] text-sm font-semibold tracking-widest pt-3 pl-3 ">UTILITY OF GAME :- </h2>
                                        <p className="p-3 text-white">
                                            ANIMO BATTLE AI GAME IS USING WITH HIGHLY FUNCTIONALITY WITH 3D GAME IN METAVERSE IN BATTLE, ANYONE CHARRCTOR CAN MATCHING THE GAME AND GET A VICTORY.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='md:mx-6 '>
                                <div className="rounded-md shadow w-full  overflow-hidden">
                                    <img src={game2} alt='' className='' />
                                </div>
                                <div className="text">
                                    <div className="py-4 flex justify-center"><h2 className="text-white main-div main-div1 bg-gray-800 rounded-md  text-xl font-bold text-center p-2 ">SUPPER HERO IN AI CITY </h2></div>
                                    <div className="main-div main-div2">

                                        <p className="p-3 text-white">
                                            GAME MODE: THE HERO IN AI CITY IN THE JOURNIESS WITH DIFFERNT MODE WITH RARE CHARECTOR PLAYER CAN CHOOSE A RARE AND LEGENDARY CHARECTOR IN THIS BATTLE, THIS MODE IS ONLY MATCHING THOSE WHO HAVE MOST LEVELED AND COMPLETED ATLEAST 20 LEVELS.
                                        </p>
                                    </div>

                                    <div className="main-div main-div2 !mt-7 ">
                                        <h2 className="text-[rgba(0,255,255,0.91)] text-sm font-semibold tracking-widest pt-3 pl-3 ">                                        UTILITY OF GAME :-
                                        </h2>
                                        <p className="p-3 text-white">
                                            IN THIS GAME WE HAVE DEVELOPED BY DIFFERENT HEROES AND We have ADDED SUCH seen how the real PLAYERS & Monsters fight with each other.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='md:mx-6 '>
                            <div className="rounded-md shadow w-full  overflow-hidden">
                                    <img src={game3} alt='' className='' />
                                </div>
                                <div className="text">
                                    <div className="py-4 flex justify-center"><h2 className="text-white main-div main-div1 bg-gray-800 rounded-md  text-xl font-bold text-center p-2 ">BATTLE SQUAD </h2></div>
                                    <div className="main-div main-div2">

                                        <p className="p-3 text-white">
                                            GAME MODE: THIS GAME IS PERFORMING WITH MULTIPLE PLAYER, CHOOSING CHARACTERS AND MATCHING WITH YOUR COMMUNITY AND FRIENDS, IN THIS GAME HAVE DIVIED INTO TWO MODES ONE IS THE BATTLE WITH YOUR ENEMIES ( OPPONENT TEAM ). SECOND ONE IS MVP THOSE WHO HAVE REACHED THE LEVEL HE WILL GET THE ENTRIES TO LEVEL UP IN YOUR CHARECTOR.
                                        </p>
                                    </div>

                                    <div className="main-div main-div2 !mt-7 ">
                                        <h2 className="text-[rgba(0,255,255,0.91)] text-sm font-semibold tracking-widest pt-3 pl-3 ">UTILITY OF GAME :-</h2>
                                        <p className="p-3 text-white">
                                            IN This battle, the background & the opposite team will play In Real, but it will be okay in virtual in Metaverse game. And All the cities shown in the game this are situated in real place.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Slider>
                </motion.div>
            </div>


        </>
    )
}

export default SliderGame
