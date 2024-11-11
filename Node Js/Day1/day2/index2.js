
function otp() {
    return (Math.floor(Math.random() * 9000 + 1000));
}


console.log(otp)

module.exports={
    otp
}