import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserM, UserDocument } from './app-one.model';

@Injectable()
export class ApiOneService {
  constructor(
    @InjectModel(UserM.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async register(name: string) {
    const user = new this.userModel({ name });
    return user.save();
  }
}
