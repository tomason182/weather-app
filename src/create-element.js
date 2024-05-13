const createElementWithClassName = function (elementType, className) {
    const element = document.createElement(elementType);
    
    if (className) {
      element.classList.add(className); // Can add more than one class name separate with space.
    }
    
    return element
}

const handleSwitchBtn = function() {
  const celsiusBtn = document.querySelector('.celsius-container');
  const fahrenheitBtn = document.querySelector('.fahrenheit-container');

  celsiusBtn.classList.add('active');

  celsiusBtn.addEventListener('click', () => {
    if(celsiusBtn.classList.contains('active')) {
      return false;
    } else {
      celsiusBtn.classList.add('active');
      fahrenheitBtn.classList.remove('active');
      return true;
    }
  });

  fahrenheitBtn.addEventListener('click', () => {
    if(fahrenheitBtn.classList.contains('active')) {
      return false;
    } else {
      fahrenheitBtn.classList.add('active');
      celsiusBtn.classList.remove('active');
      return true;
    }
  });
}

export {
  createElementWithClassName,
  handleSwitchBtn
}