function createReactElem(element, container){
    const elem = document.createElement(element.type);
    for (const prop in element.props) {
        elem.setAttribute(prop, element.props[prop])
    }
    elem.innerHTML = element.innerHTML;
    container.appendChild(elem)
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
        class:'google'
    },
    innerHTML:'Visit google.com'
}

const mainContainer = document.querySelector('#root');
createReactElem(reactElement, mainContainer)