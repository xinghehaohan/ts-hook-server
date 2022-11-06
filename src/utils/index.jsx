export const isFlasy =(value)=> value === 0?false:!value;
export const cleanObject =(object)=>{
    const res = {...object}
    Object.keys(res).forEach((key)=>{
        const val = res[key];
        if(isFlasy(val)){
            delete res[key]
        }
    });
    return res;
}