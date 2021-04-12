import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import EmployeeService from "./services/EmployeeService";

const ListEmployeee = () => {

    const [employee, setEmployee] = useState('');
    const history = useHistory();

    useEffect(()=>{
        EmployeeService.getAll()
        .then(response =>{
            console.log('printing employee response' , response.data);
            setEmployee(response.data);
        })
        .catch(error =>{
            console.log('something went wrong');
        })
    },[])

    const getEmployeeAfterDelete =() =>{
        EmployeeService.getAll()
        .then(response =>{
            console.log('printing employee response' , response.data);
            setEmployee(response.data);
        })
        .catch(error =>{
            console.log('something went wrong');
        })
    }

    const handleUpdate = (id) =>{
        history.push('/employee/edit/'+id)
    }

    const handledelete = (id)=>{
        EmployeeService.deleteEmployee(id)
            .then(response =>{
                getEmployeeAfterDelete();
            })
            .catch(error =>{
                console.log("Some error Occured", error)
            })
    }

    return (  
        <div>
                
                <div className="row">
                <Link to="/add" className="mb-2 mt-1" >  
                    <button className="btn btn-primary">أضافة موظف</button>
                </Link>

                </div>
                { employee.length > 0 ?
                    <div className="row ">
                    <table className="  table table-striped table-bordered">
                        <thead >
                            <tr >
                                <th className="text-center">الأسم الأول</th>
                                <th className="text-center">الأسم الثاني</th>
                                <th className="text-center">الأيميل</th>
                                <th className="text-center">العمليات</th>
                            </tr>
                        </thead>

                        <tbody className="text-center">
                            {
                               employee.length > 0 ? employee.map(employee =>(
                                    <tr key = {employee.id}>
                                         <td>{employee.firstName}</td>
                                         <td>{employee.lastName}</td>
                                         <td>{employee.emailId}</td>
                                         <td>
                                             <button onClick={()=> handleUpdate(employee.id)} className="btn btn-info">تعديل</button>
                                             <button onClick={()=> handledelete(employee.id)} className="btn btn-danger ml-3">حذف</button>
                                             
                                         </td>
                                     </tr>
                                )) : employee 
                            }
                        </tbody>
                    </table>
                </div>: <div className="text-left " >جاري سحب البيانات......</div>
                }
            </div>
    );
}
 
export default ListEmployeee;