const FilterNews = ({ allNews, setNews, setPage }) => {

    const selectStatus = e => {
        const tempNews = allNews.filter(news => news.status === e.target.value)
        setNews(tempNews.length ? tempNews : allNews)
        setPage(1)
    }

    const searchNews = e => {
        const tempNews = allNews.filter(news => news.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setNews(tempNews)
        setPage(1)
    }

    return (
        <div className='px-4 py-3 flex gap-x-3'>
            <select
                onChange={selectStatus}
                className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
            >
                <option value=''>Select Status</option>
                <option value='pending'>Pending</option>
                <option value='active'>Active</option>
                <option value='inactive'>Inactive</option>
            </select>
            <input
                type='text'
                name='search'
                onChange={searchNews}
                placeholder='Search News'
                className='px-3 py-2 h-10 rounded-md outline-0 border border-gray-300 focus:border-green-500'
            />
        </div>
    )
}

export default FilterNews
