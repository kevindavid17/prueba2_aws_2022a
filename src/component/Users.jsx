import React from "react";

const Users = ({githubUsers}) => 
    githubUsers.map((usuario,index) =>{
 
        console.log(usuario, index);
    return (
        <p key={index}>
            {usuario}
        </p>   

    ); 
    }
)
export default Users;
