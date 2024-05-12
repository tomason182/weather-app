const createElementWithClassName = function (elementType, className) {
    const element = document.createElement(elementType);
    
    if (className) {
      element.classList.add(className); // Can add more than one class name separate with space.
    }
    
    return element
}

export {
    createElementWithClassName
}

