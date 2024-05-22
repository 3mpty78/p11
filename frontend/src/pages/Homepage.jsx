import "../App.css";
import Banner from "../components/Banner/Banner";
import FeatureCard from "../components/Features/FeatureCard";
import data from "/src/featuresData.json";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userPost } from "../redux/slices/userSlice";

function Homepage() {
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem("token"));
    useEffect(() => {
        if (token) {
            dispatch(userPost({ token }));
        }
    }, [token, dispatch]);
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
