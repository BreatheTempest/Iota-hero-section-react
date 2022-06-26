import { v4 as uuidv4 } from 'uuid';
import earthVideo from './Videos/earth.webm';
import machineVide from './Videos/machine.webm';
import womanVideo from './Videos/woman.webm';

const dataSlider = [
	{
		id: uuidv4(),
		video: earthVideo,
		title: 'Securing Data',
		text: 'IOTA protects the integrity and verifiability of data',
	},
	{
		id: uuidv4(),
		video: machineVide,
		title: 'Connecting Machines',
		text: 'IOTA connects IoT with secure data and value exchange',
	},
	{
		id: uuidv4(),
		video: womanVideo,
		title: 'Empowering People',
		text: 'IOTA helps people securely navigate their digital life',
	},
];

export default dataSlider;
