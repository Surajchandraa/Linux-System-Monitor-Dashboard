let ram=document.getElementById("ram");
let battery=document.getElementById("battery");
let disk=document.getElementById("disk");
let syst=document.getElementById("system");
let data=document.getElementsByClassName("data")[0];
let top_el=document.getElementsByClassName("top")[0];

let intervalId;

ram.addEventListener("click",(e)=>{
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
    let api=fetch("http://localhost:5000/resource")
    api.then((value)=>{
        return value.json()
    }).then((val)=>{

        data.innerHTML=''
        let newel=document.createElement("div");
        // newel.classList.add("table-container")
        newel.innerHTML=`Dashboard<table><tr><th>Attribute</th><th>Value</th></tr><tr><td>Free Ram</td><td>${val[0].free_Ram}</td></tr><tr><td>Total Ram</td><td>${val[0].Total_Ram}</td> </tr></table>`
        data.appendChild(newel)
    })
},1000);
})
   

battery.addEventListener("click",(e)=>{
    clearInterval(intervalId)
    intervalId=setInterval(()=>{
        let api=fetch("http://localhost:5000/resource")
        api.then((value)=>{
            return value.json()
        }).then((val)=>{
    
            data.innerHTML=''
            let newel=document.createElement("div");
            newel.classList.add="table-container"
            newel.innerHTML=`Dashboard<table>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>Battery Percentage</td>
              <td>${val[1].battery_percentage}</td>
            </tr>
            <tr>
              <td>Time to Full</td>
              <td>${val[1].Time_to_full}</td>
            </tr>
            <tr>
              <td>Time to Empty</td>
              <td>${val[1].Time_to_empty}</td>
            </tr>
            <tr>
              <td>Battery Status</td>
              <td>${val[1].Battery_Status}</td>
            </tr>
            <tr>
              <td>Battery Health</td>
              <td>${val[1].Battery_Health}</td>
            </tr>
            <tr>
              <td>Power Consumption</td>
              <td>${val[1].Power_Consumption}</td>
            </tr>
            <tr>
              <td>Battery Technology</td>
              <td>${val[1].Battery_Technology}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>${val[1].model}</td>
            </tr>
            <tr>
              <td>Cycle count</td>
              <td>${val[1].Cycle_Count}</td>
            </tr>
          </table>`
            data.appendChild(newel)
        })
    },1000);

})





disk.addEventListener("click",(e)=>{
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
    let api=fetch("http://localhost:5000/resource")
    api.then((value)=>{
        return value.json()
    }).then((val)=>{

        data.innerHTML=''
        let newel=document.createElement("div");
        // newel.classList.add("table-container")
        newel.innerHTML=`Dashboard<table><tr><th>Attribute</th><th>Value</th></tr><tr><td>Disk usage percentage</td><td>${val[3].Disk_usage_percentage}</td></tr><tr><td>Disk usage absolute</td><td>${val[3].Disk_usage_absolute}</td> </tr></table>`
        data.appendChild(newel)
    })
},1000);
})

syst.addEventListener("click",(e)=>{
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
    let api=fetch("http://localhost:5000/resource")
    api.then((value)=>{
        return value.json()
    }).then((val)=>{

        data.innerHTML=''
        let newel=document.createElement("div");
        // newel.classList.add("table-container")
        newel.innerHTML=`Dashboard<table><tr><th>Attribute</th><th>Value</th></tr><tr><td>System uptime</td><td>${val[2].System_uptime}</td></tr></table>`
        data.appendChild(newel)
    })
},1000);
})






















   
