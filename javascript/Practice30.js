/*try {
        let a = 0;
        // console.log(program)
        console.log("Program ran successfully")
        return
}
catch (err) {
        console.log("This is an error")
        console.log(p)
}
finally {
        console.log("I am a good boy")
        // Close the file
        // Exit the Loop
        // Write to the log file
}
*/

//if there is an error in try& catch both then finally will be runned...if not then also finally will be executed
//although the try,catch & finally is kept in function also 


const f = () => {
        try {
                let a = 0;
                console.log("Program ran successfully")
                return
        }
        catch (err) {
                console.log("This is an error")
                console.log(p)
        }
        finally {
                console.log("I am a good boy")
        }
}
f() //on returning the value also the finally will be run 
console.log("End")