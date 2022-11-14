import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const RightSide = () => {
  const [courseCategories, SetCourseCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((course) => SetCourseCategories(course));
  }, []);

  return (
    <div>
      <h2>All Courses {courseCategories.length} </h2>
      <div>
        {courseCategories.map((courseCategorie) => (
          <p key={courseCategorie.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={courseCategorie.img} />
              <Card.Body>
                <Button variant="primary">
                  <Link to={`/course/${courseCategorie.id}`}>
                    {courseCategorie.name}
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </p>
        ))}
      </div>
    </div>
  );
};

export default RightSide;
