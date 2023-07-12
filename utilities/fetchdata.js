 export const options = {
    method: 'GET',
    params: {
      query: 'Python developer in Texas, USA',
      page: '1',
      num_pages: '1'
    },
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  
 export const fetchdata = async () => {
   const res=await fetch("https://jsearch.p.rapidapi.com/search", options);
   const data= await res.json();
   const jobpost= await data.data;
   return jobpost;
}

