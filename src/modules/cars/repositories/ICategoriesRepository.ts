import { Category } from '../models/Category';

type ICreateCategoryDTO = Omit<Category, 'id' | 'created_at'>;

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
