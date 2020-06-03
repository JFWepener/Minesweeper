import Nav from "./Nav";

const Layout = ({ mainTitle, children }) => (
    <div>
        <Nav />
        <h1>{mainTitle}</h1>
        <hr />
        {children}
    </div>
);

export default Layout;
