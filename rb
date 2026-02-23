# 1. فتح لعبة روبلوكس
am start -n com.roblox.client/com.roblox.client.Activity

# 2. الانتظار لمدة 10 ثواني (حتى تفتح اللعبة)
sleep 10

# 3. إغلاق اللعبة إجبارياً
am force-stop com.roblox.client

# 4. رسالة تأكيد تظهر في التطبيق عندك
echo "تم فتح روبلوكس وإغلاقها بنجاح!"
