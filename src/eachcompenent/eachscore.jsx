import profile from '../assets/picture/profile.jpg'
const Eachscore = () => {

  return (
      <div className='h-1/6 bg-white w-11/12 rounded-3xl flex gap-4 justify-center items-center'>
         <div className=' w-2/5 h-5/6  flex  justify-end'>
            <div className='w-11/12 bg-lightgray h-full rounded-3xl flex justify-center items-center gap-4'>
               <div className='text-6xl text-orange-600 font-medium'>1</div>
               <img src={profile} className='h-5/6'/>
            </div>
         </div>
         <div className='w-2/3 h-5/6 bg-white flex flex-col justify-center'>
            <div className='text-xl'>ชื่อพรรค</div>
            <div className='text-5xl mb-5 text-black'>นายนายก ตัวจริง</div>
            <div className='flex w-full h-auto  pl-4 pr-6 items-center gap-5'>
               <div className='w-full h-auto'>
                  <div className='w-3/4 h-4 bg-orange-600 rounded-l-3xl top-2 relative z-10'></div>
                  <div className='w-full h-4 bg-lightgray rounded-3xl relative -top-2 '></div>
               </div>
               <div>XXXX</div>
            </div>
         </div>
      </div>
  );
};

export default Eachscore;