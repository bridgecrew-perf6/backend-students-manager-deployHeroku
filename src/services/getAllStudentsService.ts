import StudentsRepository from '../repositories/StudentsRepository';

const main = async() => {
    const students = await StudentsRepository.getAllStudents();
    
    return students;
};

export default main;