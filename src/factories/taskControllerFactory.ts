import { log } from "console";
import { AddTaskController } from "../adapters/controllers/task/addTask";
import { DateValidatorAdapter } from "../adapters/dateValidatorAdapter";
import { DbAddTask } from "../dataSources/db/dbAddTask";
import { TaskMongoRepository } from "../dataSources/db/repository/taskMongoRepository";
import { LogErrorControllerDecorator } from "../adapters/decorators/logErrorControllerDecoratos";
import { LogErrorMongoRepository } from "../dataSources/db/repository/logErrorMongoRepository";

export const taskControllerFactory = () => {
  const dateValidatorAdapter = new DateValidatorAdapter();
  const taskMongoRepository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(taskMongoRepository);
  const taskController = new AddTaskController(dbAddTask, dateValidatorAdapter);
  const logErrorMongoRepository = new LogErrorMongoRepository();
  return new LogErrorControllerDecorator(
    taskController,
    logErrorMongoRepository
  );
};
