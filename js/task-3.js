function getElementWidth(content, padding, border) {
    const paddingTwoSides = parseFloat (padding) * 2;
    const borderTwoSides = parseFloat (border) * 2;
    return parseFloat(content) + paddingTwoSides + borderTwoSides
}
getElementWidth()
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 