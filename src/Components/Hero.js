import React from 'react';
import slidesData from '../slidesData';

import Slide from './Slide';
import { useState, useEffect } from 'react';

export default function Hero() {
	const [slideIdx, setSlideIdx] = useState(1);
	const [timeoutId, setTimeoutId] = useState();

	function changeSlide({ target }) {
		if (target.innerText === 'Next') {
			clearTimeout(timeoutId);
			setTimeoutId(null);
			setSlideIdx((prevSlideIdx) =>
				prevSlideIdx === slidesData.length ? 1 : prevSlideIdx + 1
			);
		} else {
			clearTimeout(timeoutId);
			setTimeoutId(null);
			setSlideIdx((prevSlideIdx) =>
				prevSlideIdx === 1 ? slidesData.length : prevSlideIdx - 1
			);
		}
	}

	useEffect(() => {
		if (!timeoutId) {
			console.log('start');
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
			<button onClick={(e) => changeSlide(e)}>Previous</button>
			<div className="line"></div>
			<div className="sliders-container">
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
			<button onClick={(e) => changeSlide(e)}>Next</button>
		</section>
	);
}
