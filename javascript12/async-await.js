function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(("data", dataId));
      resolve("success");
    }, 2000);
  });
}
