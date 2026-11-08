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
<p>This Privacy Policy applies to the <strong>DocuPulse</strong> mobile application ("Application", "App", "Service"), developed by <strong>Mohan MRKS</strong> ("Developer"). DocuPulse is engineered with a strict "Privacy First" and on-device execution philosophy. We believe that your personal documents, scans, signatures, and files belong exclusively to you.</p>
<h2>2. Data Handling &amp; Device Permissions</h2>
<p>DocuPulse operates completely locally on your client device as an autonomous offline utility. Details regarding requested permissions:</p>
<ul>
<li><strong>CAMERA:</strong> Used exclusively to capture document pages, receipts, notes, and paper materials directly within the scanner interface. Camera preview frames and captured photos are processed strictly in memory and saved to private app storage on your device. They are never streamed or transmitted to external servers.</li>
<li><strong>READ_EXTERNAL_STORAGE / MANAGE_EXTERNAL_STORAGE:</strong> Granted locally on your device to import images or PDF files for scanning, recognition, and to export completed documents, multi-format archives, or signed files to locations you choose. Your files are never uploaded or synced to external cloud servers.</li>
</ul>
<h2>3. On-Device OCR &amp; Processing Guarantee</h2>
<p>All core computational functions in DocuPulse—including edge detection, perspective transformation, image enhancement filters, optical character recognition (OCR) via on-device machine learning models, digital signature overlays, watermarking, and multi-format document conversion (PDF, JPEG, PNG, ZIP, etc.)—execute 100% locally on your device hardware without network roundtrips.</p>
<h2>4. Network Independence &amp; Zero Tracking</h2>
<p>DocuPulse contains zero advertising SDKs, zero third-party telemetry frameworks, zero tracking pixels, and zero remote analytics. The Application does not maintain user accounts, require registration, or communicate with developer-hosted cloud databases. Any outbound network interactions occur solely when you explicitly invoke system actions, such as sharing an exported document via your operating system share sheet or contacting developer support via email.</p>
<h2>5. Children's Privacy (COPPA Compliance)</h2>
<p>DocuPulse does not collect, solicit, or process personal information from anyone, including children under 13 years of age. The Application is entirely safe and appropriate for users of all ages.</p>
<h2>6. Policy Updates &amp; Contact Information</h2>
<p>We reserve the right to update this policy periodically as DocuPulse introduces new offline features. If you have any questions or feedback regarding our privacy practices, please contact us at:</p>
<p>
<strong>Developer:</strong> Mohan MRKS<br/>
<strong>Support Email:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Website:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Acceptance of Terms</h2>
<p>These Terms of Service ("Terms") govern your access to and use of the <strong>DocuPulse</strong> mobile application ("Application", "Service"), developed by <strong>Mohan MRKS</strong> ("Developer"). By installing, accessing, or using DocuPulse, you agree to be legally bound by these Terms.</p>
<h2>2. Scope of License &amp; Permitted Use</h2>
<p>We grant you a personal, worldwide, non-exclusive, non-transferable, revocable license to install and use DocuPulse on compatible devices you own or control. You may use DocuPulse for personal, academic, or professional document scanning, editing, optical character recognition, digital signing, and file management in compliance with all applicable laws.</p>
<h2>3. Local Content &amp; User Responsibilities</h2>
<p>You retain full ownership and sole legal responsibility for all paper documents, photos, text extracts, PDF files, and cryptographic signatures scanned or processed using DocuPulse. Because DocuPulse operates offline without remote backups, you are solely responsible for backing up your important files and exported records.</p>
<h2>4. OCR &amp; Processing Disclaimers</h2>
<p>Document scanning, perspective correction, image filters, and optical character recognition (OCR) are provided on an "as is" and "as available" basis. While DocuPulse utilizes high-performance algorithms, recognition accuracy depends on lighting conditions, document clarity, camera quality, language fonts, and print resolution. The Developer does not warrant that OCR results will be completely error-free.</p>
<h2>5. Limitation of Liability</h2>
<p>To the maximum extent permitted by applicable law, the Developer shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, DocuPulse, including loss of documents or data.</p>
<h2>6. Policy Updates &amp; Contact Information</h2>
<p>We reserve the right to revise these Terms periodically. Continued use of the Application following any modifications constitutes acceptance of the revised Terms. For inquiries regarding these Terms, contact us at:</p>
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
<p>Настоящая Политика конфиденциальности применяется к мобильному приложению <strong>DocuPulse</strong> («Приложение», «Сервис»), разработанному <strong>Mohan MRKS</strong> («Разработчик»). DocuPulse спроектировано с соблюдением строгого принципа «Конфиденциальность превыше всего» и выполнения всех операций исключительно на устройстве. Ваши документы, сканы, подписи и файлы принадлежат только вам.</p>
<h2>2. Обработка данных и системные разрешения</h2>
<p>DocuPulse функционирует полностью автономно на клиентском устройстве без отправки данных в сеть. Подробная информация о запрашиваемых разрешениях:</p>
<ul>
<li><strong>КАМЕРА:</strong> Используется исключительно для сканирования документов, чеков, квитанций и заметок непосредственно через интерфейс сканера. Кадры с камеры и сделанные снимки обрабатываются только в оперативной памяти и сохраняются в защищенном локальном хранилище вашего устройства. Они никогда не передаются на внешние серверы.</li>
<li><strong>ДОСТУП К ПАМЯТИ (ХРАНИЛИЩУ):</strong> Предоставляется для импорта изображений и PDF-файлов, а также для сохранения готовых документов, архивов и подписанных файлов в выбранные вами папки на устройстве. Ваши файлы никогда не отправляются на удаленные серверы.</li>
</ul>
<h2>3. Гарантия локального OCR и обработки</h2>
<p>Все вычислительные операции DocuPulse — включая автоматическое обнаружение границ, коррекцию перспективы, фильтры улучшения изображений, оптическое распознавание текста (OCR) с помощью встроенных нейросетевых моделей, наложение цифровых подписей, водяных знаков и экспорт во множество форматов (PDF, JPEG, PNG, ZIP и др.) — выполняются на 100% локально на аппаратных ресурсах вашего устройства.</p>
<h2>4. Автономность и отсутствие отслеживания</h2>
<p>DocuPulse не содержит рекламных SDK, систем сбора аналитики или телеметрии, трекеров и сторонних библиотек мониторинга. Приложение не требует регистрации или создания учетной записи. Сетевые взаимодействия происходят только тогда, когда вы сами инициируете системные действия (например, отправку документа через меню «Поделиться» или обращение в поддержку по почте).</p>
<h2>5. Конфиденциальность детей (соответствие COPPA)</h2>
<p>Приложение не собирает и не обрабатывает персональные данные пользователей любого возраста, включая детей младше 13 лет. DocuPulse полностью безопасно для всей семьи.</p>
<h2>6. Обновления политики и контактная информация</h2>
<p>Мы оставляем за собой право обновлять настоящую политику по мере развития функционала DocuPulse. По всем вопросам обращайтесь по адресу:</p>
<p>
<strong>Разработчик:</strong> Mohan MRKS<br/>
<strong>Электронная почта:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Веб-сайт:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Принятие условий</h2>
<p>Настоящие Условия использования («Условия») регулируют использование мобильного приложения <strong>DocuPulse</strong> («Приложение», «Сервис»), разработанного <strong>Mohan MRKS</strong> («Разработчик»). Устанавливая или запуская DocuPulse, вы соглашаетесь соблюдать настоящие Условия.</p>
<h2>2. Объем лицензии и разрешенное использование</h2>
<p>Вам предоставляется персональная, неисключительная, непередаваемая и отзывная лицензия на установку и использование DocuPulse на принадлежащих вам совместимых устройствах. Вы можете использовать DocuPulse в личных, образовательных или коммерческих целях для сканирования документов, оптического распознавания текста, наложения подписей и экспорта файлов в соответствии с законодательством.</p>
<h2>3. Локальный контент и ответственность пользователя</h2>
<p>Вы сохраняете полные права и единоличную юридическую ответственность за все сканируемые материалы, фотографии, извлеченный текст, PDF-файлы и цифровые подписи. Поскольку DocuPulse работает автономно и не создает облачных копий, вы несете ответственность за своевременное резервное копирование важных документов.</p>
<h2>4. Отказ от гарантий в отношении OCR и обработки</h2>
<p>Функции сканирования, распознавания текста (OCR) и обработки изображений предоставляются на условиях «как есть» (AS IS). Точность распознавания текста зависит от освещения, четкости исходного документа, разрешения камеры и шрифтов. Разработчик не гарантирует абсолютную безошибочность результатов OCR.</p>
<h2>5. Ограничение ответственности</h2>
<p>В максимальной степени, разрешенной применимым законодательством, Разработчик не несет ответственности за любые прямые или косвенные убытки, возникшие в результате использования или невозможности использования DocuPulse, включая потерю данных или документов.</p>
<h2>6. Обновления условий и контактная информация</h2>
<p>Мы оставляем за собой право периодически обновлять данные Условия. Продолжение использования Приложения после изменений означает согласие с новой редакцией. Вопросы и предложения направляйте по адресу:</p>
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
<p>Diese Datenschutzerklärung gilt für die mobile Anwendung <strong>DocuPulse</strong> („Anwendung“, „App“, „Dienst“), entwickelt von <strong>Mohan MRKS</strong> („Entwickler“). DocuPulse wurde nach einer strikten „Privacy-First“-Philosophie entwickelt. Ihre persönlichen Dokumente, Scans, Unterschriften und Dateien gehören ausschließlich Ihnen.</p>
<h2>2. Datenverarbeitung &amp; Geräteberechtigungen</h2>
<p>DocuPulse arbeitet vollständig lokal auf Ihrem Endgerät als autonomes Offline-Tool. Details zu den Berechtigungen:</p>
<ul>
<li><strong>KAMERA:</strong> Wird ausschließlich verwendet, um Dokumente, Belege und Notizen direkt in der Scan-Oberfläche zu erfassen. Kamerabilder werden ausschließlich im Arbeitsspeicher verarbeitet und im privaten App-Speicher gesichert. Es erfolgt keine Übertragung an externe Server.</li>
<li><strong>SPEICHERZUGRIFF:</strong> Dient zum Importieren von Bildern oder PDF-Dateien sowie zum Speichern fertiger Dokumente und Archive an von Ihnen ausgewählten Orten auf dem Gerät. Es findet kein Cloud-Upload statt.</li>
</ul>
<h2>3. Lokale OCR &amp; Verarbeitungsgarantie</h2>
<p>Alle Kernfunktionen von DocuPulse – einschließlich Kantenerkennung, Perspektivkorrektur, Bildfilter, optische Zeichenerkennung (OCR) über integrierte KI-Modelle, digitale Signaturen, Wasserzeichen und Dokumentenexport (PDF, JPEG, PNG, ZIP usw.) – laufen zu 100 % lokal auf Ihrer Gerätehardware ab.</p>
<h2>4. Vollständige Offline-Nutzung &amp; Kein Tracking</h2>
<p>DocuPulse enthält weder Werbe-SDKs noch Analyse-Tools, Telemetrie oder Tracker. Die Anwendung erfordert keine Benutzerkonten und kommuniziert mit keinen Cloud-Servern des Entwicklers.</p>
<h2>5. Schutz der Privatsphäre von Kindern (COPPA)</h2>
<p>DocuPulse erhebt oder verarbeitet zu keinem Zeitpunkt personenbezogene Daten von Kindern oder Erwachsenen. Die App ist sicher für Nutzer aller Altersgruppen.</p>
<h2>6. Richtlinienaktualisierungen und Kontaktinformationen</h2>
<p>Wir behalten uns das Recht vor, diese Erklärung bei neuen App-Funktionen anzupassen. Bei Fragen kontaktieren Sie uns unter:</p>
<p>
<strong>Entwickler:</strong> Mohan MRKS<br/>
<strong>Support-E-Mail:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Website:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Annahme der Bedingungen</h2>
<p>Diese Nutzungsbedingungen („Bedingungen“) regeln den Zugriff auf und die Nutzung der mobilen Anwendung <strong>DocuPulse</strong> („Anwendung“, „Dienst“), entwickelt von <strong>Mohan MRKS</strong> („Entwickler“). Durch die Installation oder Nutzung von DocuPulse erklären Sie sich mit diesen Bedingungen einverstanden.</p>
<h2>2. Lizenzumfang und zulässige Nutzung</h2>
<p>Wir gewähren Ihnen eine persönliche, weltweite, nicht-exklusive und widerrufliche Lizenz zur Nutzung von DocuPulse auf kompatiblen Endgeräten für das Scannen, Bearbeiten, Erkennen von Texten und Verwalten von Dokumenten im Rahmen geltender Gesetze.</p>
<h2>3. Lokale Inhalte und Benutzerverantwortung</h2>
<p>Sie behalten alle Rechte und die alleinige Verantwortung für alle verarbeiteten Dokumente, Fotos, extrahierten Texte und Signaturen. Da DocuPulse offline ohne Cloud-Backups arbeitet, sind Sie für die Sicherung Ihrer Daten selbst verantwortlich.</p>
<h2>4. Haftungsausschluss für OCR &amp; Verarbeitung</h2>
<p>Das Scannen, Bildverbesserungen und die optische Zeichenerkennung (OCR) werden im Ist-Zustand bereitgestellt. Die Genauigkeit hängt von Lichtverhältnissen, Vorlagenqualität und Schriftarten ab. Eine fehlerfreie Texterkennung wird nicht garantiert.</p>
<h2>5. Haftungsbeschränkung</h2>
<p>Soweit gesetzlich zulässig, haftet der Entwickler nicht für direkte oder indirekte Schäden, die aus der Nutzung von DocuPulse oder dem Verlust von Daten resultieren.</p>
<h2>6. Richtlinienaktualisierungen und Kontaktinformationen</h2>
<p>Wir behalten uns vor, diese Bedingungen anzupassen. Fragen können gerichtet werden an:</p>
<p>
<strong>Entwickler:</strong> Mohan MRKS<br/>
<strong>Support-E-Mail:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Website:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  es: {
    titlePP: "Política de Privacidad",
    titleToS: "Términos de Servicio",
    pp: `<h2>1. Arquitectura de privacidad ante todo</h2>
<p>Esta Política de Privacidad se aplica a la aplicación móvil <strong>DocuPulse</strong> ("Aplicación", "Servicio"), desarrollada por <strong>Mohan MRKS</strong> ("Desarrollador"). DocuPulse está diseñada bajo una estricta filosofía de privacidad y ejecución local. Sus documentos personales, escaneos, firmas y archivos le pertenecen exclusivamente a usted.</p>
<h2>2. Manejo de datos y permisos del dispositivo</h2>
<p>DocuPulse funciona de manera 100% local en su dispositivo como una herramienta autónoma sin conexión. Información sobre los permisos:</p>
<ul>
<li><strong>CÁMARA:</strong> Se utiliza exclusivamente para capturar páginas de documentos, recibos y notas directamente desde el escáner. Las imágenes se procesan en la memoria del dispositivo y se guardan en el almacenamiento privado local. Nunca se transmiten a servidores externos.</li>
<li><strong>ACCESO AL ALMACENAMIENTO:</strong> Permite importar imágenes o archivos PDF, así como exportar documentos escaneados, archivos comprimidos y firmas en las carpetas de su elección. No hay subida a servidores en la nube.</li>
</ul>
<h2>3. Garantía de OCR y procesamiento local</h2>
<p>Todas las funciones de DocuPulse —detección de bordes, corrección de perspectiva, filtros de imagen, reconocimiento óptico de caracteres (OCR) mediante modelos locales, firmas digitales, marcas de agua y conversión multiformato (PDF, JPEG, PNG, ZIP)— se ejecutan al 100% localmente en el hardware de su dispositivo.</p>
<h2>4. Independencia de red y cero rastreo</h2>
<p>DocuPulse no incluye SDKs de publicidad, herramientas de analítica, telemetría ni rastreadores de terceros. No requiere cuentas de usuario ni registro en servidores en la nube.</p>
<h2>5. Privacidad infantil (Cumplimiento de COPPA)</h2>
<p>La Aplicación no recopila datos personales de ninguna persona, incluidos niños menores de 13 años. Es totalmente segura para usuarios de todas las edades.</p>
<h2>6. Actualizaciones de la política e información de contacto</h2>
<p>Nos reservamos el derecho de actualizar esta política cuando se introduzcan nuevas características. Para dudas o consultas, contáctenos en:</p>
<p>
<strong>Desarrollador:</strong> Mohan MRKS<br/>
<strong>Correo de soporte:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Sitio web:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Aceptación de los términos</h2>
<p>Estos Términos de Servicio ("Términos") rigen el acceso y uso de la aplicación móvil <strong>DocuPulse</strong> ("Aplicación", "Servicio"), desarrollada por <strong>Mohan MRKS</strong> ("Desarrollador"). Al instalar o utilizar DocuPulse, usted acepta estos Términos.</p>
<h2>2. Alcance de la licencia y uso permitido</h2>
<p>Le otorgamos una licencia personal, no exclusiva, intransferible y revocable para utilizar DocuPulse en dispositivos compatibles con fines de escaneo, edición, OCR y gestión de documentos conforme a la ley.</p>
<h2>3. Contenido local y responsabilidades del usuario</h2>
<p>Usted conserva la propiedad legal y la responsabilidad exclusiva sobre todos los documentos, textos extraídos y firmas procesadas en DocuPulse. Dado que la aplicación funciona sin conexión ni copias en la nube, usted es responsable de realizar copias de seguridad de sus archivos importantes.</p>
<h2>4. Descargo de responsabilidad del motor y OCR</h2>
<p>Las funciones de escaneo, filtros y OCR se ofrecen "tal cual". La precisión del reconocimiento depende de la iluminación, nitidez del documento y tipografía. El Desarrollador no garantiza un reconocimiento sin errores.</p>
<h2>5. Limitación de responsabilidad</h2>
<p>En la medida en que la ley lo permita, el Desarrollador no será responsable de daños directos o indirectos derivados del uso o de la pérdida de datos o documentos.</p>
<h2>6. Actualizaciones de la política e información de contacto</h2>
<p>Nos reservamos el derecho de modificar estos Términos. El uso continuado implica la aceptación de los cambios. Consultas a:</p>
<p>
<strong>Desarrollador:</strong> Mohan MRKS<br/>
<strong>Correo de soporte:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Sitio web:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  fr: {
    titlePP: "Politique de Confidentialité",
    titleToS: "Conditions d'Utilisation",
    pp: `<h2>1. Architecture axée sur la confidentialité</h2>
<p>Cette Politique de Confidentialité s’applique à l’application mobile <strong>DocuPulse</strong> (« Application », « Service »), développée par <strong>Mohan MRKS</strong> (« Développeur »). DocuPulse est conçue avec une stricte priorité donnée à la confidentialité et au traitement local sur l'appareil. Vos documents, numérisations, signatures et fichiers vous appartiennent exclusivement.</p>
<h2>2. Gestion des données et autorisations de l'appareil</h2>
<p>DocuPulse fonctionne de manière entièrement autonome et locale sur votre appareil. Détails sur les autorisations demandées :</p>
<ul>
<li><strong>APPAREIL PHOTO :</strong> Utilisé uniquement pour numériser des pages de documents, factures et notes dans le scanner. Les photos sont traitées en mémoire et enregistrées dans le stockage privé local de l'appareil, sans aucun envoi vers des serveurs externes.</li>
<li><strong>ACCÈS AU STOCKAGE :</strong> Nécessaire pour importer des fichiers ou images et pour exporter vos documents finalisés, archives et signatures dans les dossiers locaux de votre choix. Aucun envoi dans le cloud n'est effectué.</li>
</ul>
<h2>3. Garantie d'OCR et de traitement local</h2>
<p>Toutes les fonctionnalités de DocuPulse — détection des bords, correction de perspective, filtres d'amélioration, reconnaissance optique de caractères (OCR) par modèles intégrés, signatures numériques, filigranes et conversion multi-formats (PDF, JPEG, PNG, ZIP, etc.) — s'exécutent à 100 % localement sur le matériel de votre appareil.</p>
<h2>4. Fonctionnement hors ligne et absence de suivi</h2>
<p>DocuPulse ne contient aucun SDK publicitaire, outil de télémétrie ou composant de traçage tiers. L'application ne requiert aucun compte utilisateur et ne communique avec aucun serveur distant.</p>
<h2>5. Confidentialité des enfants (conformité COPPA)</h2>
<p>L'application ne collecte aucune donnée personnelle d'aucun utilisateur, y compris les enfants de moins de 13 ans. Elle est sûre pour tous les âges.</p>
<h2>6. Mises à jour de la politique et coordonnées</h2>
<p>Nous nous réservons le droit de mettre à jour cette politique lors de l'ajout de fonctionnalités. Pour toute question, contactez-nous :</p>
<p>
<strong>Développeur :</strong> Mohan MRKS<br/>
<strong>Courriel de support :</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Site Web :</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Acceptation des conditions</h2>
<p>Ces Conditions d'Utilisation (« Conditions ») régissent votre accès et votre utilisation de l'application mobile <strong>DocuPulse</strong> (« Application », « Service »), développée par <strong>Mohan MRKS</strong> (« Développeur »). En installant ou utilisant DocuPulse, vous acceptez d'être lié par ces Conditions.</p>
<h2>2. Portée de la licence et utilisation autorisée</h2>
<p>Nous vous accordons une licence personnelle, non exclusive, non transférable et révocable pour utiliser DocuPulse sur vos appareils compatibles afin de numériser, modifier, reconnaître du texte et exporter des documents conformément à la loi.</p>
<h2>3. Contenu local et responsabilités de l’utilisateur</h2>
<p>Vous conservez la pleine propriété et l'entière responsabilité légale de tous les documents, extraits de texte et signatures numériques traités dans DocuPulse. L'application fonctionnant hors ligne sans sauvegarde cloud, vous êtes responsable de sauvegarder vos fichiers importants.</p>
<h2>4. Avertissement concernant l'OCR et le traitement</h2>
<p>La numérisation, les filtres d'image et l'OCR sont fournis « en l'état ». La précision de la reconnaissance dépend de l'éclairage, de la netteté et de la police du document. Le Développeur ne garantit pas une absence totale d'erreurs lors de l'OCR.</p>
<h2>5. Limitation de responsabilité</h2>
<p>Dans la mesure permise par la loi, le Développeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de l'Application ou de la perte de données.</p>
<h2>6. Mises à jour de la politique et coordonnées</h2>
<p>Nous nous réservons le droit de réviser ces Conditions. Vos questions peuvent être adressées à :</p>
<p>
<strong>Développeur :</strong> Mohan MRKS<br/>
<strong>Courriel de support :</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Site Web :</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  zh: {
    titlePP: "隐私政策",
    titleToS: "服务条款",
    pp: `<h2>1. 隐私优先架构</h2>
<p>本隐私政策适用于由 <strong>Mohan MRKS</strong>（以下简称“开发者”）开发的 <strong>DocuPulse</strong> 移动应用程序（以下简称“本应用”或“服务”）。DocuPulse 采用严格的“隐私优先”与纯本地计算架构构建。我们坚信您的个人文档、扫描件、签名和数据完全归您所有。</p>
<h2>2. 数据处理与设备权限政策</h2>
<p>DocuPulse 作为一个完全独立的离线工具在您的设备本地运行。有关权限的具体说明：</p>
<ul>
<li><strong>相机权限（CAMERA）：</strong>仅用于在扫描界面中拍摄和捕捉纸质文档、发票、凭据及笔记。相机画面和抓取的图片仅在内存中处理并保存在设备的私有应用存储空间中，绝不会向任何外部服务器上传或流式传输。</li>
<li><strong>存储权限（STORAGE）：</strong>用于从设备中选择导入照片或 PDF 文件，以及将已处理的文档、压缩包和签名文件导出至您指定的本地存储目录。绝无任何远程云端同步或上传。</li>
</ul>
<h2>3. 本地 OCR 与核心处理保证</h2>
<p>DocuPulse 的全部核心算法与计算功能——包括文档边缘自动检测、透视校正、色彩增强滤镜、基于本地轻量化机器学习模型的文字识别（OCR）、电子签名批注、水印嵌入以及多格式文件导出（PDF、JPEG、PNG、ZIP 等）——100% 在您的本地设备硬件上完成，无需网络连接。</p>
<h2>4. 零追踪与网络独立性</h2>
<p>DocuPulse 不包含任何第三方广告 SDK、用户行为分析工具、遥测代码或数据跟踪器。本应用无需注册或登录账户，亦不与开发者服务器进行通信。仅当您主动通过系统分享菜单导出文件或发送邮件联系支持时，才会触发相应系统操作。</p>
<h2>5. 儿童隐私保护（符合 COPPA）</h2>
<p>本应用不会收集或处理任何人的个人身份信息（包括 13 岁以下儿童）。本应用对所有年龄段用户均完全安全。</p>
<h2>6. 政策更新与联系方式</h2>
<p>随着新离线功能的引入，我们保留适时更新本政策的权利。如有任何疑问，请联系我们：</p>
<p>
<strong>开发者：</strong>Mohan MRKS<br/>
<strong>支持邮箱：</strong><a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>官方网址：</strong><a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. 接受条款</h2>
<p>本服务条款（以下简称“本条款”）适用于您访问和使用由 <strong>Mohan MRKS</strong>（以下简称“开发者”）开发的 <strong>DocuPulse</strong> 移动应用程序（以下简称“本应用”）。下载、安装或使用 DocuPulse 即表示您同意接受本条款的法律约束。</p>
<h2>2. 许可范围与允许用途</h2>
<p>我们授予您一项个人的、全球范围的、非排他性的、不可转让且可撤销的许可，允许您在拥有或控制的兼容设备上使用 DocuPulse 用于合法的文档扫描、编辑、文字识别、电子签署和文件归档管理。</p>
<h2>3. 本地内容与用户责任</h2>
<p>您对通过 DocuPulse 扫描、编辑、提取或导出的所有文档、图像、文字和电子签名拥有完全所有权并承担唯一法律责任。由于 DocuPulse 采用纯本地离线运行模式，不提供云端备份，您应自行负责重要数据的独立备份。</p>
<h2>4. OCR 与功能免责声明</h2>
<p>文档扫描、图像校正和文字识别（OCR）功能均按“原样”提供。文字识别准确率受拍摄光线、文档平整度、相机画质和印刷字体影响，开发者不保证 OCR 识别结果完全无误。</p>
<h2>5. 责任限制</h2>
<p>在适用法律允许的最大范围内，开发者不对因使用或无法使用 DocuPulse 或由此导致的数据丢失承担任何直接、间接或附带赔偿责任。</p>
<h2>6. 政策更新与联系方式</h2>
<p>我们保留适时修订本条款的权利。修改后继续使用本应用即视为接受新条款。疑问请联系：</p>
<p>
<strong>开发者：</strong>Mohan MRKS<br/>
<strong>支持邮箱：</strong><a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>官方网址：</strong><a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  hi: {
    titlePP: "गोपनीयता नीति",
    titleToS: "सेवा की शर्तें",
    pp: `<h2>1. गोपनीयता प्रथम डिज़ाइन</h2>
<p>यह गोपनीयता नीति <strong>Mohan MRKS</strong> ("डेवलपर") द्वारा विकसित <strong>DocuPulse</strong> मोबाइल एप्लिकेशन ("एप्लिकेशन", "सेवा") पर लागू होती है। DocuPulse को "गोपनीयता प्रथम" और पूर्णतः ऑन-डिवाइस कार्यप्रणाली के साथ बनाया गया है। आपके दस्तावेज़, स्कैन, हस्ताक्षर और फ़ाइलें केवल आपकी हैं।</p>
<h2>2. डेटा हैंडलिंग एवं डिवाइस अनुमतियाँ</h2>
<p>DocuPulse एक स्वायत्त ऑफ़लाइन उपयोगिता के रूप में आपके डिवाइस पर स्थानीय रूप से कार्य करता है। आवश्यक अनुमतियों का विवरण:</p>
<ul>
<li><strong>कैमरा (CAMERA):</strong> इसका उपयोग केवल स्कैनर इंटरफ़ेस के भीतर दस्तावेज़ों, रसीदों और नोट्स को कैप्चर करने के लिए किया जाता है। कैमरे के फ्रेम और खींचे गए फोटो केवल मेमोरी में प्रोसेस किए जाते हैं और निजी स्टोरेज में सहेजे जाते हैं। इन्हें कभी बाहरी सर्वर पर नहीं भेजा जाता।</li>
<li><strong>स्टोरेज एक्सेस:</strong> यह छवियों या पीडीएफ फाइलों को आयात करने और तैयार दस्तावेज़ों, अभिलेखागारों और हस्ताक्षरों को आपकी चुनी हुई फाइलों में सहेजने के लिए स्थानीय रूप से उपयोग किया जाता है। कोई क्लाउड अपलोड नहीं होता।</li>
</ul>
<h2>3. ऑन-डिवाइस OCR एवं प्रोसेसिंग गारंटी</h2>
<p>DocuPulse की सभी मुख्य कार्यप्रणालियाँ — दस्तावेज़ किनारा पहचान, परिप्रेक्ष्य सुधार, फ़िल्टर, ऑन-डिवाइस मशीन लर्निंग मॉडल द्वारा ऑप्टिकल कैरेक्टर रिकग्निशन (OCR), डिजिटल हस्ताक्षर, वॉटरमार्क और मल्टी-फ़ॉर्मेट एक्सपोर्ट (PDF, JPEG, PNG, ZIP आदि) — 100% स्थानीय रूप से बिना नेटवर्क के निष्पादित होती हैं।</p>
<h2>4. ऑफ़लाइन स्वतंत्रता और शून्य ट्रैकिंग</h2>
<p>DocuPulse में कोई विज्ञापन SDK, टेलीमेट्री या ट्रैकिंग कोड शामिल नहीं है। ऐप में कोई खाता बनाने की आवश्यकता नहीं होती और यह डेवलपर सर्वर से संचार नहीं करता।</p>
<h2>5. बच्चों की गोपनीयता (COPPA अनुपालन)</h2>
<p>एप्लिकेशन 13 वर्ष से कम उम्र के बच्चों सहित किसी से भी कोई व्यक्तिगत जानकारी एकत्र नहीं करता है। यह सभी आयु वर्ग के उपयोगकर्ताओं के लिए सुरक्षित है।</p>
<h2>6. नीति अपडेट और संपर्क जानकारी</h2>
<p>हम समय-समय पर इस नीति को अपडेट करने का अधिकार सुरक्षित रखते हैं। प्रश्नों के लिए संपर्क करें:</p>
<p>
<strong>डेवलपर:</strong> Mohan MRKS<br/>
<strong>सपोर्ट ईमेल:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>वेबसाइट:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. शर्तों की स्वीकृति</h2>
<p>ये सेवा शर्तें ("शर्तें") <strong>Mohan MRKS</strong> द्वारा विकसित <strong>DocuPulse</strong> मोबाइल एप्लिकेशन के आपके उपयोग को नियंत्रित करती हैं। DocuPulse को स्थापित या उपयोग करके, आप इन शर्तों से बंधे होने की सहमति देते हैं।</p>
<h2>2. लाइसेंस का दायरा और अनुमत उपयोग</h2>
<p>हम आपको दस्तावेज़ स्कैनिंग, संपादन, टेक्स्ट पहचान और फ़ाइल प्रबंधन के लिए कानूनी उपयोग हेतु DocuPulse का उपयोग करने का व्यक्तिगत और गैर-अनन्य लाइसेंस प्रदान करते हैं।</p>
<h2>3. स्थानीय डेटा और उपयोगकर्ता जिम्मेदारियाँ</h2>
<p>DocuPulse में संसाधित सभी दस्तावेज़ों, फ़ोटो, टेक्स्ट और हस्ताक्षरों की पूरी स्वामित्व और कानूनी ज़िम्मेदारी आपकी है। क्योंकि DocuPulse ऑफ़लाइन कार्य करता है, महत्वपूर्ण फ़ाइलों का बैकअप रखने की ज़िम्मेदारी पूरी तरह आपकी है।</p>
<h2>4. OCR एवं प्रोसेसिंग अस्वीकरण</h2>
<p>दस्तावेज़ स्कैनिंग और टेक्स्ट पहचान (OCR) सेवा "जैसी है" आधार पर प्रदान की जाती है। सटीकता प्रकाश, दस्तावेज़ स्पष्टता और फ़ॉन्ट पर निर्भर करती है। डेवलपर त्रुटिहीन पहचान की गारंटी नहीं देता।</p>
<h2>5. देयता की सीमा</h2>
<p>लागू कानून द्वारा अनुमत अधिकतम सीमा तक, डेवलपर DocuPulse के उपयोग या डेटा हानि से होने वाले किसी भी नुकसान के लिए उत्तरदायी नहीं होगा।</p>
<h2>6. नीति अपडेट और संपर्क जानकारी</h2>
<p>हम इन शर्तों को संशोधित करने का अधिकार रखते हैं। निरंतर उपयोग का अर्थ है कि आप संशोधित शर्तों को स्वीकार करते हैं। संपर्क:</p>
<p>
<strong>डेवलपर:</strong> Mohan MRKS<br/>
<strong>सपोर्ट ईमेल:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>वेबसाइट:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  ja: {
    titlePP: "プライバシーポリシー",
    titleToS: "利用規約",
    pp: `<h2>1. プライバシー最優先の設計</h2>
<p>本プライバシーポリシーは、<strong>Mohan MRKS</strong>（以下「開発者」）が開発した <strong>DocuPulse</strong> モバイルアプリケーション（以下「本アプリ」）に適用されます。DocuPulse は「プライバシー最優先」および完全オンデバイス処理の理念のもと設計されています。スキャンした文書、署名、画像データはお客様にのみ帰属します。</p>
<h2>2. データ処理および端末権限ポリシー</h2>
<p>DocuPulse は独立したオフラインツールとして端末内で完結して動作します。使用する権限の詳細：</p>
<ul>
<li><strong>カメラ権限（CAMERA）：</strong>スキャナー画面での文書、領収書、手書きメモの撮影にのみ使用されます。撮影された画像は端末メモリ上で処理され、アプリのプライベート領域にのみ保存されます。外部サーバーへの送信は一切行われません。</li>
<li><strong>ストレージアクセス権限：</strong>既存画像や PDF の読み込み、および完成したスキャンデータやアーカイブ、署名済み文書の保存にのみ使用されます。クラウドへの自動アップロードはありません。</li>
</ul>
<h2>3. ローカル OCR と処理の保証</h2>
<p>DocuPulse の全主要機能（輪郭検出、台形補正、画質向上フィルター、オンデバイス機械学習による光学文字認識（OCR）、電子署名、透かし追加、複数フォーマット書き出し（PDF、JPEG、PNG、ZIP 等））は、端末ハードウェア上で 100% 完結します。</p>
<h2>4. 完全オフラインとトラッキングの排除</h2>
<p>DocuPulse にはサードパーティ製の広告 SDK、アクセス解析ツール、テレメトリ追跡コードは一切含まれていません。アカウント作成も不要です。</p>
<h2>5. お子様のプライバシー（COPPA準拠）</h2>
<p>本アプリは 13 歳未満のお子様を含むいかなるユーザーからも個人情報を収集しません。あらゆる年齢層で安全にご利用いただけます。</p>
<h2>6. ポリシーの更新と連絡先情報</h2>
<p>機能追加に伴い本ポリシーを改定することがあります。ご質問は以下までご連絡ください：</p>
<p>
<strong>開発者：</strong>Mohan MRKS<br/>
<strong>サポート窓口：</strong><a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>公式サイト：</strong><a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. 規約の同意</h2>
<p>本利用規約（以下「本規約」）は、<strong>Mohan MRKS</strong>（以下「開発者」）が提供する <strong>DocuPulse</strong> モバイルアプリの利用条件を定めるものです。DocuPulse をインストールまたは利用することにより、本規約に同意したものとみなされます。</p>
<h2>2. ライセンスの範囲と許可された使用法</h2>
<p>開発者は、お客様に対し、適法な目的で文書のスキャン、編集、OCR、署名、ファイル管理を行うための個人的で譲渡不能な本アプリの利用ライセンスを付与します。</p>
<h2>3. ローカルファイルとユーザーの責任</h2>
<p>本アプリでスキャンまたは作成されたすべてのファイル、テキスト、電子署名の適法性および権利はお客様に帰属します。クラウドバックアップのないオフライン仕様のため、重要データのバックアップはお客様自身の責任で行ってください。</p>
<h2>4. OCR エンジンに関する免責事項</h2>
<p>スキャン機能および文字認識（OCR）は「現状有姿」で提供されます。認識精度は撮影環境やフォントに左右されるため、完全な誤り無き認識を保証するものではありません。</p>
<h2>5. 責任の制限</h2>
<p>法令で許容される最大限の範囲において、開発者は本アプリの利用または利用不能から生じる直接的・間接的損害について一切の責任を負いません。</p>
<h2>6. ポリシーの更新と連絡先情報</h2>
<p>本規約は改定されることがあります。改定後も利用を継続した場合、変更内容に同意したものとみなされます。お問い合わせ：</p>
<p>
<strong>開発者：</strong>Mohan MRKS<br/>
<strong>サポート窓口：</strong><a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>公式サイト：</strong><a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  pt: {
    titlePP: "Política de Privacidade",
    titleToS: "Termos de Serviço",
    pp: `<h2>1. Arquitetura de privacidade em primeiro lugar</h2>
<p>Esta Política de Privacidade aplica-se ao aplicativo móvel <strong>DocuPulse</strong> ("Aplicativo", "Serviço"), desenvolvido por <strong>Mohan MRKS</strong> ("Desenvolvedor"). O DocuPulse foi desenvolvido com base no princípio de "Privacidade em Primeiro Lugar" e execução totalmente local no dispositivo. Seus documentos, digitalizações, assinaturas e arquivos pertencem exclusivamente a você.</p>
<h2>2. Tratamento de dados e permissões do dispositivo</h2>
<p>O DocuPulse opera totalmente offline e localmente no seu dispositivo. Detalhes sobre as permissões:</p>
<ul>
<li><strong>CÂMERA:</strong> Utilizada exclusivamente para capturar documentos, recibos e notas no scanner. As imagens são processadas na memória e salvas no armazenamento privado do dispositivo, sem transmissão para servidores externos.</li>
<li><strong>ACESSO AO ARMAZENAMENTO:</strong> Permite importar imagens ou PDFs e salvar documentos finalizados, arquivos compactados e assinaturas nas pastas que você escolher. Nenhum dado é enviado para a nuvem.</li>
</ul>
<h2>3. Garantia de processamento e OCR local</h2>
<p>Todas as principais funcionalidades do DocuPulse — incluindo detecção de bordas, correção de perspectiva, filtros, reconhecimento óptico de caracteres (OCR) com modelos de aprendizado de máquina locais, assinaturas digitais, marcas d'água e exportação multiformato (PDF, JPEG, PNG, ZIP etc.) — são executadas 100% no hardware do seu dispositivo.</p>
<h2>4. Funcionamento offline e ausência de rastreamento</h2>
<p>O DocuPulse não contém SDKs de anúncios, ferramentas de análise ou rastreadores de terceiros. Não requer contas de usuário nem comunicação com servidores em nuvem.</p>
<h2>5. Privacidade infantil (Conformidade com a COPPA)</h2>
<p>O aplicativo não coleta dados de identificação pessoal de nenhum usuário, incluindo crianças menores de 13 anos. É totalmente seguro para todas as idades.</p>
<h2>6. Atualizações da política e informações de contato</h2>
<p>Reservamo-nos o direito de atualizar esta política com o lançamento de novos recursos. Dúvidas podem ser enviadas para:</p>
<p>
<strong>Desenvolvedor:</strong> Mohan MRKS<br/>
<strong>E-mail de suporte:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Website:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Aceitação dos termos</h2>
<p>Estes Termos de Serviço ("Termos") regem o uso do aplicativo móvel <strong>DocuPulse</strong> ("Aplicativo", "Serviço"), desenvolvido por <strong>Mohan MRKS</strong> ("Desenvolvedor"). Ao instalar ou usar o DocuPulse, você concorda em cumprir estes Termos.</p>
<h2>2. Escopo da licença e uso permitido</h2>
<p>Concedemos a você uma licença pessoal, não exclusiva, intransferível e revogável para usar o DocuPulse na digitalização, edição, OCR e gestão de documentos em conformidade com as leis aplicáveis.</p>
<h2>3. Conteúdo local e responsabilidades do usuário</h2>
<p>Você mantém a propriedade total e a responsabilidade jurídica exclusiva por todos os documentos e assinaturas processados no aplicativo. Como o DocuPulse funciona offline sem backup em nuvem, você é responsável por manter cópias de segurança dos seus arquivos.</p>
<h2>4. Isenção de responsabilidade do mecanismo e OCR</h2>
<p>O escaneamento e o OCR são fornecidos "como estão". A precisão depende de iluminação, nitidez e tipografia do documento. O Desenvolvedor não garante reconhecimento isento de erros.</p>
<h2>5. Limitação de responsabilidade</h2>
<p>Na extensão permitida pela lei, o Desenvolvedor não será responsável por quaisquer danos diretos ou indiretos decorrentes do uso do aplicativo ou de perda de dados.</p>
<h2>6. Atualizações da política e informações de contato</h2>
<p>Podemos revisar estes Termos periodicamente. Dúvidas podem ser encaminhadas para:</p>
<p>
<strong>Desenvolvedor:</strong> Mohan MRKS<br/>
<strong>E-mail de suporte:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Website:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  tr: {
    titlePP: "Gizlilik Politikası",
    titleToS: "Kullanım Koşulları",
    pp: `<h2>1. Gizlilik Öncelikli Mimari</h2>
<p>Bu Gizlilik Politikası, <strong>Mohan MRKS</strong> ("Geliştirici") tarafından geliştirilen <strong>DocuPulse</strong> mobil uygulaması ("Uygulama", "Hizmet") için geçerlidir. DocuPulse, sıkı bir "Önce Gizlilik" ve tamamen cihaz üzerinde işlem felsefesiyle tasarlanmıştır. Belgeleriniz, taramalarınız, imzalarınız ve dosyalarınız yalnızca size aittir.</p>
<h2>2. Veri İşleme ve İzin Politikası</h2>
<p>DocuPulse, istemci cihazınızda tamamen bağımsız bir çevrimdışı araç olarak yerel şekilde çalışır. İzin detayları:</p>
<ul>
<li><strong>KAMERA:</strong> Yalnızca tarayıcı arayüzünde belge sayfalarını, makbuzları ve notları yakalamak için kullanılır. Çekilen görüntüler yalnızca cihaz belleğinde işlenir ve yerel güvenli depolamaya kaydedilir. Asla harici sunuculara aktarılmaz.</li>
<li><strong>DEPOLAMA ERİŞİMİ:</strong> Görüntü veya PDF dosyalarını içe aktarmak ve taranmış belgeleri, arşivleri ve imzalı dosyaları seçtiğiniz yerel klasörlere kaydetmek için kullanılır. Buluta yükleme yapılmaz.</li>
</ul>
<h2>3. Yerel OCR ve İşleme Garantisi</h2>
<p>DocuPulse'ın tüm temel özellikleri — kenar algılama, perspektif düzeltme, görüntü filtreleri, yerel makine öğrenimi modelleriyle optik karakter tanıma (OCR), dijital imza, filigran ve çoklu formatta dışa aktarma (PDF, JPEG, PNG, ZIP vb.) — %100 yerel donanımınızda ağ bağlantısı olmadan çalışır.</p>
<h2>4. Sıfır Takip ve Çevrimdışı Çalışma</h2>
<p>DocuPulse hiçbir reklam SDK'sı, analiz aracı, telemetri veya izleyici içermez. Kullanıcı hesabı gerektirmez ve uzak sunucularla bağlantı kurmaz.</p>
<h2>5. Çocukların Gizliliği (COPPA Uyumluluğu)</h2>
<p>Uygulama, 13 yaşın altındaki çocuklar da dahil olmak üzere hiçbir kimseden kişisel bilgi toplamaz. Her yaş için tamamen güvenlidir.</p>
<h2>6. Politika Güncellemeleri ve İletişim Bilgileri</h2>
<p>Yeni özellikler eklendikçe bu politikayı güncelleme hakkımız saklıdır. Sorularınız için bize ulaşın:</p>
<p>
<strong>Geliştirici:</strong> Mohan MRKS<br/>
<strong>Destek E-postası:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Web Sitesi:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Koşulların Kabulü</h2>
<p>Bu Kullanım Koşulları ("Koşullar"), <strong>Mohan MRKS</strong> tarafından geliştirilen <strong>DocuPulse</strong> uygulamasının kullanımını düzenler. Uygulamayı indirerek veya kullanarak bu Koşulları kabul etmiş olursunuz.</p>
<h2>2. Lisans Kapsamı ve İzin Verilen Kullanım</h2>
<p>DocuPulse'ı yasal amaçlarla belgeleri taramak, düzenlemek, metin tanımak ve imzalamak için kullanmanız amacıyla size kişisel, devredilemez ve geri alınabilir bir lisans vermekteyiz.</p>
<h2>3. Yerel İçerik ve Kullanıcı Sorumlulukları</h2>
<p>DocuPulse ile işlenen tüm belgelerin, metinlerin ve imzaların yasal sorumluluğu tamamen size aittir. Uygulama bulut yedeklemesi olmadan çevrimdışı çalıştığından, dosyalarınızı yedekleme sorumluluğu size aittir.</p>
<h2>4. OCR ve İşleme Sorumluluk Reddi</h2>
<p>Belge tarama ve optik karakter tanıma (OCR) "olduğu gibi" sağlanır. Tanıma doğruluğu ışık, belge kalitesi ve yazı tipine bağlıdır. Geliştirici kusursuz tanıma garantisi vermez.</p>
<h2>5. Sorumluluğun Sınırlandırılması</h2>
<p>Yasaların izin verdiği ölçüde Geliştirici, DocuPulse kullanımından veya veri kaybından doğabilecek doğrudan veya dolaylı zararlardan sorumlu tutulamaz.</p>
<h2>6. Politika Güncellemeleri ve İletişim Bilgileri</h2>
<p>Bu Koşulları zaman zaman güncelleme hakkını saklı tutarız. Sorularınız için iletişim:</p>
<p>
<strong>Geliştirici:</strong> Mohan MRKS<br/>
<strong>Destek E-postası:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Web Sitesi:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  vi: {
    titlePP: "Chính Sách Bảo Mật",
    titleToS: "Điều Khoản Dịch Vụ",
    pp: `<h2>1. Kiến trúc ưu tiên quyền riêng tư</h2>
<p>Chính sách Bảo mật này áp dụng cho ứng dụng di động <strong>DocuPulse</strong> ("Ứng dụng", "Dịch vụ"), do <strong>Mohan MRKS</strong> ("Nhà phát triển") phát triển. DocuPulse được thiết kế với triết lý bảo vệ quyền riêng tư tuyệt đối và xử lý hoàn toàn cục bộ trên thiết bị của bạn. Tài liệu, bản quét, chữ ký và tệp của bạn hoàn toàn thuộc về bạn.</p>
<h2>2. Chính sách xử lý dữ liệu và quyền truy cập</h2>
<p>DocuPulse hoạt động ngoại tuyến hoàn toàn trên thiết bị của bạn. Chi tiết về các quyền truy cập:</p>
<ul>
<li><strong>MÁY ẢNH (CAMERA):</strong> Chỉ dùng để chụp các trang tài liệu, hóa đơn và ghi chú trong giao diện quét. Hình ảnh chụp được chỉ xử lý trong bộ nhớ và lưu vào bộ nhớ cục bộ riêng của ứng dụng, không bao giờ gửi đến máy chủ bên ngoài.</li>
<li><strong>QUYỀN TRUY CẬP BỘ NHỚ:</strong> Dùng để nhập tệp ảnh hoặc PDF và xuất các tài liệu hoàn thiện, tệp lưu trữ và chữ ký vào các thư mục bạn chọn trên thiết bị. Không tải lên đám mây.</li>
</ul>
<h2>3. Đảm bảo OCR và xử lý cục bộ</h2>
<p>Tất cả các tính năng chính của DocuPulse — bao gồm tự động nhận diện mép giấy, chỉnh góc nhìn, bộ lọc hình ảnh, nhận dạng ký tự quang học (OCR) trên thiết bị, chữ ký số, hình mờ và xuất tài liệu đa định dạng (PDF, JPEG, PNG, ZIP, v.v.) — đều chạy 100% cục bộ trên thiết bị của bạn.</p>
<h2>4. Hoạt động ngoại tuyến &amp; Không theo dõi</h2>
<p>DocuPulse không chứa SDK quảng cáo, công cụ phân tích hoặc trình theo dõi của bên thứ ba. Ứng dụng không yêu cầu đăng ký tài khoản và không gửi dữ liệu về máy chủ.</p>
<h2>5. Quyền riêng tư của trẻ em (Tuân thủ COPPA)</h2>
<p>Ứng dụng không thu thập thông tin nhận dạng cá nhân từ bất kỳ ai, kể cả trẻ em dưới 13 tuổi. Ứng dụng hoàn toàn an toàn cho mọi lứa tuổi.</p>
<h2>6. Cập nhật chính sách và thông tin liên hệ</h2>
<p>Chúng tôi có thể cập nhật chính sách này khi có các tính năng mới. Mọi thắc mắc vui lòng liên hệ:</p>
<p>
<strong>Nhà phát triển:</strong> Mohan MRKS<br/>
<strong>Email hỗ trợ:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Trang web:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Chấp nhận các điều khoản</h2>
<p>Các Điều khoản Dịch vụ này ("Điều khoản") chi phối việc truy cập và sử dụng ứng dụng di động <strong>DocuPulse</strong> ("Ứng dụng", "Dịch vụ") do <strong>Mohan MRKS</strong> ("Nhà phát triển") phát triển. Bằng việc tải hoặc sử dụng DocuPulse, bạn đồng ý chịu sự ràng buộc của các Điều khoản này.</p>
<h2>2. Phạm vi giấy phép và mục đích sử dụng được phép</h2>
<p>Chúng tôi cấp cho bạn giấy phép cá nhân, không độc quyền, có thể thu hồi để sử dụng DocuPulse trên các thiết bị tương thích cho mục đích quét, chỉnh sửa tài liệu, OCR và ký số hợp pháp.</p>
<h2>3. Nội dung cục bộ &amp; Trách nhiệm của người dùng</h2>
<p>Bạn giữ toàn quyền sở hữu và chịu trách nhiệm pháp lý duy nhất đối với tất cả tài liệu, hình ảnh và chữ ký được xử lý trong DocuPulse. Vì ứng dụng hoạt động ngoại tuyến không có bản sao lưu đám mây, bạn chịu trách nhiệm tự sao lưu các tệp quan trọng của mình.</p>
<h2>4. Tuyên bố từ chối trách nhiệm về OCR</h2>
<p>Các tính năng quét và OCR được cung cấp theo nguyên trạng "as is". Độ chính xác phụ thuộc vào ánh sáng, chất lượng ảnh và phông chữ. Nhà phát triển không đảm bảo kết quả nhận diện sẽ hoàn toàn không có lỗi.</p>
<h2>5. Giới hạn trách nhiệm pháp lý</h2>
<p>Trong phạm vi tối đa mà pháp luật cho phép, Nhà phát triển không chịu trách nhiệm về bất kỳ thiệt hại trực tiếp hoặc gián tiếp nào phát sinh từ việc sử dụng ứng dụng hoặc mất mát dữ liệu.</p>
<h2>6. Cập nhật chính sách và thông tin liên hệ</h2>
<p>Chúng tôi có quyền sửa đổi các Điều khoản này khi cần thiết. Mọi thắc mắc xin liên hệ:</p>
<p>
<strong>Nhà phát triển:</strong> Mohan MRKS<br/>
<strong>Email hỗ trợ:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Trang web:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  id: {
    titlePP: "Kebijakan Privasi",
    titleToS: "Ketentuan Layanan",
    pp: `<h2>1. Arsitektur Privasi Utama</h2>
<p>Kebijakan Privasi ini berlaku untuk aplikasi seluler <strong>DocuPulse</strong> ("Aplikasi", "Layanan"), yang dikembangkan oleh <strong>Mohan MRKS</strong> ("Pengembang"). DocuPulse dirancang dengan prinsip ketat "Privasi Utama" dan pemrosesan penuh pada perangkat. Dokumen, pindaian, tanda tangan, dan file Anda sepenuhnya milik Anda.</p>
<h2>2. Kebijakan Penanganan Data &amp; Izin Perangkat</h2>
<p>DocuPulse beroperasi secara lokal dan mandiri tanpa koneksi internet. Rincian izin yang diminta:</p>
<ul>
<li><strong>KAMERA:</strong> Digunakan secara eksklusif untuk mengambil gambar dokumen, kuitansi, dan catatan di antarmuka pemindai. Gambar diproses hanya dalam memori dan disimpan di penyimpanan aplikasi lokal perangkat, tidak pernah dikirim ke server luar.</li>
<li><strong>AKSES PENYIMPANAN:</strong> Digunakan untuk mengimpor file foto atau PDF dan mengekspor dokumen yang telah selesai, arsip, dan tanda tangan ke folder pilihan Anda di perangkat. Tidak ada pengunggahan ke cloud.</li>
</ul>
<h2>3. Jaminan OCR dan Pemrosesan Lokal</h2>
<p>Semua fitur utama DocuPulse — termasuk deteksi tepi otomatis, koreksi perspektif, filter gambar, pengenalan teks optik (OCR) di perangkat, tanda tangan digital, watermark, dan ekspor multi-format (PDF, JPEG, PNG, ZIP, dll.) — berjalan 100% secara lokal pada perangkat Anda.</p>
<h2>4. Beroperasi Offline &amp; Tanpa Pelacakan</h2>
<p>DocuPulse tidak memuat SDK iklan pihak ketiga, analitik, telemetri, atau pelacak. Aplikasi tidak memerlukan pembuatan akun pengguna dan tidak berkomunikasi dengan server jarak jauh.</p>
<h2>5. Privasi Anak-anak (Kepatuhan COPPA)</h2>
<p>Aplikasi tidak mengumpulkan data pribadi dari siapa pun, termasuk anak-anak di bawah usia 13 tahun. Sangat aman untuk semua kelompok usia.</p>
<h2>6. Pembaruan Kebijakan &amp; Informasi Kontak</h2>
<p>Kami berhak memperbarui kebijakan ini saat fitur baru ditambahkan. Hubungi kami untuk pertanyaan apa pun di:</p>
<p>
<strong>Pengembang:</strong> Mohan MRKS<br/>
<strong>Email Dukungan:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Situs Web:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Penerimaan Ketentuan</h2>
<p>Ketentuan Layanan ini ("Ketentuan") mengatur akses dan penggunaan aplikasi seluler <strong>DocuPulse</strong> ("Aplikasi", "Layanan") yang dikembangkan oleh <strong>Mohan MRKS</strong> ("Pengembang"). Dengan mengunduh atau menggunakan DocuPulse, Anda setuju untuk terikat oleh Ketentuan ini.</p>
<h2>2. Cakupan Lisensi &amp; Penggunaan yang Diizinkan</h2>
<p>Kami memberi Anda lisensi pribadi, non-eksklusif, tidak dapat dialihkan, dan dapat dibatalkan untuk menggunakan DocuPulse dalam memindai, mengedit, mengenali teks (OCR), dan menandatangani dokumen secara sah.</p>
<h2>3. Konten Lokal &amp; Tanggung Jawab Pengguna</h2>
<p>Anda memegang kepemilikan penuh dan tanggung jawab hukum atas semua dokumen, foto, teks, dan tanda tangan yang diproses di DocuPulse. Karena aplikasi berjalan offline tanpa cadangan cloud, Anda bertanggung jawab untuk mencadangkan file penting Anda secara mandiri.</p>
<h2>4. Penafian Mesin OCR dan Pemrosesan</h2>
<p>Fitur pemindaian dan OCR disediakan "apa adanya". Akurasi pengenalan teks bergantung pada pencahayaan, kualitas dokumen, dan jenis huruf. Pengembang tidak menjamin hasil pengenalan bebas kesalahan 100%.</p>
<h2>5. Batasan Tanggung Jawab</h2>
<p>Sepanjang diizinkan oleh hukum yang berlaku, Pengembang tidak bertanggung jawab atas kerugian langsung atau tidak langsung akibat penggunaan aplikasi atau kehilangan data.</p>
<h2>6. Pembaruan Kebijakan &amp; Informasi Kontak</h2>
<p>Kami berhak merevisi Ketentuan ini sewaktu-waktu. Untuk pertanyaan lebih lanjut, hubungi kami di:</p>
<p>
<strong>Pengembang:</strong> Mohan MRKS<br/>
<strong>Email Dukungan:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Situs Web:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  bn: {
    titlePP: "গোপনীয়তা নীতি",
    titleToS: "সেবার শর্তাবলী",
    pp: `<h2>1. গোপনীয়তা প্রথম স্থাপত্য</h2>
<p>এই গোপনীয়তা নীতিটি <strong>Mohan MRKS</strong> ("বিকাশকারী") দ্বারা তৈরি <strong>DocuPulse</strong> মোবাইল অ্যাপ্লিকেশনের ক্ষেত্রে প্রযোজ্য। DocuPulse একটি কঠোর "গোপনীয়তা প্রথম" এবং সম্পূর্ণ অন-ডিভাইস প্রক্রিয়াকরণ পদ্ধতির সাথে ডিজাইন করা হয়েছে। আপনার নথি, স্ক্যান, স্বাক্ষর এবং ফাইলগুলি একচেটিয়াভাবে আপনার।</p>
<h2>2. ডেটা হ্যান্ডলিং এবং ডিভাইসের অনুমতি নীতি</h2>
<p>DocuPulse আপনার ক্লায়েন্ট ডিভাইসে একটি অফলাইন উপযোগিতা হিসেবে সম্পূর্ণ স্থানীয়ভাবে কাজ করে। প্রয়োজনীয় অনুমতির বিবরণ:</p>
<ul>
<li><strong>ক্যামেরা (CAMERA):</strong> স্ক্যানার ইন্টারফেসে নথির পৃষ্ঠা, রসিদ এবং নোট ক্যাপচার করার জন্য এটি একচেটিয়াভাবে ব্যবহৃত হয়। ছবিগুলি কেবল মেমরিতে প্রক্রিয়া করা হয় এবং ডিভাইসের ব্যক্তিগত স্টোরেজে সংরক্ষিত হয়। এগুলি কখনই কোনো বাহ্যিক সার্ভারে আপলোড করা হয় না।</li>
<li><strong>স্টোরেজ অ্যাক্সেস:</strong> ছবি বা পিডিএফ ফাইল আমদানি করতে এবং সম্পন্ন নথি, সংরক্ষণাগার এবং স্বাক্ষর আপনার পছন্দের ফোল্ডারে রপ্তানি করতে ব্যবহৃত হয়। ক্লাউডে কোনো ফাইল পাঠানো হয় না।</li>
</ul>
<h2>3. অন-ডিভাইস OCR এবং প্রসেসিং গ্যারান্টি</h2>
<p>DocuPulse-এর সমস্ত প্রধান ফাংশন — নথির প্রান্ত সনাক্তকরণ, দৃষ্টিকোণ সংশোধন, চিত্র ফিল্টার, অপটিক্যাল ক্যারেক্টার রিকগনিশন (OCR), ডিজিটাল স্বাক্ষর, জলছাপ এবং মাল্টি-ফরম্যাট এক্সপোর্ট (PDF, JPEG, PNG, ZIP ইত্যাদি) — নেটওয়ার্ক সংযোগ ছাড়াই সম্পূর্ণ ডিভাইসের হার্ডওয়্যারে চলে।</p>
<h2>4. অফলাইন স্বায়ত্তশাসন এবং শূন্য ট্র্যাকিং</h2>
<p>DocuPulse-এ কোনো বিজ্ঞাপন SDK, বিশ্লেষণ সরঞ্জাম বা তৃতীয় পক্ষের ট্র্যাকার অন্তর্ভুক্ত নেই। অ্যাপ্লিকেশনটির কোনো ব্যবহারকারী অ্যাকাউন্টের প্রয়োজন নেই।</p>
<h2>5. শিশুদের গোপনীয়তা (COPPA সম্মতি)</h2>
<p>অ্যাপ্লিকেশনটি ১৩ বছরের কম বয়সী শিশুদের সহ কারো কাছ থেকে কোনো ব্যক্তিগত তথ্য সংগ্রহ করে না। এটি সব বয়সের জন্য সম্পূর্ণ নিরাপদ।</p>
<h2>6. নীতি আপডেট এবং যোগাযোগের তথ্য</h2>
<p>নতুন বৈশিষ্ট্য যোগ করা হলে আমরা এই নীতি আপডেট করার অধিকার সংরক্ষণ করি। তথ্যের জন্য যোগাযোগ করুন:</p>
<p>
<strong>বিকাশকারী:</strong> Mohan MRKS<br/>
<strong>সহায়তা ইমেল:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>ওয়েবসাইট:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. শর্তাবলীর স্বীকৃতি</h2>
<p>এই সেবার শর্তাবলী ("শর্তাবলী") <strong>Mohan MRKS</strong> দ্বারা তৈরি <strong>DocuPulse</strong> মোবাইল অ্যাপ্লিকেশনের ব্যবহার নিয়ন্ত্রণ করে। DocuPulse ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলী দ্বারা আবদ্ধ হতে সম্মত হন।</p>
<h2>2. লাইসেন্সের সুযোগ এবং অনুমোদিত ব্যবহার</h2>
<p>আমরা আপনাকে আইনসম্মত উদ্দেশ্যে নথি স্ক্যান, সম্পাদনা, ওসিআর এবং ডিজিটাল স্বাক্ষরের জন্য DocuPulse ব্যবহার করার একটি ব্যক্তিগত লাইসেন্স প্রদান করি।</p>
<h2>3. স্থানীয় ডেটা এবং ব্যবহারকারীর দায়িত্ব</h2>
<p>DocuPulse-এ প্রক্রিয়া করা সমস্ত নথি, ছবি, টেক্সট এবং স্বাক্ষরের সম্পূর্ণ মালিকানা আপনার। অ্যাপটি অফলাইনে কাজ করে এবং ক্লাউড ব্যাকআপ রাখে না, তাই নিজস্ব ব্যাকআপ রাখা আপনার দায়িত্ব।</p>
<h2>4. OCR ইঞ্জিন দাবিত্যাগ</h2>
<p>স্ক্যানিং এবং OCR পরিষেবা "যেমন আছে" ভিত্তিতে সরবরাহ করা হয়। পাঠ্য স্বীকৃতির নির্ভুলতা আলোর অবস্থা এবং নথির স্পষ্টতার উপর নির্ভর করে।</p>
<h2>5. দায়বদ্ধতার সীমাবদ্ধতা</h2>
<p>প্রযোজ্য আইনের অধীনে, DocuPulse ব্যবহারের ফলে উদ্ভূত কোনো প্রত্যক্ষ বা পরোক্ষ ক্ষতির জন্য বিকাশকারী দায়ী থাকবে না।</p>
<h2>6. নীতি আপডেট এবং যোগাযোগের তথ্য</h2>
<p>আমরা যেকোনো সময় শর্তাবলী সংশোধন করার অধিকার রাখি। প্রশ্নের জন্য যোগাযোগ করুন:</p>
<p>
<strong>বিকাশকারী:</strong> Mohan MRKS<br/>
<strong>সহায়তা ইমেল:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>ওয়েবসাইট:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  te: {
    titlePP: "గోప్యతా విధానం",
    titleToS: "సేవా నిబంధనలు",
    pp: `<h2>1. గోప్యత ప్రథమ ఆర్కిటెక్చర్</h2>
<p>ఈ గోప్యతా విధానం <strong>Mohan MRKS</strong> ("డెవలపర్") ద్వారా అభివృద్ధి చేయబడిన <strong>DocuPulse</strong> మొబైల్ అప్లికేషన్‌కు వర్తిస్తుంది. DocuPulse కచ్చితమైన "గోప్యత మొదట" మరియు ఆన్-డివైస్ విధానంతో రూపొందించబడింది. మీ వ్యక్తిగత పత్రాలు, స్కాన్‌లు, సంతకాలు మరియు ఫైల్‌లు పూర్తిగా మీకే చెందుతాయి.</p>
<h2>2. డేటా నిర్వహణ మరియు అనుమతుల విధానం</h2>
<p>DocuPulse మీ పరికరంలో స్వతంత్ర ఆఫ్‌లైన్ సాధనంగా పూర్తిగా స్థానికంగా పనిచేస్తుంది. అవసరమైన అనుమతుల వివరాలు:</p>
<ul>
<li><strong>కెమెరా (CAMERA):</strong> పత్రాలు, రసీదులు మరియు నోట్లను స్కాన్ చేయడానికి మాత్రమే ఉపయోగించబడుతుంది. తీసిన ఫోటోలు పరికర మెమరీలో మాత్రమే ప్రాసెస్ చేయబడతాయి మరియు స్థానిక స్టోరేజ్‌లో భద్రపరచబడతాయి. అవి ఎప్పుడూ సర్వర్‌లకు పంపబడవు.</li>
<li><strong>స్టోరేజ్ యాక్సెస్:</strong> చిత్రాలు లేదా PDF ఫైల్‌లను దిగుమతి చేసుకోవడానికి మరియు పూర్తయిన పత్రాలను మీ పరికరంలో సేవ్ చేయడానికి ఉపయోగించబడుతుంది. క్లౌడ్ అప్‌లోడ్ జరగదు.</li>
</ul>
<h2>3. ఆన్-డివైస్ OCR మరియు ప్రాసెసింగ్ హామీ</h2>
<p>DocuPulse యొక్క అన్ని ప్రధాన విధులు — అంచుల గుర్తింపు, ఇమేజ్ ఫిల్టర్లు, ఆప్టికల్ క్యారెక్టర్ రికగ్నిషన్ (OCR), డిజిటల్ సంతకాలు, వాటర్‌మార్కింగ్ మరియు ఎగుమతి — 100% మీ పరికర హార్డ్‌వేర్‌పైనే స్థానికంగా అమలు చేయబడతాయి.</p>
<h2>4. ఆఫ్‌లైన్ స్వయంప్రతిపత్తి మరియు జీరో ట్రాకింగ్</h2>
<p>DocuPulse లో ఎటువంటి ప్రకటనల SDKలు, టెలిమెట్రీ లేదా ట్రాకర్లు లేవు. అప్లికేషన్‌కు యూజర్ ఖాతాలు అవసరం లేదు.</p>
<h2>5. పిల్లల గోప్యత (COPPA వర్తింపు)</h2>
<p>ఈ అప్లికేషన్ 13 ఏళ్లలోపు పిల్లలతో సహా ఎవరి నుండి కూడా వ్యక్తిగత సమాచారాన్ని సేకరించదు. ఇది అన్ని వయసుల వారికి సురక్షితమైనది.</p>
<h2>6. విధాన నవీకరణలు మరియు సంప్రదింపు సమాచారం</h2>
<p>ఈ విధానాన్ని ఎప్పటికప్పుడు నవీకరించే హక్కు మాకు ఉంది. ప్రశ్నల కోసం సంప్రదించండి:</p>
<p>
<strong>డెవలపర్:</strong> Mohan MRKS<br/>
<strong>సహాయ ఈమెయిల్:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>వెబ్‌సైట్:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. నిబంధనల అంగీకారం</h2>
<p>ఈ సేవా నిబంధనలు <strong>Mohan MRKS</strong> ద్వారా అభివృద్ధి చేయబడిన <strong>DocuPulse</strong> మొబైల్ అప్లికేషన్ వినియోగాన్ని నియంత్రిస్తాయి. DocuPulse ను ఇన్‌స్టాల్ చేయడం ద్వారా మీరు ఈ నిబంధనలకు కట్టుబడి ఉండటానికి అంగీకరిస్తున్నారు.</p>
<h2>2. లైసెన్స్ పరిధి మరియు అనుమతించబడిన వినియోగం</h2>
<p>చట్టబద్ధమైన పత్రాల స్కానింగ్, ఎడిటింగ్, OCR మరియు సంతకాల నిర్వహణ కోసం DocuPulse ను ఉపయోగించడానికి మేము మీకు వ్యక్తిగత లైసెన్స్‌ను మంజూరు చేస్తున్నాము.</p>
<h2>3. స్థానిక డేటా మరియు వినియోగదారు బాధ్యతలు</h2>
<p>DocuPulse ద్వారా ప్రాసెస్ చేయబడిన అన్ని పత్రాలు మరియు సంతకాలపై మీకు పూర్తి యాజమాన్యం మరియు బాధ్యత ఉంటుంది. యాప్ ఆఫ్‌లైన్‌లో పనిచేస్తుంది కాబట్టి, మీ ఫైళ్ల బ్యాకప్ తీసుకోవడం మీ బాధ్యత.</p>
<h2>4. OCR ఇంజిన్ నిరాకరణ</h2>
<p>పత్రాల స్కానింగ్ మరియు OCR ఫీచర్లు "ఉన్నది ఉన్నట్లుగా" అందించబడతాయి. గుర్తింపు ఖచ్చితత్వం పత్రం స్పష్టతపై ఆధారపడి ఉంటుంది.</p>
<h2>5. బాధ్యత పరిమితి</h2>
<p>చట్టం అనుమతించిన మేరకు, యాప్ వినియోగం లేదా డేటా నష్టం వల్ల కలిగే నష్టాలకు డెవలపర్ బాధ్యత వహించడు.</p>
<h2>6. విధాన నవీకరణలు మరియు సంప్రదింపు సమాచారం</h2>
<p>ఈ నిబంధనలను సవరించే హక్కు మాకు ఉంది. ప్రశ్నల కోసం సంప్రదించండి:</p>
<p>
<strong>డెవలపర్:</strong> Mohan MRKS<br/>
<strong>సహాయ ఈమెయిల్:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>వెబ్‌సైట్:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  ta: {
    titlePP: "தனியுரிமைக் கொள்கை",
    titleToS: "சேவை விதிமுறைகள்",
    pp: `<h2>1. தனியுரிமை முதன்மை கட்டமைப்பு</h2>
<p>இந்த தனியுரிமைக் கொள்கை <strong>Mohan MRKS</strong> ("டெவலப்பர்") உருவாக்கிய <strong>DocuPulse</strong> மொபைல் பயன்பாட்டிற்கு பொருந்தும். DocuPulse "தனியுரிமை முதன்மை" மற்றும் முழுமையான சாதன செயலாக்க அணுகுமுறையுடன் உருவாக்கப்பட்டுள்ளது. உங்கள் ஆவணங்கள், ஸ்கேன்கள், கையொப்பங்கள் மற்றும் கோப்புகள் உங்களுக்கு மட்டுமே சொந்தமானவை.</p>
<h2>2. தரவு கையாளுதல் மற்றும் அனுமதிகள் கொள்கை</h2>
<p>DocuPulse உங்கள் சாதனத்தில் முற்றிலும் ஆஃப்லைனில் இயங்கும் ஒரு தனித்துவமான பயன்பாடாகும். கோரப்படும் அனுமதிகளின் விவரங்கள்:</p>
<ul>
<li><strong>கேமரா (CAMERA):</strong> ஆவண பக்கங்கள், ரசீதுகள் மற்றும் குறிப்புகளை ஸ்கேன் செய்ய மட்டுமே பயன்படுத்தப்படுகிறது. எடுக்கப்பட்ட படங்கள் சாதன நினைவகத்தில் மட்டுமே செயலாக்கப்பட்டு தனிப்பட்ட சேமிப்பகத்தில் சேமிக்கப்படும். அவை வெளிப்புற சேவையகங்களுக்கு அனுப்பப்படுவதில்லை.</li>
<li><strong>சேமிப்பக அனுமதி:</strong> படங்களை அல்லது PDF கோப்புகளை இறக்குமதி செய்யவும் மற்றும் ஆவணங்களை நீங்கள் தேர்ந்தெடுக்கும் இடங்களில் சேமிக்கவும் பயன்படுகிறது. கிளவுட் பதிவேற்றம் எதுவும் இல்லை.</li>
</ul>
<h2>3. சாதனத்திலான OCR மற்றும் செயலாக்க உத்தரவாதம்</h2>
<p>DocuPulse-இன் அனைத்து முக்கிய அம்சங்களும் — விளிம்பு கண்டறிதல், பார்வை திருத்தம், பட வடிப்பான்கள், ஆப்டிகல் கேரக்டர் அங்கீகாரம் (OCR), டிஜிட்டல் கையொப்பங்கள் மற்றும் ஏற்றுமதிகள் — 100% இணையம் இல்லாமல் உங்கள் சாதன வன்பொருளிலேயே இயங்கும்.</p>
<h2>4. ஆஃப்லைன் சுதந்திரம் மற்றும் கண்காணிப்பின்மை</h2>
<p>DocuPulse இல் எந்த மூன்றாம் தரப்பு விளம்பர SDKகளோ அல்லது கண்காணிப்பு குறியீடுகளோ இல்லை. பயன்பாட்டிற்கு பயனர் கணக்கு தேவையில்லை.</p>
<h2>5. குழந்தைகளின் தனியுரிமை (COPPA இணக்கம்)</h2>
<p>13 வயதுக்குட்பட்ட குழந்தைகள் உட்பட யாரிடமிருந்தும் இந்த பயன்பாடு தனிப்பட்ட தகவல்களைச் சேகரிப்பதில்லை. இது அனைவருக்கும் முற்றிலும் பாதுகாப்பானது.</p>
<h2>6. கொள்கை புதுப்பிப்புகள் மற்றும் தொடர்பு தகவல்</h2>
<p>புதிய அம்சங்கள் சேர்க்கப்படும்போது இக்கொள்கையைப் புதுப்பிக்க எங்களுக்கு உரிமை உண்டு. கேள்விகளுக்கு தொடர்பு கொள்ளவும்:</p>
<p>
<strong>டெவலப்பர்:</strong> Mohan MRKS<br/>
<strong>ஆதரவு மின்னஞ்சல்:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>இணையதளம்:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. விதிமுறைகளை ஏற்றுக்கொள்வது</h2>
<p>இந்த சேவை விதிமுறைகள் <strong>Mohan MRKS</strong> உருவாக்கிய <strong>DocuPulse</strong> பயன்பாட்டின் பயன்பாட்டை நிர்வகிக்கின்றன. DocuPulse ஐப் பயன்படுத்துவதன் மூலம் இந்த விதிமுறைகளுக்குக் கட்டுப்பட ஒப்புக்கொள்கிறீர்கள்.</p>
<h2>2. உரிமத்தின் நோக்கம் மற்றும் பயன்பாடு</h2>
<p>சட்டப்பூர்வ நோக்கங்களுக்காக ஆவணங்களை ஸ்கேன் செய்ய, திருத்த மற்றும் கையொப்பமிட DocuPulse ஐப் பயன்படுத்த தனிப்பட்ட உரிமத்தை நாங்கள் வழங்குகிறோம்.</p>
<h2>3. உள்ளூர் தரவு மற்றும் பயனர் பொறுப்புகள்</h2>
<p>DocuPulse மூலம் கையாளப்படும் அனைத்து ஆவணங்கள் மற்றும் கையொப்பங்களின் முழுமையான உரிமை உங்களுக்கே உரியது. பயன்பாடு ஆஃப்லைனில் இயங்குவதால், உங்கள் கோப்புகளை காப்புப் பிரதி எடுப்பது உங்கள் பொறுப்பாகும்.</p>
<h2>4. OCR இன்ஜின் மறுப்பு</h2>
<p>ஆவண ஸ்கேனிங் மற்றும் OCR அம்சங்கள் "உள்ளபடியே" வழங்கப்படுகின்றன. எழுத்து அறிதல் துல்லியம் படத்தின் தெளிவைப் பொறுத்தது.</p>
<h2>5. பொறுப்பு வரம்பு</h2>
<p>பயன்பாட்டின் பயன்பாடு அல்லது தரவு இழப்பினால் ஏற்படும் எந்தவொரு சேதத்திற்கும் டெவலப்பர் பொறுப்பேற்க மாட்டார்.</p>
<h2>6. கொள்கை புதுப்பிப்புகள் மற்றும் தொடர்பு தகவல்</h2>
<p>இந்த விதிமுறைகளை மாற்ற எங்களுக்கு உரிமை உண்டு. தொடர்புக்கு:</p>
<p>
<strong>டெவலப்பர்:</strong> Mohan MRKS<br/>
<strong>ஆதரவு மின்னஞ்சல்:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>இணையதளம்:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  mr: {
    titlePP: "गोपनीयता धोरण",
    titleToS: "सेवा अटी",
    pp: `<h2>1. गोपनीयता प्रथम डिझाइन</h2>
<p>हे गोपनीयता धोरण <strong>Mohan MRKS</strong> ("डेव्हलपर") द्वारे विकसित <strong>DocuPulse</strong> मोबाईल ॲप्लिकेशनवर लागू होते. DocuPulse हे पूर्णपणे "गोपनीयता प्रथम" आणि डिव्हाइसवरच प्रक्रिया करण्याच्या तत्त्वावर तयार केले गेले आहे. तुमचे दस्तऐवज, स्कॅन, स्वाक्षऱ्या आणि फाइल्स केवळ तुमच्या मालकीच्या आहेत.</p>
<h2>2. डेटा हाताळणी आणि डिव्हाइस परवानगी धोरण</h2>
<p>DocuPulse तुमच्या डिव्हाइसवर स्वतंत्र ऑफलाइन उपयुक्तता म्हणून स्थानिक पातळीवर कार्य करते. आवश्यक परवानग्यांचा तपशील:</p>
<ul>
<li><strong>कॅमेरा (CAMERA):</strong> केवळ स्कॅनर इंटरफेसमध्ये दस्तऐवज पृष्ठे, पावत्या आणि नोट्स कॅप्चर करण्यासाठी वापरला जातो. कॅमेऱ्याचे फोटो केवळ मेमरीमध्ये प्रक्रिया केले जातात आणि सुरक्षित स्थानिक स्टोरेजमध्ये जतन केले जातात. ते बाह्य सर्व्हरवर पाठवले जात नाहीत.</li>
<li><strong>स्टोरेज प्रवेश:</strong> प्रतिमा किंवा पीडीएफ फाइल्स आयात करण्यासाठी आणि पूर्ण झालेले दस्तऐवज तुमच्या पसंतीच्या फोल्डरमध्ये जतन करण्यासाठी वापरला जातो. कोणतीही क्लाउड अपलोडिंग होत नाही.</li>
</ul>
<h2>3. ऑन-डिव्हाइस OCR आणि प्रक्रिया हमी</h2>
<p>DocuPulse ची सर्व मुख्य कार्ये — कडा ओळखणे, दृष्टीकोन सुधारणा, प्रतिमा फिल्टर्स, ऑन-डिव्हाइस मशीन लर्निंगद्वारे ऑप्टिकल कॅरेक्टर रेकग्निशन (OCR), डिजिटल स्वाक्षऱ्या आणि मल्टी-फॉर्मेट निर्यात — इंटरनेटशिवाय 100% तुमच्या डिव्हाइस हार्डवेअरवरच चालतात.</p>
<h2>4. ऑफलाइन स्वातंत्र्य आणि शून्य ट्रॅकिंग</h2>
<p>DocuPulse मध्ये कोणत्याही जाहिरात SDK, विश्लेषण किंवा ट्रॅकर्सचा समावेश नाही. ॲप्लिकेशनला कोणत्याही वापरकर्ता खात्याची आवश्यकता नाही.</p>
<h2>5. मुलांची गोपनीयता (COPPA अनुपालन)</h2>
<p>हे ॲप्लिकेशन १३ वर्षांपेक्षा कमी वयाच्या मुलांसह कोणाचीही वैयक्तिक माहिती गोळा करत नाही. हे सर्व वयोगटांसाठी सुरक्षित आहे.</p>
<h2>6. धोरण अद्यतने आणि संपर्क माहिती</h2>
<p>नवीन वैशिष्ट्यांसह हे धोरण अद्यतनित करण्याचा अधिकार आम्ही राखून ठेवतो. प्रश्नांसाठी संपर्क करा:</p>
<p>
<strong>डेव्हलपर:</strong> Mohan MRKS<br/>
<strong>सपोर्ट ईमेल:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>वेबसाइट:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. अटींची स्वीकृती</h2>
<p>या सेवा अटी ("अटी") <strong>Mohan MRKS</strong> द्वारे विकसित <strong>DocuPulse</strong> ॲप्लिकेशनचा वापर नियंत्रित करतात. DocuPulse वापरून, तुम्ही या अटींचे पालन करण्यास सहमती दर्शवता.</p>
<h2>2. परवान्याची व्याप्ती आणि अनुमत वापर</h2>
<p>दस्तऐवज स्कॅनिंग, संपादन, मजकूर ओळख (OCR) आणि स्वाक्षऱ्यांसाठी आम्ही तुम्हाला DocuPulse वापरण्याचा वैयक्तिक परवाना देतो.</p>
<h2>3. स्थानिक डेटा आणि वापरकर्ता जबाबदाऱ्या</h2>
<p>DocuPulse द्वारे प्रक्रिया केलेल्या सर्व दस्तऐवजांची आणि स्वाक्षऱ्यांची संपूर्ण मालकी तुमची आहे. ॲप ऑफलाइन चालत असल्याने, फाइल्सचा बॅकअप घेणे ही तुमची जबाबदारी आहे.</p>
<h2>4. OCR इंजिन अस्वीकरण</h2>
<p>दस्तऐवज स्कॅनिंग आणि मजकूर ओळख वैशिष्ट्ये "जशी आहेत तशी" प्रदान केली जातात. अचूकता दस्तऐवजाच्या स्पष्टतेवर अवलंबून असते.</p>
<h2>5. दायित्व मर्यादा</h2>
<p>कायद्याने परवानगी दिलेल्या मर्यादेपर्यंत, ॲपच्या वापरामुळे उद्भवणाऱ्या कोणत्याही नुकसानीसाठी डेव्हलपर जबाबदार राहणार नाही.</p>
<h2>6. धोरण अद्यतने आणि संपर्क माहिती</h2>
<p>या अटींमध्ये बदल करण्याचा अधिकार आम्ही राखून ठेवतो. प्रश्नांसाठी संपर्क:</p>
<p>
<strong>डेव्हलपर:</strong> Mohan MRKS<br/>
<strong>सपोर्ट ईमेल:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>वेबसाइट:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  sw: {
    titlePP: "Sera ya Faragha",
    titleToS: "Masharti ya Huduma",
    pp: `<h2>1. Muundo wa Kuweka Faragha Mbele</h2>
<p>Sera hii ya Faragha inatumika kwa programu ya simu ya <strong>DocuPulse</strong> ("Programu", "Huduma"), iliyotengenezwa na <strong>Mohan MRKS</strong> ("Msanidi"). DocuPulse imeundwa kwa mtazamo thabiti wa kuweka faragha mbele na kufanya kazi yote ndani ya kifaa chako pekee. Nyaraka, nakala zilizochanganuliwa, saini na faili zako ni mali yako pekee.</p>
<h2>2. Ushughulikiaji wa Data &amp; Ruhusa za Kifaa</h2>
<p>DocuPulse inafanya kazi ndani ya kifaa chako kama zana huru isiyo na mtandao. Maelezo ya ruhusa:</p>
<ul>
<li><strong>KAMERA:</strong> Inatumika tu kuchanganua nyaraka, risiti na notisi ndani ya programu. Picha zinachakatwa ndani ya kumbukumbu ya kifaa na kuhifadhiwa kwenye hifadhi ya ndani ya programu. Hazitumwi kamwe kwenye seva za nje.</li>
<li><strong>RUHUSA YA HIFADHI:</strong> Inatumika kuingiza picha au faili za PDF na kuhifadhi nyaraka zilizokamilika na saini kwenye folda utakazochagua. Hakuna upakiaji kwenye wingu.</li>
</ul>
<h2>3. Dhamana ya OCR na Uchakataji wa Ndani</h2>
<p>Vipengele vyote vikuu vya DocuPulse — utambuzi wa kingo, urekebishaji wa mtazamo, vichujio vya picha, utambuzi wa maandishi (OCR) kupitia miundo ya ndani, saini za kidijitali na uhamishaji wa faili za miundo mbalimbali (PDF, JPEG, PNG, ZIP n.k.) — hufanyika 100% ndani ya kifaa chako bila mtandao.</p>
<h2>4. Kufanya Kazi Nje ya Mtandao na Kutokuwepo kwa Ufuatiliaji</h2>
<p>DocuPulse haina matangazo, uchanganuzi wa data au vifuatiliaji vya watu wengine. Haihitaji akaunti ya mtumiaji.</p>
<h2>5. Faragha ya Watoto (Kuzingatia COPPA)</h2>
<p>Programu haikusanyi taarifa binafsi kutoka kwa mtu yeyote, ikiwa ni pamoja na watoto chini ya miaka 13. Ni salama kwa umri wote.</p>
<h2>6. Masasisho ya Sera na Maelezo ya Mawasiliano</h2>
<p>Tuna haki ya kusasisha sera hii pindi vipengele vipya vinapoongezwa. Wasiliana nasi kwa maswali:</p>
<p>
<strong>Msanidi:</strong> Mohan MRKS<br/>
<strong>Barua pepe ya Usaidizi:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Tovuti:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Kukubali Masharti</h2>
<p>Masharti haya ya Huduma ("Masharti") yanasimamia matumizi ya programu ya simu ya <strong>DocuPulse</strong> ("Programu", "Huduma"), iliyotengenezwa na <strong>Mohan MRKS</strong> ("Msanidi"). Kwa kusakinisha au kutumia DocuPulse, unakubali kufungwa na Masharti haya.</p>
<h2>2. Upeo wa Leseni na Matumizi Yanayoruhusiwa</h2>
<p>Tunakupa leseni ya kibinafsi, isiyo ya kipekee na inayoweza kufutwa ya kutumia DocuPulse kuchanganua, kuhariri, kutambua maandishi na kuweka saini kwenye nyaraka kisheria.</p>
<h2>3. Maudhui ya Ndani na Wajibu wa Mtumiaji</h2>
<p>Unamiliki haki zote na unawajibika kisheria kwa nyaraka na saini zote zinazochakatwa katika DocuPulse. Kwa kuwa programu inafanya kazi bila intaneti na haina nakala ya wingu, unawajibika kuhifadhi nakala za faili zako muhimu.</p>
<h2>4. Kanusho la Injini ya OCR</h2>
<p>Huduma za uchanganuzi na OCR zinatolewa "kama zilivyo". Usahihi wa utambuzi unategemea mwanga na uwazi wa nyaraka. Msanidi hatoi hakikisho la kutokuwa na hitilafu 100%.</p>
<h2>5. Kikomo cha Dhima</h2>
<p>Kwa kiwango kinachoruhusiwa na sheria, Msanidi hatawajibika kwa uharibifu wowote au upotevu wa data unaotokana na matumizi ya DocuPulse.</p>
<h2>6. Masasisho ya Sera na Maelezo ya Mawasiliano</h2>
<p>Tuna haki ya kubadilisha masharti haya wakati wowote. Kwa maswali, wasiliana nasi:</p>
<p>
<strong>Msanidi:</strong> Mohan MRKS<br/>
<strong>Barua pepe ya Usaidizi:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Tovuti:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  },

  ha: {
    titlePP: "Manufar Tsare Sirri",
    titleToS: "Sharuddan Sabis",
    pp: `<h2>1. Tsarin Farko na Tsare Sirri</h2>
<p>Wannan Manufar Tsare Sirri tana aiki ne ga manhajar <strong>DocuPulse</strong> ("Manhaja", "Sabis"), wacce <strong>Mohan MRKS</strong> ("Mai Haɓakawa") ya ƙirƙira. An gina DocuPulse tare da tsarin "Kare Sirri a Farko" inda dukkan ayyuka ke gudana a kan na'urarka kaɗai. Takardunka, bincikenka, sa hannu da fayilolinka mallakarka ne zalla.</p>
<h2>2. Kula da Bayanai &amp; Izinin Na'ura</h2>
<p>DocuPulse tana aiki a cikin na'urarka a matsayin kayan aiki mai zaman kansa ba tare da buƙatar intanet ba. Cikakkun bayanai kan izini:</p>
<ul>
<li><strong>KAMARA:</strong> Ana amfani da ita kawai don ɗaukar shafukan takardu, rasit da bayanai a cikin manhaja. Hotunan da aka ɗauka suna aiki ne kawai a cikin ƙwaƙwalwar na'ura kuma ana adana su a ma'ajiyar sirri ta manhaja. Ba a taɓa tura su zuwa wasu sabar na waje ba.</li>
<li><strong>SAMUN DAMAR MA'AJIYA:</strong> Ana amfani da ita wajen shigar da hotuna ko fayilolin PDF da fitar da takardun da aka kammala zuwa fayilolin da ka zaɓa. Babu watsa bayanai zuwa gajimare.</li>
</ul>
<h2>3. Garanti na OCR da Sarrafa Takardu a Na'ura</h2>
<p>Dukkan ayyukan DocuPulse — gami da gano gefen takarda, gyara yanayin gani, tace hotuna, gane rubutu (OCR) ta amfani da dabarun fasahar na'ura, sa hannun dijital da fitar da takardu a nau'o'i daban-daban (PDF, JPEG, PNG, ZIP da sauransu) — suna aiki 100% a cikin na'urarka ba tare da intanet ba.</p>
<h2>4. Aiki Ba Tare da Intanet ba &amp; Babu Bibiya</h2>
<p>DocuPulse ba ta ƙunshi tallace-tallace, kayan aikin bincike ko bin sawu na wasu ba. Manhaja ba ta buƙatar asusun mai amfani.</p>
<h2>5. Sirrin Yara (Biyayya ga Dokar COPPA)</h2>
<p>Manhajar ba ta tattara bayanan sirri daga kowa ba, gami da yara 'yan ƙasa da shekaru 13. Tana da aminci ga dukkan shekaru.</p>
<h2>6. Sabunta Manufofi da Bayanin Tuntuba</h2>
<p>Muna da haƙƙin sabunta wannan manufa yayin da aka ƙara sabbin abubuwa. Don tambayoyi, tuntuɓe mu a:</p>
<p>
<strong>Mai Haɓakawa:</strong> Mohan MRKS<br/>
<strong>Imel ɗin Tallafi:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Shafin Yanar Gizo:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`,
    tos: `<h2>1. Yarda da Sharudda</h2>
<p>Waɗannan Sharuddan Sabis ("Sharudda") suna tsara amfani da manhajar <strong>DocuPulse</strong> ("Manhaja", "Sabis"), wacce <strong>Mohan MRKS</strong> ("Mai Haɓakawa") ya ƙirƙira. Ta hanyar shigarwa ko amfani da DocuPulse, ka yarda da waɗannan Sharudda.</p>
<h2>2. Girman Lasisi da Halaltaccen Amfani</h2>
<p>Muna ba ka lasisi na kashin kai don amfani da DocuPulse don duba takardu, gyara, gane rubutu da sa hannu a kan takardu bisa doka.</p>
<h2>3. Abubuwan Cikin Gida da Nauyin Mai Amfani</h2>
<p>Kana da cikakken ikon mallaka da alhakin dukkan takardu da sa hannun da aka sarrafa a cikin DocuPulse. Tunda manhajar tana aiki ba tare da intanet ba kuma babu ajiyar gajimare, alhakinka ne ka adana kwafin bayananka masu mahimmanci.</p>
<h2>4. Gargadi game da Aikin OCR</h2>
<p>Ayyukan duba takardu da gane rubutu (OCR) ana bayar da su "kamar yadda suke". Daidaiton rubutu ya dogara ne da haske da bayyanar takarda. Mai Haɓakawa ba ya ba da tabbacin cewa babu kuskure 100%.</p>
<h2>5. Iyakar Alhaki</h2>
<p>Bisa ga iyakar da doka ta ba da dama, Mai Haɓakawa ba zai ɗauki alhakin kowace irin asara da ta samu mai amfani ba sakamakon amfani da manhajar.</p>
<h2>6. Sabunta Manufofi da Bayanin Tuntuba</h2>
<p>Muna da haƙƙin canza waɗannan sharudda a kowane lokaci. Don tambayoyi, tuntuɓe mu:</p>
<p>
<strong>Mai Haɓakawa:</strong> Mohan MRKS<br/>
<strong>Imel ɗin Tallafi:</strong> <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a><br/>
<strong>Shafin Yanar Gizo:</strong> <a href="https://mohan2123.github.io" rel="noopener noreferrer" target="_blank">mohan2123.github.io</a>
</p>`
  }
};

// Map variants to base languages
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

  // Add DocuPulse privacy policy
  fileContent[`docupulse/privacy_policy/${lang}`] = {
    appId: "docupulse",
    docType: "privacy_policy",
    lang: lang,
    title: dataForLang.titlePP,
    subtitle: "DocuPulse",
    content: dataForLang.pp
  };

  // Add DocuPulse terms of service
  fileContent[`docupulse/terms_of_service/${lang}`] = {
    appId: "docupulse",
    docType: "terms_of_service",
    lang: lang,
    title: dataForLang.titleToS,
    subtitle: "DocuPulse",
    content: dataForLang.tos
  };

  fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang}.json with DocuPulse legal documents.`);
}

console.log("Successfully generated all DocuPulse legal translations!");
