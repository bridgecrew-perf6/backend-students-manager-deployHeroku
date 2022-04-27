import StudentsRepository from '../repositories/StudentsRepository';

const main = async(id: string) => {
    const student_deleted = await StudentsRepository.deleteStudent(id)

    return student_deleted;
}; 

export default main;