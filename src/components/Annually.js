import { Switch } from "@mui/material"
import '../App.css';
import  {useState} from "react"


function Annually() {
  const [checked,setChecked]=useState("Monthly");
  const [Price,setPrice]=useState('$ 100');
  const[Price1,setPrice1]=useState('$ 200');
  const[Price2,setPrice2]=useState('$ 300');
 


const handleChange=()=>{
if(checked==="Monthly"){
  setChecked("Annually")
  setPrice("$ 10")
  setPrice1("$ 20")
  setPrice2("$ 30")
  console.log(checked)
} else if(checked==="Annually"){
setChecked("Monthly");
setPrice('$ 100');
setPrice1('$ 200');
setPrice2('$ 300');
console.log(checked)
}
}

  return (
    <div class="Wraper">
        
      <header class="Header"> 
      <h3 className="h3">Our Pricing</h3>
      </header>
      <div className='div'>
        <p>Annually</p>
        <Switch
     onClick={handleChange}  />

        <p>Monthly</p>
        </div>
      
      
      <div className="section">
        <div className="div1">
            <h4>Basic</h4>
            <h1>{Price}</h1>
            <p>500 GB storage</p>
            <p>2 users allowed</p>
            <p>Send up to 3 GB </p>
            <button>Learn More</button>
        </div>
        <div className="div1">
        <h4>Profesional</h4>
            <h1>{Price1} </h1>
            <p>1 TB storage</p>
            <p>5 users allowed</p>
            <p>Send up to 10 GB </p>
            <button>Learn More</button>
        </div>
        <div className="div1">
        <h4>Master</h4>
            <h1>{Price2} </h1>
            <p>2 TB storage</p>
            <p>10 users allowed</p>
            <p>Send up to 20 GB </p>
            <button>Learn More</button>

        </div>
      </div>
    </div>
  );
}

export default Annually;



