//packages
import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            FirstName:
            <input
              {...register("firstName", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 5,
                  message: "Длина должна составлять более 5 символов",
                },
              })}
            />
          </label>
          <input type="submit" />
        </div>
        <div>
          {errors?.firstName && <p>{errors?.firstName.message || "Error"}</p>}
        </div>
        {/* <div>
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div> */}
      </form>
    </div>
  );
};

export default App;
