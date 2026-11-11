const documents = {
  ludo: {
    title: 'Terms of Service',
    subtitle: 'Ludo Bear',
    content: `<h2>1. Agreement and permitted use</h2>
<p>These terms apply to Ludo Bear, developed by Mohan MRKS. By installing or using the game, you agree to use it lawfully and in accordance with these terms. If you do not agree, stop using the game.</p>
<h2>2. Gameplay and player information</h2>
<p>Ludo Bear provides local gameplay against computer-controlled players and pass-and-play with people using the same device. You are responsible for player names and other information you enter. Do not enter sensitive personal information or use the game to harass, impersonate, or harm others.</p>
<h2>3. Game progress and device storage</h2>
<p>Settings, player information, coins, match history, and other game progress are stored on your device. You are responsible for protecting your device and keeping any backups you need. Clearing app data, uninstalling the game, or device backup settings may affect saved progress.</p>
<h2>4. Device features and sharing</h2>
<p>Optional reminders, sound, and haptic feedback use features provided by your device. Sharing game information or contacting support opens a third-party app you choose; that app's own terms and privacy policy apply. Reminders depend on device settings and may not always appear at the expected time.</p>
<h2>5. Availability and liability</h2>
<p>The game is provided as available and may change. To the extent permitted by law, no warranty is made that it will be uninterrupted, error-free, or suitable for a particular purpose. To the extent permitted by law, the developer is not liable for indirect or consequential loss arising from use of the game, including loss of locally stored progress. These terms do not limit rights that cannot be excluded under applicable law.</p>
<h2>6. Changes and contact</h2>
<p>These terms may be updated when the game changes. Questions can be sent to <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
  },
  knife_strike: {
    title: 'Terms of Service',
    subtitle: 'Knife Strike',
    content: `<h2>1. Agreement and permitted use</h2>
<p>These terms apply to Knife Strike, developed by Mohan MRKS. By installing or using the game, you agree to use it lawfully and in accordance with these terms. If you do not agree, stop using the game.</p>
<h2>2. Gameplay and safety</h2>
<p>Knife Strike is an arcade game for entertainment. Game actions are simulated and are not instructions for handling or throwing real objects. Do not imitate gameplay in a way that could injure you or another person. You are responsible for player names or information you choose to enter.</p>
<h2>3. Game progress and device storage</h2>
<p>Unlocked stages, game currency, selected blades, settings, and other progress are stored on your device. You are responsible for protecting your device and keeping any backups you need. Clearing app data, uninstalling the game, or device backup settings may affect saved progress.</p>
<h2>4. Device features and external apps</h2>
<p>Sound, haptic feedback, and optional local reminders use features provided by your device. The game does not need microphone access for gameplay. Sharing a result or contacting support opens a third-party app; that app's own terms and privacy policy apply.</p>
<h2>5. Availability and liability</h2>
<p>The game is provided as available and may change. To the extent permitted by law, no warranty is made that it will be uninterrupted, error-free, or suitable for a particular purpose. To the extent permitted by law, the developer is not liable for indirect or consequential loss arising from use of the game, including loss of locally stored progress. These terms do not limit rights that cannot be excluded under applicable law.</p>
<h2>6. Changes and contact</h2>
<p>These terms may be updated when the game changes. Questions can be sent to <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
  },
  block_blast: {
    title: 'Terms of Service',
    subtitle: 'Block Blast',
    content: `<h2>1. Agreement and permitted use</h2>
<p>These terms apply to Block Blast, developed by Mohan MRKS. By installing or using the game, you agree to use it lawfully and in accordance with these terms. If you do not agree, stop using the game.</p>
<h2>2. Gameplay and in-game progress</h2>
<p>Block Blast is a puzzle game for entertainment. Levels, scores, coins, skins, power-ups, and other game progress are for use within the game and have no cash value outside it. Do not use the game to harass, impersonate, or harm others.</p>
<h2>3. Game data and device storage</h2>
<p>Game progress, preferences, sound and vibration settings, and language selection are stored on your device. You are responsible for protecting your device and keeping any backups you need. Clearing app data, uninstalling the game, or device backup settings may affect saved progress.</p>
<h2>4. Sharing and external apps</h2>
<p>Sound and vibration use features provided by your device. Sharing game information or contacting support opens a third-party app you choose; that app's own terms and privacy policy apply.</p>
<h2>5. Availability and liability</h2>
<p>The game is provided as available and may change. To the extent permitted by law, no warranty is made that it will be uninterrupted, error-free, or suitable for a particular purpose. To the extent permitted by law, the developer is not liable for indirect or consequential loss arising from use of the game, including loss of locally stored progress. These terms do not limit rights that cannot be excluded under applicable law.</p>
<h2>6. Changes and contact</h2>
<p>These terms may be updated when the game changes. Questions can be sent to <a href="mailto:mohanmrks@yandex.com">mohanmrks@yandex.com</a>.</p>`,
  },
};

export function getSupplementalGameLegalDoc(appId, docType) {
  if (docType !== 'terms_of_service') return null;

  const document = documents[appId];
  if (!document) return null;

  return {
    appId,
    docType,
    lang: 'en',
    ...document,
  };
}
