import React from 'react';
import { Paper, Card, CardContent, Typography, Divider } from '@mui/material';

interface TextReplyProps {
	email: string;
	content: string;
}

const TextReply: React.FC<TextReplyProps> = ({ email, content }) => {
	return (
		<Paper sx={{ p: 2, m: 1 }}>
			<Card variant="outlined">
				<CardContent>
					<Typography variant="subtitle2" sx={{ textAlign: 'left' }}>
						To: {email}
					</Typography>
					<Typography variant="body1" sx={{ textAlign: 'left' }}>
						{content}
					</Typography>
				</CardContent>
			</Card>
		</Paper>
	);
};

export default TextReply;