import React from 'react';
import {useForm} from 'react-hook-form';
import swal from 'sweetalert';

const EditUserForm = (props) =>{

    console.log(props.currentUser)

    const {register, errors, handleSubmit, setValue} = useForm({
        
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('userName', props.currentUser.userName);

    const onSubmit=(data, e) => {
        console.log(data)
        data.id = props.currentUser.id;

        props.updateUser(props.currentUser.id, data)
       
        swal("User edited!", "You clicked the button!", "success");
        e.target.reset();
    }

    return(
        <div className="card-body">
            <h2 id="addTitle">Edit user</h2>
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
                <button  className="btn btn-primary">Edit user</button>
            </form>
        </div>
        
    )
}

export default EditUserForm;