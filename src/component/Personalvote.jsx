import React, { useState } from 'react';
import profile from '../assets/picture/profile.jpg';
import { Link } from 'react-router-dom';

const Personalvote = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOk, setIsOk] = useState(false);
  return (
    <div>
      <div className="w-full h-screen bg-white">
        <div className="bg-white w-full h-auto pt-40 relative top-40 z-10 "></div>
        <div className="w-full h-auto overflow-visible flex justify-between items-center bg-background">
            <Link to="/" className=' flex items-center justify-center  mb-20 ml-5 pt-32 '>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
               </svg>
               <div className='text-black text-2xl '>ย้อนกลับ</div>
            </Link>

          <img src={profile} alt="Profile" className='h-80 z-20' />

          <div className='mr-12 gap-2 flex flex-col pt-48 ml-12 '>
            <div className='h-12 w-12 bg-buttonmainbgcolr rounded-lg '></div>
            <div className='h-12 w-12 bg-buttonmainbgcolr rounded-lg '></div>
            <div className='h-12 w-12 bg-buttonmainbgcolr rounded-lg '></div>
          </div>
        </div>
        <div className='w-full h-auto bg-background flex flex-col items-center gap-10 pb-20'>
          <div className='w-1/2 h-20 bg-button rounded-index flex justify-center items-center text-4xl text-black'>
            <div>นายกตัวจริง </div>
          </div>
          <div className='w-3/4 h-96 bg-button rounded-index flex flex-col'>
            <div className='w-full h-80 ml-20 mt-10 text-black text-3xl flex flex-col gap-10'>
              <div>พรรค</div>
              <div>ประวัติ</div>
              <div>นโยบาย</div>
            </div>
            <div className='w-full h-auto '>
              <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(true)} className="w-1/6 h-20 bg-buttonmainbgcolr rounded-3xl btn btn-ghost text-white text-4xl">
            Vote
          </button>

          {isOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-40 overflow-y-auto h-full w-full z-50 ">
              <div className="relative top-60 mx-auto p-5 border w-1/4 shadow-lg rounded-3xl backdrop-blur-sm">
                <div className="mt-3 text-center ">
                  <h3 className="text-lg leading-6 font-medium text-white">Confirmation ?</h3>
                  <div className="mt-2 px-7 py-3">
                    <p className="text-5xl text-white mb-4">
                    นายนายก ตัวจริง
                    </p>
                  </div>
                  <div className="items-center px-4 py-3 gap-40 flex justify-center">
                    <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-2xl h-14 w-24 shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                      Cancel
                    </button>
                    <button onClick={() => { setIsOpen(false); setIsOk(true); }} className="px-4 py-2 bg-buttonmainbgcolr text-white text-base font-medium rounded-2xl h-14 w-24 shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isOk && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-40 overflow-y-auto h-full w-full z-50 ">
            <div className="relative top-60 mx-auto p-5 border w-1/4 shadow-lg rounded-3xl backdrop-blur-sm ">
              <div className="mt-3 text-center flex flex-col items-center">
                  <div className='h-40 w-40 bg-lime-400 bg flex justify-center items-center rounded-full border-4 '>
                     <svg className="h-36 w-36 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                     </svg>
                  </div>
                  <div className="mt-2 px-7 py-3">
                     <p className="text-5xl text-white mb-4">
                     เสร็จสิ้น 
                     </p>
                  </div>
                  <div className="items-center px-4 py-3 gap-40 flex justify-center">
                     <button onClick={() => setIsOk(false) } className="px-8 py-4 bg-buttonmainbgcolr text-white text-3xl font-medium rounded-2xl h-auto w-auto shadow-sm  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        หลักฐานการโหวต
                     </button>
                  </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Personalvote;
