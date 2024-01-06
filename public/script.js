let ram=document.getElementById("ram");
let battery=document.getElementById("battery");
let disk=document.getElementById("disk");
let sys_uptime=document.getElementById("system-up");

ram.addEventListener("click",(e)=>{
    let api=fetch("http://localhost:5000/resource")
    api.then((value)=>{
        return value.json()
    }).then((val)=>{
        console.log(val)
    })
})
   





























//     let newel=document.createElement("div");
//     newel.classList.add="table-container"
//     newel.innerHTML=`<div class="data">Dashboard
//     <div class="table-container">
//       <table>
//         <tr>
//           <th>Attribute</th>
//           <th>Value</th>
//         </tr>
//         <tr>
//           <td>Battery Percentage</td>
//           <td>68</td>
//         </tr>
//         <tr>
//           <td>Time to Full</td>
//           <td>-</td>
//         </tr>
//         <tr>
//           <td>Time to Empty</td>
//           <td>3.5 hours</td>
//         </tr>
//         <tr>
//           <td>Battery Status</td>
//           <td>Discharging</td>
//         </tr>
//         <tr>
//           <td>Battery Health</td>
//           <td>83.4278%</td>
//         </tr>
//         <tr>
//           <td>Power Consumption</td>
//           <td>5.767W</td>
//         </tr>
//         <tr>
//           <td>Battery Technology</td>
//           <td>Lithium-Polymer</td>
//         </tr>
//       </table>
//     </div>

//   </div>`
// })