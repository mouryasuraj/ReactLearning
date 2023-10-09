function customReactRender(reactElement, container){
    /*
    const elem = document.createElement(reactElement.type);
    elem.innerHTML = reactElement.innerHTML;
    // Here we have a simple problem that if we have multiple attributes then we can't write each one of them. SO, we can create a better version of this code.
    elem.setAttribute('href', reactElement.props.href);
    elem.setAttribute('target', reactElement.props.target);
    container.appendChild(elem);
    */

    
    // Better version of above code
    const elem = document.createElement(reactElement.type);
    elem.innerHTML = reactElement.innerHTML;
    for (const prop in reactElement.props) {
    //    if(prop === 'innerHTML') continue;    //It is not mandatory because we haven't wrote innerHTML in props object. This is for understanding purpose that early days innerHTML or Children property was written in props object thats why we have to write this if statement
        elem.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(elem)
}



const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
        class:'anchorTag'
    },
    innerHTML:'Go to google.com'
}


const mainContainer = document.querySelector('#root');

customReactRender(reactElement, mainContainer)