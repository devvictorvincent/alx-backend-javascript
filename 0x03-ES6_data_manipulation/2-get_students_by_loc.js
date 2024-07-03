 const getStudentsByLocation = (students, city) => 
    {
        const result = students.filter((item) =>{
            return item.location == city;
        });
        return result;
    }

export default getStudentsByLocation;
