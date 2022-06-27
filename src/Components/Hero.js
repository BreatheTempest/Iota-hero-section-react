import chevronRight from '../Images/chevron-right.svg';
import chevronLeft from '../Images/chevron-left.svg';
import slidesData from '../slidesData';
import Slide from './Slide';
import { useState, useEffect } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Hero() {
	const [slideIdx, setSlideIdx] = useState(1);
	const [timeoutId, setTimeoutId] = useState();
	const [intervalId, setIntervalId] = useState();
	const [progressValue, setProgressValue] = useState(0);

	function fillProgress() {
		setIntervalId(
			setInterval(() => {
				setProgressValue((prevValue) => (prevValue <= 100 ? prevValue + 1 : 0));
			}, 70)
		);
	}

	function changeSlide({ target }) {
		if (target.id === 'next') {
			clearTimeout(timeoutId);
			setTimeoutId(null);
			clearInterval(intervalId);
			setProgressValue(0);
			setSlideIdx((prevSlideIdx) =>
				prevSlideIdx === slidesData.length ? 1 : prevSlideIdx + 1
			);
		} else {
			clearTimeout(timeoutId);
			setTimeoutId(null);
			clearInterval(intervalId);
			setProgressValue(0);
			setSlideIdx((prevSlideIdx) =>
				prevSlideIdx === 1 ? slidesData.length : prevSlideIdx - 1
			);
		}
	}

	useEffect(() => {
		if (!timeoutId) {
			// fillProgress();
			clearInterval(intervalId);
			setTimeoutId(
				setTimeout(() => {
					setSlideIdx((prevSlideIdx) =>
						prevSlideIdx === slidesData.length ? 1 : prevSlideIdx + 1
					);
					clearTimeout(timeoutId);
					setTimeoutId(null);
				}, 7000)
			);
		}
	}, [timeoutId]);

	return (
		<section className="hero">
			<button onClick={(e) => changeSlide(e)}>
				<div className="progress-bar">
					<CircularProgressbar
						value={0}
						strokeWidth={3}
						styles={buildStyles({
							trailColor: '#5C6174',
						})}
					/>
				</div>
				<img className="chevron" src={chevronLeft} alt="" />
			</button>
			<div className="slides-container">
				{slidesData.map((slide, index) => {
					return (
						<Slide
							key={slide.id}
							video={slide.video}
							title={slide.title}
							text={slide.text}
							activeSlide={slideIdx}
							index={index}
						/>
					);
				})}
			</div>
			<button onClick={(e) => changeSlide(e)}>
				<div className="progress-bar">
					<CircularProgressbar
						value={progressValue}
						strokeWidth={3}
						styles={buildStyles({
							pathColor: '#0fc1b7',
							trailColor: '#5C6174',
						})}
					/>
				</div>
				<img className="chevron" src={chevronRight} alt="" id="next" />
			</button>
		</section>
	);
}
