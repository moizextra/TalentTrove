export const fetchRecomdata = async() => {
    const url = 'https://jsearch.p.rapidapi.com/search?query=devops&page=1&num_pages=1';
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
        return data.data;
    } catch (err) {
        console.log(data)
        return [];
    }

}
