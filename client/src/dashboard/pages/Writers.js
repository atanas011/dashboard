import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import axios from 'axios'

import baseUrl from '../../config'
import storeContext from '../../context/storeContext'
import user from '../../assets/user.jpg'

const Writers = () => {

  const { store } = useContext(storeContext)

  const [writers, setWriters] = useState([])

  useEffect(() => { //this renders without any action on this page!

    (async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/api/writers`, {
          headers: {
            'Authorization': `Bearer ${store.token}`
          }
        })
        setWriters(data.writers)

      } catch (error) {
        console.log(error)
      }
    })()
    
  }, [store.token])

  return (
    <div className='bg-white rounded-md'>
      {/* {console.log(writers.length)} */}

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
            {writers.map((w, i) =>
              <tr key={i} className='bg-white border-b'>
                <td className='px-6 py-4'>{i + 1}</td>
                <td className='px-6 py-4'>{w.name}</td>
                <td className='px-6 py-4'>{w.category}</td>
                <td className='px-6 py-4'>{w.role}</td>
                <td className='px-6 py-4'>
                  <img className='w-[40px] h-[40px]'
                    src={user} alt='user'
                  />
                </td>
                <td className='px-6 py-4'>{w.email}</td>
                <td className='px-6 py-4'>
                  <div className='flex justify-start items-center'>
                    <Link
                      title='View'
                      to={`/writer/${w.name.replace(/\s/g, '')}`}
                      className='ps-5 text-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'
                    ><FaEye /></Link>
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
