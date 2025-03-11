let students = [];
//@param {string} name
//@param {number} age
//@param {string} id

function addStudent(name, age, id){

    const student = {
        name: name,
        age: age,
        id: id
    };
    students.push(student);
    console.log(`Đã thêm sinh viên: ${name}, ID: ${id}`)
}

//Hiển thị danh sách sinh viên

function showAllStudents(){
    console.log("\n--- Danh sách sinh viên ---")
    if (students.length ===0){
        console.log("Hiện không có sinh viên nào trong danh sách.");
        return;
    }
    students.forEach((student, index) =>{
        console.log(
            `${index + 1}.Tên: ${student.name}, Tuổi:${student.age},`
        );

    });
    console.log("-----------------------\n");

}

//Xóa sinh viên theo ID

function removeStudentById(id){
    const index = students.findIndex((student) => student.id === id);

    if ( index !== -1){
        const removeStudent = students.splice(index, 1);
        console.log(`Đã xóa sinh viên: ${removeStudent[0].name},ID: ${id}`);

    }else {
        console.log(`Không tồn tại sinh viên với ID: ${id}`)
    }
}

addStudent("Alice", 20, "SVOO1");
addStudent("Bob", 22, "SV002");
addStudent("Charlie", 19, "SV003");

showAllStudents();
removeStudentById("SV002");
showAllStudents();
removeStudentById("SV999");

