// const heading=document.createElement("h1");
// heading.innerHTML="hello this is from script"

// const root=document.getElementById("root");
// root.appendChild(heading)


// Class Based component is old one not using 
// functional Based components are using right now which is updated one
//Component composition means placing on component into anothert component


const sandeep=()=><h1>this is first component</h1>
const bhargav=()=>{
     return
     <div>
     <sandeep />
     <h1>this is second component</h1>
     </div>
}

