export interface iClassificationRequest {
  name: string;
};

export interface iClassificationResponse extends iClassificationRequest {
  id: string;
};

export interface iClassificationUpdate {
  name?: string;
};
