/* eslint-disable react/prop-types */

const Field = ({ title, value, onChange, type }) => {
    return (
        <>
            <label htmlFor={title}>{title}</label>
            <input id={title} type={type} value={value} onChange={onChange} />
        </>
    );
};

export default Field;
