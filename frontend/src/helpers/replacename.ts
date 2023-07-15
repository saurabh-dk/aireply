export const replaceName = (text: string, oldName: string, newName: string) : string => {
	const regex = new RegExp(oldName, 'gi');
	return text.replace(regex, newName);
 }