import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';
export declare class CustomersController {
    private readonly customerService;
    constructor(customerService: CustomersService);
    getCustomers(): Promise<import("../../../typeorm").Customer[]>;
    findCustomersById(id: number): Promise<import("../../../typeorm").Customer>;
    createCustomers(createCustomerDto: CreateCustomerDto): Promise<import("../../../typeorm").Customer>;
}
