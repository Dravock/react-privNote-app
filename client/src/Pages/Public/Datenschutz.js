import React from 'react'

function Datenschutz() {
    return (
        <div className='bg-white'>
            <h1 className='text-3xl font-bold'>Datenschutzrichtlinie</h1>
            <p><strong>Zuletzt aktualisiert:</strong> 15. Mai 2022</p>

            <p>Bei Pirvnota wird Datenschutz sehr ernst genommen, da der Hauptzweck der Website darin besteht, ihn zu wahren. Diese Richtlinie legt die von Pirvnota ergriffenen Maßnahmen zum Schutz der Privatsphäre ihrer Benutzer dar.</p>

            <h2>1. Servicebeschreibung</h2>
            <p>Pirvnota ist ein kostenloser webbasierter Dienst, der Benutzern ermöglicht, verschlüsselte Notizen zu erstellen, die sie über das Internet als einzigartige, einmalig verwendbare HTTPS-URLs (im Folgenden als Links bezeichnet) teilen können, die standardmäßig nach dem ersten Zugriff über jeden Webbrowser ablaufen.</p>

            <p>Da Pirvnota keine Mittel zur Übertragung des Links bereitstellt, liegt die vollständige Verantwortung für das Senden des Links bei den Pirvnota-Benutzern.</p>

            <p>Abhängig vom gewählten Kommunikationskanal (z. B. E-Mail, Fax, SMS, Telefon, Instant Messaging, soziale Medien) besteht möglicherweise ein bestimmtes Risiko, dass Dritte Ihre Kommunikation abfangen, Kenntnis vom übermittelten Link erlangen und somit Ihre Notiz lesen können.</p>

            <h2>2. Verarbeitung der Notizen und ihrer Inhalte</h2>
            <p>Der Link wird im Browser des Benutzers generiert und zu keinem Zeitpunkt als solcher an Pirvnota gesendet. Der Link befindet sich daher nur in den Händen des Absenders (und später möglicherweise des Empfängers). Daher gibt es keine Möglichkeit, eine Notiz wiederherzustellen, wenn ein Pirvnota-Benutzer den Link verliert.</p>

            <p>Da nur der Link den Entschlüsselungsschlüssel an den Inhalt der Notiz bindet und Pirvnota den Link nicht besitzt, wird zu keinem Zeitpunkt eine Notiz im lesbaren Format bei Pirvnota gespeichert. Dies stellt sicher, dass niemand (einschließlich der Administratoren von Pirvnote) eine Notiz lesen kann.</p>

            <p>Bei Verwendung der Standardfunktionalität von Pirvnota wird beim Abrufen einer Notiz deren Daten vollständig von Pirvnota entfernt. Es gibt absolut keine Möglichkeit, sie erneut wiederherzustellen.</p>

            <p>Wenn "Optionen anzeigen" ausgewählt wird und der Benutzer ein Zeitintervall für die Entfernung der Notiz festlegt, wird die Notiz unabhängig davon, wie oft sie abgerufen wird, erst nach Ablauf dieser angegebenen Zeit gelöscht.</p>

            <p>Nachdem eine Notiz von Pirvnota gelöscht wurde, gibt es absolut keine Möglichkeit, sie erneut wiederherzustellen.</p>

            <p>Wenn eine Notiz nach 30 Tagen nicht abgerufen wird, entfernt Pirvnota sie dauerhaft, genauso als ob sie gelesen worden wäre. Das Pirvnota-Sysadmin-Team wird alles Mögliche tun, um die Website vor unbefugtem Zugriff, Änderung oder Zerstörung der Daten zu schützen. Aber selbst wenn jemand oder etwas Zugang zur Datenbank erlangen könnte, wären sie nicht in der Lage, die Notizen zu lesen, da ihre Inhalte verschlüsselt sind und ohne die Links, die Pirvnota niemals besitzt, nicht entschlüsselt werden können.</p>

            <h2>3. Verarbeitung von IP-Adressen</h2>
            <p>Pirvnota protokolliert keine IP-Adressen. Sie werden verarbeitet, um die Kommunikation mit den Servern von Pirvnota zu ermöglichen, aber sie sind nicht Teil der Protokolldateien. IP-Adressen werden gelöscht, sobald sie nicht mehr für den Zweck der Kommunikation benötigt werden.</p>

            <h2>4. Pseudonyme Daten</h2>
            <p>Der Ersteller der Notiz kann personenbezogene Daten in die Notiz aufnehmen. Obwohl diese Daten verschlüsselt sind, können sie wieder entschlüsselt werden und stellen somit pseudonyme (persönliche) Daten dar. In jedem Fall kann man den Ersteller der Notiz nicht aus der Datenbank von Pirvnota ableiten, da Pirvnota keine IP-Adressen speichert.</p>

            <p>Die Entschlüsselung der Notizdaten liegt in den Händen der Benutzer (Absender und Empfänger). Pirvnota ist nicht in der Lage, die Notiz zu entschlüsseln und auf die Daten (persönlich oder anderweitig) zuzugreifen, die vom Ersteller eingegeben wurden, da Pirvnota niemals im Besitz des Entschlüsselungsschlüssels ist, der nur im Link enthalten ist.</p>

            <h2>5. Haftungsausschluss</h2>
            <p>Wenn eine Person auf den Link von Pirvnota klickt, lehnt Pirvnota jede Verantwortung für den Inhalt der Notiz ab.</p>

            <h2>6. Weitergabe von Daten an Dritte</h2>
            <p>Pirvnota teilt keine Informationen mit anderen, verkauft sie nicht und verwendet sie in keiner Weise, die in dieser Datenschutzrichtlinie nicht erwähnt wird.</p>

            <h2>7. Verwendung von Cookies</h2>
            <p>Pirvnota verwendet Cookies (kleine Textdateien, die von Ihrem Browser auf Ihrem Computer gespeichert werden, wenn Sie eine Website besuchen) in eigenem Interesse zur Verbesserung der Nutzung unserer Website und Dienste. In einigen Fällen werden sie auch für Werbezwecke verwendet. Die von Pirvnota verwendeten Arten von Cookies sind unten aufgeführt.</p>
        </div>
    )
}

export default Datenschutz