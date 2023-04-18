export const required = (value : string) => {
    if(value) return undefined
    return "this field must be contain"
}

export const maxLenCreator = (maxLen : number) => (value : string) => {
    if(value.length > maxLen) return `max length is ${maxLen}`
    return undefined
}
export const maxLength30 = maxLenCreator(30)

