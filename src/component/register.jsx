import logo from '../assets/picture/Seal_of_the_Parliament_of_Thailand.svg.png'
import facebook from '../assets/picture/facebook.png'
import google from '../assets/picture/google.png'
import { Link } from 'react-router-dom';
const Register = () => {

  return (
   <div className='w-full h-screen flex overflow-hidden '>
      <div className=" w-3/5  h-full bg-navbar z-10 rounded-tr-background flex justify-center items-center flex-col gap-0">
         <div className=' justify-center items-center flex flex-col'>
            <img src={logo} className='h-48 mb-5   '/>
            <div className='text-4xl text-white my-5'>Solution</div>
         </div>   
         <div className='flex gap-10 justify-center items-center '>
            <div className='flex flex-col justify-center items-center gap-y-10'>
               <div className='h-24 w-24 rounded-full bg-solutionpage text-4xl flex justify-center items-center text-black'> 1</div>
               <div className='h-24 w-24 rounded-full bg-buttonmainbgcolr text-4xl flex justify-center items-center text-white'> 2</div>
               <div className='h-24 w-24 rounded-full bg-buttonmainbgcolr text-4xl flex justify-center items-center text-white'> 3</div>
               <div className=' absolute h-80 w-4 bg-white top-3/5 -z-10'></div>
            </div>
            <div className='flex flex-col justify-center items- gap-y-24 w-auto'>
               <div className='text-xl text-white'>ลงทะเบียน กรอกข้อมูลที่ระบุดังกล่าวให้ครบถ้วน</div>
               <div>
                  <div className='text-xl text-white'>รอรับรหัส OTP ผ่านช่องทางที่ท่านเลือกเพื่อยืนยันตัวตน</div>
                  <div className='text-xl text-white'>(ประมาณ3-5นาที)และสร้างรหัสผ่านตามตัวเลขบัตรประชาชน (ID card) ให้อัตโนมัติ</div>
               </div>
               <div className='text-xl text-white'>เสร็จสิ้นการลงทะเบียน</div>
            </div>

         </div>
      </div>
      <div className="w-2/5 h-full  z-20 flex flex-col items-center justify-between pb-10 ">
         <div className='w-5/6 h-auto mt-24 flex flex-col gap-y-4  justify-center items-center '>
            <div className='text-5xl mb-4 text-black'>Register</div>
            <div className=' flex flex-col gap-3 w-full'>
               <div className='flex gap-4'>
                  <input class="placeholder:italic placeholder:text-gray-400 block text-black bg-background h-12 w-1/3  border border-background rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:white focus:ring-1 sm:text-sm" placeholder="คำนำหน้า" type="text" name="search"/>
                  <input class="placeholder:italic placeholder:text-gray-400 block text-black bg-background h-12  w-2/3 border border-background rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:white focus:ring-1 sm:text-sm" placeholder="ชือจริง" type="text" name="search"/>
               </div>
               <div className='flex gap-4'>
                  <input class="placeholder:italic placeholder:text-gray-400 block text-black bg-background h-12 w-1/2 border border-background rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:white focus:ring-1 sm:text-sm" placeholder="ชื่อกลาง" type="text" name="search"/>
                  <input class="placeholder:italic placeholder:text-gray-400 block text-black bg-background h-12 w-1/2 border border-background rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:white focus:ring-1 sm:text-sm" placeholder="นามสกุล" type="text" name="search"/>
               </div>
               <div className='flex gap-4'>
                  <input class="placeholder:italic placeholder:text-gray-400 block text-black bg-background h-12 w-full border border-background rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:white focus:ring-1 sm:text-sm" placeholder="Email" type="text" name="search"/>
               </div>
               <div className='flex gap-4'>
                  <input class="placeholder:italic placeholder:text-gray-400 block text-black bg-background h-12 w-full border border-background rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:white focus:ring-1 sm:text-sm" placeholder="เลขบัตรประชาชน" type="text" name="search"/>
               </div>
               <div className='flex gap-4'>
               <input class="placeholder:italic placeholder:text-gray-400 block text-black bg-background h-12 w-1/3 border border-background rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:white focus:ring-1 sm:text-sm" placeholder="เลือกข้อมูล" type="text" name="search"/>
               <input class="placeholder:italic placeholder:text-gray-400 block text-black bg-background h-12 w-2/3 border border-background rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:white focus:ring-1 sm:text-sm" placeholder="เบอร์โทรศัพท์" type="text" name="search"/>
               </div>
               <div className='flex-col flex gap-4 ml-10 text-xl text-black'>
                  <div>รับรหัสยืนยันผ่านช่องทาง</div>
                  <div className='flex gap-40 ml-10'>
                     <div className=' flex justify-center items-center gap-3'>
                        <input type="checkbox" defaultChecked className="checkbox border-background bg-background rounded-2xl" id='Email' /> 
                        <div className=''>Email</div>
                     </div>
                     <div className=' flex justify-center items-center gap-3'>
                     <input type="checkbox" defaultChecked className="checkbox border-background bg-background rounded-2xl" id=' Phone'/> 
                        <div>เบอร์โทรศัพท์</div>
                     </div>
                  </div>
               </div>
               <div className='flex  justify-center '>
                  <div className='btn w-1/4 rounded-full bg-buttonmainbgcolr text-white border border-buttonmainbgcolr text-xl '>register</div>
               </div>
               <div className='flex gap- text-xl items-center justify-center'>
                  <div>Already have an account?</div>
                  <div className='text-blue-400 underline'><Link to="/login">Login</Link></div>
               </div>
            </div>
         </div>
         <div className='w-5/6 h-auto flex flex-col  items-center '>
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

export default Register;