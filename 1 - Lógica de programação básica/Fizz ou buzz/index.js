function FizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    } else if (numero % 3 === 0) {
        return 'Fizz';
    } else if (numero % 5 === 0) {
        return 'Buzz';
    } else {
        return `O ${numero} não é Fizz e nem é Buzz, tente novamente!!!`;
    }

}
console.log(FizzBuzz(1973));
