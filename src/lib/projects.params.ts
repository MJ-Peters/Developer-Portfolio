import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

// Have the most recent at the top
// Months are 0-indexxed, i.e. September = 8 not 9
const MY_PROJECTS: Array<Project> = [
	//-------------------------------------------------------------------------------------------
	{
		slug: 'AlgoTrading',
		color: 'blue',
		description:
			'Explore my in-depth investigation into PRDE trader agents within the Bristol Stock Exchange (BSE), an intricately crafted minimal limit-order-book-based financial exchange implemented in Python. The primary goal of this project is to enhance the capabilities of trader agents by introducing the PRDE agent, an extension of PRZI and PRSH, incorporating the powerful differential evolution (DE) genetic algorithm for optimizing stochastic hill-climbing. I conducted homogeneous experiments on BSE to assess the PRDE agent\'s performance, and employed statistical testing, focusing on key parameters: population size (k) and differential weight (F). I identified that F is a significant factor influencing performance, while k exhibited less impact. I then implemented my PRADE trader agent, that proactively adjusts the value of F to maximise profitability across a diverse array of market conditions.',
		shortDescription:
			'Investigating the performance of adaptive trading agents in a simulated financial exchange.',
		links: [{ to: 'https://github.com/MJ-Peters/PRDE-Trader-Evaluation-and-Improvement', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Parameterized Response Adaptive Differential Evolution (PRADE) Trader Agents',
		period: {
			 from: new Date(2022, 10), to: new Date(2022, 1)
		},
		skills: getSkills('python'),
		type: 'Simulation and Statistical Testing'
	},
	//-------------------------------------------------------------------------------------------
	{
		slug: 'placeholder-2',
		color: '#blue',  // Hex codes also work
		description:
			'Placeholder description.',
		shortDescription:
			'Placeholder short description.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Placeholder 2',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Placeholder',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
	//-------------------------------------------------------------------------------------------
];

export default MY_PROJECTS;
