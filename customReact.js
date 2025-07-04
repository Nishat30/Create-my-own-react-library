
function customRender(reactElement,container){
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children

    /*domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)*/

    //we will write loop code
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        
    }

    // in react we write like this 
    // function myapp(){
    //   all the operations to be performed here
    //   because below everything is rendere as     
    //  object and no operation can be performed there
    //   return (<h1> hello </h1>)
    //}

    //this code is parse into the one which we have written throught bundler
    //in react these syntax are covered by bundler we simple use </> tag to integrate the function
    //we can also write <app/> as app() cause atleast this is a function only
      
    //the prop syntax is different in react 

    /*
      const reactElement= React.createElement(
        'a',
        {href:'http://google.com',
        target:"_blank"},
        'click me to visit google'
      )
     */

    container.appendChild(domElement)
}
const reactElement={
    type:'a',
    props:{
        href:'http://google.com',
        target:"_blank"
    },
    children:'Click me to visit google'
}
const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)
