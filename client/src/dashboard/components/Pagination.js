import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Pagination = () => {

    return (
        <div className='flex items-center justify-end px-10 gap-x-3 text-slate-600'>
            <div className='flex gap-x-3 justify-center items-center'>
                <p className='px-4 py-3 font-semibold text-sm'>News per page:</p>
                <select className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                </select>
            </div>
            <p className='px-6 py-3 font-semibold text-sm'>Page: 1 of 5</p>
            <div className='flex items-center gap-x-3'>
                <IoIosArrowBack className='w-5 h-5 cursor-pointer' />
                <IoIosArrowForward className='w-5 h-5 cursor-pointer' />
            </div>
        </div>
    )
}

export default Pagination
