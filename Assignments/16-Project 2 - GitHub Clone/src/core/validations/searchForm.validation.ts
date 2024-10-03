import * as yup from 'yup';
const schema = yup
  .object({
    searchQuery: yup.string().required("fill the search form"),
  })
  .required();

export default schema;
