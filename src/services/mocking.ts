
function makeId(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
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
            name: makeId(getRandomInt(20))
        })
    }
    return result;
}

export default function getResultItems(){
    const result = [];
    for (let i = 0; i < 100; i++){
        result.push({
            id: i,
            name: makeId(getRandomInt(20)),
            items: getItems(getRandomInt(10))
        })
    }
    return result;
}


