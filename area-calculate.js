function calculateTriangleArea(){
    // triangle base
    const baseField = document.getElementById('triangle-base');
    const baseValueTextString = baseField.value;
    const baseValueTextNumber = parseFloat(baseValueTextString);
    baseField.value = '';
    
    // triangle height
    const heightField = document.getElementById('triangle-height');
    const heightValueString = heightField.value;
    const heightValue = parseFloat(heightValueString);
    heightField.value = '';

    if(isNaN(baseValueTextNumber) || isNaN(heightValueString)){
        alert('please give me valid number');
        return;
    }
    
    // area
    const area = 0.5 * baseValueTextNumber * heightValue;
    
    // triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    const rectangleWidthField = document.getElementById('rectangle-width');
    const rectangleWidthValueString = rectangleWidthField.value;
    const rectangleWidthValue = parseFloat(rectangleWidthValueString);

    const rectangleHeighthField = document.getElementById('rectangle-height');
    const rectangleHeighthFieldValueString = rectangleHeighthField.value;
    const rectangleHeighthFieldValue = parseFloat(rectangleHeighthFieldValueString);

    if(isNaN(rectangleWidthValue) || isNaN(rectangleHeighthFieldValue)){
        alert('please give me valid number');
        return;
    }

    const rectangleArea = rectangleWidthValue * rectangleHeighthFieldValue;

    const spanArea = document.getElementById('rectangle-area');
    spanArea.innerText = rectangleArea;
}



function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const fieldTotal = base * height;
    getTextValueById('parallelogram-area', fieldTotal);
    if(isNaN(base) || isNaN(height)){
        alert('please insert a number');
        return;
    }

    calculationEntry('Parallelogram', fieldTotal);
    
}
function calculateEllipseArea(){
    const ellipseA = getInputValueById('a-Ellipse');
    const ellipseB = getInputValueById('b-Ellipse');
    const totalEllipse = 3.14 * ellipseA * ellipseB;
    const towDecimal = totalEllipse.toFixed(2);
    getTextValueById('ellipse-area', towDecimal);

    calculationEntry('Ellipse', towDecimal);
}


// reuseable function for all field
function getInputValueById(fieldId){
    const field = document.getElementById(fieldId);
    const fieldValueString = field.value;
    const fieldValue = parseFloat(fieldValueString);
    return fieldValue;
}
// reuseable function innerText
function getTextValueById(textId, areValue){
    const text = document.getElementById(textId);
    text.innerText = areValue;
}

function calculationEntry(araType, area){
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}.  ${araType}  ${area} cm<sup>2</sup> <button class="btn btn-secondary btn-sm">Convert</button>`;
    calculationEntry.appendChild(p)
}