import React from 'react'
import Logo from "../img/guide-logo.png"
import {MdShoppingBasket} from 'react-icons/md'
import { motion } from 'framer-motion'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import Avatar from '../img/user.png'
import { Link } from 'react-router-dom'

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider)
    console.log(response)
  }

  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      {/* desktop & tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt='logo' />
          <p className='text-headingColor text-xl font-bold'>Guide</p>
        </Link>
        <div className='flex items-center gap-8'>
        <ul className='flex items-center gap-8 '>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
        </ul>
        <div className='relative flex items-center justify-center'>
          <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
          <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>2</p>
          </div>
        </div>

        <div className='relative'>
        <motion.img whileTap={{ scale: 0.6 }}
         src={Avatar}
          className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-x1 cursor-pointer'
           alt='userprofile'
           onClick={login}
            />
        </div>

        </div>
      </div>
      {/* mobile */}
      <div className='flex md:hidden w-full h-full'>

      </div>
    </header>
  )
}

export default Header;