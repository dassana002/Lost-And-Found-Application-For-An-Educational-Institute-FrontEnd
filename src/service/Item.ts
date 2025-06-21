import axios from "axios";

const URL = "http://localhost:8081/LostAndFoundApplication/api/v1/Items";

// 02.02 Data Loaded from the backend
export const GetAllItems = async() => {
    try {
        // Install axios and Call to Backend
        const getAllBooks = await axios.get(`${URL}/getAll`);
        return getAllBooks.data;
    } catch (error) {
        console.error(error);
    }
}