import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
const MenuItem = props => {

    return (
        <div>
            <Card style={{ margin: "5px" }}>
                <CardBody>
                    <CardImg width="100%" alt="{props.dish.name}" src={props.dish.image}
                        style={{ opacity: ".5" }}
                    ></CardImg>
                    <CardImgOverlay>
                        <CardSubtitle style={{ color: "black", margin: "25% 0 0 0", cursor: "pointer" }}
                            onClick={() => props.DishSelect(props.dish)}
                        >{props.dish.name}</CardSubtitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}
export default MenuItem;