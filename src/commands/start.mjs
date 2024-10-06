export const startCommand = async (client) => {
    client.command('start', async (ctx) => {
        const message_id = ctx?.message?.message_id;
        const firstName = ctx.from.first_name || 'المستخدم'; // استخدم اسم المستخدم إذا كان موجودًا
        const botName = process.env.BOT_NAME || 'البوت'; // استيراد اسم البوت من ملف .env، افتراضياً "البوت"

        const welcomeMessage = `✨ مرحبًا بك، ${firstName}! ✨\n\n` +
            `أهلاً بك في بوت ${botName}، البوت الإسلامي الذي يسعى لخدمتك. \n` +
            `يوفر لك هذا البوت مجموعة من الميزات التي تلبي احتياجاتك كمسلم، ومن أبرزها: \n\n` +
            `1. **البحث عن الآيات القرآنية:**\n` +
            `   يمكنك البحث عن آية معينة بكتابة كلمة "بحث" متبوعة بموضوع الآية. على سبيل المثال: "بحث (الآية الكريمة)".\n\n` +
            `💡 لمزيد من المعلومات حول البوت يمكنك استخدام الأمر /help.`

        await ctx.reply(welcomeMessage, { parse_mode: 'Markdown', reply_to_message_id: message_id });
    });
};
