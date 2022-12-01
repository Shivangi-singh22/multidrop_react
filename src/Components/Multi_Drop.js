import React, {useState} from 'react';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css';
// import img1 from '../img/Logo_Mark.png';


const Multi_Drop = () => {

    const [value, setValue] = useState([])

  const  handleOnchange  =  e  => {
    setValue(e.toLowerCase());
    return false;
  }

  const selectHandle = e => {

  }

  // const  options  = [
  //   { label:  "KPI 1", value:'Agriculture'},
  //   { label: "KPI 2", value:'Total district Customer'},
  //   { label: "KPI 3", value:'Sales'},
  //   { label: "KPI 4", value:'Order'},
  //   { label: "KPI 5", value:'Performance'},
  //   { label: "KPI 6", value:'Order count'}
  // ]











  

  return (
    <div>
       <div  className="preview-values">
        <h4>Selected KPIs</h4><br/>
        {value}
      </div>

    <div className='app-select'>

      <MultiSelect className="multi"
        onChange={handleOnchange}
        options={options}
        placeholder="KPIs Selection"
      />
      </div>
      <button className='button' onSelect={selectHandle}><strong>Submit</strong></button>
      {/* <div className='loader container'></div> */}
      {/* <div className='progress'>
        <div className='progress-bar progree-bar-striped bg-animation'
        role="progressbar" aria-valuenow="75"> 10 </div>
      </div> */}
    </div>
  )
}

export default Multi_Drop
