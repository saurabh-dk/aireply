import axios from 'axios'
import { AiRequest } from '../models/airequest'
import { Reply } from '../models/reply'

// Local API route for FastAPI
const API_URL = "https://ak52xf613f.execute-api.us-west-1.amazonaws.com/"

class EmailService {
  async getEmailReply(request: AiRequest): Promise<Reply> {
	const response = await axios.post(API_URL, request);

	return response.data;
  }
}

export default new EmailService()
