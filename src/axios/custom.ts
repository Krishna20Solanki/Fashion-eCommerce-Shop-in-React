import axios from "axios";

const customFetch = axios.create({
    baseURL: "https://fashion-ecommerce-shop-in-react.onrender.com",
    headers: {
        Accept: "application/json"
    }
})

export default customFetch;
