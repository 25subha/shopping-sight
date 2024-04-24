import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between px-12  bg-neutral-800 text-white p-4">
    <div>
    <h1 className="uppercase font-bold	">about</h1>
   <ul className="cursor-pointer">
         <li className="">home</li>
         <li className="">contact-us</li>
         <li className="">our history</li>
         <li className="">about-us</li>
       </ul>
    </div>
    <div>
     <h1 className="uppercase font-bold cursor-pointer">contact with us</h1>
     <ul className="cursor-pointer">
       <li>email: mrsubha25@gmail.com</li>
       <li>contact: +91 9732154525 </li>
       <li>kolkata,india</li>
     </ul>
    </div>
    <div>
     <h1 className="uppercase font-bold cursor-pointer">fallow us</h1>
     <ul className="cursor-pointer">
       <li>facebook</li>
       <li>instagram</li>
       <li>twiter</li>
     </ul>
    </div>
    <div>
     <h1 className="uppercase font-bold cursor-pointer">Let Us Help You</h1>
     <ul className="cursor-pointer">
       <li>Your Account</li>
       <li>Returns Centre</li>
       <li>100% Purchase Protection</li>
       <li>Help</li>
     </ul>
    </div>
   </footer>

  )
}

export default Footer;