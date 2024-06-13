import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegValidation from './RegValidation';
 import axios  from 'axios';
export const Registration = () => {
    const [values, setValues]=useState({
        name:'',
        email:'',
        password:'',
        package:''
    })
    const navigate=useNavigate();
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({
            ...prev, [event.target.name]:[event.target.value]
        }))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(RegValidation(values));
        if(errors.name==="" && errors.email==="" && errors.password==="" ){
            axios.post('http://localhost:8086/register', values)
            .then(res=>{
                navigate('/ok');
            })
            .catch(err=>console.log(err));
        }
    }
  return (
    <div className='bg-blue-900 p-1 sm:p-14'>
    <div className="container mx-auto text-center pb-4 bg-blue-900">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-mono py-1 sm:py-2">
            Travelo
        </h1>
        <h2 className="text-white font-bold text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-mono">
            Travel the world with us
        </h2>
    </div>
    <div className="flex flex-col lg:flex-row justify-center mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="lg:w-1/2 m-2 flex-grow">
            <img
                src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/10/kris-plus-travel-hacks-singapore.jpg"
                alt="Travel Image"
                className="w-full h-full object-cover rounded-3xl"
            />
        </div>
        <div className="lg:w-1/2 bg-slate-50 m-2 px-4 sm:px-8 py-6 rounded-3xl flex-grow flex flex-col">
            <h2 className='text-2xl font-semibold flex justify-center my-2'>Register</h2>
            <form action='' onSubmit={handleSubmit} className='align-center flex-grow flex flex-col justify-between'>
                <div>
                    <div className='mb-1 sm:mb-8'>
                        <label htmlFor='name' className='m-1'>Name</label>
                        <input type="text" placeholder='Enter Name' name='name' onChange={handleInput} className='rounded-lg m-1 p-1 w-full'/>
                        {errors.name && <span className='text-red-800'>{errors.name}</span>}
                    </div>
                    <div className='mb-1 sm:mb-8'>
                        <label htmlFor='email' className='m-1'>Email</label>
                        <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='rounded-lg m-1 p-1 w-full'/>
                        {errors.email && <span className='text-red-800'>{errors.email}</span>}
                    </div>
                    <div className='mb-1 sm:mb-8'>
                        <label htmlFor='password' className='m-1'>Password</label>
                        <input type="password" placeholder='Enter password' name='password' onChange={handleInput} className='rounded-lg m-1 p-1 w-full'/>
                        {errors.password && <span className='text-red-800'>{errors.password}</span>}
                    </div>
                    <div className='mb-1 sm:mb-8'>
                        <label htmlFor='package' className='m-1'>Package</label>
                        <select name='package' id='package' onChange={handleInput} className='rounded-lg m-1 p-1 w-full'>
                            <option value=''>Select a package</option>
                            <option value='srinagar'>'Srinagar'</option>
                            <option value='jaipur'>'Jaipur'</option>
                            <option value='goa'>'Varanasi'</option>
                            <option value='manali'>Manali</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type='submit'className='bg-blue-400 mb-1 sm:mb-8 p-2 m-2 w-full hover:bg-blue-700'>Book</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}
