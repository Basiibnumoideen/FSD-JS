// const orginalObj = { name :'alice',age:30}
// const copyObj = orginalObj;
// copyObj.age=25;
// console.log(copyObj);
// console.log(orginalObj)


// const arr1=[1,2,3,4];
// const arr2=arr1;

// arr2.push(5);
// console.log(arr2);
// console.log(arr1); //reference


// spread operator
// const arr1=[1,2,3,4];
// const arr2=[...arr1];

// arr2.push(5);
// console.log(arr2);
// console.log(arr1);

// const arr1=[1,2,3,];
// const arr2 =[4,5,6];
// const mergedArr=[...arr1,...arr2];
// console.log(mergedArr);
// const expeArr=["a",...arr1,...arr2,50];
// console.log(expeArr);

// sorting 
// const randomNum = [12,23,4,36,54]
// const sortNum = [...randomNum].sort((a,b)=>a-b);
// console.log(sortNum);
// console.log(randomNum);

// const userBasicDetails = {
//     name:"alice",
//     age:25,
//     gender:"f"
// }

// const userAddressDetails = {
//     city :"Malappuram",
//     pincode : 673639,
//     state : "keralam",
// }

// const userDetails ={...userBasicDetails,...userAddressDetails}
// console.log(userDetails);

// const updatedUserBasic ={...userBasicDetails,age:30,father:"john"}

// console.log(updatedUserBasic);S


// // nested obj
// const user = {
//     name:"alice",
//     age:25,
//     gender:"f",
//     address: {
//         city :"Malappuram",
// //       pincode : 673639,
// //      state : "keralam",
//     },
// };

// const cpyUser ={...user};


// cpyUser.age =30;
// cpyUser.address.city="kollam";
// console.log(cpyUser);
// console.log(user);

// const target = {
//     a:1,
// };

// const source = {
//     b:2,
//     c:3
// }

// const res = Object.assign(target,source);
// console.log(res);

// const user ={
//     name:"akhil",
//     age:20

// };

// Object.freeze(user);
// user.name ="arun";
// console.log(user);