import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  const { method, url } = req
  console.log(method, url)
  res.render('index', { title: 'Inicial' })
})

export default router