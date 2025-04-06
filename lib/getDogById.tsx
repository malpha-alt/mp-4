import { Breed } from "../types";

export async function getDogById(id: string): Promise<Breed> {
    console.log("Fetching dog with ID:", id);
    
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": process.env.DOG_API_KEY || ""
    });
      
    const requestOptions = {
        method: 'GET',
        headers: headers
    };
      
    try {
        // Try to fetch the breed directly first
        const breedResponse = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, requestOptions);
        
        if (breedResponse.ok) {
            console.log("Successfully fetched breed directly");
            const breedData = await breedResponse.json();
            
            // Get a random image for this breed
            const imageResponse = await fetch(
                `https://api.thedogapi.com/v1/images/search?breed_id=${id}&limit=1`, 
                requestOptions
            );
            
            if (!imageResponse.ok) {
                console.warn("Failed to fetch image for breed:", imageResponse.status);
            }
            
            const imageData = await imageResponse.json();
            const imageUrl = imageData.length > 0 ? imageData[0].url : null;
            
            // Transform the API response to match our Breed type
            return {
                id: breedData.id.toString(),
                name: breedData.name,
                temperament: breedData.temperament,
                origin: breedData.origin,
                life_span: breedData.life_span,
                image: {
                    url: imageUrl || ""
                },
                height: breedData.height,
                weight: breedData.weight,
                bred_for: breedData.bred_for,
                breed_group: breedData.breed_group,
                url: imageUrl || ""
            } as Breed;
        } else {
            console.warn("Failed to fetch breed:", breedResponse.status);
            throw new Error(`Failed to fetch breed: ${breedResponse.status}`);
        }
    } catch (error) {
        console.error('Error fetching dog:', error);
        throw error;
    }
} 