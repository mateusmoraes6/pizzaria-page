import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <span>Pizzaria Fornatta</span>
            <nav>
                <ul>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Who we are</a></li>
                    <li><a href='#'>Events</a></li>
                    <li><a href='#'>Contacts</a></li>
                </ul>
            </nav>
            <div>
                <button><a href='#'>Book a table</a></button>
            </div>
        </header>
    );
}

export default Header;
