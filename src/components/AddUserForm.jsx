import React from 'react';
import {useForm} from 'react-hook-form';
import swal from 'sweetalert';
import '../assets/AddUsers.css';



const AddUserForm = (props) =>{

    const {register, errors, handleSubmit} = useForm();

    const onSubmit=(data, e) => {
        console.log(data)

        props.addUser(data)
        swal("New user added!", "You clicked the button!", "success");
        e.target.reset();
    }

    return(       
        <div className="card-body">
            <h2 id="addTitle">Add user</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label id="nameLabel">Name</label>
                    <input type="text" name="name" className="form-control" ref={
                            register({
                                required: {value: true, message:'This field is required'}
                            })
                    }/>
                    <div className="alert-danger" role="alert">
                    {errors?.name?.message}
                    </div>  
                </div>
                <div className="form-group">
                    <label id="userNameLabel">User Name</label>
                    <input type="text" name="userName" className="form-control" ref={
                            register({
                                required: {value: true, message:'This field is required '}
                            })
                    }/>
                    <div className="alert-danger" role="alert">
                    {errors?.userName?.message}
                    </div>  
                </div>
                <button  className="btn btn-primary">New user</button>     
            </form>
        </div>
       
    )
}

export default AddUserForm;