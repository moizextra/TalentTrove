import React from 'react'
import Image from 'next/image';
const Jobs = ({jobpost}) => {
  return (
    <section className="flex flex-col">
{jobpost.map((job)=>{
  return <>
    <section className="mt-3 ml-3 job bg-white-500 ">
<div className="flex items-center">
    <img src="https://media.glassdoor.com/sqll/425440/e-solutions-squarelogo-1537548633301.png"  className="h-14 border-4 border-white-500  mr-3"alt="" srcset="" />
    <div className='flex flex-col'>
      <span className='font-bold'>React Enginner</span>
      <span className='text-gray-500'>AMS Extra Posted: 1 day ago</span>
    </div>
</div>
<div>
<p className="text-gray-500 font-medium mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo debitis eius reiciendis nostrum iusto repellat libero facere esse, doloremque quaerat possimus reprehenderit unde ad ab, dolores eaque! Eaque sapiente soluta recusandae quos iusto quam qui asperiores, aspernatur velit libero assumenda provident sunt neque id illo amet doloremque rem rerum alias. Iste beatae ab asperiores saepe corrupti rerum rem quisquam, labore at commodi veritatis ad officia enim voluptatibus illum esse possimus inventore autem nam voluptatem impedit dolorem sapiente similique. Iusto impedit fuga quia. Laudantium fugit dicta nam amet, voluptate ipsum reiciendis sapiente officia nihil officiis! Adipisci amet quasi, provident a debitis quos eligendi deleniti magnam ex numquam iusto hic dolores ab excepturi magni. Minima porro mollitia libero, quisquam impedit vel sit ratione ab?</p>
</div>
<div className="skills mt-5">
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">React</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Next</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Node</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">js</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Django</span>
</div>
<div className="flex justify-between mt-4 items-center">
  <span>Full time</span>
  <div className="flex">
    <button>View Details</button>
    <button className="m-4 rounded-xl bg-green-500 text-white p-2 w-40">Apply Now</button>
  </div>
</div>

    </section>
    </>

})}
  
      </section>
  )
}
export default Jobs