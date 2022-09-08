import React from "react";

function Header() {
    return (
        <nav>
            <img src={require(".././images/netflix_logo.png")} alt="Main Logo" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>News & Popular</li>
            </ul>
        </nav>
    )
}

export default Header;