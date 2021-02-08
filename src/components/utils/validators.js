export const requairedField = value => {
    if(value) return undefined
    return "field is reqaired"
}

// export const maxLength30 = value => {
//     if(value.length > 30) return "max value is 30"
//     return undefined
// }

export const maxLengthCreator = length => value => {
    if(value.length > length) return "max value is " + length
    return undefined
}