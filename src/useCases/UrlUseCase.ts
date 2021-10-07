import path from 'path'

import { nanoid } from "nanoid";
import * as dotenv from 'dotenv';

import { UrlModel } from '../database/models/Url';
import { Document } from 'mongoose';

dotenv.config({
  path: path.resolve(__dirname, "..", "..", ".env"),
});

class UrlUseCase {
  async create(originUrl: string): Promise<Document<typeof UrlModel>> {

    const hash = nanoid();
    const shortedUrl = `${process.env.API_URL}/${hash}`;

    const urlAlreadyExists = await UrlModel.findOne({
      originUrl
    });

    if(urlAlreadyExists){
      return urlAlreadyExists;
    }

    const url = await UrlModel.create({
      originUrl,
      hash,
      shortedUrl
    });

    await url.save();

    return url;
  }

  async findOriginUrl(hash: string): Promise<string> {
    const url = await UrlModel.findOne({ hash });
    
    if(!url?.originUrl) {
      throw new Error("Error");
    }

    return url.originUrl;
  }
}

export { UrlUseCase };