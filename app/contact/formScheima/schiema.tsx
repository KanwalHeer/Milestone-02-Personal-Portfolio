import * as yup from "yup"

// yup sceima
 const contactSchiema =yup.object().shape({
  name:yup.string().required().min(5).max(10),
  email:yup.string().required().email(),
  phone:yup.number().required(),
  message:yup.string().required()
})
export default contactSchiema