// Async programming



//1. setTimeout--------------------------

// const msg = () => {
//     console.log("How are you?");
// };

// console.log("Go to park");

// setTimeout(msg, 3000);

// console.log("Go to bank");





//2. callback-----------------------------

//logic 
// create a post
// fetch all posts

// const postsData = [   // array of posts data
//     {
//         title: "title 1",
//         desc: "desc 1",
//     },
//     {
//         title: "title 2",
//         desc: "desc 2",
//     },
//     {
//         title: "title 3",
//         desc: "desc 3",
//     },
// ];

// // fetch all posts

// function fetchPosts() {
//     console.log("Post is fetching");
//     console.log(postsData);
// }

// fetchPosts();

// // create posts
// function createPost(post, cb){
//     setTimeout(() => {
//         postsData.push(postsData);
//         cb();
//     }, 5000);
// };

// // invoke post

// createPost(
//     {
//     title: "title 4",
//     desc: "desc 4",
//     },
//     fetchPosts
// );



// 3. promise -----------------


const promise = new Promise((resolve, reject) => {
    let user = {
        name: 'limon',
        city: 'jessore',
    };
    
    let isFaced = true;
    if (isFaced == ture) {
        resolve();
    }
    else {
        reject();
    }
});
