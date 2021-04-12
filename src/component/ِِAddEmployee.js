import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import EmployeeService from "./services/EmployeeService";

const AddEmployee = () => {

    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [emailId , setEmailID] = useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveEmployee = (e)=>{
        e.preventDefault();
        const employee = {firstName,lastName,emailId,id}
        EmployeeService.AddEmployee(employee)
            .then(response =>{
                console.log("Employee Add Successfull", response.data);
                history.push("/")
            })
            .catch(error =>{
                console.log("something went wrong" ,error);
            })
    }

    const homePage = ()=>{
        history.push("/")
    }

    useEffect(()=>{
        if(id){
            EmployeeService.getEmployeeById(id)
                .then(employee=>{
                    setFirstName(employee.data.firstName);
                    setLastName(employee.data.lastName);
                    setEmailID(employee.data.emailId);
                })
                .catch(error=>{
                    console.log("Something went wrong" + error);
                })
        }
    },[])

    return ( 
        <div>
            <div className="container">
                <div className="row mt-2">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-3">
                        <h3 className="text-center mt-2">{id ? "تعديل بيانات موظف" : "أضافة موظف"}</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group text-center">
                                    <label className="col-3"> الأسم الأول</label>
                                    <input type="text" className="form-group text-center" 
                                     id="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                                </div>

                                <div className="form-group text-center">
                                    <label className="col-3">الأسم الثاني</label>
                                    <input type="text" className="form-group text-center" 
                                    id="lastName" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                                </div>

                                <div className="form-group text-center">
                                    <label className="col-3">الأيميل</label>
                                    <input type="text" className="form-group text-center" 
                                    id="emailId" value={emailId} onChange={(e)=> setEmailID(e.target.value)} />
                                </div>

                                <div>
                                    <button onClick={(e)=> saveEmployee(e)} className="btn btn-success">{id ? "تعديل" : "أضافة"}</button>
                                    <button onClick={homePage} className="btn btn-secondary ml-2">ألغاء</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AddEmployee;