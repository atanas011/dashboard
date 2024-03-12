import { useState } from 'react'
import { Link } from 'react-router-dom'

import NewsContent from '../components/NewsContent'
import Pagination from '../components/Pagination'
import FilterNews from '../components/FilterNews'

const News = () => {

  const [news, setNews] = useState([])
  const [allNews, setAllNews] = useState([])

  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [perPage, setPerPage] = useState(5)

  const flag = true

  return (
    <div className='bg-white rounded-md'>

      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>News</h2>
        <Link
          to='create'
          className='px-3 py-[6px] rounded-sm bg-purple-500 text-white hover:bg-purple-600'
        >Create News</Link>
      </div>

      <FilterNews
        allNews={allNews}
        setNews={setNews}
        setPage={setPage}
      />

      <NewsContent
        news={news}
        setNews={setNews}
        setAllNews={setAllNews}
        page={page}
        setPages={setPages}
        perPage={perPage}
        flag={flag}
      />

      <Pagination
        page={page}
        setPage={setPage}
        pages={pages}
        PerPage={perPage}
        setPerPage={setPerPage}
      />

    </div>
  )
}

export default News
