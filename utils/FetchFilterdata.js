export const fetchfilterData = async(isremote,type,query) => {
    const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1&remote_jobs_only=${isremote}&employment_types=${type}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
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
