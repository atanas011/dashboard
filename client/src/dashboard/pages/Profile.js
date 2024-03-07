import { FaImage } from 'react-icons/fa6'
import { useContext } from 'react'

import storeContext from '../../context/storeContext'

const Profile = () => {

  const { store } = useContext(storeContext)

  return (
    <div className='w-full grid grid-cols-2 gap-x-6 mt-5'>

      <div className='bg-white gap-x-6 p-6 rounded flex justify-center items-center'>

        <label htmlFor='img' className='w-[150px] h-[150px] flex rounded justify-center
          gap-2 items-center cursor-pointer border-2 border-dashed text-[#404040]'>
          <div className='flex justify-center items-center flex-col gap-y-2'>
            <span><FaImage /></span>
            <span>Select Image</span>
          </div>
        </label>
        <input className='hidden' type='file' id='img' />

        <div className='flex flex-col gap-y-1 justify-center items-start text-[#404040]'>
          <span>Name: {store.user.name}</span>
          <span>Email: {store.user.email}</span>
          <span>Category: {store.user.category}</span>
        </div>

      </div>

      <div className='bg-white px-6 py-4 rounded text-[#404040]'>
        <h2 className='pb-3 text-center'>Change Password</h2>
        <form>

          <div className='grid grid-cols-1 gap-y-5 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='old'>Old Password</label>
              <input
                id='old'
                type='password'
                className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
              />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='new'>New Password</label>
              <input
                id='new'
                type='password'
                className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
              />
            </div>
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
            >Change Password</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Profile
