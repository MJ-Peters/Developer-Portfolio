import Assets from './data/assets';
import type { Education } from './types';

// Have the most recent at the top
// Months are 0-indexxed, i.e. September = 8 not 9
export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'MSc Financial Technology with Data Science',
		description: '',
		location: 'Bristol, UK',
		logo: Assets.UoB,
		name: 'Master\'s Degree',
		organization: 'University of Bristol',
		period: { from: new Date(2022, 8), to: new Date(2023, 8) },
		shortDescription: '',
		slug: 'University-of-Bristol',
		subjects: ['Financial Technology', 'Large Scale Data Engineering', 'Sofware Development, Programming, and Algorithms', 'Data Analytics']
	},
	{
		degree: 'BEng Civil Engineering with Architecture',
		description: 'Bachelor\'s Degree',
		location: 'Southampton, UK',
		logo: Assets.UoS,
		name: '',
		organization: 'University of Southampton',
		period: { from: new Date(2018, 8), to: new Date(2022, 8) },
		shortDescription: '',
		slug: 'University-of-Southampton',
		subjects: ['Structural Design', 'Finite Element Analysis', 'Hydraulic Engineering', 'Geotechnical Engineering']
	}
];
