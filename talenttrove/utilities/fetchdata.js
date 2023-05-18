 export const options = {
    method: 'GET',
    params: {
      query: 'Python developer in Texas, USA',
      page: '1',
      num_pages: '1'
    },
    headers: {
      'X-RapidAPI-Key': '7fdb904416msh4dc4281a8455929p1e4d1ejsnea807bb4d77c',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  
 export const fetchdata = async () => {
   const res=await fetch("https://jsearch.p.rapidapi.com/search", options);
   const data= await res.json();
   const jobpost= await data.data;
   return jobpost;
}

