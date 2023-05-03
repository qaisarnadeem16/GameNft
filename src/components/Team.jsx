import React from 'react'
import team1 from '../assets/team1.jpeg'
import team2 from '../assets/team2.jpeg'
import team3 from '../assets/team3.jpeg'
import team4 from '../assets/team4.jpeg'
import team5 from '../assets/team5.jpeg'
import team6 from '../assets/team6.jpeg'

const Team = () => {
    return (
        <>
            <div className="hero w-full h-full" id='team'>
            <div className="flex justify-center p-7">
                    <div className="bg-gray-700 main-div main-div1 opacity-90 ">
                        <h1 className="text-white text-3xl text-center font-black ">Team </h1>
                    </div>
                </div>
                <div className="flex flex-wrap flex-row items-center md:gap-12  md:p-28 p-0">
                    <div className="md:w-1/4 w-1/2 md:p-5 p-2">
                      <img src={team1} alt="" className='rounded-md' />
                      <h2 className="text-white text-md font-semibold tracking-widest text-center py-2 px-1 mt-5 bg-gray-800 rounded-md shadow ">DD SOUZIK (CEO) </h2>
                    </div>

                    <div className="md:w-1/4 w-1/2 md:p-5 p-3">
                      <img src={team2} alt="" className='rounded-md' />
                      <h2 className="text-white text-md font-semibold tracking-widest text-center py-2 px-1 mt-5 bg-gray-800 rounded-md shadow ">NONGAZ (CMO) </h2>
                    </div>
                    <div className="md:w-1/4 w-1/2 md:p-5 p-3">
                      <img src={team3} alt="" className='rounded-md' />
                      <h2 className="text-white text-md font-semibold tracking-widest text-center py-2 px-1 mt-5 bg-gray-800 rounded-md shadow ">Bella DIZI (CTO) </h2>
                    </div>
                    <div className="md:w-1/4 w-1/2 md:p-5 p-3">
                      <img src={team4} alt="" className='rounded-md' />
                      <h2 className="text-white text-md font-semibold tracking-widest text-center py-2 px-1 mt-5 bg-gray-800 rounded-md shadow ">Layme Sol ( GAME DEVELOPER ) </h2>
                    </div>
                    <div className="md:w-1/4 w-1/2 md:p-5 p-3">
                      <img src={team5} alt="" className='rounded-md' />
                      <h2 className="text-white text-md font-semibold tracking-widest text-center py-2 px-1 mt-5 bg-gray-800 rounded-md shadow ">VIXEN DINEZ (CM) </h2>
                    </div>
                    <div className="md:w-1/4 w-1/2 md:p-5 p-3">
                      <img src={team6} alt="" className='rounded-md' />
                      <h2 className="text-white text-md font-semibold tracking-widest text-center py-2 px-1 mt-5 bg-gray-800 rounded-md shadow ">LEOZAG (3D ARTIST) </h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Team
