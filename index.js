
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

ReactDOM.render(
/* <div>
    <Rectangle/>
    <Circle/>

</div>, */
shape,
 document.getElementById("root")  
)