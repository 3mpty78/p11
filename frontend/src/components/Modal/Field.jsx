/* eslint-disable react/prop-types */
const Field = ({ title, value, onChange, type, classname, name, disabled }) => {
    return (
        <div className={classname}>
            <label htmlFor={title}>{title}</label>
            <input
                disabled={disabled}
                id={title}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
};

export default Field;
