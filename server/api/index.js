const router = require('express').Router()

//error handling middleware
router.use((req, res, next) => {
  const err = new Error('404 Not Found')
  err.status = 404
  next(err)
})

module.exports = router
