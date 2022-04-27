import { Student } from '../entities/Student';
import { UserModel } from "../models/StudentModel";

class StudentsRepository {
    async getAllStudents() {
        const students = await UserModel.find({});

        return students;
    };

    async createNewStudent(student: Student) {
        const students = await UserModel.create(student);

        return students;
    }
};

export default new StudentsRepository();