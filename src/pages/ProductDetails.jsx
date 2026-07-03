import { useParams } from "react-router-dom";
import { productsData } from "../data/productsData";
import { Helmet } from "react-helmet-async";

export default function ProductDetails() {

    const { slug } = useParams();

    const product = productsData.find(
        (p) => p.slug === slug
    );

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    return (
        <>
            <Helmet>
                <title>{product.name} | NovaJoy Remedies</title>

                <meta
                    name="description"
                    content={`${product.name} - ${product.composition}. ${product.description} Manufactured by NovaJoy Remedies.`}
                />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",

                        name: product.name,

                        image: [
                            `https://www.novajoyremedies.com${product.image}`
                        ],

                        description: product.description,

                        brand: {
                            "@type": "Brand",
                            name: "NovaJoy Remedies",
                        },

                        category: product.category,

                        additionalProperty: [
                            {
                                "@type": "PropertyValue",
                                name: "Composition",
                                value: product.composition,
                            },
                            {
                                "@type": "PropertyValue",
                                name: "Pack",
                                value: product.pack,
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <div style={{ padding: "40px" }}>

                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "300px" }}
                />

                <h1>{product.name}</h1>

                <p><strong>Composition:</strong> {product.composition}</p>

                <p><strong>Pack:</strong> {product.pack}</p>

                <p>{product.description}</p>

                <h3>Benefits</h3>

                <ul>
                    {product.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>

            </div>
        </>
    );
}