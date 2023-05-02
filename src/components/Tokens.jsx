import React from 'react'
import {BsBookmarkCheckFill} from 'react-icons/bs'

const Tokens = () => {
    return (
        <>
            <div className="sliderGame" id='token'>
                <div className="flex justify-center p-7">
                    <div className="bg-gray-700 rounded-lg shadow p-3 opacity-90 ">
                        <h1 className="text-white text-3xl text-center font-black ">Token Utility In <br /> Metaverse </h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-stretch flex-wrap  justify-center ">
                    <div className="md:w-1/3 w-full md:p-5 p-3">
                        <div className="bg-gray-800 rounded-[1rem] mt-7 shadow p-3 flex flex-col gap-5">
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
                                <h5 className="text-white text-lg font-bold text-center">SKILLS &WEAPON UPGRADE  </h5>
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
                    </div>


                </div>
            </div>
        </>
    )
}

export default Tokens
