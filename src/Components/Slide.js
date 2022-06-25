export default function AnimatedVideo({ title, text, video }) {
	const firstHalf = title
		.split(' ')[0]
		.split('')
		.map((letter) => {
			const duration = Math.random() + 1;
			return (
				<span style={{ animationDuration: duration + 's' }}>{letter}</span>
			);
		});
	const secondHalf = title
		.split(' ')[1]
		.split('')
		.map((letter) => {
			const duration = Math.random() + 1;
			return (
				<span style={{ animationDuration: duration + 's' }}>{letter}</span>
			);
		});

	return (
		<div className="hero-container">
			<video autoPlay muted loop src={video} type="video/webm"></video>
			<div className="title">
				{firstHalf}
				<strong>
					{secondHalf}
					<div className="circle"></div>
				</strong>
			</div>
			<p>{text}</p>
		</div>
	);
}
