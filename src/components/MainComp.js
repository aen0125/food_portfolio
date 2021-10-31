import React, { Component } from 'react';
import Directory from './DirectoryComp';
import Header from './HeaderComp';
import Home from './HomeComp';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRecipes } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    };
}

const mapDispatchToProps = {
    fetchRecipes: () => (fetchRecipes())
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchRecipes();
    }

    render() {
        const HomePage = () => {
            return(
                <Home
                    recipes={this.props.recipes.recipes.filter(recipes => recipes.featured)[0]}
                    recipesLoading={this.props.recipes.isLoading}
                    recipesErrMess={this.props.recipes.errMess}
                />
            );
        }

        const RecipesWithId = ({match}) => {
            return (
                <RecipesWithId
                    recipes={this.props.recipes.recipes.filter(recipes => recipes.id === +match.params.recipesId)[0]}
                    isLoading={this.props.recipes.isLoading}
                    errMess={this.props.recipes.errMess}
                />
            );
        }

        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/directory' render={() => <Directory recipes={this.props.recipes} />} />
                        <Route path='/directory/:recipesId' component={RecipesWithId} />
                        <Redirect to='/home' />
                    </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));