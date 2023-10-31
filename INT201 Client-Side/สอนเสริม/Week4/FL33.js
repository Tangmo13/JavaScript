let user = [
    {
        id:1,
        name:"Ying",
        favorite:["Apple"]
    },
    {
        id:2,
        name:"Karn",
        favorite:["Banana"]
    },
    {
        id:3,
        name:"Sun",
        favorite:["Jackfruit"]
    },
]

let fruits = [
    ["Orange"],["Pear"],["Durian","Pineapple"]
]

// user.length = 3
// fruits.length = 3
// Remember, DON'T CHANGE THE ORIGINAL FAVORITE!!!
// Note : Use Spread Operator (...)

// Console.log format
// console.log("Name : " + user[i].name + "\nFavorite : " + user[i].favorite)

// -----------------------  Start your code here!   --------------------------


for (let i = 0; i < user.length; i++) {
    user[i].favorite = [...user[i].favorite, ...fruits[i]]
    console.log("Name : " + user[i].name + "\nFavorite : " + user[i].favorite)
    console.log(user[i].favorite)
}




// ---------------------------  End of the code   -----------------------------

// Result ----------------------
// Name : Ying
// Favorite : Apple,Orange
// Name : Karn
// Favorite : Banana,Pear
// Name : Sun
// Favorite : Jackfruit,Durian,Pineapple