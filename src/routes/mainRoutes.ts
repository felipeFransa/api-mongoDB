import { Router, Request, Response } from 'express';
import * as AdminControler from '../controllers/adminController'

const router = Router();

router.get('/', AdminControler.HomePage)
router.get('/admin/login', AdminControler.LoginAdmin)
router.get('/admin/register', AdminControler.RegisterAdmin)

export default router;