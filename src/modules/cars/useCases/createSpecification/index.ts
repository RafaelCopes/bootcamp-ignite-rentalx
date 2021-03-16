import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationsController } from './CreateSpecificationsController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const categoriesRepository = SpecificationsRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  categoriesRepository,
);

const createSpecificationsController = new CreateSpecificationsController(
  createSpecificationUseCase,
);

export { createSpecificationsController };
