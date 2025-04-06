export type Breed = {
    id: string;
    name: string;
    temperament: string;
    origin?: string; // Made optional since it's not in the sample data
    life_span: string;
    image?: { // Made optional since URL is at root level in sample
        url: string;
    };
    height: {
        metric: string;
    };
    weight: {
        metric: string;
    };
    bred_for: string;
    breed_group: string;
    url?: string; // Added since URL is at root level in sample
};