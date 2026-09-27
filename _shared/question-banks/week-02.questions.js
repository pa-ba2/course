// BA2 Week 2 — exercise question bank (EN / AR / FA).
// Loaded via <script src>, consumed by _shared/scripts/week.js.
// The ar/fa content is a solid-faith draft translation, like the rest of this course's ar/fa
// content — it should get a native-speaker review pass before real students see it.
window.WEEK_QUESTIONS = {

  welcome: {
    answer: 'a',
    en: {
      q: "You need to know how many Peach jars were sold on 2024-05-18. Which table alone answers this?",
      options: ["jam_sales", "jam_products", "Neither table alone"]
    },
    ar: {
      q: "تحتاج معرفة كم برطمان خوخ بيع في 2024-05-18. أي جدول وحده يجيب عن هذا؟",
      options: ["jam_sales", "jam_products", "لا جدول وحده"]
    },
    fa: {
      q: "می‌خواهی بدانی چند شیشه هلو در تاریخ ۲۰۲۴-۰۵-۱۸ فروخته شد. کدام جدول به‌تنهایی پاسخ می‌دهد؟",
      options: ["jam_sales", "jam_products", "هیچ‌کدام به‌تنهایی"]
    }
  },

  "metrics-overview": {
    answer: 'b',
    en: {
      q: "Which of these is a genuine business metric, not just a feeling?",
      options: ["Sales felt good this week", "Monthly revenue = $12,400", "The stand seemed busy on Saturday"]
    },
    ar: {
      q: "أي مما يلي مقياس أعمال حقيقي، لا مجرد شعور؟",
      options: ["شعرت المبيعات بأنها جيدة هذا الأسبوع", "الإيراد الشهري = 12,400 دولار", "بدا الكشك مزدحمًا يوم السبت"]
    },
    fa: {
      q: "کدام‌یک از این‌ها یک معیار کسب‌وکار واقعی است، نه فقط یک حس؟",
      options: ["این هفته فروش حس خوبی داشت", "درآمد ماهانه = ۱۲٬۴۰۰ دلار", "غرفه شنبه شلوغ به‌نظر می‌رسید"]
    }
  },

  "metrics-by-industry": {
    answer: 'c',
    en: {
      q: "A hotel's Average Daily Rate is room revenue divided by rooms rented. Which industry uses Table Turnover Rate instead?",
      options: ["Retail", "Hospitality", "Restaurant"]
    },
    ar: {
      q: "متوسط السعر اليومي للفندق هو إيراد الغرف مقسومًا على الغرف المؤجَّرة. أي قطاع يستخدم معدل دوران الطاولات بدلاً من ذلك؟",
      options: ["تجزئة", "ضيافة", "مطعم"]
    },
    fa: {
      q: "نرخ متوسط روزانهٔ هتل، درآمد اتاق تقسیم بر اتاق‌های اجاره‌شده است. کدام صنعت به‌جای آن از نرخ گردش میز استفاده می‌کند؟",
      options: ["خرده‌فروشی", "مهمان‌نوازی", "رستوران"]
    }
  },

  "excel-functions": {
    answer: 'a',
    en: {
      q: "Which Excel function is closest to SQL's GROUP BY + AVG() combined into one condition?",
      options: ["AVERAGEIF()", "AVERAGE()", "MEDIAN()"]
    },
    ar: {
      q: "أي دالة Excel هي الأقرب إلى GROUP BY + AVG() في SQL مدمجتين في شرط واحد؟",
      options: ["AVERAGEIF()", "AVERAGE()", "MEDIAN()"]
    },
    fa: {
      q: "کدام تابع Excel به GROUP BY + AVG() در SQL که در یک شرط ترکیب شده‌اند، نزدیک‌تر است؟",
      options: ["AVERAGEIF()", "AVERAGE()", "MEDIAN()"]
    }
  },

  "two-tables": {
    answer: 'c',
    en: {
      q: "Why does price live in jam_products instead of being copied into every jam_sales row?",
      options: [
        "Because SQL doesn't allow numbers in a sales table",
        "Because jam_sales already has too many columns",
        "So it can be updated once instead of everywhere it was copied"
      ]
    },
    ar: {
      q: "لماذا يعيش السعر في jam_products بدلاً من نسخه إلى كل صف في jam_sales؟",
      options: [
        "لأن SQL لا يسمح بالأرقام في جدول مبيعات",
        "لأن jam_sales لديه أعمدة كثيرة جدًا بالفعل",
        "حتى يمكن تحديثه مرة واحدة بدلاً من كل مكان نُسخ إليه"
      ]
    },
    fa: {
      q: "چرا قیمت در jam_products زندگی می‌کند به‌جای کپی‌شدن در هر ردیف jam_sales؟",
      options: [
        "چون SQL اجازهٔ اعداد در جدول فروش را نمی‌دهد",
        "چون jam_sales از قبل ستون‌های زیادی دارد",
        "تا بتوان آن را یک‌بار به‌روزرسانی کرد به‌جای هر جایی که کپی شده"
      ]
    }
  },

  "inner-join": {
    answer: 'b',
    en: {
      q: "Using INNER JOIN, how many of the 13 jam_sales rows come back when joined to jam_products?",
      options: ["13", "12", "9"]
    },
    ar: {
      q: "باستخدام INNER JOIN، كم صفًا من الـ13 صفًا في jam_sales يعود عند الدمج مع jam_products؟",
      options: ["13", "12", "9"]
    },
    fa: {
      q: "با استفاده از INNER JOIN، چند ردیف از ۱۳ ردیف jam_sales هنگام پیوستن به jam_products برمی‌گردد؟",
      options: ["۱۳", "۱۲", "۹"]
    }
  },

  "left-join": {
    answer: 'a',
    en: {
      q: "Using LEFT JOIN instead, what happens to the Lemon row's selling_price and cost_price?",
      options: [
        "They come back as NULL, and the row stays",
        "The row is dropped, same as INNER JOIN",
        "SQL raises an error"
      ]
    },
    ar: {
      q: "باستخدام LEFT JOIN بدلاً من ذلك، ماذا يحدث لـselling_price وcost_price لصف الليمون؟",
      options: [
        "تعودان كـNULL، ويبقى الصف",
        "يُحذف الصف، كما في INNER JOIN",
        "يُصدر SQL خطأ"
      ]
    },
    fa: {
      q: "با استفاده از LEFT JOIN به‌جای آن، بر سر selling_price و cost_price ردیف لیمون چه می‌آید؟",
      options: [
        "به‌صورت NULL برمی‌گردند، و ردیف باقی می‌ماند",
        "ردیف حذف می‌شود، مثل INNER JOIN",
        "SQL خطا می‌دهد"
      ]
    }
  },

  "calculating-metrics-sql": {
    answer: 'b',
    en: {
      q: "Which flavor has the best profit margin, even though it sells the fewest units?",
      options: ["Strawberry", "Peach", "Blueberry"]
    },
    ar: {
      q: "أي نكهة لديها أفضل هامش ربح، رغم أنها تبيع أقل كمية؟",
      options: ["فراولة", "خوخ", "توت أزرق"]
    },
    fa: {
      q: "کدام طعم بهترین حاشیهٔ سود را دارد، با وجود اینکه کمترین تعداد را می‌فروشد؟",
      options: ["توت‌فرنگی", "هلو", "بلوبری"]
    }
  },

  "ai-corner": {
    answer: 'c',
    en: {
      q: "An AI assistant writes a plain JOIN (no INNER/LEFT specified) for a report that needs to show unpriced sales too. What's the bug?",
      options: [
        "Plain JOIN defaults to LEFT JOIN, which is correct here",
        "There is no bug — the query is fine either way",
        "Plain JOIN defaults to INNER JOIN, which silently hides the unpriced sale"
      ]
    },
    ar: {
      q: "يكتب مساعد ذكاء اصطناعي JOIN مجردة (بلا تحديد INNER أو LEFT) لتقرير يحتاج إظهار المبيعات غير المسعَّرة أيضًا. ما الخطأ؟",
      options: [
        "JOIN المجردة تُهمَل إلى LEFT JOIN، وهذا صحيح هنا",
        "لا يوجد خطأ — الاستعلام سليم في كلتا الحالتين",
        "JOIN المجردة تُهمَل إلى INNER JOIN، التي تخفي بصمت عملية البيع غير المسعَّرة"
      ]
    },
    fa: {
      q: "یک دستیار هوش مصنوعی برای گزارشی که باید فروش‌های بی‌قیمت را هم نشان دهد، یک JOIN ساده (بدون تعیین INNER یا LEFT) می‌نویسد. باگ کجاست؟",
      options: [
        "JOIN ساده به‌طور پیش‌فرض LEFT JOIN است، که اینجا درست است",
        "هیچ باگی نیست — پرس‌وجو در هر دو حالت درست است",
        "JOIN ساده به‌طور پیش‌فرض INNER JOIN است، که بی‌سروصدا فروش بی‌قیمت را پنهان می‌کند"
      ]
    }
  },

  "worked-example": {
    answer: 'b',
    en: {
      q: "Strawberry earns the most total profit. Why doesn't the recommendation say \"sell only Strawberry\"?",
      options: [
        "Strawberry is actually losing money",
        "Peach's much higher margin means it's worth featuring more, not just chasing today's top seller",
        "The stand has run out of Strawberry jars"
      ]
    },
    ar: {
      q: "يحقق الفراولة أكبر ربح إجمالي. لماذا لا تقول التوصية \"بِع الفراولة فقط\"؟",
      options: [
        "الفراولة يخسر المال فعليًا",
        "هامش الخوخ الأعلى بكثير يعني أنه يستحق الإبراز أكثر، لا فقط ملاحقة الأكثر مبيعًا اليوم",
        "نفد الكشك من برطمانات الفراولة"
      ]
    },
    fa: {
      q: "توت‌فرنگی بیشترین سود کل را کسب می‌کند. چرا توصیه نمی‌گوید «فقط توت‌فرنگی بفروش»؟",
      options: [
        "توت‌فرنگی در واقع ضرر می‌دهد",
        "حاشیهٔ بسیار بالاتر هلو یعنی ارزش برجسته‌کردن بیشتر دارد، نه فقط دنبال‌کردن پرفروش‌ترین امروز",
        "شیشه‌های توت‌فرنگی غرفه تمام شده"
      ]
    }
  }

};
