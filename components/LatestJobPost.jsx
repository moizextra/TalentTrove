"use client"
import {BsPersonFill} from "react-icons/bs"
const LatestJobPost =({data}) => {

  return (
    <section className="flex flex-wrap">
      {data.map((job)=>{
return   <section  key={job.job_id} className="mt-5 ml-8 job bg-white-500 w-96 h-80 ">
<div className="flex mb-5">
{job.employer_logo? <img src={job.employer_logo} className="h-14 w-16 border-4 border-white-500  mr-3"alt="" srcset="" />:<BsPersonFill size={50} className='border-4 border-white-500  mr-3'/>}
<div>
 <span className="font-semibold">{job.employer_name}</span>
 <span className="ml-3 text-gray-500">{job.job_publisher} </span><br/><span>Posted:1 day ago</span>
</div>
</div>
<div>
<p>{job.job_description.slice(0,150)}...</p>
</div>
<div className="skills mt-5">
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">React</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Next</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Node</span>
more..
</div>
<div className="flex justify-between mt-3 items-center">
<span className="border-white m-3  bg-slate-100 rounded-xl  text-xs p-3">{job.job_employment_type}</span>
<span className="border-white m-3 text-gray-500 rounded-xl text-xs">{job.job_is_remote?"Remote":"Onsite"}</span>
<div className="flex">
<button className="m-4 rounded-xl bg-green-500 text-white p-2 w-40">View Detail</button>
</div>
</div>
</section>

      })}
  

</section>
  )
}

export default LatestJobPost