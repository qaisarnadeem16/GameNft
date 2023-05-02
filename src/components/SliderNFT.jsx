import React from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import Slider from "react-slick";
import nft1 from '../assets/Default_american_teenage_boy_full_body_shoot_gaming_character_3_2b43239f-2fe9-47bf-b1d3-802713ef6d57_1.jpg'
import nft2 from '../assets/WhatsApp Image 2023-05-02 at 10.16.05 PM1.jpeg'

import nft3 from '../assets/Default_british_teenage_boy_full_body_shoot_gaming_character_3_0_6cf73f24-8db9-41d0-b5b1-bc8e0a71a72e_1.jpg'
import nft4 from '../assets/Default_poland_teenage_boy_full_body_shoot_gaming_character_3d_3_334875ca-a513-4ad4-89af-b5b82cd47342_1.jpg'


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className=' text-[rgba(0,255,255,0.5)] text-[3rem] z-10 absolute left-[-15px] md:top-[49%] top-[45%] '
            onClick={onClick} >  <BiLeftArrow />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className=' text-[rgba(0,255,255,0.5)] text-[3rem] z-10 absolute right-[-15px]  md:top-[49%] top-[45%] '
            onClick={onClick} >  <BiRightArrow />
        </div>
    );
}

const SliderNFT = () => {
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
            <div className="slider px-4 " id='char'>
                <div className="flex justify-center p-7">
                    <div className="bg-gray-700 rounded-lg   opacity-90 main-div main-div1">
                        <h1 className="text-white text-3xl text-center font-black ">CHARECTOR</h1>
                    </div>
                </div>

                <Slider {...settings}>
                    <div>
                        <div className='md:mx-6 '>
                            <div className="rounded-md  shadow w-full h-[320px] overflow-hidden">

                                <img src={nft1} alt='' width='100%' height='100px' />
                            </div>
                            <div className="text">
                                <div className="py-4 flex justify-center"><h2 className="text-white bg-gray-800 rounded-md px-2 shadow text-xl font-bold text-center p-2 ">WIZO: RARE PLAYER</h2></div>
                                <div className="bg-gray-800 rounded-[1rem] shadow opacity-100">
                                    <h2 className="text-[rgba(0,255,255,0.5)] text-sm font-semibold tracking-widest pt-3 pl-3 ">SPECIAL IN CHARECTOR</h2>
                                    <p className="p-3 text-white">
                                        LEGS COMBOT - HIHGLY STRONG ON LEGS POWER , ABLE TO USE IN BLOCKING , AND INCREDIBLE ATTACK TO ENEMY
                                    </p>
                                </div>

                                <div className="bg-gray-800 rounded-[1rem] mt-7 shadow">
                                    <h2 className="text-[rgba(0,255,255,0.5)] text-sm font-semibold tracking-widest pt-3 pl-3 ">ABILITY:-</h2>
                                    <p className="p-3 text-white">
                                        POWER ON LEGS - This Character is highly skilled With Legs and powerenergy on legs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className='md:mx-6 mx-2'>
                            <div className="rounded-md shadow w-full h-[320px] overflow-hidden">
                                <img src={nft2} alt='' width='100%' height='100px' />
                            </div>
                            <div className="text">
                                <div className="py-4 flex justify-center"><h2 className="text-white bg-gray-800 rounded-md px-2 shadow text-xl font-bold text-center p-2 ">Blitz Boo : Medium Player</h2></div>
                                <div className="bg-gray-800 rounded-[1rem] shadow ">
                                    <h2 className="text-[rgba(0,255,255,0.5)] text-sm font-semibold tracking-widest pt-3 pl-3 ">SPECIAL IN CHARECTOR</h2>
                                    <p className="p-3 text-white">
                                        Power Fighter - HIGHLY STRONG ON POWERS, THIS CHARECTOR HAVE LOTS OF POWERS LIKE STNERGITIC POWER WHICH IS BLAST TO ANYONE
                                    </p>
                                </div>

                                <div className="bg-gray-800 rounded-[1rem] mt-7 shadow ">
                                    <h2 className="text-[rgba(0,255,255,0.5)] text-sm font-semibold tracking-widest pt-3 pl-3 ">ABILITY:-</h2>
                                    <p className="p-3 text-white">
                                        DIFFERENT TYPES OF POWERS: This Charector Is Highly Dedicated With Lots of powering, He Can
                                        Able To ATTACT with Supper powers with different mode.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='md:mx-6 '>
                            <div className="rounded-md shadow w-full h-[320px] overflow-hidden">
                                <img src={nft3} alt='' width='100%' height='100px' />
                            </div>
                            <div className="text">
                                <div className="py-4 flex justify-center"><h2 className="text-white bg-gray-800 rounded-md px-2 shadow text-lg font-bold text-center p-2 ">FLORAL LEO : Legendary Player</h2></div>
                                <div className="bg-gray-800 rounded-[1rem] shadow">
                                    <h2 className="text-[rgba(0,255,255,0.5)] text-sm font-semibold tracking-widest pt-3 pl-3 ">SPECIAL IN CHARECTOR</h2>
                                    <p className="p-3 text-white">
                                        FLYING BOOSTER - HIGHLY STRONG ON WINGS POWER, THIS CHARECTOR HAVE LOTS OF WINGS POWERS LIKE FLYING, MOUTH FIRE, WHICH IS BURNED TO ANYTHING
                                    </p>
                                </div>

                                <div className="bg-gray-800 rounded-[1rem] mt-7 shadow ">
                                    <h2 className="text-[rgba(0,255,255,0.5)] text-sm font-semibold tracking-widest pt-3 pl-3 ">ABILITY:-</h2>
                                    <p className="p-3 text-white">
                                        POWERS IN WINGS: This Charector Is Highly Dedicated With Lots of powering in wings, He Can
                                        Able To ATTACT with wings with different MODE.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div>
                        <div className='md:mx-6 '>
                            <div className="rounded-md shadow w-full h-[320px] overflow-hidden">
                                <img src={nft4} alt='' width='100%' height='100px' />
                            </div>
                            <div className="text">
                                <div className="py-4 flex justify-center"><h2 className="text-white bg-gray-800 rounded-md px-2 shadow text-lg font-bold text-center p-2 ">Jellite killi : MYTHIC PLAYER</h2></div>
                                <div className="bg-gray-800 rounded-[1rem] shadow ">
                                    <h2 className="text-[rgba(0,255,255,0.5)] text-sm font-semibold tracking-widest pt-3 pl-3 ">SPECIAL IN CHARECTOR</h2>
                                    <p className="p-3 text-white">
                                        DRAG To ANYONE - HIGHLY Dedicated to drag any enemy using magical power, THIS CHARECTOR HAVE LOTS OF POWERS LIKE DRAGING, which is used to kill the monster in Metaverse game.
                                    </p>
                                </div>

                                <div className="bg-gray-800 rounded-[1rem] mt-7 shadow">
                                    <h2 className="text-[rgba(0,255,255,0.5)] text-sm font-semibold tracking-widest pt-3 pl-3 ">ABILITY:-</h2>
                                    <p className="p-3 text-white">
                                        DRAGING: This Charector Is Highly Dedicated With powering in DRAGING, He can catch anyone by the long
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>

        </>
    )
}

export default SliderNFT
