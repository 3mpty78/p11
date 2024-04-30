/* eslint-disable react/prop-types */
const BankAccountCard = ({ title, amount, balance }) => {
    return (
        <div className="bankCard">
            <div>
                <p>Argent Bank {title}</p>
                <h2>${amount}</h2>
                <p>{balance}</p>
            </div>
            <button>View transactions</button>
        </div>
    );
};

export default BankAccountCard;
