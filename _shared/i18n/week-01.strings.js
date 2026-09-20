// BA2 Week 1 -- localized strings (pilot of the externalized-strings i18n pattern).
// Loaded via <script src>, consumed by _shared/scripts/week.js's fillI18n().
// Each key holds {en, ar, fa}; the en/ar text is moved verbatim from the page's former
// data-lang sibling-div markup, fa is new. A missing language falls back to en at render time.
// fa (and ar) are solid-faith draft translations, not a substitute for native-speaker review.
window.PAGE_I18N_STRINGS = {
  'topbar.1': {
    en: 'Back to hub',
    ar: 'العودة إلى المقرر',
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
    en: 'Week 1 — Statistics at Scale',
    ar: 'الأسبوع 1 — الإحصاء على نطاق واسع',
    fa: 'هفته ۱ — آمار در مقیاس بزرگ'
  },
  'sidebar.3': {
    en: '        <a href="#welcome" class="current">Welcome</a>\n        <a href="#sampling">Choosing your sample</a>\n        <div class="grp-label">Core aggregates</div>\n        <a href="#avg-count-sum">AVG, COUNT, SUM</a>\n        <a href="#stddev">Standard deviation</a>\n        <div class="grp-label">Distributions</div>\n        <a href="#groupby-freq">Frequency distribution</a>\n        <a href="#median">Median</a>\n        <div class="grp-label">Diagnostic layer</div>\n        <a href="#groupby-segment">Comparing segments</a>\n        <div class="grp-label">AI layer</div>\n        <a href="#ai-corner">AI co-pilot corner</a>\n        <div class="grp-label">Applied</div>\n        <a href="#worked-example">Worked example</a>\n        <div class="grp-label">Reference</div>\n        <a href="#common-mistakes">Common mistakes</a>\n        <div class="grp-label">Homework</div>\n        <a href="#homework">Homework</a>\n        <a href="#before-week-2">Before Week 2</a>\n      ',
    ar: '        <a href="#welcome" class="current">ترحيب</a>\n        <a href="#sampling">اختيار عيّنتك</a>\n        <div class="grp-label">التجميعات الأساسية</div>\n        <a href="#avg-count-sum"><span dir="ltr">AVG, COUNT, SUM</span></a>\n        <a href="#stddev">الانحراف المعياري</a>\n        <div class="grp-label">التوزيعات</div>\n        <a href="#groupby-freq">التوزيع التكراري</a>\n        <a href="#median">الوسيط</a>\n        <div class="grp-label">الطبقة التشخيصية</div>\n        <a href="#groupby-segment">مقارنة الفئات</a>\n        <div class="grp-label">طبقة الذكاء الاصطناعي</div>\n        <a href="#ai-corner">ركن مساعد الذكاء الاصطناعي</a>\n        <div class="grp-label">تطبيقي</div>\n        <a href="#worked-example">مثال تطبيقي</a>\n        <div class="grp-label">مرجع</div>\n        <a href="#common-mistakes">أخطاء شائعة</a>\n        <div class="grp-label">الواجب</div>\n        <a href="#homework">الواجب</a>\n        <a href="#before-week-2">قبل الأسبوع 2</a>\n      ',
    fa: '        <a href="#welcome" class="current">خوش‌آمدید</a>\n        <a href="#sampling">انتخاب نمونه‌ات</a>\n        <div class="grp-label">تجمیع‌های پایه</div>\n        <a href="#avg-count-sum"><span dir="ltr">AVG, COUNT, SUM</span></a>\n        <a href="#stddev">انحراف معیار</a>\n        <div class="grp-label">توزیع‌ها</div>\n        <a href="#groupby-freq">توزیع فراوانی</a>\n        <a href="#median">میانه</a>\n        <div class="grp-label">لایه تشخیصی</div>\n        <a href="#groupby-segment">مقایسه بخش‌ها</a>\n        <div class="grp-label">لایه هوش مصنوعی</div>\n        <a href="#ai-corner">گوشه همیار هوش مصنوعی</a>\n        <div class="grp-label">کاربردی</div>\n        <a href="#worked-example">مثال حل‌شده</a>\n        <div class="grp-label">مرجع</div>\n        <a href="#common-mistakes">اشتباهات رایج</a>\n        <div class="grp-label">تکلیف</div>\n        <a href="#homework">تکلیف</a>\n        <a href="#before-week-2">پیش از هفته ۲</a>\n      '
  },
  'cover.1': {
    en: 'Business Analytics 2 &#183; Week 1',
    ar: 'تحليلات الأعمال 2 &#183; الأسبوع 1',
    fa: 'تحلیل کسب‌وکار ۲ &#183; هفته ۱'
  },
  'cover.2': {
    en: '        <h1>Statistics at Scale:<em>Computing What You Already Understand</em></h1>\n        <p class="lede">You already know what a mean, a median, and a standard deviation are &#8212; BA1 covered that. This week is about a different problem entirely: computing them when your data lives in a database with millions of rows, not a spreadsheet you can see all of at once.</p>\n      ',
    ar: '        <h1>الإحصاء على نطاق واسع:<em>حساب ما تعرفه بالفعل</em></h1>\n        <p class="lede">أنت تعرف بالفعل ما هو المتوسط والوسيط والانحراف المعياري — BA1 غطّى ذلك. هذا الأسبوع يتناول مشكلة مختلفة تمامًا: حساب هذه القيم عندما تعيش بياناتك في قاعدة بيانات بملايين الصفوف، لا في جدول بيانات يمكنك رؤيته كاملاً دفعة واحدة.</p>\n      ',
    fa: '        <h1>آمار در مقیاس بزرگ:<em>محاسبهٔ چیزی که از قبل می‌دانی</em></h1>\n        <p class="lede">تو از قبل می‌دانی میانگین، میانه و انحراف معیار چه هستند &#8212; BA1 آن را پوشش داد. این هفته دربارهٔ مسئله‌ای کاملاً متفاوت است: محاسبهٔ همین مقادیر وقتی داده‌هایت در پایگاه داده‌ای با میلیون‌ها ردیف زندگی می‌کند، نه در صفحه‌گسترده‌ای که بتوانی یکجا و کامل ببینی.</p>\n      '
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
    en: '&#8776; 55 min &#183; reading + SQL practice',
    ar: '&#8776; ٥٥ دقيقة &#183; قراءة وتدريب SQL',
    fa: '&#8776; ۵۵ دقیقه &#183; مطالعه و تمرین SQL'
  },
  'cover.6': {
    en: '          <span class="box-label">A note on the slides above</span>\n          <p>The original deck covers the statistics half of this week faithfully. The SQL half is new &#8212; it doesn\'t exist in the original slides, because BA2 didn\'t originally teach SQL this early. This page merges both.</p>\n        ',
    ar: '          <span class="box-label">ملاحظة حول الشرائح أعلاه</span>\n          <p>تغطي الشرائح الأصلية نصف الإحصاء من هذا الأسبوع بأمانة. أما نصف SQL فهو جديد تمامًا — لم يكن موجودًا في الشرائح الأصلية، لأن BA2 لم يكن يعلّم SQL في هذه المرحلة المبكرة أصلاً. هذه الصفحة تدمج الاثنين معًا.</p>\n        ',
    fa: '          <span class="box-label">نکته‌ای دربارهٔ اسلایدهای بالا</span>\n          <p>اسلایدهای اصلی نیمهٔ آماری این هفته را به‌طور وفادارانه پوشش می‌دهند. نیمهٔ SQL تازه است &#8212; در اسلایدهای اصلی وجود نداشت، چون BA2 در ابتدا SQL را این‌قدر زود آموزش نمی‌داد. این صفحه هر دو را با هم ادغام می‌کند.</p>\n        '
  },
  'welcome.1': {
    en: 'Section 01',
    ar: 'القسم ٠١',
    fa: 'بخش ۰۱'
  },
  'welcome.2': {
    en: '8 min',
    ar: '٨ دقائق',
    fa: '۸ دقیقه'
  },
  'welcome.3': {
    en: '        <h2>Welcome: same numbers, new instrument</h2>\n        <p class="standfirst">Nothing about what a mean or a standard deviation <em>means</em> has changed. What\'s changed is the tool you reach for.</p>\n      ',
    ar: '        <h2>ترحيب: نفس الأرقام، أداة جديدة</h2>\n        <p class="standfirst">لا شيء تغيّر في معنى المتوسط أو الانحراف المعياري. ما تغيّر هو الأداة التي تلجأ إليها.</p>\n      ',
    fa: '        <h2>خوش‌آمدید: همان اعداد، ابزاری تازه</h2>\n        <p class="standfirst">هیچ‌چیز دربارهٔ اینکه میانگین یا انحراف معیار <em>چه معنایی</em> دارند تغییر نکرده است. آنچه تغییر کرده، ابزاری است که به سراغش می‌روی.</p>\n      '
  },
  'welcome.4': {
    en: '          <div class="obj-label">By the end, you\'ll be able to</div>\n          <ul>\n            <li>Explain why a live company database calls for SQL instead of Excel</li>\n            <li>Set up a free, no-signup PostgreSQL sandbox and load a real dataset into it</li>\n            <li>Recognize that every statistic BA1 taught you still applies &#8212; only the computation method changes</li>\n          </ul>\n        ',
    ar: '          <div class="obj-label">بنهاية هذا القسم ستكون قادرًا على</div>\n          <ul>\n            <li>توضيح سبب حاجة قاعدة بيانات الشركة الحية إلى SQL بدلاً من Excel</li>\n            <li>إعداد بيئة PostgreSQL تجريبية مجانية دون تسجيل، وتحميل بيانات حقيقية إليها</li>\n            <li>إدراك أن كل إحصاء علّمك إياه BA1 ما زال ساريًا — فقط طريقة الحساب هي التي تتغيّر</li>\n          </ul>\n        ',
    fa: '          <div class="obj-label">در پایان این بخش می‌توانی</div>\n          <ul>\n            <li>توضیح دهی چرا پایگاه داده زندهٔ یک شرکت به SQL نیاز دارد، نه Excel</li>\n            <li>یک محیط آزمایشی رایگان PostgreSQL بدون نیاز به ثبت‌نام راه‌اندازی کنی و داده‌ای واقعی در آن بارگذاری کنی</li>\n            <li>دریابی که هر آماری که BA1 به تو آموخت هنوز معتبر است &#8212; فقط روش محاسبه تغییر می‌کند</li>\n          </ul>\n        '
  },
  'welcome.5': {
    en: '        <p>In BA1, "the data" meant a table you could open in Excel, scroll through, and see in its entirety. Real company data doesn\'t work that way. A retail chain\'s sales history lives in a database with millions of rows, updated every minute, shared by dozens of systems at once. You can\'t email someone a spreadsheet of it. You can\'t even open all of it in Excel &#8212; most spreadsheet software caps out around a million rows, and even under that cap, formulas that scan every row get painfully slow.</p>\n        <p>SQL (Structured Query Language) is how you talk to a database instead. This week doesn\'t teach you new statistics &#8212; it teaches you to ask a database for the same mean, median, and standard deviation you already know how to interpret, using a different set of hands.</p>\n      ',
    ar: '        <p>في BA1، كانت "البيانات" تعني جدولاً يمكنك فتحه في Excel، والتمرير خلاله، ورؤيته كاملاً. بيانات الشركات الحقيقية لا تعمل هكذا. سجل مبيعات سلسلة متاجر تجزئة يعيش في قاعدة بيانات بملايين الصفوف، تُحدَّث كل دقيقة، وتشاركها عشرات الأنظمة في آن واحد. لا يمكنك إرسال جدول بيانات لها بالبريد الإلكتروني. لا يمكنك حتى فتحها كاملة في Excel — معظم برامج جداول البيانات تتوقف عند حوالي مليون صف، وحتى دون هذا الحد، تصبح الصيغ التي تفحص كل صف بطيئة بشكل مؤلم.</p>\n        <p>SQL (لغة الاستعلام البنيوية) هي طريقتك للتحدث مع قاعدة البيانات بدلاً من ذلك. هذا الأسبوع لا يعلّمك إحصاءً جديدًا — بل يعلّمك أن تطلب من قاعدة البيانات نفس المتوسط والوسيط والانحراف المعياري الذي تعرف بالفعل كيف تفسره، لكن بأدوات مختلفة.</p>\n      ',
    fa: '        <p>در BA1، «داده» یعنی جدولی که می‌توانستی در Excel باز کنی، در آن پیمایش کنی و کاملش را ببینی. داده‌های واقعی شرکت این‌گونه کار نمی‌کنند. تاریخچهٔ فروش یک زنجیرهٔ خرده‌فروشی در پایگاه داده‌ای با میلیون‌ها ردیف زندگی می‌کند، هر دقیقه به‌روزرسانی می‌شود و همزمان بین ده‌ها سامانه به اشتراک گذاشته می‌شود. نمی‌توانی آن را به‌صورت یک صفحه‌گسترده برای کسی ایمیل کنی. حتی نمی‌توانی همهٔ آن را در Excel باز کنی &#8212; بیشتر نرم‌افزارهای صفحه‌گسترده حدود یک میلیون ردیف سقف دارند، و حتی زیر همین سقف، فرمول‌هایی که هر ردیف را پویش می‌کنند به‌شدت کند می‌شوند.</p>\n        <p>SQL (زبان پرس‌وجوی ساخت‌یافته) روشی است که به‌جای آن با پایگاه داده گفت‌وگو می‌کنی. این هفته آمار تازه‌ای به تو نمی‌آموزد &#8212; بلکه به تو می‌آموزد که همان میانگین، میانه و انحراف معیاری را که از قبل می‌دانی چگونه تفسیر کنی، از پایگاه داده بخواهی، با ابزاری متفاوت.</p>\n      '
  },
  'welcome.6': {
    en: '        <p>Here\'s the situation you\'re stepping into: a winter-coat retail chain ran the same clearance sale across four regions &#8212; North, South, East, and West &#8212; each store manager choosing their own discount depth. The data from all 28 sales now sits in one live table, and the regional director wants an answer to one concrete question: <strong>did any region\'s discount strategy clearly outperform the others, and if so, should the whole chain copy it next season?</strong> Answering that honestly means computing an average, a spread, and a median for each region and comparing them &#8212; not eyeballing a printout. That\'s what Sections 2 through 9 build toward, and Section 9 comes back to this exact question with the real numbers.</p>\n      ',
    ar: '        <p>إليك الموقف الذي تدخل إليه: أدارت سلسلة متاجر معاطف شتوية نفس تخفيضات التصفية عبر أربع مناطق — الشمال والجنوب والشرق والغرب — واختار كل مدير متجر عمق الخصم بنفسه. تجلس بيانات المبيعات الـ٢٨ جميعها الآن في جدول حي واحد، ويريد المدير الإقليمي إجابة عن سؤال محدد واحد: <strong>هل تفوقت استراتيجية خصم أي منطقة بوضوح على البقية، وإن كان الأمر كذلك، هل ينبغي أن تنسخها السلسلة بأكملها الموسم القادم؟</strong> الإجابة الصادقة عن هذا تعني حساب متوسط وتشتت ووسيط لكل منطقة ومقارنتها — لا تخمين ذلك من نظرة سريعة على البيانات المطبوعة. هذا ما تبنيه الأقسام من ٢ إلى ٩، ويعود القسم ٩ إلى هذا السؤال بالذات مع الأرقام الحقيقية.</p>\n      ',
    fa: '        <p>این وضعیتی است که وارد آن می‌شوی: یک زنجیرهٔ خرده‌فروشی معطف زمستانی همان حراج تسویه را در چهار منطقه اجرا کرد &#8212; شمال، جنوب، شرق و غرب &#8212; و هر مدیر فروشگاه عمق تخفیف خودش را انتخاب کرد. داده‌های هر ۲۸ فروش اکنون در یک جدول زنده نشسته‌اند، و مدیر منطقه‌ای پاسخ یک سؤال مشخص را می‌خواهد: <strong>آیا استراتژی تخفیف هیچ منطقه‌ای به‌روشنی از بقیه بهتر بود، و اگر بله، آیا کل زنجیره باید آن را فصل بعد کپی کند؟</strong> پاسخ صادقانه به این سؤال یعنی محاسبهٔ میانگین، پراکندگی و میانه برای هر منطقه و مقایسهٔ آن‌ها &#8212; نه نگاه سرسری به یک چاپ روی کاغذ. این همان چیزی است که بخش‌های ۲ تا ۹ به سمتش می‌سازند، و بخش ۹ با اعداد واقعی به همین سؤال بازمی‌گردد.</p>\n      '
  },
  'welcome.7': {
    en: '          <span class="box-label">Analogy</span>\n          <p>Excel is a kitchen counter &#8212; everything you\'re working with is laid out in front of you, and you can reach any of it directly. A database is a warehouse the size of a city, with millions of items, other people constantly moving things in and out of it while you work. You don\'t walk the whole warehouse to find what you need &#8212; you send a precise request to the person running it, and SQL is how you phrase that request.</p>\n        ',
    ar: '          <span class="box-label">تشبيه</span>\n          <p>Excel هو منضدة مطبخ — كل ما تعمل عليه موضوع أمامك، ويمكنك الوصول إلى أي جزء منه مباشرة. قاعدة البيانات هي مستودع بحجم مدينة، فيه ملايين العناصر، وأشخاص آخرون ينقلون أشياء داخله وخارجه باستمرار أثناء عملك. أنت لا تمشي عبر المستودع بأكمله لتجد ما تحتاجه — بل ترسل طلبًا دقيقًا للشخص الذي يديره، وSQL هي طريقتك لصياغة ذلك الطلب.</p>\n        ',
    fa: '          <span class="box-label">قیاس</span>\n          <p>Excel مثل پیشخوان آشپزخانه است &#8212; هر چیزی که با آن کار می‌کنی جلوی چشمت چیده شده و می‌توانی مستقیم به هر بخشش دست بزنی. پایگاه داده انباری به‌اندازهٔ یک شهر است، با میلیون‌ها قلم کالا، جایی که افراد دیگر همزمان با کار تو، چیزهایی را داخل و خارج می‌کنند. تو کل انبار را برای یافتن چیزی که نیاز داری نمی‌گردی &#8212; درخواستی دقیق برای کسی که آن را اداره می‌کند می‌فرستی، و SQL روش بیان همان درخواست است.</p>\n        '
  },
  'welcome.8': {
    en: '        <h3>Setting up your sandbox</h3>\n        <p>You don\'t need to install anything. The <strong>Aiven PostgreSQL Playground</strong> runs a real Postgres database directly in your browser &#8212; no signup, nothing to install. It resets when you close the tab, which is fine: you\'ll re-run the setup script below at the start of each exercise.</p>\n        <ol class="steps">\n          <li><strong>Open the playground</strong> &#8212; Go to <span class="mono">aiven.io/tools/pg-playground</span> in a new tab.</li>\n          <li><strong>Paste the setup script</strong> &#8212; Copy the code block below and run it. It creates one table, <span class="mono">clearance_sales</span>, and fills it with 28 rows of real-looking winter-coat clearance data &#8212; the same seasonal-markdown story from Week 0, now with a full table to compute real statistics on.</li>\n          <li><strong>Keep the tab open</strong> &#8212; Every exercise this week queries this same table. If you accidentally close the tab, just re-paste the script.</li>\n        </ol>\n      ',
    ar: '        <h3>إعداد بيئتك التجريبية</h3>\n        <p>لست بحاجة لتثبيت أي شيء. تُشغّل <strong>Aiven PostgreSQL Playground</strong> قاعدة بيانات Postgres حقيقية مباشرة في متصفحك — دون تسجيل، ودون أي تثبيت. تُعاد تهيئتها عند إغلاق التبويب، وهذا لا بأس به: ستُعيد تشغيل نص الإعداد أدناه في بداية كل تمرين.</p>\n        <ol class="steps">\n          <li><strong>افتح البيئة التجريبية</strong> — اذهب إلى <span class="mono">aiven.io/tools/pg-playground</span> في تبويب جديد.</li>\n          <li><strong>الصق نص الإعداد</strong> — انسخ كتلة الشيفرة أدناه وشغّلها. تنشئ جدولاً واحدًا، <span class="mono">clearance_sales</span>، وتملؤه بـ٢٨ صفًا من بيانات تخفيضات معاطف شتوية واقعية — نفس قصة التخفيض الموسمي من الأسبوع صفر، لكن بجدول كامل هذه المرة لحساب إحصاءات حقيقية عليه.</li>\n          <li><strong>أبقِ التبويب مفتوحًا</strong> — كل تمرين هذا الأسبوع يستعلم عن نفس هذا الجدول. إن أغلقت التبويب عن طريق الخطأ، أعد لصق النص فحسب.</li>\n        </ol>\n      ',
    fa: '        <h3>راه‌اندازی محیط آزمایشی‌ات</h3>\n        <p>نیازی به نصب چیزی نیست. <strong>Aiven PostgreSQL Playground</strong> یک پایگاه داده واقعی Postgres را مستقیماً در مرورگرت اجرا می‌کند &#8212; بدون ثبت‌نام، بدون نصب. با بستن تب بازنشانی می‌شود که مشکلی نیست: در ابتدای هر تمرین دوباره اسکریپت راه‌اندازی زیر را اجرا می‌کنی.</p>\n        <ol class="steps">\n          <li><strong>محیط آزمایشی را باز کن</strong> &#8212; به آدرس <span class="mono">aiven.io/tools/pg-playground</span> در یک تب جدید برو.</li>\n          <li><strong>اسکریپت راه‌اندازی را جای‌گذاری کن</strong> &#8212; بلوک کد زیر را کپی و اجرا کن. این اسکریپت یک جدول به نام <span class="mono">clearance_sales</span> می‌سازد و آن را با ۲۸ ردیف داده واقع‌نمای تسویهٔ معطف زمستانی پر می‌کند &#8212; همان داستان تخفیف فصلی از هفته صفر، این‌بار با جدولی کامل برای محاسبهٔ آمارهای واقعی روی آن.</li>\n          <li><strong>تب را باز نگه دار</strong> &#8212; هر تمرین این هفته از همین جدول پرس‌وجو می‌گیرد. اگر به‌اشتباه تب را بستی، فقط اسکریپت را دوباره جای‌گذاری کن.</li>\n        </ol>\n      '
  },
  'welcome.9': {
    en: '          <span class="box-label">Alternative: Supabase</span>\n          <p>The Aiven Playground resets on tab close &#8212; fine for this week\'s exercises, but if you want a database that persists across all 12 weeks of this course, <a href="https://supabase.com" target="_blank" rel="noopener">Supabase\'s free tier</a> gives you a real, permanent PostgreSQL database with a similar in-browser SQL editor. Either is a correct choice; this page assumes the Aiven Playground for simplicity.</p>\n        ',
    ar: '          <span class="box-label">بديل: Supabase</span>\n          <p>تُعاد تهيئة بيئة Aiven التجريبية عند إغلاق التبويب — وهذا مناسب لتمارين هذا الأسبوع، لكن إن أردت قاعدة بيانات تستمر طوال الأسابيع الاثني عشر لهذا المقرر، توفر <a href="https://supabase.com" target="_blank" rel="noopener">النسخة المجانية من Supabase</a> قاعدة بيانات PostgreSQL حقيقية ودائمة مع محرر SQL مشابه داخل المتصفح. كلاهما خيار صحيح؛ تفترض هذه الصفحة استخدام Aiven Playground للتبسيط.</p>\n        ',
    fa: '          <span class="box-label">گزینهٔ جایگزین: Supabase</span>\n          <p>محیط Aiven با بستن تب بازنشانی می‌شود &#8212; برای تمرین‌های این هفته مشکلی نیست، اما اگر پایگاه داده‌ای می‌خواهی که در هر ۱۲ هفتهٔ این دوره پابرجا بماند، <a href="https://supabase.com" target="_blank" rel="noopener">نسخهٔ رایگان Supabase</a> یک پایگاه داده واقعی و دائمی PostgreSQL با ویرایشگر SQL مشابه درون مرورگر در اختیارت می‌گذارد. هر دو گزینهٔ درستی هستند؛ این صفحه برای سادگی، Aiven Playground را فرض می‌گیرد.</p>\n        '
  },
  'sampling.1': {
    en: 'Section 02',
    ar: 'القسم ٠٢',
    fa: 'بخش ۰۲'
  },
  'sampling.2': {
    en: '5 min',
    ar: '٥ دقائق',
    fa: '۵ دقیقه'
  },
  'sampling.3': {
    en: '        <h2>SELECT / FROM / WHERE: choosing your sample</h2>\n        <p class="standfirst">BA1 taught you that a sample is a deliberate choice, not an accident. In SQL, that choice has a name: <code class="mono">WHERE</code>.</p>\n      ',
    ar: '        <h2>SELECT / FROM / WHERE: اختيار عيّنتك</h2>\n        <p class="standfirst">علّمك BA1 أن العيّنة اختيار متعمّد، لا مصادفة. في SQL، لهذا الاختيار اسم: <code class="mono">WHERE</code>.</p>\n      ',
    fa: '        <h2>SELECT / FROM / WHERE: انتخاب نمونه‌ات</h2>\n        <p class="standfirst">BA1 به تو آموخت که نمونه انتخابی آگاهانه است، نه اتفاقی. در SQL، این انتخاب نامی دارد: <code class="mono">WHERE</code>.</p>\n      '
  },
  'sampling.4': {
    en: '        <p>Every SQL query that reads data follows the same skeleton: <code class="mono">SELECT</code> which columns you want, <code class="mono">FROM</code> which table, and optionally <code class="mono">WHERE</code> to narrow the rows down. That last clause is doing exactly what BA1 called sampling &#8212; deliberately choosing a subset of the whole population to work with, instead of assuming "all of it" is the right answer by default.</p>\n      ',
    ar: '        <p>كل استعلام SQL يقرأ بيانات يتبع نفس الهيكل: <code class="mono">SELECT</code> لتحديد الأعمدة التي تريدها، <code class="mono">FROM</code> لتحديد الجدول، و<code class="mono">WHERE</code> اختياريًا لتضييق الصفوف. هذه العبارة الأخيرة تفعل بالضبط ما أسماه BA1 أخذ العيّنات — اختيار جزء من المجتمع الكامل بشكل متعمّد للعمل عليه، بدلاً من افتراض أن "كل شيء" هو الإجابة الصحيحة افتراضيًا.</p>\n      ',
    fa: '        <p>هر پرس‌وجوی SQL که داده می‌خواند از یک اسکلت یکسان پیروی می‌کند: <code class="mono">SELECT</code> برای اینکه کدام ستون‌ها را می‌خواهی، <code class="mono">FROM</code> برای اینکه از کدام جدول، و به‌صورت اختیاری <code class="mono">WHERE</code> برای محدود کردن ردیف‌ها. همین عبارت آخر دقیقاً همان کاری را می‌کند که BA1 نمونه‌گیری نامید &#8212; انتخاب آگاهانهٔ زیرمجموعه‌ای از کل جامعه برای کار روی آن، به‌جای فرض کردن اینکه «همهٔ آن» به‌طور پیش‌فرض پاسخ درستی است.</p>\n      '
  },
  'sampling.5': {
    en: 'Diagram 1',
    ar: 'الرسم ١',
    fa: 'نمودار ۱'
  },
  'sampling.6': {
    en: 'WHERE narrows the population to your sample',
    ar: 'WHERE يضيّق المجتمع إلى عيّنتك',
    fa: 'WHERE جامعه را به نمونه‌ات محدود می‌کند'
  },
  'sampling.7': {
    en: 'Exactly the same idea as BA1\'s sampling frame &#8212; just written as a clause instead of a decision on paper.',
    ar: 'نفس فكرة إطار العيّنة في BA1 تمامًا — لكنها مكتوبة كعبارة برمجية بدلاً من قرار على الورق.',
    fa: 'دقیقاً همان ایدهٔ چارچوب نمونه‌گیری BA1 &#8212; فقط این‌بار به‌صورت یک عبارت برنامه‌ای نوشته شده، نه تصمیمی روی کاغذ.'
  },
  'sampling.8': {
    en: '          <span class="box-label">Common mistake</span>\n          <p>Forgetting <code class="mono">WHERE</code> entirely and assuming a query without it is somehow "neutral." A query with no <code class="mono">WHERE</code> clause samples <em>everything</em> &#8212; which is itself a sampling choice, and not always the right one. "All the data" is a decision, not a default that avoids one.</p>\n        ',
    ar: '          <span class="box-label">خطأ شائع</span>\n          <p>نسيان <code class="mono">WHERE</code> تمامًا وافتراض أن الاستعلام بدونها "محايد" بطريقة ما. الاستعلام بلا عبارة <code class="mono">WHERE</code> يأخذ عيّنة من <em>كل شيء</em> — وهذا بحد ذاته اختيار لعيّنة، وليس دائمًا الاختيار الصحيح. "كل البيانات" قرار، لا افتراض يتجنب اتخاذ قرار.</p>\n        ',
    fa: '          <span class="box-label">اشتباه رایج</span>\n          <p>فراموش کردن کامل <code class="mono">WHERE</code> و این فرض که پرس‌وجویی بدون آن به‌نوعی «بی‌طرف» است. پرس‌وجویی بدون عبارت <code class="mono">WHERE</code> از <em>همه‌چیز</em> نمونه می‌گیرد &#8212; که خودش یک انتخاب نمونه‌گیری است، نه همیشه انتخاب درست. «همهٔ داده‌ها» یک تصمیم است، نه پیش‌فرضی که از گرفتن تصمیم فرار می‌کند.</p>\n        '
  },
  'avg-count-sum.1': {
    en: 'Section 03',
    ar: 'القسم ٠٣',
    fa: 'بخش ۰۳'
  },
  'avg-count-sum.2': {
    en: '5 min',
    ar: '٥ دقائق',
    fa: '۵ دقیقه'
  },
  'avg-count-sum.3': {
    en: '        <h2>AVG(), COUNT(), SUM()</h2>\n        <p class="standfirst">Three functions. One of them is secretly just the other two.</p>\n      ',
    ar: '        <h2><span dir="ltr">AVG(), COUNT(), SUM()</span></h2>\n        <p class="standfirst">ثلاث دوال. إحداها في الحقيقة ليست سوى الأخريين مجتمعتين.</p>\n      ',
    fa: '        <h2><span dir="ltr">AVG(), COUNT(), SUM()</span></h2>\n        <p class="standfirst">سه تابع. یکی از آن‌ها در واقع چیزی نیست جز دو تای دیگر.</p>\n      '
  },
  'avg-count-sum.4': {
    en: '        <p><code class="mono">SUM()</code> adds up a column. <code class="mono">COUNT()</code> counts rows. And <code class="mono">AVG()</code> &#8212; the function that computes BA1\'s mean &#8212; isn\'t doing anything new at all.</p>\n      ',
    ar: '        <p><code class="mono">SUM()</code> تجمع قيم عمود. <code class="mono">COUNT()</code> تعدّ الصفوف. أما <code class="mono">AVG()</code> — الدالة التي تحسب متوسط BA1 — فهي لا تفعل شيئًا جديدًا على الإطلاق.</p>\n      ',
    fa: '        <p><code class="mono">SUM()</code> مقادیر یک ستون را جمع می‌زند. <code class="mono">COUNT()</code> ردیف‌ها را می‌شمارد. و <code class="mono">AVG()</code> &#8212; تابعی که میانگین BA1 را محاسبه می‌کند &#8212; اصلاً کار تازه‌ای انجام نمی‌دهد.</p>\n      '
  },
  'avg-count-sum.5': {
    en: 'Literally. There is no separate "averaging" logic &#8212; it\'s a sum divided by a count, exactly like BA1 taught you.',
    ar: 'حرفيًا. لا يوجد منطق منفصل لـ"حساب المتوسط" — إنه مجموع مقسوم على عدد، تمامًا كما علّمك BA1.',
    fa: 'حرفاً همین‌طور است. هیچ منطق جداگانه‌ای برای «میانگین‌گیری» وجود ندارد &#8212; این فقط یک مجموع تقسیم بر یک شمارش است، دقیقاً همان‌طور که BA1 به تو آموخت.'
  },
  'avg-count-sum.6': {
    en: '          <span class="box-label">Common mistake</span>\n          <p><code class="mono">COUNT(column)</code> and <code class="mono">COUNT(*)</code> are not always the same. <code class="mono">COUNT(*)</code> counts every row. <code class="mono">COUNT(column)</code> only counts rows where that column isn\'t <code class="mono">NULL</code>. If <code class="mono">revenue</code> had missing values, <code class="mono">AVG(revenue)</code> would quietly divide by a smaller count than the row total &#8212; correct behaviour, but only if you know it\'s happening.</p>\n        ',
    ar: '          <span class="box-label">خطأ شائع</span>\n          <p><code class="mono">COUNT(column)</code> و<code class="mono">COUNT(*)</code> ليستا متطابقتين دائمًا. تعدّ <code class="mono">COUNT(*)</code> كل صف. أما <code class="mono">COUNT(column)</code> فتعدّ فقط الصفوف التي لا تكون فيها قيمة ذلك العمود <code class="mono">NULL</code>. لو كان لعمود <code class="mono">revenue</code> قيم مفقودة، فستقسم <code class="mono">AVG(revenue)</code> بصمت على عدد أصغر من إجمالي الصفوف — وهذا سلوك صحيح، لكن فقط إن كنت تعرف أنه يحدث.</p>\n        ',
    fa: '          <span class="box-label">اشتباه رایج</span>\n          <p><code class="mono">COUNT(column)</code> و <code class="mono">COUNT(*)</code> همیشه یکسان نیستند. <code class="mono">COUNT(*)</code> هر ردیف را می‌شمارد. <code class="mono">COUNT(column)</code> فقط ردیف‌هایی را می‌شمارد که مقدار آن ستون <code class="mono">NULL</code> نباشد. اگر ستون <code class="mono">revenue</code> مقادیر گم‌شده داشت، <code class="mono">AVG(revenue)</code> بی‌سروصدا بر شمارشی کوچک‌تر از کل ردیف‌ها تقسیم می‌کرد &#8212; رفتاری درست، اما فقط اگر بدانی دارد رخ می‌دهد.</p>\n        '
  },
  'stddev.1': {
    en: 'Section 04',
    ar: 'القسم ٠٤',
    fa: 'بخش ۰۴'
  },
  'stddev.2': {
    en: '10 min',
    ar: '١٠ دقائق',
    fa: '۱۰ دقیقه'
  },
  'stddev.3': {
    en: '        <h2>Standard deviation: build it, then trust the function</h2>\n        <p class="standfirst">BA1\'s four-step recipe &#8212; deviate, square, average, root &#8212; translates into SQL almost line for line.</p>\n      ',
    ar: '        <h2>الانحراف المعياري: ابنِه أولاً، ثم ثق بالدالة</h2>\n        <p class="standfirst">وصفة BA1 المكوّنة من أربع خطوات — انحرف، ربّع، توسّط، جذّر — تُترجم إلى SQL شبه سطرًا بسطر.</p>\n      ',
    fa: '        <h2>انحراف معیار: اول بسازش، بعد به تابع اعتماد کن</h2>\n        <p class="standfirst">دستور چهارمرحله‌ای BA1 &#8212; انحراف بگیر، به توان دو برسان، میانگین بگیر، جذر بگیر &#8212; تقریباً خط‌به‌خط به SQL ترجمه می‌شود.</p>\n      '
  },
  'stddev.4': {
    en: '        <p>Before reaching for the built-in function, build it by hand once in SQL &#8212; so when you use the shortcut later, you know exactly what it\'s doing.</p>\n      ',
    ar: '        <p>قبل اللجوء إلى الدالة الجاهزة، ابنِها يدويًا مرة واحدة في SQL — حتى تعرف بالضبط ماذا تفعل عندما تستخدم الاختصار لاحقًا.</p>\n      ',
    fa: '        <p>پیش از استفاده از تابع آماده، یک‌بار آن را دستی در SQL بساز &#8212; تا وقتی بعداً از میان‌بر استفاده می‌کنی، دقیقاً بدانی چه کاری انجام می‌دهد.</p>\n      '
  },
  'stddev.5': {
    en: 'Diagram 2',
    ar: 'الرسم ٢',
    fa: 'نمودار ۲'
  },
  'stddev.6': {
    en: 'Standard deviation, one step at a time',
    ar: 'الانحراف المعياري، خطوة بخطوة',
    fa: 'انحراف معیار، گام‌به‌گام'
  },
  'stddev.7': {
    en: 'Worked using the North region\'s 7 sales &#8212; the same four steps BA1 described, now in SQL.',
    ar: 'مُحسوبة باستخدام مبيعات منطقة الشمال السبعة — نفس الخطوات الأربع التي وصفها BA1، والآن بلغة SQL.',
    fa: 'حل‌شده با ۷ فروش منطقهٔ شمال &#8212; همان چهار گامی که BA1 توضیح داد، این‌بار به زبان SQL.'
  },
  'stddev.8': {
    en: '        <h3>What each of the four steps is actually doing</h3>\n        <ol class="steps">\n          <li><strong>Deviate</strong> &#8212; subtract the mean from each sale\'s revenue. This just asks "how far off from typical was this one?" for every row. A sale right at the mean deviates by 0; a sale far above or below it gets a large positive or negative number.</li>\n          <li><strong>Square</strong> &#8212; multiply each deviation by itself. Two things happen at once: negative deviations (below the mean) turn positive, so they stop cancelling out the positive ones when you add everything up; and bigger misses get punished disproportionately &#8212; a deviation of $500 becomes 250,000, four times the 62,500 you get from a $250 deviation, not just double. That\'s the same "large errors matter more" logic behind a store manager caring more about one wildly-off sale than several mildly-off ones.</li>\n          <li><strong>Average</strong> &#8212; sum the squared deviations and divide by the count (n&#8722;1 for a sample, as below). This collapses 7 individual squared-deviation numbers into one number representing typical squared spread &#8212; on its own it\'s called the <em>variance</em>, but it\'s in dollars-squared, which isn\'t a unit anyone can picture.</li>\n          <li><strong>Root</strong> &#8212; take the square root to undo the squaring from step 2 and bring the units back to plain dollars. That final number is the standard deviation: roughly how far a typical sale strays from the mean, in the same units the data started in.</li>\n        </ol>\n      ',
    ar: '        <h3>ما الذي تفعله كل خطوة من الخطوات الأربع فعليًا</h3>\n        <ol class="steps">\n          <li><strong>انحرف (Deviate)</strong> — اطرح المتوسط من إيراد كل عملية بيع. هذا يسأل ببساطة "كم ابتعدت هذه القيمة عن المعتاد؟" لكل صف. البيع المطابق للمتوسط تمامًا ينحرف بمقدار صفر؛ والبيع البعيد عنه صعودًا أو هبوطًا يحصل على رقم كبير موجب أو سالب.</li>\n          <li><strong>ربّع (Square)</strong> — اضرب كل انحراف في نفسه. يحدث أمران معًا: الانحرافات السالبة (تحت المتوسط) تصبح موجبة، فتتوقف عن إلغاء الانحرافات الموجبة عند جمعها؛ والانحرافات الكبيرة تُعاقَب بشكل غير متناسب — انحراف بقيمة ٥٠٠ دولار يصبح ٢٥٠,٠٠٠، أي أربعة أضعاف الـ٦٢,٥٠٠ الناتجة عن انحراف بقيمة ٢٥٠ دولارًا، وليس ضعفها فقط. هذا نفس منطق "الأخطاء الكبيرة أهم" الذي يجعل مدير المتجر يهتم بعملية بيع واحدة شاذة تمامًا أكثر من اهتمامه بعدة عمليات بيع منحرفة قليلاً.</li>\n          <li><strong>توسّط (Average)</strong> — اجمع الانحرافات المربّعة واقسمها على العدد (n&#8722;1 للعيّنة، كما في المثال أدناه). هذا يختزل سبعة أرقام منفصلة من الانحرافات المربّعة في رقم واحد يمثل التشتت المربّع المعتاد — يُسمى هذا الرقم وحده <em>التباين (variance)</em>، لكنه بوحدة "دولار تربيع" التي لا يمكن لأحد تخيّلها.</li>\n          <li><strong>جذّر (Root)</strong> — خذ الجذر التربيعي لإلغاء التربيع من الخطوة الثانية وإعادة الوحدات إلى دولارات عادية. هذا الرقم النهائي هو الانحراف المعياري: تقريبًا، كم يبتعد البيع المعتاد عن المتوسط، بنفس وحدة البيانات الأصلية.</li>\n        </ol>\n      ',
    fa: '        <h3>هرکدام از چهار گام واقعاً چه‌کاری انجام می‌دهد</h3>\n        <ol class="steps">\n          <li><strong>انحراف بگیر</strong> &#8212; میانگین را از درآمد هر فروش کم کن. این کار برای هر ردیف فقط این را می‌پرسد: «این یکی چقدر از حالت معمول فاصله داشت؟» فروشی که دقیقاً روی میانگین است انحراف صفر دارد؛ فروشی که خیلی بالاتر یا پایین‌تر است عددی مثبت یا منفی بزرگ می‌گیرد.</li>\n          <li><strong>به توان دو برسان</strong> &#8212; هر انحراف را در خودش ضرب کن. دو اتفاق همزمان می‌افتد: انحراف‌های منفی (زیر میانگین) مثبت می‌شوند، پس دیگر هنگام جمع کردن، انحراف‌های مثبت را خنثی نمی‌کنند؛ و خطاهای بزرگ‌تر به‌طور نامتناسبی تنبیه می‌شوند &#8212; انحرافی به‌اندازهٔ ۵۰۰ دلار به ۲۵۰٬۰۰۰ تبدیل می‌شود، چهار برابر ۶۲٬۵۰۰ که از انحراف ۲۵۰ دلاری به دست می‌آید، نه فقط دو برابر. این همان منطق «خطاهای بزرگ اهمیت بیشتری دارند» است که باعث می‌شود مدیر فروشگاه به یک فروش کاملاً غیرعادی بیشتر از چند فروش کمی نامنظم اهمیت دهد.</li>\n          <li><strong>میانگین بگیر</strong> &#8212; انحراف‌های به‌توان‌رسیده را جمع بزن و بر شمارش تقسیم کن (n&#8722;1 برای نمونه، مثل زیر). این کار ۷ عدد جداگانهٔ انحراف‌به‌توان‌رسیده را در یک عدد که پراکندگی مربّعی معمول را نشان می‌دهد فشرده می‌کند &#8212; به‌تنهایی به آن <em>واریانس</em> گفته می‌شود، اما واحدش دلار به‌توان دو است، واحدی که هیچ‌کس نمی‌تواند آن را تصور کند.</li>\n          <li><strong>جذر بگیر</strong> &#8212; جذر بگیر تا به‌توان‌رساندنِ گام دوم را خنثی کنی و واحدها را به دلار سادهٔ همان اول برگردانی. این عدد نهایی همان انحراف معیار است: تقریباً اینکه یک فروش معمولی چقدر از میانگین فاصله می‌گیرد، با همان واحدی که داده از آن شروع شد.</li>\n        </ol>\n      '
  },
  'stddev.9': {
    en: '        <h3>Step 1&#8211;3: the mean, the squared deviations, the average</h3>\n      ',
    ar: '        <h3>الخطوات ١–٣: المتوسط، الانحرافات المربّعة، متوسطها</h3>\n      ',
    fa: '        <h3>گام‌های ۱ تا ۳: میانگین، انحراف‌های به‌توان‌رسیده، میانگینشان</h3>\n      '
  },
  'stddev.10': {
    en: '        <h3>Now the built-in functions</h3>\n        <p>PostgreSQL ships both versions of the formula &#8212; because BA1 also taught you there are two: sample and population.</p>\n      ',
    ar: '        <h3>والآن الدوال الجاهزة</h3>\n        <p>يوفر PostgreSQL نسختي الصيغة كلتيهما — لأن BA1 علّمك أيضًا أن هناك نسختين: عيّنة ومجتمع.</p>\n      ',
    fa: '        <h3>و اکنون توابع آماده</h3>\n        <p>PostgreSQL هر دو نسخهٔ فرمول را ارائه می‌دهد &#8212; چون BA1 هم به تو آموخت که دو نسخه وجود دارد: نمونه و جامعه.</p>\n      '
  },
  'stddev.11': {
    en: '          <span class="box-label">Sample vs. population, in this dataset</span>\n          <p>These 7 North-region sales are a sample of North\'s clearance history, not literally every winter-coat sale the region has ever run &#8212; so <code class="mono">STDDEV_SAMP()</code> (dividing by n&#8722;1) is the right choice here, and almost always the right choice in business analytics. You\'d only reach for <code class="mono">STDDEV_POP()</code> if your rows genuinely were the entire population with nothing left out.</p>\n        ',
    ar: '          <span class="box-label">العيّنة مقابل المجتمع، في هذه البيانات</span>\n          <p>هذه المبيعات السبع لمنطقة الشمال هي عيّنة من تاريخ تخفيضات الشمال، وليست حرفيًا كل عملية بيع معطف شتوي جرت في المنطقة على الإطلاق — لذا فإن <code class="mono">STDDEV_SAMP()</code> (القسمة على n&#8722;1) هي الخيار الصحيح هنا، وهي الخيار الصحيح غالبًا في تحليلات الأعمال. لا تلجأ إلى <code class="mono">STDDEV_POP()</code> إلا إن كانت صفوفك تمثل المجتمع بأكمله دون استثناء أي شيء.</p>\n        ',
    fa: '          <span class="box-label">نمونه در برابر جامعه، در همین داده</span>\n          <p>این ۷ فروش منطقهٔ شمال نمونه‌ای از تاریخچهٔ تسویهٔ شمال هستند، نه حرفاً هر فروش معطف زمستانی‌ای که آن منطقه تابه‌حال داشته &#8212; پس <code class="mono">STDDEV_SAMP()</code> (تقسیم بر n&#8722;1) انتخاب درست اینجاست، و تقریباً همیشه انتخاب درست در تحلیل کسب‌وکار است. تنها زمانی سراغ <code class="mono">STDDEV_POP()</code> می‌روی که ردیف‌هایت واقعاً کل جامعه باشند، بدون هیچ‌چیز جامانده.</p>\n        '
  },
  'groupby-freq.1': {
    en: 'Section 05',
    ar: 'القسم ٠٥',
    fa: 'بخش ۰۵'
  },
  'groupby-freq.2': {
    en: '6 min',
    ar: '٦ دقائق',
    fa: '۶ دقیقه'
  },
  'groupby-freq.3': {
    en: '        <h2>GROUP BY + COUNT as a frequency distribution</h2>\n        <p class="standfirst">BA1\'s frequency table, in one query.</p>\n      ',
    ar: '        <h2><span dir="ltr">GROUP BY + COUNT</span> كتوزيع تكراري</h2>\n        <p class="standfirst">جدول التكرار من BA1، في استعلام واحد.</p>\n      ',
    fa: '        <h2><span dir="ltr">GROUP BY + COUNT</span> به‌عنوان توزیع فراوانی</h2>\n        <p class="standfirst">جدول فراوانی BA1، در یک پرس‌وجو.</p>\n      '
  },
  'groupby-freq.4': {
    en: '        <p><code class="mono">GROUP BY</code> collapses rows sharing a value into one row per group, and any aggregate function in the <code class="mono">SELECT</code> list (like <code class="mono">COUNT(*)</code>) then runs per group instead of over the whole table. Bucket a numeric column into ranges first, and this becomes exactly BA1\'s frequency distribution &#8212; a histogram, expressed as a table.</p>\n      ',
    ar: '        <p>تدمج <code class="mono">GROUP BY</code> الصفوف التي تشترك في قيمة معيّنة إلى صف واحد لكل مجموعة، وأي دالة تجميعية في قائمة <code class="mono">SELECT</code> (مثل <code class="mono">COUNT(*)</code>) تعمل حينها لكل مجموعة بدلاً من الجدول بأكمله. قسّم عمودًا رقميًا إلى نطاقات أولاً، وهذا يصبح بالضبط التوزيع التكراري من BA1 — رسم بياني (هيستوغرام) مُعبَّر عنه كجدول.</p>\n      ',
    fa: '        <p><code class="mono">GROUP BY</code> ردیف‌هایی را که در یک مقدار مشترک هستند در یک ردیف به‌ازای هر گروه فشرده می‌کند، و هر تابع تجمیعی در فهرست <code class="mono">SELECT</code> (مثل <code class="mono">COUNT(*)</code>) آنگاه به‌جای کل جدول، برای هر گروه اجرا می‌شود. یک ستون عددی را اول به بازه‌ها تقسیم کن، و این دقیقاً همان توزیع فراوانی BA1 می‌شود &#8212; هیستوگرامی که به‌شکل جدول بیان شده.</p>\n      '
  },
  'groupby-freq.5': {
    en: 'Diagram 3',
    ar: 'الرسم ٣',
    fa: 'نمودار ۳'
  },
  'groupby-freq.6': {
    en: 'GROUP BY, drawn as a histogram',
    ar: 'GROUP BY، مرسومة كرسم بياني',
    fa: 'GROUP BY، رسم‌شده به‌شکل هیستوگرام'
  },
  'groupby-freq.7': {
    en: 'Every clearance sale, bucketed by revenue. Same shape you\'d get pivoting this in Excel &#8212; just computed inside the database.',
    ar: 'كل عملية تخفيض، مقسّمة حسب الإيراد. نفس الشكل الذي كنت لتحصل عليه بجدول محوري في Excel — لكن محسوب داخل قاعدة البيانات.',
    fa: 'هر فروش تسویه، بر اساس درآمد در بازه‌ها. همان شکلی که با یک جدول محوری در Excel به‌دست می‌آمد &#8212; فقط این‌بار درون پایگاه داده محاسبه شده.'
  },
  'groupby-freq.8': {
    en: '          <span class="box-label">Common mistake</span>\n          <p>Adding a column to <code class="mono">SELECT</code> without adding it to <code class="mono">GROUP BY</code> (or wrapping it in an aggregate). PostgreSQL refuses to run a query like that &#8212; it raises an error rather than guessing which row\'s value you meant, which is safer than databases that silently pick one at random.</p>\n        ',
    ar: '          <span class="box-label">خطأ شائع</span>\n          <p>إضافة عمود إلى <code class="mono">SELECT</code> دون إضافته إلى <code class="mono">GROUP BY</code> (أو تضمينه داخل دالة تجميعية). يرفض PostgreSQL تشغيل استعلام كهذا — فيُصدر خطأً بدلاً من تخمين قيمة أي صف تقصد، وهو أكثر أمانًا من قواعد البيانات التي تختار صفًا عشوائيًا بصمت.</p>\n        ',
    fa: '          <span class="box-label">اشتباه رایج</span>\n          <p>اضافه کردن یک ستون به <code class="mono">SELECT</code> بدون اضافه کردنش به <code class="mono">GROUP BY</code> (یا قرار دادنش درون یک تابع تجمیعی). PostgreSQL از اجرای چنین پرس‌وجویی سر باز می‌زند &#8212; خطا می‌دهد به‌جای اینکه حدس بزند مقصودت مقدار کدام ردیف بوده، که این خودش امن‌تر از پایگاه‌داده‌هایی است که بی‌سروصدا یکی را به‌طور تصادفی انتخاب می‌کنند.</p>\n        '
  },
  'median.1': {
    en: 'Section 06',
    ar: 'القسم ٠٦',
    fa: 'بخش ۰۶'
  },
  'median.2': {
    en: '6 min',
    ar: '٦ دقائق',
    fa: '۶ دقیقه'
  },
  'median.3': {
    en: '        <h2>Median: the one that needs everything sorted first</h2>\n        <p class="standfirst">Why doesn\'t Postgres just have <code class="mono">MEDIAN()</code> the way it has <code class="mono">AVG()</code>?</p>\n      ',
    ar: '        <h2>الوسيط: الإحصاء الذي يحتاج ترتيب كل شيء أولاً</h2>\n        <p class="standfirst">لماذا لا يمتلك Postgres دالة <code class="mono">MEDIAN()</code> ببساطة كما يمتلك <code class="mono">AVG()</code>؟</p>\n      ',
    fa: '        <h2>میانه: عددی که اول باید همه‌چیز مرتب شود</h2>\n        <p class="standfirst">چرا Postgres همان‌طور که <code class="mono">AVG()</code> دارد، به‌سادگی <code class="mono">MEDIAN()</code> ندارد؟</p>\n      '
  },
  'median.4': {
    en: '        <p><code class="mono">SUM</code>, <code class="mono">COUNT</code>, and <code class="mono">AVG</code> are all <strong>single-pass</strong>: the database can read the rows once, in whatever order they arrive, keeping a running total as it goes, and never look at a row twice. The median can\'t work that way. To find "the middle value," you first need to know what "the middle" even is &#8212; which requires every value to be sorted into order first. That\'s a fundamentally more expensive operation, which is exactly why BA1 called the median more robust to outliers but more work to compute by hand.</p>\n      ',
    ar: '        <p>تعتبر <code class="mono">SUM</code> و<code class="mono">COUNT</code> و<code class="mono">AVG</code> جميعها <strong>أحادية المرور</strong>: يمكن لقاعدة البيانات قراءة الصفوف مرة واحدة، بأي ترتيب تصل به، مع الاحتفاظ بمجموع متراكم أثناء ذلك، دون النظر إلى أي صف مرتين. لا يمكن للوسيط أن يعمل هكذا. لإيجاد "القيمة الوسطى"، تحتاج أولاً لمعرفة ما هي "الوسط" أصلاً — وهذا يتطلب ترتيب كل القيم أولاً. هذه عملية أكثر كلفة بشكل جوهري، وهذا بالضبط سبب وصف BA1 للوسيط بأنه أكثر مقاومة للقيم المتطرفة لكنه أصعب في الحساب اليدوي.</p>\n      ',
    fa: '        <p><code class="mono">SUM</code>، <code class="mono">COUNT</code> و <code class="mono">AVG</code> همگی <strong>تک‌گذر</strong> هستند: پایگاه داده می‌تواند ردیف‌ها را یک‌بار بخواند، به هر ترتیبی که می‌رسند، درحالی‌که یک مجموع در حال جمع‌شدن را نگه می‌دارد، و هرگز نیازی به دیدن دوبارهٔ یک ردیف ندارد. میانه نمی‌تواند این‌طور کار کند. برای یافتن «مقدار میانی»، ابتدا باید بدانی «میانی» اصلاً یعنی چه &#8212; که مستلزم آن است که همهٔ مقادیر ابتدا مرتب شوند. این عملیاتی اساساً پرهزینه‌تر است، که دقیقاً همان دلیلی است که BA1 میانه را در برابر داده‌های پرت مقاوم‌تر اما دستی محاسبه‌کردنش دشوارتر توصیف کرد.</p>\n      '
  },
  'median.5': {
    en: 'Diagram 4',
    ar: 'الرسم ٤',
    fa: 'نمودار ۴'
  },
  'median.6': {
    en: 'Single-pass vs. sort-required',
    ar: 'أحادي المرور مقابل ما يتطلب ترتيبًا',
    fa: 'تک‌گذر در برابر نیازمند مرتب‌سازی'
  },
  'median.7': {
    en: 'This is the exact reason Postgres has no plain MEDIAN() function &#8212; it isn\'t an oversight.',
    ar: 'هذا هو السبب الدقيق وراء عدم امتلاك Postgres دالة MEDIAN() بسيطة — وليس إغفالاً.',
    fa: 'این دقیقاً همان دلیلی است که Postgres تابع سادهٔ MEDIAN() ندارد &#8212; این یک سهو نیست.'
  },
  'median.8': {
    en: '          <span class="box-label">Analogy</span>\n          <p><code class="mono">PERCENTILE_CONT(0.5)</code> literally means "the value at the 50th percentile" &#8212; the median is just one specific percentile. Swap <span class="mono">0.5</span> for <span class="mono">0.25</span> or <span class="mono">0.75</span> and you\'ve computed BA1\'s quartiles with the exact same function.</p>\n        ',
    ar: '          <span class="box-label">تشبيه</span>\n          <p><code class="mono">PERCENTILE_CONT(0.5)</code> تعني حرفيًا "القيمة عند المئين الخمسين" — الوسيط ما هو إلا مئين محدد واحد. استبدل <span class="mono">0.5</span> بـ<span class="mono">0.25</span> أو <span class="mono">0.75</span> وتكون قد حسبت أرباعيات BA1 بنفس الدالة تمامًا.</p>\n        ',
    fa: '          <span class="box-label">قیاس</span>\n          <p><code class="mono">PERCENTILE_CONT(0.5)</code> حرفاً به معنای «مقدار در صدکِ پنجاهم» است &#8212; میانه فقط یک صدکِ خاص است. <span class="mono">0.5</span> را با <span class="mono">0.25</span> یا <span class="mono">0.75</span> جایگزین کن و چارک‌های BA1 را با همین تابع، عیناً محاسبه کرده‌ای.</p>\n        '
  },
  'groupby-segment.1': {
    en: 'Section 07',
    ar: 'القسم ٠٧',
    fa: 'بخش ۰۷'
  },
  'groupby-segment.2': {
    en: '6 min',
    ar: '٦ دقائق',
    fa: '۶ دقیقه'
  },
  'groupby-segment.3': {
    en: '        <h2>GROUP BY for per-segment stats</h2>\n        <p class="standfirst">One query, one stat per region &#8212; this is where descriptive statistics starts turning diagnostic.</p>\n      ',
    ar: '        <h2>GROUP BY لإحصاءات كل فئة</h2>\n        <p class="standfirst">استعلام واحد، إحصاء واحد لكل منطقة — هنا يبدأ الإحصاء الوصفي بالتحوّل إلى تشخيصي.</p>\n      ',
    fa: '        <h2>GROUP BY برای آمار هر بخش</h2>\n        <p class="standfirst">یک پرس‌وجو، یک آمار برای هر منطقه &#8212; اینجاست که آمار توصیفی شروع به تشخیصی‌شدن می‌کند.</p>\n      '
  },
  'groupby-segment.4': {
    en: '        <p><code class="mono">GROUP BY</code> isn\'t limited to counting. Any aggregate &#8212; <code class="mono">AVG</code>, <code class="mono">STDDEV_SAMP</code>, <code class="mono">PERCENTILE_CONT</code> &#8212; can run per group. That turns "what\'s the average revenue?" (descriptive) into "which region\'s average is different, and by how much?" (diagnostic) &#8212; exactly the shift BA1 described between the two levels.</p>\n      ',
    ar: '        <p>لا تقتصر <code class="mono">GROUP BY</code> على العدّ. يمكن لأي دالة تجميعية — <code class="mono">AVG</code> و<code class="mono">STDDEV_SAMP</code> و<code class="mono">PERCENTILE_CONT</code> — أن تعمل لكل مجموعة. هذا يحوّل "ما متوسط الإيراد؟" (وصفي) إلى "أي منطقة يختلف متوسطها، وبكم؟" (تشخيصي) — بالضبط التحول الذي وصفه BA1 بين المستويين.</p>\n      ',
    fa: '        <p><code class="mono">GROUP BY</code> فقط به شمارش محدود نیست. هر تابع تجمیعی &#8212; <code class="mono">AVG</code>، <code class="mono">STDDEV_SAMP</code>، <code class="mono">PERCENTILE_CONT</code> &#8212; می‌تواند برای هر گروه اجرا شود. این کار «میانگین درآمد چقدر است؟» (توصیفی) را به «میانگین کدام منطقه متفاوت است، و چقدر؟» (تشخیصی) تبدیل می‌کند &#8212; دقیقاً همان تغییری که BA1 بین این دو سطح توصیف کرد.</p>\n      '
  },
  'groupby-segment.5': {
    en: '          <span class="box-label">Reading this like BA1 taught you</span>\n          <p>East isn\'t just highest on average &#8212; it also has the highest spread (stddev 1344.36, well above South\'s 923.22). Two regions can have different means for entirely different reasons: East might just run bigger sales days, or it might be one enormous outlier sale dragging its own average up. The mean alone can\'t tell you which &#8212; you\'d need to look at the underlying rows, exactly as BA1\'s "the mean describes nobody in the room" warning taught you.</p>\n        ',
    ar: '          <span class="box-label">قراءة هذا كما علّمك BA1</span>\n          <p>الشرق ليس فقط الأعلى في المتوسط — بل لديه أيضًا أعلى تشتت (انحراف معياري 1344.36، أعلى بكثير من 923.22 في الجنوب). يمكن لمنطقتين أن يكون لديهما متوسطان مختلفان لأسباب مختلفة تمامًا: ربما يشهد الشرق أيامًا أكبر للمبيعات، أو ربما تكون عملية بيع استثنائية ضخمة واحدة هي التي ترفع متوسطه. المتوسط وحده لا يستطيع إخبارك أيهما — ستحتاج للنظر في الصفوف الأساسية، تمامًا كما علّمك تحذير BA1 "المتوسط لا يصف أحدًا في الغرفة".</p>\n        ',
    fa: '          <span class="box-label">خواندن این جدول همان‌طور که BA1 آموخت</span>\n          <p>شرق فقط بالاترین میانگین را ندارد &#8212; بیشترین پراکندگی را هم دارد (انحراف معیار ۱۳۴۴.۳۶، بسیار بالاتر از ۹۲۳.۲۲ در جنوب). دو منطقه می‌توانند به دلایل کاملاً متفاوتی میانگین‌های متفاوت داشته باشند: شاید شرق صرفاً روزهای فروش بزرگ‌تری دارد، یا شاید یک فروش استثنایی و بسیار بزرگ میانگین خودش را بالا کشیده. میانگین به‌تنهایی نمی‌تواند بگوید کدام است &#8212; باید به ردیف‌های زیرین نگاه کنی، دقیقاً همان‌طور که هشدار BA1 «میانگین هیچ‌کس در اتاق را توصیف نمی‌کند» به تو آموخت.</p>\n        '
  },
  'ai-corner.1': {
    en: 'Section 08 &#8212; AI layer',
    ar: 'القسم ٠٨ — طبقة الذكاء الاصطناعي',
    fa: 'بخش ۰۸ &#8212; لایه هوش مصنوعی'
  },
  'ai-corner.2': {
    en: '7 min',
    ar: '٧ دقائق',
    fa: '۷ دقیقه'
  },
  'ai-corner.3': {
    en: '        <h2>AI co-pilot corner: SQL written by AI still needs Week 0\'s three checks</h2>\n        <p class="standfirst">An AI assistant will happily write you a syntactically perfect query that\'s statistically wrong.</p>\n      ',
    ar: '        <h2>ركن مساعد الذكاء الاصطناعي: SQL المكتوب بالذكاء الاصطناعي ما زال يحتاج فحوصات الأسبوع صفر الثلاثة</h2>\n        <p class="standfirst">سيكتب لك مساعد الذكاء الاصطناعي بكل سرور استعلامًا سليمًا نحويًا لكنه خاطئ إحصائيًا.</p>\n      ',
    fa: '        <h2>گوشه همیار هوش مصنوعی: SQL نوشتهٔ هوش مصنوعی هم به سه فحص هفته صفر نیاز دارد</h2>\n        <p class="standfirst">دستیار هوش مصنوعی با کمال میل پرس‌وجویی از نظر نحوی بی‌نقص اما از نظر آماری غلط برایت می‌نویسد.</p>\n      '
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
    en: '            <p><strong>Prompt:</strong> "Write a SQL query to get the standard deviation of revenue."</p>\n          ',
    ar: '            <p><strong>الطلب:</strong> "اكتب استعلام SQL لحساب الانحراف المعياري للإيراد."</p>\n          ',
    fa: '            <p><strong>درخواست:</strong> «یک پرس‌وجوی SQL برای گرفتن انحراف معیار درآمد بنویس.»</p>\n          '
  },
  'ai-corner.7': {
    en: '            <p>It runs. It returns a number. The number is <strong>wrong for this use case</strong> &#8212; it silently divides by <code class="mono">n</code> (population formula) when these rows are a sample, because the prompt never said which one mattered, and the assistant guessed.</p>\n          ',
    ar: '            <p>يعمل. يُعيد رقمًا. الرقم <strong>خاطئ لهذا الاستخدام</strong> — فهو يقسم بصمت على <code class="mono">n</code> (صيغة المجتمع) بينما هذه الصفوف عيّنة، لأن الطلب لم يحدد أيهما المقصود، فخمّن المساعد.</p>\n          ',
    fa: '            <p>اجرا می‌شود. عددی برمی‌گرداند. آن عدد <strong>برای این کاربرد غلط است</strong> &#8212; بی‌سروصدا بر <code class="mono">n</code> (فرمول جامعه) تقسیم می‌کند درحالی‌که این ردیف‌ها یک نمونه‌اند، چون درخواست هیچ‌وقت نگفت کدام‌یک اهمیت دارد، و دستیار حدس زد.</p>\n          '
  },
  'ai-corner.8': {
    en: '            <p><strong>Prompt:</strong> "Write a PostgreSQL query that computes the <em>sample</em> standard deviation (n&#8722;1 denominator) of the revenue column in clearance_sales, using STDDEV_SAMP, and explain in a comment why sample vs. population matters here."</p>\n          ',
    ar: '            <p><strong>الطلب:</strong> "اكتب استعلام PostgreSQL يحسب الانحراف المعياري <em>للعيّنة</em> (بمقام n&#8722;1) لعمود الإيراد في clearance_sales، باستخدام STDDEV_SAMP، واشرح في تعليق سبب أهمية التفريق بين العيّنة والمجتمع هنا."</p>\n          ',
    fa: '            <p><strong>درخواست:</strong> «یک پرس‌وجوی PostgreSQL بنویس که انحراف معیار <em>نمونه</em> (با مخرج n&#8722;1) ستون revenue را در clearance_sales با استفاده از STDDEV_SAMP محاسبه کند، و در یک توضیح (comment) بگو چرا تفاوت نمونه و جامعه اینجا اهمیت دارد.»</p>\n          '
  },
  'ai-corner.9': {
    en: 'Diagram 5',
    ar: 'الرسم ٥',
    fa: 'نمودار ۵'
  },
  'ai-corner.10': {
    en: 'The three checks, for SQL this time',
    ar: 'الفحوصات الثلاثة، لـSQL هذه المرة',
    fa: 'سه فحص، این‌بار برای SQL'
  },
  'ai-corner.11': {
    en: '"Verify it" is exactly the check that catches the n-vs-n&#8722;1 mistake &#8212; a syntactically valid query is not the same as a correct one.',
    ar: '"تحقق منه" هو بالضبط الفحص الذي يرصد خطأ n مقابل n&#8722;1 — الاستعلام السليم نحويًا ليس بالضرورة صحيحًا.',
    fa: '«تأییدش کن» دقیقاً همان فحصی است که اشتباه n در برابر n&#8722;1 را می‌گیرد &#8212; پرس‌وجویی که از نظر نحوی معتبر است، لزوماً درست هم نیست.'
  },
  'ai-corner.12': {
    en: '          <span class="box-label">Common mistake</span>\n          <p>Accepting an AI-generated statistic because the query ran without an error. A query with zero syntax errors and one wrong assumption produces a confident, clean-looking, wrong number &#8212; which is far more dangerous than a query that fails to run at all.</p>\n        ',
    ar: '          <span class="box-label">خطأ شائع</span>\n          <p>قبول إحصاء أنتجه الذكاء الاصطناعي لمجرد أن الاستعلام عمل دون خطأ. استعلام بلا أخطاء نحوية وبافتراض واحد خاطئ ينتج رقمًا واثقًا وأنيق المظهر لكنه خاطئ — وهذا أخطر بكثير من استعلام يفشل في العمل من الأساس.</p>\n        ',
    fa: '          <span class="box-label">اشتباه رایج</span>\n          <p>پذیرفتن آماری تولیدشده توسط هوش مصنوعی فقط به این دلیل که پرس‌وجو بدون خطا اجرا شد. پرس‌وجویی بدون هیچ خطای نحوی و با یک فرض غلط، عددی مطمئن، شیک و غلط تولید می‌کند &#8212; که بسیار خطرناک‌تر از پرس‌وجویی است که اصلاً اجرا نمی‌شود.</p>\n        '
  },
  'worked-example.1': {
    en: 'Section 09',
    ar: 'القسم ٠٩',
    fa: 'بخش ۰۹'
  },
  'worked-example.2': {
    en: '8 min',
    ar: '٨ دقائق',
    fa: '۸ دقیقه'
  },
  'worked-example.3': {
    en: '        <h2>Worked example: the winter-coat clearance, in full</h2>\n        <p class="standfirst">Week 0 introduced this decision conceptually. Now you have the real table and the real numbers behind it.</p>\n      ',
    ar: '        <h2>مثال تطبيقي: تخفيض المعاطف الشتوية، كاملاً</h2>\n        <p class="standfirst">قدّم الأسبوع صفر هذا القرار من الناحية المفاهيمية. الآن لديك الجدول الحقيقي والأرقام الحقيقية خلفه.</p>\n      ',
    fa: '        <h2>مثال حل‌شده: تسویهٔ معطف زمستانی، به‌طور کامل</h2>\n        <p class="standfirst">هفته صفر این تصمیم را از نظر مفهومی معرفی کرد. حالا جدول واقعی و اعداد واقعی پشت آن را داری.</p>\n      '
  },
  'worked-example.4': {
    en: '        <p>A department store ran winter-coat clearance sales across four regions, at discounts from 10% to 40%. The store\'s leadership wants one question answered: <strong>which region\'s approach should the others copy?</strong></p>\n        <p>Four queries answer it &#8212; the same four ideas this whole page has covered, run in sequence:</p>\n      ',
    ar: '        <p>أجرى متجر كبير تخفيضات على معاطف شتوية عبر أربع مناطق، بخصومات من ١٠٪ إلى ٤٠٪. تريد إدارة المتجر إجابة سؤال واحد: <strong>أي نهج من مناطق يجب أن تنسخه البقية؟</strong></p>\n        <p>أربعة استعلامات تجيب عن هذا — نفس الأفكار الأربع التي غطتها هذه الصفحة كاملة، مُشغّلة بالترتيب:</p>\n      ',
    fa: '        <p>یک فروشگاه زنجیره‌ای حراج تسویهٔ معطف زمستانی را در چهار منطقه، با تخفیف‌هایی از ۱۰٪ تا ۴۰٪ اجرا کرد. مدیریت فروشگاه پاسخ یک سؤال را می‌خواهد: <strong>رویکرد کدام منطقه باید الگوی بقیه باشد؟</strong></p>\n        <p>چهار پرس‌وجو به آن پاسخ می‌دهند &#8212; همان چهار ایده‌ای که در کل این صفحه پوشش داده شد، به‌ترتیب اجرا می‌شوند:</p>\n      '
  },
  'worked-example.5': {
    en: '          <span class="box-label">1. The overall picture (mean &amp; spread)</span>\n          <p>Across all 28 sales: mean revenue <strong>$2,931.57</strong>, sample standard deviation <strong>$1,191.15</strong>. That spread is large relative to the mean &#8212; a single region-level number would hide a lot.</p>\n        ',
    ar: '          <span class="box-label">١. الصورة الإجمالية (المتوسط والتشتت)</span>\n          <p>عبر جميع المبيعات الـ٢٨: متوسط الإيراد <strong>٢٬٩٣١.٥٧ دولار</strong>، والانحراف المعياري للعيّنة <strong>١٬١٩١.١٥ دولار</strong>. هذا التشتت كبير نسبةً إلى المتوسط — رقم واحد على مستوى كل المناطق كان سيخفي الكثير.</p>\n        ',
    fa: '          <span class="box-label">۱. تصویر کلی (میانگین و پراکندگی)</span>\n          <p>در میان همهٔ ۲۸ فروش: میانگین درآمد <strong>۲٬۹۳۱.۵۷ دلار</strong>، انحراف معیار نمونه <strong>۱٬۱۹۱.۱۵ دلار</strong>. این پراکندگی نسبت به میانگین بزرگ است &#8212; یک عدد تنها در سطح منطقه بسیاری چیزها را پنهان می‌کرد.</p>\n        '
  },
  'worked-example.6': {
    en: '          <span class="box-label">2. The frequency distribution</span>\n          <p>Section 5\'s histogram already showed most sales cluster in the $2,000&#8211;$3,999 range (7 + 9 = 16 of 28 sales), with only 4 sales making it past $4,000. Most clearance revenue is unremarkable &#8212; a handful of high-discount, high-volume days do the heavy lifting.</p>\n        ',
    ar: '          <span class="box-label">٢. التوزيع التكراري</span>\n          <p>أظهر الرسم البياني في القسم ٥ بالفعل أن معظم المبيعات تتجمع في نطاق ٢٬٠٠٠–٣٬٩٩٩ دولار (٧ + ٩ = ١٦ من أصل ٢٨ عملية بيع)، بينما ٤ عمليات بيع فقط تجاوزت ٤٬٠٠٠ دولار. معظم إيرادات التخفيض عادية — أيام قليلة عالية الخصم وعالية الحجم هي التي تقوم بالعمل الأكبر.</p>\n        ',
    fa: '          <span class="box-label">۲. توزیع فراوانی</span>\n          <p>هیستوگرام بخش ۵ از قبل نشان داد که بیشتر فروش‌ها در بازهٔ ۲٬۰۰۰ تا ۳٬۹۹۹ دلار متمرکزند (۷ + ۹ = ۱۶ از ۲۸ فروش)، درحالی‌که فقط ۴ فروش از ۴٬۰۰۰ دلار عبور کردند. بیشتر درآمد تسویه چیز خاصی نیست &#8212; تعداد اندکی روز با تخفیف بالا و حجم بالا کار سنگین را انجام می‌دهند.</p>\n        '
  },
  'worked-example.7': {
    en: '          <span class="box-label">3. The regional comparison</span>\n          <p>Section 7\'s <code class="mono">GROUP BY region</code> table, visualized:</p>\n        ',
    ar: '          <span class="box-label">٣. المقارنة الإقليمية</span>\n          <p>جدول <code class="mono">GROUP BY region</code> من القسم ٧، مرئيًا:</p>\n        ',
    fa: '          <span class="box-label">۳. مقایسهٔ منطقه‌ای</span>\n          <p>جدول <code class="mono">GROUP BY region</code> بخش ۷، به‌صورت تصویری:</p>\n        '
  },
  'worked-example.8': {
    en: 'Diagram 6',
    ar: 'الرسم ٦',
    fa: 'نمودار ۶'
  },
  'worked-example.9': {
    en: 'Average revenue and spread, by region',
    ar: 'متوسط الإيراد والتشتت، حسب المنطقة',
    fa: 'میانگین درآمد و پراکندگی، به تفکیک منطقه'
  },
  'worked-example.10': {
    en: 'East leads on average &#8212; but also has the widest whiskers, meaning the least consistent results.',
    ar: 'يتصدّر الشرق في المتوسط — لكن لديه أيضًا أوسع الشرائط، أي أقل النتائج اتساقًا.',
    fa: 'شرق در میانگین پیشتاز است &#8212; اما پهن‌ترین سبیل‌ها را هم دارد، یعنی کم‌ثبات‌ترین نتایج.'
  },
  'worked-example.11': {
    en: '          <span class="box-label">4. The decision</span>\n          <p>East\'s approach earns the most on average &#8212; but the same data shows East is also the least predictable region, with a standard deviation nearly 46% higher than South\'s. Copying East\'s discount strategy chain-wide is a bet on volatility, not just revenue. The recommendation: pilot East\'s approach in one more region first, and specifically check whether East\'s high average is broad-based or driven by one or two outlier sale days, before rolling it out everywhere. Exactly like Week 0\'s markdown question, the analysis isn\'t finished until it produces a decision &#8212; and here, the honest decision is "test further," not "copy East."</p>\n        ',
    ar: '          <span class="box-label">٤. القرار</span>\n          <p>يحقق نهج الشرق الأعلى في المتوسط — لكن نفس البيانات تُظهر أن الشرق أيضًا أقل المناطق قابلية للتنبؤ، بانحراف معياري أعلى بنسبة ٤٦٪ تقريبًا من الجنوب. نسخ استراتيجية خصم الشرق على مستوى السلسلة بأكملها مراهنة على التقلب، لا على الإيراد فقط. التوصية: جرّب نهج الشرق في منطقة إضافية واحدة أولاً، وتحقق تحديدًا مما إذا كان متوسط الشرق المرتفع واسع القاعدة أم مدفوعًا بيوم أو يومي بيع استثنائيين، قبل تعميمه في كل مكان. تمامًا كسؤال التخفيض في الأسبوع صفر، لا يكتمل التحليل حتى ينتج قرارًا — وهنا، القرار الصادق هو "اختبر أكثر"، لا "انسخ الشرق".</p>\n        ',
    fa: '          <span class="box-label">۴. تصمیم</span>\n          <p>رویکرد شرق در میانگین بیشترین درآمد را کسب می‌کند &#8212; اما همان داده نشان می‌دهد شرق کم‌قابل‌پیش‌بینی‌ترین منطقه هم هست، با انحراف معیاری نزدیک به ۴۶٪ بالاتر از جنوب. کپی‌کردن استراتژی تخفیف شرق در کل زنجیره، شرط‌بندی روی نوسان است، نه فقط درآمد. توصیه: ابتدا رویکرد شرق را در یک منطقهٔ دیگر آزمایش کن، و به‌طور خاص بررسی کن که آیا میانگین بالای شرق گسترده است یا حاصل یکی‌دو روز فروش استثنایی، پیش از اجرای آن در همه‌جا. درست مثل سؤال تخفیف هفته صفر، تحلیل تا زمانی که به یک تصمیم نرسد کامل نیست &#8212; و اینجا، تصمیم صادقانه «بیشتر آزمایش کن» است، نه «شرق را کپی کن».</p>\n        '
  },
  'common-mistakes.1': {
    en: 'Section 10',
    ar: 'القسم ١٠',
    fa: 'بخش ۱۰'
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
  'common-mistakes.6': {
    en: '          <tr><td><strong>STDDEV_POP instead of STDDEV_SAMP</strong></td><td>Dividing by n instead of n&#8722;1 understates the true spread whenever your rows are a sample, not the full population &#8212; which is almost always.</td></tr>\n          <tr><td><strong>Assuming COUNT(*) = COUNT(column)</strong></td><td><code class="mono">COUNT(column)</code> silently skips NULLs. If you want the row count regardless of missing values, use <code class="mono">COUNT(*)</code>.</td></tr>\n          <tr><td><strong>A SELECT column missing from GROUP BY</strong></td><td>Postgres errors instead of guessing &#8212; every non-aggregated column in SELECT must appear in GROUP BY too.</td></tr>\n        ',
    ar: '          <tr><td><strong>STDDEV_POP بدلاً من STDDEV_SAMP</strong></td><td>القسمة على n بدلاً من n&#8722;1 تقلل من التشتت الحقيقي كلما كانت صفوفك عيّنة لا المجتمع الكامل — وهذا هو الحال غالبًا.</td></tr>\n          <tr><td><strong>افتراض أن COUNT(*) تساوي COUNT(column)</strong></td><td>تتجاهل <code class="mono">COUNT(column)</code> قيم NULL بصمت. إن أردت عدد الصفوف بغض النظر عن القيم المفقودة، استخدم <code class="mono">COUNT(*)</code>.</td></tr>\n          <tr><td><strong>عمود في SELECT غير موجود في GROUP BY</strong></td><td>يُصدر Postgres خطأ بدلاً من التخمين — كل عمود غير مجمّع في SELECT يجب أن يظهر أيضًا في GROUP BY.</td></tr>\n        ',
    fa: '          <tr><td><strong>STDDEV_POP به‌جای STDDEV_SAMP</strong></td><td>تقسیم بر n به‌جای n&#8722;1 هرگاه ردیف‌هایت نمونه باشند نه کل جامعه &#8212; که تقریباً همیشه همین‌طور است &#8212; پراکندگی واقعی را کمتر از حد نشان می‌دهد.</td></tr>\n          <tr><td><strong>فرض اینکه COUNT(*) با COUNT(column) برابر است</strong></td><td><code class="mono">COUNT(column)</code> بی‌سروصدا مقادیر NULL را نادیده می‌گیرد. اگر تعداد ردیف‌ها را صرف‌نظر از مقادیر گم‌شده می‌خواهی، از <code class="mono">COUNT(*)</code> استفاده کن.</td></tr>\n          <tr><td><strong>ستونی در SELECT که در GROUP BY نیست</strong></td><td>Postgres به‌جای حدس‌زدن خطا می‌دهد &#8212; هر ستون تجمیع‌نشده در SELECT باید در GROUP BY هم ظاهر شود.</td></tr>\n        '
  },
  'homework.1': {
    en: 'Section 11',
    ar: 'القسم ١١',
    fa: 'بخش ۱۱'
  },
  'homework.2': {
    en: '        <h2>Homework: write your report to the regional director</h2>\n        <p class="standfirst">You\'re the analyst. The regional director from Section 1 is waiting on your answer. Write it up as a short report, in your own words, and email it to me &#8212; each section below is small on its own; answer them in order.</p>\n      ',
    ar: '        <h2>الواجب: اكتب تقريرك للمدير الإقليمي</h2>\n        <p class="standfirst">أنت المحلّل. المدير الإقليمي من القسم ١ ينتظر إجابتك. اكتبها كتقرير قصير، بكلماتك الخاصة، وأرسله لي بالبريد الإلكتروني — كل قسم أدناه صغير بذاته؛ أجب عنها بالترتيب.</p>\n      ',
    fa: '        <h2>تکلیف: گزارشت را برای مدیر منطقه‌ای بنویس</h2>\n        <p class="standfirst">تو تحلیل‌گر هستی. مدیر منطقه‌ای بخش ۱ منتظر پاسخ توست. آن را به‌صورت گزارشی کوتاه، با کلمات خودت بنویس و برایم ایمیل کن &#8212; هر بخش زیر به‌تنهایی کوچک است؛ به ترتیب پاسخشان بده.</p>\n      '
  },
  'homework.3': {
    en: '          <span class="box-label">Write your report, section by section, in order</span>\n          <ol class="steps">\n            <li><strong>Set the scene</strong> &#8212; In 2&#8211;3 sentences, describe the dataset (what it is, where it lives) and the business question the regional director actually wants answered.</li>\n            <li><strong>Why SQL, not Excel</strong> &#8212; In your own words, explain why this couldn\'t just be done by opening a spreadsheet.</li>\n            <li><strong>The center and the spread</strong> &#8212; What did <span class="mono">AVG</span>, <span class="mono">COUNT</span>, and <span class="mono">SUM</span> tell you about the data? Then explain the standard deviation: what it means, how you built it by hand, and what the built-in function confirmed.</li>\n            <li><strong>The shape of the data</strong> &#8212; What did grouping the sales into buckets and counting them show you about how the discounts are distributed? What did the median add that the mean alone didn\'t?</li>\n            <li><strong>Comparing regions</strong> &#8212; Which region had the highest average revenue per sale? Which was the most volatile (least predictable)? Why does knowing both matter more than knowing just one? <strong>Paste the actual SQL query you ran and its result</strong> &#8212; your report needs to show the evidence, not just state the conclusion.</li>\n            <li><strong>Working with AI</strong> &#8212; Describe a moment from this week where you\'d need to explain, verify, or stand behind a SQL query an AI assistant wrote for you. What could go wrong if you skipped that step?</li>\n            <li><strong>The decision</strong> &#8212; Should the chain roll out the best-performing region\'s discount strategy everywhere next season? Give your recommendation and justify it with the actual numbers, not a guess.</li>\n          </ol>\n        ',
    ar: '          <span class="box-label">اكتب تقريرك، قسمًا تلو الآخر، بالترتيب</span>\n          <ol class="steps">\n            <li><strong>حدّد المشهد</strong> — في ٢-٣ جمل، صف البيانات (ما هي، وأين تعيش) والسؤال التجاري الذي يريد المدير الإقليمي إجابة عنه فعليًا.</li>\n            <li><strong>لماذا SQL لا Excel</strong> — اشرح بكلماتك سبب استحالة إنجاز هذا بمجرد فتح جدول بيانات.</li>\n            <li><strong>المركز والتشتت</strong> — ماذا أخبرتك <span class="mono">AVG</span> و<span class="mono">COUNT</span> و<span class="mono">SUM</span> عن البيانات؟ ثم اشرح الانحراف المعياري: ماذا يعني، وكيف بنيته يدويًا، وماذا أكدته الدالة الجاهزة.</li>\n            <li><strong>شكل البيانات</strong> — ماذا أظهر لك تجميع المبيعات في فئات وعدّها عن كيفية توزّع الخصومات؟ ماذا أضاف الوسيط لم يضفه المتوسط وحده؟</li>\n            <li><strong>مقارنة المناطق</strong> — أي منطقة كان لديها أعلى متوسط إيراد للبيع الواحد؟ أيها كانت الأكثر تقلبًا (الأقل قابلية للتنبؤ)؟ لماذا معرفة الاثنين معًا أهم من معرفة واحد فقط؟ <strong>الصق استعلام SQL الفعلي الذي شغّلته ونتيجته</strong> — يحتاج تقريرك إلى إظهار الدليل، لا مجرد ذكر الاستنتاج.</li>\n            <li><strong>العمل مع الذكاء الاصطناعي</strong> — صف لحظة من هذا الأسبوع تحتاج فيها إلى شرح استعلام SQL كتبه مساعد ذكاء اصطناعي أو التحقق منه أو الوقوف خلفه. ما الذي قد يحدث خطأً لو تخطيت تلك الخطوة؟</li>\n            <li><strong>القرار</strong> — هل ينبغي أن تعمم السلسلة استراتيجية خصم المنطقة الأفضل أداءً في كل مكان الموسم القادم؟ أعطِ توصيتك وبرّرها بالأرقام الفعلية، لا بالتخمين.</li>\n          </ol>\n        ',
    fa: '          <span class="box-label">گزارشت را بخش‌به‌بخش، به ترتیب بنویس</span>\n          <ol class="steps">\n            <li><strong>صحنه را بچین</strong> &#8212; در ۲ تا ۳ جمله، دادگان را توصیف کن (چیست، کجا زندگی می‌کند) و سؤال کسب‌وکاری‌ای که مدیر منطقه‌ای واقعاً پاسخش را می‌خواهد.</li>\n            <li><strong>چرا SQL، نه Excel</strong> &#8212; با کلمات خودت توضیح بده چرا این کار را نمی‌شد صرفاً با باز کردن یک صفحه‌گسترده انجام داد.</li>\n            <li><strong>مرکز و پراکندگی</strong> &#8212; <span class="mono">AVG</span>، <span class="mono">COUNT</span> و <span class="mono">SUM</span> دربارهٔ داده چه چیزی به تو گفتند؟ سپس انحراف معیار را توضیح بده: چه معنایی دارد، چگونه آن را دستی ساختی و تابع آماده چه چیزی را تأیید کرد.</li>\n            <li><strong>شکل داده</strong> &#8212; گروه‌بندی فروش‌ها در بازه‌ها و شمارششان چه چیزی دربارهٔ نحوهٔ توزیع تخفیف‌ها به تو نشان داد؟ میانه چه چیزی افزود که میانگین به‌تنهایی نمی‌داد؟</li>\n            <li><strong>مقایسهٔ مناطق</strong> &#8212; کدام منطقه بالاترین میانگین درآمد به‌ازای هر فروش را داشت؟ کدام‌یک بی‌ثبات‌ترین (کم‌قابل‌پیش‌بینی‌ترین) بود؟ چرا دانستن هر دو مهم‌تر از دانستن فقط یکی است؟ <strong>پرس‌وجوی SQLای که واقعاً اجرا کردی و نتیجه‌اش را جای‌گذاری کن</strong> &#8212; گزارشت باید شاهد نشان دهد، نه فقط نتیجه را بیان کند.</li>\n            <li><strong>کار با هوش مصنوعی</strong> &#8212; لحظه‌ای از این هفته را توصیف کن که در آن لازم بود پرس‌وجوی SQLای را که دستیار هوش مصنوعی نوشته بود توضیح دهی، تأیید کنی یا پشتش بایستی. اگر آن گام را رد می‌کردی چه چیزی ممکن بود اشتباه پیش برود؟</li>\n            <li><strong>تصمیم</strong> &#8212; آیا زنجیره باید استراتژی تخفیف منطقهٔ برترین را در فصل بعد در همه‌جا اجرا کند؟ توصیه‌ات را بده و آن را با اعداد واقعی، نه یک حدس، توجیه کن.</li>\n          </ol>\n        '
  },
  'before-week-2.1': {
    en: 'Section 12',
    ar: 'القسم ١٢',
    fa: 'بخش ۱۲'
  },
  'before-week-2.2': {
    en: '        <h2>Before Week 2</h2>\n        <p>Every query this week read from one table. Week 2 introduces <code class="mono">JOIN</code> &#8212; combining rows from two tables at once &#8212; but that\'s next week\'s problem, not this one\'s.</p>\n      ',
    ar: '        <h2>قبل الأسبوع ٢</h2>\n        <p>كل استعلام هذا الأسبوع قرأ من جدول واحد. يقدّم الأسبوع ٢ عبارة <code class="mono">JOIN</code> — دمج صفوف من جدولين في آن واحد — لكن هذه مشكلة الأسبوع القادم، لا هذا الأسبوع.</p>\n      ',
    fa: '        <h2>پیش از هفته ۲</h2>\n        <p>هر پرس‌وجوی این هفته از یک جدول می‌خواند. هفته ۲ عبارت <code class="mono">JOIN</code> را معرفی می‌کند &#8212; ترکیب ردیف‌ها از دو جدول همزمان &#8212; اما این مسئلهٔ هفتهٔ بعد است، نه این هفته.</p>\n      '
  },
  'before-week-2.3': {
    en: 'Back to top &#8593;',
    ar: 'العودة للأعلى &#8593;',
    fa: 'بازگشت به بالا &#8593;'
  },
  'footer.1': {
    en: 'BA2 Week 1 &#183; Statistics at Scale',
    ar: 'الأسبوع 1 من BA2 &#183; الإحصاء على نطاق واسع',
    fa: 'هفته ۱ از تحلیل کسب‌وکار ۲ &#183; آمار در مقیاس بزرگ'
  },
};
