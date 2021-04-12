import axios from "axios";

export default axios.create({
    //baseURL: "http://localhost:8080/api/v1",
    baseURL: "https://employee-backend-bandar.herokuapp.com/api/v1",
    Headers: {"Content-type": "application/json"}
})