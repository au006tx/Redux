import { GET_STUDENTS } from './types';


export const getStudents = (students) => {
    return {
        type : GET_STUDENTS,
        payload : students
    };
}