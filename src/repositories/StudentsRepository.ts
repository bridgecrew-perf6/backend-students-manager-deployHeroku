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
    };

    async deleteStudent(id: string) {
        const student_deleted = await UserModel.findOneAndDelete(
            { where: { _id: id } }
        )

        return student_deleted;
    };
};

export default new StudentsRepository();