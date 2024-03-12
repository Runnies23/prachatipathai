
import { Link } from 'react-router-dom';
import Navbar from '../component/navbar';
import Logomain from '../component/Logomain';
import Maininteract from '../component/maininteract';
import Mainsolution from '../component/mainsolution';
import SelectProvice from '../component/selectprovince';
import Membercomponent from '../component/member';
import Footer from './footer';

export default function Home(){
   return(
   <div className=''>
      <Navbar/>
      <Logomain/>
      <Maininteract/>
      <Mainsolution/>
      <SelectProvice/>
      <Membercomponent/>
      <Membercomponent/>
      <Membercomponent/>
      <Membercomponent/>
      <Membercomponent/>
      <Footer/>
   </div>
   );
}