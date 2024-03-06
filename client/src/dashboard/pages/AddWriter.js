import { Link } from 'react-router-dom'

const AddWriter = () => {
  
  return (
    <div className='bg-white rounded-md'>

      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Add Writer</h2>
        <Link
          to='/writers'
          className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
        >Writers</Link>
      </div>

      <form className='p-4'>

        <div className='grid grid-cols-2 gap-x-8 mb-6'>
          <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='category'>Category</label>
            <select
              id='category'
              className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
            >
              <option value=''>Select</option>
              <option value='education'>Education</option>
              <option value='health'>Health</option>
              <option value='international'>International</option>
              <option value='sports'>Sports</option>
              <option value='technology'>Technology</option>
              <option value='travel'>Travel</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
            />
          </div>
        </div>

        <div className='mt-6'>
          <button
            className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
          >Add Writer</button>
        </div>

      </form>

    </div>
  )
}

export default AddWriter
