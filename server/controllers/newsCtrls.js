import cloudinary from 'cloudinary'
import formidable from 'formidable'
import moment from 'moment'

import News from '../models/news.js'

export const createNews = async (req, res) => {

    const { id, name, category } = req.user
    const form = formidable({})

    cloudinary.v2.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true
    })

    try {
        const [fields, files] = await form.parse(req)
        const { title, description } = fields

        if (title[0] === '') return res.status(400).json({ message: 'Please provide title' })
        // console.log(fields)
        if (JSON.stringify(files) === '{}') return res.status(400).json({ message: 'Please select image' })

        const { url } = await cloudinary.v2.uploader.upload(files.image[0].filepath, { folder: 'dashboard' })
        // console.log(url)

        // if (description[0] === '') return res.status(400).json({ message: 'Please add description' })

        const news = await News.create({
            title: title[0].trim(),
            slug: title[0].trim().split(' ').join('-'),
            description: description[0],
            image: url,
            category,
            writerId: id,
            writerName: name,
            date: moment().format('LL')
        })

        res.status(201).json({ message: 'News created', news })
    } catch (err) {
        res.sendStatus(500)
    }
}
