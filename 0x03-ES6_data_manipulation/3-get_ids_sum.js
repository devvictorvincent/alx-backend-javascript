const  getStudentIdsSum = (students) =>
    {
           const sum = students.reduce((previous, current) =>{
            return previous + current.id;
            },0)
            
            return sum;
    }
export default getStudentIdsSum;
