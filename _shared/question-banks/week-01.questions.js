// BA2 Week 1 — exercise question bank (EN / AR — this week intentionally skips Persian).
// Loaded via <script src>, consumed by _shared/scripts/week.js.
// Persian (fa) is deliberately omitted for this week; the ar content is a solid-faith draft
// translation, like the rest of this course's ar content — it should get a native-speaker
// review pass before real students see it.
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
    }
  }

};
