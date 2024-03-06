import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'

const Writers = () => {
  
  return (
    <div className='bg-white rounded-md'>

      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Writers</h2>
        <Link
          to='add'
          className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
        >Add Writer</Link>
      </div>

      <div className='relative overflow-x-auto p-4'>
        <table className='w-full text-sm text-left text-slate-600'>

          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>#</th>
              <th className='px-7 py-3'>Name</th>
              <th className='px-7 py-3'>Category</th>
              <th className='px-7 py-3'>Role</th>
              <th className='px-7 py-3'>Image</th>
              <th className='px-7 py-3'>Email</th>
              <th className='px-7 py-3'>Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5].map(i =>
              <tr key={i} className='bg-white border-b'>
                <td className='px-6 py-4'>{i}</td>
                <td className='px-6 py-4'>Pera Peric</td>
                <td className='px-6 py-4'>Sports</td>
                <td className='px-6 py-4'>Writer</td>
                <td className='px-6 py-4'>
                  <img className='w-[40px] h-[40px]' alt='profile-img'
                    src='https://res.cloudinary.com/dpv5tcps3/image/upload/v1704186581/happyfruits/avatars/ntmjeoxprhkddiwcbzal.jpg'
                  />
                </td>
                <td className='px-6 py-4'>pera@yahoo.com</td>
                <td className='px-6 py-4'>
                  <div className='flex justify-start items-center'>
                    <Link className='ps-5 text-green-500 rounded hover:shadow-lg hover:shadow-green-500/50' title='View'><FaEye /></Link>
                  </div>
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default Writers
