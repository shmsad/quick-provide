import React from "react";
import { CheckCircle, Layers, Image, DollarSign } from "lucide-react";
import ProductLayout from "../../components/ProductLayout";

export default function FlexPrintingPage() {
    return (
        <ProductLayout
            title="Flex Printing"
            subtitle="Durable • High Resolution • Affordable Branding"
            description={
                <>
                    We provide{" "}
                    <span className="font-semibold text-indigo-600">
                        high-quality flex printing
                    </span>{" "}
                    services for banners, posters, billboards, and outdoor
                    advertisements. Our flex prints are{" "}
                    <span className="font-semibold">durable, weather-resistant</span>,
                    and designed for both indoor and outdoor branding needs.
                </>
            }
            heroImage="/images/flex-hero.jpeg"
            gradient="from-indigo-700/80 to-purple-700/80"
            accentColor="indigo"
            features={[
                {
                    title: "Durable Prints",
                    text: "Weather-resistant material ensures long-lasting impact.",
                    icon: <CheckCircle className="text-indigo-600 w-8 h-8" />,
                },
                {
                    title: "High Resolution",
                    text: "Sharp and vibrant graphics with modern printing technology.",
                    icon: <Image className="text-indigo-600 w-8 h-8" />,
                },
                {
                    title: "Custom Sizes",
                    text: "We print from small posters to large billboards.",
                    icon: <Layers className="text-indigo-600 w-8 h-8" />,
                },
                {
                    title: "Cost Effective",
                    text: "Affordable rates with premium quality assurance.",
                    icon: <DollarSign className="text-indigo-600 w-8 h-8" />,
                },
            ]}
        />
    );
}
