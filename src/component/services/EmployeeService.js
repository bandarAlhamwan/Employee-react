import httpClient from "../http-common";

const getAll = () =>{
    return httpClient.get("/employee");
}

const AddEmployee = ()=>{
    return httpClient.post("/employee");
}
export default {getAll,AddEmployee}