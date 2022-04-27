import StudentsRepository from "../repositories/StudentsRepository";
import IStudent from "../interfaces/student";
import { Student } from "../entities/Student";

const main = async(data: IStudent) => {
    const student = new Student(data);

    const student_created = await StudentsRepository.createNewStudent(student);

    return student_created;
};

export default main;