import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

import logo from '../../assets/logo.png'
import baseUrl from '../../config'
import storeContext from '../../context/storeContext'

const Login = () => {

    const navigate = useNavigate()
    const { dispatch } = useContext(storeContext)

    const [loader, setLoader] = useState(false)
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const inputHandler = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const submitHandler = async e => {
        e.preventDefault()

        try {
            setLoader(true)
            const { data } = await axios.post(`${baseUrl}/api/login`, state)
            setLoader(false)
            localStorage.setItem('token', data.token)
            dispatch({
                type: 'login_success',
                payload: {
                    token: data.token
                }
            })
            navigate('/')
        } catch (err) {
            setLoader(false)
            toast.error(err.response.data.message)
        }
    }

    return (
        <div className='min-w-screen min-h-screen bg-slate-200 flex justify-center items-center'>
            <div className='w-[340px] text-slate-600 shadow-md'>
                <div className='bg-white h-full px-7 py-8 rounded-md'>

                    <div className='flex justify-center items-center'>
                        <img src={logo} alt='logo' />
                    </div>

                    <form className='mt-8' onSubmit={submitHandler}>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-md font-medium text-gray-600' htmlFor='email'>Email</label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                onChange={inputHandler}
                                value={state.email}
                                className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
                            />
                        </div>
                        <div className='flex flex-col gap-y-2 mt-5'>
                            <label className='text-md font-medium text-gray-600' htmlFor='password'>Password</label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                onChange={inputHandler}
                                value={state.password}
                                className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
                            />
                        </div>

                        <div className='mt-8'>
                            <button
                                type='submit'
                                disabled={loader}
                                className='px-3 py-[6px] w-full rounded-sm bg-purple-500 text-white hover:bg-purple-600'
                            >{loader ? 'Loading...' : 'Log In'}</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login
