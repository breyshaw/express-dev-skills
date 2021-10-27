//This is my main/home index router
import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Dev Skills!' })
})

export { 
  router
}
