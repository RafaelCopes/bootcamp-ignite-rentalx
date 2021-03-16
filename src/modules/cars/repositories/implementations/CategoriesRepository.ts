import { Category } from '../../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new CategoriesRepository();
    }

    return this.INSTANCE;
  }

  public findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);

    return category;
  }

  public list(): Category[] {
    return this.categories;
  }

  public create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category({ name, description });

    this.categories.push(category);
  }
}

export { CategoriesRepository };
