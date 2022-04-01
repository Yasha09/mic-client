import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type UserDocument = UserM & mongoose.Document;

@Schema()
export class UserM {
  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(UserM);
