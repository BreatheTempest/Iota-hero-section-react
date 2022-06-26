import icon from '../Images/logo-icon-light.svg';
import text from '../Images/logo-text.svg';
import hamburger from '../Images/hamburger.svg';
import apps from '../Images/apps.svg';
export default function Hero() {
	return (
		<header>
			<div className="container">
				<img src={icon} alt="" />
				<img src={text} alt="" className="logo-text" />
				<ul className="nav">
					<li>
						<div className="link">Get Started</div>
					</li>
					<li>
						<div className="link">Solutions</div>
					</li>
					<li>
						<div className="link">Develop</div>
					</li>
					<li>
						<div className="link">Foundation</div>
					</li>
					<li>
						<div className="link">Connect</div>
					</li>
				</ul>
				<div className="hamburger">
					<img src={hamburger} alt="" />
				</div>
			</div>

			<div className="apps">
				Explore IOTA
				<img src={apps} alt="" />
			</div>
		</header>
	);
}
