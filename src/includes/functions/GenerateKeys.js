
const generate_random_key = (stellen_length = 1) => {
    let number = generate_random_nums()
    let letter = generate_random_letters()
    let array = []
    for (let index = 0; index < stellen_length; index++) {
        number = generate_random_nums()
        letter = generate_random_letters()
        array.push(number, letter)
    }
    

    return array.join('')
}

const generate_random_letters = (valid_chars_string=null) => {
        const letter = valid_chars_string ?? 'abcdefghijklmnopqrstuvwxyz?!#%$&';
        const number1 = Math.floor(Math.random(1) * letter.length)
        return letter[number1]
}
const generate_random_nums = (counter=0) => {
    const number = counter ?? 9
    const random_int = Math.floor(Math.random(1) * number)
    return random_int
}

export default {
    generate_random_key,
    generate_random_letters,
    generate_random_nums
};