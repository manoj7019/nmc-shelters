import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';


const QuerySubmit = () => {
    const [user, setUser] = useState(
        {
            FullName: '',
            Email: '',
            Phone: '',
            Message: '',
            Subscribe: ''
        }
    )
    
    let name, value;
    
        const data = (e) => {
            name = e.target.name;
            value = e.target.value;
            setUser({...user, [name]: value})
        }
        console.log(user);

        const today = `${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()}`
        console.log(today)
    
        const getData = async (e) => {
        const {FullName, Email, Phone, Message, Subscribe
            } = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                FullName, Email, Phone, Message, Subscribe
            })
        }
        const res = await fetch(
            `https://nmc-shelters-default-rtdb.firebaseio.com/${today}/GetInTouch.json`,
            options
        )
        if(res) {
            alert('Message sent!')
        } else {
            alert('Error occured')
        }
    }
    
  return (
    <>
    <div className='bg-[url("/seamless.png")] flex flex-col gap-6 justify-center items-center laptop:p-9 mobile:p-4 mobile:py-8'>
        {/* <h1 className='text-8'>Get in Touch with us.</h1> */}
        <form action="/success" onSubmit={getData}>
            <div className='flex flex-col gap-4 laptop:w-14 mobile:w-full mt-8 laptop:p-6 mobile:p-4 rounded-4 shadow-xl bg-white'>
            <h1>Get in Touch with us.</h1>
            <input required
                className='transition transform border-0.5 hover:border-orange-500 hover:scale-105 h-7 p-3 rounded-2'
                placeholder='Name'
                name='FullName' 
                value={user.FullName}
                type="text"
                autoComplete='on'
                onChange={data}
            />
            <input required
                className='transition transform border-0.5 hover:border-orange-500 hover:scale-105 h-7 p-3 rounded-2'
                placeholder='Phone Number'
                name='Phone' 
                value={user.Phone}
                type="text"
                autoComplete='on'
                onChange={data}
            />
            <input required
                className='transition transform border-0.5 hover:border-orange-500 hover:scale-105 h-7 p-3 rounded-2'
                placeholder='Email'
                name='Email' 
                value={user.Email}
                type="text"
                autoComplete='on'
                onChange={data}
            />
            <textarea
                className='transition transform border-0.5 hover:border-orange-500 hover:scale-105 h-9 p-3 rounded-2'
                placeholder='Message'
                name='Message' 
                value={user.Message}
                onChange={data}
            />
            <div className='flex items-center gap-2 accent-orange-600'>
                <input 
                    className='transition transform border-0.5 hover:border-orange-500 hover:scale-105 h-4 w-4'
                    type="checkbox" 
                    name="" 
                    id="" 
                    value={user.Subscribe}
                    onChange={data}
                />
                <p>Subscribe to the latest Real Estate updates</p>
            </div>
            <button
             className='transition transform bg-orange-500 mt-5 py-2 px-6 text-6 text-white rounded-3 hover:scale-105 shadow-lg border-0.5 border-red-300'>Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default QuerySubmit
