
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
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
                    toast.success('Successfully Added', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                    });
                    reset();
                }
            });
    };
    return (
        <>
     
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

                    <input type="submit" value="Add service" />
                </form>
            </div>
            <ToastContainer
                position="top-right"
            />
        </>
    );
};

export default AddNewService;



// "https://i.ibb.co/RbMydLp/basic-computer.jpg"
//The programme offers basic computer training to equip a person to use computers in day-to-day life for professional and personal use. After completing the course,

// "https://i.ibb.co/HKKZ7g5/health-service.png"
//Aform of primary care, where the patient seeks the doctor's advice at Digital Village center about non-emergency medical problems which don't require imme

// "https://i.ibb.co/yNbwTNW/Online-Shopping.png"
//Promotions on clothing, electronics, sports and more. Check out all the deals! Worldwide Delivery. Safe Payments. 24/7 Help Center. Subscribe For Updates. Download Our Mobile App. Types: Clothing, Phones, Computer, Consumer...

// "https://i.ibb.co/ydWHvs7/Photography.jpg"
///Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by 

// "https://i.ibb.co/562c1h6/solar.jpg"
//Solar energy is radiant light and heat from the Sun that is harnessed using a range of technologies such as solar power to generate electricity

// "https://i.ibb.co/q7wfvK2/technitian.jpg"
//A technician is a worker in a field of technology who is proficient in the relevant skill and technique,[1] with a relatively practical understanding of the theoretical principles