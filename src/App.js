import {useForm} from "react-hook-form";

function App() {

    const {
        register,
        handleSubmit,
        formState: {errors, submitCount},
        watch,
    } = useForm({mode: "onChange"});

    const onSubmit = data => console.log('Sent:', data);
    const name = watch('name');

    console.log('Name:' + name);

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>FORM</h1>
            <input
                defaultValue="John"
                {...register('name', {required: true, maxLength: 5})}
            />
            {errors.name && <i>name is required, 5 symbols max</i>}
            <br/>
            <input
                {...register('age', {required: true, pattern: /\d?\d/, min: 18, max: 99})}
            />
            {errors.age && <i>age is required 18 - 99</i>}
            <br/>
            <select {...register('answer')}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <br/>
            <input type="submit"/>
            <br/>
            How many times the form being sent? {submitCount}
        </form>
    );
}

export default App;
