import React from 'react'
import { BsPatchCheckFill, BsTelegram, BsTwitter } from 'react-icons/bs'
import { GiCrossFlare } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'


const Roadmap = () => {
    const transition = { type: 'spring', duration: 1 }
    return (
        <>
            <div className="sliderGame" id='roadmap'>
                <div className="flex justify-center p-7">
                    <div className="bg-gray-700 rounded-lg shadow p-3 opacity-90 ">
                        <h1 className="text-white text-3xl text-center font-black ">ROADMAP </h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-stretch flex-wrap  justify-center ">


                    <motion.div
                        initial={{ bottom: '-100px' }}
                        whileInView={{ top: '2px' }}
                        transition={{ ...transition, type: 'tween' }} style={{ position: 'relative' }} className="md:w-1/4 w-full md:p-5 p-3">
                        <div className="main-div main-div2 !mt-7 shadow p-3 flex flex-col gap-5">
                            <h2 className="text-[rgba(0,255,255,0.5)] text-2xl font-bold tracking-widest text-center p-2 ">2023 Q1 </h2>

                            <li className="flex gap-10 items-center ">
                                <BsPatchCheckFill className='text-4xl text-green-700 ' />
                                <h5 className="text-white text-lg font-bold text-center">WEBSITE LAUNCH   </h5>
                            </li>

                            <li className="flex gap-10 items-center ">
                                <BsPatchCheckFill className='text-4xl text-green-700 ' />
                                <h5 className="text-white text-lg font-bold text-center">Launch Social Media Handle   </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsPatchCheckFill className='text-4xl text-green-700 ' />
                                <h5 className="text-white text-lg font-bold text-center">Release Tokenomics </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsPatchCheckFill className='text-4xl text-green-700 ' />
                                <h5 className="text-white text-lg font-bold text-center">Release Roadmap  </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsPatchCheckFill className='text-4xl text-green-700 ' />
                                <h5 className="text-white text-lg font-bold text-center">Release whitepaper </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />
                                <h5 className="text-white text-lg font-bold text-center">Beta launch of mobile & IOS  </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">Close beta testing  </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">Security & smart contract audit  </h5>
                            </li>

                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ bottom: '-100px' }}
                        whileInView={{ top: '2px' }}
                        transition={{ ...transition, type: 'tween' }} style={{ position: 'relative' }} className="md:w-1/4 w-full md:p-5 p-3">
                        <div className="main-div main-div2 !mt-7 shadow2 p-3 flex flex-col gap-5">
                            <h2 className="text-[rgba(0,255,255,0.5)] text-2xl font-bold tracking-widest text-center p-2 ">2023 Q2 </h2>

                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">Private / Seed sale   </h5>
                            </li>

                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center"> Public Sale  </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">Character Nft launch  </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">ACT token listing   </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">Mobile/ pc game launch    </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">Game Scaleup   </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">Ecosystem Building    </h5>
                            </li>

                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ bottom: '-100px' }}
                        whileInView={{ top: '2px' }}
                        transition={{ ...transition, type: 'tween' }} style={{ position: 'relative' }} className="md:w-1/4 w-full md:p-5 p-3">
                        <div className="main-div main-div2 !mt-7 shadow p-3 flex flex-col gap-5">
                            <h2 className="text-[rgba(0,255,255,0.5)] text-2xl font-bold tracking-widest text-center p-2 ">2023 Q3 </h2>

                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">Launch of staking platform   </h5>
                            </li>

                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">Launch of farming platform  </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">Season 2 launch  </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <GiCrossFlare className='text-4xl text-red-700 ' />

                                <h5 className="text-white text-lg font-bold text-center">new game announced   </h5>
                            </li>

                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ bottom: '-100px' }}
                        whileInView={{ top: '2px' }}
                        transition={{ ...transition, type: 'tween' }} style={{ position: 'relative' }} className="md:w-1/4 w-full md:p-5 p-3">
                        <div className="main-div main-div2  !mt-7 shadow2 p-3 flex flex-col gap-5">
                            <h2 className="text-[rgba(0,255,255,0.5)] text-2xl font-bold tracking-widest text-center p-2 ">2022 Q4 </h2>

                            <li className="flex gap-10 items-center ">
                                <BsPatchCheckFill className='text-4xl text-green-700 ' />
                                <h5 className="text-white text-lg font-bold text-center">GAME DEVLOPMENT  </h5>
                            </li>

                            <li className="flex gap-10 items-center ">
                                <BsPatchCheckFill className='text-4xl text-green-700 ' />
                                <h5 className="text-white text-lg font-bold text-center">GAME STORY DEVLOPMENT  </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsPatchCheckFill className='text-4xl text-green-700 ' />
                                <h5 className="text-white text-lg font-bold text-center">INTEGRATION OF AI </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsPatchCheckFill className='text-4xl text-green-700 ' />
                                <h5 className="text-white text-lg font-bold text-center">CREATE NFTS  </h5>
                            </li>

                        </div>
                    </motion.div>


                </div>

                <div className="flex justify-center p-7">
                    <div className="bg-gray-700 rounded-lg shadow p-3 opacity-90 ">
                        <h1 className="text-white text-3xl text-center font-black ">Contact Us </h1>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-stretch flex-wrap  justify-center ">


                    <motion.div
                        initial={{ bottom: '-100px' }}
                        whileInView={{ top: '2px' }}
                        transition={{ ...transition, type: 'tween' }} style={{ position: 'relative' }} className=" w-full md:p-5 pb-10 flex justify-center gap-4">
                        <BsTwitter className='text-white text-4xl' />
                        <BsTelegram className='text-white text-4xl' />
                        <MdEmail className='text-white text-4xl' />
                    </motion.div>
                </div>
            </div>

        </>
    )
}

export default Roadmap
