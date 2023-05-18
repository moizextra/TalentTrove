import { Searchbar } from "@components/Searchbar";
import Sidebar from "@components/Sidebar";
import Jobs from "@components/Jobs";

const now = new Date();
const year = now.getFullYear();
const month = ('0' + (now.getMonth() + 1)).slice(-2); // The month index starts from 0, so add 1 and then pad with a leading zero if necessary
const day = ('0' + now.getDate()).slice(-2); // Pad the day with a leading zero if necessary
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const dayOfWeek = daysOfWeek[today.getDay()];
const currentDate = ` ${dayOfWeek},${day} ${month} ${year}`;
const page = () => {
  return (<>
<div className="">
        <h1 className="font-bold text-2xl mt-10">Let's go !Now Start Navigating your Career</h1>
        <span>{currentDate}</span>
      </div>
<section className="mt-10">
  <div>
  <Searchbar/>
  </div>
  <div className="flex justify-between mt-12">
    <Sidebar/>
    <Jobs/>
  </div>

</section>  
  </>
)
}

export default page