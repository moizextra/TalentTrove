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
    <div>
   {jobpost.map((job)=>{
return <>
{/* Here we will render job card */}
<div key={job.job_id}>{job.job_id}</div>
</>
   })}
      
    </div>
  )
}

export default LatestJobPost