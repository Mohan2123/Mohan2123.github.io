import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.dirname(__dirname);
const legalDir = path.join(rootDir, 'src', 'data', 'legal');

const languages = [
  'en', 'en_us', 'en_gb', 'en_au', 'fr', 'de', 'vi', 'es', 'pt', 'ru',
  'hi', 'mr', 'bn', 'te', 'ta', 'tr', 'ja', 'zh', 'sw', 'ha', 'id'
];

// Content dictionaries
const localizedData = {
  en: {
    titlePP: "Privacy Policy",
    titleToS: "Terms of Service",
    pp: `<h2>1. Privacy First Architecture</h2>
<p>This Privacy Policy applies to the <strong>Fruit Blade: Bogatyr Slicer</strong> mobile application ("Application", "App", "Game", "Service"), developed by <strong>Mohan MRKS</strong> ("Developer"). Fruit Blade: Bogatyr Slicer is built with a strict "Privacy First" and offline-first philosophy. We believe your personal data, high scores, slicing achievements, and gaming experience belong exclusively to you.</p>
<h2>2. Data Handling &amp; Local Storage Policy</h2>
<p>Fruit Blade: Bogatyr Slicer operates completely locally on your client device as an offline arcade game. We do not collect, harvest, transmit, track, or sell any personally identifiable information (PII). All gameplay progression—including completed levels across 100 stages, fruit encyclopedia discoveries across 50 realistic fruits, high scores, collected Rubles (₽), blade armory selections, sound pack preferences, and slicing statistics—is stored 100% locally on your device via secure client-side storage (SharedPreferences).</p>
<h2>3. Device Permissions &amp; Hardware Features</h2>
<p>Fruit Blade: Bogatyr Slicer requests and uses only the absolute minimum device capabilities necessary to deliver smooth and immersive gameplay mechanics:</p>
<ul>
<li><strong>HAPTIC FEEDBACK / VIBRATION:</strong> Used purely locally to provide crisp tactile vibration during blade slices, fruit cleaving, bomb defusals, and combo chains. This feature does not access, read, or transmit any user data.</li>
<li><strong>AUDIO &amp; SOUND PLAYBACK:</strong> Used purely locally to output slicing sound effects, blade whooshes, juicy splashes, and celebratory victory fanfares. No microphone access, audio recording, or listening is ever performed.</li>
<li><strong>LOCAL NOTIFICATIONS:</strong> Used strictly on-device to schedule optional daily wheel reminders and challenge notifications. The game does not utilize any remote push notification service, tracking tokens, or cloud servers.</li>
</ul>
<h2>4. Third-Party Services &amp; Network Activity</h2>
<p>The Application does not maintain any remote user database, analytics servers, advertising trackers, or telemetry SDKs. The game functions fully without any internet connection. When you choose to initiate external actions—such as sharing your blade master high score via the system share sheet, opening the privacy policy in the built-in browser, or contacting developer support via email—you interact directly with standard system dialogs or external web endpoints that operate under their respective privacy policies.</p>
<h2>5. Children's Privacy (COPPA Compliance)</h2>
<p>Fruit Blade: Bogatyr Slicer contains no inappropriate content, violent gore, behavioral profiling, targeted advertising, or personal data collection. It complies fully with the Children's Online Privacy Protection Act (COPPA), the General Data Protection Regulation (GDPR), and international privacy standards.</p>
<h2>6. Policy Updates &amp; Contact Information</h2>
<p>We reserve the right to periodically update this privacy policy as Fruit Blade: Bogatyr Slicer introduces new levels, blades, or enhancements. If you have any questions or feedback regarding our privacy standards, please reach out to us at:</p>
<p>
<strong>Developer:</strong> Mohan MRKS<br/>
<strong>Support Email:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Website:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Agreement and Permitted Use</h2>
<p>These Terms of Service apply to the <strong>Fruit Blade: Bogatyr Slicer</strong> mobile application ("Application", "App", "Game"), developed by <strong>Mohan MRKS</strong> ("Developer"). By installing, accessing, or playing Fruit Blade: Bogatyr Slicer, you agree to comply with applicable laws and these terms. If you do not agree with any part of these terms, please discontinue use of the game. The game is created exclusively for your personal, non-commercial arcade entertainment.</p>
<h2>2. Gameplay, Slicing Mechanics &amp; Safety</h2>
<p>Fruit Blade: Bogatyr Slicer is a simulated arcade swipe-and-slice game featuring stylized virtual blades and fruits. All slicing gestures, blade armory items, and animations are fictional entertainment mechanics designed solely for touch screen interaction. They do not constitute training or instructions for handling real-world blades, cutlery, or physical weapons. You agree to use the game in safe physical surroundings.</p>
<h2>3. Game Progress, Currency &amp; Device Storage</h2>
<p>All game data—including your progression through 100 levels, unlocked bogatyr blades, earned in-game Rubles (₽), high score rankings, and custom settings—is saved locally on your device. In-game currency and items have no monetary value outside the game and cannot be exchanged for real money. You are responsible for preserving your device storage; clearing app data or uninstalling the game may permanently reset your local progress.</p>
<h2>4. Device Features and External Apps</h2>
<p>Sound effects, tactile haptics, and local notification reminders rely on your device's built-in operating system capabilities and user settings. When you choose to share your achievements or send feedback, your device's native share or email applications are launched subject to their own governing terms and privacy practices.</p>
<h2>5. Disclaimer of Warranties and Limitation of Liability</h2>
<p>Fruit Blade: Bogatyr Slicer is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. To the maximum extent permitted by applicable law, the Developer disclaims liability for any indirect, incidental, or consequential damages resulting from the use or inability to use the game, including device storage issues or loss of local game progress.</p>
<h2>6. Amendments and Contact</h2>
<p>These terms may be updated from time to time to reflect new game updates or regulatory requirements. For questions regarding these terms, please contact:</p>
<p>
<strong>Developer:</strong> Mohan MRKS<br/>
<strong>Support Email:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Website:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },
  ru: {
    titlePP: "Политика конфиденциальности",
    titleToS: "Условия использования",
    pp: `<h2>1. Архитектура с приоритетом конфиденциальности</h2>
<p>Настоящая Политика конфиденциальности применяется к мобильному приложению <strong>Fruit Blade: Bogatyr Slicer</strong> («Приложение», «Игра», «Сервис»), разработанному <strong>Mohan MRKS</strong> («Разработчик»). Игра создана с соблюдением строгого принципа «Конфиденциальность превыше всего» и автономной работы без передачи персональных данных. Ваши личные данные, рекорды, достижения и игровой прогресс принадлежат исключительно вам.</p>
<h2>2. Политика обработки данных и локальное хранилище</h2>
<p>Fruit Blade: Bogatyr Slicer функционирует полностью локально на клиентском устройстве как автономная аркадная игра. Мы не собираем, не извлекаем, не передаем, не отслеживаем и не продаем какую-либо персональную информацию (PII). Весь игровой прогресс — включая прохождение 100 уровней, энциклопедию из 50 реалистичных фруктов, рекорды очков, накопленные рубли (₽), разблокированные богатырские клинки, звуковые пакеты и статистику разрезаний — сохраняется на 100% локально на вашем устройстве в защищенном хранилище (SharedPreferences).</p>
<h2>3. Системные разрешения и аппаратные функции</h2>
<p>Fruit Blade: Bogatyr Slicer запрашивает и использует исключительно минимально необходимые возможности устройства для обеспечения плавного и захватывающего игрового процесса:</p>
<ul>
<li><strong>ГАПТИЧЕСКАЯ ОБРАТНАЯ СВЯЗЬ / ВИБРАЦИЯ:</strong> Используется только локально для тактильного отклика при ударах лезвия, разрубании фруктов, обезвреживании бомб и выполнении серий комбо. Эта функция не читает и не передает данные пользователя.</li>
<li><strong>ВОСПРОИЗВЕДЕНИЕ АУДИО И ЗВУКОВ:</strong> Используется исключительно локально для воспроизведения звуков взмаха лезвия, сочных всплесков и победных фанфар. Доступ к микрофону, запись или прослушивание аудио не выполняются.</li>
<li><strong>ЛОКАЛЬНЫЕ УВЕДОМЛЕНИЯ:</strong> Используются исключительно на устройстве для напоминаний о ежедневном колесе наград и испытаниях. Игра не использует удаленные push-сервисы, токены отслеживания или облачные серверы.</li>
</ul>
<h2>4. Сторонние сервисы и сетевая активность</h2>
<p>Приложение не содержит удаленных баз данных пользователей, серверов аналитики, рекламных трекеров или телеметрии. Игра полностью работоспособна без подключения к интернету. При вызове внешних системных функций — например, отправке рекорда друзьям через меню «Поделиться», открытии политики конфиденциальности во встроенном браузере или обращении в службу поддержки по электронной почте — используются стандартные диалоги операционной системы, подчиняющиеся их собственным политикам.</p>
<h2>5. Конфиденциальность детей (соответствие COPPA)</h2>
<p>Fruit Blade: Bogatyr Slicer не содержит неприемлемого контента, сцен насилия, скрытого профилирования или таргетированной рекламы. Игра полностью соответствует Закону о защите конфиденциальности детей в Интернете (COPPA), регламенту GDPR и международным стандартам безопасности.</p>
<h2>6. Обновления политики и контактная информация</h2>
<p>Мы оставляем за собой право обновлять настоящую политику по мере добавления новых уровней, клинков или возможностей. По всем вопросам обращайтесь по адресу:</p>
<p>
<strong>Разработчик:</strong> Mohan MRKS<br/>
<strong>Электронная почта:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Веб-сайт:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Соглашение и правила использования</h2>
<p>Настоящие Условия использования применяются к мобильному приложению <strong>Fruit Blade: Bogatyr Slicer</strong> («Приложение», «Игра»), разработанному <strong>Mohan MRKS</strong> («Разработчик»). Устанавливая, открывая или используя Fruit Blade: Bogatyr Slicer, вы соглашаетесь соблюдать применимое законодательство и настоящие условия. Если вы не согласны с условиями, прекратите использование игры. Игра предназначена исключительно для личного некоммерческого развлечения.</p>
<h2>2. Игровой процесс, механика разрезания и безопасность</h2>
<p>Fruit Blade: Bogatyr Slicer представляет собой аркадный симулятор разрезания фруктов с виртуальными богатырскими клинками. Все игровые движения, удары и анимации являются вымышленными элементами развлекательной механики для сенсорного экрана. Они не являются инструкцией или обучением по обращению с настоящим холодным оружием, ножами или режущими предметами. Всегда соблюдайте правила безопасности в реальном окружении.</p>
<h2>3. Игровой прогресс, валюта и локальное хранилище</h2>
<p>Все игровые данные — прохождение 100 уровней, открытые клинки, заработанные рубли (₽), рекорды очков и настройки — сохраняются локально на вашем устройстве. Внутриигровая валюта и предметы не имеют реальной денежной стоимости за пределами игры. Вы несете ответственность за сохранность данных устройства; очистка данных приложения или его удаление может безвозвратно стереть локальный прогресс.</p>
<h2>4. Функции устройства и внешние приложения</h2>
<p>Звуки, вибрация и локальные напоминания используют стандартные функции вашей операционной системы. При передаче рекордов друзьям или обращении в службу поддержки запускаются внешние приложения, подчиняющиеся их собственным правилам и условиям.</p>
<h2>5. Ограничение ответственности</h2>
<p>Fruit Blade: Bogatyr Slicer предоставляется по принципу «как есть» и «по мере доступности». В пределах, разрешенных законодательством, Разработчик не несет ответственности за косвенные убытки, включая потерю локально сохраненного игрового прогресса.</p>
<h2>6. Изменения и контактная информация</h2>
<p>Настоящие условия могут периодически обновляться. По всем вопросам обращайтесь по адресу:</p>
<p>
<strong>Разработчик:</strong> Mohan MRKS<br/>
<strong>Электронная почта:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Веб-сайт:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },
  de: {
    titlePP: "Datenschutzerklärung",
    titleToS: "Nutzungsbedingungen",
    pp: `<h2>1. Privacy-First-Architektur</h2>
<p>Diese Datenschutzerklärung gilt für die mobile Anwendung <strong>Fruit Blade: Bogatyr Slicer</strong> („Anwendung“, „Spiel“, „Dienst“), entwickelt von <strong>Mohan MRKS</strong> („Entwickler“). Fruit Blade: Bogatyr Slicer basiert auf einer strikten „Privacy First“- und Offline-First-Philosophie. Ihre persönlichen Daten, Highscores, Klingen-Erfolge und Spielerfahrungen gehören ausschließlich Ihnen.</p>
<h2>2. Datenverarbeitung &amp; Lokale Speicherung</h2>
<p>Fruit Blade: Bogatyr Slicer wird vollständig lokal auf Ihrem Gerät als eigenständiges Arcade-Spiel ausgeführt. Wir erfassen, übertragen, überwachen oder verkaufen keinerlei personenbezogene Daten (PII). Der gesamte Spielfortschritt – einschließlich aller 100 Level, der Fruchtenzyklopädie mit 50 realistischen Früchten, Highscores, gesammelten Rubeln (₽), freigeschalteten Klingen, Soundpaket-Einstellungen und Statistiken – wird zu 100 % lokal auf Ihrem Gerät im sicheren Speicher (SharedPreferences) abgelegt.</p>
<h2>3. Geräteberechtigungen &amp; Hardwarefunktionen</h2>
<p>Fruit Blade: Bogatyr Slicer benötigt und verwendet ausschließlich die minimalen Gerätefunktionen für ein reibungsloses Gameplay:</p>
<ul>
<li><strong>HAPTISCHES FEEDBACK / VIBRATION:</strong> Wird rein lokal verwendet, um taktile Rückmeldungen beim Zerteilen von Früchten, Klingenstreichen, Bombenentschärfungen und Combos bereitzustellen. Greift nicht auf persönliche Daten zu.</li>
<li><strong>AUDIO &amp; SOUNDWIEDERGABE:</strong> Wird rein lokal genutzt, um Soundeffekte beim Schneiden, Saftspritzer und Siegesfanfaren abzuspielen. Es findet keinerlei Mikrofonzugriff oder Audioaufzeichnung statt.</li>
<li><strong>LOKALE BENACHRICHTIGUNGEN:</strong> Werden ausschließlich auf dem Gerät für optionale tägliche Erinnerungen an das Glücksrad und Herausforderungen geplant. Kein entfernter Push-Dienst oder Cloud-Server wird verwendet.</li>
</ul>
<h2>4. Drittanbieter-Dienste &amp; Netzwerkaktivität</h2>
<p>Die Anwendung unterhält keine Benutzerdatenbanken, Analysedienste, Werbetracker oder Telemetrie. Das Spiel funktioniert vollständig ohne Internetverbindung. Wenn Sie externe Aktionen starten (z. B. Teilen von Highscores, Aufrufen der Datenschutzerklärung im Browser oder Kontaktaufnahme per E-Mail), interagieren Sie mit standardmäßigen Systemdialogen unter deren jeweiligen Bestimmungen.</p>
<h2>5. Schutz der Privatsphäre von Kindern (COPPA-Konformität)</h2>
<p>Fruit Blade: Bogatyr Slicer enthält keine jugendgefährdenden Inhalte, Gewaltszenen oder Verhaltens-Tracking. Es entspricht vollständig dem Children's Online Privacy Protection Act (COPPA), der DSGVO und internationalen Datenschutzstandards.</p>
<h2>6. Aktualisierungen &amp; Kontakt</h2>
<p>Wir behalten uns das Recht vor, diese Erklärung anzupassen. Bei Fragen kontaktieren Sie uns bitte unter:</p>
<p>
<strong>Entwickler:</strong> Mohan MRKS<br/>
<strong>E-Mail:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Website:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Zustimmung und Zulässige Nutzung</h2>
<p>Diese Nutzungsbedingungen gelten für das Handyspiel <strong>Fruit Blade: Bogatyr Slicer</strong>, entwickelt von <strong>Mohan MRKS</strong>. Mit der Installation oder Nutzung stimmen Sie diesen Bedingungen zu. Das Spiel dient ausschließlich Ihrer persönlichen Unterhaltung.</p>
<h2>2. Gameplay und Sicherheit</h2>
<p>Fruit Blade: Bogatyr Slicer ist ein Arcade-Wischspiel mit simulierten Klingen und Früchten. Sämtliche Aktionen sind rein virtuelle Unterhaltung für Touchscreens und stellen keine Handlungsanleitung für echte Klingen oder Schnittwerkzeuge dar.</p>
<h2>3. Spielfortschritt und Speicher</h2>
<p>Sämtliche Level-Fortschritte, freigeschaltete Klingen und Rubel (₽) verbleiben auf Ihrem Gerät und besitzen keinen realen Geldwert. Das Löschen von App-Daten kann den Fortschritt dauerhaft entfernen.</p>
<h2>4. Externe Apps und Haftung</h2>
<p>Soweit gesetzlich zulässig, wird das Spiel ohne Mängelgewähr bereitgestellt. Der Entwickler haftet nicht für indirekte Schäden oder Verlust lokaler Daten.</p>
<h2>5. Kontakt</h2>
<p>Fragen richten Sie bitte an: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  fr: {
    titlePP: "Politique de Confidentialité",
    titleToS: "Conditions d’Utilisation",
    pp: `<h2>1. Architecture Axée sur la Confidentialité</h2>
<p>Cette Politique de Confidentialité s'applique au jeu mobile <strong>Fruit Blade: Bogatyr Slicer</strong> (« Application », « Jeu », « Service »), développé par <strong>Mohan MRKS</strong> (« Développeur »). Fruit Blade: Bogatyr Slicer est conçu selon une stricte philosophie de confidentialité totale et de fonctionnement hors ligne. Vos données personnelles, scores et succès de découpe vous appartiennent exclusivement.</p>
<h2>2. Traitement des Données et Stockage Local</h2>
<p>Fruit Blade: Bogatyr Slicer fonctionne intégralement hors ligne sur votre appareil. Nous ne collectons, ne transmettons, ne pistons et ne vendons aucune donnée personnelle identifiable (PII). Toute la progression du jeu — comprenant les 100 niveaux, l'encyclopédie de 50 fruits réalistes, les scores, les Roubles (₽) collectés, les lames débloquées, les packs sonores et les statistiques — est stockée à 100 % localement sur votre appareil (SharedPreferences).</p>
<h2>3. Autorisations et Fonctionnalités Matérielles</h2>
<p>Fruit Blade: Bogatyr Slicer utilise uniquement les fonctions matérielles minimales nécessaires au jeu :</p>
<ul>
<li><strong>RETOUR HAPTIQUE / VIBRATION :</strong> Utilisé localement pour fournir une vibration tactile nette lors des tranches de lame, découpes de fruits, désamorçages de bombes et combos. N'accède à aucune donnée personnelle.</li>
<li><strong>LECTURE AUDIO ET SONS :</strong> Utilisé localement pour jouer les sons de lame, éclaboussures juteuses et fanfares de victoire. Aucun enregistrement de microphone n'est effectué.</li>
<li><strong>NOTIFICATIONS LOCALES :</strong> Utilisées sur l'appareil uniquement pour planifier des rappels optionnels pour la roue quotidienne. Aucun serveur distant ou push externe n'est utilisé.</li>
</ul>
<h2>4. Services Tiers et Activité Réseau</h2>
<p>L'Application n'héberge aucune base de données distante, serveur d'analyse ou traceur publicitaire. Le jeu fonctionne sans connexion internet. Lorsque vous partagez un score ou contactez l'assistance, vous utilisez les applications tierces de votre appareil selon leurs propres conditions.</p>
<h2>5. Confidentialité des Enfants (Conformité COPPA)</h2>
<p>Fruit Blade: Bogatyr Slicer ne contient aucun contenu violent, profilage comportemental ou publicité ciblée, respectant pleinement la loi COPPA et le RGPD.</p>
<h2>6. Mises à Jour et Contact</h2>
<p>Pour toute question sur la politique de confidentialité, contactez-nous :</p>
<p>
<strong>Développeur :</strong> Mohan MRKS<br/>
<strong>E-mail :</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Site Web :</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Accord et Utilisation Autorisée</h2>
<p>Ces conditions s'appliquent au jeu mobile <strong>Fruit Blade: Bogatyr Slicer</strong>, développé par <strong>Mohan MRKS</strong>. En installant ou en jouant, vous acceptez ces conditions d'utilisation destinées au divertissement personnel.</p>
<h2>2. Mécanique de Jeu et Sécurité</h2>
<p>Fruit Blade: Bogatyr Slicer est un jeu d'arcade tactile. Les lames et découpes sont virtuelles et ne constituent aucune formation au maniement d'armes ou de lames réelles.</p>
<h2>3. Progression et Stockage</h2>
<p>Tous les scores, 100 niveaux, lames et Roubles (₽) sont conservés sur votre appareil. L'effacement des données peut réinitialiser le jeu.</p>
<h2>4. Contact</h2>
<p>Pour toute question : <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  es: {
    titlePP: "Política de Privacidad",
    titleToS: "Términos del Servicio",
    pp: `<h2>1. Arquitectura de Privacidad Absoluta</h2>
<p>Esta Política de Privacidad se aplica a la aplicación móvil <strong>Fruit Blade: Bogatyr Slicer</strong> («Aplicación», «Juego», «Servicio»), desarrollada por <strong>Mohan MRKS</strong> («Desarrollador»). Fruit Blade: Bogatyr Slicer está diseñado con una filosofía estricta de privacidad y funcionamiento sin conexión. Sus datos personales, puntuaciones y progreso le pertenecen exclusivamente a usted.</p>
<h2>2. Tratamiento de Datos y Almacenamiento Local</h2>
<p>Fruit Blade: Bogatyr Slicer funciona 100% de manera local y sin conexión en su dispositivo. No recopilamos, transmitimos, rastreamos ni vendemos información de identificación personal (PII). Todo el progreso —incluidos los 100 niveles, la enciclopedia de 50 frutas realistas, puntuaciones máximas, Rublos (₽) ganados, hojas de espadas desbloqueadas y estadísticas— se almacena localmente en el dispositivo (SharedPreferences).</p>
<h2>3. Permisos del Dispositivo y Funciones</h2>
<p>Fruit Blade: Bogatyr Slicer solo utiliza las capacidades mínimas necesarias para brindar una experiencia de juego óptima:</p>
<ul>
<li><strong>RESPUESTA HÁPTICA / VIBRACIÓN:</strong> Se utiliza únicamente de forma local para proporcionar retroalimentación táctil al cortar frutas, chocar espadas o realizar combos. No accede a datos privados.</li>
<li><strong>REPRODUCCIÓN DE AUDIO:</strong> Se utiliza localmente para reproducir efectos de corte, salpicaduras y fanfarrias. No se realiza ninguna grabación de audio ni uso de micrófono.</li>
<li><strong>NOTIFICACIONES LOCALES:</strong> Programadas únicamente en el dispositivo para recordatorios diarios de la ruleta de recompensas. No se usan servidores en la nube ni notificaciones push remotas.</li>
</ul>
<h2>4. Servicios de Terceros y Red</h2>
<p>La Aplicación no cuenta con servidores de rastreo, analítica ni SDKs de publicidad. Funciona sin internet. Al compartir su récord o contactar con soporte por correo, se utilizan los cuadros de diálogo estándar de su sistema operativo.</p>
<h2>5. Privacidad de Menores (Cumplimiento COPPA)</h2>
<p>Fruit Blade: Bogatyr Slicer no contiene violencia explícita, perfilado de comportamiento ni recopilación de datos, cumpliendo estrictamente con COPPA, RGPD y normativas internacionales de protección infantil.</p>
<h2>6. Contacto y Actualizaciones</h2>
<p>Para consultas sobre privacidad, comuníquese con:</p>
<p>
<strong>Desarrollador:</strong> Mohan MRKS<br/>
<strong>Correo de soporte:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Sitio web:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Aceptación y Uso Permitido</h2>
<p>Estos Términos del Servicio se aplican a <strong>Fruit Blade: Bogatyr Slicer</strong>, desarrollado por <strong>Mohan MRKS</strong>. Al instalar o jugar, acepta cumplir estos términos para uso recreativo personal.</p>
<h2>2. Jugabilidad y Seguridad</h2>
<p>Fruit Blade: Bogatyr Slicer es un juego de acción arcade con cortes virtuales. No representa instrucción ni incentivo para la manipulación de cuchillas o armas en el mundo real.</p>
<h2>3. Progreso y Almacenamiento</h2>
<p>El progreso a través de los 100 niveles, cuchillas y Rublos (₽) se almacena localmente en su dispositivo y no tiene valor monetario externo.</p>
<h2>4. Contacto</h2>
<p>Contacto de soporte: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  pt: {
    titlePP: "Política de Privacidade",
    titleToS: "Termos de Serviço",
    pp: `<h2>1. Arquitetura de Privacidade Absoluta</h2>
<p>Esta Política de Privacidade aplica-se ao jogo móvel <strong>Fruit Blade: Bogatyr Slicer</strong> («Aplicativo», «Jogo», «Serviço»), desenvolvido por <strong>Mohan MRKS</strong> («Desenvolvedor»). Fruit Blade: Bogatyr Slicer é construído com foco em privacidade total e funcionamento offline. Seus dados, recordes e conquistas pertencem exclusivamente a você.</p>
<h2>2. Armazenamento Local e Dados</h2>
<p>Fruit Blade: Bogatyr Slicer funciona totalmente offline no seu dispositivo. Não coletamos, transmitimos, rastreamos nem vendemos informações de identificação pessoal (PII). Todo o progresso — incluindo os 100 níveis, enciclopédia de 50 frutas, recordes, Rublos (₽), lâminas desbloqueadas e estatísticas — fica armazenado 100% localmente no dispositivo (SharedPreferences).</p>
<h2>3. Permissões e Recursos do Aparelho</h2>
<p>Fruit Blade: Bogatyr Slicer utiliza apenas os recursos essenciais do dispositivo:</p>
<ul>
<li><strong>FEEDBACK TÁTIL / VIBRAÇÃO:</strong> Utilizado de forma estritamente local para fornecer vibração tátil ao cortar frutas, desarmar bombas e encadear combos. Não acessa dados pessoais.</li>
<li><strong>ÁUDIO E EFEITOS SONOROS:</strong> Utilizado localmente para sons de lâmina, respingos de suco e fanfarras de vitória. Nenhum microfone ou gravação de voz é utilizado.</li>
<li><strong>NOTIFICAÇÕES LOCAIS:</strong> Agendadas apenas no próprio dispositivo para lembretes diários opcionais da roleta da sorte. Nenhum serviço de push remoto ou servidor em nuvem é utilizado.</li>
</ul>
<h2>4. Redes e Serviços Externos</h2>
<p>O Aplicativo não possui servidores de rastreamento, análise de dados ou redes de anúncios. Funciona sem conexão com a internet. Ao compartilhar recordes ou entrar em contato com o suporte, as ferramentas padrão do sistema são utilizadas.</p>
<h2>5. Privacidade Infantil (Conformidade COPPA)</h2>
<p>Fruit Blade: Bogatyr Slicer não possui conteúdo inadequado, violência ou coleta de dados, atendendo integralmente ao COPPA e à LGPD/GDPR.</p>
<h2>6. Contato</h2>
<p>Para dúvidas, envie um e-mail para: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
    tos: `<h2>1. Acordo e Uso Autorizado</h2>
<p>Estes Termos de Serviço aplicam-se ao jogo <strong>Fruit Blade: Bogatyr Slicer</strong>, desenvolvido por <strong>Mohan MRKS</strong>. Ao instalar ou jogar, você concorda com estes termos de entretenimento pessoal.</p>
<h2>2. Mecânica e Segurança</h2>
<p>O jogo é um simulador de ação arcade com cortes de frutas em telas sensíveis ao toque. Não constitui treinamento ou instrução para manuseio de lâminas ou facas reais.</p>
<h2>3. Progresso Local e Rublos</h2>
<p>O progresso de 100 níveis, lâminas e Rublos (₽) é armazenado no próprio aparelho e não possui valor monetário real. Limpar os dados do app pode redefinir o jogo.</p>
<h2>4. Contato</h2>
<p>Suporte: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  it: {
    titlePP: "Informativa sulla Privacy",
    titleToS: "Termini di Servizio",
    pp: `<h2>1. Architettura con Priorità alla Privacy</h2>
<p>La presente Informativa sulla Privacy si applica al gioco mobile <strong>Fruit Blade: Bogatyr Slicer</strong>, sviluppato da <strong>Mohan MRKS</strong>. Fruit Blade è realizzato con una rigorosa filosofia incentrata sulla privacy e sul funzionamento offline. I tuoi dati personali, punteggi e progressi appartengono unicamente a te.</p>
<h2>2. Gestione dei Dati e Memoria Locale</h2>
<p>Il gioco funziona al 100% in locale offline. Non raccogliamo, trasmettiamo, tracciamo né vendiamo alcuna informazione personale identificabile. Tutti i progressi dei 100 livelli, l'enciclopedia di 50 frutti, i Rubli (₽) raccolti e le lame sbloccate sono salvati nella memoria locale del dispositivo.</p>
<h2>3. Autorizzazioni del Dispositivo</h2>
<p>Vibrazione, audio ed eventuali notifiche locali sono gestiti unicamente sul dispositivo per offrire la migliore esperienza di gioco senza accedere a dati personali o usare il microfono.</p>
<h2>4. Contatti</h2>
<p>Per domande: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
    tos: `<h2>1. Accordo e Utilizzo Consentito</h2>
<p>Questi termini si applicano al gioco <strong>Fruit Blade: Bogatyr Slicer</strong>, sviluppato da Mohan MRKS, creato per intrattenimento personale su touchscreen.</p>
<h2>2. Meccaniche di Gioco e Sicurezza</h2>
<p>Il gioco simula il taglio di frutta su display e non costituisce istruzione all'uso di vere lame o coltelli.</p>
<h2>3. Contatti</h2>
<p>Supporto: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  tr: {
    titlePP: "Gizlilik Politikası",
    titleToS: "Kullanım Koşulları",
    pp: `<h2>1. Gizlilik Öncelikli Mimari</h2>
<p>Bu Gizlilik Politikası, <strong>Mohan MRKS</strong> tarafından geliştirilen <strong>Fruit Blade: Bogatyr Slicer</strong> mobil oyunu («Uygulama», «Oyun», «Hizmet») için geçerlidir. Oyun, tam gizlilik ve çevrimdışı çalışma prensibiyle tasarlanmıştır. Kişisel verileriniz, yüksek puanlarınız ve başarılarınız yalnızca size aittir.</p>
<h2>2. Veri Yönetimi ve Yerel Depolama</h2>
<p>Fruit Blade: Bogatyr Slicer cihazınızda tamamen yerel ve çevrimdışı olarak çalışır. Hiçbir kişisel veriyi (PII) toplamıyor, iletmiyor, izlemiyor veya satmıyoruz. 100 seviye ilerlemesi, 50 meyvelik ansiklopedi, yüksek skorlar, kazanılan Rubleler (₽), kılıç koleksiyonu ve istatistikler cihazınızda %100 yerel olarak saklanır (SharedPreferences).</p>
<h2>3. Cihaz İzinleri ve Özellikler</h2>
<p>Oyun yalnızca akıcı bir deneyim için gerekli olan minimum cihaz işlevlerini kullanır:</p>
<ul>
<li><strong>DOKUNMATİK TİTREŞİM / HAPTİK:</strong> Dilimleme, kılıç darbeleri ve kombolar sırasında dokunsal geri bildirim sağlamak amacıyla tamamen yerel kullanılır. Kişisel verilere erişmez.</li>
<li><strong>SES ÇALMA:</strong> Dilimleme efektleri, meyve suları ve zafer sesleri için yerel olarak kullanılır. Mikrofon erişimi veya ses kaydı kesinlikle yapılmaz.</li>
<li><strong>YEREL BİLDİRİMLER:</strong> İsteğe bağlı günlük çark hatırlatıcıları için yalnızca cihaz üzerinde planlanır. Uzak bildirim sunucusu kullanılmaz.</li>
</ul>
<h2>4. Üçüncü Taraf Hizmetleri ve İletişim</h2>
<p>Uygulamada harici analiz sunucuları veya reklam izleyicileri bulunmaz. İnternetsiz çalışır. İletişim için: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
    tos: `<h2>1. Koşullar ve İzin Verilen Kullanım</h2>
<p>Bu koşullar <strong>Fruit Blade: Bogatyr Slicer</strong> oyunu için geçerlidir. Oyunu kurarak veya oynayarak bu şartları kabul etmiş sayılırsınız.</p>
<h2>2. Oynanış ve Güvenlik</h2>
<p>Oyun sanal bir dokunmatik ekran meyve dilimleme oyunudur; gerçek kesici alet veya kılıç kullanımı için bir talimat teşkil etmez.</p>
<h2>3. İlerleme ve Depolama</h2>
<p>100 seviyedeki tüm ilerlemeler ve Rubleler (₽) yerel olarak cihazınızda tutulur ve gerçek para değeri taşımaz.</p>
<h2>4. İletişim</h2>
<p>E-posta: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  vi: {
    titlePP: "Chính Sách Bảo Mật",
    titleToS: "Điều Khoản Dịch Vụ",
    pp: `<h2>1. Kiến Trúc Ưu Tiên Quyền Riêng Tư</h2>
<p>Chính sách bảo mật này áp dụng cho trò chơi di động <strong>Fruit Blade: Bogatyr Slicer</strong> («Ứng dụng», «Trò chơi»), do <strong>Mohan MRKS</strong> phát triển. Trò chơi tuân thủ nguyên tắc quyền riêng tư hàng đầu và hoạt động hoàn toàn ngoại tuyến. Dữ liệu cá nhân, điểm số và thành tích của bạn chỉ thuộc về bạn.</p>
<h2>2. Xử Lý Dữ Liệu &amp; Lưu Trữ Cục Bộ</h2>
<p>Fruit Blade: Bogatyr Slicer hoạt động cục bộ trên thiết bị của bạn. Chúng tôi không thu thập, truyền tải, theo dõi hoặc bán bất kỳ thông tin nhận dạng cá nhân nào (PII). Toàn bộ tiến trình trò chơi — bao gồm 100 màn chơi, bách khoa toàn thư 50 loại trái cây, điểm cao, Rúp (₽) tích lũy, các thanh kiếm đã mở khóa và cài đặt — được lưu trữ 100% cục bộ trên thiết bị của bạn (SharedPreferences).</p>
<h2>3. Quyền Thiết Bị &amp; Tính Năng</h2>
<p>Trò chơi chỉ sử dụng các tính năng phần cứng tối thiểu cần thiết:</p>
<ul>
<li><strong>RUNG / PHẢN HỒI XÚC GIÁC:</strong> Sử dụng hoàn toàn cục bộ để mang lại cảm giác chân thực khi chém hoa quả và chuỗi combo. Không truy cập dữ liệu cá nhân.</li>
<li><strong>ÂM THANH:</strong> Phát hiệu ứng vung kiếm, hoa quả nổ tung và nhạc chiến thắng cục bộ. Không sử dụng micro hay ghi âm.</li>
<li><strong>THÔNG BÁO CỤC BỘ:</strong> Được lên lịch trực tiếp trên thiết bị cho vòng quay may mắn hàng ngày. Không sử dụng máy chủ đám mây hay push từ xa.</li>
</ul>
<h2>4. Dịch Vụ Bên Thứ Ba &amp; Liên Hệ</h2>
<p>Ứng dụng không có SDK quảng cáo hay theo dõi người dùng. Hoạt động không cần internet. Liên hệ: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
    tos: `<h2>1. Thỏa Thuận &amp; Sử Dụng Được Phép</h2>
<p>Các điều khoản này áp dụng cho <strong>Fruit Blade: Bogatyr Slicer</strong> do <strong>Mohan MRKS</strong> phát triển. Bằng việc cài đặt hoặc chơi, bạn đồng ý với các điều khoản giải trí cá nhân này.</p>
<h2>2. Lối Chơi &amp; An Toàn</h2>
<p>Đây là trò chơi chém hoa quả mô phỏng trên màn hình cảm ứng, không phải là hướng dẫn sử dụng dao kiếm thật ngoài đời thực.</p>
<h2>3. Tiến Trình Trò Chơi</h2>
<p>Tiến trình 100 màn chơi, kiếm và Rúp (₽) được lưu trên thiết bị của bạn và không có giá trị quy đổi tiền thật bên ngoài.</p>
<h2>4. Liên Hệ</h2>
<p>Email: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  id: {
    titlePP: "Kebijakan Privasi",
    titleToS: "Ketentuan Layanan",
    pp: `<h2>1. Arsitektur Mengutamakan Privasi</h2>
<p>Kebijakan Privasi ini berlaku untuk game seluler <strong>Fruit Blade: Bogatyr Slicer</strong> («Aplikasi», «Game»), yang dikembangkan oleh <strong>Mohan MRKS</strong> («Pengembang»). Fruit Blade dibangun dengan filosofi privasi total dan beroperasi offline secara mandiri. Data pribadi, skor tinggi, dan progres bermain Anda sepenuhnya milik Anda.</p>
<h2>2. Penanganan Data &amp; Penyimpanan Lokal</h2>
<p>Fruit Blade: Bogatyr Slicer beroperasi sepenuhnya di perangkat Anda tanpa koneksi internet. Kami tidak mengumpulkan, mengirimkan, melacak, atau menjual informasi identitas pribadi (PII) apa pun. Seluruh progres — termasuk 100 level, ensiklopedia 50 buah, skor tinggi, Rubel (₽) yang dikumpulkan, pedang yang terbuka, dan pengaturan suara — disimpan 100% secara lokal di perangkat Anda (SharedPreferences).</p>
<h2>3. Izin Perangkat &amp; Fitur</h2>
<p>Oyun hanya menggunakan fitur minimal yang dibutuhkan untuk permainan:</p>
<ul>
<li><strong>GETARAN / HAPTIK:</strong> Digunakan secara lokal untuk memberikan umpan balik taktil saat memotong buah dan membuat kombo. Tidak mengakses data pribadi.</li>
<li><strong>AUDIO &amp; SUARA:</strong> Digunakan secara lokal untuk efek tebasan pedang, cipratan buah, dan musik kemenangan. Tidak menggunakan mikrofon atau merekam suara.</li>
<li><strong>PEMBERITAHUAN LOKAL:</strong> Dijadwalkan hanya di perangkat untuk pengingat roda putar harian opsional. Tanpa server push jarak jauh.</li>
</ul>
<h2>4. Layanan Pihak Ketiga &amp; Kontak</h2>
<p>Game ini tidak memiliki SDK analitik atau pelacak iklan pihak ketiga. Beroperasi penuh secara offline. Pertanyaan: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
    tos: `<h2>1. Perjanjian dan Penggunaan yang Diizinkan</h2>
<p>Ketentuan ini berlaku untuk game <strong>Fruit Blade: Bogatyr Slicer</strong> oleh Mohan MRKS. Dengan memasang atau memainkannya, Anda menyetujui ketentuan hiburan santai ini.</p>
<h2>2. Mekanisme Game dan Keamanan</h2>
<p>Game ini adalah simulasi membelah buah di layar sentuh untuk hiburan semata dan bukan instruksi penggunaan senjata tajam nyata.</p>
<h2>3. Progres Game &amp; Rubel</h2>
<p>Progres 100 level dan Rubel (₽) disimpan di perangkat Anda dan tidak memiliki nilai tunai nyata di luar permainan.</p>
<h2>4. Kontak</h2>
<p>Email: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  zh: {
    titlePP: "隐私政策",
    titleToS: "服务条款",
    pp: `<h2>1. 隐私优先架构</h2>
<p>本隐私政策适用于由 <strong>Mohan MRKS</strong>（“开发者”）开发的 <strong>Fruit Blade: Bogatyr Slicer</strong>（《水果之刃：勇士切水果》）移动端游戏应用（“应用”、“游戏”、“服务”）。本游戏基于严苛的“隐私第一”和完全离线运行理念构建。我们坚信您的个人数据、最高得分和切割成就完全属于您自己。</p>
<h2>2. 数据处理与本地存储</h2>
<p>Fruit Blade: Bogatyr Slicer 完全在您的客户端设备本地作为离线街机游戏运行。我们不收集、不上传、不追踪、也不出售任何个人身份信息（PII）。所有游戏进度——包括全部100个关卡的挑战、50种逼真水果图鉴、历史最高分、累积的卢布（₽）、兵器库刀刃解锁记录、音效配置与连击统计——均100%保存在您的设备本地安全存储中（SharedPreferences）。</p>
<h2>3. 设备权限与硬件功能</h2>
<p>游戏仅使用提供流畅体验所必需的最低硬件功能：</p>
<ul>
<li><strong>触觉反馈 / 震动：</strong> 纯本地触发，用于在刀刃切割水果、触发连击与解除炸弹时提供清脆的触觉震动反馈。绝不读取或传输任何用户隐私数据。</li>
<li><strong>音频播放：</strong> 纯本地解码播放刀光挥舞、果汁四溅与胜利欢呼声效。绝不请求麦克风权限或进行任何音频监听录制。</li>
<li><strong>本地通知：</strong> 仅在设备本地设定，用于每日转盘与挑战的可选温和提醒。绝不使用远程推送服务、设备追踪令牌或云端服务器。</li>
</ul>
<h2>4. 第三方服务与网络连接</h2>
<p>本应用不包含任何远程用户数据库、数据分析SDK或广告追踪程序。游戏在完全离线状态下即可体验全部内容。当您主动选择分享高分或发送支持邮件时，仅调用操作系统标准系统组件。</p>
<h2>5. 儿童隐私保护（符合 COPPA）</h2>
<p>游戏不含任何暴力、血腥或不良内容，不进行用户画像与个性化追踪，完全符合《儿童在线隐私保护法》（COPPA）及国际隐私安全法规。</p>
<h2>6. 政策更新与联系方式</h2>
<p>如有关于隐私政策的任何问题或建议，请联系：</p>
<p>
<strong>开发者：</strong> Mohan MRKS<br/>
<strong>支持邮箱：</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>官方网站：</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. 协议与许可使用</h2>
<p>本服务条款适用于 <strong>Fruit Blade: Bogatyr Slicer</strong> 游戏。安装或运行游戏即代表您同意本条款，仅供个人非商业休闲娱乐使用。</p>
<h2>2. 游戏机制与安全须知</h2>
<p>本作为触屏滑动切割水果的虚拟街机游戏，所有刀光剑影均为虚拟娱乐表现，绝不构成现实中冷兵器或刀具操作的示范或指导。</p>
<h2>3. 游戏数据与虚拟货币</h2>
<p>100个关卡进度、已解锁刀刃与游戏卢布（₽）均保存在您的本地设备上，不具备游戏外的任何真实货币价值。清除应用缓存可能会重置游戏存档。</p>
<h2>4. 联系我们</h2>
<p>邮箱：<a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>。</p>`
  },
  ja: {
    titlePP: "プライバシーポリシー",
    titleToS: "利用規約",
    pp: `<h2>1. プライバシー最優先の設計</h2>
<p>本プライバシーポリシーは、<strong>Mohan MRKS</strong>（「開発者」）が開発したモバイルゲーム<strong>Fruit Blade: Bogatyr Slicer</strong>（「本アプリ」、「本ゲーム」）に適用されます。本ゲームは徹底した「プライバシー第一」および完全オフライン動作の理念に基づいて設計されています。お客様の個人データ、スコア、ゲームプレイの成果はお客様自身のものです。</p>
<h2>2. データ処理と端末内ローカル保存</h2>
<p>Fruit Blade: Bogatyr Slicer は、端末内だけで完結するオフラインアーケードゲームです。個人を特定できる情報（PII）の収集、送信、追跡、販売は一切行いません。全100ステージの進行状況、50種類のリアルなフルーツ図鑑、ハイスコア、集めたルーブル（₽）、解放した刀刃、サウンド設定はすべて端末内の安全な領域（SharedPreferences）に100％ローカル保存されます。</p>
<h2>3. デバイスの権限と機能</h2>
<p>本ゲームは快適なプレイに必要な最小限の端末機能のみを使用します：</p>
<ul>
<li><strong>触覚フィードバック / 振動：</strong> フルーツを切断した際やコンボの爽快感を伝えるために端末内でのみ振動を発生させます。個人データへのアクセスは一切ありません。</li>
<li><strong>オーディオ再生：</strong> 刀の斬撃音やフルーツのスプラッシュ音、勝利ファンファーレの再生にローカルで使用します。マイクの利用や録音は一切行いません。</li>
<li><strong>ローカル通知：</strong> 毎日のルーレットなどのリマインダーを端末内でのみスケジュールします。外部プッシュ通知サーバーは使用しません。</li>
</ul>
<h2>4. 外部サービスとネットワーク</h2>
<p>本アプリは外部の分析サーバーや広告トラッカーを一切含みません。完全なオフライン状態でお楽しみいただけます。サポートへのお問い合わせはメールにて承ります：<a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>。</p>`,
    tos: `<h2>1. 同意および利用条件</h2>
<p>本規約は <strong>Fruit Blade: Bogatyr Slicer</strong> に適用されます。ゲームのインストールまたはプレイにより、本規約に同意したものとみなされます。</p>
<h2>2. ゲームプレイと安全性</h2>
<p>本ゲームはタッチスクリーン上でフルーツをスライスする仮想アーケードゲームであり、現実の刃物やナイフの取り扱いを指南するものではありません。</p>
<h2>3. 進行状況とルーブル</h2>
<p>100のステージや刀刃、ゲーム内ルーブル（₽）はすべて端末に保存され、ゲーム外での換金価値はありません。</p>
<h2>4. お問い合わせ</h2>
<p>メール：<a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>。</p>`
  },
  hi: {
    titlePP: "गोपनीयता नीति",
    titleToS: "सेवा की शर्तें",
    pp: `<h2>1. गोपनीयता-प्रथम संरचना</h2>
<p>यह गोपनीयता नीति <strong>Mohan MRKS</strong> («डेवलपर») द्वारा विकसित मोबाइल गेम <strong>Fruit Blade: Bogatyr Slicer</strong> («ऐप», «गेम», «सेवा») पर लागू होती है। यह गेम पूर्ण गोपनीयता और ऑफ़लाइन गेमप्ले के सिद्धांतों पर आधारित है। आपका व्यक्तिगत डेटा, उच्च स्कोर और उपलब्धियां केवल आपकी हैं।</p>
<h2>2. डेटा प्रबंधन और स्थानीय संग्रहण</h2>
<p>Fruit Blade: Bogatyr Slicer पूरी तरह से आपके डिवाइस पर एक ऑफ़लाइन आर्केड गेम के रूप में संचालित होता है। हम किसी भी व्यक्तिगत पहचान योग्य जानकारी (PII) को एकत्र, ट्रैक, साझा या बेचते नहीं हैं। 100 स्तरों की प्रगति, 50 फलों का विश्वकोश, उच्चतम स्कोर, अर्जित रूबल (₽), अनलॉक की गई तलवारें और सेटिंग्स आपके डिवाइस पर 100% स्थानीय रूप से सुरक्षित (SharedPreferences) रहती हैं।</p>
<h2>3. डिवाइस अनुमतियाँ और हार्डवेयर सुविधाएँ</h2>
<p>गेम सुगम गेमप्ले प्रदान करने के लिए केवल न्यूनतम आवश्यक सुविधाओं का उपयोग करता है:</p>
<ul>
<li><strong>हैप्टिक फीडबैक / कंपन:</strong> फलों को काटने और कॉम्बो बनाने पर सटीक कंपन प्रतिक्रिया प्रदान करने के लिए स्थानीय रूप से उपयोग किया जाता है। यह किसी निजी डेटा तक नहीं पहुंचता।</li>
<li><strong>ऑडियो और ध्वनि प्लेबैक:</strong> ब्लेड स्वाइप, फलों के छींटे और जीत के संगीत के लिए स्थानीय रूप से उपयोग किया जाता है। कोई माइक्रोफ़ोन रिकॉर्डिंग नहीं की जाती है।</li>
<li><strong>स्थानीय सूचनाएं (लोकल नोटिफिकेशन्स):</strong> दैनिक पहिया पुरस्कारों की वैकल्पिक याद दिलाने के लिए केवल डिवाइस पर निर्धारित की जाती हैं। कोई बाहरी पुश सर्वर उपयोग नहीं होता।</li>
</ul>
<h2>4. तृतीय-पक्ष सेवाएँ और संपर्क</h2>
<p>इस गेम में कोई ट्रैकर या विज्ञापन SDK शामिल नहीं है। यह बिना इंटरनेट के पूरी तरह काम करता है। सहायता के लिए संपर्क करें: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>।</p>`,
    tos: `<h2>1. सहमति और अनुमत उपयोग</h2>
<p>ये शर्तें <strong>Fruit Blade: Bogatyr Slicer</strong> पर लागू होती हैं। गेम खेलने पर आप इन नियमों का पालन करने के लिए सहमत होते हैं।</p>
<h2>2. गेमप्ले और सुरक्षा</h2>
<p>यह टच स्क्रीन पर फलों को काटने का एक आभासी आर्केड गेम है। यह वास्तविक जीवन में हथियारों या चाकू के उपयोग का कोई प्रशिक्षण नहीं देता है।</p>
<h2>3. गेम प्रगति और मुद्रा</h2>
<p>100 स्तरों की प्रगति और खेल के रूबल (₽) आपके डिवाइस पर संग्रहीत हैं और खेल के बाहर इनका कोई मौद्रिक मूल्य नहीं है।</p>
<h2>4. संपर्क</h2>
<p>ईमेल: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>।</p>`
  },
  mr: {
    titlePP: "गोपनीयता धोरण",
    titleToS: "सेवा अटी",
    pp: `<h2>1. गोपनीयता-प्रथम रचना</h2>
<p>हे गोपनीयता धोरण <strong>Mohan MRKS</strong> द्वारे विकसित केलेल्या <strong>Fruit Blade: Bogatyr Slicer</strong> गेमवर लागू होते. हा गेम पूर्णपणे ऑफलाइन आणि वापरकर्त्याच्या गोपनीयतेचा आदर करण्यासाठी तयार केला आहे. तुमचा वैयक्तिक डेटा, गुण आणि गेममधील प्रगती पूर्णपणे तुमचीच आहे.</p>
<h2>2. डेटा हाताळणी आणि स्थानिक साठवण</h2>
<p>हा गेम तुमच्या डिव्हाइसवर पूर्णपणे स्थानिक पातळीवर चालतो. आम्ही कोणताही वैयक्तिक डेटा (PII) गोळा, ट्रॅक किंवा शेअर करत नाही. १०० पातळ्यांची प्रगती, ५० फळांची माहिती, उच्चांक, कमावलेले रुबल (₽) आणि अनलॉक केलेली पाती डिव्हाइसवर १००% स्थानिक साठवणुकीत (SharedPreferences) सुरक्षित राहतात.</p>
<h2>3. डिव्हाइस परवानग्या</h2>
<p>फळे कापताना व्हायब्रेशन, खेळाचे आवाज आणि स्थानिक स्मरणपत्रे केवळ डिव्हाइसवर स्थानिक पातळीवर वापरली जातात. कोणताही मायक्रोफोन वापरला जात नाही.</p>
<h2>4. संपर्क</h2>
<p>प्रश्न किंवा सहाय्यासाठी संपर्क: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
    tos: `<h2>1. अटी आणि वापर</h2>
<p>या अटी <strong>Fruit Blade: Bogatyr Slicer</strong> गेमवर लागू होतात. गेम वापरून तुम्ही या अटी मान्य करता.</p>
<h2>2. गेमप्ले व सुरक्षितता</h2>
<p>हा गेम टचस्क्रीनवर फळे कापण्याचा आभासी गेम आहे; प्रत्यक्ष आयुष्यात धारदार हत्यारे वापरण्याचे हे कोणतेही प्रशिक्षण नाही.</p>
<h2>3. संपर्क</h2>
<p>ईमेल: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  bn: {
    titlePP: "গোপনীয়তা নীতি",
    titleToS: "ব্যবহারের শর্তাবলী",
    pp: `<h2>১. গোপনীয়তা-প্রথম স্থাপত্য</h2>
<p>এই গোপনীয়তা নীতি <strong>Mohan MRKS</strong> দ্বারা নির্মিত <strong>Fruit Blade: Bogatyr Slicer</strong> মোবাইল গেমের ক্ষেত্রে প্রযোজ্য। গেমটি সম্পূর্ণ গোপনীয়তা এবং অফলাইন ব্যবহারের নীতিতে নির্মিত। আপনার ব্যক্তিগত ডেটা, স্কোর ও অগ্রগতি একান্তই আপনার।</p>
<h2>২. ডেটা পরিচালনা ও লোকাল স্টোরেজ</h2>
<p>গেমটি আপনার ডিভাইসে সম্পূর্ণ অফলাইনে চলে। আমরা কোনো ব্যক্তিগত শনাক্তকরণ তথ্য (PII) সংগ্রহ, ট্র্যাক বা বিক্রি করি না। ১০০টি লেভেলের অগ্রগতি, ৫০টি ফলের এনসাইক্লোপিডিয়া, রুবল (₽) এবং আনলক করা ব্লেড আপনার ডিভাইসেই ১০০% স্থানীয়ভাবে সংরক্ষিত থাকে (SharedPreferences)।</p>
<h2>৩. ডিভাইসের অনুমতি</h2>
<p>ফল কাটার ভাইব্রেশন ও গেমের সাউন্ড সম্পূর্ণ স্থানীয়ভাবে চলে। কোনো মাইক্রোফোন অ্যাক্সেস করা হয় না বা ক্লাউড ট্র্যাকিং নেই।</p>
<h2>৪. যোগাযোগ</h2>
<p>সহায়তার জন্য ইমেইল করুন: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>।</p>`,
    tos: `<h2>১. শর্তাবলী ও ব্যবহার</h2>
<p>এই শর্তাবলী <strong>Fruit Blade: Bogatyr Slicer</strong> গেমের জন্য প্রযোজ্য। গেম খেলার মাধ্যমে আপনি এই শর্তাবলীতে সম্মতি জানান।</p>
<h2>২. গেমপ্লে ও সুরক্ষা</h2>
<p>এটি একটি ভার্চুয়াল টাচস্ক্রিন ফল কাটার গেম; এটি বাস্তব জীবনের ছুরি বা অস্ত্র পরিচালনার কোনো নির্দেশনা নয়।</p>
<h2>৩. যোগাযোগ</h2>
<p>ইমেইল: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>।</p>`
  },
  te: {
    titlePP: "గోప్యతా విధానం",
    titleToS: "సేవా నిబంధనలు",
    pp: `<h2>1. గోప్యతకు మొదటి ప్రాధాన్యత</h2>
<p>ఈ గోప్యతా విధానం <strong>Mohan MRKS</strong> అభివృద్ధి చేసిన <strong>Fruit Blade: Bogatyr Slicer</strong> మొబైల్ గేమ్‌కు వర్తిస్తుంది. ఈ గేమ్ పూర్తి గోప్యత మరియు ఆఫ్‌లైన్ గేమ్‌ప్లే కోసం రూపొందించబడింది. మీ వ్యక్తిగత సమాచారం మరియు స్కోర్‌లు మీ వద్దే సురక్షితంగా ఉంటాయి.</p>
<h2>2. డేటా నిర్వహణ మరియు లోకల్ స్టోరేజ్</h2>
<p>గేమ్ పూర్తిగా మీ పరికరంలో ఆఫ్‌లైన్‌లో నడుస్తుంది. మేము ఎటువంటి వ్యక్తిగత సమాచారాన్ని (PII) సేకరించము, ట్రాక్ చేయము లేదా విక్రయించము. 100 స్థాయిల పురోగతి, 50 పండ్ల వివరాలు, అధిక స్కోర్లు, రూబుల్స్ (₽) మీ పరికరంలోనే 100% లోకల్ స్టోరేజ్‌లో ఉంటాయి.</p>
<h2>3. పరికర అనుమతులు</h2>
<p>పండ్లు కోసేప్పుడు వైబ్రేషన్ మరియు సౌండ్ ఎఫెక్ట్స్ పరికరంలో మాత్రమే ప్లే అవుతాయి. మైక్రోఫోన్ ఉపయోగించబడదు.</p>
<h2>4. సంప్రదించండి</h2>
<p>మద్దతు కోసం సంప్రదించండి: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
    tos: `<h2>1. నిబంధనలు మరియు ఉపయోగం</h2>
<p>ఈ నిబంధనలు <strong>Fruit Blade: Bogatyr Slicer</strong> గేమ్‌కు వర్తిస్తాయి. గేమ్ ఆడటం ద్వారా మీరు వీటిని అంగీకరిస్తున్నారు.</p>
<h2>2. గేమ్ భద్రత</h2>
<p>ఇది వర్చువల్ పండ్లు కోసే గేమ్ మాత్రమే, నిజమైన కత్తుల వాడకానికి సంబంధం లేదు.</p>
<h2>3. సంప్రదించండి</h2>
<p>ఈమెయిల్: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  ta: {
    titlePP: "தனியுரிமைக் கொள்கை",
    titleToS: "சேவை விதிமுறைகள்",
    pp: `<h2>1. தனியுரிமைக்கு முதலிடம்</h2>
<p>இந்த தனியுரிமைக் கொள்கை <strong>Mohan MRKS</strong> உருவாக்கிய <strong>Fruit Blade: Bogatyr Slicer</strong> மொபைல் விளையாட்டுக்கு பொருந்தும். இந்த விளையாட்டு முழுமையான தனியுரிமை மற்றும் ஆஃப்லைன் பயன்பாட்டிற்காக வடிவமைக்கப்பட்டுள்ளது. உங்கள் தனிப்பட்ட தரவுகள் மற்றும் மதிப்பெண்கள் உங்களுக்கே சொந்தமானது.</p>
<h2>2. தரவு கையாளுதல் மற்றும் சேமிப்பு</h2>
<p>Fruit Blade விளையாட்டு உங்கள் சாதனத்தில் ஆஃப்லைனில் இயங்குகிறது. நாங்கள் எந்தவொரு தனிப்பட்ட அடையாளத் தரவையும் (PII) சேகரிப்பதோ, விற்பதோ அல்லது கண்காணிப்பதோ இல்லை. 100 நிலைகளின் முன்னேற்றம், 50 பழங்களின் தொகுப்பு, அதிக மதிப்பெண்கள், ரூபிள்கள் (₽) உங்கள் சாதனத்திலேயே 100% உள்ளூரில் சேமிக்கப்படுகின்றன.</p>
<h2>3. சாதன அனுமதிகள்</h2>
<p>பழங்களை வெட்டும் போது அதிர்வு மற்றும் ஒலி அமைப்புகள் சாதனத்தில் மட்டுமே செயல்படுகின்றன. மைக்ரோஃபோன் எதுவும் பயன்படுத்தப்படுவதில்லை.</p>
<h2>4. தொடர்பு கொள்ள</h2>
<p>கேள்விகளுக்கு தொடர்பு கொள்ளவும்: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
    tos: `<h2>1. விதிமுறைகள் மற்றும் பயன்பாடு</h2>
<p>இந்த விதிமுறைகள் <strong>Fruit Blade: Bogatyr Slicer</strong> விளையாட்டுக்கு பொருந்தும். விளையாட்டைப் பயன்படுத்துவதன் மூலம் இந்த விதிகளை ஏற்கிறீர்கள்.</p>
<h2>2. விளையாட்டு பாதுகாப்பு</h2>
<p>இது தொடுதிரையில் பழங்களை வெட்டும் மெய்நிகர் விளையாட்டு மட்டுமே; நிஜ வாழ்க்கையில் கத்திகளை கையாள்வதற்கான பயிற்சி அல்ல.</p>
<h2>3. தொடர்பு</h2>
<p>மின்னஞ்சல்: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  sw: {
    titlePP: "Sera ya Faragha",
    titleToS: "Masharti ya Huduma",
    pp: `<h2>1. Muundo Unaolinda Faragha</h2>
<p>Sera hii ya Faragha inahusu mchezo wa <strong>Fruit Blade: Bogatyr Slicer</strong> uliotengenezwa na <strong>Mohan MRKS</strong>. Mchezo huu umeundwa kwa misingi ya faragha kamili na kucheza bila mtandao. Data yako binafsi na alama zako ni zako pekee.</p>
<h2>2. Utunzaji wa Data na Hifadhi ya Kifaa</h2>
<p>Mchezo unafanya kazi kikamilifu ndani ya kifaa chako bila mtandao. Hatukusanyi, hatufuatilii, wala hatuuzi taarifa yoyote ya kibinafsi (PII). Maendeleo ya ngazi 100, matunda 50, alama na sarafu za Rubles (₽) zimehifadhiwa 100% kwenye kifaa chako.</p>
<h2>3. Ruhusa za Kifaa</h2>
<p>Mtetemo wakati wa kukata matunda na sauti za mchezo hufanya kazi ndani ya kifaa pekee. Hakuna kinasa sauti au maikrofoni inayotumika.</p>
<h2>4. Mawasiliano</h2>
<p>Mawasiliano: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
    tos: `<h2>1. Makubaliano na Matumizi</h2>
<p>Masharti haya yanahusu mchezo wa <strong>Fruit Blade: Bogatyr Slicer</strong> kwa matumizi ya burudani ya binafsi.</p>
<h2>2. Usalama wa Mchezo</h2>
<p>Huu ni mchezo wa kidijitali wa kukata matunda kwenye skrini ya simu, si mafunzo ya visu au silaha halisi.</p>
<h2>3. Mawasiliano</h2>
<p>Barua pepe: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  },
  ha: {
    titlePP: "Manufar Tsare Sirri",
    titleToS: "Sharuddan Sabis",
    pp: `<h2>1. Tsarin Kare Sirri</h2>
<p>Wannan manufar tsare sirri tana aiki ne ga wasan <strong>Fruit Blade: Bogatyr Slicer</strong> wanda <strong>Mohan MRKS</strong> ya haɓaka. Wasan yana aiki ne ba tare da buƙatar intanet ba tare da kiyaye cikakken sirrinku. Bayanan wasanku na naku ne kawai.</p>
<h2>2. Adana Bayanai a Wayarku</h2>
<p>Wasan yana aiki ne a kan na'urarku kadai. Ba ma tattara ko sayar da bayanan sirri (PII). Dukkan matakai 100, bayanan 'ya'yan itace 50, da maki suna nan a kan wayarku 100%.</p>
<h2>3. Izinin Na'ura</h2>
<p>Girgiza yayin yankan 'ya'yan itace da sautin wasa suna aiki ne a kan na'urarku kawai ba tare da amfani da makirufo ko kyamara ba.</p>
<h2>4. Tuntuɓi</h2>
<p>Imel: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
    tos: `<h2>1. Sharudda da Amfani</h2>
<p>Wadannan sharudda sun shafi wasan <strong>Fruit Blade: Bogatyr Slicer</strong> domin nishadin kashin kai.</p>
<h2>2. Tsaron Wasa</h2>
<p>Wasan yanka 'ya'yan itace ne a kan allo don nishadi, ba koyar da amfani da wukake na gaske ba ne.</p>
<h2>3. Tuntuɓi</h2>
<p>Imel: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`
  }
};

const variantMap = {
  en_us: 'en',
  en_gb: 'en',
  en_au: 'en'
};

for (const lang of languages) {
  const baseLang = variantMap[lang] || lang;
  const dataForLang = localizedData[baseLang] || localizedData['en'];

  const filePath = path.join(legalDir, `${lang}.json`);
  let fileContent = {};
  if (fs.existsSync(filePath)) {
    fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  // Add Fruit Blade privacy policy
  fileContent[`fruit_cutter/privacy_policy/${lang}`] = {
    appId: "fruit_cutter",
    docType: "privacy_policy",
    lang: lang,
    title: dataForLang.titlePP,
    subtitle: "Fruit Blade: Bogatyr Slicer",
    content: dataForLang.pp
  };

  // Add Fruit Blade terms of service
  fileContent[`fruit_cutter/terms_of_service/${lang}`] = {
    appId: "fruit_cutter",
    docType: "terms_of_service",
    lang: lang,
    title: dataForLang.titleToS,
    subtitle: "Fruit Blade: Bogatyr Slicer",
    content: dataForLang.tos
  };

  fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang}.json with Fruit Blade: Bogatyr Slicer legal documents.`);
}

console.log("Successfully generated all Fruit Blade: Bogatyr Slicer legal translations!");
