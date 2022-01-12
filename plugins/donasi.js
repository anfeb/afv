let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Dana  [087773973701]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6287773973701
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
