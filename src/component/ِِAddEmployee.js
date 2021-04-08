import { useState } from "react";
import EmployeeService from "./services/EmployeeService";

const AddEmployee = () => {

    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [emailId , setEmailID] = useState('');

    const saveEmployee = (e)=>{
        e.preventDefault();
        
        EmployeeService.AddEmployee()
            .then(response =>{
                console.log("Employee Add Successfull", response.data);
            })
            .catch(error =>{
                console.log("something went wrong" ,error);
            })
    }

    return ( 
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">أضافة موظف</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group text-center">
                                    <label className="col-3"> الأسم الأول</label>
                                    <input type="text" className="form-group text-center" 
                                    value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                                </div>

                                <div className="form-group text-center">
                                    <label className="col-3">الأسم الثاني</label>
                                    <input type="text" className="form-group text-center" 
                                    value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                                </div>

                                <div className="form-group text-center">
                                    <label className="col-3">الأيميل</label>
                                    <input type="text" className="form-group text-center" 
                                    value={emailId} onChange={(e)=> setEmailID(e.target.value)} />
                                </div>

                                <div>
                                    <button onClick={(e)=> saveEmployee(e)} className="btn btn-success">أضافة</button>
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