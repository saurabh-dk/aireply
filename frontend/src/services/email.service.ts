import axios from 'axios'
import { AiRequest } from '../models/airequest'
import { Reply } from '../models/reply'

// Local API route for FastAPI
const API_URL = "http://127.0.0.1:8000"

class EmailService {
  async getEmailReply(request: AiRequest): Promise<Reply> {
	const response = await axios.post(API_URL + '/get_reply', request);

	return response.data;
  }
}

export default new EmailService()
