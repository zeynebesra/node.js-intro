/*
//1.
function topla(a, b) {
  return a + b;
}
*/

/*
// 2.
const topla = (a, b) => {
  return a + b;
};
*/

//3.
const topla = (a, b) => a + b;

const cikar = (a, b) => a - b;

const hello = (name) => {
  console.log("Merhabalar " + name);
};

export const text = "Text";

export const user = {
  name: "Zeyneb",
  surname: "Öztürk",
};

export { hello, topla, cikar }; // fonk dışa aktarıyoruz.
