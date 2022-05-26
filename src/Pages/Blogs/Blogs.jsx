import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiOutlineArrowDown } from "react-icons/ai";

const Blogs = () => {
    return (
        <div className='my-20 lg:mx-20 md:mx-10 mx-5'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<AiOutlineArrowDown />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>How will you improve the performance of a React Application?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className='font-bold'>Answer: </span> <br />
                        <span className='ml-8'>
                            1. Using immutable data structures,
                        </span> <br />
                        <span className='ml-8'>
                            2. Function/Stateless components and React.PureComponent,
                        </span><br />
                        <span className='ml-8'>
                            3. Dependency optimization,
                        </span><br />
                        <span className='ml-8'>
                            4. Avoid using index as Key for map,
                        </span><br />
                        <span className='ml-8'>
                            5. Avoiding props in initial states,
                        </span><br />
                        <span className='ml-8'>
                            6. CSS animations instead of JS animations,
                        </span><br />
                        <span className='ml-8'>
                            7. Using a CDN,
                        </span><br />
                        <span className='ml-8'>
                            8. Consider server-side rendering etc.
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<AiOutlineArrowDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography> What are the different ways to manage a state in a React application?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className='font-bold'>Answer: </span> <br />
                        <span className='ml-8'>
                            There are four main types of state you need to properly manage in your React apps:
                        </span><br />
                        <span className='ml-8'>
                            1. Local state,
                            2. Global state,
                            3. Server state,
                            4. URL state
                        </span><br />
                        <span className='ml-8'>
                            Local state : Local state is most often managed in React using the useState hook.
                        </span><br />
                        <span className='ml-8'>
                            Global state : Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        </span><br />
                        <span className='ml-8'>
                            Server state : Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        </span><br />
                        <span className='ml-8'>
                            URL state : Data that exists on our URLs, including the pathname and query parameters.
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<AiOutlineArrowDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography> How does prototypical inheritance work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className='font-bold'>Answer: </span> <br />
                        <span className='ml-8'>
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<AiOutlineArrowDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography> What is a unit test? Why should write unit tests?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className='font-bold'>Answer: </span> <br />
                        <span className='ml-8'>
                            Unit test is a method that instantiates a small part of our code and verifies its behavior independently from other parts of the project.
                        </span><br />
                        <span className='ml-8'>
                            Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs. Testing a code early on can help to define what that piece of code is really responsible for.
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<AiOutlineArrowDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className='font-bold'>Answer: </span> <br />
                        <span className='ml-8'>
                            First of all i will apply map on array of products. This i will get each product from array of products. Then i will send each product to another route. Then i will distructure all key from product object. Then i will use useQuery for sending data to server. In useQuery i will use query link so that i will find all data by query(name). Then i will use get api to server for finding data from database using query(name).
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Blogs;