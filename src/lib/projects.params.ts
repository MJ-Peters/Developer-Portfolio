import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

// Have the most recent at the top
// Months are 0-indexxed, i.e. September = 8 not 9
const MY_PROJECTS: Array<Project> = [
	//-------------------------------------------------------------------------------------------
	
	{
		slug: 'StravaClone',
		color: 'purple',
		description:
			'I embarked on this project at the onset of the new year with a dual purpose in mind. Primarily, I aimed to elevate my software development proficiency beyond rudimentary text-based applications in Python. The secondary motivation behind this endeavour is rooted in my decision to craft an activity tracker, a deliberate choice among the myriad of applications one could develop. \n\n My inspiration for choosing an activity tracker stems from my current pursuit of training for an Ironman 70.3 triathlon. The diverse range of activities involved in my training regimen has captivated my interest. Harnessing the wealth of activity data generated during these rigorous sessions, I am utilizing it as a robust testing ground to refine and advance the capabilities of this application. Through this ongoing project, I am not only honing my coding skills but also creating a tool that resonates with my personal journey and passion for fitness.',
		shortDescription:
			'A work in progress activity tracker.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.StravaClone,
		name: 'Outdoor Activity Tracker',
		period: {
			 from: new Date(2023, 0)
		},
		skills: getSkills('python'),
		type: 'Full-Stack App Development'
	},
	//-------------------------------------------------------------------------------------------
	
	{
		slug: 'DPay',
		color: 'blue',
		description:
			'',
		shortDescription:
			'A decentralised payments platform.',
		links: [{ to: 'https://github.com/rw19842/DPay-proof-of-concept', label: 'GitHub' }],
		logo: Assets.DPay,
		name: 'DPay',
		period: {
			from: new Date(2023, 3), to: new Date(2023, 4)
		},
		skills: getSkills('HTML', 'CSS', 'JavaScript'),
		type: 'Front-End App Development'
	},
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
		name: 'PRADE Trader Agents',
		period: {
			 from: new Date(2022, 10), to: new Date(2023, 1)
		},
		skills: getSkills('python'),
		type: 'Simulation and Statistical Testing'
	}
	//-------------------------------------------------------------------------------------------
	
	// {
	// 	slug: 'placeholder-2',
	// 	color: 'blue',  // Hex codes also work
	// 	description:
	// 		'Placeholder description.',
	// 	shortDescription:
	// 		'Placeholder short description.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Python,
	// 	name: 'Placeholder 2',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Placeholder',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
	//-------------------------------------------------------------------------------------------
];

export default MY_PROJECTS;
