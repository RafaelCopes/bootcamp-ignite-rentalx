import { Specification } from '../models/Specification';

type ICreateSpecificationDTO = Omit<Specification, 'id' | 'created_at'>;

interface ISpecificationsRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): void;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
