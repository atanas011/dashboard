import { AiOutlineClose } from 'react-icons/ai'
import { MdCloudUpload } from 'react-icons/md'

const Gallery = ({ setShow }) => {

    return (
        <div className='w-screen h-screen fixed left-0 top-0 z-[999]'>
            <div className='w-full h-full relative'>
                <div className='bg-gray-400 opacity-80 w-full h-full absolute top-0 left-0 z-[998]'></div>
                <div className='absolute bg-white w-[50%] h-[85vh] p-3 rounded-sm overflow-y-auto
                    left-[50%] top-[50%] z-[999] -translate-x-[50%] -translate-y-[50%]'>

                    <div className='pb-3 justify-between items-center w-full flex'>
                        <h2>Gallery</h2>
                        <AiOutlineClose className='text-xl cursor-pointer' onClick={() => setShow(false)} />
                    </div>

                    <label htmlFor='img' className='w-full h-[180px] flex rounded justify-center
                        gap-2 items-center cursor-pointer border-2 border-dashed text-[#404040]'>
                        <div className='flex justify-center items-center flex-col gap-y-2'>
                            <span className='text-2xl'><MdCloudUpload /></span>
                            <span>Upload Images</span>
                        </div>
                    </label>
                    <input className='hidden' type='file' id='img' />

                    <div className='grid grid-cols-4 gap-x-2'>
                        <div></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery
