const list = [
    { name: "Leandro", age: 33 },
    { name: "Juliene", age: 28 },
    { name: "Olivia", age: 8 }
]

function returnIsAdult(list) {
    const returnIsAdult = list.map((index) => {
        const isAdult = index.age >= 18;
        return { name: index.name, isAdult: isAdult };
    });
    return returnIsAdult;
}

console.log(returnIsAdult(list))
