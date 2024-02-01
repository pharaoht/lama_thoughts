import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {

    const links = [
        {
            title: 'Home Page',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Blog',
            path: '/blog'
        }
    ];

    const adminLink = {
        title: 'Admin',
        path: '/admin'
    };

    const noUserLink = {
        title: 'Login',
        path: '/login'
    }

    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.links}>
            {
                links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))
            }
            {
                session ? (
                    <>
                        {isAdmin && <NavLink item={adminLink} key={adminLink.title} />}
                        <button>Logout</button>
                    </>
                ) :
                    (
                        <NavLink item={noUserLink} key={noUserLink.title} />
                    )
            }
        </div>
    )
};

export default Links;