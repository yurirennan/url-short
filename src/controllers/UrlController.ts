import { Request, Response } from "express";
import { UrlUseCase } from "../useCases/UrlUseCase";

class UrlController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { urlOrigin } = request.body;
    const urlUseCase = new UrlUseCase();    

    const url = await urlUseCase.create(urlOrigin);
    
    return response.json(url)
  }

  async handleRedirect(request: Request, response: Response): Promise<void>{
    const { hash } = request.params;
    const urlUseCase = new UrlUseCase();     
    
    const url = await urlUseCase.findOriginUrl(hash);
    
    response.redirect("http://" + `${url}`);
  }
}

export { UrlController };