/* eslint-disable react/prop-types */

const FeatureCard = ({ icon, title, description }) => {
    return (
        <>
            <article>
                <img src={icon} alt={`${title}'s icon`} />
                <h3>{title}</h3>
                <p>{description}</p>
            </article>
        </>
    );
};

export default FeatureCard;
