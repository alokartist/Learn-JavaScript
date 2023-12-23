let a=["root@alok:/# apt installing......",
".....Insatlling completed......","STARTED FETCHING DATA....","3SEC","2SEC","1SEC","0SEC","Reading package lists....... ","...DONE...","Building dependency tree....","0 upgraded, 1 newly installed, 0 to remove and 4 to not upgraded.","Need to get 293 kB of archives ,","After this operation,956kB of additional disk space will be used...","........................","Started fetching...whole internal storage data","Username : Alok kumar","Unlocking Phone....","Trying to crack....3....2....1....0.....","Finally got the PIN","PIN lock : 2525","Gmail fetching.....","User mail- xyz@gmail.com","Username detected...",
"Trying Brute Force...",
"200K passwords tried...",
"Match not found",
"Another 200K passwords tried...",
"Match not found...",
"Another 200K passwords tried...",
"Match not found...",
"Another 200K passwords tried...",
"Match found...",
"Accessing Account...",
"Hack Successful..."
];
const sleep = async (seconds) => {
        return new Promise((resolve, reject) => {
                setTimeout(() => { resolve(true) }, seconds * 1000)
        })
}

const showHack = async (message) => {
        await sleep(2)
        // console.log(message)
        text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
        for (let i = 0; i < a.length; i++) {
                await showHack(a[i])
        }
})()