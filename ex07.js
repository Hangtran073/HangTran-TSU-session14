let books = [];
function addBook(id, title, author, year) {
    const book = { id, title, author, year };
    books.push(book);
    console.log(`Đã thêm danh sách: ${title} (ID: ${id})`);

}

//Hiển thị danh sách

function showBooks() {
    console.log("\n-----Danh sách-----");
    if (books.length === 0) {
        console.log("Danh sách trống.");
        return;
    }
    books.forEach((book, index) => {
        console.log(
            `${index + 1}. ID: ${book.id}, Tên: ${book.title}, Tác giả: ${book.author}, Năm: ${book.year}`
        );
    });
    console.log("-----------------------\n");

}

//Tìm kiếm theo tên

function removeBook(id) {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
        const removeBook = books.splice(index, 1);
        console.log(`Đã xóa sách: ${removeBook[0].title} (ID: ${id})`);

    } else {
        console.log("Không tìm thấy sách với Id đã nhập.");
    }
}

//Hiển thị menu

function menu() {
    let running = true;
    while (running) {
        console.log("\n Chọn chức năng:");
        console.log("1. Thêm danh sách mới");
        console.log("2. Hiển thị danh sách");
        console.log("3. Tìm kiếm sách theo tên");
        console.log("4. Xóa sách theo Id");
        console.log("5. Thoát chương trình");

        let choice = prompt("Nhập lựa chọn (1-5):");

        switch (choice) {
            case "1":
                let id = prompt("Nhập danh sách:");
                let title = prompt("Nhập tên sách:");
                let author = prompt("Nhập tác giả:");
                let year = parseInt(prompt("Nhập năm xuất bản:"));
                addBook(id, title, author, year);
                break;
            case "2":
                showBooks();
                break;
            case "3":
                let keyword = prompt("Nhập từ khóa tìm kiếm:");
                searchBook(keyword);
                break;
            case "4":
                let removeId = prompt("Nhập ID sách cần xóa:");
                removeBook(removeId);
                break;
            case "5":
                running = false;
                console.log("Đã thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
        }

    }
}