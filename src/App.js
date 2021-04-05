import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Are you ready to be tested?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: true },
				{ answerText: 'Maybe', isCorrect: true },
				{ answerText: 'So', isCorrect: true },
			],
		},
		{
			questionText: 'What is ReactJS',
			answerOptions: [
				{ answerText: 'A Library for building interaction interfaces', isCorrect: true },
				{ answerText: 'User-interface framework', isCorrect: false },
				{ answerText: 'Server side Framework', isCorrect: false },
				{ answerText: 'None of These', isCorrect: false },
			],
		},
		{
			questionText: 'Everything in React is a ______',
			answerOptions: [
				{ answerText: 'Module', isCorrect: false },
				{ answerText: 'Component', isCorrect: true },
				{ answerText: 'Package', isCorrect: false },
				{ answerText: 'Class', isCorrect: false },
			],
		},
		{
			questionText: 'What are the two ways that data is handled in React?',
			answerOptions: [
				{ answerText: 'Class & components', isCorrect: false },
				{ answerText: 'Services & components', isCorrect: false },
				{ answerText: 'State & props', isCorrect: true },
				{ answerText: 'State & server', isCorrect: false },
			],
		},
		{
			questionText: 'ReactJS uses ______ to increase performance?',
			answerOptions: [
				{ answerText: 'Original DOM', isCorrect: false },
				{ answerText: 'Virtual DOM', isCorrect: true },
				{ answerText: 'Both 1 & 2', isCorrect: false },
				{ answerText: 'None of above', isCorrect: false },
				
			],
		},{
			questionText: 'Do you think you learned something about React?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: true },
				{ answerText: 'Maybe', isCorrect: true },
				{ answerText: 'So', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
