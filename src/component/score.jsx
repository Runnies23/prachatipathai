import thia from '../assets/picture/thai.png'
import { Link } from 'react-router-dom';
import profile from '../assets/picture/profile.jpg'
import Eachscore from '../eachcompenent/eachscore';
const Score = () => {

  return (
   <div className='w-full auto flex pt-28 bg-background overflow-hidden'>
      <div className='w-full h-auto flex bg-background items-center flex-col'>
         <div className='w-1/2 h-auto justify-center flex flex-col items-center'>
            <div className='text-2xl text-white relative top-14'>นับคะเเนนเเล้ว 15 %</div>
            <div className='w-full h-20 bg-navbar rounded-index'></div>
            <div className='items-start  w-full h-auto'>
               <div className='w-1/3 h-20 bg-buttonmainbgcolr bottom-20 relative rounded-l-index items-start'></div>
            </div>
         </div>
         <div className='w-full justify-between flex '>
            <div className=' bg-background justify-between h-auto w-1/2'>
               <img src={thia} className = 'w-full bg-background relativept-40'/>
            </div>
            <div className='w-1/2 h-auto'>
               <div className="flex flex-col justify-center items-end bg-background">
                  <div className=' flex flex-col gap-2  w-1/2 h-auto justify-end items-end'>
                     <div className='w-full '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="relative left-96 top-16 w-12 h-12  ">
                           <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" placeholder="  Province" className="input w-full h-20 rounded-l-index bg-navbar text-2xl" />
                     </div>
                     <select className="select select-bordered w-2/3 max-w-xs rounded-l-index bg-navbar text-xl">
                        <option disabled selected>Area</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                     </select>
                  </div>          
               </div>
               <div className='flex flex-col w-full h-full'>
                  <div className=' pl-20 text-5xl text-black relative left-12 font-bold '>จังหวัด : กรุงเทพ</div>  
                  <div className='flex justify-center items-center w-full h-5/6 '>
                     <div className='w-3/4 h-full bg-rosebg justify-start py-4 flex rounded-3xl gap-4 flex-col items-center '>
                     <div className='  text-5xl text-black  font-bold py-4'>เขต 1 </div>  
                           <Eachscore/>
                           <Eachscore/>
                           <Eachscore/>
                           <Eachscore/>
                           <Eachscore/>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>

      </div>
   </div>
  );
};

export default Score;