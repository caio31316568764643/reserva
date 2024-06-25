import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import SessionController from './controllers/SessionController'
import HouseController from './controllers/HouseController'
import DashboardController from './controllers/DashboardController'
import ReserveController from './controllers/ReserveController'

const router = new Router()
const upload = multer(uploadConfig);

router.post('/sessions', SessionController.store)

router.post('/houses', upload.single('thumbnail'), HouseController.store);
router.get('/houses', HouseController.index);
router.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);
router.delete('/houses', HouseController.destroy);

router.get('/dashboard', DashboardController.show);

router.post('/houses/:house_id/reserve', ReserveController.store);
router.get('/reserves', ReserveController.index);
router.delete('/reserves/cancel', ReserveController.destroy)

export default router