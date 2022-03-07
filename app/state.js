import auto from '@autolib/auto';

let _ = auto({

	first_name: 'Jim',
	last_name: 'Cricket',
	name: (_) => _.first_name + ' ' + _.last_name
})

export default _;