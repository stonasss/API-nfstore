import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export class AuthToken {
  constructor() {
    this.uuid = uuidv4();
    this.expire_at = dayjs().add(1, 'hour').format();
  }
}