import httpClient from "../http-common";

const getAll = () =>{
    return httpClient.get("/employee");
}

const AddEmployee = data =>{
    return httpClient.post("/employee", data);
}

const getEmployeeById = id =>{
    return httpClient.get(`/employee/${id}`)
}

const deleteEmployee = id =>{
    return httpClient.delete(`/employee/${id}`);
}

const updateEmployee = data =>{
    return httpClient.put('/employee',data)
}
export default {getAll , AddEmployee ,getEmployeeById,deleteEmployee,updateEmployee}