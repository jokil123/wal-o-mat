import blauwal from "$lib/assets/wale/blauwal.jpg";
import buckelwal from "$lib/assets/wale/buckelwal.jpg";
import pottwal from "$lib/assets/wale/pottwal.jpg";
import orca from "$lib/assets/wale/orca.jpg";
import grauwal from "$lib/assets/wale/grauwal.jpg";
import finnwal from "$lib/assets/wale/finnwal.jpg";
import zwergwal from "$lib/assets/wale/zwergwal.jpg";
import belugawal from "$lib/assets/wale/belugawal.jpg";
import narwal from "$lib/assets/wale/narwal.jpg";
import delfin from "$lib/assets/wale/delfin.jpg";

export type WhaleInfo = {
    name: string;
    infoText: string;
    image: string;
    wikipediaLink: string;
};

export const whalesInfo: WhaleInfo[] = [
    {
        name: "Blauwal",
        infoText:
            "Der Blauwal (Balaenoptera musculus) ist das größte Tier der Erde und kann eine Länge von bis zu 30 Metern und ein Gewicht von über 180 Tonnen erreichen. Er gehört zur Familie der Furchenwale und ist an seiner graublauen, manchmal leicht gesprenkelten Haut zu erkennen. Blauwale ernähren sich hauptsächlich von kleinen Krebstieren wie Krill, von dem sie täglich mehrere Tonnen verzehren können. Sie sind für ihre kraftvollen und melodiösen Gesänge bekannt, die über Hunderte von Kilometern im Ozean hörbar sind und zur Kommunikation und Orientierung dienen. Leider gilt der Blauwal als gefährdet, vor allem aufgrund der früher intensiven Walfangindustrie.",
        image: blauwal,
        wikipediaLink: "https://de.wikipedia.org/wiki/Blauwal",
    },
    {
        name: "Buckelwal",
        infoText: `Der Buckelwal (Megaptera novaeangliae) ist ein großer Meeressäuger und gehört zur Familie der Furchenwale. Er kann bis zu 16 Meter lang und 30 Tonnen schwer werden. Auffällig sind seine langen Brustflossen und die buckelige Rückenlinie, die ihm seinen Namen geben. Buckelwale sind bekannt für ihre spektakulären Sprünge aus dem Wasser und ihre komplexen Gesänge, die sie vor allem während der Paarungszeit zur Kommunikation nutzen. Sie ernähren sich hauptsächlich von kleinen Fischen und Krill, die sie durch ein ausgeklügeltes Jagdverhalten, das sogenannte "Blasennetz", in Gruppen fangen. Buckelwale sind weltweit verbreitet und ziehen jedes Jahr weite Strecken zwischen ihren Futter- und Fortpflanzungsgebieten.`,
        image: buckelwal,
        wikipediaLink: "https://de.wikipedia.org/wiki/Buckelwal",
    },
    {
        name: "Pottwal",
        infoText: `Der Pottwal (Physeter macrocephalus) ist der größte Zahnwal und kann bis zu 20 Meter lang werden. Charakteristisch für ihn ist sein riesiger Kopf, der etwa ein Drittel seiner Körperlänge ausmacht und ein spezielles Öl namens Spermaceti enthält. Dieses Öl spielt vermutlich eine Rolle beim Tauchen, da der Pottwal außergewöhnlich tief tauchen kann – oft über 1000 Meter – und bis zu zwei Stunden unter Wasser bleibt. Seine Nahrung besteht vor allem aus Tintenfischen, darunter auch Riesen- und Koloss-Kalmare. Der Pottwal ist weltweit verbreitet und bevorzugt tiefe, offene Meeresregionen.`,
        image: pottwal,
        wikipediaLink: "https://de.wikipedia.org/wiki/Pottwal",
    },
    {
        name: "Orca",
        infoText: `Der Orca, auch bekannt als Schwertwal, ist ein großes Meeressäugetier und gehört zur Familie der Delfine. Er ist leicht an seiner auffälligen schwarz-weißen Färbung zu erkennen. Orcas sind intelligente, soziale und anpassungsfähige Raubtiere, die in komplexen Familiengruppen, den sogenannten Schulen, leben. Sie sind bekannt für ihre beeindruckende Jagdtechnik und ihr breites Beutespektrum, das von Fischen über Robben bis hin zu anderen Walen reicht. Diese Tiere kommunizieren mithilfe von Klicklauten, Pfeifen und anderen Lauten und zeigen eine bemerkenswerte Kultur und Lernfähigkeit, die von Generation zu Generation weitergegeben wird.`,
        image: orca,
        wikipediaLink: "https://de.wikipedia.org/wiki/Schwertwal/",
    },
    {
        name: "Grauwal",
        infoText: `Der Grauwal (Eschrichtius robustus) ist eine große Walart, die besonders für ihre spektakulären Wanderungen bekannt ist. Er kann eine Länge von bis zu 15 Metern und ein Gewicht von etwa 30 bis 40 Tonnen erreichen. Grauwale haben eine graue, fleckige Haut, die oft mit Seepocken und Wal-Läusen bedeckt ist. Im Gegensatz zu anderen Bartenwalen besitzen sie keine Rückenfinne, sondern eine Reihe von kleinen Höckern entlang ihres hinteren Rückens.

Grauwale leben im Pazifik und unternehmen jedes Jahr eine der längsten Wanderungen aller Säugetiere, wobei sie zwischen ihren Nahrungsgebieten in arktischen Gewässern und den warmen Lagunen vor der Küste Mexikos pendeln, wo sie sich paaren und ihre Jungen zur Welt bringen. Sie ernähren sich, indem sie mit ihrem Maul am Meeresboden entlangschwimmen und kleine Krebstiere aus dem Schlamm filtern.`,
        image: grauwal,
        wikipediaLink: "https://de.wikipedia.org/wiki/Grauwal",
    },
    {
        name: "Finnwal",
        infoText: `
Der Finnwal (Balaenoptera physalus) ist nach dem Blauwal das zweitgrößte Tier der Erde und gehört zur Familie der Furchenwale. Er kann bis zu 27 Meter lang und bis zu 70 Tonnen schwer werden. Finnwale haben einen schlanken, stromlinienförmigen Körper mit einer charakteristischen zweifarbigen Färbung: Die rechte Seite ihres Kiefers ist hell, während die linke dunkel ist. Sie sind schnelle Schwimmer und können Geschwindigkeiten von bis zu 40 km/h erreichen. Finnwale ernähren sich hauptsächlich von kleinen Fischen, Krill und Plankton, die sie mit ihren Barten filtern. Sie sind weltweit in allen Ozeanen verbreitet, bevorzugen jedoch kalte bis gemäßigte Gewässer.`,
        image: finnwal,
        wikipediaLink: "https://de.wikipedia.org/wiki/Finnwal",
    },
    {
        name: "Zwergwal",
        infoText: `Der Zwergwal (Balaenoptera acutorostrata) ist eine kleinere Walart aus der Familie der Furchenwale und gehört zur Gruppe der Bartenwale. Er wird etwa 7 bis 10 Meter lang und wiegt bis zu 10 Tonnen, was ihn zum kleinsten aller Großwale macht. Typisch für den Zwergwal ist sein stromlinienförmiger, schlanker Körper mit einer spitz zulaufenden Schnauze. Sein Rücken ist dunkelgrau bis schwarz, der Bauch hell, und an den Flippern trägt er charakteristische weiße Flecken.

Zwergwale sind weltweit in kühlen und gemäßigten Gewässern verbreitet und bevorzugen Küstennähe. Sie ernähren sich hauptsächlich von kleinen Fischen und Krill, die sie mithilfe ihrer Barten aus dem Wasser filtern.`,
        image: zwergwal,
        wikipediaLink: "https://de.wikipedia.org/wiki/Zwergwal",
    },
    {
        name: "Belugawal",
        infoText: `Der Belugawal (Delphinapterus leucas), auch Weißwal genannt, ist ein mittelgroßer Zahnwal, der in arktischen und subarktischen Gewässern lebt. Charakteristisch für ihn ist seine rein weiße Hautfarbe, die sich jedoch erst mit dem Erwachsenenalter entwickelt, da die Jungtiere zunächst dunkelgrau sind. Belugas haben eine rundliche Stirn, genannt Melone, die ihnen eine besonders flexible Mimik und eine ausgeprägte Lautbildung ermöglicht. Sie kommunizieren mit einer Vielzahl von Klicks, Pfiffen und anderen Lauten, weshalb sie auch als „Kanarienvögel der Meere“ bekannt sind. Belugawale sind soziale Tiere und leben oft in Gruppen.`,
        image: belugawal,
        wikipediaLink: "https://de.wikipedia.org/wiki/Weißwal",
    },
    {
        name: "Narwal",
        infoText: `Der Narwal (Monodon monoceros) ist ein faszinierendes Meeressäugetier, das zur Familie der Wale gehört und in den kalten arktischen Gewässern des Nordatlantiks und des Nordpolarmeeres lebt. Er ist bekannt für seinen charakteristischen, spiralförmigen Stoßzahn, der bei Männchen bis zu drei Meter lang werden kann. Dieser Stoßzahn ist eigentlich ein verlängerter Eckzahn und gibt dem Narwal sein unverwechselbares Aussehen, weswegen er oft als „Einhorn der Meere“ bezeichnet wird. Narwale ernähren sich vor allem von Fischen und Weichtieren und leben meist in Gruppen, die im Winter in tiefere Gewässer ziehen.`,
        image: narwal,
        wikipediaLink: "https://de.wikipedia.org/wiki/Narwal",
    },
    {
        name: "Delfin",
        infoText: `Der Delfin ist ein intelligentes und soziales Meeressäugetier, das zur Familie der Wale gehört. Er hat einen schlanken, stromlinienförmigen Körper, der ihm hilft, schnell durch das Wasser zu schwimmen. Typischerweise sind Delfine grau mit einem helleren Bauch und besitzen eine markante Rückenflosse. Sie nutzen Echolokation, um sich zu orientieren und Beutetiere wie Fische und Tintenfische zu jagen. Delfine leben oft in Gruppen, sogenannten Schulen, und sind für ihr verspieltes Verhalten und ihre Kommunikationsfähigkeiten bekannt. Sie zählen zu den intelligentesten Tieren und können komplexe soziale Strukturen und enge Bindungen zu anderen Delfinen aufbauen.`,
        image: delfin,
        wikipediaLink: "https://de.wikipedia.org/wiki/Delfine",
    },
];
