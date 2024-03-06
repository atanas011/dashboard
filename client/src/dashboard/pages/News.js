import { Link } from 'react-router-dom'

import NewsContent from '../components/NewsContent'
import Pagination from '../components/Pagination'

const News = () => {

  const flag = true

  return (
    <div className='bg-white rounded-md'>

      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>News</h2>
        <Link
          to='create'
          className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
        >Create News</Link>
      </div>

      <div className='px-4 py-3 flex gap-x-3'>
        <select className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'>
          <option value=''>Select Type</option>
          <option value='pending'>Pending</option>
          <option value='active'>Active</option>
          <option value='inactive'>Inactive</option>
        </select>
        <input
          type='text'
          placeholder='Search News'
          className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
        />
      </div>

      <NewsContent flag={flag} />

      <Pagination />

    </div>
  )
}

export default News
