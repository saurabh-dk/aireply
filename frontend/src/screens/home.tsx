import React, { useState } from 'react';
import TextInput from '../components/textInput';
import TextReply from '../components/textReply';
import * as uuid from 'uuid';

import { Box, CircularProgress, Fade, Typography } from '@mui/material';
import emailService from '../services/email.service';
import { AiRequest } from '../models/airequest';
import { Name } from '../models/name';
import { splitnames } from '../helpers/splitnames';
import { replaceName } from '../helpers/replacename';
import { EmailDisplay } from '../models/email-display';

const Home: React.FC = () => {

	const [emails, setEmails] = useState<EmailDisplay[]>([]);
	const [disabled, setDisabled] = useState<boolean>(false);

	const handleSubmit = (text: string, context: string, purpose: string) => {
		if (text.trim().length != 0 &&
			context.trim().length != 0 &&
			purpose.trim().length != 0) {
			let allNames: Name[] = splitnames(text.trim());

			getData(allNames, context.trim(), purpose.trim());
		}
	};

	const getData = async (allNames: Name[], context: string, purpose: string) => {
		setDisabled(true);
		try {
			let email: AiRequest = {
				// To display the item in list, it needs some unique ID.
				id: uuid.v4(),
				name: allNames[0].name,
				email: allNames[0].email,
				context: context,
				purpose: purpose
			}

			const data = await emailService.getEmailReply(email);

			let allContent: EmailDisplay[] = [];

			// Just for the sake to reduce the API calls. Could be replaced with actual API calls.
			allNames.forEach((name: Name) => {
				let content = replaceName(data.text, allNames[0].name, name.name);
				allContent.push({ email: name.email, content: content })
			})

			setEmails(allContent);

		} catch (error) {
			console.error('Error fetching text reply data:', error);
		} finally {
			setDisabled(false);
		}
	}

	return (
		<div>
			<Typography variant="h6" gutterBottom>
				Enter content to get AiReply
			</Typography>
			<TextInput onSubmit={handleSubmit} disabled={disabled} />
			<Box sx={{ height: 40 }}>
				<Fade
					in={disabled}
					unmountOnExit
				>
					<CircularProgress />
				</Fade>
			</Box>
			{emails.map((data) => (
				<TextReply
					key={uuid.v4()}
					email={data.email}
					content={data.content}
				/>
			))}

		</div>
	);
};

export default Home;
