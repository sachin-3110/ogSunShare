import React, { useState } from 'react';
import HomeElement from './HomeElement'
import HomeElement2 from './HomeElement2';
import { Link } from 'react-router-dom';


const Home = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "SunValley Solar Farm",
            location: "Arizona, USA",
            capacity: "50 MW",
            roi: "8-10% annually"
        },
        {
            id: 2,
            name: "Coastal Wind Project",
            location: "California, USA",
            capacity: "30 MW",
            roi: "7-9% annually"
        },
        {
            id: 3,
            name: "Desert Sun Initiative",
            location: "Nevada, USA",
            capacity: "40 MW",
            roi: "9-11% annually"
        },
        {
            id: 4,
            name: "Mountain Peak Solar",
            location: "Colorado, USA",
            capacity: "25 MW",
            roi: "7-8% annually"
        }
    ]);

    return (
        <div className="container text-[#303030] mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6 text-white uppercase text-center">Invest in SOlar, Reduce Carbon, Build Community</h1>
            <HomeElement2/>
            

            
            <HomeElement />
            
            <div className='flex flex-wrap justify-center gap-4 w-full mt-8' id='Cards'>
                {projects.map(project => (
                    <div key={project.id} className="bg-green-100 rounded-lg p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <h2 className="text-2xl font-semibold mb-4">Latest Solar Project</h2>
                        <p className="mb-4">
                            <strong>Project Name:</strong> {project.name}
                            <br />
                            <strong>Location:</strong> {project.location}
                            <br />
                            <strong>Capacity:</strong> {project.capacity}
                            <br />
                            <strong>Expected ROI:</strong> {project.roi}
                        </p>
                        <Link to='/trading' className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                            Invest Now
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
