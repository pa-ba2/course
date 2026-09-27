// BA2 Week 2 -- localized strings (en/ar/fa), same externalized-strings pattern as week-01.
// Loaded via <script src>, consumed by _shared/scripts/week.js's fillI18n().
// ar/fa are solid-faith draft translations, not a substitute for native-speaker review.
window.PAGE_I18N_STRINGS = {
  'topbar.1': {
    en: 'Back to hub',
    ar: 'بازگشت إلى المقرر',
    fa: 'بازگشت به دوره'
  },
  'topbar.2': {
    en: 'Course contents',
    ar: 'محتوى المقرر',
    fa: 'محتوای دوره'
  },
  'contents.1': {
    en: 'Course contents',
    ar: 'محتوى المقرر',
    fa: 'محتوای دوره'
  },
  'sidebar.1': {
    en: 'Business Analytics 2',
    ar: 'تحليلات الأعمال 2',
    fa: 'تحلیل کسب‌وکار ۲'
  },
  'sidebar.2': {
    en: 'Week 2 — Calculating Metrics',
    ar: 'الأسبوع 2 — حساب المقاييس',
    fa: 'هفته ۲ — محاسبهٔ معیارها'
  },
  'sidebar.3': {
    en: '        <a href="#welcome" class="current">Welcome</a>\n        <a href="#metrics-overview">What are business metrics?</a>\n        <a href="#metrics-by-industry">Metrics by industry</a>\n        <div class="grp-label">Toolkit</div>\n        <a href="#excel-functions">Excel functions recap</a>\n        <a href="#two-tables">Why data lives in two tables</a>\n        <div class="grp-label">SQL JOIN</div>\n        <a href="#inner-join">INNER JOIN</a>\n        <a href="#left-join">LEFT JOIN</a>\n        <a href="#calculating-metrics-sql">Metrics via JOIN + GROUP BY</a>\n        <div class="grp-label">AI layer</div>\n        <a href="#ai-corner">AI co-pilot corner</a>\n        <div class="grp-label">Applied</div>\n        <a href="#worked-example">Worked example</a>\n        <div class="grp-label">Reference</div>\n        <a href="#common-mistakes">Common mistakes</a>\n        <div class="grp-label">Homework</div>\n        <a href="#homework">Homework</a>\n        <a href="#before-week-3">Before Week 3</a>\n      ',
    ar: '        <a href="#welcome" class="current">ترحيب</a>\n        <a href="#metrics-overview">ما هي مقاييس الأعمال؟</a>\n        <a href="#metrics-by-industry">المقاييس حسب القطاع</a>\n        <div class="grp-label">الأدوات</div>\n        <a href="#excel-functions">مراجعة دوال Excel</a>\n        <a href="#two-tables">لماذا تعيش البيانات في جدولين</a>\n        <div class="grp-label">JOIN في SQL</div>\n        <a href="#inner-join"><span dir="ltr">INNER JOIN</span></a>\n        <a href="#left-join"><span dir="ltr">LEFT JOIN</span></a>\n        <a href="#calculating-metrics-sql">المقاييس عبر JOIN و GROUP BY</a>\n        <div class="grp-label">طبقة الذكاء الاصطناعي</div>\n        <a href="#ai-corner">ركن مساعد الذكاء الاصطناعي</a>\n        <div class="grp-label">تطبيقي</div>\n        <a href="#worked-example">مثال تطبيقي</a>\n        <div class="grp-label">مرجع</div>\n        <a href="#common-mistakes">أخطاء شائعة</a>\n        <div class="grp-label">الواجب</div>\n        <a href="#homework">الواجب</a>\n        <a href="#before-week-3">قبل الأسبوع 3</a>\n      ',
    fa: '        <a href="#welcome" class="current">خوش‌آمدید</a>\n        <a href="#metrics-overview">معیارهای کسب‌وکار چیستند؟</a>\n        <a href="#metrics-by-industry">معیارها بر اساس صنعت</a>\n        <div class="grp-label">ابزارها</div>\n        <a href="#excel-functions">مرور توابع Excel</a>\n        <a href="#two-tables">چرا داده در دو جدول زندگی می‌کند</a>\n        <div class="grp-label">JOIN در SQL</div>\n        <a href="#inner-join"><span dir="ltr">INNER JOIN</span></a>\n        <a href="#left-join"><span dir="ltr">LEFT JOIN</span></a>\n        <a href="#calculating-metrics-sql">معیارها با JOIN و GROUP BY</a>\n        <div class="grp-label">لایه هوش مصنوعی</div>\n        <a href="#ai-corner">گوشه همیار هوش مصنوعی</a>\n        <div class="grp-label">کاربردی</div>\n        <a href="#worked-example">مثال حل‌شده</a>\n        <div class="grp-label">مرجع</div>\n        <a href="#common-mistakes">اشتباهات رایج</a>\n        <div class="grp-label">تکلیف</div>\n        <a href="#homework">تکلیف</a>\n        <a href="#before-week-3">پیش از هفته ۳</a>\n      '
  },
  'cover.1': {
    en: 'Business Analytics 2 &#183; Week 2',
    ar: 'تحليلات الأعمال 2 &#183; الأسبوع 2',
    fa: 'تحلیل کسب‌وکار ۲ &#183; هفته ۲'
  },
  'cover.2': {
    en: '        <h1>Calculating Metrics:<em>From One Table to Two</em></h1>\n        <p class="lede">Last week every answer came from a single table. This week the business questions get harder on purpose: you can\'t compute profit from a sales table alone &#8212; you need a second table with prices and costs, and a way to combine them.</p>\n      ',
    ar: '        <h1>حساب المقاييس:<em>من جدول واحد إلى جدولين</em></h1>\n        <p class="lede">في الأسبوع الماضي، جاءت كل إجابة من جدول واحد. هذا الأسبوع تصعب الأسئلة التجارية عمدًا: لا يمكنك حساب الربح من جدول المبيعات وحده &#8212; تحتاج جدولاً ثانيًا فيه الأسعار والتكاليف، وطريقة لدمجهما.</p>\n      ',
    fa: '        <h1>محاسبهٔ معیارها:<em>از یک جدول به دو جدول</em></h1>\n        <p class="lede">هفتهٔ گذشته هر پاسخی از یک جدول می‌آمد. این هفته سؤال‌های کسب‌وکاری عمداً سخت‌تر می‌شوند: نمی‌توانی سود را فقط از جدول فروش محاسبه کنی &#8212; به جدولی دوم با قیمت‌ها و هزینه‌ها نیاز داری، و راهی برای ترکیب آن‌ها.</p>\n      '
  },
  'cover.3': {
    en: 'View original slides',
    ar: 'عرض الشرائح الأصلية',
    fa: 'مشاهده اسلایدهای اصلی'
  },
  'cover.4': {
    en: 'Save as PDF',
    ar: 'حفظ كملف PDF',
    fa: 'ذخیره به‌صورت PDF'
  },
  'cover.5': {
    en: '&#8776; 60 min &#183; reading + SQL practice',
    ar: '&#8776; ٦٠ دقيقة &#183; قراءة وتدريب SQL',
    fa: '&#8776; ۶۰ دقیقه &#183; مطالعه و تمرین SQL'
  },
  'cover.6': {
    en: '          <span class="box-label">A note on the slides above</span>\n          <p>The original deck teaches business metrics through Excel formulas only &#8212; and that content is still here, in Sections 2&#8211;4. What\'s new is Sections 5&#8211;8: <code class="mono">JOIN</code>, the SQL topic Week 1 promised, taught through the exact problem the original deck\'s metrics can\'t solve alone &#8212; combining a sales table with a prices-and-costs table.</p>\n        ',
    ar: '          <span class="box-label">ملاحظة حول الشرائح أعلاه</span>\n          <p>تُعلّم الشرائح الأصلية مقاييس الأعمال عبر صيغ Excel فقط &#8212; وهذا المحتوى ما زال هنا، في الأقسام 2 إلى 4. الجديد هو الأقسام 5 إلى 8: <code class="mono">JOIN</code>، موضوع SQL الذي وعد به الأسبوع 1، يُدرَّس عبر المشكلة بالضبط التي لا تستطيع مقاييس الشرائح الأصلية حلها وحدها &#8212; دمج جدول مبيعات مع جدول أسعار وتكاليف.</p>\n        ',
    fa: '          <span class="box-label">نکته‌ای دربارهٔ اسلایدهای بالا</span>\n          <p>اسلایدهای اصلی معیارهای کسب‌وکار را فقط از طریق فرمول‌های Excel آموزش می‌دهند &#8212; و آن محتوا هنوز اینجاست، در بخش‌های ۲ تا ۴. چیز تازه بخش‌های ۵ تا ۸ است: <code class="mono">JOIN</code>، موضوع SQLای که هفتهٔ ۱ وعده داد، از طریق دقیقاً همان مسئله‌ای آموزش داده می‌شود که معیارهای اسلایدهای اصلی به‌تنهایی نمی‌توانند حلش کنند &#8212; ترکیب جدول فروش با جدول قیمت‌ها و هزینه‌ها.</p>\n        '
  },
  'welcome.1': {
    en: 'Section 01',
    ar: 'القسم ٠١',
    fa: 'بخش ۰۱'
  },
  'welcome.2': {
    en: '6 min',
    ar: '٦ دقائق',
    fa: '۶ دقیقه'
  },
  'welcome.3': {
    en: '        <h2>Welcome: the same table trick, twice</h2>\n        <p class="standfirst">Week 1 answered "what\'s typical, and how spread out." This week asks a harder question: "are we actually making money" &#8212; and that question needs two tables, not one.</p>\n      ',
    ar: '        <h2>ترحيب: نفس حيلة الجدول، مرتين</h2>\n        <p class="standfirst">أجاب الأسبوع 1 عن "ما المعتاد، وكم التشتت". هذا الأسبوع يطرح سؤالاً أصعب: "هل نربح فعلاً" &#8212; وهذا السؤال يحتاج جدولين، لا جدولاً واحدًا.</p>\n      ',
    fa: '        <h2>خوش‌آمدید: همان ترفند جدول، دوبار</h2>\n        <p class="standfirst">هفتهٔ ۱ به «چه چیزی معمول است، و چقدر پراکنده» پاسخ داد. این هفته سؤالی سخت‌تر می‌پرسد: «آیا واقعاً سود می‌کنیم» &#8212; و این سؤال به دو جدول نیاز دارد، نه یکی.</p>\n      '
  },
  'welcome.4': {
    en: '          <div class="obj-label">By the end, you\'ll be able to</div>\n          <ul>\n            <li>Calculate revenue, cost, profit, and profit margin from real sales data</li>\n            <li>Explain why prices and costs usually live in a separate table from sales, and combine them with <code class="mono">JOIN</code></li>\n            <li>Choose between <code class="mono">INNER JOIN</code> and <code class="mono">LEFT JOIN</code> depending on whether missing matches should be hidden or surfaced</li>\n          </ul>\n        ',
    ar: '          <div class="obj-label">بنهاية هذا القسم ستكون قادرًا على</div>\n          <ul>\n            <li>حساب الإيراد والتكلفة والربح وهامش الربح من بيانات مبيعات حقيقية</li>\n            <li>توضيح سبب عيش الأسعار والتكاليف عادةً في جدول منفصل عن المبيعات، ودمجهما باستخدام <code class="mono">JOIN</code></li>\n            <li>الاختيار بين <code class="mono">INNER JOIN</code> و<code class="mono">LEFT JOIN</code> حسب ما إذا كان ينبغي إخفاء التطابقات المفقودة أو إظهارها</li>\n          </ul>\n        ',
    fa: '          <div class="obj-label">در پایان این بخش می‌توانی</div>\n          <ul>\n            <li>درآمد، هزینه، سود و حاشیهٔ سود را از داده‌های فروش واقعی محاسبه کنی</li>\n            <li>توضیح دهی چرا قیمت‌ها و هزینه‌ها معمولاً در جدولی جدا از فروش زندگی می‌کنند، و آن‌ها را با <code class="mono">JOIN</code> ترکیب کنی</li>\n            <li>بین <code class="mono">INNER JOIN</code> و <code class="mono">LEFT JOIN</code> بر اساس اینکه تطابق‌های گم‌شده باید پنهان یا آشکار شوند، انتخاب کنی</li>\n          </ul>\n        '
  },
  'welcome.5': {
    en: '        <p>Quick recap of Week 1\'s toolkit, since today builds on it directly: <code class="mono">SELECT / FROM / WHERE</code> to choose your sample, <code class="mono">AVG / COUNT / SUM</code> for the center, <code class="mono">STDDEV_SAMP</code> for the spread, and <code class="mono">GROUP BY</code> to get one stat per category instead of one for the whole table. Everything this week adds sits on top of that &#8212; nothing from Week 1 gets replaced.</p>\n      ',
    ar: '        <p>مراجعة سريعة لأدوات الأسبوع 1، لأن اليوم يُبنى عليها مباشرة: <code class="mono">SELECT / FROM / WHERE</code> لاختيار عيّنتك، <code class="mono">AVG / COUNT / SUM</code> للمركز، <code class="mono">STDDEV_SAMP</code> للتشتت، و<code class="mono">GROUP BY</code> للحصول على إحصاء واحد لكل فئة بدلاً من واحد للجدول كله. كل ما يضيفه هذا الأسبوع يُبنى فوق ذلك &#8212; لا شيء من الأسبوع 1 يُستبدل.</p>\n      ',
    fa: '        <p>مروری سریع بر ابزارهای هفتهٔ ۱، چون امروز مستقیماً روی آن ساخته می‌شود: <code class="mono">SELECT / FROM / WHERE</code> برای انتخاب نمونه‌ات، <code class="mono">AVG / COUNT / SUM</code> برای مرکز، <code class="mono">STDDEV_SAMP</code> برای پراکندگی، و <code class="mono">GROUP BY</code> برای گرفتن یک آمار به‌ازای هر دسته به‌جای یکی برای کل جدول. هر چیزی که این هفته اضافه می‌کند روی همان بنا می‌شود &#8212; هیچ‌چیز از هفتهٔ ۱ جایگزین نمی‌شود.</p>\n      '
  },
  'welcome.6': {
    en: '        <p>Here\'s this week\'s running scenario: you help run a jam stand at a Saturday farmers\' market, selling three flavors &#8212; Strawberry, Blueberry, and Peach. Every sale gets logged in a <span class="mono">jam_sales</span> table: flavor, date, units sold. Prices and costs live somewhere else entirely, in a <span class="mono">jam_products</span> table, because they change rarely and apply to every sale of that flavor. The stand owner wants a straight answer: <strong>which flavor should we make more of next month?</strong> Sections 6 through 8 build toward that answer, and Section 10 delivers it with real numbers.</p>\n      ',
    ar: '        <p>إليك سيناريو هذا الأسبوع: تساعد في إدارة كشك مربى في سوق مزارعين يوم سبت، تبيع ثلاث نكهات &#8212; فراولة وتوت أزرق وخوخ. كل عملية بيع تُسجَّل في جدول <span class="mono">jam_sales</span>: النكهة والتاريخ والكمية المباعة. تعيش الأسعار والتكاليف في مكان مختلف تمامًا، في جدول <span class="mono">jam_products</span>، لأنها نادرًا ما تتغير وتنطبق على كل عملية بيع لتلك النكهة. صاحب الكشك يريد إجابة مباشرة: <strong>أي نكهة يجب أن نصنع المزيد منها الشهر القادم؟</strong> الأقسام من 6 إلى 8 تبني نحو تلك الإجابة، ويقدّمها القسم 10 بأرقام حقيقية.</p>\n      ',
    fa: '        <p>سناریوی این هفته این است: به ادارهٔ یک غرفهٔ مربا در بازار کشاورزان روز شنبه کمک می‌کنی، سه طعم می‌فروشی &#8212; توت‌فرنگی، بلوبری و هلو. هر فروش در جدول <span class="mono">jam_sales</span> ثبت می‌شود: طعم، تاریخ، تعداد فروخته‌شده. قیمت‌ها و هزینه‌ها جای کاملاً متفاوتی زندگی می‌کنند، در جدول <span class="mono">jam_products</span>، چون به‌ندرت تغییر می‌کنند و برای هر فروش آن طعم یکسان‌اند. صاحب غرفه پاسخی مستقیم می‌خواهد: <strong>ماه بعد باید از کدام طعم بیشتر بسازیم؟</strong> بخش‌های ۶ تا ۸ به سمت آن پاسخ می‌سازند، و بخش ۱۰ آن را با اعداد واقعی ارائه می‌دهد.</p>\n      '
  },
  'welcome.7': {
    en: 'flavor',
    ar: 'النكهة',
    fa: 'طعم'
  },
  'welcome.8': {
    en: 'selling price',
    ar: 'سعر البيع',
    fa: 'قیمت فروش'
  },
  'welcome.9': {
    en: 'cost price',
    ar: 'سعر التكلفة',
    fa: 'قیمت تمام‌شده'
  },
  'metrics-overview.1': {
    en: 'Section 02',
    ar: 'القسم ٠٢',
    fa: 'بخش ۰۲'
  },
  'metrics-overview.2': {
    en: '5 min',
    ar: '٥ دقائق',
    fa: '۵ دقیقه'
  },
  'metrics-overview.3': {
    en: '        <h2>What is a business metric?</h2>\n        <p class="standfirst">A standardized, quantitative measurement used to track and assess performance &#8212; the difference between "sales felt good this week" and a number you can compare, alert on, and defend.</p>\n      ',
    ar: '        <h2>ما هو مقياس الأعمال؟</h2>\n        <p class="standfirst">قياس كمي موحّد يُستخدم لتتبع الأداء وتقييمه &#8212; الفرق بين "شعرت المبيعات بأنها جيدة هذا الأسبوع" ورقم يمكنك مقارنته والتنبيه عليه والدفاع عنه.</p>\n      ',
    fa: '        <h2>معیار کسب‌وکار چیست؟</h2>\n        <p class="standfirst">سنجشی کمّی و استانداردشده برای پیگیری و ارزیابی عملکرد &#8212; تفاوت بین «این هفته فروش حس خوبی داشت» و عددی که می‌توانی مقایسه‌اش کنی، برایش هشدار بگذاری و از آن دفاع کنی.</p>\n      '
  },
  'metrics-overview.4': {
    en: '        <p><code class="mono">jam_sales</code> already gave you the raw ingredient &#8212; who sold how much, when. A metric turns that into something you can act on: revenue, cost, profit, or a per-category comparison. The four reasons this matters, straight from the business world:</p>\n        <ol class="steps">\n          <li><strong>Performance improvement</strong> &#8212; tracking the right metric tells you how the business is doing and where to focus.</li>\n          <li><strong>Identifying problems early</strong> &#8212; a metric that\'s drifting the wrong way flags a problem before it becomes a crisis.</li>\n          <li><strong>Comparative analysis</strong> &#8212; metrics let you check performance against a benchmark, a competitor, or last month.</li>\n          <li><strong>Communication</strong> &#8212; a shared metric is how you report to customers, investors, or a stand owner without an argument about what "good" means.</li>\n        </ol>\n      ',
    ar: '        <p>أعطاك <code class="mono">jam_sales</code> المكوّن الخام بالفعل &#8212; من باع كم، ومتى. المقياس يحوّل هذا إلى شيء يمكنك التصرف بناءً عليه: إيراد، تكلفة، ربح، أو مقارنة بين الفئات. الأسباب الأربعة لأهمية هذا، مباشرة من عالم الأعمال:</p>\n        <ol class="steps">\n          <li><strong>تحسين الأداء</strong> &#8212; تتبع المقياس الصحيح يخبرك كيف يسير العمل وأين تركّز.</li>\n          <li><strong>اكتشاف المشكلات مبكرًا</strong> &#8212; مقياس ينحرف في الاتجاه الخاطئ يُنبّه إلى مشكلة قبل أن تصبح أزمة.</li>\n          <li><strong>التحليل المقارن</strong> &#8212; تتيح لك المقاييس مقارنة الأداء بمعيار مرجعي أو منافس أو الشهر الماضي.</li>\n          <li><strong>التواصل</strong> &#8212; المقياس المشترك هو طريقتك لإبلاغ العملاء أو المستثمرين أو صاحب الكشك دون جدال حول معنى "جيد".</li>\n        </ol>\n      ',
    fa: '        <p><code class="mono">jam_sales</code> از قبل مادهٔ خام را به تو داد &#8212; چه کسی چقدر فروخت، کِی. یک معیار این را به چیزی قابل‌اقدام تبدیل می‌کند: درآمد، هزینه، سود، یا مقایسه‌ای بین دسته‌ها. چهار دلیل اهمیت این، مستقیم از دنیای کسب‌وکار:</p>\n        <ol class="steps">\n          <li><strong>بهبود عملکرد</strong> &#8212; پیگیری معیار درست به تو می‌گوید کسب‌وکار چطور پیش می‌رود و کجا باید تمرکز کنی.</li>\n          <li><strong>شناسایی زودهنگام مشکلات</strong> &#8212; معیاری که در جهت اشتباه حرکت می‌کند، پیش از تبدیل‌شدن به بحران هشدار می‌دهد.</li>\n          <li><strong>تحلیل مقایسه‌ای</strong> &#8212; معیارها به تو اجازه می‌دهند عملکرد را با یک معیار مرجع، رقیب یا ماه گذشته مقایسه کنی.</li>\n          <li><strong>ارتباط</strong> &#8212; معیار مشترک روشی است که بدون بحث بر سر معنای «خوب»، به مشتریان، سرمایه‌گذاران یا صاحب غرفه گزارش می‌دهی.</li>\n        </ol>\n      '
  },
  'metrics-overview.5': {
    en: '          <span class="box-label">Bridge from BA1</span>\n          <p>This is BA1\'s "descriptive analytics" from a new angle: revenue and profit are the KPIs, and everything you\'re about to do &#8212; JOIN, GROUP BY &#8212; is just the plumbing that gets you from raw rows to a KPI you can report.</p>\n        ',
    ar: '          <span class="box-label">جسر من BA1</span>\n          <p>هذا هو "التحليل الوصفي" من BA1 من زاوية جديدة: الإيراد والربح هما مؤشرا الأداء الرئيسيان، وكل ما أنت على وشك فعله &#8212; JOIN وGROUP BY &#8212; هو فقط السباكة التي تنقلك من صفوف خام إلى مؤشر أداء يمكنك الإبلاغ عنه.</p>\n        ',
    fa: '          <span class="box-label">پل از BA1</span>\n          <p>این همان «تحلیل توصیفی» BA1 از زاویه‌ای تازه است: درآمد و سود همان KPIها هستند، و هر کاری که در شرف انجامش هستی &#8212; JOIN و GROUP BY &#8212; فقط لوله‌کشی‌ای است که تو را از ردیف‌های خام به KPIای می‌رساند که می‌توانی گزارش دهی.</p>\n        '
  },
  'metrics-by-industry.1': {
    en: 'Section 03',
    ar: 'القسم ٠٣',
    fa: 'بخش ۰۳'
  },
  'metrics-by-industry.2': {
    en: '6 min',
    ar: '٦ دقائق',
    fa: '۶ دقیقه'
  },
  'metrics-by-industry.3': {
    en: '        <h2>The same shape of metric, a different formula per industry</h2>\n        <p class="standfirst">"Revenue" and "traffic" mean something slightly different in a shop, a restaurant, and a hotel &#8212; but the underlying shape (a rate, a total, a ratio) repeats everywhere.</p>\n      ',
    ar: '        <h2>نفس شكل المقياس، صيغة مختلفة لكل قطاع</h2>\n        <p class="standfirst">"الإيراد" و"الحركة" يعنيان شيئًا مختلفًا قليلاً في متجر ومطعم وفندق &#8212; لكن الشكل الأساسي (معدل، إجمالي، نسبة) يتكرر في كل مكان.</p>\n      ',
    fa: '        <h2>همان شکل معیار، فرمولی متفاوت برای هر صنعت</h2>\n        <p class="standfirst">«درآمد» و «ترافیک» در یک فروشگاه، یک رستوران و یک هتل کمی معنای متفاوتی دارند &#8212; اما شکل زیرین (یک نرخ، یک مجموع، یک نسبت) همه‌جا تکرار می‌شود.</p>\n      '
  },
  'metrics-by-industry.4': {
    en: 'Industry',
    ar: 'القطاع',
    fa: 'صنعت'
  },
  'metrics-by-industry.5': {
    en: 'Metric',
    ar: 'المقياس',
    fa: 'معیار'
  },
  'metrics-by-industry.6': {
    en: 'Formula',
    ar: 'الصيغة',
    fa: 'فرمول'
  },
  'metrics-by-industry.7': {
    en: '          <span class="box-label">Example: the jam stand\'s own numbers</span>\n          <p>In May, the stand sold 100 Strawberry jars at $5, 60 Blueberry jars at $6, and 40 Peach jars at $4. Revenue = SUM(units &#215; price) = (100&#215;5) + (60&#215;6) + (40&#215;4) = $500 + $360 + $160 = <strong>$1,020</strong>. That\'s the retail formula above, done by hand &#8212; before Section 8 does it in SQL, joined against the cost table too.</p>\n        ',
    ar: '          <span class="box-label">مثال: أرقام كشك المربى نفسه</span>\n          <p>في مايو، باع الكشك 100 برطمان فراولة بـ5 دولارات، و60 برطمان توت أزرق بـ6 دولارات، و40 برطمان خوخ بـ4 دولارات. الإيراد = SUM(الكمية &#215; السعر) = (100&#215;5) + (60&#215;6) + (40&#215;4) = 500 + 360 + 160 دولار = <strong>1,020 دولار</strong>. هذه هي صيغة التجزئة أعلاه، محسوبة يدويًا &#8212; قبل أن يفعلها القسم 8 بلغة SQL، مدمَجة مع جدول التكلفة أيضًا.</p>\n        ',
    fa: '          <span class="box-label">مثال: اعداد خود غرفهٔ مربا</span>\n          <p>در ماه مه، غرفه ۱۰۰ شیشه توت‌فرنگی به قیمت ۵ دلار، ۶۰ شیشه بلوبری به قیمت ۶ دلار و ۴۰ شیشه هلو به قیمت ۴ دلار فروخت. درآمد = SUM(تعداد &#215; قیمت) = (۱۰۰&#215;۵) + (۶۰&#215;۶) + (۴۰&#215;۴) = ۵۰۰ + ۳۶۰ + ۱۶۰ دلار = <strong>۱٬۰۲۰ دلار</strong>. این همان فرمول خرده‌فروشی بالاست، دستی محاسبه‌شده &#8212; پیش از آنکه بخش ۸ آن را به SQL و همراه با پیوستن به جدول هزینه انجام دهد.</p>\n        '
  },
  'excel-functions.1': {
    en: 'Section 04',
    ar: 'القسم ٠٤',
    fa: 'بخش ۰۴'
  },
  'excel-functions.2': {
    en: '5 min',
    ar: '٥ دقائق',
    fa: '۵ دقیقه'
  },
  'excel-functions.3': {
    en: '        <h2>Excel functions recap: the same stats, a different set of hands</h2>\n        <p class="standfirst">The original deck for this week is Excel-only. You already know these ideas from Week 1\'s SQL &#8212; here\'s the Excel side, for whenever your data arrives as a spreadsheet instead of a live database.</p>\n      ',
    ar: '        <h2>مراجعة دوال Excel: نفس الإحصاء، أدوات مختلفة</h2>\n        <p class="standfirst">الشرائح الأصلية لهذا الأسبوع مبنية على Excel فقط. أنت تعرف هذه الأفكار بالفعل من SQL الأسبوع 1 &#8212; إليك جانب Excel، لأي وقت تصلك فيه بياناتك كجدول بيانات بدلاً من قاعدة بيانات حية.</p>\n      ',
    fa: '        <h2>مرور توابع Excel: همان آمار، ابزاری متفاوت</h2>\n        <p class="standfirst">اسلایدهای اصلی این هفته فقط بر پایهٔ Excel هستند. تو این ایده‌ها را از قبل از SQL هفتهٔ ۱ می‌دانی &#8212; این‌جا سمت Excel است، برای هر زمانی که داده‌ات به‌صورت صفحه‌گسترده به‌جای پایگاه داده‌ای زنده می‌رسد.</p>\n      '
  },
  'excel-functions.4': {
    en: 'Excel function',
    ar: 'دالة Excel',
    fa: 'تابع Excel'
  },
  'excel-functions.5': {
    en: 'Does',
    ar: 'تفعل',
    fa: 'انجام می‌دهد'
  },
  'excel-functions.6': {
    en: 'Week 1\'s SQL equivalent',
    ar: 'مكافئها في SQL من الأسبوع 1',
    fa: 'معادل SQLای هفتهٔ ۱'
  },
  'excel-functions.7': {
    en: '          <span class="box-label">Common mistake</span>\n          <p><code class="mono">AVERAGEIF()</code> and <code class="mono">GROUP BY</code> aren\'t quite the same shape: <code class="mono">AVERAGEIF()</code> gives you one number for one condition you typed out by hand, while <code class="mono">GROUP BY</code> gives you one row per category automatically &#8212; for 3 flavors, that\'s one <code class="mono">AVERAGEIF()</code> per flavor versus a single <code class="mono">GROUP BY flavor</code>.</p>\n        ',
    ar: '          <span class="box-label">خطأ شائع</span>\n          <p><code class="mono">AVERAGEIF()</code> و<code class="mono">GROUP BY</code> ليستا بنفس الشكل تمامًا: تعطيك <code class="mono">AVERAGEIF()</code> رقمًا واحدًا لشرط واحد كتبته يدويًا، بينما تعطيك <code class="mono">GROUP BY</code> صفًا واحدًا لكل فئة تلقائيًا &#8212; لثلاث نكهات، هذا يعني <code class="mono">AVERAGEIF()</code> واحدة لكل نكهة مقابل <code class="mono">GROUP BY flavor</code> واحدة فقط.</p>\n        ',
    fa: '          <span class="box-label">اشتباه رایج</span>\n          <p><code class="mono">AVERAGEIF()</code> و <code class="mono">GROUP BY</code> دقیقاً یک شکل نیستند: <code class="mono">AVERAGEIF()</code> یک عدد برای یک شرطی که دستی تایپ کردی می‌دهد، درحالی‌که <code class="mono">GROUP BY</code> به‌طور خودکار یک ردیف برای هر دسته می‌دهد &#8212; برای سه طعم، این یعنی یک <code class="mono">AVERAGEIF()</code> برای هر طعم در برابر یک <code class="mono">GROUP BY flavor</code> تنها.</p>\n        '
  },
  'two-tables.1': {
    en: 'Section 05',
    ar: 'القسم ٠٥',
    fa: 'بخش ۰۵'
  },
  'two-tables.2': {
    en: '5 min',
    ar: '٥ دقائق',
    fa: '۵ دقیقه'
  },
  'two-tables.3': {
    en: '        <h2>Why prices don\'t live inside the sales table</h2>\n        <p class="standfirst">You could add a price column to every row of <code class="mono">jam_sales</code>. Real databases almost never do that &#8212; and the reason is worth understanding before you write a single <code class="mono">JOIN</code>.</p>\n      ',
    ar: '        <h2>لماذا لا تعيش الأسعار داخل جدول المبيعات</h2>\n        <p class="standfirst">يمكنك إضافة عمود سعر لكل صف في <code class="mono">jam_sales</code>. قواعد البيانات الحقيقية لا تفعل ذلك تقريبًا أبدًا &#8212; والسبب يستحق الفهم قبل أن تكتب <code class="mono">JOIN</code> واحدة.</p>\n      ',
    fa: '        <h2>چرا قیمت‌ها داخل جدول فروش زندگی نمی‌کنند</h2>\n        <p class="standfirst">می‌توانستی یک ستون قیمت به هر ردیف <code class="mono">jam_sales</code> اضافه کنی. پایگاه‌های داده واقعی تقریباً هرگز این کار را نمی‌کنند &#8212; و دلیلش پیش از نوشتن حتی یک <code class="mono">JOIN</code> ارزش فهمیدن دارد.</p>\n      '
  },
  'two-tables.4': {
    en: '        <p>Say you did add a <span class="mono">selling_price</span> column to every row of <span class="mono">jam_sales</span>. Strawberry sells at $5 across 4 different market days &#8212; so the price $5 would be copied into 4 separate rows. The day the stand raises Strawberry to $5.50, you\'d have to find and update every single row that ever sold Strawberry, and if you missed even one, your data would quietly disagree with itself about what Strawberry costs. Keeping price in its own <span class="mono">jam_products</span> table means it\'s stored exactly once per flavor &#8212; update it there, and every future <code class="mono">JOIN</code> picks up the new price automatically.</p>\n      ',
    ar: '        <p>لنفترض أنك أضفت عمود <span class="mono">selling_price</span> إلى كل صف في <span class="mono">jam_sales</span>. يُباع الفراولة بـ5 دولارات عبر 4 أيام سوق مختلفة &#8212; فيُنسخ السعر 5 دولارات إلى 4 صفوف منفصلة. يوم يرفع الكشك سعر الفراولة إلى 5.50 دولار، ستضطر لإيجاد وتحديث كل صف باع فراولة على الإطلاق، وإن فاتك صف واحد فقط، ستتناقض بياناتك بصمت حول سعر الفراولة. الاحتفاظ بالسعر في جدول <span class="mono">jam_products</span> الخاص به يعني تخزينه مرة واحدة بالضبط لكل نكهة &#8212; حدّثه هناك، وكل <code class="mono">JOIN</code> مستقبلية تلتقط السعر الجديد تلقائيًا.</p>\n      ',
    fa: '        <p>فرض کن ستون <span class="mono">selling_price</span> را به هر ردیف <span class="mono">jam_sales</span> اضافه کرده بودی. توت‌فرنگی در ۴ روز بازار مختلف با قیمت ۵ دلار فروخته می‌شود &#8212; پس قیمت ۵ دلار در ۴ ردیف جداگانه کپی می‌شد. روزی که غرفه قیمت توت‌فرنگی را به ۵.۵۰ دلار می‌رساند، باید هر ردیفی که تا‌به‌حال توت‌فرنگی فروخته را پیدا و به‌روزرسانی می‌کردی، و اگر حتی یک ردیف را جا می‌انداختی، داده‌ات بی‌سروصدا در مورد قیمت توت‌فرنگی با خودش اختلاف پیدا می‌کرد. نگه‌داشتن قیمت در جدول اختصاصی خودش، <span class="mono">jam_products</span>، یعنی دقیقاً یک‌بار به‌ازای هر طعم ذخیره می‌شود &#8212; آن‌جا به‌روزرسانی‌اش کن، و هر <code class="mono">JOIN</code> آینده قیمت تازه را خودکار می‌گیرد.</p>\n      '
  },
  'two-tables.5': {
    en: '          <span class="box-label">Analogy</span>\n          <p>This is Week 1\'s warehouse, with a second room. <span class="mono">jam_sales</span> is the loading dock &#8212; a fast, constantly-growing log of what left the building. <span class="mono">jam_products</span> is the price list pinned to the office wall &#8212; small, slow-changing, and looked up whenever the loading dock needs a number. <code class="mono">JOIN</code> is the trip between the two rooms, done automatically instead of by hand.</p>\n        ',
    ar: '          <span class="box-label">تشبيه</span>\n          <p>هذا مستودع الأسبوع 1، بغرفة ثانية. <span class="mono">jam_sales</span> هو رصيف التحميل &#8212; سجل سريع ومتنامٍ باستمرار لما غادر المبنى. <span class="mono">jam_products</span> هو قائمة الأسعار المثبتة على جدار المكتب &#8212; صغيرة وبطيئة التغيّر، ويُرجَع إليها كلما احتاج رصيف التحميل رقمًا. <code class="mono">JOIN</code> هي الرحلة بين الغرفتين، تتم تلقائيًا بدلاً من يدويًا.</p>\n        ',
    fa: '          <span class="box-label">قیاس</span>\n          <p>این همان انبار هفتهٔ ۱ است، با یک اتاق دوم. <span class="mono">jam_sales</span> اسکلهٔ بارگیری است &#8212; گزارشی سریع و همواره در حال رشد از آنچه ساختمان را ترک کرده. <span class="mono">jam_products</span> فهرست قیمتی است که به دیوار دفتر سنجاق شده &#8212; کوچک، کندتغییر، و هر زمان اسکلهٔ بارگیری به عددی نیاز داشته باشد به آن مراجعه می‌شود. <code class="mono">JOIN</code> سفر بین آن دو اتاق است، خودکار انجام‌شده به‌جای دستی.</p>\n        '
  },
  'two-tables.6': {
    en: 'Diagram 1',
    ar: 'الرسم ١',
    fa: 'نمودار ۱'
  },
  'two-tables.7': {
    en: 'Two tables, one shared column',
    ar: 'جدولان، عمود مشترك واحد',
    fa: 'دو جدول، یک ستون مشترک'
  },
  'two-tables.8': {
    en: 'flavor appears in both tables &#8212; that shared column is what a JOIN matches rows on.',
    ar: 'تظهر النكهة في كلا الجدولين &#8212; هذا العمود المشترك هو ما تطابق عليه JOIN الصفوف.',
    fa: 'طعم در هر دو جدول ظاهر می‌شود &#8212; همان ستون مشترکی است که JOIN بر اساس آن ردیف‌ها را تطبیق می‌دهد.'
  },
  'inner-join.1': {
    en: 'Section 06',
    ar: 'القسم ٠٦',
    fa: 'بخش ۰۶'
  },
  'inner-join.2': {
    en: '8 min',
    ar: '٨ دقائق',
    fa: '۸ دقیقه'
  },
  'inner-join.3': {
    en: '        <h2>INNER JOIN: rows that match on both sides</h2>\n        <p class="standfirst">The Week 1 promise, delivered: <code class="mono">JOIN</code> is how you combine columns from two tables into one result, matched on a shared column.</p>\n      ',
    ar: '        <h2><span dir="ltr">INNER JOIN</span>: الصفوف التي تتطابق في كلا الجانبين</h2>\n        <p class="standfirst">وعد الأسبوع 1، مُنجَز: <code class="mono">JOIN</code> هي طريقتك لدمج أعمدة من جدولين في نتيجة واحدة، متطابقة على عمود مشترك.</p>\n      ',
    fa: '        <h2><span dir="ltr">INNER JOIN</span>: ردیف‌هایی که در هر دو سمت تطبیق دارند</h2>\n        <p class="standfirst">وعدهٔ هفتهٔ ۱، تحقق‌یافته: <code class="mono">JOIN</code> روشی است که ستون‌ها را از دو جدول در یک نتیجه ترکیب می‌کنی، تطبیق‌داده‌شده بر اساس ستونی مشترک.</p>\n      '
  },
  'inner-join.4': {
    en: '        <p><code class="mono">INNER JOIN</code> is the strictest version: it keeps a row only if the join column has a match in <em>both</em> tables. Row up every <code class="mono">jam_sales</code> row against <code class="mono">jam_products</code> on <code class="mono">flavor</code>, and you get one combined row per sale, now carrying its price and cost alongside it.</p>\n      ',
    ar: '        <p><code class="mono">INNER JOIN</code> هي النسخة الأكثر صرامة: تُبقي صفًا فقط إذا كان لعمود الربط تطابق في <em>كلا</em> الجدولين. طابق كل صف في <code class="mono">jam_sales</code> مع <code class="mono">jam_products</code> على <code class="mono">flavor</code>، وستحصل على صف مدمج واحد لكل عملية بيع، يحمل الآن سعرها وتكلفتها معه.</p>\n      ',
    fa: '        <p><code class="mono">INNER JOIN</code> سخت‌گیرانه‌ترین نسخه است: ردیفی را فقط زمانی نگه می‌دارد که ستون پیوند در <em>هر دو</em> جدول تطابق داشته باشد. هر ردیف <code class="mono">jam_sales</code> را با <code class="mono">jam_products</code> بر اساس <code class="mono">flavor</code> تطبیق بده، و برای هر فروش یک ردیف ترکیبی می‌گیری که حالا قیمت و هزینه‌اش را همراه دارد.</p>\n      '
  },
  'inner-join.5': {
    en: 'Diagram 2',
    ar: 'الرسم ٢',
    fa: 'نمودار ۲'
  },
  'inner-join.6': {
    en: 'INNER JOIN keeps only what matches on both sides',
    ar: 'INNER JOIN تُبقي فقط ما يتطابق في كلا الجانبين',
    fa: 'INNER JOIN فقط چیزی را نگه می‌دارد که در هر دو سمت تطابق دارد'
  },
  'inner-join.7': {
    en: 'Lemon\'s sale disappears from the result entirely &#8212; not flagged, not zeroed, just gone.',
    ar: 'تختفي عملية بيع الليمون من النتيجة تمامًا &#8212; لا تُعلَّم، ولا تُصفَّر، بل تختفي فحسب.',
    fa: 'فروش لیمو کاملاً از نتیجه ناپدید می‌شود &#8212; نه علامت‌گذاری، نه صفر، فقط ناپدید.'
  },
  'inner-join.8': {
    en: '          <span class="box-label">Common mistake</span>\n          <p>Treating <code class="mono">INNER JOIN</code> as the safe default. It\'s the right choice when an unmatched row genuinely shouldn\'t count &#8212; but it silently deletes rows from your result with no warning, which is exactly the wrong behavior when an unmatched row is a data problem you need to see. Section 7 shows the fix.</p>\n        ',
    ar: '          <span class="box-label">خطأ شائع</span>\n          <p>معاملة <code class="mono">INNER JOIN</code> كخيار افتراضي آمن. إنه الخيار الصحيح عندما لا ينبغي حقًا احتساب صف غير مطابق &#8212; لكنه يحذف الصفوف من نتيجتك بصمت دون أي تحذير، وهذا بالضبط السلوك الخاطئ عندما يكون الصف غير المطابق مشكلة بيانات تحتاج لرؤيتها. يعرض القسم 7 الحل.</p>\n        ',
    fa: '          <span class="box-label">اشتباه رایج</span>\n          <p>رفتار با <code class="mono">INNER JOIN</code> به‌عنوان انتخاب پیش‌فرض ایمن. زمانی انتخاب درست است که ردیف بی‌تطبیق واقعاً نباید شمرده شود &#8212; اما بی‌سروصدا و بدون هیچ هشداری ردیف‌ها را از نتیجه‌ات حذف می‌کند، که دقیقاً رفتاری اشتباه است وقتی ردیف بی‌تطبیق مشکلی در داده است که باید ببینی. بخش ۷ راه‌حل را نشان می‌دهد.</p>\n        '
  },
  'left-join.1': {
    en: 'Section 07',
    ar: 'القسم ٠٧',
    fa: 'بخش ۰۷'
  },
  'left-join.2': {
    en: '7 min',
    ar: '٧ دقائق',
    fa: '۷ دقیقه'
  },
  'left-join.3': {
    en: '        <h2>LEFT JOIN: keep every row from the table that matters most</h2>\n        <p class="standfirst">Row 13 was a real sale &#8212; 9 jars of a new Lemon flavor, sold before anyone added it to the price list. Losing it from a report isn\'t safe, it\'s a bug.</p>\n      ',
    ar: '        <h2><span dir="ltr">LEFT JOIN</span>: احتفظ بكل صف من الجدول الأكثر أهمية</h2>\n        <p class="standfirst">كان الصف 13 عملية بيع حقيقية &#8212; 9 برطمانات من نكهة ليمون جديدة، بيعت قبل أن يضيفها أحد إلى قائمة الأسعار. فقدانها من تقرير ليس أمرًا آمنًا، بل خطأ.</p>\n      ',
    fa: '        <h2><span dir="ltr">LEFT JOIN</span>: هر ردیف را از جدولی که بیشترین اهمیت را دارد نگه دار</h2>\n        <p class="standfirst">ردیف ۱۳ فروشی واقعی بود &#8212; ۹ شیشه از طعم لیمون تازه، فروخته‌شده پیش از آنکه کسی آن را به فهرست قیمت اضافه کند. از دست‌دادنش از یک گزارش امن نیست، یک باگ است.</p>\n      '
  },
  'left-join.4': {
    en: '        <p><code class="mono">LEFT JOIN</code> keeps every row from the table you list first (the "left" table &#8212; <code class="mono">jam_sales</code> here), whether or not it finds a match on the right. Where there\'s no match, the right-hand columns come back as <code class="mono">NULL</code> instead of the row disappearing.</p>\n      ',
    ar: '        <p><code class="mono">LEFT JOIN</code> تُبقي كل صف من الجدول الذي تذكره أولاً (الجدول "الأيسر" &#8212; <code class="mono">jam_sales</code> هنا)، سواء وجدت تطابقًا في الجانب الأيمن أم لا. حيث لا يوجد تطابق، تعود أعمدة الجانب الأيمن كـ<code class="mono">NULL</code> بدلاً من اختفاء الصف.</p>\n      ',
    fa: '        <p><code class="mono">LEFT JOIN</code> هر ردیف را از جدولی که اول ذکر می‌کنی (جدول «چپ» &#8212; اینجا <code class="mono">jam_sales</code>) نگه می‌دارد، چه در سمت راست تطابقی پیدا کند چه نکند. جایی که تطابقی نیست، ستون‌های سمت راست به‌جای ناپدیدشدن ردیف، به‌صورت <code class="mono">NULL</code> برمی‌گردند.</p>\n      '
  },
  'left-join.5': {
    en: 'Diagram 3',
    ar: 'الرسم ٣',
    fa: 'نمودار ۳'
  },
  'left-join.6': {
    en: 'LEFT JOIN keeps the unmatched row, flagged with NULL',
    ar: 'LEFT JOIN تُبقي الصف غير المتطابق، معلَّمًا بـNULL',
    fa: 'LEFT JOIN ردیف بی‌تطبیق را نگه می‌دارد، با NULL علامت‌گذاری‌شده'
  },
  'left-join.7': {
    en: 'Same 13 sales, same JOIN condition &#8212; only the join type changed, and a real data gap became visible instead of invisible.',
    ar: 'نفس الـ13 عملية بيع، نفس شرط JOIN &#8212; تغيّر فقط نوع JOIN، وأصبحت فجوة بيانات حقيقية مرئية بدلاً من خفية.',
    fa: 'همان ۱۳ فروش، همان شرط JOIN &#8212; فقط نوع JOIN تغییر کرد، و یک شکاف واقعی در داده به‌جای پنهان‌بودن، دیده‌شدنی شد.'
  },
  'left-join.8': {
    en: '          <span class="box-label">Key point</span>\n          <p>A <code class="mono">NULL</code> from a <code class="mono">LEFT JOIN</code> is a finding, not an error to hide from. Here it means: "9 jars of Lemon were sold, and nobody has told the database what Lemon costs yet." That\'s worth a message to whoever\'s pricing the new flavor &#8212; not a silently shrunk report.</p>\n        ',
    ar: '          <span class="box-label">نقطة أساسية</span>\n          <p><code class="mono">NULL</code> من <code class="mono">LEFT JOIN</code> اكتشاف، لا خطأ يُخفى. هنا يعني: "بيعت 9 برطمانات من الليمون، ولم يخبر أحد قاعدة البيانات بعد بتكلفة الليمون." هذا يستحق رسالة لمن يحدد سعر النكهة الجديدة &#8212; لا تقريرًا تقلّص بصمت.</p>\n        ',
    fa: '          <span class="box-label">نکتهٔ کلیدی</span>\n          <p><code class="mono">NULL</code> از <code class="mono">LEFT JOIN</code> یک یافته است، نه خطایی که باید پنهانش کرد. اینجا یعنی: «۹ شیشه لیمون فروخته شد، و هنوز کسی به پایگاه داده نگفته لیمون چقدر قیمت دارد.» این ارزش یک پیام به کسی که قیمت طعم تازه را تعیین می‌کند دارد &#8212; نه گزارشی که بی‌سروصدا کوچک‌تر شده.</p>\n        '
  },
  'calculating-metrics-sql.1': {
    en: 'Section 08',
    ar: 'القسم ٠٨',
    fa: 'بخش ۰۸'
  },
  'calculating-metrics-sql.2': {
    en: '8 min',
    ar: '٨ دقائق',
    fa: '۸ دقیقه'
  },
  'calculating-metrics-sql.3': {
    en: '        <h2>Revenue, cost, profit and margin &#8212; one query, all three flavors</h2>\n        <p class="standfirst">Everything from today lands here: <code class="mono">JOIN</code> to bring price and cost alongside each sale, <code class="mono">GROUP BY</code> to collapse it to one row per flavor.</p>\n      ',
    ar: '        <h2>الإيراد والتكلفة والربح والهامش &#8212; استعلام واحد، النكهات الثلاث كلها</h2>\n        <p class="standfirst">كل شيء من اليوم يصل إلى هنا: <code class="mono">JOIN</code> لجلب السعر والتكلفة إلى جانب كل عملية بيع، <code class="mono">GROUP BY</code> لاختزالها إلى صف واحد لكل نكهة.</p>\n      ',
    fa: '        <h2>درآمد، هزینه، سود و حاشیه &#8212; یک پرس‌وجو، هر سه طعم</h2>\n        <p class="standfirst">همه‌چیز از امروز اینجا فرود می‌آید: <code class="mono">JOIN</code> برای آوردن قیمت و هزینه در کنار هر فروش، <code class="mono">GROUP BY</code> برای فشرده‌کردنش به یک ردیف برای هر طعم.</p>\n      '
  },
  'calculating-metrics-sql.4': {
    en: '        <p>Revenue is units sold &#215; selling price, summed. Cost is units sold &#215; cost price, summed. Profit is revenue minus cost. Profit margin is profit as a percentage of revenue &#8212; the number that tells you which flavor is actually worth making more of, not just which one sells the most.</p>\n      ',
    ar: '        <p>الإيراد هو الكمية المباعة &#215; سعر البيع، مجموعًا. التكلفة هي الكمية المباعة &#215; سعر التكلفة، مجموعًا. الربح هو الإيراد ناقص التكلفة. هامش الربح هو الربح كنسبة مئوية من الإيراد &#8212; الرقم الذي يخبرك أي نكهة يستحق صنع المزيد منها فعليًا، لا فقط أيها الأكثر مبيعًا.</p>\n      ',
    fa: '        <p>درآمد یعنی تعداد فروخته‌شده &#215; قیمت فروش، جمع‌زده‌شده. هزینه یعنی تعداد فروخته‌شده &#215; قیمت تمام‌شده، جمع‌زده‌شده. سود یعنی درآمد منهای هزینه. حاشیهٔ سود یعنی سود به‌صورت درصدی از درآمد &#8212; عددی که به تو می‌گوید کدام طعم واقعاً ارزش ساختن بیشتر دارد، نه فقط کدام‌یک بیشتر فروش می‌رود.</p>\n      '
  },
  'calculating-metrics-sql.5': {
    en: '          <span class="box-label">Key point</span>\n          <p>Strawberry sells the most units and earns the most total profit &#8212; but Peach has by far the best margin: 75&#37; of every Peach dollar is profit, against 50&#37; for Blueberry. Volume and margin answer different questions, and Section 10 needs both to make a real recommendation.</p>\n        ',
    ar: '          <span class="box-label">نقطة أساسية</span>\n          <p>يبيع الفراولة أكثر الكميات ويحقق أكبر ربح إجمالي &#8212; لكن الخوخ لديه أفضل هامش بفارق كبير: 75&#37; من كل دولار خوخ هو ربح، مقابل 50&#37; للتوت الأزرق. الكمية والهامش يجيبان عن سؤالين مختلفين، ويحتاج القسم 10 كليهما لتقديم توصية حقيقية.</p>\n        ',
    fa: '          <span class="box-label">نکتهٔ کلیدی</span>\n          <p>توت‌فرنگی بیشترین تعداد را می‌فروشد و بیشترین سود کل را کسب می‌کند &#8212; اما هلو به‌مراتب بهترین حاشیه را دارد: ۷۵٪ از هر دلار هلو سود است، در برابر ۵۰٪ برای بلوبری. حجم و حاشیه به دو سؤال متفاوت پاسخ می‌دهند، و بخش ۱۰ برای ارائهٔ توصیه‌ای واقعی به هر دو نیاز دارد.</p>\n        '
  },
  'ai-corner.1': {
    en: 'Section 09 &#8212; AI layer',
    ar: 'القسم ٠٩ — طبقة الذكاء الاصطناعي',
    fa: 'بخش ۰۹ — لایه هوش مصنوعی'
  },
  'ai-corner.2': {
    en: '6 min',
    ar: '٦ دقائق',
    fa: '۶ دقیقه'
  },
  'ai-corner.3': {
    en: '        <h2>AI co-pilot corner: the wrong JOIN doesn\'t throw an error</h2>\n        <p class="standfirst">Picking <code class="mono">INNER JOIN</code> instead of <code class="mono">LEFT JOIN</code> isn\'t a syntax mistake &#8212; the query runs perfectly. That\'s exactly what makes it dangerous when an AI assistant picks it for you.</p>\n      ',
    ar: '        <h2>ركن مساعد الذكاء الاصطناعي: JOIN الخاطئة لا تُصدر خطأ</h2>\n        <p class="standfirst">اختيار <code class="mono">INNER JOIN</code> بدلاً من <code class="mono">LEFT JOIN</code> ليس خطأ نحويًا &#8212; يعمل الاستعلام تمامًا. هذا بالضبط ما يجعله خطيرًا عندما يختاره مساعد ذكاء اصطناعي نيابة عنك.</p>\n      ',
    fa: '        <h2>گوشه همیار هوش مصنوعی: JOINِ غلط خطا نمی‌دهد</h2>\n        <p class="standfirst">انتخاب <code class="mono">INNER JOIN</code> به‌جای <code class="mono">LEFT JOIN</code> اشتباه نحوی نیست &#8212; پرس‌وجو کاملاً اجرا می‌شود. این دقیقاً همان چیزی است که وقتی دستیار هوش مصنوعی آن را برایت انتخاب می‌کند، خطرناکش می‌کند.</p>\n      '
  },
  'ai-corner.4': {
    en: 'Weak prompt',
    ar: 'طلب ضعيف',
    fa: 'درخواست ضعیف'
  },
  'ai-corner.5': {
    en: 'Strong prompt',
    ar: 'طلب قوي',
    fa: 'درخواست قوی'
  },
  'ai-corner.6': {
    en: '<p><strong>Prompt:</strong> "Write a SQL query joining jam_sales and jam_products to get total revenue per flavor."</p>',
    ar: '<p><strong>الطلب:</strong> "اكتب استعلام SQL يدمج jam_sales وjam_products للحصول على إجمالي الإيراد لكل نكهة."</p>',
    fa: '<p><strong>درخواست:</strong> «یک پرس‌وجوی SQL بنویس که jam_sales و jam_products را برای گرفتن کل درآمد هر طعم به هم بپیوندد.»</p>'
  },
  'ai-corner.7': {
    en: '<p>It runs. It returns three tidy rows. What it doesn\'t show you: 9 jars of Lemon were sold and are <strong>missing from this total</strong>, because the prompt never said what to do about a flavor with no price yet, and the assistant defaulted to the join type that hides the gap instead of the one that reveals it.</p>',
    ar: '<p>يعمل. يُعيد ثلاثة صفوف أنيقة. ما لا يريك إياه: بيعت 9 برطمانات من الليمون و<strong>مفقودة من هذا الإجمالي</strong>، لأن الطلب لم يذكر أبدًا ماذا يُفعل بنكهة ليس لها سعر بعد، فاختار المساعد افتراضيًا نوع JOIN الذي يخفي الفجوة بدلاً من الذي يكشفها.</p>',
    fa: '<p>اجرا می‌شود. سه ردیف مرتب برمی‌گرداند. چیزی که نشانت نمی‌دهد: ۹ شیشه لیمون فروخته شده و <strong>از این مجموع غایب است</strong>، چون درخواست هرگز نگفت با طعمی که هنوز قیمت ندارد چه باید کرد، و دستیار به‌طور پیش‌فرض نوع JOINای را انتخاب کرد که شکاف را پنهان می‌کند نه آنکه آشکارش کند.</p>'
  },
  'ai-corner.8': {
    en: '<p><strong>Prompt:</strong> "Write a PostgreSQL query joining jam_sales and jam_products to get total revenue per flavor. Use a LEFT JOIN so any sale with no matching product row still appears, with NULL revenue, instead of being silently excluded."</p>',
    ar: '<p><strong>الطلب:</strong> "اكتب استعلام PostgreSQL يدمج jam_sales وjam_products للحصول على إجمالي الإيراد لكل نكهة. استخدم LEFT JOIN بحيث تظهر أي عملية بيع بلا صف منتج مطابق مع إيراد NULL، بدلاً من استبعادها بصمت."</p>',
    fa: '<p><strong>درخواست:</strong> «یک پرس‌وجوی PostgreSQL بنویس که jam_sales و jam_products را برای گرفتن کل درآمد هر طعم به هم بپیوندد. از LEFT JOIN استفاده کن تا هر فروشی که ردیف محصول متناظر ندارد همچنان با درآمد NULL ظاهر شود، نه اینکه بی‌سروصدا حذف شود.»</p>'
  },
  'ai-corner.9': {
    en: '          <span class="box-label">Common mistake</span>\n          <p>Trusting a JOIN because the row count "looks about right." 12 rows out of 13 sales looks like a small, reasonable trim &#8212; not obviously a bug. <strong>Verify it</strong> means checking that row count against what you expect, not just that the query ran.</p>\n        ',
    ar: '          <span class="box-label">خطأ شائع</span>\n          <p>الثقة بـJOIN لأن عدد الصفوف "يبدو صحيحًا تقريبًا." 12 صفًا من أصل 13 عملية بيع يبدو كتقليم صغير ومعقول &#8212; ليس خطأً واضحًا. <strong>تحقق منه</strong> يعني التحقق من عدد الصفوف مقابل ما تتوقعه، لا فقط أن الاستعلام عمل.</p>\n        ',
    fa: '          <span class="box-label">اشتباه رایج</span>\n          <p>اعتماد به یک JOIN چون تعداد ردیف‌ها «تقریباً درست به‌نظر می‌رسد». ۱۲ ردیف از ۱۳ فروش مثل یک کوتاه‌شدن کوچک و منطقی به‌نظر می‌رسد &#8212; نه یک باگ آشکار. <strong>تأییدش کن</strong> یعنی چک‌کردن تعداد ردیف‌ها در برابر آنچه انتظار داری، نه فقط اینکه پرس‌وجو اجرا شد.</p>\n        '
  },
  'worked-example.1': {
    en: 'Section 10',
    ar: 'القسم ١٠',
    fa: 'بخش ۱۰'
  },
  'worked-example.2': {
    en: '7 min',
    ar: '٧ دقائق',
    fa: '۷ دقیقه'
  },
  'worked-example.3': {
    en: '        <h2>Worked example: which flavor should the stand feature next month?</h2>\n        <p class="standfirst">Section 1 opened with the question. Here\'s the full answer, built from every piece this page covered.</p>\n      ',
    ar: '        <h2>مثال تطبيقي: أي نكهة يجب أن يبرزها الكشك الشهر القادم؟</h2>\n        <p class="standfirst">فتح القسم 1 بالسؤال. إليك الإجابة الكاملة، مبنية من كل قطعة غطتها هذه الصفحة.</p>\n      ',
    fa: '        <h2>مثال حل‌شده: غرفه ماه بعد باید کدام طعم را برجسته کند؟</h2>\n        <p class="standfirst">بخش ۱ با این سؤال باز شد. این‌جا پاسخ کامل است، ساخته‌شده از هر بخشی که این صفحه پوشش داد.</p>\n      '
  },
  'worked-example.4': {
    en: '          <span class="box-label">1. Revenue and profit, joined and grouped</span>\n          <p>From Section 8\'s query: Strawberry earns the most total profit ($300), Blueberry the least ($180), Peach in between ($120) &#8212; but on far fewer units.</p>\n        ',
    ar: '          <span class="box-label">1. الإيراد والربح، مدمَجان ومجمَّعان</span>\n          <p>من استعلام القسم 8: يحقق الفراولة أكبر ربح إجمالي (300 دولار)، والتوت الأزرق الأقل (180 دولارًا)، والخوخ بينهما (120 دولارًا) &#8212; لكن بكمية أقل بكثير.</p>\n        ',
    fa: '          <span class="box-label">۱. درآمد و سود، پیوسته و گروه‌بندی‌شده</span>\n          <p>از پرس‌وجوی بخش ۸: توت‌فرنگی بیشترین سود کل را کسب می‌کند (۳۰۰ دلار)، بلوبری کمترین را (۱۸۰ دلار)، هلو بین این دو (۱۲۰ دلار) &#8212; اما با تعداد بسیار کمتر.</p>\n        '
  },
  'worked-example.5': {
    en: '          <span class="box-label">2. Margin tells a different story</span>\n          <p>Peach converts 75&#37; of every dollar into profit &#8212; the best of the three, by a wide margin over Blueberry\'s 50&#37;. If the stand could sell as many Peach jars as Strawberry, profit would be far higher than any of today\'s real numbers.</p>\n        ',
    ar: '          <span class="box-label">2. الهامش يروي قصة مختلفة</span>\n          <p>يحوّل الخوخ 75&#37; من كل دولار إلى ربح &#8212; الأفضل بين الثلاثة، بفارق كبير عن 50&#37; للتوت الأزرق. لو استطاع الكشك بيع برطمانات خوخ بقدر الفراولة، لكان الربح أعلى بكثير من أي رقم حقيقي اليوم.</p>\n        ',
    fa: '          <span class="box-label">۲. حاشیه داستانی متفاوت روایت می‌کند</span>\n          <p>هلو ۷۵٪ از هر دلار را به سود تبدیل می‌کند &#8212; بهترین در میان سه‌تا، با فاصلهٔ زیاد از ۵۰٪ بلوبری. اگر غرفه می‌توانست به‌اندازهٔ توت‌فرنگی شیشهٔ هلو بفروشد، سود بسیار بالاتر از هر عدد واقعی امروز می‌بود.</p>\n        '
  },
  'worked-example.6': {
    en: 'Diagram 4',
    ar: 'الرسم ٤',
    fa: 'نمودار ۴'
  },
  'worked-example.7': {
    en: 'Profit vs. margin, by flavor',
    ar: 'الربح مقابل الهامش، حسب النكهة',
    fa: 'سود در برابر حاشیه، بر اساس طعم'
  },
  'worked-example.8': {
    en: 'Highest bar and highest line point at two different flavors &#8212; that\'s the whole reason this section needed both numbers.',
    ar: 'أعلى عمود وأعلى خط يشيران إلى نكهتين مختلفتين &#8212; هذا هو السبب الكامل لحاجة هذا القسم للرقمين معًا.',
    fa: 'بلندترین میله و بالاترین خط به دو طعم متفاوت اشاره می‌کنند &#8212; این کل دلیلی است که این بخش به هر دو عدد نیاز داشت.'
  },
  'worked-example.9': {
    en: '          <span class="box-label">3. The decision</span>\n          <p>Strawberry stays the anchor &#8212; it earns the most money today and shouldn\'t be cut back. But Peach\'s 75&#37; margin is too good to ignore: the recommendation is to feature Peach more prominently next month (better placement, a small sign, maybe a free sample) and watch whether units sold rise without the margin dropping. And separately &#8212; someone needs to price Lemon before the next market day, so Section 9\'s <code class="mono">LEFT JOIN</code> stops finding an unpriced sale every week.</p>\n        ',
    ar: '          <span class="box-label">3. القرار</span>\n          <p>يبقى الفراولة الركيزة &#8212; فهو يحقق أكبر مبلغ من المال اليوم ولا ينبغي تقليصه. لكن هامش الخوخ 75&#37; جيد جدًا لتجاهله: التوصية هي إبراز الخوخ بشكل أكثر بروزًا الشهر القادم (موقع أفضل، لافتة صغيرة، ربما عيّنة مجانية) ومراقبة ما إذا كانت الكمية المباعة سترتفع دون انخفاض الهامش. وبشكل منفصل &#8212; يحتاج شخص ما لتسعير الليمون قبل يوم السوق القادم، حتى يتوقف <code class="mono">LEFT JOIN</code> في القسم 9 عن إيجاد عملية بيع غير مسعَّرة كل أسبوع.</p>\n        ',
    fa: '          <span class="box-label">۳. تصمیم</span>\n          <p>توت‌فرنگی لنگر باقی می‌ماند &#8212; امروز بیشترین پول را کسب می‌کند و نباید کاهش یابد. اما حاشیهٔ ۷۵٪ هلو خیلی خوب است که نادیده گرفته شود: توصیه این است که هلو ماه بعد برجسته‌تر معرفی شود (جایگاه بهتر، تابلوی کوچک، شاید نمونهٔ رایگان) و بررسی شود که آیا تعداد فروش بدون افت حاشیه بالا می‌رود. و جداگانه &#8212; کسی باید پیش از روز بازار بعدی برای لیمون قیمت تعیین کند، تا <code class="mono">LEFT JOIN</code> بخش ۹ هر هفته یک فروش بی‌قیمت پیدا نکند.</p>\n        '
  },
  'common-mistakes.1': {
    en: 'Section 11',
    ar: 'القسم ١١',
    fa: 'بخش ۱۱'
  },
  'common-mistakes.2': {
    en: '4 min',
    ar: '٤ دقائق',
    fa: '۴ دقیقه'
  },
  'common-mistakes.3': {
    en: '        <h2>Common mistakes, gathered in one place</h2>\n        <p class="standfirst">Everything this page warned about, as a single reference.</p>\n      ',
    ar: '        <h2>الأخطاء الشائعة، مجمّعة في مكان واحد</h2>\n        <p class="standfirst">كل ما حذّرت منه هذه الصفحة، كمرجع واحد.</p>\n      ',
    fa: '        <h2>اشتباهات رایج، در یک‌جا گردآوری شده</h2>\n        <p class="standfirst">هر چیزی که این صفحه دربارهٔ آن هشدار داد، به‌عنوان یک مرجع واحد.</p>\n      '
  },
  'common-mistakes.4': {
    en: 'Mistake',
    ar: 'الخطأ',
    fa: 'اشتباه'
  },
  'common-mistakes.5': {
    en: 'Why it matters',
    ar: 'لماذا يهم',
    fa: 'چرا اهمیت دارد'
  },
  'homework.1': {
    en: 'Section 12',
    ar: 'القسم ١٢',
    fa: 'بخش ۱۲'
  },
  'homework.2': {
    en: '        <h2>Homework: write your report to the stand owner</h2>\n        <p class="standfirst">You\'re the analyst. The stand owner from Section 1 is waiting on your recommendation. Write it up as a short report, in your own words, and email it to me &#8212; each section below is small on its own; answer them in order.</p>\n      ',
    ar: '        <h2>الواجب: اكتب تقريرك لصاحب الكشك</h2>\n        <p class="standfirst">أنت المحلّل. صاحب الكشك من القسم 1 ينتظر توصيتك. اكتبها كتقرير قصير، بكلماتك الخاصة، وأرسله لي بالبريد الإلكتروني &#8212; كل قسم أدناه صغير بذاته؛ أجب عنها بالترتيب.</p>\n      ',
    fa: '        <h2>تکلیف: گزارشت را برای صاحب غرفه بنویس</h2>\n        <p class="standfirst">تو تحلیل‌گر هستی. صاحب غرفهٔ بخش ۱ منتظر توصیهٔ توست. آن را به‌صورت گزارشی کوتاه، با کلمات خودت بنویس و برایم ایمیل کن &#8212; هر بخش زیر به‌تنهایی کوچک است؛ به ترتیب پاسخشان بده.</p>\n      '
  },
  'homework.3': {
    en: '          <span class="box-label">Write your report, section by section, in order</span>\n          <ol class="steps">\n            <li><strong>Set the scene</strong> &#8212; In 2&#8211;3 sentences, describe the two tables (what each one holds, why they\'re separate) and the question the stand owner actually wants answered.</li>\n            <li><strong>Why two tables, not one</strong> &#8212; In your own words, explain why price and cost live in <code class="mono">jam_products</code> instead of being copied into every row of <code class="mono">jam_sales</code>.</li>\n            <li><strong>INNER JOIN vs. LEFT JOIN</strong> &#8212; Run both joins yourself. What\'s different about the row count and the Lemon row between the two results? When would <code class="mono">INNER JOIN</code> actually be the right choice instead of a mistake?</li>\n            <li><strong>The metrics</strong> &#8212; Paste your Section 8 query and its result. Which flavor earns the most total profit? Which has the best margin? Why aren\'t they the same flavor?</li>\n            <li><strong>Working with AI</strong> &#8212; Describe a moment from this week where you\'d need to explain, verify, or stand behind a JOIN an AI assistant wrote for you. What could go wrong if you skipped that step?</li>\n            <li><strong>The decision</strong> &#8212; What should the stand actually do next month? Give your recommendation and justify it with the actual numbers, not a guess.</li>\n          </ol>\n        ',
    ar: '          <span class="box-label">اكتب تقريرك، قسمًا تلو الآخر، بالترتيب</span>\n          <ol class="steps">\n            <li><strong>حدّد المشهد</strong> &#8212; في 2-3 جمل، صف الجدولين (ما يحتويه كل منهما، ولماذا هما منفصلان) والسؤال الذي يريد صاحب الكشك إجابة عنه فعليًا.</li>\n            <li><strong>لماذا جدولان لا جدول واحد</strong> &#8212; اشرح بكلماتك سبب عيش السعر والتكلفة في <code class="mono">jam_products</code> بدلاً من نسخهما إلى كل صف في <code class="mono">jam_sales</code>.</li>\n            <li><strong>INNER JOIN مقابل LEFT JOIN</strong> &#8212; شغّل كلا النوعين بنفسك. ما الفرق في عدد الصفوف وصف الليمون بين النتيجتين؟ متى يكون <code class="mono">INNER JOIN</code> الخيار الصحيح فعليًا بدلاً من كونه خطأ؟</li>\n            <li><strong>المقاييس</strong> &#8212; الصق استعلام القسم 8 ونتيجته. أي نكهة تحقق أكبر ربح إجمالي؟ أيها لديه أفضل هامش؟ لماذا ليستا نفس النكهة؟</li>\n            <li><strong>العمل مع الذكاء الاصطناعي</strong> &#8212; صف لحظة من هذا الأسبوع تحتاج فيها إلى شرح JOIN كتبه مساعد ذكاء اصطناعي أو التحقق منه أو الوقوف خلفه. ما الذي قد يحدث خطأً لو تخطيت تلك الخطوة؟</li>\n            <li><strong>القرار</strong> &#8212; ماذا يجب أن يفعل الكشك فعليًا الشهر القادم؟ أعطِ توصيتك وبرّرها بالأرقام الفعلية، لا بالتخمين.</li>\n          </ol>\n        ',
    fa: '          <span class="box-label">گزارشت را بخش‌به‌بخش، به ترتیب بنویس</span>\n          <ol class="steps">\n            <li><strong>صحنه را بچین</strong> &#8212; در ۲ تا ۳ جمله، دو جدول را توصیف کن (هرکدام چه چیزی دارد، چرا جدا هستند) و سؤالی که صاحب غرفه واقعاً پاسخش را می‌خواهد.</li>\n            <li><strong>چرا دو جدول، نه یکی</strong> &#8212; با کلمات خودت توضیح بده چرا قیمت و هزینه در <code class="mono">jam_products</code> زندگی می‌کنند به‌جای کپی‌شدن در هر ردیف <code class="mono">jam_sales</code>.</li>\n            <li><strong>INNER JOIN در برابر LEFT JOIN</strong> &#8212; هر دو JOIN را خودت اجرا کن. تفاوت تعداد ردیف‌ها و ردیف لیمون بین دو نتیجه چیست؟ کِی <code class="mono">INNER JOIN</code> واقعاً انتخاب درست است، نه یک اشتباه؟</li>\n            <li><strong>معیارها</strong> &#8212; پرس‌وجوی بخش ۸ و نتیجه‌اش را جای‌گذاری کن. کدام طعم بیشترین سود کل را کسب می‌کند؟ کدام‌یک بهترین حاشیه را دارد؟ چرا آن دو یک طعم نیستند؟</li>\n            <li><strong>کار با هوش مصنوعی</strong> &#8212; لحظه‌ای از این هفته را توصیف کن که در آن لازم بود JOINای را که دستیار هوش مصنوعی نوشته بود توضیح دهی، تأیید کنی یا پشتش بایستی. اگر آن گام را رد می‌کردی چه چیزی ممکن بود اشتباه پیش برود؟</li>\n            <li><strong>تصمیم</strong> &#8212; غرفه ماه بعد واقعاً باید چه‌کاری انجام دهد؟ توصیه‌ات را بده و آن را با اعداد واقعی، نه یک حدس، توجیه کن.</li>\n          </ol>\n        '
  },
  'before-week-3.1': {
    en: 'Section 13',
    ar: 'القسم ١٣',
    fa: 'بخش ۱۳'
  },
  'before-week-3.2': {
    en: '        <h2>Before Week 3</h2>\n        <p>You can now compute the right numbers. Week 3 asks a different question: how do you show them to someone who doesn\'t want to read a table &#8212; choosing the right chart, and knowing when a chart is quietly misleading.</p>\n      ',
    ar: '        <h2>قبل الأسبوع 3</h2>\n        <p>أصبحت الآن قادرًا على حساب الأرقام الصحيحة. يطرح الأسبوع 3 سؤالاً مختلفًا: كيف تعرضها لشخص لا يريد قراءة جدول &#8212; اختيار الرسم البياني الصحيح، ومعرفة متى يكون الرسم مضلّلاً بهدوء.</p>\n      ',
    fa: '        <h2>پیش از هفته ۳</h2>\n        <p>حالا می‌توانی اعداد درست را محاسبه کنی. هفته ۳ سؤالی متفاوت می‌پرسد: چطور آن‌ها را به کسی نشان دهی که نمی‌خواهد جدول بخواند &#8212; انتخاب نمودار درست، و دانستن اینکه کِی یک نمودار بی‌سروصدا گمراه‌کننده است.</p>\n      '
  },
  'before-week-3.3': {
    en: 'Back to top &#8593;',
    ar: 'العودة للأعلى &#8593;',
    fa: 'بازگشت به بالا &#8593;'
  },
  'footer.1': {
    en: 'BA2 Week 2 &#183; Calculating Metrics',
    ar: 'الأسبوع 2 من BA2 &#183; حساب المقاييس',
    fa: 'هفته ۲ از تحلیل کسب‌وکار ۲ &#183; محاسبهٔ معیارها'
  },
};
