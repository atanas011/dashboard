import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

import baseUrl from '../../config'
import storeContext from '../../context/storeContext'

const AddWriter = () => {

  const navigate = useNavigate()
  const { store } = useContext(storeContext)

  const [loader, setLoader] = useState(false)
  const [state, setState] = useState({
    name: '',
    category: '',
    email: '',
    password: ''
  })

  const inputHandler = e => {
    setState({ ...state, [e.target.id]: e.target.value })
  }

  const submitHandler = async e => {
    e.preventDefault()

    try {
      setLoader(true)
      const { data } = await axios.post(`${baseUrl}/api/writers/add`, state, {
        headers: {
          'Authorization': `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/writers')

    } catch (err) {
      setLoader(false)
      toast.error(err.response.data.message)
    }
  }

  return (
    <div className='bg-white rounded-md'>

      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Add Writer</h2>
        <Link
          to='/writers'
          className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
        >Writers</Link>
      </div>

      <form className='p-4' onSubmit={submitHandler}>

        <div className='grid grid-cols-2 gap-x-8 mb-6'>
          <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='name'>Name</label>
            <input
              id='name'
              name='name'
              type='text'
              autoFocus
              value={state.name}
              onChange={inputHandler}
              className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
            />
          </div>

          <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='category'>Category</label>
            <select
              id='category'
              name='category'
              value={state.category}
              onChange={inputHandler}
              className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
            >
              <option value=''>Select</option>
              <option value='Education'>Education</option>
              <option value='Health'>Health</option>
              <option value='International'>International</option>
              <option value='Sports'>Sports</option>
              <option value='Technology'>Technology</option>
              <option value='Travel'>Travel</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              type='email'
              value={state.email}
              onChange={inputHandler}
              className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
            />
          </div>

          <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='password'>Password</label>
            <input
              id='password'
              name='password'
              type='password'
              value={state.password}
              onChange={inputHandler}
              className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
            />
          </div>
        </div>

        <div className='mt-6'>
          <button
            type='submit'
            disabled={loader}
            className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
          >{loader ? 'Loading...' : 'Add Writer'}</button>
        </div>

      </form>

    </div>
  )
}

export default AddWriter
