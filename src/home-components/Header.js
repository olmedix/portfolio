import "../css/home.css";

export default function Header(){
    return(
        <header className="header__container">
            <h1 className="header__title">Portfolio</h1>
            <nav className="header__nav">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
                <a href="#">NewsLetter</a>
            </nav>
        </header>
    );
}