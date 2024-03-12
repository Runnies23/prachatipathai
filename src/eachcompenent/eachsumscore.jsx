import profile from '../assets/picture/profile.jpg'
const Eachsumscore = () => {

  return (
      <div className='h-5/6 w-1/6  rounded-3xl text-3xl flex flex-col items-center justify-center gap-y-2 '> 
         <div className='h-1/3 w-full flex items-center justify-center bg-white border-2 border-black rounded-3xl gap-5'>
            <img src={profile} className='h-full'/>
            <div className='flex flex-col text-4xl font-bold justify-center mx-4'>
               <div>1st</div>
               <div>xxxx</div>
            </div>
         </div>
         <div className='h-1/3 w-full flex items-center justify-center bg-white border-2 border-black rounded-3xl gap-5'>1</div>  
         <div className='h-1/3 w-full flex items-center justify-center bg-white border-2 border-black rounded-3xl gap-5 '>1</div>
      </div>
  );
};

export default Eachsumscore;