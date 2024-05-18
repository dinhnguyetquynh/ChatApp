import {UserRes} from '../models/user';
import request, {Request} from '../utils/request';

class UserService {
  constructor(private req: Request) {
    this.req = req;
  }
  async getUserByPhone(phoneNumber: string) {
    return this.req.get<UserRes>(`/users/${phoneNumber}/phone`);
  }
}
const userService = new UserService(request);
export default userService;
