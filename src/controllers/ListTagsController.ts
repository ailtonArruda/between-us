import { Response, Request } from "express";
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
  async handle(request: Request, response: Response) {
    const listTagsConstroller = new ListTagsService();

    const tags = await listTagsConstroller.execute();

    return response.json(tags);
  }
}

export { ListTagsController };