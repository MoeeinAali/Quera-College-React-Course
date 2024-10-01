import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().email().required("email is required"),
    message: yup.string().required("message is required")
}).required();

function App() {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log(data);

    };
    return (
        <div className="space-y-8 w-1/2 mx-auto mt-10">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                    We'd love to hear from you. Fill out the form below and we'll get back to
                    you as soon as possible.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        {...register("name")}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="name"
                        placeholder="Enter your name"
                    />
                    <p className="text-red-600">{errors.name?.message}</p>

                </div>
                <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        {...register("email")}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                    />
                    <p className="text-red-600">{errors.email?.message}</p>

                </div>
                <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        {...register("message")}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                        id="message"
                        placeholder="Enter your message"
                        defaultValue={""}
                    />
                    <p className="text-red-600">{errors.message?.message}</p>

                </div>
                <button type={"submit"}
                        className="bg-black  text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default App;