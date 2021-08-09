import React from 'react';
import Home from '../home/Home';
import Topics from '../topics/Topics';
import TopicForm from '../topics/TopicForm';
import Summary from '../summary/Summary';
import { Switch, Route, Redirect } from 'react-router-dom';

function Router() {
    return (
        <Switch>
            <Route exact path='/' >
                <Home />
            </Route>
            <Route exact path='/topics'>
                <Topics />
            </Route>
            <Route exact path='/topics/add'>
                <TopicForm />
            </Route>
            <Route exact path='/topics/edit/:topic/:id'>
                <TopicForm />
            </Route>
            <Route exact path="/topics/questions/:topic">
                <QuestionsPerTopic />
            </Route>
            <Route exact path='/summary'>
                <Summary />
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}
export default Router;