import React from 'react'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import { motion } from 'framer-motion'


const Tokens = () => {
    const transition = { type: 'spring', duration: 1 }

    return (
        <>
            <div className="sliderGame" id='token'>
                <div className="flex justify-center p-7">
                    <div className="bg-gray-700 rounded-lg main-div main-div1 opacity-90 ">
                        <h1 className="text-white text-3xl text-center font-black ">Token Utility In <br /> Metaverse </h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-stretch flex-wrap  justify-center ">
                <motion.div
                        initial={{ bottom: '-100px' }}
                        whileInView={{ top: '2px' }}
                        transition={{ ...transition, type: 'tween' }} style={{ position: 'relative' }}
                         className="md:w-1/3 w-full md:p-5 p-3">
                        <div className="main-div main-div2 !mt-7 shadow p-3 flex flex-col gap-5">
                            <li className="flex gap-10 items-center ">
                                <BsBookmarkCheckFill className='text-4xl text-green-700 '/>
                                <h5 className="text-white text-lg font-bold text-center">STAKING </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsBookmarkCheckFill className='text-4xl text-green-700 '/>
                                <h5 className="text-white text-lg font-bold text-center">   IN GAMEPLAY  </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsBookmarkCheckFill className='text-4xl text-green-700 '/>
                                <h5 className="text-white text-lg font-bold text-center">GOVERNANCE </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsBookmarkCheckFill className='text-4xl text-green-700 '/>
                                <h5 className="text-white text-lg font-bold text-center">TOURNAMENT  </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsBookmarkCheckFill className='text-4xl text-green-700 '/>
                                <h5 className="text-white text-lg font-bold ">SKILLS &WEAPON UPGRADE  </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsBookmarkCheckFill className='text-4xl text-green-700 '/>
                                <h5 className="text-white text-lg font-bold text-center">BURNING </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsBookmarkCheckFill className='text-4xl text-green-700 '/>
                                <h5 className="text-white text-lg font-bold text-center">PURCHASE NFT </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsBookmarkCheckFill className='text-4xl text-green-700 '/>
                                <h5 className="text-white text-lg font-bold text-center">NFTS RENTING </h5>
                            </li>
                            <li className="flex gap-10 items-center ">
                                <BsBookmarkCheckFill className='text-4xl text-green-700 '/>
                                <h5 className="text-white text-lg font-bold text-center">CHARACTERS UPGRADE  </h5>
                            </li>
                        </div>
                    </motion.div>


                </div>
            </div>
        </>
    )
}

export default Tokens
