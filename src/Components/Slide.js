import { useRef, useEffect } from 'react';
export default function AnimatedVideo({
	title,
	text,
	video,
	activeSlide,
	index,
}) {
	const isActive = activeSlide === index + 1;

	const videoRef = useRef();

	useEffect(() => {
		if (isActive) {
			videoRef.current.load();
			videoRef.current.play();
		}
	}, [isActive]);

	const firstHalf = title
		.split(' ')[0]
		.split('')
		.map((letter) => {
			const duration = Math.random() + 1;
			return (
				<span
					key={duration}
					className={isActive ? 'title-animation' : ''}
					style={{ animationDuration: duration + 's' }}
				>
					{letter}
				</span>
			);
		});
	const secondHalf = title
		.split(' ')[1]
		.split('')
		.map((letter) => {
			const duration = Math.random() + 1;
			return (
				<span
					key={duration}
					className={isActive ? 'title-animation' : ''}
					style={{ animationDuration: duration + 's' }}
				>
					{letter}
				</span>
			);
		});

	return (
		<div className={`slide ${isActive ? 'active' : 'fade-out'}`}>
			<video
				muted
				src={video}
				playsInline
				preload="metadata"
				type="video/webm"
				ref={videoRef}
			></video>
			<div className="line"></div>
			<div className="slide-content">
				<div className="title ">
					<div className="top-title">{firstHalf}</div>
					<strong>
						{secondHalf}
						<div
							className={`circle ${isActive ? 'circle-animation' : ''}`}
						></div>
					</strong>
				</div>
				<div
					className={`green-line ${isActive ? 'text-animation' : 'fade-out'}`}
				></div>
				<p className={`slide-text ${isActive ? 'text-animation' : 'fade-out'}`}>
					{text}
				</p>
			</div>
		</div>
	);
}
