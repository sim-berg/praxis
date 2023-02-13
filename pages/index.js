import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Swiperjs from '../components/Swiperjs'
import  Water  from '../components/Water'
import Breath from '../components/Breath'
import Link from 'next/link'


export default function Home() {


function createMarkup() {

  
  return {__html: 'First &middot; Second'};
}
  return (
    <>
      <Head>
       <meta charSet="UTF-8" />
        <link rel="icon" type="image" href="../favicon4.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Working Title</title>
      </Head>
      
      <main className={styles.main}>
        <div className={styles.water}><Water /></div>
        <section className={styles.first}>
        <div className={styles.breath} ><Breath/></div>

          
        </section>
        <section className={styles.second}>
        <div className={styles.eingang}>
          
          <p>Krisen sind Wegweiser in Deinem Leben, die verstanden werden wollen und dir den Weg weisen.<br></br><br></br>
              Der Mensch ist ein Wunderwerk an Selbstheilungskräften.<br></br><br></br>
              Unser Selbstbild ist oft durch äußere Einflüsse, Verletzungen oder Traumata und den daraus resultierenden falschen Glaubenssätzen verzerrt, so dass Krankheiten entstehen. <br></br><br></br>
              Durch die Öffnung für die Vermittlung der allgegenwärtigen kosmischen Heilenergie kommst Du wieder mit deiner wahren Natur in Kontakt. <br></br><br></br>
              Nur wenn Körper, Seele und Geist in dieselbe Richtung laufen kann Dein Licht wieder strahlen. <br></br><br></br><br></br>

              Mein Name ist Alexandra und ich zeige Dir, wie Du  Deine blockierten Selbstheilungskräfte befreien kannst, damit Du in Gesundheit, Frieden und Fülle leben kannst. <br></br><br></br><br></br>
              </p>

              <h3>Geistige Heilarbeit kennt keine zeitlichen und räumlichen Grenzen</h3>
              
            
        </div>
        </section>
        <section className={styles.third}>
          <div className={ styles.hauptseite }>

            <h2>Mein Angebot:<br></br>
            Heilgespräche mit Energieübertragung zur Aktivierung der Selbstheilungskräfte
            </h2><br></br><br></br><br></br>
            <p>Im Gespräch erhältst Du ein klares Bild von Dir und deinem Problem, deiner Herausforderung, deinem Konflikt oder Deiner Krankheit und der damit verbundenen Chance zum Wachstum. <br></br><br></br>
              Um deinen Weg zu stärken und die Heilung einzuleiten empfängst du aus der geistigen Welt Heilenergie.<br></br><br></br>
              Alter Ballast, der dich daran hindern will vorwärts zu gehen wird dabei aufgelöst, so dass dein Weg frei wird. <br></br><br></br>
              Da über das Quantenfeld alles miteinander verbunden ist, funktioniert Energieübertragung auch auf die Ferne.<br></br><br></br><br></br><br></br></p>
              </div> </section> <section className={styles.fourth}><div className={ styles.hauptseite2 }>
              <p>Mittels meiner Medialität kann ich dir helfen bei:</p>
              <ul>
                <li>Allen Krankheiten</li>
                <li>Energetische Wirbelsäulenaufrichtung, alle Reflexzonen zu den Organen werden stimuliert</li>
                <li>Ängsten und Zweifeln</li>
                <li>Stress und Erschöpfung</li>
                <li>Problemen in zwischenmenschlichen Beziehungen</li>
                <li>Krankmachende Emotionen, Traumatas überwinden, Karma lösen, Vergangenes zu bereinigen</li>
                <li>deinen lichtvollen Weg zu gehen, deinen Seelenplan wahrzunehmen und zu leben</li>
                <li>Entscheidungen zu treffen, Konflikte zu lösen, dir die Veränderung zuzutrauen</li>
                
              </ul><p>
              Bist Du bereit, Vergangenes endlich loszulassen und dich deiner Heilung zu öffnen?<br></br><br></br>

              Dann vereinbare ein unverbindliches Erstgespräch, damit wir uns kennenlernen können. <br></br><br></br>

             <Link href="/connect"><button className={styles.cta}>Klick hier</button> </Link>

             

              </p>
              <h3>Heilung passiert immer in der Stille und in der Anbindung an dein wahres Selbst.</h3>

              </div>

              </section>





          
          <section className={styles.fifth}>
          <Swiperjs/>
          </section>
      </main>
    </>
  )
  
}
