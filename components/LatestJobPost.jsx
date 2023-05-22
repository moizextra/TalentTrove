// import { fetchdata } from "@utilities/fetchdata"
const LatestJobPost = async () => {
  const url = 'https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7fdb904416msh4dc4281a8455929p1e4d1ejsnea807bb4d77c',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const res=await fetch(url, options);
  const data= await res.json();
  const jobpost=data.data;
  // console.log(jobpost)

  return (
    <section className="flex flex-wrap">
    <section className="mt-5 ml-8 job bg-white-500 w-96 h-80 ">
<div className="flex mb-5">
<img src="https://media.glassdoor.com/sqll/425440/e-solutions-squarelogo-1537548633301.png"  className="h-14 border-4 border-white-500  mr-6"alt="" srcset="" />
<div>
 <span className="font-semibold">React Enginner</span>
 <span className="ml-3 text-gray-500">AMS Extra</span><br/><span>Posted:1 day ago</span>
</div>
</div>
<div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo debitis eius reiciendis nostrum iusto repellat libero facere esse, doloremque ...</p>
</div>
<div className="skills mt-5">
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">React</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Next</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Node</span>
more..
</div>
<div className="flex justify-between mt-3 items-center">
<span className="border-white m-3  bg-slate-100 rounded-xl  text-xs">Full time</span>
<span className="border-white m-3  bg-slate-100 rounded-xl text-xs">18 hours</span>
<div className="flex">
<button className="m-4 rounded-xl bg-green-500 text-white p-2 w-40">View Detail</button>
</div>
</div>

</section>
    <section className="mt-5 ml-8 job bg-white-500 w-96 h-80 ">
<div className="flex mb-5">
<img src="https://media.glassdoor.com/sqll/425440/e-solutions-squarelogo-1537548633301.png"  className="h-14 border-4 border-white-500  mr-6"alt="" srcset="" />
<div>
 <span className="font-semibold">React Enginner</span>
 <span className="ml-3 text-gray-500">AMS Extra</span><br/><span>Posted:1 day ago</span>
</div>
</div>
<div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo debitis eius reiciendis nostrum iusto repellat libero facere esse, doloremque ...</p>
</div>
<div className="skills mt-5">
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">React</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Next</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Node</span>
more..
</div>
<div className="flex justify-between mt-3 items-center">
<span className="border-white m-3  bg-slate-100 rounded-xl  text-xs">Full time</span>
<span className="border-white m-3  bg-slate-100 rounded-xl text-xs">18 hours</span>
<div className="flex">
<button className="m-4 rounded-xl bg-green-500 text-white p-2 w-40">View Detail</button>
</div>
</div>

</section>
    <section className="mt-5 ml-8 job bg-white-500 w-96 h-80 ">
<div className="flex mb-5">
<img src="https://media.glassdoor.com/sqll/425440/e-solutions-squarelogo-1537548633301.png"  className="h-14 border-4 border-white-500  mr-6"alt="" srcset="" />
<div>
 <span className="font-semibold">React Enginner</span>
 <span className="ml-3 text-gray-500">AMS Extra</span><br/><span>Posted:1 day ago</span>
</div>
</div>
<div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo debitis eius reiciendis nostrum iusto repellat libero facere esse, doloremque ...</p>
</div>
<div className="skills mt-5">
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">React</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Next</span>
<span className="border-white p-3 m-3  bg-slate-100 rounded-xl text-xs">Node</span>
more..
</div>
<div className="flex justify-between mt-3 items-center">
<span className="border-white m-3  bg-slate-100 rounded-xl  text-xs">Full time</span>
<span className="border-white m-3  bg-slate-100 rounded-xl text-xs">18 hours</span>
<div className="flex">
<button className="m-4 rounded-xl bg-green-500 text-white p-2 w-40">View Detail</button>
</div>
</div>

</section>

</section>
  )
}

export default LatestJobPost