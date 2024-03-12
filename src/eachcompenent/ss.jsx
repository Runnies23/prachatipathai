import picture from '../assets/picture/profile.jpg'
const Eachcard = () => {

  return (
      <div className="w-80 h-96 bg-background flex flex-col justify-center items-center mb-10">
         <div className="">
            <img className= 'first:pt-0 last:pb-0' src={picture}/>
         </div>
         <div className="flex flex-col justify-center items-center">
            <div className='w-60 h-16 bg-button flex flex-col justify-center items-center text-4xl rounded-index text-black'>profile สส</div>
         </div>
      </div>
  );
};

export default Eachcard;