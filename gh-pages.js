import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/Dcruzships/dcruz-svelte.git', // Update to point to your repository
		user: {
			name: 'Brandon Dcruz', // update to use your name
			email: 'bdcruz128@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
