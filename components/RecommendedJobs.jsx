"use client"
import React,{useState,useEffect} from 'react'
import { fetchRecomdata } from '@utils/FetchRecomJobs';
import {BsPersonFill} from "react-icons/bs"
import Link from 'next/link';
import millify from 'millify';
const RecommendedJobs = () => {
  const [data,setdata]=useState([])
const fetchdata=async()=>{
  const data=  await fetchRecomdata();
  setdata(data);
  console.log(data)
}
  useEffect(() => {
    fetchdata();
  }, [])
  
  return (
    <section className="recommendedsection flex flex-col items-center pr-2 pl-2">
     { data.map((data)=>{
       return  <div  key={data.id} className='flex items-center recommendeditem w-80 p-3 m-3'>
  <div>
    {data.employer_logo?<img className="h-10 w-10 border-4 border-white-500  mr-3" src={data.employer_logo} alt="" />:<BsPersonFill size={50} className='border-4 border-white-500  mr-3'/>}
  </div>
  <div >
<div className=" ml-3 flex justify-between"> 
  <div>
 <Link  href={`JobDetail/job_id=${data.job_id}`} className='hover:text-green-500'>{data.job_title.slice(0,10)}..</Link> <br/>
{data.job_city?data.city:"Islambad"},{data.job_country} 
  </div>
  <div>
    {data.job_min_salary?<span>${millify(data.job_min_salary)}-${millify(data.job_max_salary)}/year</span>:"$100k-$200k/year "}
 <br/>
  
  <span className='ml-2'>{data.job_employment_type}</span> 
  </div>
</div>
  </div>
</div>
      })}

    </section>
  )
}

export default RecommendedJobs