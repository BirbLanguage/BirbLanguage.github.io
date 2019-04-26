const comment = /#.*/g;
const strDblQuoted = /(?<!#.*)\".*\"/g;
const strSingleQuoted = /(?<!#.*)\'.*\'/g;
const nums = /(?<!([a-zA-Z])|#.*|[\"\'])\d(?![a-zA-Z])/g;
const keywords = /(?<!([a-zA-Z])|#.*|[\"\'].*)(hatch egg|slep|squawk|chirp|new birb|is flying while|is now|is mimic|peck|feed|just|desires seed|eat seed if|throw seed away|no longer desires|stop flying|mimic|breed of|at)(?![a-zA-Z])/g; 
const bitwise = /(?<!([a-zA-Z])|#.*|[\"\'])(or|and|not|floofy|floofier|as|than|just|is as|is not|is floofier)(?![a-zA-Z])/g;
const math_words = /(?<!([a-zA-Z])|#.*|[\"\'])(floof|unfloof|megafloof|megaunfloof|ultrafloof|ultraunfloof|by)(?![a-zA-Z])/g;

function highlight(code) {

    let new_code = code;

    new_code = new_code.replace(keywords, '<key>$&</key>') //highlighting keywords
                        .replace(strDblQuoted, '<string>$&</string>')     // highlighting strings
                        .replace(strSingleQuoted, "<string>$&</string>")
                        .replace(comment, '<comment>$&</comment>') //highlighting comments
                        .replace(nums, '<num>$&</num>')     //highlighting numbers
                        .replace(bitwise, '<bitwise>$&</bitwise>')  //highlighting bitwise operators
                        .replace(math_words, '<math>$&</math>'); //highlighting keywords of mathematical expressions

    return new_code.replace(/\n/g,'<br>')
    ;

} 
