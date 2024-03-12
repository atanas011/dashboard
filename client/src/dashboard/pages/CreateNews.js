import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

import baseUrl from '../../config'
import storeContext from '../../context/storeContext'
import NewsEditor from '../components/NewsEditor'

const CreateNews = () => {

  const { store } = useContext(storeContext)

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [img, setImg] = useState('')
  const [description, setDescription] = useState('')
  const [loader, setLoader] = useState(false)

  const createHandler = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('image', image)

    try {
      setLoader(true)
      const { data } = await axios.post(`${baseUrl}/api/news/create`, formData, {
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

  const flag = true

  return (
    <NewsEditor
      img={img}
      setImg={setImg}
      setImage={setImage}
      handler={createHandler}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      loader={loader}
      flag={flag}
    />
  )
}

export default CreateNews
