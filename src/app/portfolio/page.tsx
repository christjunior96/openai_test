import Link from "next/link";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backButton}>
          ← Zurück zur Startseite
        </Link>
        <h1 className={styles.title}>Mein Portfolio</h1>
      </header>
      
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Über mich</h2>
          <p>
            Willkommen in meinem Portfolio! Ich bin ein leidenschaftlicher Entwickler 
            mit Fokus auf moderne Webtechnologien und benutzerfreundliche Anwendungen.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Projekte</h2>
          <div className={styles.projects}>
            <div className={styles.project}>
              <h3>Projekt 1</h3>
              <p>Eine moderne Webanwendung entwickelt mit Next.js und React.</p>
            </div>
            <div className={styles.project}>
              <h3>Projekt 2</h3>
              <p>Mobile App mit React Native für iOS und Android.</p>
            </div>
            <div className={styles.project}>
              <h3>Projekt 3</h3>
              <p>E-Commerce Plattform mit Node.js und MongoDB.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Fähigkeiten</h2>
          <div className={styles.skills}>
            <span className={styles.skill}>React</span>
            <span className={styles.skill}>Next.js</span>
            <span className={styles.skill}>TypeScript</span>
            <span className={styles.skill}>Node.js</span>
            <span className={styles.skill}>CSS</span>
            <span className={styles.skill}>JavaScript</span>
          </div>
        </section>
      </main>
    </div>
  );
}
