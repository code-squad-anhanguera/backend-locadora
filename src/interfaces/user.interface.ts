export interface iUserRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  isAdm: boolean
}

export interface iUserResponse extends iUserRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserUpdate {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
}
