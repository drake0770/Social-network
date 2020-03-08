export const emptyField =(value)=>{
    if(value) return undefined;
    return 'Field cannot be empty';
}

export const maxLength = (size) => (value) => {

    if(value.length > size) return `Text cannot be longer than ${size} symbols`;

    return undefined;
}