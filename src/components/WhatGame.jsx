import React from 'react'
import { motion } from 'framer-motion'


const WhatGame = () => {
    const transition = { type: 'spring', duration: 1 }

    return (
        <>
            <div className="sliderGame" id='what'>
                <div className="flex justify-center p-7">
                    <div className="bg-gray-700  opacity-90 main-div main-div1 ">
                        <h1 className="text-white text-3xl text-center font-black ">WHAT IS GAMEPLAY</h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-stretch flex-wrap   ">

                    <motion.div
                        initial={{ bottom: '-100px' }}
                        whileInView={{ top: '2px' }}
                        transition={{ ...transition, type: 'tween' }} style={{ position: 'relative' }} className="md:w-1/3 w-full md:p-5 px-2 ">
                        <div className="main-div main-div2 !mt-7 shadow">
                            <h2 className="text-[rgba(0,255,255,0.5)] text-2xl font-bold tracking-widest text-center p-2 ">HOW DOES <br /> GAME WORK:</h2>
                            <p className="p-3 text-white">
                                WHEN THE PLAYER ENTER THE GAME FOR ROUN BY SELECTING THE CHERECTER AND UNLOCK USING THE POINTS. GAMES IS DIVIDED IN TWO PART. FIRST IS COMMON WHICH CAN PLAY ANYONE WITHOUT USING COINS AND SECOND ONE FOR RARE WHICH IS PLAY THOSE WHO HAVE LEVEL UPED AND THIRD ONE FOR LENDENDARY WHICH IS UNLOACK BY COINS ANDLEVELS
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ bottom: '-100px' }}
                        whileInView={{ top: '2px' }}
                        transition={{ ...transition, type: 'tween' }} style={{ position: 'relative' }} className="md:w-1/3 w-full md:p-5 p-3">
                        <div className="main-div main-div2 !mt-7 shadow2">
                            <h2 className="text-[rgba(0,255,255,0.5)] text-2xl font-bold tracking-widest text-center p-2 ">SINGLE PLAYER: </h2>
                            <p className="p-3 text-white">
                                THE ONE PLAYER OF IS OPPOINTED BY SYSTEM AUTOMATICALLY AGAINT TEAM.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ bottom: '-100px' }}
                        whileInView={{ top: '2px' }}
                        transition={{ ...transition, type: 'tween' }} style={{ position: 'relative' }}  className="md:w-1/3 w-full md:p-5 p-3">
                        <div className="main-div main-div2 !mt-7 shadow">
                            <h2 className="text-[rgba(0,255,255,0.5)] text-2xl font-bold tracking-widest text-center p-2 "> MULTI PLAYER (1V4): </h2>
                            <p className="p-3 text-white">
                                THE MULTIPLE PLAYERS IS OPERATED BY ANOTHER USERS THOSE WHO OPERATED BY HIM.AND THE MATCH IS MATCHING ENTIRE IN METAVERSE
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ bottom: '-100px' }}
                        whileInView={{ top: '2px' }}
                        transition={{ ...transition, type: 'tween' }} style={{ position: 'relative' }} className="md:w-full w-full md:px-20 p-3 px-3">
                        <div className="main-div main-div2 !mt-7 shadow2">
                            <h2 className="text-[rgba(0,255,255,0.5)] text-2xl font-bold tracking-widest text-center p-2 "> RULES OF GAMEPLAY: </h2>
                            <p className="p-3 text-white ">
                                The game IS MADE BY AI SYSTEAM IN METAVERSE GAME AND IT is BREAK into three rounds. The method of winning is to have a majority victory WHICH IS (MVP) - managing to win 2 out of the 3 rounds.
                                <br /><br />
                                All AI CHARECTOR will start WITH full ENERGY IN GAME, and will fight until the health of AGAINST THE fighter AND IT IS reduced to 0%. Once this has happened, the character is considered knocked out, and the round is lost. When the time limit for the round is reached, the victory is awarded to the player with the most health.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default WhatGame
