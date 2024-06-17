// Ultra conserved elements go here:
const query1 = "TCACA";
const query2 = "TCGGG";

// Start coordinates of different genes go here:
const coordsA = 3;
const coordsB = 10;
const coordsC = 22;

// Define your colors:
const color1 = "yellow";
const color2 = "salmon";
const color3 = "green";
const color4 = "blue";

const inText = document.getElementById("textIn");
const outText = document.getElementById("textOut");
const finderBtn = document.querySelector(".btn");
const annot = document.getElementById("annotation");

finderBtn.addEventListener("click", ()=> {
    // If the first query sequence is found, mark that location (i) and figure out the offset from the beginning:
    if (inText.value.indexOf(query1) != -1) {
        var i = inText.value.indexOf(query1);
        var offset = 7 - i;
        var absOffset = Math.abs(offset);

        // Slice up the sequence according to the now known coordinates:
        let sectionA = inText.value.slice(0,(coordsA-absOffset));
        let sectionB = inText.value.slice((coordsA-absOffset),(coordsB-absOffset));
        let sectionC = inText.value.slice((coordsB-absOffset),(coordsC-absOffset));
        let sectionD = inText.value.slice((coordsC-absOffset),-1);

        // Display an annotation key:
        annot.insertAdjacentHTML('beforeend', '<span style="background-color: ' + color1 + '">gag</span>')
        annot.insertAdjacentHTML('beforeend', '<span style="background-color: ' + color2 + '">pol</span>')
        annot.insertAdjacentHTML('beforeend', '<span style="background-color: ' + color3 + '">whatever else</span>')
        annot.insertAdjacentHTML('beforeend', '<span style="background-color: ' + color4 + '">more</span>')

        // Display the color coded sequence:
        let html1 = '<span style="background-color: ' + color1 + '">' + sectionA + '</span>';
        let html2 = '<span style="background-color: ' + color2 + '">' + sectionB + '</span>';
        let html3 = '<span style="background-color: ' + color3 + '">' + sectionC + '</span>';
        let html4 = '<span style="background-color: ' + color4 + '">' + sectionD + '</span>';
        outText.insertAdjacentHTML('beforeend',html1);
        outText.insertAdjacentHTML('beforeend',html2);
        outText.insertAdjacentHTML('beforeend',html3);
        outText.insertAdjacentHTML('beforeend',html4);

    }
    else if (inText.value.indexOf(query2) != -1) {
        outText.value = inText.value.indexOf(query2);
    }
    else {
        outText.value="Sorry, no match found :(";
    }

})

