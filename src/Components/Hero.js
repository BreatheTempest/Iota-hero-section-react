import React from 'react';
import earthVideo from '../Videos/earth.webm';
import machineVide from '../Videos/machine.webm';
import womanVideo from '../Videos/woman.webm';
import Slide from './Slide';
import { useState, useEffect } from 'react';

export default function Hero() {
	const [slide, setSlide] = useState(1);

	// useEffect(() => {
	// 	const timer = setTimeout(
	// 		setSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1)),
	// 		8000
	// 	);
	// 	return () => clearTimeout(timer);
	// }, []);

	function changeSlide({ target }) {
		if (target.innerText === 'Next') {
			setSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
		} else {
			setSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
		}
	}

	return (
		<section className="hero">
			<button onClick={(e) => changeSlide(e)}>Previous</button>
			<div className="line"></div>
			{slide === 1 && (
				<Slide
					key={1}
					video={earthVideo}
					title="Securing Data"
					text="IOTA protects the integrity and verifiability of data"
				/>
			)}
			{slide === 2 && (
				<Slide
					key={2}
					video={machineVide}
					title="Connecting Machines"
					text="IOTA connects IoT with secure data and value exchange"
				/>
			)}
			{slide === 3 && (
				<Slide
					video={womanVideo}
					title="Empowering People"
					text="IOTA helps people securely navigate their digital life"
				/>
			)}
			<button onClick={(e) => changeSlide(e)}>Next</button>
		</section>
	);
}
