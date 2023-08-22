function calculateTriangleArea(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseValueString = triangleBase.value;
    const triangleBaseValue = parseFloat(triangleBaseValueString);
    triangleBase.value = '';

    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightValueString = triangleHeight.value;
    const triangleHeightValue = parseFloat(triangleHeightValueString);
    triangleHeight.value = '';

    const triangleArea = document.getElementById('triangle-area');

    const totalElement = 0.5* triangleHeightValue * triangleBaseValue;
    triangleArea.innerText = totalElement;

    if(isNaN(totalElement)){
        alert('please insert a number');
        return;
    }
    calculationEntry('Triangle', totalElement);
}
function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthValueString = rectangleWidth.value;
    const rectangleWidthVale = parseFloat(rectangleWidthValueString);
    rectangleWidth.value = '';

    const rectangleHeight = document.getElementById('rectangle-height');
    const rectangleHeightValueString = rectangleHeight.value;
    const rectangleHeightValue = parseFloat(rectangleHeightValueString);
    rectangleHeight.value = '';

    const totalArea = document.getElementById('rectangle-area');

    const totalRectangle = rectangleHeightValue * rectangleWidthVale;
    totalArea.innerText = totalRectangle;
    if(isNaN(totalRectangle)){
        alert('please provide number');
        return;
    }
    calculationEntry('Rectangle', totalRectangle);
}
function calculateParallelogramArea(){
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramVS = parallelogramBase.value;
    const parallelogramV = parseFloat(parallelogramVS);
    parallelogramBase.value = '';

    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHVS = parallelogramHeight.value;
    const parallelogramHV = parseFloat(parallelogramHVS);
    parallelogramHeight.value = '';

    const parallelogramArea = document.getElementById('parallelogram-area');
    
    const totalParallelogram = parallelogramHV * parallelogramV;
    parallelogramArea.innerText = totalParallelogram;
    if(isNaN(totalParallelogram)){
        alert('please provide number');
        return;
    }
    calculationEntry('Parallelogram', totalParallelogram);
}
function calculateRhombusArea(){
    const rhombusA = document.getElementById('a-rhombus');
    const rhombusAValueString = rhombusA.value;
    const rhombusAValue = parseFloat(rhombusAValueString);
    rhombusA.value = '';

    const rhombusB = document.getElementById('b-rhombus');
    const rhombusBValueString = rhombusB.value;
    const rhombusBValue = parseFloat(rhombusBValueString);
    rhombusB.value = '';

    const rhombusBArea = document.getElementById('rhombus-area');

    const totalRhombusArea = rhombusAValue * rhombusBValue;
    rhombusBArea.innerText = totalRhombusArea;
    if(isNaN(totalRhombusArea)){
        alert('please provide number');
        return;
    }
    calculationEntry('Rhombus', totalRhombusArea);

}
function calculatePentagonArea(){
    const pentagonA = document.getElementById('a-Pentagon');
    const pentagonAVString = pentagonA.value;
    const pentagonAVS = parseFloat(pentagonAVString);
    pentagonA.value = '';

    const pentagonB = document.getElementById('b-Pentagon');
    const pentagonBV = pentagonB.value;
    const pentagonBVS = parseFloat(pentagonBV);
    pentagonB.value = '';

    const pentagonArea = document.getElementById('pentagon-area');

    const totalPentagon = 0.5 * pentagonBVS * pentagonAVS;
    pentagonArea.innerText = totalPentagon;

    if(isNaN(totalPentagon)){
        alert('please provide number');
        return;
    }
    calculationEntry('Pentagon', totalPentagon);
}
function calculateEllipseArea(){
    const ellipseA = getElementValueById('a-Ellipse');
    const ellipseB = getElementValueById('b-Ellipse');
    const totalEllipse = 3.14 * ellipseB * ellipseA;
    const towDecimal = totalEllipse.toFixed(2);
    getTextValueById('ellipse-area', towDecimal);

    if(isNaN(towDecimal)){
        alert('please provide number');
        return;
    }
    calculationEntry('Rhombus', towDecimal);
}


// this input value for all function
function getElementValueById(elementId){
    const fieldValue = document.getElementById(elementId);
    const fieldValueString = fieldValue.value;
    const fieldValueS = parseFloat(fieldValueString);
    fieldValue.value = '';
    return fieldValueS;
}
// this text value for all function
function getTextValueById(textId, areValue){
    const textValueString = document.getElementById(textId);
    textValueString.innerText = areValue;
}

function calculationEntry(typeArea, area){
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4')
    p.classList.add('pl-5')
    p.classList.add('font-semibold')
    p.innerHTML = `${count +1}. ${typeArea}. ${area}cm <sup>2</sup> <button class="btn-secondary btn-sm rounded-md  font-semibold">Convert</button>`
    calculationEntry.appendChild(p)
}