import { Customer } from "./customer.entity";
import { User } from "./user.entity";
declare const entities: (typeof Customer)[];
export { User, Customer };
export default entities;
