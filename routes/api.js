const router = require('express').Router();
const apiCtrl = require('../controllers/api/api')

router.get('/movies', apiCtrl.index);
router.get('/movies', apiCtrl.show);
router.post('/movies', apiCtrl.create);
router.put('/movies/:id', apiCtrl.update)
router.delete('/movies/:id', apiCtrl.remove)




module.exports = router;
