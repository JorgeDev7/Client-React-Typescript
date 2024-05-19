import { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
    product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {

    const { name, price, availability } = product;
    const isAvailable = availability;

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isAvailable ? 'Disponible' : 'No Disponible'}
            </td>
            <td className="p-3 text-lg text-gray-800 ">

            </td>
        </tr>
    );
}
