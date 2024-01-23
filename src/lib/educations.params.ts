import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'MSc Financial Technology with Data Science',
		description: '',
		location: 'Bristol, UK',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of Bristol',
		period: { from: new Date(2022, 9, 19), to: new Date(2023, 9, 8) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Algorithms and Data structures', 'Python', 'JavaScript', 'HTML', 'CSS', 'AWS']
	},
	{
		degree: 'BEng Civil Engineering with Architecture',
		description: '',
		location: 'Southampton, UK',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of Southampton',
		period: { from: new Date(2018, 9, 24), to: new Date(2022, 6, 10) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['MATLAB', 'Python']
	}
];
