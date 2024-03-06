import { Link } from 'react-router-dom'

import NewsContent from '../components/NewsContent'

const AdminIndex = () => {

    const user = 'Admin' // User
    const flag = false

    const qty = [30, 10, 10, 10, 5]
    const titles = ['Total News', 'Pending News', 'Active News', 'Inactive News', 'Writers']
    const nums = user === 'Admin' ? [0, 1, 2, 3, 4] : [0, 1, 2, 3]

    return (
        <div className='mt-3'>

            {/* Don't construct class names dynamically for tailwind - always use complete class names !!! */}
            <div className={`grid ${user === 'Admin' ? 'grid-cols-5' : 'grid-cols-4'}  gap-x-4`}>
                {nums.map(i =>
                    <div key={i} className='w-full p-4 flex flex-col rounded-md justify-center items-center gap-y-2 bg-white text-slate-700'>
                        <span className='text-xl font-bold'>{qty[i]}</span>
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
