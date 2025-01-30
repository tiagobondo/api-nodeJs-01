import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  const { method, url } = req
  const { statusCode } = res
  console.log(method, url, statusCode)
  res
  .render('index', { title: 'Inicial' })
})

export default router