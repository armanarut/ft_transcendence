import { Customer } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
export declare class CustomersService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    createCustomers(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    getCustomers(): Promise<Customer[]>;
    findCustomersById(id: number): Promise<Customer>;
}
