function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '6282324892737', 'Fokus Dot Id', m)
  this.sendContact(m.chat, '6287772343860', 'anfebn', m)

  
}
handler.help = ['owner', 'creator']
handler.tags = ['about']

handler.command = /^(owner|creator)$/i

module.exports = handler
