import axios from 'axios';

const API_URL = 'https://wger.de/api/v2/';

class ExerciseService {
    getExerciseName = async () => {
        return await axios.get(API_URL + 'exercise',
            {
                timeout: 10000
            });
    }

    getExercisePicture = async () => {
        return await axios.get(API_URL + 'exerciseimage',
            {
                timeout: 10000
            })
    }
}

export default new ExerciseService();
