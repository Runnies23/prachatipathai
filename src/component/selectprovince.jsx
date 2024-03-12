const SelectProvice = () => {

   return (
    <div className='w-full h-auto py-20'>
         <div className="flex flex-col justify-center items-center gap-20">
         <input type="text" placeholder="Province" className="input input-bordered input-lg w-full max-w-xs" />
            <select className="select select-bordered w-full max-w-xs">
               <option disabled selected>Area</option>
               <option>Han Solo</option>
               <option>Greedo</option>
            </select>
         </div>

    </div>
   );
 };
 
 export default SelectProvice;
 
 