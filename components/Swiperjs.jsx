import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import styles from "../styles/Swiper.module.css";
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Swiperjs() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      centeredSlides={true}
      centeredSlidesBounds={true}
    >
      <SwiperSlide>
        <img src="./flower.jfif" alt="" srcset="" />
        <div className="text1">
          <h2>Zwischenmenschliche Beziehungen:</h2>
          <p>
            Du hast ein Problem im zwischenmenschlichen Bereich? Der Umgang mit
            anderen Menschen bildet eine Herausforderung für dich. <br></br>
            Oft ist ein abgespeichertes Traumata oder Ahnenthema die Ursache,
            warum uns manche Menschen oder Situationen scheinbar belasten.{" "}
            <br></br>
            Wir beleuchten das gemeinsame Thema und lösen es auf. <br></br>
            Krankmachende Emotionen können dadurch abfließen. <br></br>{" "}
            <br></br>
          </p>
          <h3>
            Durch Heilarbeit verändern wir uns von innen heraus. Die eigene
            Schwingung wird erhöht und du ziehst bessere Gegebenheiten in dein
            Leben. Liebe ist die Antwort
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./stone.jpeg" alt="" srcset="" />
        <div className="text2">
          <h2>
            Rückenschmerzen - Sei authentisch und bewahre deine Aufrichtigkeit
            und Haltung
          </h2>
          <p>
            Jeder Wirbel Deiner Wirbelsäule steht in Bezug zu einem Organ und
            Seelenthema deiner Person.<br></br>
            Oft tragen wir belastende Themen der Vergangenheit noch immer mit
            uns herum, die wir nun ablegen dürfen. <br></br>
            Bei Rückenschmerzen biete ich Dir eine energetische Behandlung der
            Wirbelsäule an. <br></br>
            <br></br>
            Die Wirbelsäule kann oft innerhalb weniger Minuten am Telefon wieder
            ausgerichtet werden, so dass Du wieder aufrecht im Leben stehst.
            <br></br>
            <br></br>
            Kundenfeedback innerhalb weniger Minuten, Stunden nach der
            Behandlung:<br></br>
            Das Kopfweh ist verschwunden, der Druck auf der Brust ist weg.{" "}
            <br></br>
            Jetzt hat es grad nochmal gekracht, der Wirbel ist wieder drin.
            <br></br>
            Der Rücken ist jetzt total entspannt.<br></br>
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./river.jfif" alt="" srcset="" />
        <div className="text3">
          <h2>Körper</h2>
          <p>
            Unsere Verantwortung liegt darin, bestmöglich für unserer Zellen im
            Körper zu sorgen und damit die körperliche Voraussetzung für Heilung
            zu schaffen. <br></br>
            Leider haben sich durch unseren Lebensstil und unsere tägliche
            Nahrung in der Regel verschiedene Mangelzustände eingeschlichen.<br></br> Ein
            großer Teil unserer Zivilisationskrankheiten von Allergien über
            Gelenkschäden und Stoffwechselstörungen bis hin zu Herzinfarkt und
            neurologischen Erkrankungen, auch ADHS wird durch sogenannte stille
            Entzündungen („silent inflammation“) begünstigt. <br></br>
            So brennt ständig ein kleines Feuer in uns, ohne dass wir dies
            bemerken bis sich die Entzündung gegen uns wendet. <br></br>
            Stoffe, die unser Immunsystem benötigt werden in nicht ausreichendem
            Maß aufgenommen bzw. produziert. <br></br>
            Für eine gesunde Zelle, deren Entgiftung und Reparatur sind in
            meinen Augen unverzichtbar:<br></br>
            <br></br>
            Omega-3-Fettsäuren<br></br>
            Vitamin D3, K2<br></br>
            Magnesium, Selen, Mikronährstoffe<br></br><br></br>
            Mit einem Trockenbluttest kannst Du selbst Deinen Mangelzustand
            überprüfen und anschließend deinem Körper zuführen, was er zur
            Heilung benötigt.<br></br><br></br>
          </p>
          <h3>Mein Körper folgt mir bei jedem Schritt, den ich gehe. </h3>
        </div>
      </SwiperSlide>
      

      <SwiperSlide>
        <img src="./kid.jfif" alt="" srcset="" />
        <div className="text4">
          <h2>Kinder</h2>
          <br></br>
          <p>
            Kinder können in diesen Zeiten vielen verschiedenen Belastungen
            ausgesetzt sein, die Ihre körperliche und seelische Gesundheit
            gefährden und die sie Symptome entwickeln lassen, die darauf
            hinweisen. <br></br>- Folgen von Impfungen, wie Hautausschläge,
            Erkrankungen der Atemwege, Allergien, Entwickeln von ADHS oder
            autistische Züge<br></br>- Ahnenthemen, die zu Angst, Wutausbrüchen
            oder seltsamen Verhaltensweisen führen<br></br>- Eingeschlossene
            Emotionen, daher unkontrollierte Ausbrüche<br></br>- Ständig
            wiederkehrende Infekte<br></br>
            Mit dem Beginn der Konzentration auf die Lösung statt auf das
            Problem schaffen wir ein Heilfeld für Dein Kind, in dem es gesunden
            kann.<br></br>
            <br></br>
          </p>
          <h3>Ein Kind kann nie genug Liebe bekommen.</h3>
          <br></br>
          <br></br>
          <p>
            Kundenfeedback:<br></br>
            Ich weiß jetzt nicht, wie du das gemacht hast aber die chronische
            Erkältung ist weg. <br></br>
            Mandeln und Polypen müssen nicht operiert werden.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./butterfly.jfif" alt="" srcset="" />
        <div className="text5">
          <h2>Hier gehts zur Vita</h2>
         <Link href='/vita'><button className={styles.cta}>Zur Vita</button></Link> 
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
