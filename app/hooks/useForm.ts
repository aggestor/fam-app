import { useState } from "react";

export default function useForm(initialValues:object) : any[]{
  const [values, setValues] = useState<object>(initialValues);

  return [
    values,
    (event) : void =>  {
      if (event.target.getAttribute("data-type") !== "text") {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      } else {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      }
    },
  ];
}
