import { Request, Response } from 'express';
import getAllStudentsService from '../services/getAllStudentsService';
import createNewStudentService from '../services/createNewStudentService';
import deleteStudentService from '../services/deleteStudentService';

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
    };

    async destroy(req: Request, res: Response) {
        const { id } = req.params;

        const student_deleted = await deleteStudentService(Number(id));

        return res.json({ student_deleted });
    }
};

export default new UserController();