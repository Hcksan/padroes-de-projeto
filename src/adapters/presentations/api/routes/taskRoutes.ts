import { Router } from "express";
import { taskControllerFactory } from "../../../../factories/taskControllerFactory";
import { expressRouteAdapter } from "../../../expressRouteAdapter";

export default (router: Router): void => {
  router.post("/tasks", expressRouteAdapter(taskControllerFactory(
    
  )));
};
