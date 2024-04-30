import BankAccountCard from "../components/BankAccountCard/BankAccountCard";
import Layout from "../components/Layout";

const userData = {
    name: "Tony Jarvis",
    accounts: [
        {
            title: "Checking (x8349)",
            amount: 2082.79,
            balance: "Available Balance",
        },
        {
            title: "Savings (x6712)",
            amount: 10928.42,
            balance: "Available Balance",
        },
        {
            title: "Credit Card (x8349)",
            amount: 184.3,
            balance: "Current Balance",
        },
    ],
};

const User = () => {
    const formatAmount = (amount) => {
        const parts = amount.toFixed(2).split("."); // Séparer les parties entière et décimale
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Ajouter la virgule pour la séparation des milliers
        return parts.join("."); // Joindre les parties entière et décimale
    };
    return (
        <Layout>
            <section className="bankAccounts">
                <h1>
                    Welcome back <br />
                    {userData.name}!
                </h1>
                <button>Edit name</button>
                {userData.accounts.map((account, idx) => (
                    <BankAccountCard
                        key={idx}
                        title={account.title}
                        amount={formatAmount(account.amount)}
                        balance={account.balance}
                    />
                ))}
            </section>
        </Layout>
    );
};

export default User;
