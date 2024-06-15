import { projectFormInputType } from "@/types";
import { API_KEY } from "@/utils/constant";

export const createProject = async (formData: projectFormInputType) =>{
    const res = await fetch(`${API_KEY}/api/crew/create-project/`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json', 
        },
        body: JSON.stringify(formData),
    })

    if (!res.ok) {
        throw new Error('Failed to create project');
      }
    
      return res.json();
}




export const fetchLocation = async (search: string,
    { page }: {page:number}) => {
        const apiKey = process.env.NEXT_PUBLIC_LOCATION_API_KEY;
    const response = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${search}&page=${page}&limit=10`, // Adjust pagination parameters as required
      {
        headers: {
          'x-rapidapi-key': `${apiKey}`, // Replace with your RapidAPI key
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        },
      }
    );
  
    const data = await response.json();
  
    return {
        options: data.data.map((location: any) => ({
            value: location.name,
            label: location.name,
          })),
          hasMore: Boolean(data.links?.next),
          
    };
  };