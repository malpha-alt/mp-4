import { Breed } from "../types";

export async function getDog(): Promise<Breed> {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": process.env.DOG_API_KEY || ""
    });
      
    const requestOptions = {
        method: 'GET',
        headers: headers
    };
      
    try {
        // Add a timestamp to prevent caching
        const timestamp = new Date().getTime(); //to get random dog bc didnt work when deployed
        const response = await fetch(
            `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=1&order=RAND&page=0&limit=1&_=${timestamp}`, 
            requestOptions
        );
        
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        
        // Get the full breed details
        const dog = await fetch(`https://api.thedogapi.com/v1/images/${data[0].id}`, requestOptions);
        const dogData = await dog.json();
        
        // Transform the API response to match our Breed type
        const breedData = dogData.breeds[0];
        return {
            id: breedData.id.toString(),
            name: breedData.name,
            temperament: breedData.temperament,
            origin: breedData.origin,
            life_span: breedData.life_span,
            image: {
                url: dogData.url
            },
            height: breedData.height,
            weight: breedData.weight,
            bred_for: breedData.bred_for,
            breed_group: breedData.breed_group,
            url: dogData.url
        } as Breed;
    } catch (error) {
        console.error('Error fetching dog:', error);
        throw error;
    }
}

