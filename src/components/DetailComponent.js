import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Detail({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} width="100%" />
            <CardBody>
                <CardSubtitle color='red'><font color="gray">{item.category}</font></CardSubtitle>
                <CardTitle>{item.name}</CardTitle>
                <CardText>${item.price}</CardText>
            </CardBody>
        </Card>

    )

}

export default Detail;