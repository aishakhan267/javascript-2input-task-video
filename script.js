function check(){
    // console.log('it is possible');
    /*1.access of input HTML element.
    2.get value of input HTML element.
    3.access to h1 element.
    4.change content of h1 element.*/

    // 1.access of input HTML element
    let inputElement = document.querySelector('input');
    console.log('inputElement');
    // 2.get value of input HTML element.
    let inputValue = inputElement.value;
    console.log(inputValue);
    // 3.access to h1 element
    let headingElement = document.querySelector('h1 span:nth-child(1)');
    console.log(headingElement);
    // 4.change content of h1 element
    document.querySelector('h1 span').innerHTML=inputValue;
    
    // let
     document.querySelector('h1>span:nth-child(1)').innerHTML = document.querySelector('#fName').value;
     document.querySelector('h1>span:nth-child(2)').innerHTML = document.querySelector('#lName').value;

}