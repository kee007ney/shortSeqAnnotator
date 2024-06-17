const inText = document.getElementById("textIn");
const outText = document.getElementById("textOut");
//const query1 = new RegExp("TCACA");
//const query2 = new RegExp("TCGGG");
const query1 = "TCACA";
const query2 = "TCGGG";
const coordsA = 3;
const coordsB = 10;
const coordsC = 22;
const finderBtn = document.querySelector(".btn");
const annot = document.getElementById("annotation");

//function regexIndexOf(text, re, i) {
//    var indexInSuffix = text.slice(i).search(re);
//    return indexInSuffix < 0 ? indexInSuffix : indexInSuffix + i;
//}


finderBtn.addEventListener("click", ()=> {
    //alert(query1);
    if (inText.value.indexOf(query1) != -1) {
        var i = inText.value.indexOf(query1);
        var offset = 7 - i;
        var absOffset = Math.abs(offset);
        //        outText.insertAdjacentHTML('beforeend','<span style="background-color: yellow">'+sectionA+'</span><span style="background-color: salmon">Thing 2</span><span style="background-color: green">Thing 3</span>',);
        //        outText.insertAdjacentHTML('beforeend','<span style="background-color: yellow">'+sectionA+'</span><span style="background-color: salmon">Thing 2</span><span style="background-color: green">Thing 3</span>',);
        //        alert(absOffset);
        
        //console.log (inText.value);
        //console.log (inText.value.slice(0,2));
        //console.log (inText.value.slice(0,(coordsA-absOffset)));
        let sectionA = inText.value.slice(0,(coordsA-absOffset));
        let sectionB = inText.value.slice((coordsA-absOffset),(coordsB-absOffset));
        let sectionC = inText.value.slice((coordsB-absOffset),(coordsC-absOffset));
        let sectionD = inText.value.slice((coordsC-absOffset),-1);
        
        /*
        // For testing:
        let sectionA = 'ACGTGTACGTCACAGTCAGT';
        let sectionB = 'ACGTGTACGTCACAGTCAGT';
        let sectionC = 'ACGTGTACGTCACAGTCAGT';
        let sectionD = 'ACGTGTACGTCACAGTCAGT';
        */
       annot.insertAdjacentHTML('beforeend', '<span style="background-color: yellow">gag</span>')
       annot.insertAdjacentHTML('beforeend', '<span style="background-color: salmon">pol</span>')
       annot.insertAdjacentHTML('beforeend', '<span style="background-color: green">whatever else</span>')
       annot.insertAdjacentHTML('beforeend', '<span style="background-color: blue">more</span>')
       let html1 = '<span style="background-color: yellow">' + sectionA + '</span>';
       let html2 = '<span style="background-color: salmon">' + sectionB + '</span>';
       let html3 = '<span style="background-color: green">' + sectionC + '</span>';
       let html4 = '<span style="background-color: blue">' + sectionD + '</span>';
       outText.insertAdjacentHTML('beforeend',html1);
       outText.insertAdjacentHTML('beforeend',html2);
       outText.insertAdjacentHTML('beforeend',html3);
       outText.insertAdjacentHTML('beforeend',html4);
//        outText.value = sectionA + sectionB + sectionC + sectionD;
    }
    else if (inText.value.indexOf(query2) != -1) {
        outText.value = inText.value.indexOf(query2);
    }
    else {
        outText.value="Sorry, no match found :(";
    }

})


/*
$('#btn').click(function () {
    //var a = $('#inp').val();
    var b = inText.val();
    alert(b);
    while (b.indexOf(query1) != -1) {
        b = b.replace(query1, '[X]');
    }
    while (b.indexOf('[X]') != -1) {
        b = b.replace('[X]', '<span style="color:yellow;">' + query1 + '</span>');
    }
    outText.html(b);

});

*/

//    if ( inText.value.match(query1) == null && inText.value.match(query2) == null ) {
//        outText.value="Sorry, no match found :(";
//    }
//    else {
//        outText.value = inText.value.indexOf(query1);
//    }