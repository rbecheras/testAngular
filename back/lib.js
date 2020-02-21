module.exports.formMaxNumberFromPhoneNumber = function formMaxNumberFromPhoneNumber(phoneNumber) {
    let numberArray = [phoneNumber[0] + phoneNumber[1], phoneNumber[2]]
    for (let i = 3; i < phoneNumber.length - 1; i = i + 2) {
        numberArray.push(phoneNumber[i] + phoneNumber[i + 1])
    }
    const sorted = numberArray.sort((a, b) => {
        const aMax = Number(a) > 9 ? Number(a) : Number(a + 0)
        const bMax = Number(b) > 9 ? Number(b) : Number(b + 0)
        return bMax > aMax
    })
    return Number(sorted.join(''))
}