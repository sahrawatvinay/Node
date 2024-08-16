const greet = (fullName) => {
    console.log(`Good morning ${fullName} !!!`);
};

const userInfo = (fn, ln, callback) => {
    const fullname = fn + ln;
    callback(fullname);
};

userInfo("Vinay", "Sahrawat", greet);