export default {
    name: "TheNavigation",

    props: ['item'],

    template: `
    <header class="header">
        <nav class="navbar">
            <a href="#" class="nav-logo"><img src="images/logo-black.svg" alt="" srcset="" /></a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Contact</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
    
    
    `,
}