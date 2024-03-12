import { Link } from 'react-router-dom';
import profile from '../assets/picture/profile.jpg'
import Eachsumscore from '../eachcompenent/eachsumscore';
const Sumscore = () => {

  return (
   <div className='w-full h-auto flex pt-28 bg-background justify-center items-center pb-24 flex-col '>
        <div className='w-11/12 h-auto relative left-1/8 top-10'>
          <div className=' w-full h-20 bg-black flex justify-center items-center px-5 gap-2 rounded-index text-4xl text-white'>
            <div className='h-4/6 w-5/12  bg-orange-600 rounded-index border flex justify-center items-center'>
              <div>40%</div>
            </div>
            <div className='h-4/6 w-4/12  bg-red-600 rounded-index border  flex justify-center items-center'>
              <div>30%</div>
            </div>
            <div className='h-4/6 w-3/12  bg-blue-700 rounded-index border  flex justify-center items-center'>
              <div>20%</div>
            </div>
            <div className='h-4/6 w-2/12  bg-blue-600 rounded-index border flex justify-center items-center '>
              <div>10%</div>
            </div>
            <div className='h-4/6 w-2/12 bg-blue-400 rounded-index border  flex justify-center items-center'>
              <div>5%</div>
            </div>
            <div className='h-4/6 w-1/12 bg-lime-500 rounded-index border flex justify-center items-center '>
              <div>3%</div>
            </div>
          </div>
        </div>  
      <div className='w-11/12 h-96 flex justify-center items-center'>
        <div className='w-full h-full bg-red-400 mx-4 gap-x-3 flex items-center justify-center pt-8 rounded-t-index rounded-b-3xl text-black'>
           <div className='h-5/6 w-auto  bg-white rounded-3xl text-3xl flex flex-col items-center justify-center border-2 border-black'> 
              <div className='h-1/3 flex items-center justify-center'>ที่นั่งรวม</div>
              <div className='border-y-2 border-black w-full px-10 h-1/3 flex items-center justify-center'>ที่นั่งเขต</div>  
              <div className='flex flex-col items-center justify-center h-1/3 '>
                <div>ที่นั่งบัญชี</div>
                <div>รายชื่อ</div>
              </div>
           </div>
          <Eachsumscore/>
          <Eachsumscore/>
          <Eachsumscore/>
          <Eachsumscore/>
          <Eachsumscore/>
        </div>

      </div>
   </div>
  );
};

export default Sumscore;