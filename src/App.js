import React,{useState} from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown';
import Search from "./components/Search";
import Translate from './components/Translate';

const items=[
    {
        title:'What is React',
        content:'React is a frontend javascript framework'
    },
    {
        title:'why we use React',
        content:'React is most favourite libraby among engineers'
    },
    {
        title:'How do you use React',
        content:'We can use react by making components'
    }
]

const options=[
    {
        label:"this is color red",
        value:"red"
    },
    {
        label:"this is color green",
        value:"green"
    },
    {
        label:"this is color blue",
        value:"blue"
    }

]

// const App =()=> {
//     const [selected, setSelected] = useState(options[0]);
//     return (
//         <div className="ui container">
//             <Accordion items={items} />
//             <Search />
//             <Dropdown 
//             options ={options}
//             selected={selected}
//             onSelectedChange={setSelected}
//             />
//         </div>
//     )
// }

const App =()=> {
 
    return (
      <div>
          <Translate />
      </div>
    )
}

export default App
