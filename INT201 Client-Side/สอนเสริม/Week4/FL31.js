let user = [
    {
        id:1,
        name:"Ying",
        favorite:[]
    },
    {
        id:2,
        name:"Karn",
        favorite:[]
    },
    {
        id:3,
        name:"Sun",
        favorite:[]
    },
]

let fruits = [
    "Apple","Banana","Jackfruit"
]

// user.length = 3
// fruits.length = 3

// Console.log format
// console.log("Name : " + user[i].name + "\nFavorite : " + user[i].favorite)

// -----------------------  Start your code here!   --------------------------


for (let i = 0; i < fruits.length; i++) {
    
    // Incorrect way
    // user[i].favorite = fruits[i] ->  เรียกแค่ String มาเฉยๆ

    // Method 1
    user[i].favorite = [fruits[i]] // -> เรียก String ที่มี [] ครอบ (เอา array มารองรับ String)


    console.log("Name : " + user[i].name + "\nFavorite : " + user[i].favorite)
    // console.log(user[i].favorite)
}



// ---------------------------  End of the code   -----------------------------

// Result ----------------------
// Name : Ying
// Favorite : Apple
// Name : Karn
// Favorite : Banana
// Name : Sun
// Favorite : Jackfruit