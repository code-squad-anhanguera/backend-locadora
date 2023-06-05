export interface iMovieRequest {
  name: string;
  description: string;
  studio: string;
  classificationId: number;
  genre: string;
};

export interface iMovieResponse extends iMovieRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface iMovieUpdate {
  name?: string;
  description?: string;
  studio?: string;
  classificationId?: number;
  genre?: string;
};
