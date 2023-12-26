  
const oneOrMore = (num: number) => {
        const cl = num > 20 ? +(num.toString().slice(-1)) : num;
        const cz = cl === 1 ? 'у' : cl > 1 && cl < 4 ? 'и' : ''
        return cz
}
    
export default oneOrMore