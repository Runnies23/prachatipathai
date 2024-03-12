import logo from '../assets/picture/Seal_of_the_Parliament_of_Thailand.svg.png'
import facebook from '../assets/picture/facebook.png'
import google from '../assets/picture/google.png'
import { Link } from 'react-router-dom';
const Login = () => {

  return (
   <div className='w-full h-screen flex overflow-hidden '>
      <div className=" w-3/5  h-full bg-navbar z-10 rounded-tr-background flex justify-center items-center flex-col gap-0">
      

      </div>
      <div className="w-2/5 h-full  z-20 flex flex-col items-center  justify-between pb-10">
         <div className='w-5/6 h-auto mt-24 flex flex-col gap-y-8  justify-center items-center '>
            <div className='text-5xl mb-4 text-black'>Login</div>
            <div className=' flex flex-col gap-3 w-full'>
               <div className='flex gap-4'>
                  <input class="placeholder:italic placeholder:text-gray-400 block text-black bg-background h-12 w-full  border border-background rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:white focus:ring-1 sm:text-sm" placeholder="คำนำหน้า" type="text" name="search"/>
               </div>
               <div className='flex gap-4'>
                  <input class="placeholder:italic placeholder:text-gray-400 block text-black bg-background h-12 w-full border border-background rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:white focus:ring-1 sm:text-sm" placeholder="ชื่อกลาง" type="text" name="search"/>
               </div>
               <div className='flex  justify-center '>
                  <div className='btn w-1/4 rounded-full bg-buttonmainbgcolr text-white border border-buttonmainbgcolr text-xl '>register</div>
               </div>
               <div className='flex gap-3 text-xl items-center justify-center'>
                  <div>Already have an account?</div>
                  <div className='text-blue-400 underline'><Link to="/register">Register</Link></div>
               </div>
            </div>
         </div>
         <div className='w-5/6 h-auto flex flex-col  items-center  '>
            <div className='text-4xl mb-2 text-black'>Login with</div>
            <div className=' w-full h-52    bg-lonig rounded-3xl flex items-center flex-col gap-5 justify-center text-black'>
               <div className=' w-3/4 h-12    bg-white rounded-3xl flex items-center justify-center gap-4'>
                  <img src={facebook} className='h-8'/>
                  <div className='text-xl'>เข้าสู่ระบบด้วย Facebook</div>
               </div>
               <div className=' w-3/4 h-12    bg-white rounded-3xl flex items-center justify-center gap-4'>
                  <img src={google} className='h-8'/>
                  <div className='text-xl'>เข้าสู่ระบบด้วย Google</div>
               </div>
            </div>
         </div>
      </div>
         
   </div>
  );
};

export default Login;