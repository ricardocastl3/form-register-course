import { useForm, useFieldArray } from "react-hook-form";
import {
  FieldArrayGroup,
  FieldGroup,
  FormAndFields,
  FormContainer,
} from "./styles";

import { AiOutlineUser, AiOutlineMail, AiFillApi } from "react-icons/ai";
import { PiTrashFill } from "react-icons/pi";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "../Alert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormRegisterSchema = z.object({
  name: z.string().nonempty("Preencha o campo por favor..."),
  email: z.string().nonempty("Informe o e-mail").email(),
  techs: z
    .array(
      z.object({
        title: z.string().nonempty("Informe a tecnologia"),
        knowledge: z.coerce
          .number()
          .min(1, "Mínimo de 1-100%")
          .max(100, "Máximo - 100%"),
      })
    )
    .min(2, "Selecione pelo menos 2 tecnologias"),
});

type FormInputsData = z.infer<typeof FormRegisterSchema>;

export function FormRegister() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputsData>({
    resolver: zodResolver(FormRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      techs: [],
    },
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "techs",
  });

  function AddNewTech() {
    append({
      title: "",
      knowledge: 0,
    });
  }

  function RemoveTech(event: any) {
    remove(event.target.name);
  }

  const successRegister = () =>
    toast.success("Cadastro realizado com êxito", {
      bodyStyle: {
        fontSize: "0.87rem",
      },
      icon: true,
      pauseOnHover: false,
      closeOnClick: false,
      autoClose: 2000
    });

  function CreateNewUser(data: FormInputsData) {
    successRegister();
    reset()
  }

  return (
    <FormContainer>
      <ToastContainer />
      <FormAndFields onSubmit={handleSubmit(CreateNewUser)}>
        <h2>
          <AiFillApi size={20} />
          Criar Conta
        </h2>
        <FieldGroup>
          <label htmlFor="name">
            Name
            <AiOutlineUser size={20} />
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Seu nome...."
          />
          {errors.name?.message && <Alert content={errors.name?.message} />}
        </FieldGroup>

        <FieldGroup>
          <label htmlFor="email">
            E-mail
            <AiOutlineMail size={20} />
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            placeholder="Seu email..."
          />
          {errors.email?.message && <Alert content={errors.email?.message} />}
        </FieldGroup>

        <FieldArrayGroup>
          <div>
            <label htmlFor="">Tecnologias</label>
            <button type="button" onClick={AddNewTech}>
              Adicionar
            </button>
          </div>
          {fields.map((field, index) => {
            return (
              <section key={field.id}>
                <article>
                  <input
                    {...register(`techs.${index}.title`)}
                    type="text"
                    placeholder="Nome..."
                  />
                  {errors.techs?.[index]?.title?.message && (
                    <Alert content={errors.techs?.[index]?.title?.message} />
                  )}
                </article>

                <article>
                  <input
                    {...register(`techs.${index}.knowledge`)}
                    type="number"
                    placeholder="Anos de experiência"
                  />
                  {errors.techs?.[index]?.knowledge && (
                    <Alert
                      content={errors.techs?.[index]?.knowledge?.message}
                    />
                  )}
                </article>
                <article>
                  <button name={`${index}`} type="button" onClick={RemoveTech}>
                    <PiTrashFill size={15} />
                    Remover
                  </button>
                </article>
              </section>
            );
          })}
          {errors.techs?.message && <Alert content={errors.techs.message} />}
        </FieldArrayGroup>

        <FieldGroup>
          <button type="submit">Cadastrar</button>
        </FieldGroup>
      </FormAndFields>
    </FormContainer>
  );
}
