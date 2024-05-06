import "../App.css";
import Banner from "../components/Banner/Banner";
import FeatureCard from "../components/Features/FeatureCard";
import data from "/src/featuresData.json";
import Layout from "../components/Layout";

function Homepage() {
    return (
        <>
            <Layout>
                <Banner />
                <section className="features">
                    {data.map((card, idx) => (
                        <FeatureCard
                            key={idx}
                            title={card.title}
                            icon={card.icon}
                            description={card.description}
                        />
                    ))}
                </section>
            </Layout>
        </>
    );
}

export default Homepage;
