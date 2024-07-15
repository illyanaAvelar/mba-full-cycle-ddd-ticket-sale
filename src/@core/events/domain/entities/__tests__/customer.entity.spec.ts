import Cpf from '../../../../common/domain/value-objects/cpf.vo';
import { Customer, CustomerId } from '../customer.entity';

test('deve criar um cliente', () => {
  const customer = Customer.create({
    name: 'joao',
    cpf: '993.464.130-50',
  });

  expect(customer).toBeInstanceOf(Customer);
  expect(customer.id).toBeDefined();
  expect(customer.id).toBeInstanceOf(CustomerId);
  expect(customer.name).toBe('João');
  expect(customer.cpf.value).toBe('993.464.130-50');

  const customer2 = new Customer({
    id: new CustomerId(customer.id.value),
    name: 'João xpto',
    cpf: new Cpf('703.758.870-91'),
  });

  console.log(customer.equals(customer2));
});
