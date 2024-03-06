import { Link } from 'react-router-dom'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'

const NewsContent = ({ flag }) => {

    return (
        <div className='relative overflow-x-auto p-4'>
            <table className='w-full text-sm text-left text-slate-600'>

                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th className='px-7 py-3'>#</th>
                        <th className='px-7 py-3'>Title</th>
                        <th className='px-7 py-3'>Image</th>
                        <th className='px-7 py-3'>Category</th>
                        <th className='px-7 py-3'>Description</th>
                        <th className='px-7 py-3'>Date</th>
                        <th className='px-7 py-3'>Status</th>
                        <th className='px-7 py-3'>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {[1, 2, 3, 4].map(i =>
                        <tr key={i} className='bg-white border-b'>
                            <td className='px-6 py-4'>{i}</td>
                            <td className='px-6 py-4'>Lorem ipsum dolor sit amet...</td>
                            <td className='px-6 py-4'>
                                <img className='w-[40px] h-[40px]' alt='news-img'
                                    src='https://res.cloudinary.com/dpv5tcps3/image/upload/v1708599466/news/g1rq2mu77vkftsca6cbc.png'
                                />
                            </td>
                            <td className='px-6 py-4'>Sport</td>
                            <td className='px-6 py-4'>Ut enim ad minim veniam...</td>
                            <td className='px-6 py-4'>January 31, 2024</td>
                            <td className='px-6 py-4'>
                                <span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer'>
                                    Active
                                </span>
                            </td>
                            <td className='px-6 py-4'>
                                <div className='flex justify-center items-center gap-x-4'>
                                    <Link title='View' className='p-1 text-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'>
                                        <FaEye />
                                    </Link>
                                    <Link title='Edit' className={`${!flag && 'hidden'} p-1 text-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50`}>
                                        <FaEdit />
                                    </Link>
                                    <div title='Delete' className={`${!flag && 'hidden'} p-1 text-red-500 rounded hover:shadow-lg hover:shadow-red-500/50`}>
                                        <FaTrash />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    )
}

export default NewsContent
