//packages
import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register, //регистрация инпута для хука
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  console.log(watch("firstName"));

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
              placeholder="text"
              {...register("firstName", {
                // регистрация инпута и присвоение этому инпуту имени
                required: "Поле обязательно к заполнению", // нужна ли проверка, можно вместо булева значения использовать текст как в этом случае
                minLength: {
                  // дополнительная проверка
                  value: 5,
                  message: "Длина должна составлять более 5 символов",
                },
              })}
            />
          </label>
          <input type="submit" />
        </div>
        <div>
          {errors?.firstName && <p>{errors?.firstName.message || "Error"}</p>};
        </div>
        {/* <div>
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div> */}
      </form>
    </div>
  );
};

export default App;
