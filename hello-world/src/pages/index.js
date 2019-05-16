import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default () => (
	<div>
		<Paper elevation={1}>
			<Typography variant="h5" component="h3">
				Welcome to the Start Page!
			</Typography>
			<Typography component="p">I'm super awesome. Extremely awesome. 0 ego problems haha...</Typography>
		</Paper>
	</div>
);
