import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoriesController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategory';

const categoriesRouter = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRouter.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRouter.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.post('/import', upload.single('file'), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { categoriesRouter };
