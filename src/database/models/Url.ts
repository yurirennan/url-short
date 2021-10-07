import { prop, getModelForClass } from '@typegoose/typegoose';

class Url {
  @prop({ required: true })
  hash?: string;

  @prop({ required: true })
  originUrl?: string;

  @prop({ required: true })
  shortedUrl?: string;
}

export const UrlModel = getModelForClass(Url);