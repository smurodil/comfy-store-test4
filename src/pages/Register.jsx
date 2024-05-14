import { FormInput, SubmitBtn } from "../components"
import { Link, Form, useActionData } from "react-router-dom"
import { useRegister } from '../hooks/useRegister'
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");
  let email = formData.get("email");
  let password = formData.get("password");

  return { displayName, photoURL, email, password };
}

function Register() {
  const data = useActionData()
  const { register } = useRegister();

  useEffect(() => {
    if(data){
      register(data)
    }
  }, [data])

  return (
    <div className="h-screen grid place-content-center">
        <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
            <h4 className="text-center text-3xl font-bold">Register</h4>
            <FormInput type="text" label="Display Name:" name="displayName" defaultValue="user"/>
            <FormInput type="url" label="Photo URL:" name="photoURL" defaultValue="https://..."/>
            <FormInput type="email" label="Email:" name="email" defaultValue="test@gmail.com"/>
            <FormInput type="password" label="Password:" name="password" defaultValue="secret"/>
            <div className="mt-4">
              <SubmitBtn text="register" />
            </div>
            <p className="text-center">
                Not a member yet ? 
                <Link to="/login" className="capitalize link-primary">
                  login
                </Link>
            </p>
        </Form>
    </div>
  )
}

export default Register