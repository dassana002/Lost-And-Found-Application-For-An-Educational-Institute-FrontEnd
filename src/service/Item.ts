import axios from "axios";

const getBooksURL = "http://localhost:8081/LostAndFoundApplication/api/v1/Items/getAll";

// 02.02 Data Loaded from the backend
export const GetAllBooks = async() => {
    try {
        // Install axios and Call to Backend
        const getAllBooks = await axios.get(getBooksURL);
        return getAllBooks.data;
    } catch (error) {
        console.error(error);
    }
}