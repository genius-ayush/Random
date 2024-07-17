function customRender(root , reactElement){

    var element = document.createElement(reactElement.type) ;
    for (const prop in reactElement.props) {
        if(prop == "children")continue
        element.setAttribute(prop , reactElement.props[prop]) ; 
    }
    // element.setAttribute('href' , reactElement.props.href) ; 
    // element.setAttribute('target' ,reactElement.props.target) ; 
    element.innerHTML = reactElement.children ;
    root.appendChild(element) ; 

}

const reactElement = {
    type : "a" , 
    props : {
        href : "https://google.com" , 
        target : "_blank" 
    },
    children : "Click me to visit google" 
}

const mainConatiner = document.querySelector("#root") ;

customRender(mainConatiner , reactElement)
