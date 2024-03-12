import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { convert } from 'html-to-text'
import toast from 'react-hot-toast'
import axios from 'axios'

import storeContext from '../../context/storeContext'
import baseUrl from '../../config'

const NewsContent = ({ news, setNews, setAllNews, page, setPages, perPage, flag }) => {

    const { store } = useContext(storeContext)

    const [status, setStatus] = useState('')

    useEffect(() => {

        (async () => {
            try {
                const { data } = await axios.get(`${baseUrl}/api/news`, {
                    headers: {
                        'Authorization': `Bearer ${store.token}`
                    }
                })
                setNews(data.news)
                setAllNews(data.news)

            } catch (err) {
                console.log(err)
            }
        })()

    }, [setNews, setAllNews, store.token, status])

    useEffect(() => {
        if (news.length) setPages(Math.ceil(news.length / perPage))
    }, [news, setPages, perPage])

    const updateStatus = async (status, id) => {

        try {
            setStatus(id)
            const { data } = await axios.put(`${baseUrl}/api/news/update-status/${id}`, { status }, {
                headers: {
                    'Authorization': `Bearer ${store.token}`
                }
            })
            setStatus('')
            toast.success(data.message)

        } catch (err) {
            setStatus('')
        }
    }

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
                    {news.length > 0 && news.slice((page - 1) * perPage, page * perPage).map((n, i) =>
                        <tr key={i} className='bg-white border-b'>
                            <td className='px-6 py-4'>{i + 1 + (page - 1) * perPage}</td>
                            <td className='px-6 py-4'>{n.title.length > 15 ? n.title.slice(0, 15) + '...' : n.title}</td>
                            <td className='px-6 py-4'>
                                <img className='w-[40px] h-[40px]' src={n.image} alt='news' />
                            </td>
                            <td className='px-6 py-4'>{n.category}</td>
                            <td className='px-6 py-4'>{convert(n.description).slice(0, 18)}...</td>
                            <td className='px-6 py-4'>{n.date}</td>
                            <td className='px-6 py-4'>
                                <span
                                    className={`px-2 py-[2px] rounded-lg text-xs ${store.user.role === 'Admin' && 'cursor-pointer'}
                                        ${n.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            n.status === 'active' ? 'bg-green-100 text-green-800' :
                                                'bg-red-100 text-red-800'}`}
                                    onClick={store.user.role !== 'Admin' ? undefined :
                                        () => updateStatus(`${n.status === 'active' ? 'inactive' : 'active'}`, n._id)} >
                                    {status === n._id ? 'Loading...' : n.status}
                                </span>
                            </td>
                            <td className='px-6 py-4'>
                                <div className='flex justify-start items-start gap-x-4 text-white'>
                                    <Link title='View' className={`${!flag && 'ms-4'}
                                        p-1 bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50`}>
                                        <FaEye />
                                    </Link>
                                    <Link to={`update/${n._id}`} title='Edit' className={`${!flag && 'hidden'}
                                        p-1 bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50`}>
                                        <FaEdit />
                                    </Link>
                                    <div title='Delete' className={`${!flag && 'hidden'}
                                        p-1 bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50`}>
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
