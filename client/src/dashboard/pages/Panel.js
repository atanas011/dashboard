import { Link } from 'react-router-dom'
import { useContext } from 'react'

import NewsContent from '../components/NewsContent'
import storeContext from '../../context/storeContext'

const AdminIndex = () => {

    const { store } = useContext(storeContext)
    const flag = false

    const qty = [5, 10, 5, 5]
    const total = qty[0] + qty[1] + qty[2]
    const titles = ['Total News', 'Pending News', 'Active News', 'Inactive News', 'Writers']
    const nums = store.user.role === 'Admin' ? [0, 1, 2, 3, 4] : [0, 1, 2, 3]

    return (
        <div className='mt-3'>
            {/* {console.log(store)} */}

            <div className={`grid ${store.user.role === 'Admin' ? 'grid-cols-5' : 'grid-cols-4'}  gap-x-4`}>
                {nums.map(i =>
                    <div key={i} className='w-full p-4 flex flex-col rounded-md justify-center items-center gap-y-2 bg-white text-slate-700'>
                        <span className='text-xl font-bold'>{i < 1 ? total : qty[i - 1]}</span>
                        <span className='text-md'>{titles[i]}</span>
                    </div>
                )}
            </div>

            <div className='bg-white rounded-md mt-5'>
                <div className='flex justify-between items-center p-4'>
                    <h2>Recent News</h2>
                    <Link>View All</Link>
                </div>

                <NewsContent flag={flag} />

            </div>
        </div>
    )
}

export default AdminIndex
