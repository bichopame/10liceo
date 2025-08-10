"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import InputField from "../InputField";
import Image from "next/image";
import { Input } from "postcss";

const schema = z.object({
  username: z
  .string()
  .min(3, { message: '¡El nombre de usuario debe tener al menos 3 caracteres!'})
  .min(20, { message: '¡El nombre de usuario debe tener máximo 20 caracteres!'}),
  email:z.string().email({ message:"Correo electrónico no válido"}),
  password:z.string().min(8, { message: '¡La contraseña debe tener al menos 8 caracteres!'}),
  firstName:z.string().min(1, { message: '¡Debe registrar nombre!'}),
  lastName:z.string().min(1, { message: '¡Debe registrar apellidos!'}),
  phone:z.string().min(1, { message: '¡Debe registrar telefono!'}),
  address:z.string().min(1, { message: '¡Debe registrar dirección!'}),
  bloodType:z.string().min(1, { message: '¡Debe registrar tipo de sangre!'}),
  birthday:z.date({ message: '¡Debe registrar fecha de nacimiento!'}),
  sex:z.enum(["male","female"],{ message: '¡Debe registrar genero!'}),
  img:z.instanceof(File,{message: '¡Debe registrar fotografia!'}),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type, 
  data,
}: {
  type:"create" | "update"; 
  data?:any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) =>{
    console.log(data);
});


  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Crear un nuevo profesor</h1>
      <span className="text-xs text-gray-400 font-medium">
        Información de autenticación
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField 
          label="Nombre de usuario"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField 
          label="Correo"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />
        <InputField 
          label="Contraseña"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
      </div>

      <span className="text-xs text-gray-400 font-medium">
        Información personal
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField 
          label="Nombres"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField 
          label="Apellidos"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField 
          label="Telefono"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField 
          label="Dirección"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField 
          label="Tipo de Sangre"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField 
          label="Fecha de Nacimiento"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />
      
        <div className="felx flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sexo</label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"{...register("sex")} defaultValue={data?.sex}>
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
          </select>
          {errors?.sex?.message && (
            <p className="text-xs text-red-400">{errors.sex.message.toString()}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
            <Image src="/upload.png" alt="" width={28} height={28}/>
            <span>Sube una foto</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden"/>
          {errors?.img?.message && (
          <p className="text-xs text-red-400">{errors.img.message.toString()}</p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type==="create"?"Crear":"Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
