module.exports = {
  name: "clear",
  description: "This function is clearing cache/temporary messages!",
  async execute(message, args) {
    if(!args[0]) return message.reply('Harap masukkan jumlah pesan yang ingin dihapus!');
    if(isNaN(args[0])) return message.reply('Mohon masukkan angka yang asli!');

    if(args[0] > 100) return message.reply('Kamu tidak bisa menghapus lebih dari 100 pesan!');
    if(args[0] < 1) return message.reply('Kamu harus menghapus minimal 1 pesan!');

    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
        message.channel.bulkDelete(messages);
    });
  }
}