import { question } from "readline-sync";

// Định nghĩa 1 lớp đối tượng lưu trữ và xử lí phân số
class Fraction {
    // Khai báo thuộc tính của lớp đối tượng
    numerator: number;    // tử số 
    denominator: number;  // mẫu số

    /**
     * Phương thức khởi tạo một đối tượng thuộc lớp Fraction
     * @param TuSo Tử số 
     * @param MauSo Mẫu số
     */
    constructor(numerator: number = 2, denominator: number = 3) {
        this.numerator = numerator;
        this.denominator = denominator;
    }


    /**
     * Phương thức nhập một phân số
     */
    scan(): void {

        this.numerator = Number(question("Nhap tu so:"));

        do {
            if (this.denominator == 0)
                console.log("Vui long nhap lai, Mau so phai khac 0")
            this.denominator = Number(question("Nhap mau so:"));

        } while (this.denominator == 0);
    }

    /**
     * Phương thức in ra một phân số
     */
    print(): void {
        console.log(`${this.numerator}/${this.denominator}`);
    }

  
    /**
     * Rút gọn một phân số
     */
    reduce(): void {

    // Phương thức gcd tính ước chung lớn nhất của hai số nguyên bằng phương pháp đệ quy.
    const gcd = (a: number, b: number): number =>{
        if (b === 0) {
        return a;
        }
        return gcd(b, a % b);
    }

    // Tìm ước chung lớn nhất của tử số và mẫu số
    const divisor = gcd(this.numerator, this.denominator);
    
    // Chia cả tử số và mẫu số cho ước chung
    this.numerator = this.numerator / divisor;
    this.denominator = this.denominator / divisor;
   
    }


    /**
     * Phương thức Chuẩn hóa phân số x. Phân số được chuẩn hóa nếu:
     * Phân số dương thì tử số và mẫu số đều phải là số dương.
     * Phân số âm thì tử số là số âm và mẫu số là số dương.
     * Phân số bằng 0 thì tử số bằng 0 và mẫu số bằng 1.
     */
    normalize(): void {
        // Đặt biến là dấu của phân số, Nếu phân số dương thì mang giá trị 1, ngược lại là âm 1
        let valueFration = (this.numerator * this.denominator) < 0 ? -1 : 1

        // Nếu phân số dương thì tử số và mẫu số là số dương
        if (valueFration == 1) {
            this.numerator = Math.abs(this.numerator);
            this.denominator = Math.abs(this.denominator);
        }

        // Nếu phân số âm thì tử số là số âm và mẫu số là số dương
        else if (valueFration == -1) {
            this.numerator = -this.numerator;
            this.denominator = Math.abs(this.denominator);
        }

        // Nếu phân số bằng 0 thì tử số bằng 0 và mẫu số bằng 1.
        if (this.numerator == 0) {
            this.numerator = 0;
            this.denominator = 1;
        }
    }


    /**
     * Phương thức cộng 2 phân số x và y
     * @param Fraction_y phân số y
     * @returns giá trị sau khi cộng 2 phân số
     */
    public plus(Fraction_y: Fraction) {
        // Tử số sau khi quy đồng
        const Numerator = (this.numerator * Fraction_y.denominator) + (this.denominator * Fraction_y.numerator);
        // Mẫu số số sau khi quy đồng
        const Denominator = this.denominator * Fraction_y.denominator;

        if(Numerator == Denominator ) // Nếu cả tử và mẫu số bằng nhau thì trả về giá trị 1
            return 1;
        return `${Numerator}/${Denominator}`;
    }


    /**
     * Phương thức nhân 2 phân số x và y
     * @param Fraction_y phân số y
     * @returns giá trị sau khi nhân 2 phân số
     */
    public multiply(Fraction_y: Fraction) {
        // Tử số khi nhân = tử số X nhân tử số Y
        const Numerator = this.numerator * Fraction_y.numerator
        // Mẫu số X nhân mẫu số Y
        const Denominator = this.denominator * Fraction_y.denominator;

        if(Numerator == Denominator )  // Nếu cả tử và mẫu số bằng nhau thì trả về giá trị 1
            return 1;

        return `${Numerator}/${Denominator}`;

    }


    /**
     * Phương thức so sánh 2 phân số x và y có bằng nhau không
     * @param Fraction_y phân số y
     * @returns trả về True khi 2 phân số bằng nhau, ngược lại False thì không bằng nhau
     */
    public equal(Fraction_y: Fraction): boolean {
        // giá trị phân số x
        const value_fraction_X = this.numerator / this.denominator;
        // giá trị phân số y
        const value_fraction_Y = Fraction_y.numerator / Fraction_y.denominator;
        // so sánh bằng 2 phân số
        if (value_fraction_X == value_fraction_Y)
            return true;
        else
            return false;
    }

    /**
     * Phương thức so sánh 2 phân số x có bé hơn phân số y không
     * @param Fraction_y phân số y
     * @returns trả về True khi phân sốx bé hơn phân số y không, ngược lại False thì không bé hơn
     */
    public lessThan(Fraction_y: Fraction): boolean {
        // giá trị phân số x
        const value_fraction_X = this.numerator / this.denominator;
        // giá trị phân số y
        const value_fraction_Y = Fraction_y.numerator / Fraction_y.denominator;

        if (value_fraction_X < value_fraction_Y)
            return true;
        else
            return false;
    }

}

function main() {
    // Khởi tạo đối tượng Fraction_X
    const Fraction_X: Fraction = new Fraction();
    Fraction_X.scan();      // Nhập phân số
    Fraction_X.print();     // In ra phân số 

    // Rút gọn phân số 
    Fraction_X.reduce();        // Rút gọn phân số
    Fraction_X.print();        // In ra phân số, sau khi RÚT GỌN

    // Chuẩn hóa một phân số 
    Fraction_X.normalize();
    Fraction_X.print();        // In ra phân số, sau khi CHUẨN HÓA

    // Khởi tạo đối tượng Fraction_Y
    const Fraction_Y: Fraction = new Fraction();
    Fraction_Y.scan();       // Nhập phân số Y 

    Fraction_X.reduce();     // Rút gọn phân số X 
    Fraction_Y.reduce();     // Rút gọn phân số Y

    // cộng 2 phân số 
    console.log(Fraction_X.plus(Fraction_Y));    
    // Nhân 2 phân số
    console.log(Fraction_X.multiply(Fraction_Y)); 

    //So sánh 2 phân số X và Y có bằng nhau không
    const compare = Fraction_X.equal(Fraction_Y);
    if(compare == true)
        console.log("2 Phân số bằng nhau");
    else 
        console.log("2 Phân số không bằng nhau");


    //So sánh 2 phân số X có bé hơn phân số Y không
    const compare2 = Fraction_X.equal(Fraction_Y);
    if(compare2 == true)
        console.log("Phân số X bé hơn phân số y");
    else 
        console.log("Phân số X không bé hơn phân số y");

}
main();
