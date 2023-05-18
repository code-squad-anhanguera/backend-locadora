import * as yup from "yup";

export const userRequestSerializer = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().required(),
  isAdm: yup.boolean().notRequired()
})

export const userResponseSerializer = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().required(),
  isAdm: yup.boolean().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
})

export const userResponseListSerializer = yup.array(userResponseSerializer)

export const userLoginSerializer = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
})

export const userUpdateSerializer = yup.object().shape({
  name: yup.string().notRequired(),
  surname: yup.string().notRequired(),
  email: yup.string().notRequired(),
  password: yup.string().notRequired()
})
