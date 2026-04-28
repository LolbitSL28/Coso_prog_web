import { useEffect, useState } from 'react';
import axios from "axios"
import DataTable from 'react-data-table-component';



function Table(){
const[usuarios,setUsuarios] = useState([]);
    

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        setUsuarios(response.data); 
});
    
    },[]);
/*
    const columns = [
    {
        name: 'ID',
		selector: row => row.id,
    },
    {
        name: 'Nombre',
		selector: row => row.name,
    },
    {
        name: 'Email',
		selector: row => row.email,
    },
    {
        name: 'Ciudad',
		selector: row => row.address.city,
    },

];
/*
const data = usuarios.map(usuario=>({
    id:usuario.id,
    name: usuario.name,
    email: usuario.email,
    ciudad: usuario.address.city,
}));*/
const data = [
    {
        id:1,
        name: 'Saul',
        email: 'hola@gmail.com',
        city: 'Hermosillo',
    },
    {
        id:2,
        name: 'Andres',
        email: 'hola@gmail.com',
        city: 'Hermosillo',
    },
];


/*
return(
    <DataTable
        columns = {columns}
        data={data}
        />
);*/


return (
    <table border={1}>
        <thead>
        <tr>
            <td>ID</td>
            <td>Nombre</td>
            <td>Email</td>
            <td>Ciudad</td>
        </tr>
        </thead>
        <tbody>
        {usuarios.map((user, index) => (
            <tr key={user.id || index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            </tr>
        ))}
        </tbody>
    </table>
    );

};

export default Table