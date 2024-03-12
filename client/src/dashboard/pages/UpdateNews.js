import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

import storeContext from '../../context/storeContext'
import NewsEditor from '../components/NewsEditor'
import baseUrl from '../../config'

const UpdateNews = () => {

    const { id } = useParams()
    const { store } = useContext(storeContext)

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [oldImage, setOldImage] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')
    const [loader, setLoader] = useState(false)

    useEffect(() => {

        (async () => {
            try {
                const { data } = await axios.get(`${baseUrl}/api/news/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${store.token}`
                    }
                })
                setTitle(data.news.title)
                setDescription(data.news.description)
                setOldImage(data.news.image)
                setImg(data.news.image)

            } catch (err) {
                console.log(err)
            }
        })()
        
    }, [id, store.token])

    const updateHandler = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('oldImage', oldImage)
        formData.append('newImage', image)
        // console.log(oldImage)

        try {
            setLoader(true)
            const { data } = await axios.put(`${baseUrl}/api/news/update/${id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${store.token}`
                }
            })
            setLoader(false)
            toast.success(data.message)
        } catch (err) {
            setLoader(false)
            toast.error(err.response.data.message)
        }
    }

    const flag = false

    return (
        <NewsEditor
            img={img}
            setImg={setImg}
            setImage={setImage}
            handler={updateHandler}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            loader={loader}
            flag={flag}
        />
    )
}

export default UpdateNews
