// BA2 Week 1 — exercise question bank (EN / AR / FA).
// Loaded via <script src>, consumed by _shared/scripts/week.js.
// The ar/fa content is a solid-faith draft translation, like the rest of this course's ar/fa
// content — it should get a native-speaker review pass before real students see it.
window.WEEK_QUESTIONS = {

  welcome: {
    answer: 'b',
    en: {
      q: "Why can't Excel take over once a company's sales data lives in a live database with millions of rows?",
      options: [
        "Excel can't display negative numbers",
        "Excel loads the whole dataset into memory and isn't built to query a live, constantly-changing database",
        "Excel doesn't support the AVERAGE function on large datasets"
      ]
    },
    ar: {
      q: "لماذا لا يستطيع Excel التعامل مع بيانات المبيعات بمجرد أن تعيش في قاعدة بيانات حية بملايين الصفوف؟",
      options: [
        "لا يستطيع Excel عرض الأرقام السالبة",
        "يحمّل Excel كامل البيانات في الذاكرة وليس مصمماً للاستعلام عن قاعدة بيانات حية ومتغيرة باستمرار",
        "لا يدعم Excel دالة AVERAGE على البيانات الكبيرة"
      ]
    },
    fa: {
      q: "چرا Excel نمی‌تواند وقتی داده‌های فروش یک شرکت در پایگاه داده‌ای زنده با میلیون‌ها ردیف زندگی می‌کند، کار را ادامه دهد؟",
      options: [
        "Excel نمی‌تواند اعداد منفی را نمایش دهد",
        "Excel کل داده را در حافظه بارگذاری می‌کند و برای پرس‌وجو از پایگاه داده‌ای زنده و همواره در حال تغییر ساخته نشده",
        "Excel از تابع AVERAGE روی داده‌های بزرگ پشتیبانی نمی‌کند"
      ]
    }
  },

  sampling: {
    answer: 'c',
    en: {
      q: "In SQL, which clause plays the same role as BA1's idea of \"choosing your sample\"?",
      options: ["SELECT", "FROM", "WHERE"]
    },
    ar: {
      q: "في SQL، أي عبارة تلعب نفس دور فكرة BA1 عن \"اختيار عيّنتك\"؟",
      options: ["SELECT", "FROM", "WHERE"]
    },
    fa: {
      q: "در SQL، کدام عبارت همان نقش ایدهٔ BA1 دربارهٔ «انتخاب نمونه‌ات» را بازی می‌کند؟",
      options: ["SELECT", "FROM", "WHERE"]
    }
  },

  "avg-count-sum": {
    answer: 'a',
    en: {
      q: "What is AVG(revenue) actually computing under the hood?",
      options: ["SUM(revenue) / COUNT(revenue)", "COUNT(revenue) / SUM(revenue)", "SUM(revenue) / COUNT(*) always, even with NULLs"]
    },
    ar: {
      q: "ما الذي تحسبه AVG(revenue) فعليًا تحت الغطاء؟",
      options: ["SUM(revenue) / COUNT(revenue)", "COUNT(revenue) / SUM(revenue)", "SUM(revenue) / COUNT(*) دائمًا، حتى مع القيم NULL"]
    },
    fa: {
      q: "AVG(revenue) در پشت صحنه واقعاً چه چیزی را محاسبه می‌کند؟",
      options: ["SUM(revenue) / COUNT(revenue)", "COUNT(revenue) / SUM(revenue)", "SUM(revenue) / COUNT(*) همیشه، حتی با مقادیر NULL"]
    }
  },

  stddev: {
    answer: 'b',
    en: {
      q: "You're computing a standard deviation from a sample of past sales (not the entire population of all sales ever). Which function should you use?",
      options: ["STDDEV_POP()", "STDDEV_SAMP()", "They always return the same number"]
    },
    ar: {
      q: "تحسب انحرافًا معياريًا من عيّنة من المبيعات السابقة (وليس كامل مجتمع كل المبيعات على الإطلاق). أي دالة يجب أن تستخدم؟",
      options: ["STDDEV_POP()", "STDDEV_SAMP()", "تُعيدان دائمًا نفس الرقم"]
    },
    fa: {
      q: "می‌خواهی انحراف معیار را از یک نمونهٔ فروش‌های گذشته محاسبه کنی (نه کل جامعهٔ همهٔ فروش‌ها). از کدام تابع باید استفاده کنی؟",
      options: ["STDDEV_POP()", "STDDEV_SAMP()", "هر دو همیشه همان عدد را برمی‌گردانند"]
    }
  },

  "groupby-freq": {
    answer: 'a',
    en: {
      q: "GROUP BY revenue_bucket, COUNT(*) produces a table of buckets and counts. What is this the SQL equivalent of?",
      options: ["A frequency distribution / histogram", "A standard deviation", "A JOIN"]
    },
    ar: {
      q: "تنتج GROUP BY revenue_bucket, COUNT(*) جدولاً من الفئات وأعدادها. ما الذي يعادله هذا في SQL؟",
      options: ["توزيع تكراري / رسم بياني (هيستوغرام)", "انحراف معياري", "عملية JOIN"]
    },
    fa: {
      q: "GROUP BY revenue_bucket, COUNT(*) جدولی از بازه‌ها و شمارش‌ها تولید می‌کند. این معادل SQLایِ چه چیزی است؟",
      options: ["توزیع فراوانی / هیستوگرام", "انحراف معیار", "یک عملیات JOIN"]
    }
  },

  median: {
    answer: 'c',
    en: {
      q: "Why doesn't PostgreSQL ship a simple MEDIAN() function the way it ships AVG()?",
      options: [
        "PostgreSQL considers the median a meaningless statistic",
        "The median can only be computed on integers",
        "The median requires the data to be fully sorted first, unlike single-pass aggregates like SUM/AVG"
      ]
    },
    ar: {
      q: "لماذا لا يوفر PostgreSQL دالة MEDIAN() بسيطة كما يوفر AVG()؟",
      options: [
        "يعتبر PostgreSQL أن الوسيط إحصاء بلا معنى",
        "لا يمكن حساب الوسيط إلا على الأعداد الصحيحة",
        "يتطلب الوسيط ترتيب البيانات بالكامل أولاً، بخلاف الدوال التجميعية أحادية المرور مثل SUM/AVG"
      ]
    },
    fa: {
      q: "چرا PostgreSQL تابع سادهٔ MEDIAN() را همان‌طور که AVG() را دارد، ارائه نمی‌دهد؟",
      options: [
        "PostgreSQL میانه را آماری بی‌معنا می‌داند",
        "میانه فقط روی اعداد صحیح قابل محاسبه است",
        "میانه ابتدا نیاز دارد داده کاملاً مرتب شود، برخلاف توابع تجمیعی تک‌گذر مثل SUM/AVG"
      ]
    }
  },

  "groupby-segment": {
    answer: 'b',
    en: {
      q: "Grouping the clearance data by region and comparing each region's average revenue is closest to which BA1 analytics level?",
      options: ["Descriptive — what happened", "Diagnostic — why it happened, by comparing segments", "Prescriptive — what to do next"]
    },
    ar: {
      q: "تجميع بيانات التخفيضات حسب المنطقة ومقارنة متوسط إيراد كل منطقة أقرب إلى أي مستوى من مستويات BA1 التحليلية؟",
      options: ["وصفي — ماذا حدث", "تشخيصي — لماذا حدث، عبر مقارنة الفئات", "توجيهي — ماذا نفعل تاليًا"]
    },
    fa: {
      q: "گروه‌بندی داده‌های تسویه بر اساس منطقه و مقایسهٔ میانگین درآمد هر منطقه، به کدام سطح تحلیلی BA1 نزدیک‌تر است؟",
      options: ["توصیفی — چه اتفاقی افتاد", "تشخیصی — چرا اتفاق افتاد، با مقایسهٔ بخش‌ها", "تجویزی — بعد چه باید کرد"]
    }
  },

  "ai-corner": {
    answer: 'a',
    en: {
      q: "An AI assistant writes a STDDEV query that divides the sum of squared deviations by n instead of n-1. Which of the three checks catches this?",
      options: ["Verify it", "Explain it", "Stand behind it"]
    },
    ar: {
      q: "يكتب مساعد ذكاء اصطناعي استعلام STDDEV يقسم مجموع مربعات الانحرافات على n بدلاً من n-1. أي من الفحوصات الثلاثة يرصد هذا؟",
      options: ["تحقق منه", "اشرحه", "اضمنه باسمك"]
    },
    fa: {
      q: "یک دستیار هوش مصنوعی پرس‌وجوی STDDEV ای می‌نویسد که مجموع انحراف‌های به‌توان‌رسیده را بر n به‌جای n-1 تقسیم می‌کند. کدام یک از سه فحص این را می‌گیرد؟",
      options: ["تأییدش کن", "توضیحش بده", "پشتش بایست"]
    }
  },

  "worked-example": {
    answer: 'c',
    en: {
      q: "Across the four store regions, which had both the highest average revenue per sale AND the highest spread?",
      options: ["North", "South", "East"]
    },
    ar: {
      q: "عبر المناطق الأربع للمتجر، أي منها كان لديها أعلى متوسط إيراد للبيع الواحد وأعلى تشتت في آن؟",
      options: ["الشمال", "الجنوب", "الشرق"]
    },
    fa: {
      q: "در میان چهار منطقهٔ فروشگاه، کدام‌یک هم بالاترین میانگین درآمد به‌ازای هر فروش و هم بیشترین پراکندگی را داشت؟",
      options: ["شمال", "جنوب", "شرق"]
    }
  }

};
