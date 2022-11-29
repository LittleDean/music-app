import Header from "~/components/Layout/components/Header";

function HeaderOnly({ children }) {
    return (<div>
        <Header />
        <div className="container"></div>
        {children}
    </div>);
}

export default HeaderOnly;