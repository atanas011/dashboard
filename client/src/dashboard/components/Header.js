import { useContext } from 'react'

import avatar from '../../assets/avatar.png'
import storeContext from '../../context/storeContext'

const Header = () => {

  const { store } = useContext(storeContext)

  return (
    <div className='pl-4 fixed w-[calc(100vw-250px)] z-10'>
      <header className='border-b-2 border-green-500 h-20 flex justify-between items-center p-4 bg-white dark:bg-yellow-100'>

        <input
          type='text'
          placeholder='Search'
          className='px-3 py-2 h-9 rounded outline-0 border border-gray-300 focus:border-green-500'
        />

        <div className='mr-4 flex gap-x-2'>
          <div className='flex flex-col items-end'>
            <span>{store.user.name}</span>
            <span>{store.user.role}</span>
          </div>
          <img className='w-10 h-10 rounded-full' src={avatar} alt='avatar' />
        </div>

      </header>
    </div>
  )
}

export default Header
