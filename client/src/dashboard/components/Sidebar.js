import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiFillDashboard, AiOutlinePlus } from 'react-icons/ai'
import { BiNews } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { ImProfile } from 'react-icons/im'
import { GrLogout } from 'react-icons/gr'
import { useContext } from 'react'

import logo from '../../assets/logo.png'
import logoDark from '../../assets/logo-dark.png'
import storeContext from '../../context/storeContext'

const Sidebar = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { store, dispatch } = useContext(storeContext)

    const paths = ['', 'news', 'news/create', 'profile', 'writers', 'writers/add', 'login']
    const icons = [
        <AiFillDashboard />,
        <BiNews />,
        <AiOutlinePlus />,
        <ImProfile />,
        <FiUsers />,
        <AiOutlinePlus />,
        <GrLogout />
    ]
    const titles = ['Dashboard', 'News', 'Create News', 'Profile', 'Writers', 'Add Writer', 'Logout']

    const nums = store.user.role === 'Admin' ? [0, 1, 2, 3, 4, 5, 6] : [0, 1, 2, 3, 6]

    const logout = () => {
        localStorage.removeItem('token')
        dispatch({ type: 'logout', payload: '' })
        navigate('/login')
    }

    return (
        <div className='w-[250px] h-screen fixed left-0 top-0 bg-white dark:bg-stone-500'>

            <div className='h-20 flex justify-center items-center'>
                <Link to='/'>
                    <img src={logo} alt='logo' className='block dark:hidden' />
                    <img src={logoDark} alt='logo-dark' className='hidden dark:block' />
                </Link>
            </div>

            <ul className='px-3 flex flex-col gap-y-1 font-medium'>
                {nums.map(i =>
                    <li key={i} onClick={i > 5 ? logout : null}>
                        <Link to={`/${paths[i]}`} className={
                            `${pathname === `/${paths[i]}` ? 'bg-indigo-500 text-white' :
                                `bg-white ${i < 1 ? 'text-[#4040f6]' : 'text-[#404040f6]'}`}
                                px-3 py-2 rounded-sm flex gap-x-2 justify-start items-center
                                hover:shadow-lg ${i < 6 ? 'hover:shadow-indigo-500/20' : 'hover:shadow-red-500/20'}
                                ${i < 6 ? 'hover:bg-indigo-500' : 'hover:bg-red-500'} hover:text-white
                            `
                        }>
                            <span className='text-xl'>{icons[i]}</span>
                            <span>{titles[i]}</span>
                        </Link>
                    </li>
                )}
            </ul>

        </div>
    )
}

export default Sidebar
