import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

// Have the most recent at the top
const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'data-analyst',
		company: 'EY',
		description: '',
		contract: ContractType.FullTime,
		type: 'Data Science and Data Analytics',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('python', 'ms-sql-server', 'azure'),
		name: 'Forensic Data Analyst - Associate',
		color: 'yellow',
		links: [],
		logo: Assets.EY,
		shortDescription: ''
	},
];

export default MY_EXPERIENCES;
