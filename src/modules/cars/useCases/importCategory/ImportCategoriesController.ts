import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoriesController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  public handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCase.execute({ file });

    return response.send();
  }
}

export { ImportCategoriesController };
