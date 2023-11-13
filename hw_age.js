const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
 
async function main() {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question('กรุณากรอกอายุ:  ');
    let correctOrNot ="";
    if( Number(answer) < 18){
      console.log("Kid");
    }else{
      console.log("Adult");
    }
    rl.close();
    
}
main()