import * as yup from "yup";

export const movieRequestSerializer = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  studio: yup.string().required(),
  classificationId: yup.number().required(),
  genre: yup.string().required()
});

export const movieResponseSerializer = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  description: yup.string().required(),
  studio: yup.string().required(),
  classificationId: yup.number().required(),
  genre: yup.string().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required()
});

export const movieResponseListSerializer = yup.array(movieResponseSerializer);

export const movieUpdateSerializer = yup.object().shape({
  name: yup.string().notRequired(),
  description: yup.string().notRequired(),
  studio: yup.string().notRequired(),
  classificationId: yup.number().notRequired(),
  genre: yup.string().notRequired()
});