const gameNames = {
  ludo: 'Ludo Bear',
  knife_strike: 'Knife Strike',
  block_blast: 'Block Blast',
};

const translations = {
  fr: {
    privacyTitle: 'Politique de confidentialité', termsTitle: 'Conditions d’utilisation',
    privacy: [
      ['1. Champ d’application et données locales', 'Cette politique concerne {game}, développé par Mohan MRKS. Le jeu ne nécessite pas de compte et ne possède pas de service de sauvegarde en ligne géré par le développeur. La progression et les réglages sont conservés sur votre appareil pour faire fonctionner le jeu et ne sont pas envoyés au développeur.'],
      ['2. Fonctions de l’appareil et partage', 'Le son, les vibrations et, lorsqu’elles existent, les notifications locales utilisent les fonctions de votre appareil. Si vous partagez des informations ou contactez l’assistance, l’application de partage ou de messagerie choisie applique ses propres règles de confidentialité.'],
      ['3. Conservation et contact', 'Les données du jeu restent sur l’appareil jusqu’à leur suppression, à l’effacement des données de l’application ou à sa désinstallation. Les paramètres de sauvegarde de l’appareil peuvent modifier leur conservation. Évitez de saisir des informations sensibles, notamment dans les noms de joueurs. Questions : <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. Accord et utilisation', 'Ces conditions s’appliquent à {game}, développé par Mohan MRKS. En installant ou en utilisant le jeu, vous acceptez de respecter la loi et ces conditions. Si vous n’êtes pas d’accord, cessez de l’utiliser. Le jeu est destiné au divertissement.'],
      ['2. Progression et responsabilité', 'La progression et les réglages sont conservés sur votre appareil. Vous êtes responsable de la sécurité de l’appareil et de vos sauvegardes. L’effacement des données ou la désinstallation peut supprimer la progression. N’utilisez pas le jeu pour nuire, usurper une identité ou harceler autrui.'],
      ['3. Fonctions et services tiers', 'Le son, les vibrations et les rappels locaux éventuels dépendent des fonctions et réglages de votre appareil. Le partage ou le contact avec l’assistance ouvre une application tierce soumise à ses propres conditions et règles de confidentialité.'],
      ['4. Disponibilité et responsabilité', 'Le jeu est fourni selon sa disponibilité et peut évoluer. Dans les limites autorisées par la loi, aucune garantie n’est donnée quant à un fonctionnement continu, sans erreur ou adapté à un usage particulier. Le développeur n’est pas responsable des pertes indirectes, notamment de la perte de données locales. Les droits qui ne peuvent être exclus par la loi restent applicables. Questions : <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  de: {
    privacyTitle: 'Datenschutzerklärung', termsTitle: 'Nutzungsbedingungen',
    privacy: [
      ['1. Geltungsbereich und lokale Daten', 'Diese Erklärung gilt für {game}, entwickelt von Mohan MRKS. Das Spiel benötigt kein Konto und bietet keinen vom Entwickler betriebenen Online-Speicherdienst. Spielstand und Einstellungen werden zur Bereitstellung des Spiels auf Ihrem Gerät gespeichert und nicht an den Entwickler gesendet.'],
      ['2. Gerätefunktionen und Teilen', 'Ton, Vibration und gegebenenfalls lokale Erinnerungen nutzen Funktionen Ihres Geräts. Wenn Sie Informationen teilen oder den Support kontaktieren, gelten die Datenschutzregeln der von Ihnen gewählten Teilen- oder E-Mail-App.'],
      ['3. Speicherung und Kontakt', 'Spieldaten bleiben auf dem Gerät, bis Sie sie löschen, App-Daten entfernen oder das Spiel deinstallieren. Gerätesicherungen können die Aufbewahrung beeinflussen. Geben Sie insbesondere bei Spielernamen keine sensiblen Informationen ein. Fragen: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. Zustimmung und Nutzung', 'Diese Bedingungen gelten für {game}, entwickelt von Mohan MRKS. Mit Installation oder Nutzung stimmen Sie einer rechtmäßigen und bedingungsgemäßen Nutzung zu. Wenn Sie nicht zustimmen, verwenden Sie das Spiel nicht weiter. Das Spiel dient der Unterhaltung.'],
      ['2. Spielstand und Verantwortung', 'Spielstand und Einstellungen werden auf Ihrem Gerät gespeichert. Sie sind für den Schutz Ihres Geräts und eigene Sicherungen verantwortlich. Das Löschen von App-Daten oder die Deinstallation kann den Spielstand entfernen. Verwenden Sie das Spiel nicht, um andere zu schädigen, zu belästigen oder sich als andere auszugeben.'],
      ['3. Gerätefunktionen und Drittanbieter', 'Ton, Vibration und gegebenenfalls lokale Erinnerungen hängen von den Funktionen und Einstellungen Ihres Geräts ab. Beim Teilen oder Kontakt mit dem Support wird eine Drittanbieter-App geöffnet; deren eigene Bedingungen und Datenschutzregeln gelten.'],
      ['4. Verfügbarkeit und Haftung', 'Das Spiel wird nach Verfügbarkeit bereitgestellt und kann geändert werden. Soweit gesetzlich zulässig, wird kein unterbrechungsfreier, fehlerfreier Betrieb oder die Eignung für einen bestimmten Zweck garantiert. Der Entwickler haftet nicht für indirekte Verluste, insbesondere den Verlust lokaler Daten. Unabdingbare gesetzliche Rechte bleiben unberührt. Fragen: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  vi: {
    privacyTitle: 'Chính sách quyền riêng tư', termsTitle: 'Điều khoản dịch vụ',
    privacy: [
      ['1. Phạm vi và dữ liệu trên thiết bị', 'Chính sách này áp dụng cho {game}, do Mohan MRKS phát triển. Trò chơi không yêu cầu tài khoản và không có dịch vụ lưu trữ trực tuyến do nhà phát triển vận hành. Tiến trình và cài đặt được lưu trên thiết bị để trò chơi hoạt động, không được gửi cho nhà phát triển.'],
      ['2. Tính năng thiết bị và chia sẻ', 'Âm thanh, rung và lời nhắc cục bộ (nếu có) sử dụng tính năng của thiết bị. Nếu bạn chia sẻ thông tin hoặc liên hệ hỗ trợ, ứng dụng chia sẻ hay email bạn chọn sẽ xử lý thông tin theo chính sách riêng.'],
      ['3. Lưu trữ và liên hệ', 'Dữ liệu trò chơi ở trên thiết bị cho đến khi bạn xóa dữ liệu ứng dụng hoặc gỡ trò chơi. Cài đặt sao lưu của thiết bị có thể ảnh hưởng đến việc lưu giữ. Tránh nhập thông tin nhạy cảm, đặc biệt trong tên người chơi. Liên hệ: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. Chấp thuận và cách sử dụng', 'Điều khoản này áp dụng cho {game}, do Mohan MRKS phát triển. Khi cài đặt hoặc sử dụng trò chơi, bạn đồng ý tuân thủ pháp luật và điều khoản này. Nếu không đồng ý, hãy ngừng sử dụng. Trò chơi chỉ nhằm mục đích giải trí.'],
      ['2. Tiến trình và trách nhiệm', 'Tiến trình và cài đặt được lưu trên thiết bị. Bạn chịu trách nhiệm bảo vệ thiết bị và tự sao lưu dữ liệu cần thiết. Xóa dữ liệu ứng dụng hoặc gỡ trò chơi có thể làm mất tiến trình. Không dùng trò chơi để gây hại, quấy rối hoặc giả danh người khác.'],
      ['3. Tính năng và dịch vụ bên thứ ba', 'Âm thanh, rung và lời nhắc cục bộ nếu có phụ thuộc vào tính năng và cài đặt thiết bị. Chia sẻ hoặc liên hệ hỗ trợ sẽ mở ứng dụng bên thứ ba; điều khoản và chính sách quyền riêng tư của ứng dụng đó được áp dụng.'],
      ['4. Tính khả dụng và trách nhiệm', 'Trò chơi được cung cấp tùy theo khả năng và có thể thay đổi. Trong phạm vi pháp luật cho phép, không bảo đảm hoạt động liên tục, không lỗi hoặc phù hợp mục đích cụ thể. Nhà phát triển không chịu trách nhiệm về thiệt hại gián tiếp, bao gồm mất dữ liệu trên thiết bị. Các quyền không thể bị loại trừ theo luật vẫn được giữ nguyên. Liên hệ: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  es: {
    privacyTitle: 'Política de privacidad', termsTitle: 'Términos del servicio',
    privacy: [
      ['1. Alcance y datos locales', 'Esta política se aplica a {game}, desarrollado por Mohan MRKS. El juego no requiere una cuenta ni ofrece un servicio de guardado en línea administrado por el desarrollador. El progreso y los ajustes se guardan en el dispositivo para ofrecer el juego y no se envían al desarrollador.'],
      ['2. Funciones del dispositivo y uso compartido', 'El sonido, la vibración y, cuando estén disponibles, los recordatorios locales utilizan funciones del dispositivo. Si comparte información o contacta con soporte, la aplicación de correo o uso compartido que elija tratará la información según sus propias políticas.'],
      ['3. Conservación y contacto', 'Los datos del juego permanecen en el dispositivo hasta que los elimine, borre los datos de la aplicación o desinstale el juego. La configuración de copias de seguridad del dispositivo puede afectar a su conservación. Evite introducir información sensible, especialmente en nombres de jugadores. Contacto: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. Aceptación y uso', 'Estos términos se aplican a {game}, desarrollado por Mohan MRKS. Al instalar o usar el juego, acepta cumplir la ley y estos términos. Si no está de acuerdo, deje de usarlo. El juego está destinado al entretenimiento.'],
      ['2. Progreso y responsabilidad', 'El progreso y los ajustes se guardan en su dispositivo. Usted es responsable de protegerlo y de mantener sus propias copias de seguridad. Borrar los datos de la aplicación o desinstalar el juego puede eliminar el progreso. No use el juego para perjudicar, acosar o suplantar a otras personas.'],
      ['3. Funciones y servicios de terceros', 'El sonido, la vibración y los recordatorios locales, si están disponibles, dependen de las funciones y ajustes del dispositivo. Compartir información o contactar con soporte abre una aplicación de terceros sujeta a sus propios términos y políticas de privacidad.'],
      ['4. Disponibilidad y responsabilidad', 'El juego se ofrece según su disponibilidad y puede cambiar. En la medida permitida por la ley, no se garantiza que funcione sin interrupciones o errores ni que sea adecuado para un fin concreto. El desarrollador no responde por pérdidas indirectas, incluida la pérdida de datos locales. Se mantienen los derechos que no puedan excluirse legalmente. Contacto: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  pt: {
    privacyTitle: 'Política de Privacidade', termsTitle: 'Termos de Serviço',
    privacy: [
      ['1. Escopo e dados locais', 'Esta política se aplica ao {game}, desenvolvido por Mohan MRKS. O jogo não exige conta nem oferece serviço de salvamento on-line operado pelo desenvolvedor. O progresso e as configurações ficam no dispositivo para fornecer os recursos do jogo e não são enviados ao desenvolvedor.'],
      ['2. Recursos do dispositivo e compartilhamento', 'Som, vibração e lembretes locais, quando disponíveis, usam recursos do dispositivo. Se você compartilhar informações ou contatar o suporte, o aplicativo de e-mail ou compartilhamento escolhido tratará os dados conforme suas próprias políticas.'],
      ['3. Retenção e contato', 'Os dados do jogo permanecem no dispositivo até que você os exclua, limpe os dados do aplicativo ou desinstale o jogo. As configurações de backup do dispositivo podem afetar a retenção. Evite inserir informações sensíveis, especialmente em nomes de jogadores. Contato: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. Aceitação e uso', 'Estes termos se aplicam ao {game}, desenvolvido por Mohan MRKS. Ao instalar ou usar o jogo, você concorda em cumprir a lei e estes termos. Se não concordar, interrompa o uso. O jogo destina-se ao entretenimento.'],
      ['2. Progresso e responsabilidade', 'O progresso e as configurações ficam no seu dispositivo. Você é responsável por proteger o dispositivo e manter seus próprios backups. Limpar os dados do aplicativo ou desinstalá-lo pode apagar o progresso. Não use o jogo para prejudicar, assediar ou se passar por outra pessoa.'],
      ['3. Recursos e serviços de terceiros', 'Som, vibração e lembretes locais, quando disponíveis, dependem dos recursos e das configurações do dispositivo. Compartilhar informações ou contatar o suporte abre um aplicativo de terceiros, sujeito aos próprios termos e políticas de privacidade.'],
      ['4. Disponibilidade e responsabilidade', 'O jogo é fornecido conforme a disponibilidade e pode mudar. Na medida permitida por lei, não há garantia de funcionamento contínuo, sem erros ou adequado a uma finalidade específica. O desenvolvedor não responde por perdas indiretas, incluindo perda de dados locais. Permanecem válidos os direitos que não podem ser excluídos por lei. Contato: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  ru: {
    privacyTitle: 'Политика конфиденциальности', termsTitle: 'Условия использования',
    privacy: [
      ['1. Область действия и локальные данные', 'Эта политика относится к игре {game}, разработанной Mohan MRKS. Для игры не нужна учетная запись, и она не использует облачное сохранение, управляемое разработчиком. Прогресс и настройки хранятся на устройстве для работы игры и не отправляются разработчику.'],
      ['2. Функции устройства и отправка данных', 'Звук, вибрация и доступные локальные напоминания используют функции устройства. Если вы делитесь информацией или обращаетесь в поддержку, выбранное приложение электронной почты или отправки данных обрабатывает ее по своим правилам.'],
      ['3. Хранение и связь', 'Данные игры остаются на устройстве, пока вы не удалите их, не очистите данные приложения или не удалите игру. Настройки резервного копирования устройства могут повлиять на сохранность данных. Не указывайте конфиденциальные сведения, особенно в именах игроков. Вопросы: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. Согласие и использование', 'Эти условия относятся к игре {game}, разработанной Mohan MRKS. Устанавливая или используя игру, вы соглашаетесь соблюдать закон и эти условия. Если вы не согласны, прекратите использование. Игра предназначена для развлечения.'],
      ['2. Прогресс и ответственность', 'Прогресс и настройки хранятся на вашем устройстве. Вы отвечаете за безопасность устройства и создание собственных резервных копий. Очистка данных приложения или его удаление может стереть прогресс. Не используйте игру для причинения вреда, преследования или выдачи себя за другого человека.'],
      ['3. Функции устройства и сторонние сервисы', 'Звук, вибрация и доступные локальные напоминания зависят от функций и настроек устройства. При отправке данных или обращении в поддержку открывается стороннее приложение, на которое распространяются его собственные условия и политика конфиденциальности.'],
      ['4. Доступность и ответственность', 'Игра предоставляется по мере доступности и может изменяться. В пределах, разрешенных законом, не гарантируется непрерывная или безошибочная работа либо пригодность для конкретной цели. Разработчик не отвечает за косвенный ущерб, включая потерю локальных данных. Неотчуждаемые права, предусмотренные законом, сохраняются. Вопросы: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  hi: {
    privacyTitle: 'गोपनीयता नीति', termsTitle: 'सेवा की शर्तें',
    privacy: [
      ['1. दायरा और स्थानीय जानकारी', 'यह नीति Mohan MRKS द्वारा विकसित {game} पर लागू होती है। गेम के लिए खाते की आवश्यकता नहीं है और डेवलपर द्वारा संचालित ऑनलाइन सेविंग सुविधा नहीं है। गेम की प्रगति और सेटिंग डिवाइस पर रखी जाती हैं और डेवलपर को नहीं भेजी जातीं।'],
      ['2. डिवाइस सुविधाएँ और साझा करना', 'ध्वनि, कंपन और उपलब्ध होने पर स्थानीय रिमाइंडर डिवाइस की सुविधाओं का उपयोग करते हैं। जानकारी साझा करने या सहायता से संपर्क करने पर चुना गया ईमेल या शेयरिंग ऐप अपनी गोपनीयता नीति के अनुसार जानकारी संभालता है।'],
      ['3. संग्रहण और संपर्क', 'गेम की जानकारी डिवाइस पर तब तक रहती है जब तक आप उसे हटाएँ, ऐप का डेटा साफ़ करें या गेम अनइंस्टॉल करें। डिवाइस बैकअप सेटिंग इसे प्रभावित कर सकती हैं। खासकर खिलाड़ी के नाम में संवेदनशील जानकारी न डालें। संपर्क: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>।'],
    ],
    terms: [
      ['1. सहमति और उपयोग', 'ये शर्तें Mohan MRKS द्वारा विकसित {game} पर लागू होती हैं। गेम इंस्टॉल या उपयोग करके आप कानून और इन शर्तों का पालन करने पर सहमत होते हैं। सहमत न हों तो उपयोग बंद करें। गेम मनोरंजन के लिए है।'],
      ['2. प्रगति और जिम्मेदारी', 'गेम की प्रगति और सेटिंग आपके डिवाइस पर रहती हैं। डिवाइस सुरक्षित रखना और अपनी बैकअप प्रतियाँ बनाना आपकी जिम्मेदारी है। ऐप का डेटा साफ़ करने या गेम हटाने से प्रगति मिट सकती है। गेम का उपयोग किसी को नुकसान पहुँचाने, परेशान करने या उसकी पहचान अपनाने के लिए न करें।'],
      ['3. डिवाइस सुविधाएँ और तृतीय पक्ष', 'ध्वनि, कंपन और उपलब्ध स्थानीय रिमाइंडर डिवाइस की सुविधाओं और सेटिंग पर निर्भर हैं। जानकारी साझा करने या सहायता से संपर्क करने पर तृतीय-पक्ष ऐप खुलता है और उसकी अपनी शर्तें व गोपनीयता नीति लागू होती हैं।'],
      ['4. उपलब्धता और दायित्व', 'गेम उपलब्धता के आधार पर दिया जाता है और बदल सकता है। कानून द्वारा अनुमत सीमा तक लगातार या त्रुटिरहित संचालन अथवा किसी विशेष उद्देश्य के लिए उपयुक्तता की गारंटी नहीं है। स्थानीय डेटा की हानि सहित अप्रत्यक्ष नुकसान के लिए डेवलपर जिम्मेदार नहीं है। कानून के तहत सीमित न किए जा सकने वाले अधिकार सुरक्षित हैं। संपर्क: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>।'],
    ],
  },
  mr: {
    privacyTitle: 'गोपनीयता धोरण', termsTitle: 'सेवा अटी',
    privacy: [
      ['१. व्याप्ती आणि स्थानिक माहिती', 'हे धोरण Mohan MRKS यांनी विकसित केलेल्या {game} ला लागू आहे. गेमसाठी खाते आवश्यक नाही आणि विकासक चालवत असलेली ऑनलाइन सेव्हिंग सेवा नाही. गेमची प्रगती आणि सेटिंग्ज डिव्हाइसवर साठवली जातात आणि विकासकाकडे पाठवली जात नाहीत.'],
      ['२. डिव्हाइस सुविधा आणि शेअरिंग', 'आवाज, कंपन आणि उपलब्ध असल्यास स्थानिक स्मरणपत्रे डिव्हाइसच्या सुविधा वापरतात. माहिती शेअर केल्यास किंवा मदतीसाठी संपर्क केल्यास निवडलेले ईमेल किंवा शेअरिंग अॅप स्वतःच्या गोपनीयता धोरणानुसार माहिती हाताळते.'],
      ['३. साठवण आणि संपर्क', 'तुम्ही माहिती हटवेपर्यंत, अॅपचा डेटा साफ करेपर्यंत किंवा गेम काढेपर्यंत गेमची माहिती डिव्हाइसवर राहते. डिव्हाइसच्या बॅकअप सेटिंग्जचा साठवणीवर परिणाम होऊ शकतो. विशेषतः खेळाडूंच्या नावांत संवेदनशील माहिती देऊ नका. संपर्क: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['१. सहमती आणि वापर', 'या अटी Mohan MRKS यांनी विकसित केलेल्या {game} ला लागू आहेत. गेम स्थापित किंवा वापरून तुम्ही कायदा आणि या अटींचे पालन करण्यास सहमत होता. सहमत नसल्यास वापर थांबवा. गेम मनोरंजनासाठी आहे.'],
      ['२. प्रगती आणि जबाबदारी', 'गेमची प्रगती आणि सेटिंग्ज तुमच्या डिव्हाइसवर साठवली जातात. डिव्हाइस सुरक्षित ठेवणे आणि स्वतः बॅकअप घेणे तुमची जबाबदारी आहे. अॅपचा डेटा साफ केल्यास किंवा गेम काढल्यास प्रगती पुसली जाऊ शकते. कोणाला हानी पोहोचवण्यासाठी, त्रास देण्यासाठी किंवा दुसऱ्याची ओळख धारण करण्यासाठी गेम वापरू नका.'],
      ['३. डिव्हाइस सुविधा आणि तृतीय पक्ष', 'आवाज, कंपन आणि उपलब्ध स्थानिक स्मरणपत्रे डिव्हाइसच्या सुविधा व सेटिंग्जवर अवलंबून असतात. माहिती शेअर करताना किंवा मदतीसाठी संपर्क करताना तृतीय-पक्ष अॅप उघडते; त्याच्या स्वतःच्या अटी आणि गोपनीयता धोरण लागू होतात.'],
      ['४. उपलब्धता आणि दायित्व', 'गेम उपलब्धतेनुसार दिला जातो आणि बदलू शकतो. कायद्याने अनुमत मर्यादेत अखंड किंवा त्रुटीमुक्त कामकाज अथवा विशिष्ट उपयोगासाठी योग्यतेची हमी नाही. स्थानिक माहिती गमावण्यासह अप्रत्यक्ष हानीसाठी विकासक जबाबदार नाही. कायद्याने वगळता न येणारे अधिकार कायम राहतात. संपर्क: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  bn: {
    privacyTitle: 'গোপনীয়তা নীতি', termsTitle: 'পরিষেবার শর্তাবলী',
    privacy: [
      ['১. পরিধি ও স্থানীয় তথ্য', 'এই নীতি Mohan MRKS-এর তৈরি {game}-এর জন্য প্রযোজ্য। গেমে অ্যাকাউন্টের প্রয়োজন নেই এবং ডেভেলপার পরিচালিত অনলাইন সংরক্ষণ পরিষেবাও নেই। গেমের অগ্রগতি ও সেটিংস ডিভাইসে রাখা হয় এবং ডেভেলপারের কাছে পাঠানো হয় না।'],
      ['২. ডিভাইসের সুবিধা ও শেয়ার', 'শব্দ, কম্পন এবং উপলভ্য হলে স্থানীয় অনুস্মারক ডিভাইসের সুবিধা ব্যবহার করে। তথ্য শেয়ার করলে বা সহায়তায় যোগাযোগ করলে আপনার নির্বাচিত ইমেইল বা শেয়ারিং অ্যাপ নিজস্ব গোপনীয়তা নীতি অনুযায়ী তথ্য পরিচালনা করে।'],
      ['৩. সংরক্ষণ ও যোগাযোগ', 'আপনি মুছে না দেওয়া, অ্যাপের তথ্য পরিষ্কার না করা বা গেম আনইনস্টল না করা পর্যন্ত গেমের তথ্য ডিভাইসে থাকে। ডিভাইসের ব্যাকআপ সেটিংস সংরক্ষণে প্রভাব ফেলতে পারে। বিশেষ করে খেলোয়াড়ের নামে সংবেদনশীল তথ্য দেবেন না। যোগাযোগ: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>।'],
    ],
    terms: [
      ['১. সম্মতি ও ব্যবহার', 'এই শর্তাবলী Mohan MRKS-এর তৈরি {game}-এর জন্য প্রযোজ্য। গেম ইনস্টল বা ব্যবহার করে আপনি আইন ও এই শর্ত মেনে চলতে সম্মত হন। সম্মত না হলে ব্যবহার বন্ধ করুন। গেমটি বিনোদনের জন্য।'],
      ['২. অগ্রগতি ও দায়িত্ব', 'গেমের অগ্রগতি ও সেটিংস আপনার ডিভাইসে থাকে। ডিভাইস সুরক্ষিত রাখা এবং নিজের ব্যাকআপ রাখার দায় আপনার। অ্যাপের তথ্য মুছলে বা গেম সরালে অগ্রগতি হারাতে পারেন। কাউকে ক্ষতি, হয়রানি বা ছদ্মবেশ ধারণের জন্য গেম ব্যবহার করবেন না।'],
      ['৩. ডিভাইসের সুবিধা ও তৃতীয় পক্ষ', 'শব্দ, কম্পন এবং উপলভ্য স্থানীয় অনুস্মারক ডিভাইসের সুবিধা ও সেটিংসের ওপর নির্ভরশীল। তথ্য শেয়ার বা সহায়তায় যোগাযোগ করলে তৃতীয়-পক্ষ অ্যাপ খোলে; সেই অ্যাপের নিজস্ব শর্ত ও গোপনীয়তা নীতি প্রযোজ্য।'],
      ['৪. প্রাপ্যতা ও দায়', 'গেমটি প্রাপ্যতার ভিত্তিতে দেওয়া হয় এবং পরিবর্তিত হতে পারে। আইন যতটুকু অনুমতি দেয়, নিরবচ্ছিন্ন বা ত্রুটিমুক্ত কাজ কিংবা নির্দিষ্ট উদ্দেশ্যে উপযোগিতার নিশ্চয়তা নেই। স্থানীয় তথ্য হারানোসহ পরোক্ষ ক্ষতির জন্য ডেভেলপার দায়ী নয়। আইন অনুযায়ী বাদ দেওয়া যায় না এমন অধিকার অক্ষুণ্ণ থাকে। যোগাযোগ: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>।'],
    ],
  },
  te: {
    privacyTitle: 'గోప్యతా విధానం', termsTitle: 'సేవా నిబంధనలు',
    privacy: [
      ['1. పరిధి మరియు స్థానిక సమాచారం', 'ఈ విధానం Mohan MRKS రూపొందించిన {game}కు వర్తిస్తుంది. గేమ్‌కు ఖాతా అవసరం లేదు; డెవలపర్ నిర్వహించే ఆన్‌లైన్ సేవ్ సదుపాయం లేదు. గేమ్ పురోగతి, సెట్టింగ్‌లు పరికరంలోనే ఉంటాయి; డెవలపర్‌కు పంపబడవు.'],
      ['2. పరికర ఫీచర్లు మరియు షేరింగ్', 'శబ్దం, వైబ్రేషన్, అందుబాటులో ఉన్న స్థానిక రిమైండర్‌లు పరికర ఫీచర్లను ఉపయోగిస్తాయి. సమాచారం షేర్ చేసినా లేదా మద్దతును సంప్రదించినా, మీరు ఎంచుకున్న ఇమెయిల్ లేదా షేరింగ్ యాప్ తన గోప్యతా విధానం ప్రకారం దాన్ని నిర్వహిస్తుంది.'],
      ['3. నిల్వ మరియు సంప్రదింపు', 'మీరు తొలగించే వరకు, యాప్ డేటాను క్లియర్ చేసే వరకు లేదా గేమ్‌ను అన్‌ఇన్‌స్టాల్ చేసే వరకు గేమ్ సమాచారం పరికరంలో ఉంటుంది. పరికర బ్యాకప్ సెట్టింగ్‌లు నిల్వను ప్రభావితం చేయవచ్చు. ముఖ్యంగా ఆటగాడి పేర్లలో సున్నితమైన సమాచారాన్ని నమోదు చేయవద్దు. సంప్రదింపు: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. అంగీకారం మరియు వినియోగం', 'ఈ నిబంధనలు Mohan MRKS రూపొందించిన {game}కు వర్తిస్తాయి. గేమ్‌ను ఇన్‌స్టాల్ చేయడం లేదా ఉపయోగించడం ద్వారా మీరు చట్టం మరియు ఈ నిబంధనలను పాటించడానికి అంగీకరిస్తారు. అంగీకరించకపోతే వినియోగం ఆపండి. గేమ్ వినోదం కోసం.'],
      ['2. పురోగతి మరియు బాధ్యత', 'గేమ్ పురోగతి, సెట్టింగ్‌లు మీ పరికరంలో ఉంటాయి. పరికరాన్ని భద్రపరచడం, మీ బ్యాకప్‌లు ఉంచడం మీ బాధ్యత. యాప్ డేటా తొలగించడం లేదా గేమ్‌ను తీసివేయడం వల్ల పురోగతి పోవచ్చు. ఇతరులకు హాని, వేధింపు లేదా వేషధారణ కోసం గేమ్‌ను ఉపయోగించవద్దు.'],
      ['3. పరికర ఫీచర్లు మరియు మూడవ పక్షాలు', 'శబ్దం, వైబ్రేషన్, అందుబాటులో ఉన్న స్థానిక రిమైండర్‌లు పరికర ఫీచర్లు మరియు సెట్టింగ్‌లపై ఆధారపడతాయి. షేరింగ్ లేదా మద్దతు కోసం మూడవ పక్ష యాప్ తెరుచుకుంటుంది; దాని స్వంత నిబంధనలు, గోప్యతా విధానం వర్తిస్తాయి.'],
      ['4. లభ్యత మరియు బాధ్యత', 'గేమ్ లభ్యత మేరకు అందించబడుతుంది, మారవచ్చు. చట్టం అనుమతించే మేరకు నిరంతర, లోపరహిత పని లేదా నిర్దిష్ట ప్రయోజనానికి అనుకూలతపై హామీ లేదు. స్థానిక డేటా నష్టంతో సహా పరోక్ష నష్టాలకు డెవలపర్ బాధ్యుడు కాదు. చట్టం ప్రకారం మినహాయించలేని హక్కులు యథాతథంగా ఉంటాయి. సంప్రదింపు: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  ta: {
    privacyTitle: 'தனியுரிமைக் கொள்கை', termsTitle: 'சேவை விதிமுறைகள்',
    privacy: [
      ['1. வரம்பும் உள்ளூர் தகவலும்', 'இந்தக் கொள்கை Mohan MRKS உருவாக்கிய {game} விளையாட்டிற்குப் பொருந்தும். கணக்கு தேவையில்லை; உருவாக்குநர் இயக்கும் இணையச் சேமிப்பு சேவையும் இல்லை. விளையாட்டு முன்னேற்றமும் அமைப்புகளும் சாதனத்தில் சேமிக்கப்படும்; உருவாக்குநருக்கு அனுப்பப்படாது.'],
      ['2. சாதன அம்சங்களும் பகிர்வும்', 'ஒலி, அதிர்வு மற்றும் கிடைக்கும் உள்ளூர் நினைவூட்டல்கள் சாதன அம்சங்களைப் பயன்படுத்துகின்றன. தகவலைப் பகிர்ந்தால் அல்லது ஆதரவைத் தொடர்புகொண்டால், நீங்கள் தேர்ந்தெடுத்த மின்னஞ்சல் அல்லது பகிர்வு செயலி அதன் தனியுரிமைக் கொள்கையின்படி தகவலைக் கையாளும்.'],
      ['3. சேமிப்பும் தொடர்பும்', 'நீங்கள் நீக்கும் வரை, செயலித் தரவை அழிக்கும் வரை அல்லது விளையாட்டை நிறுவல் நீக்கும் வரை தகவல் சாதனத்தில் இருக்கும். சாதனக் காப்புப்பிரதி அமைப்புகள் இதை மாற்றலாம். குறிப்பாக வீரர் பெயர்களில் முக்கியமான தனிப்பட்ட தகவலை உள்ளிட வேண்டாம். தொடர்பு: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. ஒப்புதலும் பயன்பாடும்', 'இந்த விதிமுறைகள் Mohan MRKS உருவாக்கிய {game} விளையாட்டிற்குப் பொருந்தும். நிறுவுவதன் அல்லது பயன்படுத்துவதன் மூலம் சட்டத்தையும் இந்த விதிமுறைகளையும் பின்பற்ற ஒப்புக்கொள்கிறீர்கள். ஒப்புக்கொள்ளாவிட்டால் பயன்பாட்டை நிறுத்தவும். இது பொழுதுபோக்குக்கான விளையாட்டு.'],
      ['2. முன்னேற்றமும் பொறுப்பும்', 'விளையாட்டு முன்னேற்றமும் அமைப்புகளும் உங்கள் சாதனத்தில் சேமிக்கப்படும். சாதனத்தைப் பாதுகாப்பதும் காப்புப்பிரதி எடுப்பதும் உங்கள் பொறுப்பு. செயலித் தரவை அழிப்பது அல்லது விளையாட்டை நீக்குவது முன்னேற்றத்தை இழக்கச் செய்யலாம். பிறருக்குத் தீங்கு செய்ய, தொந்தரவு செய்ய அல்லது போலியாக நடிக்க விளையாட்டைப் பயன்படுத்த வேண்டாம்.'],
      ['3. சாதன அம்சங்களும் மூன்றாம் தரப்பும்', 'ஒலி, அதிர்வு மற்றும் உள்ளூர் நினைவூட்டல்கள் சாதனத்தின் அம்சங்கள் மற்றும் அமைப்புகளைச் சார்ந்தவை. பகிர்வு அல்லது ஆதரவைத் தொடர்புகொள்வது மூன்றாம் தரப்பு செயலியைத் திறக்கும்; அதன் விதிமுறைகளும் தனியுரிமைக் கொள்கையும் பொருந்தும்.'],
      ['4. கிடைப்பும் பொறுப்பும்', 'விளையாட்டு கிடைக்கும் நிலையில் வழங்கப்படுகிறது; மாறலாம். சட்டம் அனுமதிக்கும் வரையில் தடையற்ற, பிழையற்ற செயல்பாடு அல்லது குறிப்பிட்ட நோக்கத்திற்கான பொருத்தம் உறுதி செய்யப்படாது. உள்ளூர் தகவல் இழப்பு உட்பட மறைமுக இழப்புகளுக்கு உருவாக்குநர் பொறுப்பல்ல. சட்டப்படி விலக்க முடியாத உரிமைகள் பாதிக்கப்படாது. தொடர்பு: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  tr: {
    privacyTitle: 'Gizlilik Politikası', termsTitle: 'Hizmet Şartları',
    privacy: [
      ['1. Kapsam ve yerel bilgiler', 'Bu politika Mohan MRKS tarafından geliştirilen {game} için geçerlidir. Oyun hesap gerektirmez ve geliştiricinin işlettiği çevrim içi kayıt hizmeti sunmaz. Oyun ilerlemesi ve ayarlar cihazınızda tutulur ve geliştiriciye gönderilmez.'],
      ['2. Cihaz özellikleri ve paylaşım', 'Ses, titreşim ve varsa yerel hatırlatıcılar cihaz özelliklerini kullanır. Bilgi paylaşırsanız veya desteğe ulaşırsanız, seçtiğiniz e-posta ya da paylaşım uygulaması bilgileri kendi gizlilik politikasına göre işler.'],
      ['3. Saklama ve iletişim', 'Oyun bilgileri siz silene, uygulama verilerini temizleyene veya oyunu kaldırana kadar cihazda kalır. Cihaz yedekleme ayarları saklamayı etkileyebilir. Özellikle oyuncu adlarına hassas kişisel bilgiler yazmayın. İletişim: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. Kabul ve kullanım', 'Bu şartlar Mohan MRKS tarafından geliştirilen {game} için geçerlidir. Oyunu yükleyerek veya kullanarak yasalara ve bu şartlara uymayı kabul edersiniz. Kabul etmiyorsanız kullanmayı bırakın. Oyun eğlence amaçlıdır.'],
      ['2. İlerleme ve sorumluluk', 'Oyun ilerlemesi ve ayarlar cihazınızda saklanır. Cihazınızı korumak ve kendi yedeklerinizi almak size aittir. Uygulama verilerini silmek veya oyunu kaldırmak ilerlemenizi silebilir. Oyunu başkalarına zarar vermek, taciz etmek veya kimliğine bürünmek için kullanmayın.'],
      ['3. Cihaz özellikleri ve üçüncü taraflar', 'Ses, titreşim ve varsa yerel hatırlatıcılar cihaz özelliklerine ve ayarlarına bağlıdır. Bilgi paylaşımı veya destek iletişimi üçüncü taraf uygulamasını açar; o uygulamanın kendi şartları ve gizlilik politikası geçerlidir.'],
      ['4. Kullanılabilirlik ve sorumluluk', 'Oyun mevcut olduğu şekilde sunulur ve değişebilir. Yasaların izin verdiği ölçüde kesintisiz, hatasız çalışma ya da belirli bir amaca uygunluk garantisi verilmez. Geliştirici, yerel veri kaybı dâhil dolaylı zararlardan sorumlu değildir. Yasayla kaldırılamayan haklar saklıdır. İletişim: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  ja: {
    privacyTitle: 'プライバシーポリシー', termsTitle: '利用規約',
    privacy: [
      ['1. 適用範囲と端末内の情報', '本ポリシーは Mohan MRKS が開発した {game} に適用されます。アカウントは不要で、開発者が運営するオンライン保存サービスもありません。ゲームの進行状況と設定はゲームの提供に必要な範囲で端末に保存され、開発者には送信されません。'],
      ['2. 端末機能と共有', '音声、振動、利用可能なローカル通知は端末の機能を使用します。情報を共有したりサポートへ連絡したりする場合、選択したメールまたは共有アプリのポリシーに従って情報が扱われます。'],
      ['3. 保存と連絡先', '情報は削除、アプリデータの消去、またはゲームのアンインストールまで端末に残ります。端末のバックアップ設定によって保存状況が変わる場合があります。プレイヤー名などに機密情報を入力しないでください。連絡先: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>。'],
    ],
    terms: [
      ['1. 同意と利用', '本規約は Mohan MRKS が開発した {game} に適用されます。インストールまたは利用により、法律と本規約に従うことに同意したものとします。同意できない場合は利用を中止してください。本ゲームは娯楽目的です。'],
      ['2. 進行状況と責任', '進行状況と設定は端末に保存されます。端末の保護とバックアップは利用者の責任です。アプリデータの消去やアンインストールで進行状況が失われる場合があります。他人への危害、嫌がらせ、なりすましに使用しないでください。'],
      ['3. 端末機能と第三者サービス', '音声、振動、利用可能なローカル通知は端末の機能や設定に依存します。共有やサポートへの連絡では第三者アプリが開き、その利用規約とプライバシーポリシーが適用されます。'],
      ['4. 提供状況と責任', '本ゲームは提供可能な状態で提供され、変更される場合があります。法律で認められる範囲で、中断やエラーがないこと、特定目的に適合することを保証しません。開発者は端末内データの損失を含む間接的な損害について責任を負いません。法律上排除できない権利は制限されません。連絡先: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>。'],
    ],
  },
  zh: {
    privacyTitle: '隐私政策', termsTitle: '服务条款',
    privacy: [
      ['1. 适用范围和本地信息', '本政策适用于由 Mohan MRKS 开发的 {game}。游戏无需账户，也不提供由开发者运营的在线存档服务。游戏进度和设置保存在您的设备上以提供游戏功能，不会发送给开发者。'],
      ['2. 设备功能和分享', '声音、振动以及可用的本地提醒会使用设备功能。分享信息或联系支持时，您选择的邮件或分享应用会按照其自身隐私政策处理信息。'],
      ['3. 保存和联系', '游戏信息会保留在设备上，直到您删除、清除应用数据或卸载游戏。设备备份设置可能影响信息的保留。请勿在玩家名称等位置填写敏感个人信息。联系：<a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>。'],
    ],
    terms: [
      ['1. 同意与使用', '本条款适用于由 Mohan MRKS 开发的 {game}。安装或使用游戏即表示您同意遵守法律和本条款。如不同意，请停止使用。游戏仅供娱乐。'],
      ['2. 游戏进度和责任', '游戏进度和设置保存在您的设备上。您负责保护设备并自行备份。清除应用数据或卸载游戏可能导致进度丢失。请勿利用游戏伤害、骚扰他人或冒充他人。'],
      ['3. 设备功能和第三方服务', '声音、振动以及可用的本地提醒取决于设备功能和设置。分享信息或联系支持时会打开第三方应用，并受该应用自己的条款和隐私政策约束。'],
      ['4. 可用性和责任', '游戏按可用状态提供，且可能发生变化。在法律允许的范围内，不保证持续、无错误运行或适合特定用途。开发者不对间接损失负责，包括设备本地数据丢失。法律规定不可排除的权利不受影响。联系：<a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>。'],
    ],
  },
  sw: {
    privacyTitle: 'Sera ya Faragha', termsTitle: 'Masharti ya Huduma',
    privacy: [
      ['1. Wigo na taarifa za ndani ya kifaa', 'Sera hii inahusu {game}, iliyotengenezwa na Mohan MRKS. Mchezo hauhitaji akaunti wala huduma ya kuhifadhi mtandaoni inayoendeshwa na msanidi. Maendeleo na mipangilio ya mchezo huhifadhiwa kwenye kifaa chako kwa ajili ya mchezo na hazitumwi kwa msanidi.'],
      ['2. Vipengele vya kifaa na kushiriki', 'Sauti, mtetemo na vikumbusho vya ndani ya kifaa vinapopatikana hutumia vipengele vya kifaa chako. Ukishiriki taarifa au kuwasiliana na usaidizi, programu ya barua pepe au kushiriki uliyochagua hushughulikia taarifa kulingana na sera yake ya faragha.'],
      ['3. Uhifadhi na mawasiliano', 'Taarifa za mchezo hubaki kwenye kifaa hadi uzifute, ufute data ya programu au uondoe mchezo. Mipangilio ya nakala rudufu ya kifaa inaweza kuathiri uhifadhi. Epuka kuweka taarifa nyeti, hasa kwenye majina ya wachezaji. Wasiliana: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. Kukubali na matumizi', 'Masharti haya yanahusu {game}, iliyotengenezwa na Mohan MRKS. Kwa kusakinisha au kutumia mchezo, unakubali kufuata sheria na masharti haya. Usipokubali, acha kuutumia. Mchezo ni kwa burudani.'],
      ['2. Maendeleo na wajibu', 'Maendeleo na mipangilio ya mchezo huhifadhiwa kwenye kifaa chako. Una wajibu wa kulinda kifaa na kuweka nakala zako rudufu. Kufuta data ya programu au kuondoa mchezo kunaweza kufuta maendeleo. Usitumie mchezo kuwadhuru, kuwanyanyasa au kuiga utambulisho wa wengine.'],
      ['3. Vipengele vya kifaa na huduma za wengine', 'Sauti, mtetemo na vikumbusho vya ndani vinapopatikana hutegemea vipengele na mipangilio ya kifaa. Kushiriki taarifa au kuwasiliana na usaidizi hufungua programu ya mtu mwingine, ambayo ina masharti na sera yake ya faragha.'],
      ['4. Upatikanaji na uwajibikaji', 'Mchezo hutolewa kulingana na upatikanaji na unaweza kubadilika. Kwa kiwango kinachoruhusiwa na sheria, hakuna dhamana ya kutopata hitilafu, kukatika au kufaa kwa matumizi fulani. Msanidi hawajibiki kwa hasara zisizo za moja kwa moja, ikiwemo kupotea kwa data ya ndani. Haki ambazo haziwezi kuondolewa kisheria zinaendelea kutumika. Wasiliana: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  ha: {
    privacyTitle: 'Manufar Sirri', termsTitle: 'Sharuɗɗan Sabis',
    privacy: [
      ['1. Iyaka da bayanan na’ura', 'Wannan manufa ta shafi {game}, wanda Mohan MRKS ya ƙirƙira. Wasan ba ya buƙatar asusu kuma ba shi da sabis ɗin ajiyar intanet da mai haɓakawa ke sarrafawa. Ana adana ci gaban wasa da saituna a na’urarka domin wasan ya yi aiki; ba a aika su ga mai haɓakawa.'],
      ['2. Ayyukan na’ura da rabawa', 'Sauti, jijjiga da tunatarwar cikin na’ura idan akwai suna amfani da fasalolin na’urarka. Idan ka raba bayani ko ka tuntuɓi tallafi, manhajar imel ko rabawa da ka zaɓa za ta bi manufarta ta sirri.'],
      ['3. Adanawa da tuntuɓa', 'Bayanan wasa suna nan a na’urarka har sai ka goge su, ka share bayanan manhajar ko ka cire wasan. Saitunan ajiyar na’ura na iya shafar adanawa. Ka guji shigar da bayanan sirri, musamman cikin sunayen ’yan wasa. Tuntuɓa: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. Yarda da amfani', 'Waɗannan sharuɗɗa sun shafi {game}, wanda Mohan MRKS ya ƙirƙira. Ta shigarwa ko amfani da wasan, ka yarda ka bi doka da waɗannan sharuɗɗa. Idan ba ka yarda ba, ka daina amfani da shi. Wasan don nishaɗi ne.'],
      ['2. Ci gaba da alhaki', 'Ana adana ci gaba da saitunan wasa a na’urarka. Kai ne ke da alhakin kare na’urarka da yin ajiyar bayananka. Share bayanan manhaja ko cire wasan na iya goge ci gaba. Kada ka yi amfani da wasan don cutarwa, cin zarafi ko kwaikwayon wani.'],
      ['3. Ayyukan na’ura da wasu ayyuka', 'Sauti, jijjiga da tunatarwar cikin na’ura idan akwai sun dogara da fasaloli da saitunan na’urarka. Rabawa ko tuntuɓar tallafi yana buɗe manhajar wani, wadda ke da nata sharuɗɗa da manufar sirri.'],
      ['4. Samuwa da alhaki', 'Ana ba da wasan gwargwadon samuwa kuma yana iya canzawa. Gwargwadon abin da doka ta yarda, ba a tabbatar da aiki ba tare da katsewa ko kuskure ba ko dacewa da wata manufa. Mai haɓakawa ba ya da alhakin asara kai tsaye ko ta gefe, ciki har da asarar bayanan na’ura. Haƙƙoƙin da doka ta hana cirewa suna nan daram. Tuntuɓa: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
  id: {
    privacyTitle: 'Kebijakan Privasi', termsTitle: 'Ketentuan Layanan',
    privacy: [
      ['1. Cakupan dan informasi lokal', 'Kebijakan ini berlaku untuk {game} yang dikembangkan oleh Mohan MRKS. Game tidak memerlukan akun dan tidak menyediakan layanan penyimpanan daring yang dikelola pengembang. Progres dan pengaturan game disimpan di perangkat untuk menjalankan game dan tidak dikirim kepada pengembang.'],
      ['2. Fitur perangkat dan berbagi', 'Suara, getaran, dan pengingat lokal jika tersedia menggunakan fitur perangkat Anda. Jika Anda membagikan informasi atau menghubungi dukungan, aplikasi email atau berbagi yang dipilih akan menangani informasi sesuai kebijakan privasinya sendiri.'],
      ['3. Penyimpanan dan kontak', 'Informasi game tetap di perangkat sampai Anda menghapusnya, membersihkan data aplikasi, atau mencopot game. Pengaturan pencadangan perangkat dapat memengaruhi penyimpanan. Hindari memasukkan informasi sensitif, terutama pada nama pemain. Kontak: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
    terms: [
      ['1. Persetujuan dan penggunaan', 'Ketentuan ini berlaku untuk {game} yang dikembangkan oleh Mohan MRKS. Dengan memasang atau menggunakan game, Anda setuju mematuhi hukum dan ketentuan ini. Jika tidak setuju, hentikan penggunaan. Game ini ditujukan untuk hiburan.'],
      ['2. Progres dan tanggung jawab', 'Progres dan pengaturan game disimpan di perangkat Anda. Anda bertanggung jawab melindungi perangkat dan membuat cadangan sendiri. Menghapus data aplikasi atau mencopot game dapat menghapus progres. Jangan gunakan game untuk merugikan, melecehkan, atau menyamar sebagai orang lain.'],
      ['3. Fitur perangkat dan layanan pihak ketiga', 'Suara, getaran, dan pengingat lokal jika tersedia bergantung pada fitur dan pengaturan perangkat. Berbagi informasi atau menghubungi dukungan akan membuka aplikasi pihak ketiga yang tunduk pada ketentuan dan kebijakan privasinya sendiri.'],
      ['4. Ketersediaan dan tanggung jawab', 'Game disediakan sesuai ketersediaan dan dapat berubah. Sejauh diizinkan hukum, tidak ada jaminan operasi tanpa gangguan atau kesalahan maupun kesesuaian untuk tujuan tertentu. Pengembang tidak bertanggung jawab atas kerugian tidak langsung, termasuk kehilangan data lokal. Hak yang tidak dapat dikesampingkan oleh hukum tetap berlaku. Kontak: <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.'],
    ],
  },
};

function renderSections(sections, gameName) {
  return sections
    .map(([heading, paragraph]) => `<h2>${heading}</h2><p>${paragraph.replaceAll('{game}', gameName)}</p>`)
    .join('\n');
}

export function getLocalizedGameLegalDoc(appId, docType, locale) {
  const normalizedLocale = String(locale || '').toLowerCase().replaceAll('-', '_');
  const copy = translations[normalizedLocale];
  const gameName = gameNames[appId];
  if (!copy || !gameName || !['privacy_policy', 'terms_of_service'].includes(docType)) {
    return null;
  }

  const isPrivacy = docType === 'privacy_policy';
  return {
    appId,
    docType,
    lang: normalizedLocale,
    title: isPrivacy ? copy.privacyTitle : copy.termsTitle,
    subtitle: gameName,
    content: renderSections(isPrivacy ? copy.privacy : copy.terms, gameName),
  };
}
