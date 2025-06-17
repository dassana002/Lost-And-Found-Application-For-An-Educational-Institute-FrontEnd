import axios from "axios";

const getBooksURL = "http://localhost:8081/LostAndFoundApplication/api/v1/Items/getAll";

// 02.01 Data Loaded from the backend
export const getAllBook = async() => {
    try {
        // Install axios and Call to Backend
        const getAllBooks = await axios.get(getBooksURL);
        console.log(getAllBooks);
    } catch (error) {
        console.error(error);
    }
}