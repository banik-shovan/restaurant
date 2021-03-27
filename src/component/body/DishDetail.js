import React from 'react';
import LoadComments from './LoadComments';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
const DishDetail = (props) => {
    return (
        <div>
            <Card>
                <CardImg top src={props.dish.image}>

                </CardImg>
                <CardBody style={{ textAlign: "left" }}>
                    <CardSubtitle>
                        {props.dish.name}
                    </CardSubtitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <hr />
                    <LoadComments comments={props.dish.comments} />
                </CardBody>
            </Card>
        </div>
    );
}
export default DishDetail;