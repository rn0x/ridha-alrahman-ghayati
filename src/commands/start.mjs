export function startCommand(client) {
    client.command('start', async (ctx) => {
        const message_id = ctx?.message?.message_id;
        const firstName = ctx.from.first_name || 'المستخدم'; // استخدم اسم المستخدم إذا كان موجودًا
        const botName = process.env.BOT_NAME || 'البوت'; // استيراد اسم البوت من ملف .env، افتراضياً "البوت"

        const welcomeMessage = `✨ مرحبًا بك، ${firstName}! ✨\n\n` +
            `أهلاً بك في بوت ${botName}، البوت الإسلامي الذي يسعى لخدمتك. \n` +
            `يوفر لك هذا البوت مجموعة من الميزات التي تلبي احتياجاتك كمسلم، ومن أبرزها: \n\n` +
            `1. **البحث عن الآيات القرآنية:**\n` +
            `يمكنك البحث عن آية معينة بكتابة كلمة "بحث" متبوعة بموضوع الآية. على سبيل المثال: "بحث (له ما في السماوات وما في الأرض)".\n` +
            `أو يمكنك استعمال الأمر /search متبوعة بالآية.\n\n` +
            `2. **البحث عن الأحاديث النبوية:**\n` +
            `يمكنك البحث عن حديث نبوي بكتابة كلمة "حديث" متبوعة بالكلمة التي ترغب في البحث عنها في الأحاديث. على سبيل المثال: "عليكم بالحبة السوداء".\n` +
            `أو يمكنك استعمال الأمر /hadith متبوعة بالكلمة.\n\n` +
            `💡لمزيد من المعلومات حول البوت يمكنك استخدام الأمر /help.`;

        await ctx.reply(welcomeMessage, { parse_mode: 'Markdown', reply_to_message_id: message_id });
    });
};