function component() {
  const element = document.createElement('pre');
  element.textContent = "hello world!"

  return element;
}

document.body.appendChild(component());
