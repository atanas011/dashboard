import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {

    return (
        <>
            <Sidebar />

            <Header />

            <main className='min-w-screen min-h-screen bg-stone-900 text-white'>
                <Outlet />
            </main>

        </>
    )
}

export default Layout
