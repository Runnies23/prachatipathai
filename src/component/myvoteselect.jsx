import Navbar from "../component/navbar";

const Selectprovince = () => {

   return (
    <div className="pt-40 flex flex-col w-full h-auto justify-center items-center gap-10 mb-20 ">
      <div className="w-full flex justify-center ">
         <input type="text" placeholder="Province" className="input input-bordered input-lg w-1/6 h-24 rounded-index text-3xl" />
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="  w-12 h-12 relative top-5 right-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
         </svg>
      </div>
      <select className="select select-bordered w-1/3 rounded-index h-16 text-3xl ">
         <option disabled selected>Area</option>
         <option>Han Solo</option>
         <option>Greedo</option>
      </select>
    </div>
   );
 };
 
 export default Selectprovince;
 
 