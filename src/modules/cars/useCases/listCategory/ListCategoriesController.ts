import { Request, Response } from 'express';

import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  public handle(request: Request, response: Response): Response {
    const categories = this.listCategoryUseCase.execute();

    return response.status(201).json(categories);
  }
}

export { ListCategoriesController };
