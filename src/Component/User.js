import React from 'react'
import Button  from './Button/Button'
import { useState } from 'react'
import Card from './Card/Card'

function User() {
    
    const [user, setUser] = useState({
        name:"",
        age:""
    })

    const [input,setInput]  = useState([]);


    function changeHandler(event){
        const { name, value } = event.target;
        setUser((prevValue)=>{
          return {...prevValue,[name]:value} ;
        });
    }
    function submitHandler(event){
        event.preventDefault();
        setInput((prevValue)=>{
            return [...prevValue,user];
        });
        console.log(input);
        setUser({
            name:"",
            age:""
        })
    }

    return (
        <div className='master'>
            <div className='input-fields'>
            <input type="text" name="name" value={user.name} onChange={changeHandler} placeholder=' Name'></input>
            <input type="text" name="age" value={user.age} onChange={changeHandler} placeholder=' Age'></input>
            <Button 
            onSubmit = {submitHandler}/>
            </div>
           {input.map((item)=>{
            <Card 
           name = {item.name}
           age = {item.age}/>
           })}
           
        </div>
    )
}

export default User
