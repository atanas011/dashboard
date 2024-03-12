import cloudinary from 'cloudinary'
import formidable from 'formidable'
import moment from 'moment'

import Images from '../models/gallery.js'
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
        // if (description[0] === '') return res.status(400).json({ message: 'Please add description' })
        if (JSON.stringify(files) === '{}') return res.status(400).json({ message: 'Please select image' })
        const { url } = await cloudinary.v2.uploader.upload(files.image[0].filepath, { folder: 'dashboard' })

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

export const getImages = async (req, res) => {

    const { id } = req.user

    try {
        const images = await Images.find({ writerId: id }).sort({ createdAt: -1 })
        res.status(201).json({ images })
    } catch (err) {
        res.sendStatus(500)
    }
}

export const addImages = async (req, res) => {

    const { id } = req.user
    const form = formidable({})

    cloudinary.v2.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true
    })

    try {
        const [_, files] = await form.parse(req)
        const { images } = files
        let allImages = []

        for (let i = 0; i < images.length; i++) {
            const { url } = await cloudinary.v2.uploader.upload(images[i].filepath, { folder: 'dashboard/gallery' })
            allImages.push({ writerId: id, url })
        }

        const imgs = await Images.insertMany(allImages)
        res.status(201).json({ images: imgs, message: 'Images uploaded' })
    } catch (err) {
        res.sendStatus(500)
    }
}

export const getNews = async (req, res) => {

    const { id, role } = req.user

    try {
        const news = await News.find(role === 'Admin' ? {} : { writerId: id }).sort({ createdAt: -1 })
        res.status(200).json({ news })

    } catch (err) {
        res.sendStatus(500)
    }
}

export const updateNews = async (req, res) => {

    const { id } = req.params
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
        let url = fields.oldImage[0]
        // console.log(`url: ${url}`)

        if (Object.keys(files).length > 0) {
            const publicId = url.split('/').slice(7).join('/').split('.')[0] // dashboard/... !!!
            // console.log(`imgFile: ${publicId}`)
            await cloudinary.v2.uploader.destroy(publicId)
            const data = await cloudinary.v2.uploader.upload(files.newImage[0].filepath, { folder: 'dashboard' })
            url = data.url
        }

        const news = await News.findByIdAndUpdate(id, {
            title: title[0].trim(),
            slug: title[0].trim().split(' ').join('-'),
            description: description[0],
            image: url
        }, { new: true })

        res.status(200).json({ message: 'News updated', news })
    } catch (err) {
        res.sendStatus(500)
    }
}

export const getSingleNews = async (req, res) => {

    const { id } = req.params

    try {
        const news = await News.findById(id)
        res.status(200).json({ news })
    } catch (err) {
        res.sendStatus(500)
    }
}

export const updateNewsStatus = async (req, res) => {

    const { role } = req.user
    const { id } = req.params
    const { status } = req.body

    // if (role !== 'Admin') return res.sendStatus(403)

    const news = await News.findByIdAndUpdate(id, { status }, { new: true })
    res.status(200).json({ message: 'News status updated', news })
}
