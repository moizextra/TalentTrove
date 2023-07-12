export const fetchrecentjobs= async()=>{
    const url = 'https://jsearch.p.rapidapi.com/search?query=Frontend%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1&date_posted=week';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
       return [];
    }
}