export interface UserReq {
  phoneNumber: string;
}

export interface UserRes {
  _id: string;
  phoneNumber: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
