import { Name } from "../models/name";

export const splitnames = (input: string) : Name[] => {
	const pairs = input.split(';');

	const jsonArray: Name[] = [];

	pairs.forEach(pair => {
		const [name, email] = pair.split(',');

		const jsonObject = {
			name: name.trim(),
			email: email.trim()
		};
		
		jsonArray.push(jsonObject);
	});

	return jsonArray;
}