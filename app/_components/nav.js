import styles from "../page.module.css"

export default function Nav () {

    const routeList = [{
        id: 0,
        text: "Home",
        note: "static",
        link: "",
    }, {
        id: 1,
        text: "Intro",
        note: "static",
        link: "intro",
    }, {
        id: 2,
        text: "Contact",
        note: "dynamic",
        link: "contact",
    }, {
        id: 3,
        text: "Copyright",
        note: "dynamic",
        link: "copyright",
    }]

    return (
    <div className={styles.grid}>
        {routeList.map(route => (
            <a
                key={route.id}
                href={route.link}
                className={styles.card}
                rel="noopener noreferrer"
                >
                <h2>
                    {route.text} <span>-&gt;</span>
                </h2>
                <p>{route.note}</p>
            </a>
        ))}
    </div>
    )
}