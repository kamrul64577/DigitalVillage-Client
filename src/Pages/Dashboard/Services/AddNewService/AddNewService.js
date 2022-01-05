
import { useForm } from "react-hook-form";
import Navigation from '../../../Shared/Navigation/Navigation';
import './AddNewService.css'

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      fetch("https://shielded-falls-80975.herokuapp.com/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            alert("Successfully Added");
            reset();
          }
        });
    };
    return (
        <>
      <Navigation></Navigation>
      <div className="AddServices">
        <h4 className="mt-5 text-center">You Can Add A New Service Here</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            placeholder="Service Name"
          />
          <textarea {...register("description")} placeholder="description" />
          <input {...register("img")} placeholder="Image Url" />
          <input {...register("number")} placeholder="Price" />

          <input type="submit" />
        </form>
      </div>
    </>
    );
};

export default AddNewService;