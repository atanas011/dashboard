import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {

    return (
        <div className='min-h-screen bg-slate-100 dark:bg-stone-900'>

            <Sidebar />

            <div className='ml-[250px] w-[calc(100vw-250px) min-h-[vh]]'>

                <Header />

                <main className='pt-24 px-4 pb-4'>
                    <Outlet />
                </main>

            </div>
        </div>
    )
}

export default Layout
