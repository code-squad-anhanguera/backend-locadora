import { iMovieRequest } from "../../interfaces/movies.interface";
import { iUserRequest } from "../../interfaces/user.interface";

declare global {
  namespace Express {
    interface Request {
      validatedBody: any;
      user: {
        id: string;
        email: string;
        isAdm: boolean;
      }
    }
  }
}

export { }