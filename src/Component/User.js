import React from 'react'
import Button from './Button/Button'
import { useState } from 'react'
import Card from './Card/Card'
import "./user.css";
import Modal from './Modal/Modal';

function User() {

    const [user, setUser] = useState({
        name:'',
        age:''
    })

    const [valid, setValid] = useState(false);
    const[errors,setErrors] = useState({})

    const [input, setInput] = useState([]);

    function changeHandler(event) {
        const { name, value } = event.target;
        setUser((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    }
    function submitHandler(event) {
        event.preventDefault();
        // setInput(prevValue=>{ return [...prevValue,user];
        // });
        if (validateInput(user).isValid) {
            const newUsers = { ...user };
            setInput([...input, newUsers]);
            console.log(input);
            setUser({
                name: "",
                age: ""
            })
        }
        else {
            setErrors(validateInput(user).error)
            setValid(true);
        }


    }
    function inputHandler() {
        setValid(false);
    }

    function validateInput(value) {
        let isValid = true;
       const  error = {};
        if (!value.name) {
            error.name = "Input is required!"
        }
        if(!value.age){
            error.name = "Input is required!"
        }

        if(value.age<0){
            error.age = "Invalid age input!!"
        }

        if (Object.keys(error).length !== 0) {
            isValid = false;
          }

          return {
              error,
              isValid
          }

    }


    return (
        <div className='master'>
            <div className='input-fields'>
                <input type="text" name="name" value={user.name} onChange={changeHandler} placeholder=' Name'></input>
                <input type="text" name="age" value={user.age} onChange={changeHandler} placeholder=' Age'></input>
                <Button
                    onSubmit={submitHandler} />
            </div>
            <div className='User-list'>
                {input.map((item, i) => {
                    return <Card
                        key={i}
                        name={item.name}
                        age={item.age} />
                })}
            </div>
            {valid && <Modal
                modalHandler={inputHandler} 
                inputerror = {errors.name}
                ageError = {errors.age}/>}

        </div>
    )
}

export default User
