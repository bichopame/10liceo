"use client";

import { 
  deleteClass, 
  deleteSubject, 
} from "@/lib/actions";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FormContainerProps } from "./FormContainer";





const deleteActionMap = {
  subject: deleteSubject,
  class: deleteClass,
  //teacher: deleteTeacher,
  //student: deleteStudent,
  //exam: deleteExam,
  // TODO: OTHER DELETE ACTIONS
  //parent: deleteSubject,
  //lesson: deleteSubject,
  //assignment: deleteSubject,
  //result: deleteSubject,
  //attendance: deleteSubject,
  //event: deleteSubject,
  //Announcement: deleteSubject,
};

//import TeacherForm from "./forms/TeacherForm";
//import StudentForm from "./forms/StudentForm";

//USA CARGA DIFERIDA

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Cargando...</h1>,
});

const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Cargando...</h1>,
});

const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <h1>Cargando...</h1>,
});

const ClassForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <h1>Cargando...</h1>,
});

const ExamForm = dynamic(() => import("./forms/ExamForm"), {
  loading: () => <h1>Loading...</h1>,
});

// TODO: OTHER FORMS

const forms: {
  [key: string]: (
    setOpen: Dispatch<SetStateAction<boolean>>,
    type: "create" | "update",
    data?: any,
    relatedData?: any
  ) => JSX.Element;
} = {
  subject: (setOpen, type, data, relatedData) => (
    <SubjectForm 
      type={type} 
      data={data} 
      setOpen={setOpen} 
      relatedData={relatedData}
    />
  ),
  class: (setOpen, type, data, relatedData) => (
    <ClassForm
      type={type}
      data={data}
      setOpen={setOpen}
      relatedData={relatedData}
    />
  ),

  //teacher: (type, data, setOpen) => (
    //<TeacherForm 
      //type={type} 
      //data={data} 
      //setOpen={setOpen} 
      //relatedData={relatedData}
    ///>
  //),
  //student: (type, data, setOpen) => (
    //<StudentForm 
      //type={type} 
      //data={data} 
      //setOpen={setOpen} 
      //relatedData={relatedData}
    ///>
  //),
    //exam: (setOpen, type, data, relatedData) => (
    //<ExamForm
      //type={type}
      //data={data}
      //setOpen={setOpen}
      //relatedData={relatedData}
    ///>
};

const FormModal = ({
  table,
  type,
  data,
  id,
  relatedData
  
}: FormContainerProps & {relatedData?:any}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-[#A7E0FF]"
      : type === "update"
      ? "bg-[#A7E0FF]"
      : "bg-red-300";

  const [open, setOpen] = useState(false);

    const Form = ()=> {

      const [state, formAction] = useFormState(deleteActionMap[table], {
        success:false, 
        error:false,
      });

    const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`${table}¡ ha sido eliminada.!`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router]);


    return type === "delete" && id ? (
      <form action={formAction} className="p-4 flex flex-col gap-4">
        <input type="text | number" name="id" value={id} hidden/>
        <span className="text-center font-medium">
          Todos los datos se perderán. ¿Estás seguro de que quieres eliminar
          esto? {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Elinimar
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](setOpen, type, data, relatedData)
    ) : (
      "¡Formulario no encontrado!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
