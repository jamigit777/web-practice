// $(document).ready(function () {
//     $('h1').click(function (e) {
//         $('p').addClass('orange');
//     });
// });

///////https://casper-wang.notion.site/JS-ac1997e6d83e4f92830aa2b2bcf90057
const people = [
    {
        name: '卡斯伯',
        order: '鍋燒意麵',
        price: 80
    },
    {
        name: '小明',
        order: '牛肉麵',
        price: 120
    },
    {
        name: '漂亮阿姨',
        order: '滷味切盤',
        price: 40
    },
    {
        name: 'Ray',
        order: '大麻醬乾麵',
        price: 60
    },
];

// 取出所有值（要一一列出每個人的訂單）
// people.forEach(function (obj, key) {
//     console.log(obj, key);

// });

// 2.陣列內的值調整（大家看到活動期間，新增價格 八折的屬性）
// const newOrders = [];
// people.forEach(function (obj, key) {
//     // newOrders.push(obj);
//     newOrders[key] = {
//         ...obj,
//         newPrice: obj.price * 0.8
//     }
// })

// console.log(newOrders);


// 2 new-1.陣列內的值調整（大家看到活動期間，新增價格 八折的屬性）
// const newOrders = people.map((obj,key)=>{
//     return {
//         ...obj,
//         newPrice:obj.price*0.8
//     }
// })

// 2 new-1 縮減map.陣列內的值調整（大家看到活動期間，新增價格 八折的屬性）
// const newOrders = people.map((obj,key)=>({

//     ...obj,
//     newPrice:obj.price*0.8

// }))


// console.log(newOrders);




// forEach3.過濾：老闆說，你們看錯啦，不過還是給個優惠
// 老闆說 80 元以上加送滷蛋
// const filterPeople = [];
// people.forEach((obj) => {
//     if (obj.price >= 80) {
//         filterPeople.push(obj);
//     }


// })
// console.log(filterPeople);




// filter 3.new 過濾：老闆說，你們看錯啦，不過還是給個優惠,除了forEach以外的map,filter的function形式都會要return東西，除非是=>就會自帶return不用寫
// 老闆說 80 元以上加送滷蛋
// const filterPeople = people.filter(function(obj,key){
//     return obj.price>=80;



// });
// console.log(filterPeople);

// filter+arrow 3.new 過濾：老闆說，你們看錯啦，不過還是給個優惠,除了forEach以外的map,filter的function形式都會要return東西，除非是=>就會自帶return不用寫
// 老闆說 80 元以上加送滷蛋
// const filterPeople = people.filter((obj)=>obj.price>=80);
// console.log(filterPeople);


// 4.找出特定位置的索引位置，老闆說牛肉沒了
// let index = 0;
// people.forEach((obj, key) => {
//     if (obj.order === "牛肉麵") {
//         obj.order = "牛肉湯麵";

//     }
// })

// console.log(index);
// console.log(people);

// findIndex 4.找出特定位置的索引位置，老闆說牛肉沒了
// const index = people.findIndex(function(obj){
//     return obj.order==="牛肉麵";
// })
// console.log(`index=${index}`);
// console.log(people);

// findIndex+arrow 4.找出特定位置的索引位置，老闆說牛肉沒了
// const index = people.findIndex((obj)=>
//     obj.order==="牛肉麵"
// )
// people[index].order="牛肉湯麵";

// console.log(`index=${index}`);
// console.log(people[index]);

// 5.組成 li 結構：老闆說 POS 機壞了，需要印發票，請幫忙組出 li 結構
// let htmlTemplate = '';
// people.forEach((obj, key) => {
//     htmlTemplate += `<li>
//     ${obj.order}, ${obj.price}


//     </li>`;

// })
// console.log(htmlTemplate);


// map 5.組成 li 結構：老闆說 POS 機壞了，需要印發票，請幫忙組出 li 結構
// const htmlTemplate = people.map(function (obj, key) {
//     return `<li>
//     ${obj.order}, ${obj.price}
//     </li>`

// }).join('');
// console.log(htmlTemplate);

// map+arrow 5.組成 li 結構：老闆說 POS 機壞了，需要印發票，請幫忙組出 li 結構
// const htmlTemplate = people.map((obj) => `<li>${obj.order}, ${obj.price}</li>`).join('');
// console.log(htmlTemplate);



// forEach 6.老闆要收錢啦
// let totalAmount = 0;
// people.forEach((obj, key) => {
//     totalAmount += obj.price;

// })
// console.log(totalAmount);


// reduce 6.老闆要收錢啦
// const totalAmount = people.reduce(function (acc, cur) {
//     return acc + cur.price;
// }, 0);
// console.log(totalAmount);


// reduce +arrow 6.老闆要收錢啦
// const totalAmount = people.reduce((acc, cur) => acc + cur.price, 0);
// console.log(totalAmount);

// // 7. 排序，今天誰吃最貴
// const peopleSort = people.sort((a, b) => a.price - b.price);
// console.log(peopleSort);

// const peopleSort2 = people.sort((a, b) => b.price - a.price);
// console.log(peopleSort2);


var ans3 = people.forEach(function (item, index) {
    console.log(`this = ${this}`) // 這邊的 this 就會使用後方傳入的
    return item.price < 80;
}, people);

console.log(ans3)