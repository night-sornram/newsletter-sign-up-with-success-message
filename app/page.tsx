"use client"
import Image from 'next/image'
import { useState } from 'react'
const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Home() {
  const [value,setValue ] = useState("")
  const [show,setShow] = useState(false)
  const [complete,setComplete ] = useState(false)
  return (
    
    <div className=' w-screen h-screen flex justify-start items-start md:justify-center md:items-center'>
      {!complete && (
        <div className='h-full md:h-auto md:w-fit w-full rounded-none md:rounded-3xl bg-white flex flex-col md:flex-row-reverse '>
          <div className=' p-5 md:flex hidden w-1/2'>
            <Image
            src={"/assets/images/illustration-sign-up-desktop.svg"}
            width={10000}
            height={10000}
            className=' object-cover h-full w-full'
            alt='image'/>
          </div>
          <div className=' w-2/2 flex md:hidden'>
            <Image
            src={"/assets/images/illustration-sign-up-mobile.svg"}
            width={10000}
            height={10000}
            className=' object-contain h-full w-full'
            alt='image'/>
          </div>
          <div className=' md:bg-transparent bg-white  p-10 md:py-20 md:px-14 md:pr-0 md:pl-14 w-full md:w-1/2 flex flex-col'>
            <div className=' text-5xl font-bold'>
              Stay updated!
            </div>
            <div className=' mt-5 font-normal'>
              Join 60,000+ product managers receiving monthly updates on:
            </div>
            <div className=' flex flex-col mt-5 space-y-3'>
              <div className=' flex flex-row'>
                <Image
                width={21}
                height={21}
                alt='check'
                src={"/assets/images/icon-list.svg"}/>
                <div className=' ml-3'>
                  Product discovery and building what matters
                </div>
              </div>
              <div className=' flex flex-row'>
                <Image
                width={21}
                height={21}
                alt='check'
                src={"/assets/images/icon-list.svg"}/>
                <div className=' ml-3'>
                  Measuring to ensure updates are a success
                </div>
              </div>
              <div className=' flex flex-row'>
                <Image
                width={21}
                height={21}
                alt='check'
                src={"/assets/images/icon-list.svg"}/>
                <div className=' ml-3'>
                  And much more!
                </div>
              </div>
              
            </div>

            <div className=' flex flex-col mt-10'>
              <div className=' flex flex-row justify-between'>
                <div className=' text-xs font-bold'>
                  Email address
                </div>
                <div className={show ? "s" : "u"}>
                  Valid email required
                </div>
              </div>
              <input type="email" value={value} onChange={(e)=>{setValue(e.currentTarget.value)}} placeholder='email@company.com'  className={ show ? "e" : "n"}/>
            </div>

            <button onClick={()=>{
              !value.match(valid) ? setShow(true) : setShow(false)
              value.match(valid) ? setComplete(true) : setComplete(false)
            }} className=' bg-custom-200 text-white p-3 mt-5 rounded-lg  hover:shadow-lg hover:shadow-rose-500/50  hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-500'>
              Subscribe to monthly newsletter
            </button>

          </div>
          
      </div>

      )}
      {complete && (
        <div className=' py-40 md:py-10 px-7 md:px-14 w-full md:h-auto h-full  md:w-min flex flex-col bg-white rounded-none relative md:rounded-3xl'>
          <div className=' '>
            <Image
            width={64}
            height={64}
            alt='success'
            src={"/assets/images/icon-success.svg"}/>
          </div>
          <div className=' mt-7  text-custom-200 text-5xl font-bold'>
            Thanks for subscribing!
          </div>
          <div className=' mt-7  text-sm text-custom-200'>
            A confirmation email has been sent to <span className='font-bold'>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription
          </div>
          <div className=' absolute md:static flex justify-center items-center w-full mt-5 bottom-5 right-0'>
            <button onClick={()=>{
              setValue("")
              setComplete(false)}} className=' bg-custom-200  p-3 w-10/12 md:w-full text-white  rounded-lg  hover:shadow-lg hover:shadow-rose-500/50  hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-500'>
              Dismiss message
            </button>
          </div>
          
        </div>

      )}
      
    </div>
  )}