import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderRecipes({recipes}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={recipes.image} alt={recipes.name} />
                <CardBody>
                    <CardText>{recipes.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RecipesInfo(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    if (props.recipes) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/directory'>Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.recipes.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.recipes.name}</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <RenderRecipes recipes={props.recipes} />
                </div>
            </div>
        );
    } 

    return <div/>;
}

export default RecipesInfo;