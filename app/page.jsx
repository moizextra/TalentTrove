import LatestJobPost from '../components/LatestJobPost';
import RecommendedJobs from '../components/RecommendedJobs';
import { fetchrecentjobs } from '@utils/Fetchrecentjob';
export default  async function Home () {
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2); // The month index starts from 0, so add 1 and then pad with a leading zero if necessary
  const day = ('0' + now.getDate()).slice(-2); // Pad the day with a leading zero if necessary
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const currentDate = ` ${dayOfWeek},${day} ${month} ${year}`;
const result= await fetchrecentjobs();
const data=result.data;
  return (
  <>
      <div>
        <h1 className="font-bold text-2xl mt-10">Congragulations ! You are on the Right Career Path</h1>
        <span className='text-gray-500'>{currentDate}</span>
      </div>
    <section className="mt-10">
      <div className=' main flex justify-between'>
        <div>
      <h1 className='text-sm font-bold'>Latest Job Post</h1>
        <LatestJobPost data={data}/>
        </div>
        <div>
          <h1 className='text-sm font-bold'>Recommended Jobs</h1>
        <RecommendedJobs/>
        </div>
      </div>
    </section>
  </>
  )
}
