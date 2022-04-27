import { Request, Response } from 'express';

import getAllStudentsService from '../services/getAllStudentsService';

class UserController {
    async index(req: Request, res: Response) {
        const students = await getAllStudentsService();
        
        return res.json({students});
    }
};

export default new UserController();