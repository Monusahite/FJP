let cp=require("child_process");

// cp.execFileSync("code");
 
let content = cp.execSync("node test.js");
console.log(""+content);