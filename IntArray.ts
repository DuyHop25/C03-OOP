import { question } from "readline-sync";

// Định nghĩa một lớp mảng các số nguyên cùng với các phương thức thực hiện các chức năng
class IntArray {
    // Khai báo thuộc tính của lớp đối tượng
    array: number[] = [1, 2, 3, 4];
    name: string;

    /**
     * Phương thức khởi tạo đối tượng thuộc lớp IntArray
     * @param name tên mảng
     * @param rest các tham số truyền vào mảng
     */
    constructor(name: string, ...rest: number[]) {
        this.name = name;
        this.array = rest;
    }

    /**
     * phương thức nhập mảng
     */
    input() {

        let lenArray = Number(question("Nhap so luong phan tu:"));

        for (let i = 0; i < lenArray; i++) {
            this.array[i] = Number(question(`Nhap phan tu thu ${i + 1}:`));
        }
    }

    /**
     * phương thức xuất mảng
     */
    print() {
        console.log(this.array);
    }

    /**
     * phương thức getter của class trả về giá trị name của đối tượng
     */
    get Name(): string {
        return this.name;
    }

    /**
    * Phương thức Setter của class cập nhập giá trị của biến name
    */
    set Name(value: string) {
        this.name = value;
    }

    /**
     * Phương thức lấy giá trị của phần tử ở vị trí idx trong mảng array
     * @param idx vị trí phần tử cần lấy
     * @returns phần tử ở vị trí idx
     */
    getElement(idx: number): number {

        if (idx < this.array.length)
            return this.array[idx];
        else
            return 0;

    }

    /**
     * Phương thức lấy số lượng phần tử của mảng
     * @returns 
     */
    getSize(): number {
        return this.array.length;
    }

     /**
     * Phương thức tính tổng các phần tử của mảng
     * @returns 
     */
    getSum(): number {

        let totalArray: number = 0;

        for (let i = 0; i < this.array.length; i++) {
            totalArray += this.array[i];
        }

        return totalArray;
    }

    /**
     * Phương thức tìm số lớn nhất có trong mảng
     * @returns 
     */
    getMax(): number {

        let max: number = 0;

        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] > this.array[max])
                max = i;
        }

        return this.array[max];
    }

    /**
     * Phương thức lấy các số chẵn có trong mảng
     * @returns 
     */
    getEven(): number[] {

        let evenArray :number[] = [];

        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] % 2 == 0)
                evenArray.push(this.array[i]);
        }

        return evenArray;
    }

    /**
     * 	Phương thức thêm phần tử vào đầu mảng array
     * @param val phần tử cần thêm
     */
    addHead(val: number){

        const len = this.array.length;

        for (let i = len; i > 0; i--) {
            this.array[i] = this.array[i-1];
        } 

        this.array[0] = val;
    }

    /**
     * Phương thức chèn một biến vào vị trí tự chọn vào của mảng
     * @param idx vị trí của phần tử chèn vào mảng
     * @param val phần tử chèn vào mảng
     */
    insert(idx: number, val: number){
        // Độ dài mảng
        const len = this.array.length;
        // Dịch chuyển các phần tử từ vị trí cần chèn sang phải
        if(idx < this.array.length){

            for(let i = len - 1; i > idx; i--) {
                this.array[i] =  this.array[i-1];
            }

            // Gán giá trị mới vào vị trí cần chèn
            this.array[idx] = val;
        }  
        
    }

    /**
     * Thêm các phần tử của mảng p vào sau mảng array
     * @param p Mảng p
     */
    addElements(p: IntArray){
        this.array = [...this.array,...p.array];
    }

    erase(idx?: number):  number{
        let id: number = 0;
        // Tạo mảng được sao chép từ array
        let arr : number[] = this.array; 
        // Gán mảng bằng rỗng
        this.array = [];
        // Nếu như có truyền vào vị trí idx thì mới loại bỏ vị trí phần tử idx
        if(typeof idx !== "undefined")
        {
            
            for (let i = 0; i < arr.length; i++) {
                // Thêm phần tử vào mảng trừ phần tử vị trí idx
                if(i != idx)   
                    this.array.push(arr[i]);
                else 
                    id = idx;  // lưu vị trí phần tử bị xóa
            }   
            return arr[id]; 
            
        }
        else 
            return -1;
    }
   
    /**
     * Phương thức sao mảng chép mảng từ vị trí start đến vị trí end
     * @param start vị trí start
     * @param end vị trí end
     * @returns Mảng được sao chép
     */
    clone(start: number, end: number): number[]{

    let ArrayCopy: number[] = [];

    if(start < this.array.length && end < this.array.length){

        for (let i = start; i < end + 1; i++) {
            ArrayCopy.push(this.array[i]);
        }
        return ArrayCopy;
    }
    else 
        return [];
    }

}

function main() {
    // Khởi tạo đối tượng mảng a
    const a: IntArray = new IntArray("Duy Hợp",);
    // Nhập mảng và xuất mảng
    console.log("Nhập mảng:");
    a.input();
    console.log("Xuất mảng:");
    a.print();

    // Getter và setter của class
    a.Name = "Vũ Thùy";
    console.log("\nGetter và Seeter thuộc tính name của đối tượng:",a.Name);

    //lấy giá trị của phần tử ở vị trí idx trong mảng array
    a.print();
    let value_idxArray = a.getElement(3);
    if(value_idxArray == 0)
        console.log(`\nKhông tìm thấy vị trí phần tử trong mảng`);
    else
        console.log(value_idxArray);


    // Lấy số lượng phần tử của mảng
    console.log("\nSố lượng phần tử trong mảng:",a.getSize());

    // //Tính tổng các phần tử trong mảng array
    console.log("\nTổng các phần tử trong mảng:",a.getSum());

    // số lớn nhất có trong mảng
    console.log("\nSố lớn nhất trong mảng là:", a.getMax());

    // Lấy các số chẵn có trong mảng
    console.log("\nCác số chẵn trong mảng là:",a.getEven());
    
    //Thêm 1 phần tử vào đầu mảng array
    a.addHead(25);
    console.log("\nMảng sau khi thêm phần tử mới vào đầu mảng:");
    a.print();

    // // Chèn 1 phần tử vào vị trí idx của mảng
    a.insert(1,4);
    console.log(`\nMảng sau khi chèn phần tử vào vị trí idx :`);
    a.print();

    // Khởi tạo đối tượng mảng b
    const b: IntArray = new IntArray("1",);
    console.log("\nNhập mảng b:");
    b.input();
    console.log("Xuất mảng b:");
    b.print();          // Nhập mảng
    // Thêm các phần tử của mảng b vào sau mảng array
    a.addElements(b);  
    console.log("\nMảng a sau khi thêm các phần tử từ mảng b:")
    a.print();         


    // Sao chép mảng từ vị trí start đến vị trí end
    let start: number = 1;
    let end: number = 3;
    console.log(`Mảng được sao chép phần tử từ vị ${start} đến vị trí ${end}:`,a.clone(1,3));

    // Xóa phần tử tại vị trí idx trong mảng, trả về phần tử bị xóa
    console.log("\nPhần tử bị xóa:",a.erase(2));
    console.log("Mảng sau khi xóa phần tử ở vị trí idx:");
    a.print();


    // Nếu không truyền vào vị trí xóa , Mảng sẽ xóa hết tất cả phần tử
    console.log(a.erase());
    console.log("\nMảng sau khi không truyền vào vị trí idx để xóa phần tử:");
    a.print();

}
main();