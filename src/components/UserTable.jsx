import React from 'react'
import '../assets/UserTable.css'


const UserTable = (props) => {
    console.log(props.users)
    return (  
        <div className="userTable">
            <h2 id="title">View users</h2>
            <div className="table-responsive-xl">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col-4">Name</th>
                        <th scope="col-4">UserName</th>
                        <th scope="col-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.users.length > 0 ?
                            props.users.map(user =>(
                                <tr key={user.id}>
                                    <th scope="row">{user.name}</th>
                                    <td>{user.userName}</td>
                                    <td>
                                        <button 
                                        type="button" 
                                        className="btn btn-primary"
                                        onClick={
                                            () => {props.editRow(user)}
                                        }
                                        
                                        >edit</button>
                                        <button type="button" 
                                        className="btn btn-danger"
                                        onClick={(e) =>{ props.deleteUser(user.id)}}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )) :(
                                <tr>
                                    <td colSpan={3}>No hay usuarios registrados</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
       
        
    );
}
 
export default UserTable;