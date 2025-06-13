"use client"
import React, {useEffect, useState} from 'react'
import { pay, getPaymentHistory, getUserDetails } from '@/actions/useractions.js'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '@/components/Loader';

const Username = ({params}) => {
  const { username } = React.use(params);
  const [paymentForm, setPaymentForm] = useState({name: '', amount: '', message: ''});
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [TotalAmount, setTotalAmount] = useState(0)
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: '',
    username: '',
    paymentCredentials: '',
    profilePicUrl: '',
    coverPicUrl: ''
  });
  const [notFound, setNotFound] = useState(false);

  // Use Effect to update Total Amount whenever paymentHistory changes
  useEffect(() => {
    document.title = `@${username} - Fuel My Art`;
  },[]);
  useEffect(() => {
    const total = paymentHistory.reduce((acc, payment) => acc + parseFloat(payment.amount || 0), 0);
    setTotalAmount(total);
  }, [paymentHistory]);

  const getPayments = async () => {
    let res = await getPaymentHistory(username);
    if(res.success) {
      setPaymentHistory(res.payments);
    }
  }

  const getUser = async () => {
    let res = await getUserDetails(username);
    if(res.success) {
      setUserDetails(res.user);
      getPayments(); // Fetch payment history after getting user details
      setLoading(false);
    }
    else{
      //show 404 page
      setLoading(false);
      setNotFound(true);
      toast.error('User not found(Redirecting in 5 seconds)', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        window.location.href = '/'; // Redirect to home page after 5 seconds
      }, 5000);
    }
  }

  useEffect(() => {
    getUser();
  }, [])
  
  const say = (m)=>{
    toast(m, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'message' && value.length > 50) return; // Limit message to 50 characters
    if(name === 'amount' && isNaN(value)) return; // Ensure amount is a number
    setPaymentForm(prev => ({ ...prev, [name]: value }));
  };
  const handlePayment = async () => {
    if(!paymentForm.name || !paymentForm.amount || !paymentForm.message) {
      alert('Please fill all fields');
      return;
    }
    if(paymentForm.amount < 10) {
      alert('Amount should be atleast ₹10');
      return;
    }
    // Call the pay function from actions/useractions.js
    let res = await pay(paymentForm, username)
    if(res.success) {
      say('Payment successful! Thank you for your support.');
      setPaymentForm({name: '', amount: '', message: ''}); // Reset form
      getPayments(); // Refresh payment history
    } else {
      alert('Payment failed. Please try again later.');
    }
  }
  if(notFound) {
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
      <div className='flex flex-col items-center justify-center py-28 text-white px-5'>
        <h1 className='text-3xl max-[480px]:text-2xl font-bold'>User Not Found</h1>
        <p className='text-lg text-center'>The user you are looking for does not exist.</p>
        <p className='text-lg text-center'>Redirecting to home page...</p>
      </div>
      </>
    );
  }
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
    {loading && <Loader/>}
    {!loading && <div className='text-white'>
      <div className='relative w-full aspect-[4]'>
        <img className='h-full w-full object-cover' src={userDetails.coverPicUrl ? userDetails.coverPicUrl : `https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg`} alt="" />
        <img className='absolute w-28 aspect-[1] object-cover rounded-full -bottom-14 left-[calc(50%-56px)] border max-[720px]:w-20 max-[720px]:-bottom-10 max-[720px]:left-[calc(50%-40px)]' src={userDetails.profilePicUrl ? userDetails.profilePicUrl : '/avatar.gif'} alt="" />
      </div>
      <div className='my-20 max-[720px]:my-12 flex flex-col items-center gap-2 mx-5'>
        <h2 className='font-medium text-xl'>@{username}</h2>
        <p className='text-sm text-center'>Support <span className='font-medium'>{userDetails.name}</span> by buying them some Fuel</p>
        <p className='text-sm opacity-60'>{paymentHistory.length} Supporters ~ ₹{TotalAmount} Raised</p>
      </div>
      <div className='flex justify-center items-center gap-4 my-16 px-5 max-[720px]:flex-col-reverse max-[720px]:gap-16'>
        <div className='bg-slate-800 max-[900px]:w-80 max-[400px]:w-70 w-100 aspect-[0.8] text-white rounded-xl p-4 py-6 flex flex-col justify-around'>
            <h3 className='text-xl font-bold text-center'>Recent Supporters</h3>
            <ul className='mt-4 space-y-2 flex flex-col overflow-auto h-4/5'>
              {paymentHistory.length === 0 && <li className='text-center text-gray-400'>No supporters yet</li>}
              {paymentHistory.map((payment, index) => (
                <li key={index} className='flex items-center gap-2 bg-violet-950 p-2 rounded-lg'>
                  <img src="/avatar.gif" width={40} alt="" />
                  <div className='text-sm flex flex-col gap-[1px] w-4/5'>
                    <span className='font-medium'>{payment.name} bought fuel worth <span className='text-green-400'>₹{payment.amount}</span> and said :</span>
                    <span className='bg-blue-700 w-full p-1 rounded-2xl px-3'>{payment.message}</span>
                  </div>
                </li>
              ))}
            </ul>
        </div>
        <div className='bg-slate-800 w-100 max-[900px]:w-80 max-[400px]:w-70 aspect-[0.8] text-white rounded-xl p-4 py-6 flex flex-col gap-4'>
          {/* Payment form */}
          <h3 className='text-xl font-bold text-center'>Support</h3>
          <div className='mt-4 flex flex-col gap-4'>
            <input onChange={handleChange} type="text" name='name' value={paymentForm.name} placeholder='Enter your name' className='bg-slate-700 p-2 rounded-lg text-white' />
            <input onChange={handleChange} type="text" name='amount' value={paymentForm.amount} placeholder='Enter amount (in ₹)' className='bg-slate-700 p-2 rounded-lg text-white' />
            <textarea onChange={handleChange} placeholder='Leave a message (Max 50 characters)' name='message' value={paymentForm.message} className='bg-slate-700 p-2 rounded-lg text-white' rows={3}></textarea>
            <button onClick={()=>{handlePayment()}} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer">
            <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Buy Fuel
            </span>
          </button>
          </div>
        </div>
      </div>
    </div>}
    </>
  )
}

export default Username
