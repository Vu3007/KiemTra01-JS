 //bai1
console.log("Bài 1 :Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất:");
function getStringHasMaxLength(strings) {
    if (strings.length === 0) return [];
    const maxLength = Math.max(...strings.map(str => str.length));
    const longestStrings = strings.filter(str => str.length === maxLength);
    return longestStrings;
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd'])); // ['aba', 'vcd']

//bai2
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]
//1
console.log("Bài 2:");
   console.log("1,Trả về mảng các user có age > 25 và isStatus = true:");
   function getName(){
    for(let i=0;i<users.length;i++){
        const p=users[i]
        if(p.age>=25&&p.isStatus==true){
            return p.name
        }
      }
   }
   console.log(getName());
   
   //2
   console.log(" 2,Trả về mảng các user có age tăng dần:");
   function sort(a,b){
    return a.age-b.age;
   }
   console.log(users.sort(sort));


   //Bai3
   console.log("Bài 3,Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần:");

   function getCountElement(arr) {
    let countObj = {};

    arr.forEach(function(element) {
        if (countObj[element]) {
            countObj[element]++;
        } else {
            countObj[element] = 1;
        }
    });

    return countObj;
}

console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));

   
   
