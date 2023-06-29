export const fetchrecentjobs= async()=>{
    const url = 'https://jsearch.p.rapidapi.com/search?query=Frontend%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1&date_posted=week';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7fdb904416msh4dc4281a8455929p1e4d1ejsnea807bb4d77c',
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