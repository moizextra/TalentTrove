"use client"
import { useEffect,useState } from "react";
import { Searchbar } from '@components/Searchbar';
import Jobs from '@components/Jobs';
import Sidebar from '@components/Sidebar';
const page = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2); // The month index starts from 0, so add 1 and then pad with a leading zero if necessary
  const day = ('0' + now.getDate()).slice(-2); // Pad the day with a leading zero if necessary
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const currentDate = ` ${dayOfWeek},${day} ${month} ${year}`;
  const [jobpost, setjobpost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://jsearch.p.rapidapi.com/search?query=react%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0fe38d29a1msh841422709f6802bp1eea70jsne1d2fcdf2cc2',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      const res = await fetch(url, options);
      const data = await res.json();
      setjobpost(data.data);
      console.log(jobpost);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="">
        <h1 className="font-bold text-2xl mt-10">Let's go !Now Start Navigating your Career</h1>
        <span>{currentDate}</span>
      </div>
      <section className="mt-10">
        <div>
          <Searchbar  />
        </div>
        <div className="flex justify-between mt-12">
          <Sidebar />
          <Jobs jobpost={jobpost} />
        </div>
      </section>
    </>
  );
};

export default page;
