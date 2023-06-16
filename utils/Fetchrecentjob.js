export const fetchrecentjobs= async()=>{
    const url = 'https://jsearch.p.rapidapi.com/search?query=Frontend%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1&date_posted=week';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0fe38d29a1msh841422709f6802bp1eea70jsne1d2fcdf2cc2',
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