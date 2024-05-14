import axios from "axios";

const productUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
    baseURL: productUrl,
})

export const formatPrice = (price) => {
    const dollarAmout = new Intl.NumberFormat('en-US', {
        currency: "USD",
        style: "currency"
    }).format((price / 100).toFixed())

    return dollarAmout
}

export const genetareAmountOptions = (number) => {
    return Array.from({length: number}, (_, index) => {
        let amount = index + 1;

        return (
            <option key={index} value={amount}>
                {amount}
            </option>
        )
    })
}