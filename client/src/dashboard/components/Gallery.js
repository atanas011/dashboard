import { useState, useEffect, useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { MdCloudUpload } from 'react-icons/md'
import copy from 'copy-text-to-clipboard'
import toast from 'react-hot-toast'
import axios from 'axios'

import storeContext from '../../context/storeContext'
import baseUrl from '../../config'

const Gallery = ({ setShow }) => {

    const { store } = useContext(storeContext)

    const [images, setImages] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {

        (async () => {

            try {
                const { data } = await axios.get(`${baseUrl}/api/images`, {
                    headers: {
                        'Authorization': `Bearer ${store.token}`
                    }
                })
                // console.log(data.images)
                setImages(data.images)

            } catch (err) {
                console.log(err)
            }
        })()

    }, [images, store.token])

    const imagesHandler = async e => {

        const files = e.target.files

        try {
            const formData = new FormData()
            for (let i = 0; i < files.length; i++) {
                formData.append('images', files[i])
            }
            
            setLoader(true)
            const { data } = await axios.post(`${baseUrl}/api/images/add`, formData, {
                headers: {
                    'Authorization': `Bearer ${store.token}`
                }
            })

            setLoader(false)
            setImages([...images, data.images])
            toast.success(data.message)

        } catch (err) {
            setLoader(false)
            toast.error(err.response.data.message)
        }
    }

    const copyUrl = url => {
        copy(url)
        toast.success('URL copied')
    }

    return (
        <div className='w-screen h-screen fixed left-0 top-0 z-[999]'>
            <div className='w-full h-full relative'>
                <div className='bg-gray-400 opacity-80 w-full h-full absolute top-0 left-0 z-[998]'></div>
                <div className='absolute bg-white w-[50%] h-[85vh] p-3 rounded-sm overflow-y-auto
                    left-[50%] top-[50%] z-[999] -translate-x-[50%] -translate-y-[50%]'>

                    <div className='pb-3 flex justify-between items-center w-full'>
                        <h2>Gallery</h2>
                        <AiOutlineClose className='text-xl cursor-pointer' onClick={() => setShow(false)} />
                    </div>

                    <label htmlFor='images' className='w-full h-[180px] flex rounded justify-center
                        gap-2 items-center cursor-pointer border-2 border-dashed text-[#404040]'>
                        <div className='flex justify-center items-center flex-col gap-y-2'>
                            <span className='text-2xl'><MdCloudUpload /></span>
                            <span>Upload Images</span>
                        </div>
                    </label>
                    <input
                        id='images'
                        name='images'
                        className='hidden'
                        onChange={imagesHandler}
                        type='file'
                        multiple
                    />

                    <div className='grid grid-cols-4 gap-x-2 mt-3'>
                        {loader ? <p>Uploading...</p> : images.length > 0 && images.map((img, i) =>
                            <div key={i} title='Copy URL' className='cursor-pointer mt-2' onClick={() => copyUrl(img.url)}>
                                <img src={img.url} alt='img' className='w-full h-[100px]' />
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery
