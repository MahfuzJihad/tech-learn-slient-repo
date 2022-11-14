import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Details = () => {


    const courses = useLoaderData([]);
    console.log(courses)
    const { title, _id, image_url } = courses;



    return (
        <div>
            {
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <Button variant="primary"><Link to={`/new-course/${_id}`}>Get Primium</Link> </Button>
                    </Card.Body>
                </Card>



            }
        </div>
    );
};

export default Details;