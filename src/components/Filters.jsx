import { Form, Link, useLoaderData } from "react-router-dom"
import { FormCheckbox, FormInput, FormRange, FormSelect } from "../components"

function Filters() {
    const { meta } = useLoaderData()
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <FormInput type="search" label="search product" name="search" size="input-sm"/>
        {/* CATEGORIES */}
        <FormSelect label="select category" name="category" list={meta.categories} size="select-sm"/>
        {/* COMPANIES */}
        <FormSelect label="select company" name="company" list={meta.companies} size="select-sm"/>
        {/* A-Z */}
        <FormSelect label="sort by" name="order" list={["a-z", "z-a", "high", "low"]} size="select-sm"/>
        {/* PRICE */}
        <FormRange name="price" size="range-sm" label="select-price"/>
        {/* SHIPPING */}
        <FormCheckbox label="free shipping" name="shipping" defaultValue={false} size="checkbox-sm"/>
        <button type="submit" className="btn btn-primary btn-sm">
            Search
        </button>
        <Link to="/products" className="btn btn-accent btn-sm">
            Reset
        </Link>
    </Form>
  )
}

export default Filters