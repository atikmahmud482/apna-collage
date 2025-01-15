function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(("data", dataId));
      resolve("success");
    }, 3000);
  });
}
async function getAllData() {
  console.log("getting data 1");
  await getData(1);
  console.log("getting data 2");
  await getData(2);
  console.log("getting data 3");
  await getData(3);
  console.log("getting data 4");
  await getData(4);
}
getAllData();

// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });
