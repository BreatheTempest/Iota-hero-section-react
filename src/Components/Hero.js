import React from 'react';
import slidesData from '../slidesData';

import Slide from './Slide';
import { useState, useEffect } from 'react';

export default function Hero() {
	const [slideIdx, setSlideIdx] = useState(1);

	function changeSlide({ target }) {
		if (target.innerText === 'Next') {
			setSlideIdx((prevSlideIdx) =>
				prevSlideIdx === slidesData.length ? 1 : prevSlideIdx + 1
			);
		} else {
			setSlideIdx((prevSlideIdx) =>
				prevSlideIdx === 1 ? slidesData.length : prevSlideIdx - 1
			);
		}
	}

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
