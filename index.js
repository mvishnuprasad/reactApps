
ReactDOM.render(<ul>
    <li>One</li>
    <li>Two</li>
</ul>, document.getElementById("root"));

// take the root id and append the content to it


function Rectangle(){
    return(
<div className ="rect">

   <div id ="rectangle">
       <h1 >Rectangle</h1>
       <p>In Euclidean plane geometry, a rectangle is a quadrilateral with four right angles.       </p>
       </div>
</div>

    )
}

const shape= (
    <p>
        The shape can be defined as the boundary or outline of an object. 
        It is the surface we see and does not depend on the size or the color of the object.
         Everything around us has a different shape, such as the square, rectangle, or three-dimensional sphere. 
    </p>
)


function Circle(){
    return(
<div className ="rect">

   <div id ="rectangle">
       <h1 >Circle</h1>
       </div>
</div>

    )
}

console.log(shape);

const navbar = (
    <nav>
        <h1>Navbar</h1>
        <ul>

            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
    </nav>
)
const js = (
    <div>
        <h1>Li River</h1>
        <p>The Li River or Li Jiang (Chinese: 漓江; pinyin: Lí Jiāng)
             is the name for the upper reaches of the Gui River in northwestern Guangxi, China. It is part of the Xijiang River system in the Pearl River Basin. The river flows 164 kilometres (102 mi) from Xing'an County to Pingle County, 
            where the karst mountains and river sights highlight the famous Li River cruise.</p>
            <ul>
                <li>The Li River originates in the Mao'er Mountains in Xing'an County </li>
                <li>The Li River is the longest river in the world</li>
                <li>The Li River is the second longest river in China</li>

            </ul>
    </div>
)

ReactDOM.render(
/* <div>
    <Rectangle/>
    <Circle/>

</div>,
shape, */
navbar,
 document.getElementById("root")  
)


document.getElementById("root").append(JSON.stringify(js))


//jsx return plain js object . but reactdom turns it into real DOM elements