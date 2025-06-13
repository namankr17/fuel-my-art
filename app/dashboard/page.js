"use client"
import React, {useEffect, useState} from 'react'
import { createContext, useContext } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { updateUserDetails } from '@/actions/useractions';
import { ReloadContext } from '@/context/ReloadContext';
import { set } from 'mongoose';
import Loader from '@/components/Loader';


const page = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const value = useContext(ReloadContext)
    const [EditTab, setEditTab] = useState(false)
    const [EditField, setEditField] = useState('')
    const [old, setold] = useState('')
    const [details, setDetails] = useState({
        email: session ? session.user.email : '',
        name: session ? session.user.name : '',
        username: session ? session.user.username : '',
        paymentCredentials: session? session.user.paymentCredentials : '',
        profilePicUrl: session ? session.user.profilePicUrl : '',
        coverPicUrl: session ? session.user.coverPicUrl : ''
      })
    const [loading1, setLoading1] = useState(false)
    
    useEffect(() => {
      document.title = 'Dashboard - Fuel My Art'
    }, [])

    useEffect(() => {
        if (!session) {
      router.push('/login')
    }
  }, [session, router])
  
  const handleEdit = (e) => {
    let temp = details[e.target.name]
    setold(temp)
    setEditField(e.target.name)
    setEditTab(true)
  }
  
  const handleChange = (e) => {
    if(EditField == 'username' && e.target.value.includes(' ')) return;
    setDetails({ ...details, [EditField]: e.target.value })
  }
  
  const handleSave = async () => {
    if(!details[EditField] && EditField !== 'paymentCredentials' && EditField !== 'profilePicUrl' && EditField !== 'coverPicUrl') {
      alert(`Please enter a valid ${EditField}`);
      return;
    }
    if(EditField === 'username'){
      let c = confirm('Are you sure you want to change your username? This will change your profile URL and may affect your followers.');
      if(!c) return;
    }
    setEditTab(false);
    setLoading1(true)
    let res = await updateUserDetails(session.user.email, EditField, old , details[EditField])
    if(res.success) {
      toast.success(`${EditField} updated successfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      session.user[EditField] = details[EditField]
      setDetails({ ...details, [EditField]: details[EditField] })
      
      value.setReload(!value.reload) // Trigger reload in context
    } else {
      toast.error(res.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setDetails({ ...details, [EditField]: old }) // Revert to old value if update fails
    }
    setLoading1(false)
  }
  
  if (!session) return null
  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    {loading1 && <Loader/>}
    {(!EditTab && !loading1) && <div className='text-white px-5'>
      <div className='my-20 flex flex-col items-center gap-4'>
        <h2 className='font-medium text-2xl'>Welcome, {details.name}</h2>
        <p className='text-center'>{details.paymentCredentials?'You can now receive payments from your fans!':'Enter Payment Credentials to receive payments from your fans.'}</p>
        <p className='text-gray-400'>Email: {details.email}</p>
        <p className='text-gray-400 flex items-center gap-2'>Name: {details.name} 
          <img src="/edit.gif" width={24} alt="" name='name' className='cursor-pointer' onClick={(e)=>{handleEdit(e)}}/>
          </p>
        <p className='text-gray-400 flex items-center gap-2'>Username: {details.username} 
          <img src="/edit.gif" width={24} alt="" name='username' className='cursor-pointer' onClick={(e)=>{handleEdit(e)}}/>
         </p>
        <p className='text-gray-400 flex items-center gap-2'>Payment Credentials: {details.paymentCredentials?details.paymentCredentials:'‼️Not Set‼️'} 
          <img src="/edit.gif" width={24} alt="" name='paymentCredentials' className='cursor-pointer' onClick={(e)=>{handleEdit(e)}}/>
          </p>
        <p className='text-gray-400 flex items-center gap-2 justify-center'><span className='max-w-[60vw] text-nowrap overflow-hidden text-ellipsis'>Profile pic URL: {details.profilePicUrl? details.profilePicUrl:'‼️Not Set‼️'} </span>
          <img src="/edit.gif" width={24} alt="" name='profilePicUrl' className='cursor-pointer' onClick={(e)=>{handleEdit(e)}}/>
         </p>
        <p className='text-gray-400 flex items-center gap-2 justify-center'><span className='max-w-[60vw] text-nowrap overflow-hidden text-ellipsis'>Cover pic URL: {details.coverPicUrl?details.coverPicUrl:'‼️Not Set‼️'}</span> 
          <img src="/edit.gif" width={24} alt="" name='coverPicUrl' className='cursor-pointer' onClick={(e)=>{handleEdit(e)}}/>
          </p>
        <button onClick={() => signOut()} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Sign Out
          </span>
        </button>
      </div>
    </div>}
    {EditTab && <div className='text-white'>
      <div className='my-20 flex flex-col items-center gap-4'>
        <h2 className='font-medium text-2xl'>Edit {EditField}</h2>
        <input type="text" placeholder={`Enter new ${EditField}`} className='p-2 rounded-md bg-gray-800 text-white' value={details[EditField]? details[EditField] : ''} onChange={(e) => {handleChange(e)}} />
        <button onClick={() => {handleSave()}} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Save
          </span>
        </button>
      </div>
      </div>}
    </>
  )
}

export default page
