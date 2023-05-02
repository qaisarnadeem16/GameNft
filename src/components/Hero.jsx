import React from 'react'
import topimg from '../assets/new1.png'

const Hero = () => {
    return (
        <>
            <div className="hero w-full h-full">
                <div className="flex flex-col-reverse md:flex-row items-center md:gap-12 gap-6 md:p-28 p-0">
                    <div className="md:w-1/2 w-full md:p-5 p-3">
                        <div className="flex flex-col gap-7 justify-center items-center">
                            <div className="box  py-3 px-5 ">
                                <h1 className="text-white text-3xl text-center font-black ">ABOUT</h1>

                            </div>
                            <div className="box  ">
                                <h5 className="text-white text-lg text-center   py-4 px-4 ">The AI City is a web3 multiplayer game with AI integration , 4k graphics set in a fantasy AI designed city divided into 4 Map. The AI city currently have a adventurous story line. The AI city is a web3 play to earn game where user can buy, trade & sell their weapon earned in the gameplay.</h5>
                            </div>
                            <div className="box  ">
                                <h5 className="text-white text-lg text-center   py-4 px-4 ">The AI city have adventurous game , the player will take on the role of the heroe , exploring monster and undertaking a great adventure against powerful creature in every level.  The AI city is a game development studio established by professionals with 10 years of experience in the game industry.</h5>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full ">
                        <div className="header-image ">
                            <img src={topimg} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
