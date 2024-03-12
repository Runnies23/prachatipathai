import { Link } from "react-router-dom";
const Maininteract = () => {

  return (
   <div className=' w-full h-auto py-20'>
      <div className=' justify-center items-center flex  gap-12 text-white text-3xl'>
         <Link to="/vote" className="w-1/5 h-20 bg-buttonmainbgcolr flex justify-center items-center rounded-2xl">สส member</Link>
         <Link to="/score" className="w-1/5 h-20 bg-buttonmainbgcolr flex justify-center items-center rounded-2xl">score board</Link>
         <Link to="/myvote" className="w-1/5 h-20 bg-buttonmainbgcolr flex justify-center items-center rounded-2xl">my vote</Link>
         <Link to="/vote" className="w-1/5 h-20 bg-buttonmainbgcolr flex justify-center items-center rounded-2xl">spec policy</Link>
      </div>
  </div>
  );
};

export default Maininteract;

