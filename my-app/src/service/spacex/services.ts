export const getDragonByID = async (id: string) => {
    try {
        const response = await fetch(`https://api.spacexdata.com/v3/dragons/${id}`);
  
        if (response.status !== 200) return;
        
        const dragon = await response.json();
        console.log(response);
        return dragon;
        } catch (e) {
            console.error(e);
        }
    };
