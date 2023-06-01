import * as yup from "yup";

export const classificationRequestSerializer = yup.object().shape({
  name: yup.string().required(),
});

export const classificationResponseSerializer = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
});

export const classificationListResponseSerializer = yup.array(classificationResponseSerializer);

export const classificationUpdateSerializer = yup.object().shape({
  name: yup.string().notRequired(),
});
