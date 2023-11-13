const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
 
async function main() {
    const rl = readline.createInterface({ input, output });
    const Random = Math.floor(Math.random() * 101);
    console.log(Random);
    let numm = 0;

    while(true){
        const answer = parseInt(await rl.question('กรุณากรอกหมายเลข 1- 100:  '));
        numm++;
        console.log(answer);

        if(answer === Random){
            console.log("คุณทายถูก!");
            break;
          }else if(answer < Random){
            console.log("มากกว่านี้");
          }else{
            console.log("น้อยกว่านี้");
          }
    }
    
    rl.close();
}
main()