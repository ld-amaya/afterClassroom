import React from 'react';
import QuestionCard from './QuestionCard';
import QuestionAddButton from './QuestionAddButton';

function QuestionsList({ questions, deleteQuestion }) {
    let count = 1;
    const displayQuestions = questions.map(q =>
        <QuestionCard
            key={q.id}
            id={q.id}
            count={count++}
            topic = {q.topic}
            question={q.question}
            image={q.image}
            a={q.a}
            b={q.b}
            c={q.c}
            d={q.d}
            answer={q.answer}
            deleteQuestion = {deleteQuestion}
        />
    )

    return (
        <div>
            <QuestionAddButton />
            {displayQuestions}
        </div>
    )
}

export default QuestionsList;