export default function AnimatedVideo({
	title,
	text,
	video,
	activeSlide,
	index,
}) {
	const isActive = activeSlide === index + 1;

	const firstHalf = title
		.split(' ')[0]
		.split('')
		.map((letter) => {
			const duration = Math.random() + 1;
			return (
				<span
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
					className={isActive ? 'title-animation' : ''}
					style={{ animationDuration: duration + 's' }}
				>
					{letter}
				</span>
			);
		});

	return (
		<div className={`slide ${isActive ? 'active' : 'fade-out'}`}>
			<video muted loop src={video} type="video/webm" autoPlay></video>
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
				<p className={`slide-text ${isActive ? 'text-animation' : ''}`}>
					{text}
				</p>
			</div>
		</div>
	);
}
