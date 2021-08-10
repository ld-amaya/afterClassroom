import React from 'react';
import Home from '../home/Home';
import Topics from '../topics/Topics';
import TopicForm from '../topics/TopicForm';
import QuestionsPerTopic from '../questions/QuestonsPerTopic';
import QuestionForm from '../questions/QuestionForm'
import Summary from '../summary/Summary';
import LoginForm from '../login/loginForm';
import SignupForm from '../signup/SignupForm'
import Exam from '../exam/Exam';
import ExamCard from '../exam/ExamCard';
import ExamResult from '../exam/ExamResult';
import ExamReview from '../exam/ExamReview';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserLoggedRoute from './UserLoggedRoute'
import TeacherLoggedRoute from './TeacherLoggedRoute';

function Router() {
    return (
        <Switch>
            <Route exact path='/' >
                <Home />
            </Route>
            <Route exact path='/login'>
                <LoginForm />
            </Route>
            <Route exact path='/signup'>
                <SignupForm />
            </Route>

            <UserLoggedRoute exact path='/topics'>
                <Topics />
            </UserLoggedRoute>
            <UserLoggedRoute exact path='/topics/:topic/exam'>
                <Exam />
            </UserLoggedRoute>
            <UserLoggedRoute exact path='/topic/:topic/exam/:examID/ongoing'>
                <ExamCard />
            </UserLoggedRoute>
            <UserLoggedRoute exact path='/student/:user/exam/:examID/result'>
                <ExamResult />
            </UserLoggedRoute>
            <UserLoggedRoute exact path='/summary'>
                <Summary />
            </UserLoggedRoute>

            <TeacherLoggedRoute exact path='/topic/:topic/exam/:examID/review'>
                <ExamReview />
            </TeacherLoggedRoute>
            <TeacherLoggedRoute exact path='/topics/add'>
                <TopicForm />
            </TeacherLoggedRoute>
            <TeacherLoggedRoute exact path='/topics/edit/:topic/:id'>
                <TopicForm />
            </TeacherLoggedRoute>
            <TeacherLoggedRoute exact path="/topic/:topic/questions/:num">
                <QuestionForm />
            </TeacherLoggedRoute>
            <TeacherLoggedRoute exact path="/topics/:topic/questions">
                <QuestionsPerTopic />
            </TeacherLoggedRoute>
            <TeacherLoggedRoute exact path ='/questions/add'>
                <QuestionForm />
            </TeacherLoggedRoute>
            
            <Redirect to='/' />
        </Switch>
    )
}
export default Router;