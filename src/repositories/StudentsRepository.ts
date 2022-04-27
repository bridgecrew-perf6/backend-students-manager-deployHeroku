import { UserModel } from "../models/studentModel";

class StudentsRepository {
    async getAllStudents() {
        const students = await UserModel.find({});

        return students;
    }
};

export default new StudentsRepository();