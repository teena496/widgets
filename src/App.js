import React, { useState } from 'react'
// import Accordion from './Accordion'
import { AccordionFC } from './AccordionFC';
import Dropdown from './Dropdown';
import Header from './Header';
import Route from './Route';
import Search from './Search';
import Translate from './Translate';

const items = [
    {
        id: 1,
        title:'React',
        content:'React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. '
    },
    {
        id: 2,
        title:'npm',
        content:'npm is a package manager for the JavaScript programming language. npm, Inc. is a subsidiary of GitHub, that provides hosting for software development and version control with the usage of Git. npm is the default package manager for the JavaScript runtime environment Node.js.'
    },
    {
        id: 3,
        title:'Javascript',
        content:'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
    }
];

const options = [
    {
        id: 1,
        label:"The Color Red",
        value:"red"
    },
    {
        id: 2,
        label:"The Color Green",
        value:"green"
    },
    {
        id: 3,
        label:"The Color Blue",
        value:"blue"
    }
];


export const App = () => {

    const [selected, setSelected] = useState(options[0])

    return (
        <div>
            <Header/>
          <Route path='/'>
            <AccordionFC items={items} />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/dropdown'>
            <Dropdown 
                label="Select a Color"
                options={options}
                selected={selected}
                setSelected={setSelected} />
          </Route>
          <Route path='/translate'>
                <Translate />
          </Route>
        </div>
    )


}

export default App;
