import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSide = () => {
    const [courseCategories, SetCourseCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/course-categories")
            .then(res => res.json())
            .then(course => SetCourseCategories(course));
    }, [])

    return (
        <div>
            <h2>Total course {courseCategories.length} </h2>
            <div>
                {
                    courseCategories.map(courseCategorie => <p key={courseCategorie.id}>
                        <Link to={`/course/${courseCategorie.id}`}>{courseCategorie.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;