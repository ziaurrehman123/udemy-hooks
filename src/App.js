import React from 'react'
import Accordion from './components/Accordion'
import Search from "./components/Search";

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

const App =()=> {
    return (
        <div>
            <Accordion items={items} />
            <Search />
        </div>
    )
}

export default App
