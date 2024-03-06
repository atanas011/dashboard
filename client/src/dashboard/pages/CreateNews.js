import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaImage } from "react-icons/fa6"
import JoditEditor from 'jodit-react'

import Gallery from '../components/Gallery'

const CreateNews = () => {

  const [show, setShow] = useState(false)

  return (
    <div className='bg-white rounded-md'>

      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Create News</h2>
        <Link
          to='/news'
          className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
        >News</Link>
      </div>

      <div className='p-4'>
        <form>

          <div className='flex flex-col gap-y-2 mb-6'>
            <label className='text-md font-medium text-gray-600' htmlFor='title'>Title</label>
            <input
              id='title'
              type='text'
              className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='img' className='w-full h-[180px] flex rounded justify-center
              gap-2 items-center cursor-pointer border-2 border-dashed text-[#404040]'>
              <div className='flex justify-center items-center flex-col gap-y-2'>
                <span className='text-2xl'><FaImage /></span>
                <span>Select Image</span>
              </div>
            </label>
            <input className='hidden' type='file' id='img' />
          </div>

          <div className='flex flex-col gap-y-2 mb-6'>
            <div className='flex justify-start items-center gap-x-2'>
              <h2>Description</h2>
              <span title='Select Images' className='text-2xl cursor-pointer' onClick={() => setShow(true)}><FaImage /></span>
            </div>
          </div>
          <JoditEditor />

          <div className='mt-6'>
            <button
              className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
            >Create News</button>
          </div>

        </form>
      </div>

      {show && <Gallery setShow={setShow} images={[]} />}

    </div>
  )
}

export default CreateNews
