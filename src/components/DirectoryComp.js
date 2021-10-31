import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComp';

function RenderDirectoryItem({recipes}) {
    return (
        <Card>
            <Link to={`/directory/${recipes.id}`}>
                <CardImg width="100%" src={recipes.image} alt={recipes.name} />
                <CardImgOverlay>
                    <CardTitle>{recipes.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {
    const directory = props.recipes.recipes.map(recipes => {
        return (
            <div key={recipes.id} className="col-md-5 m-1">
                <RenderDirectoryItem recipes={recipes} />
            </div>
        );
    });

    if (props.recipes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if (props.recipes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.recipes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;