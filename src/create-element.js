const createElementWithClassName = function (elementType, className1, className2) {
    const element = document.createElement(elementType);
    
    if (className1) {
      element.classList.add(className1); // Can add more than one class name separate with space.
    }
    if (className2) {
      element.classList.add(className2);
    }
    
    return element
}
export {
  createElementWithClassName
}