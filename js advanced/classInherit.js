class school {
    constructor(name,id,point){
        this.name = name;
        this.id = id;
        this.point = point;
    }
    graduated(){
        console.log("Graduated");
    }
}
class student extends school{
    rank(){
        if(this.point>=9)
          console.log('good!');
        else if(this.point<9)
          console.log('bad!');
        else
          console.log("Syntax Errol");
    }
}
const student1 = new student('Tran Hai Quan','171203519',9);
const student2 = new student('Tran Phuong Linh','171203520',7);
const student3 = new student('Do Cam Nhi','191205519',10);
    student1.rank();
    student1.graduated();
    student2.rank();
    student3.rank();