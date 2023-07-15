import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface TextInputProps {
	onSubmit: (text: string, context: string, purpose: string) => void;
	disabled: boolean
}

const TextInput: React.FC<TextInputProps> = ({ onSubmit, disabled = false }) => {

	const [text, setText] = useState('');
	const [context, setContext] = useState('');
	const [purpose, setPurpose] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		if (name === 'text') {
			setText(value);
		} else if (name === 'context') {
			setContext(value);
		} else if (name === 'purpose') {
			setPurpose(value);
		}
	};

	const handleSubmit = () => {
		onSubmit(text, context, purpose);
	};

	return (
		<div>
			<TextField
				sx={{ mt: 2 }}
				name="text"
				label="First names and emails separated by comma, add more using semi-colon (;)"
				variant="outlined"
				value={text}
				onChange={handleChange}
				fullWidth
			/>
			<TextField
				sx={{ mt: 2 }}
				name="purpose"
				label="Purpose"
				variant="outlined"
				value={purpose}
				onChange={handleChange}
				fullWidth
			/>
			<TextField
				sx={{ mt: 2 }}
				name="context"
				label="Context"
				variant="outlined"
				value={context}
				multiline
				rows={3}
				onChange={handleChange}
				fullWidth
			/>
			<Button
				sx={{ mt: 2 }}
				variant="contained"
				color="primary"
				disabled={disabled}
				onClick={handleSubmit}>
				Submit
			</Button>
		</div>
	);
};

export default TextInput;
