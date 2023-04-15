
function returnIsAdult(list) {
    const returnIsAdult = list.map((index) => {
        const isAdult = index.age >= 18;
        return { name: index.name, isAdult: isAdult };
    });
    return returnIsAdult;
}


console.log(returnIsAdult(list))