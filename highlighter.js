const keywords = ['hatch egg', 'slep', 'squawk', 'chirp', 'new birb', 'is flying while', 'is', 'now', 'peck', 'feed',  'just',  'desires seed', 'eat seed if', 'throw seed away', 'no longer deesires seed',  'stop flying'];
const math_words = ['unfloof', 'megafloof', 'megaunfloof', 'ultrafloof', 'ultraunfloof', 'by', 'floof'];
const bitwise = ['or', 'and', 'not', 'floofy', 'floofier', 'as', 'than'];

function highlight(code) {
    
    let new_code = code;

    //highlighting numbers
    for (let n=0; n<=9; n++) {
        //new_code = new_code.replace(new RegExp(" (?<!<.*>)"+n+"(?!<\/.*>)", 'g'), '<num>'+n+'</num>');
        new_code = new_code.replace(new RegExp(n, 'g'), '<num>'+n+'</num>');
        console.log(new_code)
    }

        //highlighting strings 
        const strMatches = new_code.match(/[\"\'].*[\"\']/g);
        if(strMatches!=null&&strMatches.length!=0) {
            for (let match of strMatches) {
                new_code = new_code.replace(new RegExp(match,"g"),"<string>"+match+"</string>");
             }
        }
    
    

    //highlighting comments
    new_code = new_code.replace(/#/gi, "<comment>#").replace(/(?<=#.*)<br>/gi,'</comment><br>');

    //highlighting keywords, math words and bitwise operations
    for (let key of keywords) {
        new_code = new_code.replace(new RegExp(key, 'g'), "<key>"+key+'</key>');
    }
    
    for (let key of bitwise) {
        new_code = new_code.replace(new RegExp(key, 'g'), "<bitwise>"+key+'</bitwise>');
    }

    for (let key of math_words) {
        new_code = new_code.replace(new RegExp(key, 'g'), "<math>"+key+'</math>');
    }
    

    return new_code;

}