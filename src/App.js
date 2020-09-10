import React,{useState} from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';


function App() {

  const usersData = [
    {id: uuidv4(), name: 'Joel', userName:'elCuchanclas'},
    {id: uuidv4(), name: 'Maria', userName:'Lola Meraz'},
    {id: uuidv4(), name: 'Fernan', userName:'kmacula'},
  ]
  
  //state
   const [users, setUsers] = useState(usersData)


   //Add usuarios
  const addUser =(user)=>{
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //delete user 
  const deleteUser =(id) =>{
   
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setUsers(users.filter(user => user.id !== id))
        swal("Poof! Your file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }

    });

  }

  //Edit user
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name:'', userName: ''
  });

  const editRow = (user) =>{
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, userName: user.userName
    })
  }

//update user

const updateUser=(id, updateUser) =>{
  setEditing(false);

  setUsers(users.map(user => (user.id === id? updateUser:user)))
}

  return (
     <div className="container">
        <h1>Lista</h1>
        <div className="row">
          <div className="col-6 col-md-4">
            {
              editing ?(
                <div>
                    
                    <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
                </div>
              ) : (
                  <div>
                    
                    <AddUserForm addUser={addUser}/>  
                  </div>
              )
            }         
         
          </div>
          <div className="col-1 col-md-1">
          </div>
          <div className="col-12 col-md-6">
            
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
          </div>
        </div>
     </div> 
  );
}

export default App;
