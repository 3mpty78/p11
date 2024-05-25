/* eslint-disable react/prop-types */
const Field = ({ title, value, onChange, type, classname, name }) => {
    return (
        <div className={classname}>
            <label htmlFor={title}>{title}</label>
            <input
                id={title}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Field;
