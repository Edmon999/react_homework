import React, {useState} from 'react'
export default function Contact(){
    const defaultValues = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const [values, setValues] = useState(defaultValues)
    const handleChange = (event) => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const Send = ()=>{
        console.log(values)
    }
    return(
        <div>
            <input 
            type="text" 
            placeholder="Your Name"
            value={values.name}
            onChange={handleChange}
            name="name"
            />
            <input 
            type="text" 
            placeholder="Your Email"
            value={values.email}
            onChange={handleChange}
            name="email"
            />
            <input 
            type="text" 
            placeholder="Your Phone"
            value={values.phone}
            onChange={handleChange}
            name="phone"
            />
            <textarea
            placeholder="Your message"
            value={values.message}
            onChange={handleChange}
            name="message"
            >
             
            </textarea>
            <button
            onClick={Send}
            >
                Send
            </button>
        </div>
    )
}