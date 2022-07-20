import React from "react";

const Users = ({githubUsers}) => 
    githubUsers.map((usuario,index) =>{
 
        console.log(usuario, index);
    return (
        todoLst.map((item, i) => 
        <p key={i}>
            <span className='Task'>{item.task}</span>
        </p>   
    )
        
        <p key={index}>
              {usuario}
        </p>
    ); 
    }
)
export default Users;
