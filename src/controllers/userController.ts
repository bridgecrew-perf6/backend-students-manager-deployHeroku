import { Request, Response } from 'express';
import getAllStudentsService from '../services/getAllStudentsService';
import createNewStudentService from '../services/createNewStudentService';

class UserController {
    async index(req: Request, res: Response) {
        const students = await getAllStudentsService();
        
        return res.json({students});
    };

    async store(req: Request, res: Response) {
        const { name, email, cpf, age } = req.body;

        const student_created = await createNewStudentService({
            name, email, cpf, age
        });

        return res.json({ student_created })
    }
};

export default new UserController();