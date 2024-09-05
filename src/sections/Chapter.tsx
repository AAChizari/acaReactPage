import React from 'react';
import Image from 'next/image';
import { Text } from '@/components/Text';
import einleitungImg from "@/assets/einleitungImg.png"  
import grundlagenImg from "@/assets/grundlagenImg.png"
import konzeptImg from "@/assets/konzeptImg.png"
import implementierungImg from "@/assets/implementierungImg.png"
import evaluierungImg from "@/assets/evaluierungImg.png"
import zusammenfassungImg from "@/assets/zusammenfassungImg.png"
import { StaticImageData } from 'next/image';

interface ChapterData { 
  number: string;
  title: string;
  content: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

const chaptersData: ChapterData[] = [
  {
    number: "I",
    title: "Einleitung",
    content: "Die acaReact Applikation misst die motorisch-kognitive Fähigkeiten durch Erfassung der Reaktionszeit auf visuelle Reize. Die App ermöglicht Nutzern, Probandenprofile zu erstellen und Reaktionszeiten zu testen und zu speichern. Ziel ist die Entwicklung einer kostengünstigen Android-App, die zuverlässige Reaktionszeitmessungen ohne technische Vorkenntnisse ermöglicht. Die Arbeit untersucht das Timing-Probleme welches durch Hardware- und Software-Fehler verursacht werden kann.",
    imageSrc: einleitungImg,
    imageAlt: "Einleitungsbild"
  },
  {
    number: "II",
    title: "Grundlagen",
    content: "Die Reaktionszeit eines Menschen ist entscheidend für die Fähigkeit, sich vor Gefahren zu schützen, und umfasst komplexe Prozesse von der Reizaufnahme durch die Sinne bis zur Muskelreaktion. Durchschnittlich beträgt die Reaktionszeit auf visuelle Reize etwa 180-200 ms, kann jedoch durch Faktoren wie Alter, Müdigkeit und Krankheiten variieren. Reaktionen können bewusst oder reflexartig erfolgen und werden durch visuelle, akustische oder haptische Reize ausgelöst.",
    imageSrc: grundlagenImg,
    imageAlt: "Grundlagenbild"
  },
  {
    number: "III",
    title: "Konzept",
    content: "Die acaReact-Applikation wurde als medizinisch-psychologisches Werkzeug konzipiert, das Fachleuten eine Plattform zur Ermittlung motorisch-kognitiver Fähigkeiten durch Reaktionszeitmessungen bietet. Diese Messungen werden in einer Datenbank gespeichert, um eine spätere Analyse zu ermöglichen. Die App zielt darauf ab, eine benutzerfreundliche Plattform für Reaktionszeitmessungen bereitzustellen, die es Nutzern erlaubt, Probandenprofile zu erstellen und Sitzungen durchzuführen. Funktionale Anforderungen umfassen die Registrierung und Anmeldung von Nutzern, das Anlegen und Verwalten von Probanden sowie die Durchführung und Kategorisierung von Reaktionszeitmessungen. Nicht-funktionale Anforderungen konzentrieren sich auf Nutzerfreundlichkeit und visuelle Darstellung. Die Datenbank ist ein zentrales Element der App, das Nutzer- und Probandendaten sowie die Ergebnisse der Reaktionszeitmessungen speichert, was eine effiziente Verwaltung und Analyse der gesammelten Daten ermöglicht.",
    imageSrc: konzeptImg,
    imageAlt: "Konzeptbild"
  },
  {
    number: "IV",
    title: "Implementierung",
    content: "Die Implementierung der acaReact-Applikation nutzt eine Kombination aus verschiedenen Technologien und Tools, um ihre Funktionalität zu realisieren: Cloud Firestore dient als skalierbare NoSQL-Datenbank, die flexible, hierarchische Datenstrukturen unterstützt. Daten werden in Dokumenten gespeichert, die in Sammlungen organisiert sind, was die Datenspeicherung und -verwaltung vereinfacht. Sicherheitsregeln wurden implementiert, um den Zugriff auf die Datenbank zu regulieren. Diese Regeln legen fest, wer Lese- und Schreibrechte hat, und stellen sicher, dass nur autorisierte Nutzer Zugriff auf die Daten haben. Funktionen wie isSignedIn() und userIsOwner() überprüfen die Authentifizierung und Berechtigungen der Nutzer. Firebase Authentication wird zur Verwaltung der Nutzeridentität genutzt und unterstützt Methoden wie Passwort- und Social-Media-Login (z.B. Google, Facebook, X ehemals Twitter). Die Registrierung erfolgt über die Funktion registerUser(), die Nutzerdaten validiert und in der Datenbank speichert. Für die Versionskontrolle wird Git als verteiltes Versionskontrollsystem (DVCS) eingesetzt, während GitLab als Plattform zur Speicherung und Verwaltung des Codes dient. Die Implementierung umfasst die Einrichtung eines Repositories und die Nutzung von Git-Befehlen zur Verwaltung der Projektversionen. Diese Kombination von Tools und Technologien ermöglicht es, die acaReact-Applikation effizient zu entwickeln, zu sichern und zu verwalten, während gleichzeitig die Sicherheit und Benutzerfreundlichkeit gewährleistet werden.",
    imageSrc: implementierungImg,
    imageAlt: "Implementierungsbild"
  },
  {
    number: "V",
    title: "Ergebnisse",
    content: "Die acaReact-Anwendung befasst sich mit der präzisen Messung von Reaktionszeiten, die entscheidend für die Erfassung motorisch-kognitiver Fähigkeiten sind. Ein zentrales Problem ist die Latenz, also die Verzgerung zwischen Benutzereingabe und Applikationsreaktion, die durch Hardware- und Softwarefaktoren beeinflusst wird. Hardwareseitig sind Komponenten wie das Touchdisplay, die CPU, die GPU, das Motherboard und der Speicher entscheidend. Besonders die Touch-Abtastrate spielt eine wichtige Rolle, da sie bestimmt, wie oft Eingaben erfasst werden. Softwareseitige Verzgerungen können durch den Quellcode, das Betriebssystem, Verwaltungsprozesse und Treiber entstehen. Eine Untersuchung verglich die Reaktionszeiten der digitalen acaReact-Anwendung mit einem physischen Reaktionstest und stellte Unterschiede fest. Diese Unterschiede können durch eine durchschnittliche Abweichung korrigiert werden, die Nutzer in ihrem Profil anpassen können, um die Genauigkeit der Ergebnisse zu verbessern. Ziel ist es, die Latenzquellen zu verstehen und zu minimieren, um die Messgenauigkeit der Anwendung zu optimieren.",
    imageSrc: evaluierungImg,
    imageAlt: "Evaluierungsbild"
  },
  {
    number: "VI",
    title: "Zusammenfassung und Ausblick",
    content: "Die acaReact-Applikation hat sich als effektives Werkzeug zur Messung von Reaktionszeiten erwiesen. Sie ermöglicht es Nutzern, Probandenprofile zu erstellen, Daten zu verwalten und Reaktionszeiten in Sitzungen zu messen. Die Anwendung ist benutzerfreundlich und erfüllt die im Konzept gesetzten Ziele. Für die Zukunft bietet acaReact Potenzial für Erweiterungen, wie zusätzliche Authentifizierungsmethoden ber Google, Facebook oder X (ehemals Twitter), um den Registrierungsprozess zu vereinfachen. Eine Funktion zur Kontolöschung könnte ebenfalls hinzugefügt werden. Weitere Erweiterungen könnten neue Methoden der Reaktionsmessung umfassen, die verschiedene Sinne ansprechen, sowie anspruchsvollere Tests, die unterschiedliche Reize kombinieren. Die Barrierefreiheit könnte durch einen Farbblindenmodus verbessert werden. Insgesamt bietet die acaReact-Applikation eine solide Grundlage, die durch zukünftige Entwicklungen weiter verbessert werden kann.",
    imageSrc: zusammenfassungImg,
    imageAlt: "Zusammenfassungsbild"
  }
];

const ChapterContent: React.FC<{ chapter: ChapterData; imageOnLeft: boolean; index: number }> = ({ chapter, imageOnLeft, index }) => (
  <section id={`chapter-${index + 1}`} className="container mx-auto my-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {imageOnLeft ? (
        <>
          <div className="flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-md">
              <Image 
                src={chapter.imageSrc} 
                alt={chapter.imageAlt} 
                layout="fill" 
                objectFit="contain" 
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Text colorTitle={`Kapitel ${chapter.number}`} className="mb-2" />
            <Text title={chapter.title} className="mb-4" />
            <Text description={chapter.content} />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center">
            <Text colorTitle={`Kapitel ${chapter.number}`} className="mb-2" />
            <Text title={chapter.title} className="mb-4" />
            <Text description={chapter.content} />
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-md">
              <Image 
                src={chapter.imageSrc} 
                alt={chapter.imageAlt} 
                layout="fill" 
                objectFit="contain" 
                className="rounded-lg"
              />
            </div>
          </div>
        </>
      )}
    </div>
  </section>
);

export const Chapter: React.FC = () => {
  return (
    <>
      {chaptersData.map((chapter, index) => (
        <ChapterContent key={chapter.number} chapter={chapter} imageOnLeft={index % 2 === 0} index={index} />
      ))}
    </>
  );
};