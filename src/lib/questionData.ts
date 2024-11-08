import type { Question } from "./question";

export const questions: Question[] = [
    {
        question: "Ich bevorzuge kältere Klimazonen gegenüber wärmeren.",
        weights: {
            blauwal: 0.8, // Blauwale sind oft in kälteren, polaren Gewässern zu finden und bevorzugen diese.
            buckelwal: 0.5, // Buckelwale kommen in beiden Klimazonen vor, tendieren aber zur Kühlung bei Wanderungen.
            pottwal: -0.2, // Pottwale sind sehr anpassungsfähig und kommen in warmen bis kalten Gewässern vor, daher eine leichte Präferenz für wärmere.
            orca: 0.6, // Orcas kommen weltweit vor, einige Populationen bevorzugen jedoch kältere Gewässer.
            grauwal: 0.7, // Grauwale verbringen viel Zeit in kälteren Gewässern und wandern zwischen arktischen und gemäßigten Zonen.
            zwergwal: 0.3, // Zwergwale sind flexibel, aber kommen auch in kühleren Gewässern vor.
            belugawal: 1.0, // Belugas sind Kaltwasserwale und kommen fast ausschließlich in arktischen und subarktischen Regionen vor.
            narwal: 1.0, // Narwale sind eng an das arktische Klima gebunden und bevorzugen sehr kalte Gewässer.
            delfin: -0.3, // Delfine bevorzugen tendenziell wärmere, tropische und subtropische Klimazonen.
        },
    },
    {
        question: "Ich genieße es, in großen Gruppen von Menschen zu sein.",
        weights: {
            blauwal: -0.8, // Blauwale bevorzugen es, allein oder in sehr kleinen Gruppen zu leben und reisen oft solo oder zu zweit.
            buckelwal: 0.5, // Buckelwale können sich in losen Gruppen versammeln, vor allem während der Paarungszeit, sind aber häufig auch einzeln oder in kleinen Gruppen unterwegs.
            pottwal: 0.7, // Pottwale bilden oft größere, stabile soziale Gruppen, vor allem Weibchen mit ihren Nachkommen, und zeigen somit eine gewisse Gruppenorientierung.
            orca: 1.0, // Orcas leben in engen, stabilen sozialen Strukturen und reisen normalerweise in Gruppen, die als Schoten bekannt sind.
            grauwal: -0.5, // Grauwale sind normalerweise eher Einzelgänger oder reisen in sehr kleinen Gruppen, insbesondere abseits der Paarungszeit.
            zwergwal: -0.7, // Zwergwale sind oft Einzelgänger und zeigen selten Gruppenzusammenkünfte, außer in bestimmten Situationen wie der Nahrungssuche.
            belugawal: 0.9, // Belugawale sind sehr soziale Tiere und finden sich oft in großen Gruppen zusammen, die sich auch jahreszeitlich verändern können.
            narwal: 0.6, // Narwale leben in kleinen Gruppen, aber diese Gruppen können sich manchmal zu größeren Aggregationen verbinden, besonders in Sommermonaten.
            delfin: 1.0, // Delfine sind extrem soziale Tiere und leben typischerweise in großen, komplexen Gruppen mit ausgeprägter Kommunikation und Kooperation.
        },
    },
    {
        question: "Ich bin ein starker und selbstbewusster Anführer.",
        weights: {
            blauwal: -0.8, // Der Blauwal ist ein eher friedliches und zurückhaltendes Tier, das sich selten in sozialen Interaktionen zeigt und als Einzelgänger lebt.
            buckelwal: 0.5, // Buckelwale sind bekannt für ihre Interaktionen und können gruppenorientiert sein. Während sie in sozialen Gruppen agieren, sind sie eher kommunikative als dominante Anführer.
            pottwal: 0.7, // Pottwale sind in der Lage, soziale Gruppen anzuführen, insbesondere die Weibchen, die oft in Matriarchaten leben. Sie zeigen eine gewisse Dominanz und Orientierungskraft.
            orca: 1.0, // Orcas leben in straffen sozialen Gruppen mit klarer Hierarchie und oft einem dominanten Leittier. Sie gelten als starke und selbstbewusste Anführer in ihren Gruppen.
            grauwal: -0.5, // Grauwale sind eher ruhige Tiere, die nicht für eine besonders dominante oder führende Rolle bekannt sind. Sie zeigen wenig Anzeichen von Anführungsstärke.
            zwergwal: -0.7, // Der Zwergwal ist ein scheues, einzelgängerisches Tier, das sich meist unauffällig verhält und keine Führungsqualitäten zeigt.
            belugawal: 0.3, // Belugawale sind zwar kommunikativ und sozial, aber eher verspielt als dominante Anführer. Ihr Auftreten ist eher kooperativ als führungsorientiert.
            narwal: -0.3, // Narwale leben oft in kleineren Gruppen, sind aber nicht für dominante Führung bekannt. Sie zeigen eine gewisse Anpassungsfähigkeit, jedoch keine klare Führungsrolle.
            delfin: 0.9, // Delfine sind soziale Tiere, die oft eine Führung in Gruppen übernehmen, insbesondere die älteren Tiere. Sie sind sehr selbstbewusst und intelligent, was oft zu einer dominanten Rolle führt.
        },
    },
    {
        question: "Ich liebe es, regelmäßig lange Strecken zu reisen.",
        weights: {
            blauwal: 1, // Blauwale sind die größten Tiere der Erde und legen weite Strecken zurück, oft saisonale Wanderungen zwischen kaltem und warmem Wasser für Futter und Fortpflanzung.
            buckelwal: 1, // Buckelwale sind für ihre langen Wanderungen bekannt, bei denen sie tausende Kilometer zwischen Nahrungs- und Fortpflanzungsgebieten zurücklegen.
            pottwal: 0.8, // Pottwale unternehmen zwar auch lange Wanderungen, jedoch ist ihr Wanderverhalten weniger saisonal stark ausgeprägt als bei Blauwalen oder Buckelwalen.
            orca: 0.5, // Orcas sind teils sesshaft und teils wandernd, was stark von ihrer Population und den Nahrungsressourcen abhängt. Einige reisen weit, während andere eine eher lokale Reichweite haben.
            grauwal: 1, // Grauwale sind für extrem lange Wanderungen bekannt und legen die längste dokumentierte Migration aller Meeressäugetiere zurück.
            zwergwal: 0.3, // Zwergwale wandern zwar auch, jedoch meist kürzere Strecken und sind eher Küstennah, verglichen mit den größeren Walarten.
            belugawal: 0.2, // Belugawale wandern eher in bestimmten Regionen und eher kürzer als die großen Walarten. Sie bleiben oft in kalten Gewässern, nahe ihren bevorzugten Gebieten.
            narwal: 0.2, // Narwale bleiben meistens in arktischen Regionen und machen nur begrenzte saisonale Wanderungen, bleiben aber relativ ortsgebunden.
            delfin: 0.5, // Delfine zeigen je nach Art unterschiedliche Wandergewohnheiten, wobei einige Arten weite Strecken zurücklegen, andere aber auch in festen Gebieten leben.
        },
    },
    {
        question:
            "Ich bin für meine Intelligenz und meine Fähigkeit zur Problemlösung bekannt.",
        weights: {
            blauwal: -0.2, // Blauwale sind eher für ihre Größe und Langlebigkeit bekannt als für spezifische Problemlösungsfähigkeiten oder Intelligenz im Vergleich zu anderen Walen.
            buckelwal: 0.4, // Buckelwale zeigen kreative Verhaltensweisen wie die sogenannte „Blasennetzjagd,“ die auf Problemlösungsfähigkeiten schließen lässt, allerdings sind sie weniger für ihre Intelligenz bekannt als kleinere Zahnwale.
            pottwal: 0.6, // Pottwale gelten als intelligent und komplex, u. a. aufgrund ihrer sozialen Struktur und der Nutzung von Echolokation für die Jagd in tiefen Gewässern, was eine Art Problemlösungsfähigkeit erfordert.
            orca: 1.0, // Orcas sind hochintelligent, haben komplexe soziale Strukturen und verwenden spezifische Jagdtechniken, die kulturell weitergegeben werden und auf eine starke Problemlösungsfähigkeit hindeuten.
            grauwal: 0.1, // Grauwale zeigen einige clevere Strategien, aber sie sind eher für ihre lange Wanderung und Robustheit als für komplexe Problemlösungen bekannt.
            zwergwal: -0.2, // Zwergwale werden weniger mit Intelligenz oder speziellen Problemlösungsfähigkeiten assoziiert, sondern sind eher als kleine und agile Bartenwale bekannt.
            belugawal: 0.8, // Belugas sind bekannt für ihre hohe Intelligenz, ihre Neugier und ihr spielerisches Verhalten, was auf gute Problemlösungsfähigkeiten hinweist, besonders im sozialen Kontext.
            narwal: 0.3, // Narwale sind für einige einzigartige Eigenschaften bekannt, wie ihren langen Stoßzahn, aber weniger für Problemlösungsfähigkeiten oder außergewöhnliche Intelligenz.
            delfin: 1.0, // Delfine sind für ihre Intelligenz und sozialen Fähigkeiten weltberühmt, sie zeigen fortgeschrittenes Problemlösungsverhalten und kognitive Fähigkeiten.
        },
    },
    {
        question: "Ich habe eine tiefe Verbindung zur Natur und zum Meer.",
        weights: {
            blauwal: 1, // Der Blauwal lebt fast ausschließlich in den Ozeanen und ist stark von deren Zustand abhängig. Aufgrund seiner Größe und seiner Lebensweise hat er eine tiefe Verbindung zur Natur und dem Meer.
            buckelwal: 0.9, // Buckelwale verbringen viel Zeit in Küstennähe und sind bekannt für ihre akrobatischen Sprünge und Gesänge, die tief in die Natur und das Meer eingebunden sind.
            pottwal: 0.8, // Pottwale sind in tiefe Meereszonen und die Jagd in der Tiefsee involviert, was eine starke Verbindung zur marinen Umgebung erfordert, allerdings weniger an der Oberfläche.
            orca: 0.7, // Orcas leben in enger Verbindung mit der Natur, sowohl im offenen Meer als auch in küstennahen Gewässern. Ihre komplexen sozialen Strukturen und Jagdtechniken zeugen von einer engen Interaktion mit ihrer Umgebung.
            grauwal: 0.9, // Der Grauwal wandert sehr weite Strecken und verbringt viel Zeit in küstennahen Gewässern, wo er sich von Bodentieren ernährt, was eine hohe Verbindung zum Meer bedeutet.
            zwergwal: 0.6, // Der Zwergwal ist ebenfalls im Meer zu Hause, hat jedoch keine so ausgeprägte ökologische Rolle oder Wanderbewegungen wie andere Wale, was die Verbindung zur Natur etwas verringert.
            belugawal: 0.5, // Belugawale leben in arktischen Gewässern und sind stark vom Eis und den dortigen Lebensbedingungen abhängig, jedoch auch oft in Flüssen anzutreffen, was ihre Bindung zur Natur variabel macht.
            narwal: 0.7, // Narwale leben in den kalten, arktischen Gewässern und haben eine einzigartige Verbindung zur Natur des Meeres, da sie stark von saisonalen Veränderungen im Eis abhängen.
            delfin: 0.8, // Delfine zeigen eine tiefe Verbundenheit zur Natur und dem Meer durch ihre spielerische und soziale Interaktion sowie ihre Anpassungsfähigkeit an verschiedene marine Umgebungen.
        },
    },
    {
        question: "Ich bin eher introvertiert und genieße die Einsamkeit.",
        weights: {
            blauwal: 0.8, // Blauwale sind oft allein oder in kleinen Gruppen unterwegs und legen große Distanzen zurück, was zu einem eher introvertierten Lebensstil passt.
            buckelwal: -0.3, // Buckelwale sind für ihre sozialen Verhaltensweisen bekannt und interagieren häufig mit anderen Walen, vor allem während der Paarungszeit.
            pottwal: 0.5, // Pottwale leben in lockeren Gruppen, sind aber oft in Tiefen unterwegs, die sie von anderen Walen trennen, was eine gewisse Tendenz zur Einsamkeit zeigt.
            orca: -0.9, // Orcas sind extrem soziale Tiere und leben in komplexen Familiengruppen, was ihrem Wesen nach eher extrovertiert ist.
            grauwal: 0.4, // Grauwale sind oft in kleinen Gruppen anzutreffen, zeigen aber auch eine hohe Toleranz für das Alleinsein während ihrer langen Migrationen.
            zwergwal: 0.7, // Zwergwale tendieren dazu, oft allein oder in sehr kleinen Gruppen zu sein, was auf eine gewisse introvertierte Natur schließen lässt.
            belugawal: -0.7, // Belugawale sind sehr gesellige Tiere und kommunizieren häufig miteinander, was eine eher extrovertierte Lebensweise widerspiegelt.
            narwal: 0.6, // Narwale leben zwar in kleinen Gruppen, ziehen jedoch ruhige und abgeschiedene Lebensräume in der Arktis vor, was auf eine introvertierte Natur hindeutet.
            delfin: -1.0, // Delfine sind hochgradig soziale Tiere und leben in dynamischen Gruppen mit starkem Kommunikationsverhalten, was stark extrovertiert wirkt.
        },
    },
    {
        question:
            "Ich bin sehr beschützerisch gegenüber meiner Familie und meinen Freunden.",
        weights: {
            blauwal: 0.2, // Blauwale sind Einzelgänger und legen weite Distanzen zurück, oft ohne ständigen Kontakt zu Artgenossen. Familiäre Bindungen sind weniger stark ausgeprägt.
            buckelwal: 0.7, // Buckelwale zeigen oft soziale Interaktionen und leben in losen Gruppen. Mütter sind sehr schützend gegenüber ihren Kälbern, was auf eine gewisse Beschützerrolle hinweist.
            pottwal: 0.8, // Pottwale leben in stabilen Familiengruppen und zeigen ein starkes Sozialverhalten, besonders die Weibchen, die sich gemeinsam um die Jungtiere kümmern.
            orca: 1.0, // Orcas sind sehr soziale Tiere mit einer stark ausgeprägten Familienstruktur und kümmern sich intensiv um ihre Gruppe. Sie sind bekannt für ihr schützendes Verhalten gegenüber ihren Familien.
            grauwal: 0.5, // Grauwale sind wandernde Tiere, die teilweise in Mutter-Kalb-Paaren reisen. Mütter zeigen Schutzverhalten, aber die Bindungen sind weniger stark im Vergleich zu Orcas.
            zwergwal: 0.1, // Zwergwale leben eher isoliert und haben eine geringere Bindung zu Artgenossen oder Familienmitgliedern, was auf ein geringes Schutzverhalten hinweist.
            belugawal: 0.9, // Belugas leben in sozialen Gruppen und haben komplexe Bindungen untereinander. Sie zeigen Schutzverhalten, insbesondere gegenüber jüngeren oder verletzten Gruppenmitgliedern.
            narwal: 0.6, // Narwale leben in kleinen, stabilen Gruppen, vor allem Familiengruppen. Sie zeigen Schutzverhalten, besonders in der Nähe von Raubtieren.
            delfin: 1.0, // Delfine sind extrem soziale Tiere und sehr schützend gegenüber ihrer Familie und Gruppe. Sie verteidigen oft ihre Artgenossen und zeigen starke familiäre Bindungen.
        },
    },
    {
        question:
            "Ich bin oft der Erste, der neue Dinge ausprobiert, auch wenn sie riskant erscheinen.",
        weights: {
            blauwal: -0.8, // Blauwale sind große und ruhige Tiere, die tendenziell gemächlicher unterwegs sind und sich auf etablierte Routen und Verhaltensweisen stützen. Sie sind daher weniger geneigt, etwas Neues oder Risikoreiches auszuprobieren.
            buckelwal: 0.5, // Buckelwale sind neugierig und bekannt für ihre komplexen Gesänge und akrobatischen Sprünge. Sie sind offener für Neues und wagen sich in unterschiedlichen Gebieten vor, jedoch eher aus Neugier als Risikobereitschaft.
            pottwal: -0.3, // Pottwale sind bekannt für ihre tiefen Tauchgänge und zeigen Entschlossenheit, aber sie folgen dabei meist gut erprobten Verhaltensmustern und bevorzugen Sicherheit bei ihren gewagten Abenteuern in der Tiefe.
            orca: 0.7, // Orcas sind sehr anpassungsfähige und intelligente Jäger, die innovative Jagdtechniken anwenden und sich auch in neue Gebiete vorwagen. Sie probieren auch riskantere Methoden, sind aber gleichzeitig strategisch und vorsichtig.
            grauwal: -0.4, // Grauwale migrieren jährlich große Strecken, folgen aber meist traditionellen Wegen und zögern, neue Risiken einzugehen. Sie halten sich eher an vertraute Routen und Verhaltensmuster.
            zwergwal: 0.2, // Zwergwale sind neugierig, aber oft vorsichtig in ihren Bewegungen und folgen meist ihren gewohnten Routen. Sie zeigen eine gewisse Offenheit für Neues, halten sich jedoch in der Regel zurück.
            belugawal: 0.3, // Belugas sind sehr soziale Tiere und können sich an neue Umgebungen anpassen. Sie erkunden gelegentlich und nehmen moderate Risiken auf sich, aber meist im sozialen Kontext und weniger bei extrem neuen Erfahrungen.
            narwal: -0.5, // Narwale leben in sehr spezifischen und extremen arktischen Umgebungen und halten sich meist an vertraute Routen und Verhaltensweisen. Sie sind weniger risikofreudig und experimentierfreudig.
            delfin: 0.9, // Delfine sind sehr neugierige und sozial lebendige Tiere. Sie sind dafür bekannt, neue Techniken auszuprobieren, zu spielen und riskantere Manöver zu unternehmen, vor allem, wenn sie neugierig oder interessiert sind.
        },
    },
    {
        question: "Ich bin ein guter Kommunikator und drücke mich gerne aus.",
        weights: {
            blauwal: 0.1, // Blauwale sind eher bekannt für ihre Gesänge, die jedoch nicht als besonders kommunikativ im menschlichen Sinne betrachtet werden. Ihre Kommunikation dient hauptsächlich der Fortpflanzung und Orientierung.
            buckelwal: 0.7, // Buckelwale sind bekannt für ihre komplexen und langanhaltenden Gesänge, die als eine Form der Kommunikation gelten, besonders während der Fortpflanzungszeit. Sie könnten als "ausdrucksstark" gelten.
            pottwal: 0.3, // Pottwale kommunizieren mit Klicklauten, doch diese sind eher als echolokatorische Signale als Ausdruck von Emotionen oder Gedanken zu verstehen. Ihre Kommunikation ist also funktionaler als expressiv.
            orca: 1.0, // Orcas sind sehr soziale Tiere, die eine komplexe und vielfältige Kommunikation besitzen, die zur Koordination in der Gruppe und zum Austausch von Informationen dient. Sie sind definitiv gute Kommunikatoren.
            grauwal: 0.2, // Grauwale nutzen Laute und Gesänge, jedoch sind diese eher zur Orientierung und Kommunikation mit anderen Walen während Wanderungen gedacht, nicht unbedingt zur "Ausdruckskraft".
            zwergwal: 0.4, // Zwergwale kommunizieren durch Gesänge und Töne, aber im Vergleich zu anderen Walarten sind sie weniger bekannt für besonders ausgeprägte kommunikative Fähigkeiten.
            belugawal: 0.8, // Belugawale sind sehr soziale Tiere, die eine breite Palette von Lauten verwenden, um mit anderen Belugas zu kommunizieren. Sie sind in ihrer Kommunikation durchaus ausdrucksstark.
            narwal: 0.5, // Narwale nutzen Laute zur Kommunikation, aber es gibt weniger Forschung zu ihrer Ausdruckskraft im Vergleich zu anderen Walarten. Ihre Kommunikation ist vor allem auf soziale Bindungen ausgelegt.
            delfin: 1.0, // Delfine sind exzellente Kommunikatoren, bekannt für ihre komplexen Laute, Klicks und die Fähigkeit zur Kommunikation und Zusammenarbeit innerhalb der Gruppe. Sie sind in dieser Hinsicht sehr ausdrucksstark.
        },
    },
    {
        question: "Ich passe mich gut an neue Umgebungen und Situationen an.",
        weights: {
            blauwal: -0.5, // Blauwale sind große, migrationsorientierte Tiere, die eher in stabilen, großflächigen Ozeanumgebungen leben. Ihre Anpassung ist weniger flexibel und basiert hauptsächlich auf saisonalen Wanderungen.
            buckelwal: 0.5, // Buckelwale sind sehr anpassungsfähig, da sie weite Strecken reisen und verschiedene Nahrungsquellen und Lebensräume nutzen, je nach Jahreszeit und Ort.
            pottwal: 0.3, // Pottwale sind tief tauchende Tiere, die in unterschiedlichen Tiefen und Regionen leben. Sie passen sich an, aber ihre Anpassung ist weniger flexibel als bei anderen Walen.
            orca: 1, // Orcas sind bekannt für ihre außergewöhnliche Anpassungsfähigkeit an verschiedene Lebensräume und Jagdtechniken, die sie in unterschiedlichen Umgebungen einsetzen.
            grauwal: 0.7, // Grauwale sind auch für ihre langen Wanderungen bekannt und können sich gut an verschiedene Küstenregionen und Nahrungsquellen anpassen, besonders bei der Fortpflanzung.
            zwergwal: 0.2, // Zwergwale sind weniger flexibel als andere Wale, da sie in spezifischen, oft weniger variablen Lebensräumen leben, aber sie sind immer noch anpassungsfähig in Bezug auf Migration.
            belugawal: 0.6, // Belugawale sind anpassungsfähig an unterschiedliche arktische und subarktische Umgebungen. Sie können in verschiedenen Küstennähe- und Flussmündungen leben.
            narwal: 0.8, // Narwale sind gut an die extreme Arktis angepasst, was eine hohe Anpassungsfähigkeit an diese speziellen Lebensräume zeigt.
            delfin: 1, // Delfine sind äußerst anpassungsfähig an verschiedene Umgebungen und Lebensräume, sie passen sich leicht an, sowohl in Küsten- als auch in offenen Ozeanregionen und können mit verschiedenen Arten interagieren.
        },
    },
    {
        question:
            "Ich habe einen starken Orientierungssinn und verlaufe mich selten.",
        weights: {
            blauwal: 0.3, // Blauwale haben ein gutes Navigationssystem, nutzen jedoch hauptsächlich Magnetfelder und Ozeanströmungen, was nicht auf einen "Orientierungssinn" im klassischen Sinne hinweist.
            buckelwal: 0.4, // Buckelwale sind ebenfalls bekannt für ihre Navigationsfähigkeiten, basierend auf akustischen Signalen und den Ozeanströmungen, aber ihr Orientierungssinn ist eher instinktiv als bewusst.
            pottwal: 0.6, // Pottwale sind in der Lage, große Distanzen unter Wasser zurückzulegen und nutzen Echolokation, was auf eine starke Orientierung hindeutet.
            orca: 0.8, // Orcas sind sehr soziale Tiere, die komplexe Jagd- und Reiseverhalten zeigen, was auf einen starken Orientierungssinn hindeutet, besonders bei der Jagd und in Gruppenbewegungen.
            grauwal: 0.7, // Grauwale sind bekannt für ihre jährlichen Wanderungen über große Entfernungen, was auf eine beeindruckende Fähigkeit zur Orientierung und Navigation hindeutet.
            zwergwal: 0.5, // Zwergwale nutzen die Ozeanströmungen zur Orientierung, jedoch nicht in dem Maße wie größere Walarten, die mehr ausgeprägte Navigationsfähigkeiten zeigen.
            belugawal: 0.4, // Belugawale leben in kalten Gewässern und nutzen oft akustische Signale, was auf eine gewisse Orientierung hindeutet, aber nicht unbedingt auf einen besonders starken Orientierungssinn.
            narwal: 0.7, // Narwale leben in extremen arktischen Gewässern und sind in der Lage, sich in diesen komplexen Umgebungen gut zurechtzufinden, was auf einen hohen Orientierungssinn hindeutet.
            delfin: 0.9, // Delfine sind bekannt für ihre herausragenden Navigationsfähigkeiten, sowohl im offenen Meer als auch in komplexen Küstengewässern, was sie zu sehr guten Orientierungsnavigatoren macht.
        },
    },
    {
        question: "Ich bin ein Teamplayer und arbeite gerne in Gruppen.",
        weights: {
            blauwal: -0.5, // Blauwale sind Einzelgänger und reisen in der Regel allein oder in sehr kleinen Gruppen, daher passen sie nicht gut zu dieser Aussage.
            buckelwal: 0.8, // Buckelwale sind bekannt für ihre sozialen Gruppen, die oft gemeinsam jagen und kommunizieren. Sie passen gut zur Idee eines Teamplayers.
            pottwal: 0.3, // Pottwale leben in matriarchalen Gruppen, aber ihre Struktur ist eher weniger gemeinschaftlich im Vergleich zu anderen Walarten. Sie arbeiten zusammen, jedoch nicht in einer sehr ausgeprägten Teamdynamik.
            orca: 1.0, // Orcas sind extrem soziale Tiere, die in komplexen Familien- und Jagdgruppen leben. Sie sind eindeutig Teamplayer.
            grauwal: 0.6, // Grauwale bilden relativ kleine Gruppen, vor allem während der Wanderung, aber ihre Interaktionen sind nicht so ausgeprägt wie bei anderen Arten.
            zwergwal: 0.4, // Zwergwale leben in kleineren Gruppen, aber sie sind weniger sozial als größere Walarten. Sie arbeiten zusammen, jedoch nicht in stark strukturierten Gruppen.
            belugawal: 0.9, // Belugawale sind sehr soziale Tiere, die in Gruppen leben und miteinander kommunizieren, was sie zu guten Teamplayern macht.
            narwal: 0.5, // Narwale leben in Gruppen, jedoch sind diese weniger eng verknüpft als bei anderen Walarten. Sie passen zu einem Teamplayer, aber nicht perfekt.
            delfin: 1.0, // Delfine sind extrem soziale Tiere, die in Gruppen jagen, spielen und kommunizieren. Sie sind die Paradebeispiele für Teamplayer.
        },
    },
    {
        question:
            "Ich bevorzuge Beständigkeit und Routine in meinem täglichen Leben.",
        weights: {
            blauwal: 0.8, // Blauwale sind sehr viel unterwegs und folgen saisonalen Migrationsmustern, was eine gewisse Beständigkeit im Lebensrhythmus darstellt, auch wenn sie weit reisen.
            buckelwal: 0.4, // Buckelwale haben komplexe Migrationen, aber sie sind auch bekannt für ihre langen Wanderungen, was etwas weniger routiniert wirkt, aber immer noch regelmäßig.
            pottwal: 0.6, // Pottwale zeigen regelmäßige Muster in ihrer Lebensweise, besonders bei der Jagd und den Migrationen, was eine gewisse Beständigkeit widerspiegelt.
            orca: 0.5, // Orcas haben strenge soziale Strukturen und Routinen innerhalb ihrer Gruppen, jedoch sind sie auch sehr anpassungsfähig an unterschiedliche Umgebungen und Jagdmethoden.
            grauwal: 0.9, // Grauwale haben eine sehr regelmäßige und beständige Migration, die weitgehend vorhersehbar ist, was gut zu Beständigkeit passt.
            zwergwal: 0.7, // Zwergwale haben relativ regelmäßige Bewegungen, obwohl sie in größeren Schwärmen leben und die Strukturen variieren können.
            belugawal: 0.8, // Belugawale leben in relativ konstanten Bedingungen in bestimmten Regionen, oft in kalten Gewässern, und haben beständige soziale und geografische Muster.
            narwal: 0.6, // Narwale folgen einer bestimmten Migration und haben eine gewisse Beständigkeit in ihren Bewegungen, aber auch ihre Anpassungsfähigkeit an die Umwelt ist relevant.
            delfin: 0.3, // Delfine sind oft sehr sozial und flexibel, wobei sie in verschiedenen Regionen und mit unterschiedlichen Gruppen zusammenarbeiten, was ihre Routine etwas variabler macht.
        },
    },
    {
        question:
            "Ich habe ein Talent dafür, Details und Informationen zu merken.",
        weights: {
            blauwal: 0.2, // Blauwale sind eher für ihre beeindruckende Größe bekannt und weniger für Detailgenauigkeit. Es gibt jedoch Hinweise darauf, dass sie komplexe Migrationsmuster kennen.
            buckelwal: 0.4, // Buckelwale sind bekannt für ihr komplexes Verhalten und ihre Kommunikation. Sie merken sich möglicherweise bestimmte Routen oder Details zu Futterplätzen.
            pottwal: 0.7, // Pottwale haben große Gehirne und sind bekannt dafür, in komplexen sozialen Gruppen zu leben. Sie können sich Details ihrer Umgebung und Beziehungen gut merken.
            orca: 0.9, // Orcas sind für ihre hohe Intelligenz und sozialen Strukturen berüchtigt. Sie haben eine starke Fähigkeit, Details zu merken, insbesondere bei der Jagd und im Familienverband.
            grauwal: 0.3, // Grauwale haben eine gute Erinnerung für ihre Migrationsrouten, aber sind weniger für das Merken von spezifischen Details bekannt.
            zwergwal: 0.2, // Zwergwale sind eher als wandernde Tiere bekannt, ohne ausgeprägte Merkfähigkeiten für Details oder komplexe Verhaltensweisen.
            belugawal: 0.6, // Belugawale sind kommunikativ und können sich Details ihrer Umgebung merken, besonders im Zusammenhang mit ihrer sozialen Struktur.
            narwal: 0.5, // Narwale sind weniger bekannt für ihre Detailspeicherung, aber sie leben in komplexen arktischen Umgebungen, in denen sie sich Routen merken könnten.
            delfin: 1, // Delfine sind extrem intelligent, haben ein gutes Gedächtnis und merken sich komplexe Informationen, sowohl in sozialen Interaktionen als auch in Bezug auf ihre Umgebung.
        },
    },
    {
        question: "Ich bin für meine körperliche Stärke und Ausdauer bekannt.",
        weights: {
            blauwal: 1, // Der Blauwal ist das größte Tier der Welt und bekannt für seine enorme körperliche Stärke und Ausdauer.
            buckelwal: 0.7, // Buckelwale sind für ihre Sprünge und ausdauernden Wanderungen bekannt, ihre Stärke ist jedoch nicht so extrem wie die des Blauwals.
            pottwal: 0.8, // Pottwale sind für ihre tiefen Tauchgänge und Ausdauer bekannt, was ihre körperliche Stärke unterstreicht.
            orca: 0.9, // Orcas sind extrem starke und ausdauernde Tiere, die in Gruppen erfolgreich jagen und weite Strecken zurücklegen.
            grauwal: 0.6, // Grauwale haben gute Ausdauer bei ihren langen Wanderungen, aber sind nicht ganz so kräftig wie Orcas oder Blauwale.
            zwergwal: 0.4, // Zwergwale sind kleiner und weniger stark als größere Walarten, sie sind jedoch immer noch ausdauernd in ihren Bewegungen.
            belugawal: 0.3, // Belugawale sind eher für ihre Intelligenz und Anpassungsfähigkeit bekannt, weniger für körperliche Stärke oder Ausdauer.
            narwal: 0.5, // Narwale sind zwar stark und anpassungsfähig, ihre Ausdauer und körperliche Stärke sind jedoch nicht so ausgeprägt wie bei anderen Walarten.
            delfin: 0.2, // Delfine sind für ihre Intelligenz und Wendigkeit bekannt, aber nicht unbedingt für körperliche Stärke und Ausdauer im Vergleich zu Walen.
        },
    },
    {
        question:
            "Ich bevorzuge ruhige, friedliche Umgebungen gegenüber lauten.",
        weights: {
            blauwal: 0.9, // Der Blauwal ist bekannt für seine ruhigen, langsamen Bewegungen und lebt in offenen Ozeanen, weit entfernt von lärmigen Küstengebieten.
            buckelwal: 0.7, // Buckelwale bevorzugen tiefere Gewässer und sind oft in ruhigen, abgelegenen Gebieten zu finden, auch wenn sie bei der Jagd manchmal lautere Geräusche machen.
            pottwal: 0.4, // Pottwale leben in tiefen, oft eher dunklen Gewässern, aber ihre Jagd auf Kalmare kann laut und intensiver sein. Sie sind nicht immer in ruhigen Umgebungen.
            orca: -0.3, // Orcas sind sehr gesellige und oft laute Tiere, die in Gruppen jagen und kommunizieren, was sie zu einem weniger ruhigen Wal macht.
            grauwal: 0.5, // Grauwale leben in abgelegenen Gebieten, aber ihre Wanderungen sind oft laut, vor allem, wenn sie in großen Gruppen unterwegs sind.
            zwergwal: 0.6, // Zwergwale sind relativ ruhig und bewegen sich in tiefen Gewässern. Sie bevorzugen weniger turbulente Gewässer im Vergleich zu anderen Walarten.
            belugawal: 0.8, // Belugawale sind für ihre ruhigen, langsamen Bewegungen bekannt und leben in kühleren, oft weniger belebten Gewässern.
            narwal: 0.7, // Narwale leben in den kalten, tiefen Gewässern der Arktis und bevorzugen ruhigere Umgebungen, wobei ihre Kommunikation meist in einem subtilen Ton erfolgt.
            delfin: -0.5, // Delfine sind gesellige und kommunikative Tiere, die in Gruppen leben und oft in lauten, aktiven Umgebungen anzutreffen sind.
        },
    },
    {
        question:
            "Ich bin ein guter Zuhörer und nehme oft Dinge wahr, die andere übersehen.",
        weights: {
            blauwal: 0.5, // Der Blauwal ist ein ruhiger und friedlicher Wal, der in einer großen, weiten Umgebung lebt und durch seine enorme Größe auch in der Lage ist, subtile Details wahrzunehmen, obwohl er in der Regel nicht besonders als aktiver Zuhörer bekannt ist.
            buckelwal: 0.8, // Buckelwale sind bekannt für ihre komplexen Gesänge und sozialen Interaktionen, die auf eine hohe Aufmerksamkeit und Wahrnehmungsfähigkeit hinweisen. Sie sind auf Kommunikation angewiesen und zeigen eine große Sensibilität gegenüber ihrer Umgebung.
            pottwal: 0.7, // Pottwale haben ein besonders gutes Gehör, da sie auf Echolokation angewiesen sind, um ihre Umgebung zu "sehen". Sie sind als sehr aufmerksame Jäger bekannt und haben ein feines Gespür für subtile akustische Signale.
            orca: 0.9, // Orcas sind äußerst soziale Tiere, die stark auf Kommunikation angewiesen sind. Ihre Fähigkeit, innerhalb von Gruppen zu kommunizieren und auf ihre Umgebung zu reagieren, deutet darauf hin, dass sie sehr gute Zuhörer sind, die Dinge wahrnehmen, die andere übersehen.
            grauwal: 0.6, // Grauwale sind auf ihren Wanderungen auf akustische Signale angewiesen und nehmen ihre Umgebung gut wahr, sind aber nicht so sozial und kommunikativ wie einige andere Walarten. Daher ist ihr Wert hier moderat.
            zwergwal: 0.4, // Zwergwale sind eher Einzelgänger und weniger kommunikativ als andere Walarten. Ihr Fokus liegt mehr auf der Nahrungssuche und weniger auf der Interaktion, weshalb sie nicht als besonders gute Zuhörer wahrgenommen werden.
            belugawal: 0.8, // Belugawale sind bekannt für ihre ausgeprägte Kommunikation und ihr hohes Sozialverhalten. Sie haben ein feines Gehör und sind sehr aufnahmefähig für akustische Signale, was sie zu guten Zuhörern macht.
            narwal: 0.6, // Narwale sind bekannt für ihre geheimnisvolle Natur und ihre Lebenserfahrung in den kalten arktischen Gewässern. Sie sind zwar aufmerksam und nehmen ihre Umgebung gut wahr, aber ihre Kommunikation und Interaktionen sind weniger komplex als bei anderen Walarten.
            delfin: 1.0, // Delfine sind die bekanntesten "guten Zuhörer", da sie über ein sehr komplexes Kommunikationssystem verfügen und in Gruppen sehr aufmerksam sind. Sie sind extrem sozial und haben ein hohes Maß an Empathie, was sie zu hervorragenden Zuhörern macht.
        },
    },
    {
        question: "Ich genieße es, aufzutreten oder im Mittelpunkt zu stehen.",
        weights: {
            blauwal: -0.5, // Blauwale sind zurückhaltend und leben eher in ruhigen, isolierten Umgebungen, wodurch sie selten im Mittelpunkt stehen.
            buckelwal: 0.8, // Buckelwale sind für ihre auffälligen und spektakulären Sprünge und Gesänge bekannt, was darauf hinweist, dass sie Freude daran haben, Aufmerksamkeit zu erregen.
            pottwal: 0.1, // Pottwale sind in der Regel eher zurückhaltend und leben in tiefen, abgelegenen Gewässern, was ihren "Auftritt" im Mittelpunkt einschränkt, jedoch haben sie eine markante Präsenz, wenn sie auftauchen.
            orca: 0.9, // Orcas sind äußerst sozial und bekannt für ihre komplexen Interaktionen in Gruppen. Sie sind oft die "Stars" in ihrer sozialen Struktur und könnten als sehr "auffällig" betrachtet werden.
            grauwal: 0.4, // Grauwale sind weniger auffällig, aber ihre migrationsbedingte Präsenz in bestimmten Gebieten könnte als eine Form von Aufmerksamkeit interpretiert werden.
            zwergwal: -0.3, // Zwergwale sind eher klein und weniger sichtbar, leben in ruhigeren Gewässern und sind selten im Mittelpunkt von Beobachtungen.
            belugawal: 0.5, // Belugawale sind für ihre neugierige Natur bekannt, was sie in gewissen Situationen eher im Mittelpunkt von Beobachtungen stehen lässt, besonders in Gewässern mit Menschenkontakt.
            narwal: 0.2, // Narwale sind aufgrund ihres einzigartigen Aussehens recht auffällig, aber sie sind eher scheu und ziehen es vor, abseits des "Mittelpunkts" zu bleiben.
            delfin: 1, // Delfine sind sehr soziale Tiere, die oft im Mittelpunkt stehen, sowohl in freier Wildbahn als auch in aquaristischen Umgebungen. Sie sind bekannt für ihr spielerisches Verhalten und ihre Interaktionen mit Menschen, was sie zu echten "Stars" macht.
        },
    },
    {
        question: "Ich bin sehr neugierig und erkunde gerne neue Orte.",
        weights: {
            blauwal: -0.5, // Blauwale tendieren dazu, lange Strecken zu schwimmen, aber sie sind nicht besonders neugierig. Sie haben eher ein ruhiges, wanderndes Verhalten.
            buckelwal: 0.7, // Buckelwale sind bekannt für ihre neugierige und verspielte Natur. Sie sind oft in der Nähe von Booten zu finden und zeigen Interesse an neuen Dingen.
            pottwal: 0.2, // Pottwale sind intelligent und forschen oft in tiefen Gewässern, aber ihr Verhalten ist weniger auf das Erkunden neuer Orte fokussiert.
            orca: 0.8, // Orcas sind äußerst neugierig und abenteuerlustig. Sie sind soziale Tiere, die verschiedene Ökosysteme erkunden und sich neue Gebiete aneignen.
            grauwal: 0.6, // Grauwale unternehmen weite Wanderungen und sind ebenfalls für ihre Neugierde bekannt, besonders in Bezug auf neue Umgebungen und Futterquellen.
            zwergwal: -0.3, // Zwergwale sind im Vergleich zu anderen Walen weniger neugierig, obwohl sie natürlich auch größere Gebiete durchqueren.
            belugawal: 0.5, // Belugawale sind bekannt für ihre hohe Intelligenz und Neugier, besonders in ihrem Lebensraum, der viel Interaktion mit der Umgebung erfordert.
            narwal: 0.4, // Narwale leben in einem abgelegenen Lebensraum und müssen sich daher immer wieder an neue Bedingungen anpassen, aber sie sind nicht so bekannt für Exploration wie andere Wale.
            delfin: 1.0, // Delfine sind extrem neugierig und zeigen häufig Interesse an neuen Dingen und Umgebungen. Ihre sozialen und verspielten Naturen machen sie zu idealen Entdeckern.
        },
    },
    {
        question: "Ich habe eine fürsorgliche und liebevolle Natur.",
        weights: {
            blauwal: 0.3, // Blauwale sind zwar sanft und ruhig, aber sie sind eher Einzelgänger und weniger für ihre fürsorgliche Natur bekannt.
            buckelwal: 0.8, // Buckelwale sind bekannt für ihr soziales Verhalten und ihre engen Beziehungen zu anderen, was sie zu fürsorglichen Tieren macht.
            pottwal: 0.5, // Pottwale haben starke soziale Bindungen, insbesondere in ihren Gruppen, und zeigen fürsorgliches Verhalten, aber auch eine gewisse Unabhängigkeit.
            orca: 1, // Orcas sind extrem fürsorglich und liebevoll gegenüber ihren Familien und Gruppen, mit sehr ausgeprägten sozialen Strukturen.
            grauwal: 0.6, // Grauwale zeigen ebenfalls eine fürsorgliche Natur, besonders in ihren Mutter-Kind-Beziehungen, aber sind weniger auffällig in ihrem sozialen Verhalten als andere Walarten.
            zwergwal: 0.4, // Zwergwale sind eher zurückgezogen und nicht besonders für ihre fürsorgliche Natur bekannt, auch wenn sie in kleinen Gruppen leben.
            belugawal: 0.9, // Belugawale sind sehr soziale Tiere und haben enge, fürsorgliche Bindungen zu anderen in ihrer Gruppe.
            narwal: 0.2, // Narwale sind oft eher Einzelgänger und haben nicht den gleichen stark fürsorglichen Charakter wie andere Walarten.
            delfin: 0.95, // Delfine sind extrem fürsorglich und liebevoll, insbesondere in Bezug auf ihre sozialen Gruppen und die Pflege von verletzten oder schwachen Mitgliedern.
        },
    },
    {
        question:
            "Ich ziehe es vor, für mich zu bleiben und Konflikte zu vermeiden, wenn möglich.",
        weights: {
            blauwal: 0.5, // Blauwale sind sehr große Tiere, die meist allein oder in sehr kleinen Gruppen leben. Sie bevorzugen es, ruhig durch die Ozeane zu ziehen und vermeiden in der Regel Konflikte.
            buckelwal: -0.3, // Buckelwale sind bekannter für ihre komplexen sozialen Interaktionen und Wanderungen in Gruppen. Sie suchen oft den Kontakt zu anderen Walen und können aktiv an Gruppeninteraktionen teilnehmen, was Konflikte begünstigen könnte.
            pottwal: 0.2, // Pottwale leben auch eher in kleineren Gruppen und sind weitgehend Einzelgänger, was zu einer etwas geringeren Tendenz zu Konflikten führt. Sie sind aber auch für ihre komplexen Sozialstrukturen bekannt.
            orca: -0.5, // Orcas sind sehr soziale Tiere, die in starken, strukturierten Gruppen leben. Konflikte sind ein wesentlicher Teil ihres Lebens, da sie Jäger sind und ihre Gruppenintelligenz in Kämpfen und Interaktionen nutzen.
            grauwal: 0.4, // Grauwale sind in der Regel Einzelgänger oder leben in kleinen Gruppen, die nicht häufig soziale Konflikte suchen. Sie bevorzugen weite Wanderungen und meiden Konflikte, wenn möglich.
            zwergwal: 0.6, // Zwergwale sind in der Regel auch Einzelgänger oder bilden kleine Gruppen. Ihre Lebensweise ist eher zurückhaltend, was eine Tendenz zur Konfliktvermeidung begünstigt.
            belugawal: 0.3, // Belugawale sind eher soziale Tiere, die in Familiengruppen leben, aber sie neigen nicht zu aggressiven oder konfliktbeladenen Interaktionen. Sie bevorzugen eine harmonische, familiäre Struktur.
            narwal: 0.4, // Narwale sind Einzelgänger oder leben in kleinen Gruppen. Sie bevorzugen isolierte Lebensräume, was zu einer niedrigen Neigung zu Konflikten führt.
            delfin: -0.4, // Delfine sind sehr soziale Tiere, die in großen, aktiven Gruppen leben. Konflikte sind oft ein Bestandteil ihres Lebens, da sie hierarchische und komplexe soziale Strukturen haben, die gelegentlich zu Konflikten führen können.
        },
    },
    {
        question:
            "Ich gedeihe in herausfordernden Situationen und genieße es, Hindernisse zu überwinden.",
        weights: {
            blauwal: -0.2, // Blauwale sind eher ruhig und folgen einem festen Wanderverhalten. Sie sind weniger auf Konflikte oder Herausforderungen ausgerichtet.
            buckelwal: 0.8, // Buckelwale sind bekannt für ihre beeindruckenden Gesänge und ihre Fähigkeit, in rauen Meeren zu navigieren, was ihre Anpassungsfähigkeit und Ausdauer zeigt.
            pottwal: 0.7, // Pottwale haben eine bemerkenswerte Fähigkeit, in die Tiefen des Ozeans vorzudringen, was eine Anpassung an herausfordernde Umgebungen zeigt.
            orca: 1, // Orcas sind äußerst anpassungsfähig und zeigen sowohl in der Jagd als auch in sozialen Strukturen eine hohe Fähigkeit, Herausforderungen zu meistern und Hindernisse zu überwinden.
            grauwal: 0.5, // Grauwale sind zähe Tiere, die weite Distanzen durch schwierige Gewässer zurücklegen, aber sie sind weniger für extreme Anpassungsfähigkeit in herausfordernden Situationen bekannt als andere Walarten.
            zwergwal: 0.3, // Zwergwale sind agil und können schwierige Gewässer navigieren, aber sie haben nicht den Ruf, Herausforderungen in gleicher Weise zu suchen oder zu genießen wie einige andere Arten.
            belugawal: 0.6, // Belugawale sind in kalten, herausfordernden Gewässern heimisch und zeigen Anpassungsfähigkeit, jedoch ohne die Intensität, die man bei Orcas oder Pottwalen sieht.
            narwal: 0.9, // Narwale, mit ihrer Fähigkeit, in den tiefsten und kaltesten Gewässern zu überleben, sind hervorragend an herausfordernde Umgebungen angepasst und meistern viele Hindernisse.
            delfin: 0.8, // Delfine sind für ihre Intelligenz und ihre Fähigkeit bekannt, in schwierigen sozialen und physischen Umfeldern zu agieren. Sie sind geschickt im Umgang mit Herausforderungen.
        },
    },
    {
        question:
            "Ich bin ein bisschen ein Perfektionist und mag es, Dinge auf eine bestimmte Weise zu erledigen.",
        weights: {
            blauwal: 0.2, // Der Blauwal ist zwar riesig, aber er ist eher ein entspannter Wal, der nicht besonders in perfektionistischer Weise agiert.
            buckelwal: 0, // Buckelwale sind für ihr komplexes Verhalten bekannt, aber sie neigen nicht dazu, besonders perfektionistisch zu sein.
            pottwal: 0.4, // Pottwale sind tief im Ozean unterwegs und fokussiert, was auf eine gewisse Präzision hindeutet, aber nicht zwangsläufig Perfektionismus.
            orca: 0.8, // Orcas sind sehr strategisch und organisiert, sie jagen in Gruppen und handeln mit großer Präzision und Effektivität, was gut zu einem Perfektionisten passt.
            grauwal: 0.3, // Grauwale sind sehr anpassungsfähig und weniger dafür bekannt, perfektionistisch zu sein, aber sie zeigen ein gewisses Maß an Ordnung.
            zwergwal: 0.1, // Zwergwale sind kleine, agile Tiere, aber sie sind eher pragmatisch als perfektionistisch.
            belugawal: 0.5, // Belugawale sind intelligent und anpassungsfähig, sie können sehr präzise in ihren Bewegungen sein, was eine Tendenz zu Perfektionismus widerspiegeln könnte.
            narwal: 0.6, // Narwale sind einzigartig und besonders, was zu einem gewissen Perfektionismus in ihrem Verhalten führen könnte, besonders in ihrer Anpassung an die Umwelt.
            delfin: 0.7, // Delfine sind bekannt für ihre hohe Intelligenz und ihre Fähigkeit, genau zu kommunizieren und zu handeln, was auf eine starke Neigung zu Perfektionismus hinweist.
        },
    },
    {
        question:
            "Ich schätze meine Unabhängigkeit und ziehe es vor, Dinge alleine zu tun.",
        weights: {
            blauwal: 0.2, // Blauwale sind große, soziale Tiere, die in Gruppen leben, aber auch viel alleine unterwegs sind. Sie sind nicht besonders auf Unabhängigkeit angewiesen, da ihre sozialen Strukturen eher locker sind.
            buckelwal: 0.1, // Buckelwale sind ebenfalls soziale Tiere und interagieren häufig mit anderen Walen. Ihre Tendenz, in Gruppen zu reisen, lässt sie eher als gesellige Wesen erscheinen.
            pottwal: 0.5, // Pottwale haben in der Regel eine enge Mutter-Kalbin-Beziehung und leben in kleinen Gruppen, aber sie sind oft Einzelgänger bei der Nahrungssuche, was eine gewisse Unabhängigkeit widerspiegelt.
            orca: 0.3, // Orcas sind hochsoziale Tiere, die in komplexen Familiengruppen leben. Obwohl sie sehr intelligent sind und teilweise alleine jagen, bevorzugen sie in der Regel soziale Bindungen.
            grauwal: 0.4, // Grauwale reisen oft in Gruppen, zeigen aber auch Unabhängigkeit während ihrer langen Wanderungen. Sie sind weniger auf enge soziale Bindungen angewiesen.
            zwergwal: 0.6, // Zwergwale sind relativ zurückgezogen und neigen dazu, alleine oder in kleinen Gruppen zu leben. Ihre Unabhängigkeit ist stärker ausgeprägt.
            belugawal: 0.2, // Belugawale leben in engen sozialen Gruppen und haben ein ausgeprägtes Gemeinschaftsgefühl. Ihre Unabhängigkeit ist eher gering.
            narwal: 0.7, // Narwale sind eher zurückgezogen und leben in relativ kleinen Gruppen, was eine stärkere Unabhängigkeit widerspiegelt, besonders bei den männlichen Tieren.
            delfin: 0.1, // Delfine sind extrem soziale Tiere und leben in großen Gruppen. Ihre Unabhängigkeit ist stark eingeschränkt, da sie sehr auf Gemeinschaft angewiesen sind.
        },
    },
    {
        question:
            "Ich lerne schnell und kann neue Fähigkeiten schnell erlernen.",
        weights: {
            blauwal: 0.2, // Blauwale sind eher bekannt für ihre Größe und weniger für ihre schnelle Lernfähigkeit.
            buckelwal: 0.5, // Buckelwale zeigen eine gewisse Flexibilität und Anpassungsfähigkeit, sie nutzen komplexe Jagdtechniken und sind in der Lage, neue Verhaltensweisen zu erlernen.
            pottwal: 0.3, // Pottwale sind klug und haben ausgeprägte kognitive Fähigkeiten, sind aber weniger bekannt für die schnelle Anpassung an neue Fähigkeiten im Vergleich zu anderen Walarten.
            orca: 0.9, // Orcas sind sehr intelligente und anpassungsfähige Tiere, die neue Jagdtechniken lernen und ihr Verhalten an verschiedene Umgebungen und Situationen anpassen können.
            grauwal: 0.4, // Grauwale sind eher bekannt für ihre migrationsorientierten Verhaltensweisen, aber sie zeigen nicht unbedingt eine schnelle Lernfähigkeit im Sinne von schnellem Erwerb neuer Fähigkeiten.
            zwergwal: 0.3, // Zwergwale sind eher als unauffällig und weniger flexibel in Bezug auf Lernfähigkeiten bekannt.
            belugawal: 0.8, // Belugawale sind sehr anpassungsfähig und zeigen eine bemerkenswerte Fähigkeit, mit Menschen zu interagieren und neue Verhaltensweisen zu erlernen.
            narwal: 0.6, // Narwale haben spezialisierte Lebensweisen, was auf eine gewisse Lernfähigkeit hindeutet, aber sie sind nicht so vielseitig wie Orcas oder Belugawale.
            delfin: 1, // Delfine sind bekannt für ihre außergewöhnliche Intelligenz und schnelle Lernfähigkeit, sie sind in der Lage, komplexe Aufgaben schnell zu erlernen und an neue Umgebungen anzupassen.
        },
    },
    {
        question:
            "Ich helfe gerne anderen und stelle oft ihre Bedürfnisse vor meine eigenen.",
        weights: {
            blauwal: 0.5, // Blauwale sind oft als sanfte Riesen bekannt, die in großen Gruppen leben. Sie könnten als hilfsbereit wahrgenommen werden, aber ihre Größe und Lebensweise legen nahe, dass sie nicht direkt in einem aktiven sozialen Gefüge sind, in dem sie ständig anderen helfen.
            buckelwal: 0.8, // Buckelwale sind für ihre komplexen und unterstützenden Verhaltensweisen bekannt, wie das Schützen von anderen Tieren (einschließlich anderer Wale) und das Singen von Gesängen, die möglicherweise auf ein hohes Maß an Fürsorglichkeit hinweisen.
            pottwal: 0.2, // Pottwale sind meist Einzelgänger oder leben in kleinen, engen Gruppen, in denen sie eher fokussiert auf ihre eigenen Bedürfnisse sind. Sie zeigen jedoch eine gewisse Fürsorge für ihre Jungen und das soziale Gefüge in ihren Gruppen.
            orca: 0.7, // Orcas leben in matrilinearen Gruppen und zeigen oft altruistisches Verhalten, sowohl innerhalb ihrer Gruppe als auch in anderen Interaktionen. Sie sind sehr soziale Tiere, die oft zusammenarbeiten, um zu jagen und zu schützen.
            grauwal: 0.6, // Grauwale zeigen ein gewisses Maß an Fürsorglichkeit in ihren Migratiönsverhalten, wo sie sich um ihre Kälber kümmern und in ihren Reisegewohnheiten zusammenarbeiten, jedoch sind sie nicht so ausgeprägt hilfsbereit wie andere Walarten.
            zwergwal: 0.4, // Zwergwale sind Einzelgänger und weniger sozial als andere Walarten. Sie könnten als weniger geneigt zu selbstlosem Verhalten wahrgenommen werden, aber ihre soziale Struktur innerhalb kleiner Gruppen könnte dennoch helfen, ihre Familie zu schützen.
            belugawal: 0.8, // Belugawale sind sehr soziale Tiere, die in engen Gemeinschaften leben und eine hohe Bereitschaft zur Zusammenarbeit und Fürsorge für andere in ihrer Gruppe zeigen. Sie sind bekannt dafür, empathische und unterstützende Verhaltensweisen zu zeigen.
            narwal: 0.3, // Narwale leben meist in Gruppen, sind aber nicht für besonders hilfsbereites Verhalten bekannt. Ihre Interaktionen sind eher durch ihre angepasste Lebensweise an die arktische Umgebung geprägt als durch ein aktives Streben, die Bedürfnisse anderer zu priorisieren.
            delfin: 1.0, // Delfine sind bekannt für ihr ausgeprägtes soziales Verhalten und ihre Bereitschaft, anderen zu helfen, sowohl innerhalb ihrer Gruppen als auch gegenüber anderen Tieren, einschließlich Menschen. Sie sind äußerst sozial und zeigen oft altruistisches Verhalten.
        },
    },
    {
        question:
            "Ich bin für meinen einzigartigen Stil oder meine Persönlichkeit bekannt.",
        weights: {
            blauwal: -0.5, // Der Blauwal ist zwar einzigartig als das größte Tier der Welt, aber eher für seine Größe und nicht für eine besondere Persönlichkeit bekannt.
            buckelwal: 0.8, // Buckelwale sind für ihre beeindruckenden Gesänge und ihre besonderen Verhaltensweisen bekannt, was als einzigartig wahrgenommen werden kann.
            pottwal: 0.6, // Pottwale sind bekannt für ihre tiefe Tauchtiefe und ihr komplexes Verhalten, was sie zu einer markanten und einzigartigen Art macht.
            orca: 1, // Orcas (Killerwale) sind für ihre Intelligenz, ihre komplexen Sozialstrukturen und individuellen Jagdmethoden bekannt, was sie in der Tierwelt einzigartig macht.
            grauwal: 0.2, // Grauwale sind etwas weniger auffällig und eher für ihre Wanderungen bekannt, aber nicht unbedingt für eine herausragende Persönlichkeit.
            zwergwal: -0.2, // Zwergwale sind eher für ihre Größe und Agilität bekannt, weniger für eine besonders auffällige Persönlichkeit.
            belugawal: 0.7, // Belugawale sind für ihre soziale Art und ihre auffällige, weiße Farbe bekannt, was sie von anderen Walen unterscheidet.
            narwal: 1, // Narwale sind für ihren einzigartigen "Einhorn"-ähnlichen Stoßzahn bekannt, was sie sehr auffällig und einzigartig macht.
            delfin: 1, // Delfine sind für ihre verspielte und intelligente Persönlichkeit bekannt, was sie zu einer der einzigartigsten Arten im Meer macht.
        },
    },
    {
        question:
            "Ich habe ein starkes Gemeinschaftsgefühl und bin gerne Teil einer Gruppe.",
        weights: {
            blauwal: -0.5, // Blauwale sind Einzelgänger und verbringen viel Zeit alleine, was das Gemeinschaftsgefühl einschränkt.
            buckelwal: 0.8, // Buckelwale sind bekannt für ihre sozialen Gruppen, insbesondere bei der Jagd und Kommunikation. Sie zeigen starkes Gemeinschaftsverhalten.
            pottwal: 0.6, // Pottwale leben in matriarchalischen Gruppen und haben ein starkes Sozialverhalten, besonders in Bezug auf ihre Familie.
            orca: 1, // Orcas sind äußerst soziale Tiere, die in komplexen, kooperativen Gruppen leben und stark auf Gemeinschaft angewiesen sind.
            grauwal: 0.4, // Grauwale haben weniger enge soziale Bindungen, neigen aber dazu, während ihrer Wanderung Gruppen zu bilden.
            zwergwal: -0.2, // Zwergwale neigen dazu, weniger in Gruppen zu leben und haben kein so starkes Gemeinschaftsgefühl wie einige andere Walarten.
            belugawal: 0.9, // Belugawale sind sehr soziale Tiere, die oft in großen, miteinander verbundenen Gruppen leben und kommunikativ sind.
            narwal: 0.5, // Narwale leben in kleinen, sozialen Gruppen, sind aber nicht so stark auf Gemeinschaft angewiesen wie Orcas oder Buckelwale.
            delfin: 1, // Delfine sind extrem soziale Tiere, die stark auf Gruppenbildung und Gemeinschaft angewiesen sind, sowohl in freier Wildbahn als auch in Gefangenschaft.
        },
    },
    {
        question: "Ich bleibe ruhig unter Druck und gehe gut mit Stress um.",
        weights: {
            blauwal: 0.3, // Blauwale sind groß und majestätisch und haben eine langsame, bedächtige Lebensweise, was darauf hinweist, dass sie eher ruhig unter Druck bleiben könnten.
            buckelwal: 0.1, // Buckelwale sind für ihre Verspieltheit und ihre komplexen Gesänge bekannt. Sie könnten bei Stress eher ihre Kreativität und Anpassungsfähigkeit zeigen, aber nicht unbedingt die größte Ruhe.
            pottwal: 0.7, // Pottwale sind bekannt dafür, sehr gut unter extremen Bedingungen zu überleben, insbesondere in tiefen, dunklen Ozeanen. Sie gehen sehr ruhig mit herausfordernden Situationen um.
            orca: 0.6, // Orcas sind sehr anpassungsfähig und strategisch. Obwohl sie in der Natur als Jäger aktiv sind, zeigen sie eine beeindruckende Fähigkeit, in stressigen Momenten ruhig und effektiv zu handeln.
            grauwal: 0.4, // Grauwale sind bekannt für ihre langen Migrationen und ihre Ausdauer. Sie sind robust, was auf eine gewisse Fähigkeit hinweist, unter Druck ruhig zu bleiben.
            zwergwal: 0.2, // Zwergwale sind eher kleinere und schnellere Wale, die in stressigen Situationen wahrscheinlich eine eher hektische Reaktion zeigen.
            belugawal: 0.5, // Belugawale sind gesellig und zeigen eine hohe Anpassungsfähigkeit an ihre Umwelt. Sie können unter Druck ruhig bleiben, vor allem in Gruppen.
            narwal: 0.4, // Narwale sind an kalte, rauhe Umgebungen angepasst und könnten gut mit Stress umgehen, allerdings sind sie nicht besonders bekannt für ihre emotionale Ruhe unter Druck.
            delfin: 0.3, // Delfine sind sozial und intelligent, aber ihre Verspieltheit könnte sie in stressigen Momenten eher weniger ruhig machen, auch wenn sie in Gruppen gut agieren.
        },
    },
];
