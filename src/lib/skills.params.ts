import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'python',
		color: '#3776ab',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'azure',
		color: '#0080ff',
		description:
			'',
		logo: Assets.Azure,
		name: 'Microsoft Azure'
	}),
	s({
		slug: 'aws',
		color: '#FF9900',
		description:
			'',
		logo: Assets.AWS,
		name: 'Amazon Web Services'
	}),
	s({
		slug: 'js',
		color: '#f7df1e',
		description:
			'',
		logo: Assets.JavaScript,
		name: 'JavaScript'
	}),
	s({
		slug: 'react-native',
		color: '#61DBFB',
		description:
			'',
		logo: Assets.React,
		name: 'React Native'
	}),
	s({
		slug: 'graphql',
		color: '#E10098',
		description:
			'',
		logo: Assets.GraphQL,
		name: 'GraphQL'
	}),
	s({
		slug: 'react-navigation',
		color: 'purple',
		description:
			'',
		logo: Assets.ReactNav,
		name: 'React Navigation'
	}),
	s({
		slug: 'ms-sql-server',
		color: '#A91D22',
		description:
			'',
		logo: Assets.MsSQLServer,
		name: 'Microsoft SQL Server'
	}),
	s({
		slug: 'css',
		color: '#264de4',
		description:
			'',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: '#e34c26',
		description:
			'',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'expo',
		color: 'black',
		description:
			'',
		logo: Assets.Expo,
		name: 'Expo'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
