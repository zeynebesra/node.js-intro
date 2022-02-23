// 2 sn sonra yazılacak
// setTimeout(() => {
//   console.log("Merhaba");
// }, 2000);

// 1 sn de bir yazdıracak.
// setInterval(() => {
//   console.log("Ben her saniye de çalışacağım.");
// }, 1000);

//parametre olarak fonksiyon
// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => {
//   console.log("Hi");
// });

//fetch : veri kaynağına bağlanıp endpoint veriyi gösterir.
import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json()) // jsona çevirdir parse edip
//   .then((users) => console.log(users));

// önce users sonra postlar yüklenecek.
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users yüklend !.", users);

//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((data) => data.json())
//       .then((posts) => console.log("Postlar Yüklendi !.", posts));
//   });

// async-await
// async function getData() {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   const posts = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts")
//   ).json();

//   console.log("users", users);
//   console.log("posts", posts);
// }

// getData();

//anonim fonksiyon ile
// (async () => {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   const posts = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts")
//   ).json();

//   console.log("users", users);
//   console.log("posts", posts);
// })();

//axios ile (fetch yerine)
// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const { data: posts } = await axios(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   console.log("users", users);
//   console.log("posts", posts);
// })();

//Promises

const getUsers = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
    //reject("Bir sorun var.");
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts" + post_id
    );
    resolve(data);
    //reject("Bir sorun daha var.");
  });
};

// (async () => {
//   try {
//     const users = await getUsers();
//     const post = await getPost(1);

//     console.log(users);
//     console.log(post);
//   } catch (e) {
//     console.log(e);
//   }
// })();

Promise.all([getUsers(), getPost(1)]);
