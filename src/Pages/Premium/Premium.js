import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Premium = () => {


    const courses = useLoaderData([]);
    console.log(courses)
    const { title, _id } = courses;

    return (
        <div>

            {
                <Card className="text-center">
                    <Card.Header>{_id}</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            {title}
                        </Card.Text>
                        <Button variant="primary">Download</Button>
                    </Card.Body>
                </Card>
            }
        </div>
    );
};

export default Premium;