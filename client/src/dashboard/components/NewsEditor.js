import { FaImage } from 'react-icons/fa6'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import JoditEditor from 'jodit-react'

import Gallery from '../components/Gallery'

const NewsEditor = ({ img, setImg, setImage, handler, title, setTitle, description, setDescription, loader, flag }) => {

    const editor = useRef(null)

    const [show, setShow] = useState(false)

    const imageHandler = e => {
        const { files } = e.target

        if (files.length) {
            setImg(URL.createObjectURL(files[0]))
            setImage(files[0])
        }
    }

    return (
        <div className='bg-white rounded-md'>

            <div className='flex justify-between p-4'>
                <h2 className='text-xl font-medium'>{flag ? 'Create' : 'Edit'} News</h2>
                <Link
                    to='/news'
                    className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
                >News</Link>
            </div>
            <div className='p-4'>
                <form onSubmit={handler} >

                    <div className='flex flex-col gap-y-2 mb-6'>
                        <label className='text-md font-medium text-gray-600' htmlFor='title'>Title</label>
                        <input
                            required
                            id='title'
                            type='text'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='image' className='w-full h-[240px] flex rounded justify-center
                            gap-2 items-center cursor-pointer border-2 border-dashed text-[#404040]'>
                            {img ? <img src={img} alt='img' className='w-full h-full' /> :
                                <div className='flex justify-center items-center flex-col gap-y-2'>
                                    <span className='text-2xl'><FaImage /></span>
                                    <span>Select Image</span>
                                </div>
                            }
                        </label>
                        <input type='file' onChange={imageHandler} className='hidden' id='image' />
                    </div>

                    <div className='flex flex-col gap-y-2 mb-6'>
                        <div className='flex justify-start items-center gap-x-2'>
                            <h2>Description</h2>
                            <span title='Select Images' className='text-2xl cursor-pointer' onClick={() => setShow(true)}>
                                <FaImage />
                            </span>
                            {show && <Gallery setShow={setShow} />}
                        </div>
                    </div>
                    <JoditEditor
                        ref={editor}
                        tabIndex={1}
                        value={description}
                        onChange={() => { }}
                        onBlur={value => setDescription(value)}
                    />

                    <div className='mt-6'>
                        <button
                            disabled={loader}
                            className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
                        >{loader ? 'Loading...' : flag ? 'Create News' : 'Update News'}</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default NewsEditor
