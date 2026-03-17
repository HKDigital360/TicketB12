import React from 'react';
import VectorImg1 from "../../assets/vector1.png"
import VectorImg2 from "../../assets/vector2.png"

const HeroBoard = () => {
    return (
        <div>
            <div className='mx-auto  max-w-360 mt-20'>
                <div className='flex flex-col sm:flex-row gap-4 justify-between gap-24px'>
                    <div className= ' flex justify-center items-center text-center sm:w-176 h-62 rounded-2xl bg-linear-to-r from-purple-600 to-purple-300 '>

                       <img className='absolute mr-95' src={VectorImg1} alt="" />
                    <img className='absolute transform rotate-y-180 ml-95' src={VectorImg1} alt="" /> 
                    <div className='text-white relative '>
                        <h2 className= ' text-3xl'>In Progress</h2>
                    <h2 className='text-6xl'>0</h2>
                    </div>
                    </div>
                    <div className='flex justify-center items-center text-center sm:w-176 h-62  rounded-2xl    bg-linear-to-r from-lime-400 to-green-600 '>

                        <img className='absolute mr-95' src={VectorImg1} alt="" />
                    <img className='absolute transform rotate-y-180 ml-95' src={VectorImg1} alt="" />
                        <div className='text-white relative'>
                        <h2 className= ' text-3xl'>Resolved</h2>
                    <h2 className='text-6xl'>0</h2>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroBoard;