"use client"; // This is a client component 
import { useState,useEffect } from "react";
import Link from "next/link";
import {BiNetworkChart} from "react-icons/bi"
const Navbar = () => {
    const[selected,setselected]=useState("Outerview");
    const handleClickItems=(e)=>{
        setselected(e.target.innerText);
    }
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <nav className={` flex justify-around sticky top-0 z-10  h-12 items-center border-b-1 border-white-500 ${scrolled ? 'navonscroll rounded-b-3xl' : 'bg-white'} `}>
        <div className="flex items-center justify-center">
 <BiNetworkChart size={20} color="green"/> 
<Link href={"/"}><h1 className="font-semibold text-2xl text-green-500">TalentTrove</h1></Link>
        </div>
<ul className="flex ">
    <li className={`m-8 cursor-pointer  rounded-sm ${selected=== "Outerview" ? 'border-b-2 border-green-500 text-green-500' : ''}`} onClick={handleClickItems}><Link href={"/"}>Outerview</Link></li>
    <li className={`m-8  cursor-pointer  rounded-sm ${selected=== "Estimated Salary" ? 'border-b-2 border-green-500 text-green-500' : ''}`} onClick={handleClickItems}>Estimated Salary</li>
    <li className={`m-8  cursor-pointer  rounded-sm ${selected=== "Job Search" ? 'border-b-2 border-green-500 text-green-500' : ''}`} onClick={handleClickItems}><Link href={`/JobSearch`}>Job Search</Link></li>
</ul>
<div className="flex">
    <button className="m-4 rounded-xl bg-green-500 text-white p-2 w-20"><Link href={"/Signup"}>Signup</Link></button>
    <button className="m-4 rounded-xl bg-green-500 text-white p-2 w-20">Login</button>
</div>
    </nav>
  )
}

export default Navbar