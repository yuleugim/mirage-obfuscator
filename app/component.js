export default (text = 'Hello world') => {
  let element = document.createElement('div')

  element.textContent = text

  return element
}
