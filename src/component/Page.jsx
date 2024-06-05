import axios from 'axios'
import React, { useEffect, useState } from 'react'
import imageUsed from '../assest/image-patrick.jpg'
import {ImLocation2} from 'react-icons/im'
import {SlCalender} from 'react-icons/sl'
import {MdMarkEmailUnread} from 'react-icons/md'
import {FaPhoneVolume, FaRegCircleUser} from 'react-icons/fa6'
import {RiLockPasswordLine } from 'react-icons/ri'



const Page = () => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getUser = async () =>{
          const response = await axios.get('https://randomuser.me/api/')
            try {
              if(response.data){
                await setLoading(false)
                await setUser(response.data.results)
              }
            } catch (error) {
              console.log(error)
              await setLoading(true)
              await setUser(null)
            }
        }

        getUser()
    }, [])

    console.log(user)
    
  return (
    <div>
      {loading ? 
        <h1 className="text-5xl text-center py-20">Loading.....</h1>
        :
      <div className='py-15 px-20 flex flex-col justify-center items-center w-full my-20'>
        <div className="bg-amber-400 rounded flex flex-col justify-center items-center pt-10 text-white w-1/2">
        <div className="w-1/4 h-1/4 rounded-full">
            <img src={user[0].picture.thumbnail } alt="user image" className='w-full h-full rounded-full' title='image of the user'/>
        </div>
        <div className="py-10">
            <h1 className="text-2xl text-white text-center">My name is</h1>
            <h1 className="text-3xl text-white text-center">{`${ user[0].name.title}  ${user[0].name.last}   ${user[0].name.first}` }</h1>
          </div>
          </div>
          <div className="flex w-1/2">
          <div className="w-1/4 bg-gray-100 py-20 flex flex-col gap-16 items-center">
              <SlCalender  className='text-3xl'/>
              <ImLocation2 className='text-3xl' />
              <MdMarkEmailUnread className='text-3xl' />
              <FaPhoneVolume className='text-3xl' />
              <FaRegCircleUser className='text-3xl' />
              <RiLockPasswordLine className='text-3xl' />

          </div>
          <div className="py-20 flex flex-col gap-16 items-center w-full">
              <h1 className="text-1xl">{new Date(user[0].dob.date).toLocaleDateString()}</h1>
              <h1 className="text-1xl">{`${user[0].location.street.number}, ${user[0].location.street.name} ${user[0].location.city}`}</h1>
              <h1 className="text-1xl">{user[0].email }</h1>
              <h1 className="text-1xl">{user[0].phone }</h1>
              <h1 className="text-1xl">{user[0].login.username}</h1>
              <h1 className="text-1xl">{user[0].login.password}</h1>
          </div>
        </div>
      </div>}
      
    </div>
  )
}

export default Page
