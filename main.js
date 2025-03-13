// code by Anhwaivo https://e-z.bio/anhwaivo pay me a visit :D
if (typeof listwordsstr === 'undefined') {
    let scripts = document.querySelectorAll('script');
    let elistwordsstr = '';
    for (let i = 0; i < scripts.length; i++) {
        let bscript = scripts[i].innerText || scripts[i].textContent;
        if (bscript.includes('listwordsstr')) {
            let match = bscript.match(/listwordsstr\s*=\s*"([^"]+)";/);
            if (match) {
                elistwordsstr = match[1]; 
            }
            break; 
        }
    }
    listwordsstr = elistwordsstr; 
}

if (listwordsstr) {
    wpair = listwordsstr.split("||||#|").map(item => item.split('|')); 
} else {
    console.error("listwordsstr bi sida."); 
}

function auto() {
    let element = document.querySelector('#htu p');
    if (!element) {
        console.log('Het cau hoi.');
        return;
    }
    let text = element.innerText || element.textContent;
    let qtext = text.trim().toLowerCase();
    console.log('Cau hoi:', qtext);
    let answer = null;
    for (let i = 0; i < wpair.length; i++) {
        let q1 = wpair[i][0].toLowerCase();
        let q2 = wpair[i][1].toLowerCase();
        if (qtext === q1 || qtext === q2) {
            answer = q1 === qtext ? q2 : q1; 
            break;
        }
    }

    if (answer) {
        console.log('cau tra loi:', answer);
        let spans = document.querySelectorAll('#grid4tu span');
        for (let j = 0; j < spans.length; j++) {
            if (spans[j].innerText.trim().toLowerCase() === answer) {
                spans[j].click(); 
                break;
            }
        }
    } else {
        console.log('k tim dc cau tra loi:');
    }

    setTimeout(() => {
        loop();
    }, 1000); 
}


function loop() {
    let cht = document.querySelector('#htu p');
    if (cht) {
        auto();
    } else {
        console.log('Het cau hoi.');
    }
}

auto();  
