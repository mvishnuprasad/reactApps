
//ReactDOM.render(Any Item Here    , document.getElementById("root"));

// take the root id and append the content to it
//CUSTOM COMPONENTS
//React components are functions that returns react elements
//THey should be in PascalCase

//document.getElementById("root").append(JSON.stringify(js))


//jsx return plain js object . but reactdom turns it into real DOM elements

//Using JSX like this is not recommended, since all jsx elements to be nested under a single parent element.
//import Shapes from "./Shape.js";

function Page() {
    return (
        <div>
        
<h1>Test</h1>
        </div>
    )
}

ReactDOM.render(

    <Page />,
    document.getElementById("root")
)



