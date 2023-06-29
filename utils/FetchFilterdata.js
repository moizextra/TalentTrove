export const fetchfilterData = async(isremote,type,query) => {
    const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1&remote_jobs_only=${isremote}&employment_types=${type}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7fdb904416msh4dc4281a8455929p1e4d1ejsnea807bb4d77c',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    try {
        const response =  await fetch(url, options);
        const data =   await response.json();
        return data;
    } catch (err) {
        console.log(data)
        return [];
    }

}
