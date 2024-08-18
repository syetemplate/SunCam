// eslint-disable-next-line import/no-anonymous-default-export
export default {
    meta: {
        titlePrefix: ' | SunCam',
        pages: {
            homePage: {
                title: 'מצלמת אבטחה סולארית | SunCam',
                description: 'SunCam מתמחה בייצור מצלמות אבטחה סולאריות מתקדמות. עם מצלמת SunCam, תוכלו להגן על ביתכם או עסקכם באופן אמין ויעיל, תוך שמירה על הסביבה.',
            },
            aboutUs: {
                title: 'מי אנחנו | המובילים בתחום מצלמות האבטחה הסולאריות | SunCam',
                description: 'SunCam מובילה את המהפכה בעולם מצלמות האבטחה הסולאריות. אנו מייצרים מצלמות אמינות, יעילות וידידותיות לסביבה, המספקות ביטחון מקסימלי לבתים ועסקים.',
            },
            blog: {
                title: 'טיפים לאבטחה | בלוג SunCam',
                description: 'בלוג SunCam מספק מידע שימושי, טיפים וסקירות מוצרים כדי לעזור לכם להפיק את המרב ממצלמת האבטחה הסולארית שלכם ולהישאר מעודכנים בעולם האבטחה.',
            },
            checkout: {
                title: 'השלמת הרכישה | SunCam',
                description: 'השלם את רכישת מצלמת האבטחה הסולארית שלך מ-SunCam. תהליך פשוט ומאובטח להזמנת המצלמה המושלמת לצרכי האבטחה שלך.',
            },
            privacyPolicy: {
                title: 'מדיניות הפרטיות | SunCam',
                description: 'מדיניות הפרטיות של SunCam מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך. אנו מחויבים לשמור על פרטיותך ולהבטיח את אבטחת המידע שלך.',
            },
            products: {
                title: 'מצלמות אבטחה סולאריות | קטלוג המוצרים של SunCam',
                description: 'גלה את מגוון מצלמות האבטחה הסולאריות של SunCam. מצלמות אמינות, יעילות וידידותיות לסביבה, המספקות ביטחון מקסימלי לבתים ועסקים.',
            },
            termsAndConditions: {
                title: 'תנאים והגבלות | SunCam',
                description: 'תנאי השימוש של SunCam מפרטים את הכללים והתקנות לשימוש באתר שלנו ובמוצרינו. חשוב לקרוא ולהבין את התנאים לפני השימוש באתר או רכישת מוצרינו.',
            },
        }
    },
    header: {
        menu: [
            { label: 'בית', href: '/' },
            { label: 'מוצרים', href: '/products' },
            { label: 'טיפים לאבטחה', href: '/blog' },
        ],
        cta: {
            text: 'הזמן עכשיו',
            href: '/products',
        },
    },
    hero: {
        title: 'מצלמת <span className="lg:text-primary">אבטחה סולארית</span>',
        description: 'שמרו על הבית בביטחון ובאופן ידידותי לסביבה! מצלמת האבטחה הסולארית שלנו מציעה פתרון ניטור קל לתפעול, ללא צורך בסוללות או חיווט. המצלמה מופעלת על ידי השמש ומבטיחה הגנה רציפה על הנכס שלכם, יומם ולילה.',
        imageName: 'hero.png',
        cta: {
            text: 'רכישה',
            href: '/products',
        },
        cta2: {
            text: 'צור קשר',
            href: '#contact',
        },
    },
    features: {
        list: [
            {
                title: 'כוח סולארי מתמשך',
                description: 'פאנל סולארי 5W וסוללות 20000mAh עוצמתיות מבטיחים פעולה רציפה גם בתאורה חלשה או בימים גשומים.',
                imageName: 'feature-1.png',
            },
            {
                title: 'צפייה ברזולוציה גבוהה',
                description: 'שתי מצלמות מספקות צפייה רחבה בזווית רחבה לצד מעקב PTZ מפורט, שתיהן באיכות תמונה HD‏ 4K (8MP).',
                imageName: 'feature-2.png',
            },
            {
                title: 'מעקב חכם אחר תנועת אדם',
                description: 'המצלמה מסתובבת או נוטה באופן חכם כדי לעקוב אחר תנועת אדם, כך שלא תחמיצו אף רגע חשוב.',
                imageName: 'feature-3.png',
            },
            {
                title: 'ראייה לילה צבעונית מלאה',
                description: 'מצב ראיית לילה צבעונית מלאה עם פנסי הצפה מובנים מספק תמונות ברורות וצבעוניות גם בתנאי תאורה חלשה.',
                imageName: 'feature-4.png',
            },
        ],
    },
    benefits: {
        title: 'למה להשתמש ב-SunCam',
        subtitle: 'SunCam היא המצלמה הטובה ביותר לאבטחת הבית או העסק שלכם. הנה כמה יתרונות של השימוש במוצר שלנו.',
        imageName: 'benefits.webp',
        list: [
            {
                title: 'שדה ראייה של 360 מעלות',
                description: 'כיסוי מלא של האזור המאובטח ללא נקודות עיוורות.',
                imageName: 'benefit-1.png',
            },
            {
                title: 'פעולה באמצעות אנרגיה סולארית',
                description: 'חסכון בעלויות חשמל ופעולה ידידותית לסביבה.',
                imageName: 'benefit-2.png',
            },
            {
                title: 'גישה מרחוק',
                description: 'צפייה בשידור חי ובהקלטות מכל מקום באמצעות הטלפון החכם או המחשב.',
                imageName: 'benefit-3.png',
            },
            {
                title: 'קישוריות WiFi/4G',
                description: 'חיבור יציב ואמין לאינטרנט לשידור רציף ואחסון בענן.',
                imageName: 'benefit-4.png',
            },
            {
                title: 'התקנה קלה',
                description: 'ללא צורך בחיווט מסובך, פשוט להתקין ולהפעיל.',
                imageName: 'benefit-5.png',
            },
            {
                title: 'עמידות בתנאי מזג אוויר',
                description: 'מיוצר מחומרים עמידים לשימוש בטוח בכל תנאי מזג אוויר.',
                imageName: 'benefit-6.png',
            },
        ],
    },
    video: {
        title: 'מצלמת אבטחה סולארית מתקדמת עם ראיית לילה וזווית רחבה',
        description: 'צפה במצלמת האבטחה הסולארית שלנו בפעולה. הסרטון מציג את התכונות והיכולות של ה-SunCam.',
        cta: {
            text: 'הזמן עכשיו',
            href: '/products',
        },
        youtubeVideoId: 'iWKu6WNFf9M',
    },
    gallery: {
        title: 'גלריית המוצרים',
    },
    newsletter: {
        title: 'הירשמו לרשימת התפוצה שלנו',
        description: 'קבלו עדכונים על המבצעים הטובים ביותר שלנו וטיפים לאבטחה...',
        emailPlaceholder: 'הזן את האימייל שלך...',
        emailError: 'אימייל לא תקין',
        submit: 'הירשם עכשיו',
        error: 'אוי, משהו השתבש. אנא נסה שוב מאוחר יותר.',
        success: 'ההרשמה בוצעה בהצלחה!',
    },
    footer: {
        text: 'SunCam מציעה מצלמות אבטחה סולאריות מתקדמות, קלות להתקנה ויעילות במיוחד עבור בתים ועסקים. אנו מחויבים לספק פתרונות אבטחה איכותיים וידידותיים לסביבה.',
        social: [
            { icon: 'fab fa-facebook-f', href: 'https://facebook.com', label: 'Facebook' },
            { icon: 'fab fa-instagram', href: 'https://instagram.com', label: 'Instagram' },
            { icon: 'fab fa-youtube', href: 'https://youtube.com', label: 'YouTube' },
        ],
        recentPosts: 'פוסטים אחרונים',
        usefulLinks: {
            title: 'קישורים שימושיים',
            list: [
                { title: 'מוצרים', href: '/products' },
                { title: 'טיפים לאבטחה', href: '/blog' },
                { title: 'מי אנחנו', href: '/about-us' },
                { title: 'מדיניות פרטיות', href: '/privacy-policy' },
                { title: 'תנאים והגבלות', href: '/terms-and-conditions' },
            ],
        },
        contact: {
            title: 'צרו קשר',
            emailPlaceholder: 'האימייל שלך',
            messagePlaceholder: 'ההודעה שלך',
            submit: 'שליחה',
            emailError: 'אימייל לא תקין',
            messageError: 'הודעה ריקה',
            success: 'ההודעה נשלחה בהצלחה!',
        },
        copyright: '© 2024 SunCam | כל הזכויות שמורות',
    },
    blog: {
        title: 'טיפים לאבטחה',
        description: 'SunCam מביאה לכם מידע שימושי, טיפים וסקירות מוצרים כדי לעזור לכם להפיק את המרב ממצלמת האבטחה הסולארית שלכם ולהישאר מעודכנים.',
        posts: [
            {
                date: '9 מרץ, 2024',
                title: 'מגמות חדשות בתחום מצלמות האבטחה הסולאריות',
                description: 'סקירת טכנולוגיות חדשות ומגמות עתידיות בתחום מצלמות האבטחה הסולאריות.',
                href: '/blog/solar-security-camera-trends-2024',
                imageName: 'blog-1.webp',
                content: [
                    {
                        type: 'paragraph',
                        text: 'תחום מצלמות האבטחה הסולאריות ממשיך להתפתח במהירות, עם חידושים טכנולוגיים המשפרים את היעילות, האמינות והפונקציונליות של מערכות אלו.'
                    },
                    {
                        type: 'paragraph',
                        text: 'אחת המגמות המרכזיות היא שילוב של בינה מלאכותית (AI) ולמידת מכונה, המאפשרות זיהוי מדויק יותר של אירועים חשודים ומפחיתות התראות שווא.'
                    },
                    {
                        type: 'blockquote',
                        text: 'השילוב של AI במצלמות אבטחה סולאריות מאפשר לא רק לזהות תנועה, אלא גם להבחין בין אנשים, כלי רכב וחיות, ולהתריע רק כאשר יש צורך אמיתי.'
                    },
                    {
                        type: 'paragraph',
                        text: 'בנוסף, ישנה מגמה של שיפור ביעילות האנרגטית של המצלמות. פאנלים סולאריים מתקדמים וסוללות בעלות קיבולת גבוהה יותר מאפשרים פעולה רציפה גם בתנאי תאורה מאתגרים או בתקופות ארוכות של מזג אוויר מעונן.'
                    },
                    {
                        type: 'image',
                        imageName: 'blog-4.webp',
                        alt: 'מצלמת אבטחה סולארית חדשנית'
                    },
                    {
                        type: 'image',
                        imageName: 'blog-5.webp',
                        alt: 'תצוגת AI של מצלמת אבטחה'
                    },
                    {
                        type: 'paragraph',
                        text: 'מגמה נוספת היא שיפור באיכות הווידאו ויכולות הראייה הלילית. מצלמות חדשות מציעות רזולוציה של 4K ומעלה, יחד עם טכנולוגיות מתקדמות לראיית לילה צבעונית, המאפשרות זיהוי פרטים ברורים גם בחשכה מוחלטת.'
                    },
                    {
                        type: 'paragraph',
                        text: 'לסיכום, העתיד של מצלמות האבטחה הסולאריות נראה מבטיח, עם שילוב של טכנולוגיות מתקדמות המשפרות את הביצועים, היעילות והנוחות למשתמש. ככל שהטכנולוגיה ממשיכה להתפתח, אנו יכולים לצפות למצלמות חכמות יותר, יעילות יותר ואמינות יותר שיספקו רמת אבטחה גבוהה עוד יותר לבתים ועסקים.'
                    }
                ],
                tags: ['מוצר מוביל', 'מצלמת אבטחה סולארית', 'AI', 'טכנולוגיה מתקדמת'],
            },
            {
                date: '15 אוגוסט, 2024',
                title: 'כיצד לבחור את מצלמת האבטחה הסולארית המתאימה לצרכים שלכם',
                description: 'מדריך מקיף לבחירת מצלמת אבטחה סולארית, כולל השוואה בין סוגים שונים ותכונות חשובות.',
                href: '/blog/how-to-choose-the-right-solar-security-camera',
                imageName: 'blog-2.webp',
                content: [
                    {
                        type: 'paragraph',
                        text: 'בחירת מצלמת אבטחה סולארית מתאימה יכולה להיות משימה מאתגרת, במיוחד לאור המגוון הרחב של אפשרויות הקיימות בשוק. במאמר זה נסקור את השיקולים העיקריים שיעזרו לכם לבחור את המצלמה המתאימה ביותר לצרכים שלכם.'
                    },
                    {
                        type: 'paragraph',
                        text: 'ראשית, חשוב לשקול את איכות הווידאו. רוב המצלמות המודרניות מציעות רזולוציה של לפחות 1080p, אך ישנן גם אפשרויות ל-4K. ככל שהרזולוציה גבוהה יותר, כך תוכלו לראות פרטים ברורים יותר, אך זכרו שרזולוציה גבוהה יותר גם דורשת יותר אחסון ורוחב פס.'
                    },
                    {
                        type: 'blockquote',
                        text: 'איכות הראייה הלילית היא גורם קריטי במצלמות אבטחה. חפשו מצלמות עם LED אינפרא-אדום חזק או טכנולוגיית ראיית לילה צבעונית לתוצאות מיטביות.'
                    },
                    {
                        type: 'paragraph',
                        text: 'שנית, בדקו את יעילות המערכת הסולארית. וודאו שהפאנל הסולארי מספיק חזק לטעינת הסוללה, וששעות האור בסביבתכם מספיקות לפעולה רציפה. מצלמות עם סוללות בקיבולת גבוהה יוכלו לפעול לאורך זמן גם בימים מעוננים.'
                    },
                    {
                        type: 'image',
                        imageName: 'blog-6.webp',
                        alt: 'השוואת מצלמות אבטחה סולאריות'
                    },
                    {
                        type: 'image',
                        imageName: 'blog-7.webp',
                        alt: 'התקנת מצלמת אבטחה סולארית'
                    },
                    {
                        type: 'paragraph',
                        text: 'תכונות נוספות שכדאי לשקול כוללות זיהוי תנועה חכם, אפשרויות אחסון (בענן או על כרטיס זיכרון מקומי), תקשורת דו-כיוונית, ואינטגרציה עם מערכות בית חכם. חשוב גם לבדוק את איכות האפליקציה ואת קלות השימוש בה.'
                    },
                    {
                        type: 'paragraph',
                        text: 'לבסוף, אל תשכחו לקחת בחשבון את עמידות המצלמה לתנאי מזג אוויר ואת קלות ההתקנה. מצלמה עם דירוג IP גבוה תהיה עמידה יותר לגשם ואבק, ומצלמה עם התקנה פשוטה תחסוך לכם זמן וכאב ראש.'
                    }
                ],
                tags: ['מצלמת אבטחה סולארית', 'מדריך קנייה', 'טיפים לאבטחה', 'טכנולוגיה'],
            },
            {
                date: '27 מאי, 2024',
                title: '5 טיפים להתקנה יעילה של מצלמת אבטחה סולארית',
                description: 'מדריך מעשי להתקנה נכונה של מצלמת אבטחה סולארית, כולל טיפים להשגת הביצועים הטובים ביותר.',
                href: '/blog/5-tips-for-efficient-solar-security-camera-installation',
                imageName: 'blog-3.webp',
                content: [
                    {
                        type: 'paragraph',
                        text: 'התקנה נכונה של מצלמת אבטחה סולארית היא קריטית להבטחת ביצועים מיטביים ואבטחה יעילה. הנה חמישה טיפים חשובים שיעזרו לכם להתקין את המצלמה שלכם בצורה הטובה ביותר.'
                    },
                    {
                        type: 'paragraph',
                        text: '1. בחירת מיקום אופטימלי: מקמו את המצלמה במקום שמקבל אור שמש ישיר במשך מרבית שעות היום. זה יבטיח טעינה יעילה של הסוללה. בנוסף, וודאו שהמצלמה מכסה את האזורים החשובים ביותר בנכס שלכם.'
                    },
                    {
                        type: 'blockquote',
                        text: 'זכרו: מיקום טוב של המצלמה יכול להיות ההבדל בין כיסוי מלא לנקודות עיוורות מסוכנות.'
                    },
                    {
                        type: 'paragraph',
                        text: '2. וודאו חיבור אינטרנט יציב: אם המצלמה שלכם משתמשת ב-Wi-Fi, בדקו שהאות חזק במיקום הנבחר. במידת הצורך, שקלו להשתמש במגבר אות Wi-Fi או בחרו מצלמה עם חיבור סלולרי.'
                    },
                    {
                        type: 'image',
                        imageName: 'blog-8.webp',
                        alt: 'התקנת מצלמת אבטחה סולארית על קיר'
                    },
                    {
                        type: 'image',
                        imageName: 'blog-9.webp',
                        alt: 'בדיקת זווית הצילום של מצלמת אבטחה'
                    },
                    {
                        type: 'paragraph',
                        text: '3. כיוון נכון של הפאנל הסולארי: וודאו שהפאנל הסולארי מכוון ישירות לכיוון השמש בשעות השיא. בחצי הכדור הצפוני, זה בדרך כלל לכיוון דרום.'
                    },
                    {
                        type: 'paragraph',
                        text: '4. הגנה מפני מזג אוויר: למרות שרוב המצלמות הסולאריות מיועדות לשימוש חיצוני, כדאי לשקול להוסיף הגנה נוספת כמו גגון קטן מעל המצלמה להגנה מפני גשם כבד או שלג.'
                    },
                    {
                        type: 'paragraph',
                        text: '5. בדיקה וכיול: לאחר ההתקנה, הקדישו זמן לבדוק את הזוויות, את איכות התמונה ואת ההגדרות באפליקציה. כוונו את רגישות זיהוי התנועה כדי למנוע התראות שווא מרובות.'
                    }
                ],
                tags: ['מצלמת אבטחה סולארית', 'התקנה', 'טיפים מעשיים', 'אבטחת בית'],
            },
        ],
        readMore: 'קרא עוד',
    },
    blogPost: {
        recentPosts: 'פוסטים אחרונים',
        tags: 'תגיות',
    },
    privacyPolicy: {
        title: 'מדיניות ופרטיות',
        sections: [
            {
                title: 'מבוא',
                content: 'אנו מעריכים את פרטיותך ומחויבים להגן על המידע האישי שלך. מדיניות ופרטיות זו מסבירה כיצד אנו אוספים את המידע שלך.',
            },
            {
                title: 'המידע שאנו אוספים',
                content: 'אנו אוספים מידע שאתה מספק לנו ישירות, כגון כאשר אתה יוצר חשבון, מבצע רכישה או מתקשר איתנו. אנו גם אוספים מידע באופן אוטומטי באמצעות השימוש שלך בשירותים שלנו, כגון כתובת ה-IP שלך והתנהגות הגלישה.',
            },
            {
                title: 'כיצד אנו משתמשים במידע שלך',
                content: 'אנו משתמשים במידע שלך כדי לספק ולשפר את השירותים שלנו, לעבד עסקאות, לתקשר איתך ולמטרות אחרות המתוארות במדיניות פרטיות זו.',
            },
            {
                title: 'שיתוף המידע שלך',
                content: 'אנו עשויים לשתף את המידע שלך עם צדדים שלישיים כדי לספק את השירותים שלנו, לעמוד בחובות משפטיות ולמטרות אחרות המתוארות במדיניות פרטיות זו.',
            },
            {
                title: 'הבחירות שלך',
                content: 'יש לך בחירות לגבי המידע שלך, כולל אופן השימוש והשיתוף בו. אתה יכול לעדכן את פרטי החשבון שלך והעדפות התקשורת, ויתכן שיש לך את הזכות לגשת, לתקן או למחוק את המידע האישי שלך.',
            },
            {
                title: 'צור איתנו קשר',
                content: 'אם יש לך שאלות כלשהן לגבי מדיניות פרטיות זו, אנא צור איתנו קשר בכתובת privacy@suncam.com.',
            },
        ],
    },
    termsAndConditions: {
        title: 'תנאים והגבלות',
        sections: [
            {
                title: 'מבוא',
                content: 'תנאים והגבלות אלה מתווים את הכללים והתקנות לשימוש באתר הרשמי של SunCam.',
            },
            {
                title: 'זכויות קניין רוחני',
                content: 'מלבד התוכן שאתה הבעלים שלו, תחת תנאים אלה, SunCam ו/או המעניקים שלה הם הבעלים של כל זכויות הקניין הרוחני והחומרים הכלולים באתר זה.',
            },
            {
                title: 'הגבלות',
                content: 'אסור לך באופן ספציפי את כל הדברים הבאים: פרסום כל חומר מהאתר בכל מדיה אחרת; מכירה, הענקת רישיון משנה ו/או מסחור בכל דרך אחרת בכל חומר מהאתר; ביצוע ו/או הצגה פומבית של כל חומר מהאתר; שימוש באתר זה בכל דרך שעלולה לגרום נזק לאתר; שימוש באתר זה בכל דרך שמשפיעה על גישת משתמש לאתר זה; שימוש באתר זה בניגוד לחוקים ותקנות ישימים, או בכל דרך שעלולה לגרום נזק לאתר או לכל אדם או ישות עסקית; עיסוק בכל כריית נתונים, איסוף נתונים, חילוץ נתונים או כל פעילות דומה אחרת ביחס לאתר זה; שימוש באתר זה לצורך עיסוק בפרסום או שיווק כלשהו.',
            },
            {
                title: 'התוכן שלך',
                content: 'במונחים סטנדרטיים אלה של האתר, "התוכן שלך" פירושו כל אודיו, וידאו טקסט, תמונות או חומר אחר שתבחר להציג באתר זה. על ידי הצגת התוכן שלך, אתה מעניק ל-SunCam רישיון לא בלעדי, ברחבי העולם, בלתי חוזר, בר-רישיון משנה להשתמש, לשכפל, להתאים, לפרסם, לתרגם ולהפיץ אותו בכל מדיה.',
            },
            {
                title: 'אין אחריות',
                content: 'אתר זה מסופק "כמות שהוא", עם כל הפגמים, ו-SunCam אינה מביעה מצגים או אחריות מכל סוג שהוא הקשורים לאתר זה או לחומרים הכלולים בו.',
            },
            {
                title: 'הגבלת אחריות',
                content: 'בשום מקרה SunCam, או מי ממנהליה, דירקטורים ועובדים, לא יהיו אחראים לכל דבר הנובע או הקשור בכל דרך לשימוש שלך באתר זה, בין אם האחריות היא על פי חוזה. SunCam, כולל מנהליה, דירקטורים ועובדים, לא יהיו אחראים לכל חבות עקיפה, תוצאתית או מיוחדת הנובעת או קשורה בכל דרך לשימוש שלך באתר זה.',
            },
            {
                title: 'שיפוי',
                content: 'אתה מתחייב בזאת לשפות את SunCam במלוא היקפה בגין כל התחייבויות, עלויות, דרישות, סיבות לתביעה, נזקים והוצאות הנובעים בכל דרך מהפרה שלך של הוראות תנאים אלה.',
            },
            {
                title: 'יכולת הפרדה',
                content: 'אם נמצא שהוראה כלשהי של תנאים אלה אינה תקפה על פי כל חוק ישים, הוראות כאלה יימחקו מבלי להשפיע על ההוראות הנותרות בזאת.',
            },
            {
                title: 'שינוי התנאים',
                content: 'SunCam רשאית לשנות תנאים אלה בכל עת כפי שהיא רואה לנכון, ועל ידי שימוש באתר זה אתה אמור לסקור את התנאים האלה על בסיס קבוע.',
            },
            {
                title: 'הסבה',
                content: 'SunCam רשאית להמחות ולהעביר בקבלנות משנה את זכויותיה ו/או התחייבויותיה על פי תנאים אלה ללא כל הודעה. עם זאת, אינך רשאי להמחות, להעביר או להעביר בקבלנות משנה את זכויותיך ו/או התחייבויותיך על פי תנאים אלה.',
            },
            {
                title: 'הסכם שלם',
                content: 'תנאים אלה מהווים את ההסכם השלם בין SunCam לבינך בנוגע לשימוש שלך באתר זה וגוברים על כל ההסכמים וההבנות הקודמים.',
            },
            {
                title: 'דין מכריע ושיפוט',
                content: 'תנאים אלה יהיו כפופים ויפורשו בהתאם לחוקי מדינת ישראל, ואתה כפוף לסמכות השיפוט הלא בלעדית של בתי המשפט של המדינה והפדרליים הממוקמים בישראל ליישוב כל מחלוקות.',
            },
        ],
    },
    aboutUs: {
        title: "מי אנחנו: המובילים בתחום מצלמות האבטחה הסולאריות",
        sections: [
            {
                title: 'החזון שלנו',
                content: 'ב-SunCam, אנחנו לא סתם עוד חברת מצלמות אבטחה. אנחנו מובילים מהפכה ירוקה בתחום האבטחה! מאז הקמתנו, הפכנו ממיזם קטן למובילי שוק, עם משימה ברורה: להנגיש טכנולוגיית אבטחה מתקדמת וידידותית לסביבה לכל בית ועסק. אנו מאמינים שאבטחה איכותית לא צריכה לבוא על חשבון הסביבה, ולכן פיתחנו מצלמות אבטחה סולאריות שהן לא רק יעילות, אלא גם תורמות לעתיד ירוק יותר.'
            },
            {
                title: 'הצוות שלנו',
                content: 'מאחורי כל מצלמת אבטחה סולארית עומד צוות מסור של מהנדסים, מעצבים ומומחי אבטחה. המהנדסים שלנו עובדים ללא לאות כדי לפתח טכנולוגיות חדשניות, המעצבים שלנו מבטיחים שהמוצרים שלנו לא רק יעילים אלא גם אסתטיים, ומומחי האבטחה שלנו מוודאים שכל מצלמה עומדת בסטנדרטים הגבוהים ביותר של אבטחה ופרטיות.'
            },
            {
                title: 'היתרון שלנו',
                content: 'ב-SunCam, אנחנו מבינים שאבטחה היא לא רק עניין של טכנולוגיה, אלא גם של אמון. אנחנו מתגאים ביחס האישי ללקוחות שלנו, בתמיכה הטכנית המעולה ובמחויבות שלנו לאיכות ללא פשרות. המוצרים שלנו לא רק מספקים אבטחה מתקדמת, אלא גם חוסכים בעלויות חשמל ומפחיתים את טביעת הרגל הפחמנית.'
            },
            {
                title: 'העתיד של אבטחה ירוקה',
                content: 'אנחנו לא רק חולמים על עתיד שבו כל בית ועסק יכולים ליהנות מאבטחה מתקדמת וידידותית לסביבה - אנחנו בונים אותו, מצלמה אחר מצלמה. עם SunCam, אתם לא רק מגנים על הנכס שלכם, אלא גם תורמים לעתיד ירוק יותר. הצטרפו אלינו למסע לעבר אבטחה חכמה, יעילה וירוקה!'
            }
        ]
    },
    products: {
        title: 'הזמן את SunCam',
        description: 'SunCam מציעה מגוון דגמים מתקדמים של מצלמות אבטחה סולאריות, המתאימות לבתים ועסקים. כל המוצרים שלנו קלים להתקנה, יעילים ובטוחים לשימוש.',
        currency: '₪',
        items: [
            {
                id: 'sunCamBasic',
                href: '/products/sun-cam-basic',
                name: 'SunCam בסיסי',
                title: 'SunCam <strong>בסיסי</strong>',
                price: 899,
                customerReviewsLabel: 'ביקורות לקוחות',
                text: 'מצלמת האבטחה הסולארית הבסיסית שלנו מספקת אבטחה אמינה עם התקנה פשוטה וביצועים יעילים.',
                productInfo: {
                    title: 'פרטי המוצר',
                    list: [
                        { title: 'רזולוציה', description: '1080p Full HD' },
                        { title: 'זמן עבודה', description: 'עד 7 ימים ללא שמש' },
                        { title: 'זווית צפייה', description: '130°' },
                        { title: 'אחסון', description: 'כרטיס SD עד 128GB' },
                    ]
                },
                description: {
                    title: 'תיאור',
                    text: 'SunCam בסיסי היא הבחירה המושלמת למי שמחפש פתרון אבטחה אמין וידידותי לסביבה. עם מצלמה באיכות HD, חיישן תנועה חכם וסוללה נטענת סולארית, היא מספקת אבטחה 24/7 ללא צורך בחיבור לחשמל.'
                },
                additionalInfo: {
                    title: 'מידע נוסף',
                    text: '<strong>SunCam בסיסי כולל</strong>:<br>1 x מצלמת אבטחה סולארית SunCam<br>1 x פאנל סולארי<br>1 x סוללה נטענת<br>1 x ערכת התקנה<br>1 x מדריך למשתמש'
                },
                reviews: {
                    title: 'ביקורות',
                    list: [
                        { name: 'יעל לוי', date: '22 במאי 2024', rating: 5, text: 'מצלמה מעולה! קלה להתקנה ועובדת בצורה מושלמת. ממליצה בחום.', avatarImageName: 'review-1-avatar.webp' },
                        { name: 'אבי כהן', date: '13 ביוני 2024', rating: 4, text: 'איכות תמונה טובה מאוד ואני אוהב שזה ידידותי לסביבה. הייתי שמח לראות זווית רחבה יותר.', avatarImageName: 'review-2-avatar.webp' },
                        { name: 'מיכל גולן', date: '14 באפריל 2024', rating: 5, text: 'פתרון מצוין לאבטחת הבית. האפליקציה נוחה לשימוש והסוללה מחזיקה מעמד זמן רב.', avatarImageName: 'review-3-avatar.webp' },
                        { name: 'דני שמעוני', date: '20 באפריל 2024', rating: 4, text: 'מוצר טוב מאוד. התקנה קלה ואיכות תמונה טובה. הייתי רוצה לראות יותר אפשרויות התראה.', avatarImageName: 'review-4-avatar.webp' },
                    ],
                },
                images: [
                    { imageName: 'gallery-1.webp', description: 'SunCam מצלמת אבטחה סולארית בסיסית מותקנת על קיר' },
                    { imageName: 'gallery-2.webp', description: 'תצוגת אפליקציה של SunCam בסיסי על טלפון חכם' },
                    { imageName: 'gallery-3.webp', description: 'פאנל סולארי של SunCam בסיסי' },
                ],
            },
            {
                id: 'sunCamPro',
                href: '/products/sun-cam-pro',
                name: 'SunCam פרו',
                title: 'SunCam <strong>פרו</strong>',
                price: 1299,
                customerReviewsLabel: 'ביקורות לקוחות',
                text: 'מצלמת אבטחה סולארית מתקדמת עם רזולוציה גבוהה, זיהוי תנועה חכם וראיית לילה משופרת.',
                productInfo: {
                    title: 'פרטי המוצר',
                    list: [
                        { title: 'רזולוציה', description: '2K Ultra HD' },
                        { title: 'זמן עבודה', description: 'עד 14 ימים ללא שמש' },
                        { title: 'זווית צפייה', description: '160°' },
                        { title: 'אחסון', description: 'כרטיס SD עד 256GB + אחסון בענן' },
                    ]
                },
                description: {
                    title: 'תיאור',
                    text: 'SunCam פרו מציעה אבטחה ברמה גבוהה עם תכונות מתקדמות. עם רזולוציה של 2K, זיהוי תנועה מבוסס AI וראיית לילה צבעונית, היא מספקת תמונה ברורה וחדה בכל תנאי תאורה. הסוללה המשופרת והפאנל הסולארי היעיל מבטיחים פעולה רציפה לאורך זמן.'
                },
                additionalInfo: {
                    title: 'מידע נוסף',
                    text: '<strong>SunCam פרו כולל</strong>:<br>1 x מצלמת אבטחה סולארית SunCam פרו<br>1 x פאנל סולארי משופר<br>1 x סוללה נטענת בקיבולת גבוהה<br>1 x ערכת התקנה<br>1 x מדריך למשתמש<br>30 ימי ניסיון חינם לאחסון בענן'
                },
                reviews: {
                    title: 'ביקורות',
                    list: [
                        { name: 'רונית ברק', date: '5 ביולי 2024', rating: 5, text: 'איכות תמונה מדהימה! זיהוי התנועה החכם עובד מצוין ומונע התראות שווא.', avatarImageName: 'review-5-avatar.webp' },
                        { name: 'עידו לוי', date: '18 יוני 2024', rating: 5, text: 'שדרגתי מהדגם הבסיסי וההבדל מורגש. ראיית הלילה הצבעונית מרשימה במיוחד.', avatarImageName: 'review-6-avatar.webp' },
                        { name: 'ליאת כהן', date: '2 מאי 2024', rating: 4, text: 'מוצר מצוין עם תכונות מתקדמות. הייתי רוצה לראות אפשרויות נוספות לאינטגרציה עם מערכות בית חכם.', avatarImageName: 'review-7-avatar.webp' },
                        { name: 'אורי גל', date: '10 אפריל 2024', rating: 5, text: 'ההתקנה הייתה פשוטה והתמיכה הטכנית מצוינת. מרוצה מאוד מהרכישה.', avatarImageName: 'review-8-avatar.webp' },
                    ],
                },
                images: [
                    { imageName: 'gallery-4.webp', description: 'SunCam פרו מותקנת בחצר בית' },
                    { imageName: 'gallery-5.webp', description: 'השוואת איכות תמונה בין SunCam בסיסי ל-SunCam פרו' },
                    { imageName: 'gallery-6.webp', description: 'ממשק משתמש של אפליקציית SunCam פרו' },
                ],
            },
            {
                id: 'sunCamUltra',
                href: '/products/sun-cam-ultra',
                name: 'SunCam אולטרה',
                title: 'SunCam <strong>אולטרה</strong>',
                price: 1699,
                customerReviewsLabel: 'ביקורות לקוחות',
                text: 'המצלמה המתקדמת ביותר שלנו עם רזולוציית 4K, זום אופטי, ומערכת AI מתקדמת לזיהוי ומעקב.',
                productInfo: {
                    title: 'פרטי המוצר',
                    list: [
                        { title: 'רזולוציה', description: '4K Ultra HD' },
                        { title: 'זמן עבודה', description: 'עד 30 ימים ללא שמש' },
                        { title: 'זווית צפייה', description: '180° עם זום אופטי x4' },
                        { title: 'אחסון', description: 'כרטיס SD עד 512GB + אחסון בענן ללא הגבלה' },
                    ]
                },
                description: {
                    title: 'תיאור',
                    text: 'SunCam אולטרה היא פסגת הטכנולוגיה בתחום מצלמות האבטחה הסולאריות. עם רזולוציית 4K, זום אופטי x4 ומערכת AI מתקדמת, היא מספקת את רמת האבטחה הגבוהה ביותר. הסוללה רבת העוצמה והפאנל הסולארי המתקדם מבטיחים פעולה ממושכת גם בתנאי מזג אוויר קשים.'
                },
                additionalInfo: {
                    title: 'מידע נוסף',
                    text: '<strong>SunCam אולטרה כולל</strong>:<br>1 x מצלמת אבטחה סולארית SunCam אולטרה<br>1 x פאנל סולארי מתקדם<br>1 x סוללה נטענת בקיבולת גבוהה במיוחד<br>1 x ערכת התקנה מקצועית<br>1 x מדריך למשתמש מורחב<br>שנה של אחסון בענן ללא הגבלה'
                },
                reviews: {
                    title: 'ביקורות',
                    list: [
                        { name: 'גיל שרון', date: '15 יולי 2024', rating: 5, text: 'המצלמה הזו היא פשוט מדהימה. איכות התמונה ב-4K מרשימה ומערכת ה-AI עובדת בצורה מושלמת.', avatarImageName: 'review-9-avatar.webp' },
                        { name: 'דנה לביא', date: '2 יולי 2024', rating: 5, text: 'שווה כל שקל. הזום האופטי והכיסוי הרחב מאפשרים לי לאבטח שטח גדול עם מצלמה אחת.', avatarImageName: 'review-10-avatar.webp' },
                        { name: 'אלון ברק', date: '20 יוני 2024', rating: 4, text: 'מוצר מעולה עם תכונות מתקדמות. ההתקנה קצת מורכבת, אבל התמיכה הטכנית עזרה מאוד.', avatarImageName: 'review-11-avatar.webp' },
                        { name: 'נועה גולן', date: '5 יוני 2024', rating: 5, text: 'המצלמה הטובה ביותר שהשתמשתי בה. איכות התמונה מדהימה וחיי הסוללה ארוכים במיוחד.', avatarImageName: 'review-12-avatar.webp' },
                    ],
                },
                images: [
                    { imageName: 'gallery-7.webp', description: 'SunCam אולטרה מותקנת על עמוד גבוה' },
                    { imageName: 'gallery-8.webp', description: 'השוואת איכות תמונה בין כל דגמי SunCam' },
                    { imageName: 'gallery-9.webp', description: 'ממשק ניהול מתקדם של SunCam אולטרה' },
                ],
            },
        ],
        addToCartLabel: 'הוסף לעגלה',
    },
    faq: {
        title: 'שאלות נפוצות',
        description: 'SunCam מספקת מענה לכל השאלות הנפוצות של לקוחותינו לגבי מצלמות האבטחה הסולאריות שלנו ותהליך הרכישה.',
        imageName: 'faq.webp',
        list: [
            {
                question: 'מהי SunCam?',
                answer: 'SunCam היא מצלמת אבטחה סולארית מתקדמת המיועדת לשימוש ביתי ועסקי. היא פועלת על אנרגיית השמש, קלה להתקנה ומספקת אבטחה 24/7.',
            },
            {
                question: 'כמה זמן הסוללה של SunCam מחזיקה?',
                answer: 'זמן עבודת הסוללה תלוי בדגם ובתנאי מזג האוויר. הדגם הבסיסי מחזיק עד 7 ימים ללא שמש, הפרו עד 14 ימים, והאולטרה עד 30 ימים.',
            },
            {
                question: 'האם SunCam קלה להתקנה?',
                answer: 'כן, SunCam תוכננה להיות קלה להתקנה. היא מגיעה עם ערכת התקנה מלאה ומדריך מפורט. רוב המשתמשים יכולים להתקין אותה בעצמם תוך זמן קצר.',
            },
            {
                question: 'מה איכות הווידאו של SunCam?',
                answer: 'איכות הווידאו תלויה בדגם. הדגם הבסיסי מציע 1080p Full HD, הפרו מציע 2K Ultra HD, והאולטרה מציע איכות 4K מדהימה.',
            },
            {
                question: 'האם SunCam עמידה בתנאי מזג אוויר קשים?',
                answer: 'כן, כל דגמי SunCam מיוצרים מחומרים עמידים ומתוכננים לעמוד בתנאי מזג אוויר קשים, כולל גשם, שלג וחום קיצוני.',
            },
        ],
    },
    facts: {
        title: 'אנחנו כבר <span className="color-primary">5 שנים בתחום</span>',
        description: 'SunCam מתמחה בייצור מצלמות אבטחה סולאריות איכותיות, קלות להתקנה ויעילות במיוחד עבור בתים ועסקים. עם ניסיון של 5 שנים, אנו מחויבים לספק פתרונות אבטחה מתקדמים ללקוחותינו.',
        items: [
            {
                icon: 'local_shipping',
                value: 50000,
                unit: 'יח׳',
                text: 'מצלמות נמכרו',
            },
            {
                icon: 'public',
                value: 30,
                unit: '',
                text: 'מדינות נשלחו',
            },
            {
                icon: 'sentiment_satisfied',
                value: 25000,
                unit: '',
                text: 'לקוחות מרוצים',
            },
            {
                icon: 'workspace_premium',
                value: 5,
                unit: 'שנה',
                text: 'ניסיון בתחום',
            },
        ],
    },
    testimonials: {
        title: 'ביקורות',
        description: 'לקוחות מכל רחבי הארץ נהנים מהאיכות, הביצועים והאמינות של מצלמות האבטחה הסולאריות של SunCam.',
        list: [
            { name: 'יובל כהן', text: 'התקנתי את SunCam בעסק שלי והתוצאות מדהימות. איכות התמונה מעולה והחיסכון בחשמל מורגש. ממליץ בחום!', avatarImageName: 'testimonial-1-avatar.jpg' },
            { name: 'רותי לוי', text: 'שירות הלקוחות של SunCam פשוט יוצא מן הכלל. הם עזרו לי לבחור את הדגם המתאים ותמכו בי לאורך כל תהליך ההתקנה.', avatarImageName: 'testimonial-2-avatar.jpg' },
            { name: 'אמיר גולן', text: 'ה-SunCam אולטרה היא מצלמת האבטחה הטובה ביותר שהשתמשתי בה. הטכנולוגיה מתקדמת, קלה לשימוש ומספקת שקט נפשי אמיתי.', avatarImageName: 'testimonial-3-avatar.jpg' },
            { name: 'מיכל ברק', text: 'אני מתרשמת מהיעילות האנרגטית של SunCam. זה נפלא לדעת שאני יכולה לאבטח את ביתי באופן ידידותי לסביבה. מוצר מצוין!', avatarImageName: 'testimonial-4-avatar.jpg' },
        ],
    },
    cart: {
        title: 'סיכום הזמנה',
        shippingPrice: 50,
        labels: {
            totalItems: 'סה"כ פריטים',
            shippingCharges: 'דמי משלוח',
            estimatedTotal: 'סה"כ משוער',
        },
    },
    checkout: {
        title: 'תשלום',
        labels: {
            email: 'אימייל',
            name: 'שם מלא',
            phone: 'מספר טלפון',
            submit: 'המשך',
            outOfStock: 'נראה שאזל המלאי! אך אל דאגה, ניצור עמך קשר ברגע שהמוצר יחזור למלאי.',
            error: 'אוי, משהו השתבש. אנא נסה שוב מאוחר יותר.',
            nameError: 'שם לא תקין',
            phoneError: 'מספר טלפון לא תקין',
            emailError: 'אימייל לא תקין',
        },
        emptyCart: {
            title: 'העגלה שלך ריקה',
            description: 'נראה שעדיין לא הוספת מוצרים לעגלה.',
            cta: {
                text: 'בדוק את קטלוג המוצרים שלנו',
                href: '/products',
            }
        },
        notificationEmailList: [
            "sahar014g@gmail.com",
            "shalevsamina4@gmail.com",
            "yulev5@gmail.com",
            "syetemplate@gmail.com"
        ]
    },
    whatsApp: {
        phoneNumber: '972553197109',
        text: 'היי! אני מעוניין לקבל פרטים בנוגע למצלמות האבטחה הסולאריות של SunCam',
    },
};