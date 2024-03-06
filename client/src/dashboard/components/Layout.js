import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {

    return (
        <div className='h-screen bg-slate-100 dark:bg-stone-900'>

            <Sidebar />

            <Header />

            <main className='pt-28'>
                <Outlet />
            </main>

        </div>
    )
}

export default Layout
