import axios from 'axios';

const API_URL = 'https://wger.de/api/v2/';

class FoodService {
    getFood= async () => {
        return await axios.get(API_URL + 'ingredientinfo',
            {
                timeout: 10000
            });
    }

    getFoofInfo = async () => {
        return await axios.get(API_URL + 'ingredientinfo',
            {
                timeout: 10000
            })
    }
}

export default new FoodService();
