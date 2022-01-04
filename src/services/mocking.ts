const testWord = process.env.TEST_WORD;
console.log('test word:', testWord);


function randomName(length: number) {
    let result  = '';
    const words = ["Love", "Secret", "English", "Result", "Auto", "TypeScript", "JavaScript", testWord || "Station"];
    for ( let i = 0; i < length; i++ ) {
        result += words[Math.floor(Math.random() * words.length)];
    }
    return result;
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function getItems(count: number){
    const result = [];
    for (let i = 0; i < count; i++){
        result.push({
            id: i,
            name: randomName(getRandomInt(5))
        })
    }
    return result;
}

export default function getResultItems(){
    const result = [];
    for (let i = 0; i < 100; i++){
        result.push({
            id: i,
            name: randomName(getRandomInt(6)),
            items: getItems(getRandomInt(10))
        })
    }
    return result;
}


