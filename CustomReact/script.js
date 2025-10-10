function react_render(ele , addelement){
    const NewElement = document.createElement(addelement.type);

    NewElement.innerHTML = addelement.Children;

    for(id in addelement.props){
        NewElement.setAttribute(id , addelement.props[id]);
    }

    ele.appendChild(NewElement)
}


// This is how the element is stored in React
const addelement = {
    type: "a",
    props: {
        href: "https://www.youtube.com",
        target: "_blank"
    },
    Children: "Click Here"
}

const ele = document.getElementById("root");

//And when we render it using React , a new element is created in DOM

react_render(ele , addelement)