const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Vinay", age: 28, result: "resolved after 2 seconds !" });
        }, 2000);
    })
};

getData().then((result) => {
    console.log("result after 2 seconds -> ", result);
}).catch((ex) => {
    console.log("Inside catch -> ", ex);
});