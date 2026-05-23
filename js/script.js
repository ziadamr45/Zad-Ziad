// البيانات والمتغيرات العامة
        const namesEn = ["Ar-Rahman", "Ar-Raheem", "Al-Malik", "Al-Quddus", "As-Salam", "Al-Mu'min", "Al-Muhaymin", "Al-Aziz", "Al-Jabbar", "Al-Mutakabbir", "Al-Khaliq", "Al-Bari'", "Al-Musawwir", "Al-Ghaffar", "Al-Qahhar", "Al-Wahhab", "Ar-Razzaq", "Al-Fattah", "Al-'Aleem", "Al-Qabid", "Al-Basit", "Al-Khafid", "Ar-Rafi'", "Al-Mu'izz", "Al-Mudhill", "As-Sami'", "Al-Basir", "Al-Hakam", "Al-'Adl", "Al-Lateef", "Al-Khabeer", "Al-Haleem", "Al-'Azeem", "Al-Ghafoor", "Ash-Shakoor", "Al-'Ali", "Al-Kabeer", "Al-Hafeez", "Al-Muqeet", "Al-Haseeb", "Al-Jaleel", "Al-Kareem", "Ar-Raqeeb", "Al-Mujeeb", "Al-Wasi'", "Al-Hakeem", "Al-Wadud", "Al-Majeed", "Al-Ba'ith", "Ash-Shaheed", "Al-Haqq", "Al-Wakeel", "Al-Qawiyy", "Al-Mateen", "Al-Waliyy", "Al-Hameed", "Al-Muhsi", "Al-Mubdi'", "Al-Mu'id", "Al-Muhyi", "Al-Mumeet", "Al-Hayy", "Al-Qayyum", "Al-Wahid", "Al-Ahad", "As-Samad", "Al-Qadir", "Al-Muqtadir", "Al-Muqaddim", "Al-Mu'akhkhir", "Al-Awwal", "Al-Akhir", "Az-Zahir", "Al-Batin", "Al-Wali", "Al-Muta'ali", "Al-Barr", "At-Tawwab", "Al-Muntaqim", "Al-'Afuww", "Ar-Ra'uf", "Malik-ul-Mulk", "Dhul-Jalali wal-Ikram", "Al-Muqsit", "Al-Jami'", "Al-Ghaniyy", "Al-Mughni", "Al-Mani'", "Ad-Darr", "An-Nafi'", "An-Nur", "Al-Hadi", "Al-Badi'", "Al-Baqi", "Al-Warith", "Ar-Rashid", "As-Sabur"];

        const tasbihEn = [
            "Subhan Allah",
            "Alhamdulillah",
            "La ilaha illallah",
            "Allahu Akbar",
            "La hawla wa la quwwata illa billah",
            "Subhan Allah wa bihamdihi",
            "Subhan Allah al-Azeem",
            "Subhan Allah al-Azeem wa bihamdihi",
            "La ilaha illallah wahdahu la sharika lah, lahul mulku wa lahul hamdu wa huwa 'ala kulli shay'in qadeer",
            "Allahumma salli wa sallim wa barik 'ala sayyidina Muhammad",
            "Alhamdu lillahi rabbil 'alameen",
            "Alhamdu lillahi hamdan katheeran tayyiban mubarakan feeh",
            "Allahumma ighfir li",
            "Allahumme irhamni",
            "Allahumme urzuqni",
            "Astaghfirullah al-Azeem",
            "Allahu Akbar kabeera, walhamdu lillahi katheera, wa subhanallahi bukratan wa aseela",
            "Allahumme salli 'ala Muhammadin wa 'ala ali Muhammadin kama sallayta 'ala Ibraheema wa 'ala ali Ibraheema innaka Hameedun Majeed, Allahumme barik 'ala Muhammadin wa 'ala ali Muhammadin kama barakta 'ala Ibraheema wa 'ala ali Ibraheema innaka Hameedun Majeed"
        ];

        const sleepZekrEn = {
            text: "He cupped his hands together, then blew into them and recited: 'Say: He is Allah, the One. Allah, the Eternal, the Absolute. He begets not, nor was He begotten. And there is none comparable to Him.' and 'Say: I seek refuge with the Lord of the daybreak, from the evil of what He has created, and from the evil of the darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies.' and 'Say: I seek refuge with the Lord of mankind, the King of mankind, the God of mankind, from the evil of the whisperer who withdraws, who whispers in the breasts of mankind, of jinn and mankind.' - Allah Almighty has spoken the truth - and he wiped as much of his body as he could, starting with his head, face, and the front part of his body. Recited three times.",
            subtext: "Three times"
        };

        const advicesAr = [
            "استعن بالله ولا تعجز.",
            "مَنْ لزم الاستغفار جعل الله له من كل ضيق مخرجاً.",
            "الصلاة على النبي سبب لكفاية الهم.",
            "اجعل لسانك رطباً بذكر الله.",
            "لا حول ولا قوة إلا بالله، كنز الجنة.",
            "سبحان الله وبحمده، غراس الجنة.",
            "أحب الكلام إلى الله: سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر.",
            "من ترك الدنيا أحبّه الله، ومن ترك الذنوب أحبته الملائكة، ومن حسم الطمع عن المسلمين أحبّه المسلمون.",
            "خير العباد من عصم واعتصم بالله، ونظر إلى قبر؛ فبكى وقال عنه: أول منازل الآخرة منزله الدنيا.",
            "ترك الخطيئة خير من معالجة التوبة، وربّ نظرة زرعت شهوة، وشهوة ساعة أورثت حزناً طويلاً.",
            "اثنان لا تنسهما: ذكر الله والموت، واثنان لا تذكرهما: إحسانك للنّاس وإساءتهم إليك.",
            "من عرف الله هانت مصيبته، ومن أنس به زالت غربته، ومن رضي بالقضاء سعد.",
            "من ترك الدنيا أحبّه الله تعالى، ومن ترك الذنوب؛ أحبّه الملائكة، وأحبّه المسلمون.",
            "أكرم ضيفك وإن كان حقيراً، وقُم على مجلسك لأبيك ومعلمك وإن كنت أميراً.",
            "رحم الله امرءاً أحيا حقّاً، وأمات باطلاً، ودحض الجور، وأقام العدل.",
            "لا يحقرنَّ أحد أحداً من المسلمين؛ فإنّ صغير المسلمين عند الله كبير.",
            "وَالناسُ يَجمَعُهُم شَملٌ وَبَينَهُم في العَقلِ فَرقٌ، وَفي الآدابِ، وَالحَسَبِ.",
            "الاستغفار يفتح الأقفال، ويشرح البال، ويكثر المال، ويصلح الحال.",
            "من أراد أن يخشع قلبه، ويَغزُرَ دَمعُهُ؛ فليأكل في نصف بطنه.",
            "حاسبوا أنفسكم قبل أن تحاسبوا، وزنوا أنفسكم قبل أن توزنوا.",
            "عَلَيْكَ بِبِرِّ الوَالِدَيْنِ كِلَيْهِمَا، وَبِرِّ ذَوِي القُرْبَى، وَبَرِّ الأَبَاعِدِ.",
            "إنّ الله جعل مكارم الأخلاق ومحاسنها وصلاً بيننا وبينه.",
            "ما من سوء أكبر من الذنب إلا تبلّد الإحساس بعد الذنب.",
            "شرّ الإيمان ما دخله الشّك، وشرّ أخلاق النّفس الجور.",
            "عليك بمقارنة ذي العقل والدّين؛ فإنّه خير الأصحاب.",
            "الثقة بالله؛ أزكى أمل، والتوكل عليه؛ أوفى عمل.",
            "أسهل الطرق لإرضاء ربّك؛ هي إرضاء والديك.",
            "هَانُوا عَلَيْهِ فَعَصَوْهُ وَلَوْ عَزُّوا عَلَيْهِ لَعَصَمَهُمْ.",
            "اشترِ نفسك؛ فالسوق قائمة، والثمن موجود.",
            "الموت أهون مما بعده، وأشدّ مما قبله.",
            "من ساء خلقه عَذَّبَ نفسه.",
            "لا تكرهوا البنات فإنهن المؤنسات.",
            "لا خير فيمن لا يألف ولا يؤلف.",
            "ما ملأ ادمي وعاء شراً من بطنه.",
            "الناس عبيد لما عرفوا وأعداء لما جهلوا.",
            "طلبنا العلم لغير الله فأبى أن يكون إلّا لله.",
            "اتقوا هذا الشرك الخفي فغنه يدب دبيب النمل.",
            "المطلب أنفس وأعز من أن يدرك بالمنى أو ينال بالهوينا.",
            "الناس كلهم سواء كأسنان المشط، وإنّما يتفاضلون بالتقوى.",
            "أشد الناس حماقة أقواهم اعتقاداً في فضل نفسه، وأثبت الناس عقلاً أشدهم اتهاماً لنفسه.",
            "الدليل على أن مذهب السلف هو الحق: أن نقيضه بدعة، والبدعة مذمومة وضلالة.",
            "فويل للجاهل حيث لم يتعلم مرة واحدة، وويل للعالم حيث لم يعمل بما عمل ألف مرة.",
            "قال رسول الله صلي الله عليه وسلم.. من عمل بما علم ورثه الله علم ما لم يعلم.",
            "كرامات الأولياء هي بدايات الأنبياء.",
            "كلما عز المطلوب وشرف، صعب مسلكه وطل طريقه وكثرت عقابته.",
            "لو سكت من لا يدري، لقلّ الخلاف بين الخلق.",
            "ليس في الإمكان أبدع مما كان.",
            "إن جميع المعجزات طبيعية، وإن الطبيعة كلها معجزة.",
            "غير طريقة تحليلك للحدث ستتغير مشاعرك وانفعالاتك عن نفس الحدث.",
            "لا تسأل الله أن يخفف حملك، ولكن اسأله أن يقوي ظهرك.",
            "ليس غباء من الفتاة إذا صدقت كذبتك.. فالغباء فعلاً: شعورك ب(الرجولة) وأنت تكذب عليها.",
            "إذا أردت أن ترحم الناس، فابدأ برحمة كل شيء غير الإنسان أولا.",
            "اللحظة قد تغير يومك اليوم قد يغير حياتك حياتك قد تغير العالم.",
            "عليك في حياتك بشكل عام أن تختار المعارك التي تخوضها والمعارك التي تهملها.",
            "الصديق كالمصعد اما يأخذك إلى الأعلى.. أو يسحبك إلى الأسفل.. فأحذر أي مصعد تأخذ.",
            "ما أحلى اسم الله التواب.. يعطي المذنب أملاً ليبدأ من جديد ويخرجه من دائرة الإحباط.",
            "اللهم اجعل القرآن العظيم ربيع قلبي ونور صدري وجلاء حزني.",
            "من صلى عليّ صلاة واحدة صلى الله عليه عشراً.",
            "الدنيا سجن المؤمن وجنة الكافر.",
            "إنما الأعمال بالنيات وإنما لكل امرئ ما نوى.",
            "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.",
            "المسلم من سلم المسلمون من لسانه ويده.",
            "من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت.",
            "تبسمك في وجه أخيك صدقة.",
            "الطهور شطر الإيمان والحمد لله تملأ الميزان.",
            "صلِّ على النبيّ فإن الصلاة عليه تُنجي من الهم والكرب.",
            "من استغفر الله دبر كل صلاة ثلاثاً غفرت ذنوبه ولو كانت مثل زبد البحر.",
            "خيركم من تعلم القرآن وعلمه.",
            "إن الله يحب إذا عمل أحدكم عملاً أن يتقنه.",
            "من سلك طريقاً يلتمس فيه علماً سهّل الله له طريقاً إلى الجنة.",
            "لا تزالوا في عبادة ما انتظرتم الصلاة.",
            "ألا أدلكم على ما يمحو الله به الخطايا ويرفع به الدرجات؟ إسباغ الوضوء على المكاره، وكثرة الخطا إلى المساجد، وانتظار الصلاة بعد الصلاة.",
            "من قال سبحان الله وبحمده مئة مرة حطت خطاياه وإن كانت مثل زبد البحر.",
            "أقرب ما يكون العبد من ربه وهو ساجد فأكثروا الدعاء.",
            "المؤمن يألف ويؤلف ولا خير فيمن لا يألف ولا يؤلف.",
            "حفت الجنة بالمكاره وحفت النار بالشهوات.",
            "اتق الله حيثما كنت وأتبع السيئة الحسنة تمحها وخالق الناس بخلق حسن.",
            "من تواضع لله رفعه الله.",
            "إنما بعثت لأتمم صالح الأخلاق.",
            "خير الذكر لا إله إلا الله وخير الدعاء الاستغفار.",
            "الدعاء هو العبادة.",
            "لا تحقرون من المعروف شيئاً ولو أن تلقى أخاك بوجه طلق.",
            "من سرّه أن يبسط له في رزقه وينسأ له في أجره فليصل رحمه.",
            "رحم الله امرءاً صلى قبل العصر أربعاً.",
            "إن في الجنة لغرفة يرى ظاهرها من باطنها وباطنها من ظاهرها أعدها الله لمن أطعم الطعام وألان الكلام وتابع الصيام وصلى بالليل والناس نيام.",
            "من قرأ حرفاً من كتاب الله فله به حسنة والحسنة بعشر أمثالها.",
            "المرء مع من أحب.",
            "من صام رمضان إيماناً واحتساباً غفر له ما تقدم من ذنبه.",
            "من قام رمضان إيماناً واحتساباً غفر له ما تقدم من ذنبه.",
            "من قام ليلة القدر إيماناً واحتساباً غفر له ما تقدم من ذنبه.",
            "إن لله تسعة وتسعين اسماً مئة إلا واحداً من أحصاها دخل الجنة.",
            "الجنة أقرب إلى أحدكم من شركه والنار أقرب إليه من نعله.",
            "يا مقلب القلوب ثبت قلبي على دينك.",
            "من حسن إسلام المرء تركه ما لا يعنيه.",
            "إن من أعظم الذنوب أن يسب الرجل والديه. قيل وكيف يسبهما؟ قال: يسب أبا الرجل فيسب أباه ويسب أمه فيسب أمه.",
            "من نفّس عن مؤمن كربة من كرب الدنيا نفّس الله عنه كربة من كرب يوم القيامة."
        ];

        const advicesEn = [
            "Seek help from Allah and do not weaken.",
            "Whoever persists in seeking forgiveness, Allah will make a way out for him from every distress.",
            "Sending blessings upon the Prophet is a reason for your worries to be sufficient.",
            "Keep your tongue moist with the remembrance of Allah.",
            "There is no power nor strength except with Allah, a treasure from Paradise.",
            "Glory be to Allah and praise be to Him, the plantation of Paradise.",
            "The most beloved words to Allah are: Glory be to Allah, Praise be to Allah, There is no god but Allah, and Allah is the Greatest.",
            "Whoever abandons the world, Allah loves him; whoever abandons sins, the angels love him; and whoever removes greed from Muslims, the Muslims love him.",
            "The best of servants are those who are protected and seek protection with Allah, look at the grave and weep, saying: It is the first station of the Hereafter.",
            "Abandoning sin is better than dealing with repentance, and a glance may plant desire, and an hour's desire may cause long grief.",
            "Two things do not forget: remembrance of Allah and death; two things do not mention: your favor to people and their harm to you.",
            "Whoever knows Allah, his affliction becomes easy; whoever is intimate with Him, his alienation disappears; whoever is pleased with destiny, he is happy.",
            "Whoever abandons the world, Allah loves him; whoever abandons sins, the angels love him, and the Muslims love him.",
            "Honor your guest even if he is humble, and stand up from your seat for your father and teacher even if you are a prince.",
            "May Allah have mercy on a person who revives truth, extinguishes falsehood, eliminates injustice, and establishes justice.",
            "Let none of you belittle any Muslim, for the small Muslim is great in the sight of Allah.",
            "People are united in community but differ in intellect, manners, and lineage.",
            "Seeking forgiveness opens locks, expands the mind, increases wealth, and improves condition.",
            "Whoever wants his heart to be humble and his tears to flow, let him eat only half of his stomach.",
            "Take account of yourselves before you are taken to account, and weigh your deeds before they are weighed.",
            "Be dutiful to both parents, to relatives, and to distant ones.",
            "Allah has made noble manners and good deeds a connection between us and Him.",
            "There is no evil greater than sin except the dullness of feeling after sin.",
            "The worst faith is that which is entered by doubt, and the worst of soul's character is injustice.",
            "Keep company with the intelligent and religious, for he is the best companion.",
            "Trust in Allah is the purest hope, and reliance upon Him is the most faithful deed.",
            "The easiest way to please your Lord is to please your parents.",
            "They became insignificant to Him so they disobeyed Him; if they were dear to Him, He would have protected them.",
            "Buy yourself, for the market is open and the price is available.",
            "Death is easier than what comes after it, and more severe than what comes before it.",
            "Whoever has bad character tortures himself.",
            "Do not hate daughters, for they are the compassionate ones.",
            "There is no good in one who does not befriend nor is befriended.",
            "No human has filled a vessel worse than his stomach.",
            "People are slaves to what they know and enemies to what they are ignorant of.",
            "We sought knowledge for other than Allah, but it refused to be except for Allah.",
            "Fear this hidden polytheism, for it creeps like the crawling of ants.",
            "The sought goal is too noble and precious to be attained by wishes or achieved by ease.",
            "All people are equal like the teeth of a comb, and they only excel through piety.",
            "The most foolish people are those most convinced of their own merit, and the most intelligent are those most accusatory of themselves.",
            "The evidence that the way of the predecessors is the truth: its opposite is innovation, and innovation is blameworthy and misguided.",
            "Woe to the ignorant who did not learn once, and woe to the scholar who did not act upon what he knew a thousand times.",
            "The Messenger of Allah, peace be upon him, said: Whoever acts upon what he knows, Allah will bequeath him knowledge of what he does not know.",
            "The miracles of the saints are the beginnings of the prophets.",
            "The more noble and honored the objective, the more difficult its path, the longer its way, and the more numerous its obstacles.",
            "If he who does not know remained silent, disagreement among people would decrease.",
            "Nothing more excellent than what has been could have been possible.",
            "All miracles are natural, and all nature is a miracle.",
            "Change your analysis of an event, and your feelings and emotions about the same event will change.",
            "Do not ask Allah to lighten your burden, but ask Him to strengthen your back.",
            "It is not stupidity for a girl to believe your lie; real stupidity is your feeling of manhood while lying to her.",
            "If you want to have mercy on people, start first with mercy on everything other than humans.",
            "A moment can change your day, a day can change your life, a life can change the world.",
            "In your life in general, you must choose which battles to fight and which battles to ignore.",
            "A friend is like an elevator: either he takes you up or pulls you down, so be careful which elevator you take.",
            "How beautiful is the name of Allah, At-Tawwab; it gives the sinner hope to start anew and brings him out of the circle of frustration.",
            "O Allah, make the Holy Quran the spring of my heart and the light of my chest and the remover of my sorrow.",
            "Whoever sends blessings upon me once, Allah sends blessings upon him ten times.",
            "This world is the prison of the believer and the paradise of the disbeliever.",
            "Actions are judged by intentions, and everyone will be rewarded according to what they intended.",
            "None of you truly believes until he loves for his brother what he loves for himself.",
            "A Muslim is one from whose tongue and hand other Muslims are safe.",
            "Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
            "Your smiling in the face of your brother is charity.",
            "Purification is half of faith, and Alhamdulillah fills the scale.",
            "Send blessings upon the Prophet, for it saves from worry and distress.",
            "Whoever seeks forgiveness from Allah after every prayer three times, his sins will be forgiven even if they are like the foam of the sea.",
            "The best of you are those who learn the Quran and teach it.",
            "Allah loves when one of you does a job to perfect it.",
            "Whoever treads a path in search of knowledge, Allah will make easy for him a path to Paradise.",
            "You are constantly in prayer as long as you are waiting for the prayer.",
            "Shall I not tell you about that by which Allah erases sins and raises ranks? Performing ablution thoroughly despite difficulties, walking many steps to the mosques, and waiting for the prayer after the prayer.",
            "Whoever says Subhan Allah wa bihamdihi one hundred times, his sins will be forgiven even if they are like the foam of the sea.",
            "The closest a servant is to his Lord is when he is prostrating, so increase your supplications.",
            "The believer is friendly and befriended, and there is no good in one who is not friendly nor befriended.",
            "Paradise is surrounded by hardships and Hell is surrounded by desires.",
            "Fear Allah wherever you are, and follow a bad deed with a good one to erase it, and treat people with good character.",
            "Whoever humbles himself for the sake of Allah, Allah will raise him.",
            "I was sent to perfect good character.",
            "The best remembrance is La ilaha illallah, and the best supplication is Al-istighfar.",
            "Supplication is worship.",
            "Do not belittle any good deed, even meeting your brother with a cheerful face.",
            "Whoever wishes to have his provision expanded and his life extended, let him maintain ties of kinship.",
            "May Allah have mercy on a person who prays four units before Asr.",
            "In Paradise there is a room whose inside can be seen from the outside and whose outside can be seen from the inside, prepared by Allah for one who feeds the poor, speaks kindly, fasts regularly, and prays at night while people are asleep.",
            "Whoever reads a letter from the Book of Allah will have a good deed, and a good deed is multiplied ten times.",
            "A person will be with those whom he loves.",
            "Whoever fasts Ramadan out of faith and seeking reward, his past sins will be forgiven.",
            "Whoever stands in prayer during Ramadan out of faith and seeking reward, his past sins will be forgiven.",
            "Whoever stands in prayer on Laylat al-Qadr out of faith and seeking reward, his past sins will be forgiven.",
            "Allah has ninety-nine names, one hundred minus one. Whoever enumerates them will enter Paradise.",
            "Paradise is closer to one of you than his shoelace, and the Fire is closer too.",
            "O Turner of hearts, keep my heart firm upon Your religion.",
            "Part of the perfection of one's Islam is leaving what does not concern him.",
            "One of the greatest sins is for a person to curse his parents. It was asked: How does he curse them? He said: He curses someone's father, so that person curses his father, and he curses someone's mother, so that person curses his mother.",
            "Whoever relieves a believer of a hardship in this world, Allah will relieve him of a hardship on the Day of Resurrection."
        ];
                const names = ["الرحمن", "الرحيم", "الملك", "القدوس", "السلام", "المؤمن", "المهيمن", "العزيز", "الجبار", "المتكبر", "الخالق", "البارئ", "المصور", "الغفار", "القهار", "الوهاب", "الرزاق", "الفتاح", "العليم", "القابض", "الباسط", "الخافض", "الرافع", "المعز", "المذل", "السميع", "البصير", "الحكم", "العدل", "اللطيف", "الخبير", "الحليم", "العظيم", "الغفور", "الشكور", "العلي", "الكبير", "الحفيظ", "المقيت", "الحسيب", "الجليل", "الكريم", "الرقيب", "المجيب", "الواسع", "الحكيم", "الودود", "المجيد", "الباعث", "الشهيد", "الحق", "الوكيل", "القوي", "المتين", "الولي", "الحميد", "المحصي", "المبدئ", "المعيد", "المحيي", "المميت", "الحي", "القيوم", "الواحد", "الأحد", "الصمد", "القادر", "المقتدر", "المقدم", "المؤخر", "الأول", "الآخر", "الظاهر", "الباطن", "الوالي", "المتعالي", "البر", "التواب", "المنتقم", "العفو", "الرؤوف", "مالك الملك", "ذو الجلال والإكرام", "المقسط", "الجامع", "الغني", "المغني", "المانع", "الضار", "النافع", "النور", "الهادي", "البديع", "الباقي", "الوارث", "الرشيد", "الصبور"];
                // ===== تهيئة Firebase =====
const firebaseConfig = {
    apiKey: "AIzaSyACbwuBYbWHyXTcOrWO2WIJmKbMT6Tpwa0",
    authDomain: "zad-ziad.firebaseapp.com",
    projectId: "zad-ziad",
    storageBucket: "zad-ziad.firebasestorage.app",
    messagingSenderId: "570756674939",
    appId: "1:570756674939:web:ab56812c16403473f2b9de",
    measurementId: "G-E53K34RVLT"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// متغيرات حالة المستخدم
let currentUser = null;
let authModal = document.getElementById('authModal');
let phoneVerificationDiv = document.getElementById('phoneVerification');
let userInfoDiv = document.getElementById('userInfo');
let confirmationResult;

// الاستماع لتغيير حالة المصادقة
auth.onAuthStateChanged(async (user) => {
    if (user) {
        currentUser = user;
        document.getElementById('userName').innerText = user.displayName || user.phoneNumber || user.email || 'مستخدم';
        userInfoDiv.style.display = 'block';
        phoneVerificationDiv.style.display = 'none';
        document.getElementById('authTitle').innerText = 'مرحباً بك';
        await loadUserData(user.uid);
    } else {
        currentUser = null;
        userInfoDiv.style.display = 'none';
        document.getElementById('authTitle').innerText = 'تسجيل الدخول';
    }
});
        
        // ربط عداد السبحة بالـ localStorage
        let s = parseInt(localStorage.getItem('zadZiad_sCount')) || 0;
        let g = parseInt(localStorage.getItem('ziad_final_v1000')) || 0;
        const clickS = document.getElementById('clickSound');
        const beepS = document.getElementById('beepSound');
        const achievementS = document.getElementById('achievementSound');
        const allCompleteS = document.getElementById('allCompleteSound');
        
        let currentLang = localStorage.getItem('zadZiad_lang') || 'ar';
        let currentCategory = null;
        let azkarState = JSON.parse(localStorage.getItem('azkarState')) || {};
        let isMuted = localStorage.getItem('zadZiad_muted') === 'true' || false;
        
        // متغيرات الإشعارات والنوافذ المنبثقة
        let notificationInterval = null;
        let notificationCheckInterval = null;

        const translations = {
            ar: {
                title: "زاد زياد",
                advice: "نصيحة اليوم: ",
                homeTitle: "زاد زياد.....الخير ساد🤍",
                homeDesc: "(مواقيت الصلاة، الأذكار، التسبيح، القرآن الكريم)",
                namesTitle: "أسماء الله الحسنى ٩٩ اسمًا من أحصاها دخل الجنة",
                tasbihBtn: "سبّح",
                hasanat: "الحسنات: ",
                settings: "الإعدادات",
                langLabel: "اللغة",
                appThemeLabel: "سمات التطبيق",
                youtubeText: "اشترك في قناتنا على اليوتيوب",
                developerName: "زياد عمرو",
                developerDesc: "مطوِّر تطبيق \"زاد زياد\"",
                appGoal: "<b>هدف التطبيق:</b> صدقة جارية تهدف إلى نشر ذكر الله وتسهيل قراءة القرآن الكريم والأذكار في أي وقت ومكان بأسلوب بسيط وجذاب. نسأل الله أن يتقبل منا ومنكم صالح الأعمال.",
                contactTitle: "تواصل معنا - Contact Us",
                backToGroups: "العودة للمجموعات",
                nav: { quran: "قرآن", azkar: "أذكار", prayer: "صلاة", home: "الرئيسية", tasbih: "تسبيح", radio: "راديو", about: "عنا" },
                themes: {
                    light: "الافتراضي",
                    blue: "أزرق",
                    green: "أخضر",
                    purple: "بنفسجي",
                    pink: "وردي",
                    orange: "برتقالي",
                    graydark: "رمادي داكن"
                },
                radioTitle: "إذاعة القرآن الكريم",
                radioDesc: "اضغط أدناه للتشغيل (لمنع التشغيل التلقائي)",
                radioBtn: "تشغيل الآن",
                muteText: "كتم صوت التطبيق",
                unmuteText: "إعادة تشغيل الصوت",
                allCompleteTitle: "تهانينا!",
                allCompleteMessage: "مبارك عليك.. دمت في رعاية الله",
                allCompleteBtn: "حسناً",
                groupComplete: "مبارك لك! أتممت أذكار",
                todaySuccess: "اليوم بنجاح",
                done: "تم ✅",
                count: "عد",
                resetGoodDeedsConfirm: "تصفير الحسنات؟",
                resetTasbihConfirm: "تصفير عداد التسبيح؟",
                ramadanCountdown: "باقي على رمضان",
                days: "يوم",
                ramadanArrived: "مبارك عليكم الشهر.. أول يوم رمضان",
                morningReminder: "حان وقت قراءة أذكار الصباح.. ادخل اقرأها الآن",
                eveningReminder: "حان وقت قراءة أذكار المساء.. ادخل اقرأها الآن",
                sleepReminder: "حان وقت قراءة أذكار النوم.. ادخل اقرأها الآن",
                randomZekrTitle: "ذكر عشوائي",
                hijriDate: "التاريخ الهجري"
            },
            en: {
                title: "Zad Ziad",
                advice: "Daily Advice: ",
                homeTitle: "Zad Ziad... Goodness Prevails 🤍",
                homeDesc: "(Prayer Times, Azkar, Tasbih, Holy Quran)",
                namesTitle: "99 Names of Allah - Whoever enumerates them enters Paradise",
                tasbihBtn: "Tasbeeh",
                hasanat: "Good Deeds: ",
                settings: "Settings",
                langLabel: "Language",
                appThemeLabel: "App Themes",
                youtubeText: "Subscribe to our YouTube Channel",
                developerName: "Ziad Amr",
                developerDesc: "Developer of \"Zad Ziad\" app",
                appGoal: "<b>App Goal:</b> An ongoing charity aiming to spread the remembrance of Allah and facilitate reading the Holy Quran and Azkar at any time and place in a simple and attractive way. We ask Allah to accept from us and from you righteous deeds.",
                contactTitle: "Contact Us",
                backToGroups: "Back to Groups",
                nav: { quran: "Quran", azkar: "Azkar", prayer: "Prayer", home: "Home", tasbih: "Tasbih", radio: "Radio", about: "About" },
                themes: {
                    light: "Default",
                    blue: "Blue",
                    green: "Green",
                    purple: "Purple",
                    pink: "Pink",
                    orange: "Orange",
                    graydark: "Dark Gray"
                },
                radioTitle: "Holy Quran Radio",
                radioDesc: "Click below to play (to prevent auto-play)",
                radioBtn: "Play Now",
                muteText: "Mute App Sounds",
                unmuteText: "Unmute App Sounds",
                allCompleteTitle: "Congratulations!",
                allCompleteMessage: "Well done.. May you always be in Allah's protection",
                allCompleteBtn: "OK",
                groupComplete: "Congratulations! You have completed",
                todaySuccess: "today successfully",
                done: "Done ✅",
                count: "Count",
                resetGoodDeedsConfirm: "Reset good deeds?",
                resetTasbihConfirm: "Reset tasbih counter?",
                ramadanCountdown: "Days left until Ramadan",
                days: "day",
                ramadanArrived: "Blessed month.. First day of Ramadan",
                morningReminder: "Time for morning Azkar.. Enter and read them now",
                eveningReminder: "Time for evening Azkar.. Enter and read them now",
                sleepReminder: "Time for sleep Azkar.. Enter and read them now",
                randomZekrTitle: "Random Dhikr",
                hijriDate: "Hijri Date"
            }
        };

        // بيانات الأذكار - عربي
        const azkarCategoriesAr = [
            {
                id: 'morning',
                title: 'أذكار الصباح',
                icon: 'fas fa-sun',
                azkar: [
                    {id: 'morning1', text: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسي – البقرة 255]', count: 1, subtext: 'من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح.'},
                    {id: 'morning2', text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.', count: 3, subtext: 'سورة الإخلاص - ثلاث مرات'},
                    {id: 'morning3', text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّاثَاتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.', count: 3, subtext: 'سورة الفلق - ثلاث مرات'},
                    {id: 'morning4', text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.', count: 3, subtext: 'سورة الناس - ثلاث مرات'},
                    {id: 'morning5', text: 'أَصْبَحْنا وَأَصْبَحَ المُـلْكُ لله وَالحَمدُ لله، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُ بِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'morning6', text: 'اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ، خَلَقْتَنـي وَأَنا عَبْـدُك، وَأَنا عَلـى عَهْـدِكَ وَوَعـْدِكَ ما اسْتَـطَعْـت، أَعـوذُ بِكَ مِنْ شَـرِّ ما صَنَـعْت، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ.', count: 1, subtext: 'من قالها موقنا بها حين يمسى أو ومات في ليلته دخل الجنة.'},
                    {id: 'morning7', text: 'رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.', count: 3, subtext: 'من قالها حين يصبح أو حين يمسى كان حقا على الله أن يرضيه يوم القيامة.'},
                    {id: 'morning8', text: 'اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك، وَمَلائِكَتَكَ، وَجَمـيعَ خَلْـقِك، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.', count: 4, subtext: 'من قالها أعتقه الله من النار.'},
                    {id: 'morning9', text: 'اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.', count: 1, subtext: 'من قالها صباحا أدى شكر يومه.'},
                    {id: 'morning10', text: 'حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.', count: 7, subtext: 'من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة.'},
                    {id: 'morning11', text: 'بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السَّمـاءِ وَهـوَ السَّمـيعُ العَلـيم.', count: 3, subtext: 'لم يضره من الله شيء.'},
                    {id: 'morning12', text: 'اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'morning13', text: 'أَصْبَـحْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'morning14', text: 'سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه، وَرِضـا نَفْسِـه، وَزِنَـةَ عَـرْشِـه، وَمِـدادَ كَلِمـاتِـه.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'morning15', text: 'اللّهُـمَّ عافِـني في بَدَنـي، اللّهُـمَّ عافِـني في سَمْـعي، اللّهُـمَّ عافِـني في بَصَـري، لا إلهَ إلاّ أَنْـتَ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'morning16', text: 'اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر، وَالفَـقْر، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر، لا إلهَ إلاّ أَنْـتَ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'morning17', text: 'اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتي، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي، وَمِن فَوْقـي، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'morning18', text: 'يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'morning19', text: 'أَصْبَـحْـنا وَأَصْبَـحْ المُـلكُ للهِ رَبِّ العـالَمـين، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ، وَنَصْـرَهُ، وَنـورَهُ وَبَـرَكَتَـهُ، وَهُـداهُ، وَأَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَشَـرِّ ما بَعْـدَه.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'morning20', text: 'اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السَّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'morning21', text: 'أَعـوذُ بِكَلِمـاتِ اللّهِ التَّامَّاتِ مِنْ شَـرِّ ما خَلَـق.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'morning22', text: 'اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على سيدنا مُحمَّد.', count: 10, subtext: 'من صلى عليَّ حين يصبح عشرًا، وحين يمسي عشرًا، أدركته شفاعتي يوم القيامة) رواه الطبراني.'},
                    {id: 'morning23', text: 'اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'morning24', text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'morning25', text: 'أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'morning26', text: 'يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'morning27', text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'morning28', text: 'اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ، عَلَيْكَ تَوَكَّلْتُ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ، مَا شَاءَ اللَّهُ كَانَ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'morning29', text: 'سُبْحـانَ اللهِ وَبِحَمْـدِهِ.', count: 100, subtext: 'حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ، لَمْ يَأْتِ أَحَدٌ يَوْمَ الْقِيَامَةِ بِأَفْضَلَ مِمَّا جَاءَ بِهِ إِلاَّ أَحَدٌ قَالَ مِثْلَ مَا قَالَ أَوْ زَادَ عَلَيْهِ.'},
                    {id: 'morning30', text: 'أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ.', count: 100, subtext: 'مئة مرة'},
                    {id: 'morning31', text: 'لا إلَهَ إِلاَّ اللَّهُ، وحْدَهُ لا شَرِيكَ له، له المُلْكُ وله الحَمْدُ، وهو علَى كُلِّ شيءٍ قَدِيرٌ.', count: 100, subtext: 'كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزا من الشيطان يومه ذلك حتى يمسي، ولم يأت أحد بأفضل مما جاء به إلا أحد عمل أكثر من ذلك. (رواه الترمذي)'}
                ]
            },
            {
                id: 'evening',
                title: 'أذكار المساء',
                icon: 'fas fa-moon',
                azkar: [
                    {id: 'evening1', text: 'اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسي – البقرة 255]', count: 1, subtext: 'من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح.'},
                    {id: 'evening2', text: 'آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ. [البقرة 285 – 286]', count: 1, subtext: 'من قرأ آيتين من آخر سورة البقرة في ليلة كفتاه.'},
                    {id: 'evening3', text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.', count: 3, subtext: 'سورة الإخلاص - ثلاث مرات'},
                    {id: 'evening4', text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ النَّفَّاثَاتِ فِى الْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.', count: 3, subtext: 'سورة الفلق - ثلاث مرات'},
                    {id: 'evening5', text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم قُلْ أَعُوذُ بِرَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلَٰهِ النَّاسِ، مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ، الَّذِى يُوَسْوِسُ فِى صُدُورِ النَّاسِ، مِنَ الْجِنَّةِ وَالنَّاسِ.', count: 3, subtext: 'سورة الناس - ثلاث مرات'},
                    {id: 'evening6', text: 'أَمْسَيْنا وَأَمْسَى المـلكُ لله وَالحَمدُ لله، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلَةِ وَشَرِّ ما بَعْـدَهـا، رَبِّ أَعـوذُ بِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر، رَبِّ أَعـوذُ بِكَ مِنْ عَذابٍ في النَّـارِ وَعَـذابٍ في القَـبْر.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'evening7', text: 'اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ، خَلَقْتَنـي وَأَنا عَبْـدُك، وَأَنا عَلـى عَهْـدِكَ وَوَعـْدِكَ ما اسْتَـطَعْـت، أَعـوذُ بِكَ مِنْ شَـرِّ ما صَنَـعْت، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ.', count: 1, subtext: 'من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح.'},
                    {id: 'evening8', text: 'رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.', count: 3, subtext: 'من قالها حين يصبح ثلاث مرات وحين يمسى ثلاث مرات كان حقا على الله أن يرضيه يوم القيامة.'},
                    {id: 'evening9', text: 'اللّهُـمَّ إِنِّـي أَمْسَيْتُ أُشْـهِدُك، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك، وَمَلائِكَتَكَ، وَجَمـيعَ خَلْـقِك، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.', count: 4, subtext: 'من قالها أعتقه الله من النار.'},
                    {id: 'evening10', text: 'اللّهُـمَّ ما أَمْسَى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك، فَمِـنْكَ وَحْـدَكَ لا شَريكَ لَـك، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.', count: 1, subtext: 'من قالها حين يمسى أدى شكر يومه.'},
                    {id: 'evening11', text: 'حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.', count: 7, subtext: 'من قالها كفاه الله ما أهمه من أمر الدنيا والآخرة.'},
                    {id: 'evening12', text: 'بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السَّمـاءِ وَهـوَ السَّمـيعُ العَلـيم.', count: 3, subtext: 'من قالها لم يضره من الله شيء.'},
                    {id: 'evening13', text: 'اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'evening14', text: 'أَمْسَيْنَا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'evening15', text: 'سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه، وَرِضـا نَفْسِـه، وَزِنَـةَ عَـرْشِـه، وَمِـدادَ كَلِمـاتِـه.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'evening16', text: 'اللّهُـمَّ عافِـني في بَدَنـي، اللّهُـمَّ عافِـني في سَمْـعي، اللّهُـمَّ عافِـني في بَصَـري، لا إلهَ إلاّ أَنْـتَ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'evening17', text: 'اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر، وَالفَـقْر، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر، لا إلهَ إلاّ أَنْـتَ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'evening18', text: 'اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي، اللّهُـمَّ اسْتُـرْ عـوْراتـي وَآمِـنْ رَوْعاتـي، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي، وَمِن فَوْقـي، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'evening19', text: 'يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'evening20', text: 'أَمْسَيْنا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمَيْنِ، اللَّهُمَّ إِنَّي أسْأَلُكَ خَيْرَ هَذَه اللَّيْلَةِ فَتْحَهَا وَنَصْرَهَا، وَنُوْرَهَا وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فيهِا وَشَرَّ مَا بَعْدَهَا.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'evening21', text: 'اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السَّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'evening22', text: 'أَعـوذُ بِكَلِمـاتِ اللّهِ التَّامَّاتِ مِنْ شَـرِّ ما خَلَـق.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'evening23', text: 'اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد.', count: 10, subtext: 'من صلى علي حين يصبح وحين يمسى أدركته شفاعتي يوم القيامة'},
                    {id: 'evening24', text: 'اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'evening25', text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'evening26', text: 'أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيْهِ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'evening27', text: 'يا رب، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'evening28', text: 'لَا إلَه إلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.', count: 100, subtext: 'كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزا من الشيطان يومه ذلك حتى يمسي، ولم يأت أحد بأفضل مما جاء به إلا أحد عمل أكثر من ذلك. (رواه الترمذي)'},
                    {id: 'evening29', text: 'اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ، عَلَيْكَ تَوَكَّلْتُ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ، مَا شَاءَ اللَّهُ كَانَ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'evening30', text: 'سُبْحـانَ اللهِ وَبِحَمْـدِهِ.', count: 100, subtext: 'من قالها مئة مرة حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ. لَمْ يَأْتِ أَحَدٌ يَوْمَ الْقِيَامَةِ بِأَفْضَلَ مِمَّا جَاءَ بِهِ إِلاَّ أَحَدٌ قَالَ مِثْلَ مَا قَالَ أَوْ زَادَ عَلَيْهِ.'}
                ]
            },
            {
                id: 'sleep',
                title: 'أذكار النوم',
                icon: 'fas fa-bed',
                azkar: [
                    {id: 'sleep1', text: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسي – البقرة 255]', count: 1, subtext: 'من قالها حين ينام أجير من الشيطان حتى يصبح.'},
                    {id: 'sleep2', text: 'آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ. [البقرة 285 – 286]', count: 1, subtext: 'من قرأ آيتين من آخر سورة البقرة في ليلة كفتاه.'},
                    {id: 'sleep3', text: 'بِاسْمِكَ رَبِّـي وَضَعْـتُ جَنْـبي، وَبِكَ أَرْفَعُـه، فَإِن أَمْسَـكْتَ نَفْسـي فارْحَـمْها، وَإِنْ أَرْسَلْتَـها فاحْفَظْـها بِمـا تَحْفَـظُ بِه عِبـادَكَ الصَّـالِحـين.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'sleep4', text: 'اللّهُـمَّ قِنـي عَذابَـكَ يَـوْمَ تَبْـعَثُ عِبـادَك.', count: 3, subtext: 'ثلاث مرات'},
                    {id: 'sleep5', text: 'اللّهُـمَّ إِنَّـكَ خَلَـقْتَ نَفْسـي وَأَنْـتَ تَوَفَّـاهـا لَكَ ممَـاتـها وَمَحْـياها، إِنْ أَحْيَيْـتَها فاحْفَظْـها، وَإِنْ أَمَتَّـها فَاغْفِـرْ لَـها. اللّهُـمَّ إِنَّـي أَسْـأَلُـكَ العـافِـيَة.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'sleep6', text: 'بِاسْـمِكَ اللّهُـمَّ أَمـوتُ وَأَحْـيا.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'sleep7', text: 'الـحَمْدُ للهِ الَّذِي أَطْـعَمَنا وَسَقـانا، وَكَفـانا، وَآوانا، فَكَـمْ مِمَّـنْ لا كـافِيَ لَـهُ وَلا مُـؤْوي.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'sleep8', text: 'اللّهُـمَّ عالِـمَ الغَـيبِ وَالشّـهادةِ فاطِـرَ السَّماواتِ وَالأرْضِ رَبَّ كُـلِّ شَيْءٍ وَمَلِيكَه، أَشْهَدُ أَنْ لا إِلـهَ إِلاّ أَنْت، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي، وَمِن شَـرِّ الشَّيْـطانِ وَشِـرْكِه، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'sleep9', text: 'اللّهُـمَّ أَسْـلَمْتُ نَفْـسي إِلَـيْكَ، وَفَوَّضْـتُ أَمْـري إِلَـيْكَ، وَوَجَّـهْتُ وَجْـهي إِلَـيْكَ، وَأَلْجَأْتُ ظَهـري إِلَـيْكَ، رَغْبَـةً وَرَهْـبَةً إِلَـيْكَ، لا مَلْجَـأَ وَلا مَنْـجـا مِنْـكَ إِلاّ إِلَـيْكَ، آمَنْـتُ بِكِتـابِكَ الَّـذِي أَنْزَلْـتَ وَبِنَبِـيِّـكَ الَّـذِي أَرْسَلْـت.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'sleep10', text: 'سُبْحَانَ اللَّهِ', count: 33, subtext: 'ثلاثة وثلاثون مرة'},
                    {id: 'sleep11', text: 'الحمد لله', count: 33, subtext: 'ثلاثة وثلاثون مرة'},
                    {id: 'sleep12', text: 'الله أكبر', count: 34, subtext: 'أربعة وثلاثون مرة'},
                    {id: 'sleep13', text: 'يجمع كفيه ثم ينفث فيهما و يقول: (قل هو الله أحد) و (قل أعوذ برب الفلق) و (قل أعوذ برب الناس) -صدق الله العظيم- و يمسح ما استطاع من جسده يبدأ بهما على رأسه ووجهه و ما أقبل من جسده. يقال ثلاث مرات.', count: 3, subtext: 'ثلاث مرات'}
                ]
            },
            {
                id: 'general',
                title: 'أدعية عامة',
                icon: 'fas fa-hands-praying',
                azkar: [
                    {id: 'general1', text: 'اللهم لك أسلمت، وبك آمنت، وعليك توكلت، وإليك خاصمت، وبك حاكمت، فاغفر لي ما قدمت وما أخرت، وأسررت وأعلنت، وما أنت أعلم به مني، لا إله إلا أنت".', count: 1, subtext: 'متفق عليه'},
                    {id: 'general2', text: 'اللهم ربنا لك الحمد، ملء السماوات وملء الأرض، وملء ما شئت من شيء بعد أهل الثناء والمجد، لا مانع لما أعطيت، ولا معطي لما منعت ولا ينفع ذا الجد منك الجد".', count: 1, subtext: 'أخرجه مسلم'},
                    {id: 'general3', text: 'اللهم اغفر لي خطيئتي، وجهلي وإسرافي، في أمري وما أنت أعلم به مني، اللهم اغفر لي جدي وهزلي وخطئي وعمدي وكل ذلك عندي، اللهم اغفر لي ما قدمت وما أخرت، وما أسررت وما أعلنت وما أنت أعلم به مني، أنت المقدم وأنت المؤخر وأنت على كل شيء قدير".', count: 1, subtext: 'متفق عليه'},
                    {id: 'general4', text: 'اللهم حبب إلينا الإيمان وزينه في قلوبنا، وكره إلينا الكفر والفسوق والعصيان، واجعلنا من الراشدين، اللهم توفنا مسلمين وأحينا مسلمين وألحقنا بالصالحين غير خزايا ولا مفتونين".', count: 1, subtext: 'أخرجه أحمد والبخاري'},
                    {id: 'general5', text: 'اللهم إنك عفو كريم تحب العفو فاعف عني".', count: 1, subtext: 'أخرجه الترمذي وابن ماجه'},
                    {id: 'general6', text: 'اللهم رب جبرائيل وميكائيل وإسرافيل، فاطر السماوات والأرض، عالم الغيب والشهادة، أنت تحكم بين عبادك فيما كانوا فيه يختلفون، اهدني لما اختلف فيه من الحق بإذنك إنك تهدي من تشاء إلى صراط مستقيم".', count: 1, subtext: 'أخرجه مسلم'},
                    {id: 'general7', text: 'رب اغفر لي وتب علي إنك أنت التواب الغفور".', count: 1, subtext: 'أخرجه أحمد والترمذي'},
                    {id: 'general8', text: 'اللهم أعوذ برضاك من سخطك، وبمعافاتك من عقوبتك، وأعوذ بك منك، لا أحصي ثناء عليك، أنت كما أثنيت على نفسك".', count: 1, subtext: 'أخرجه مسلم'},
                    {id: 'general9', text: 'دعوة ذي النون، إذ دعا في بطن الحوت، قال: لا إله إلا أنت، سبحانك إني كنت من الظالمين".', count: 1, subtext: 'ما دعا بها أحد قط إلا استجيب له'},
                    {id: 'general10', text: 'يا مقلب القلوب ثبت قلبي على دينك".', count: 1, subtext: 'أخرجه أحمد والترمذي'},
                    {id: 'general11', text: 'اللهم إني أسألك الهدى والتقى والعفاف والغنى".', count: 1, subtext: 'أخرجه مسلم'},
                    {id: 'general12', text: 'اللهم أعني على ذكرك وشكرك وحسن عبادتك".', count: 1, subtext: 'أخرجه البخاري وأبو داود'},
                    {id: 'general13', text: 'اللهم ربنا آتنا في الدنيا حسنة، وفي الآخرة حسنة، وقنا عذاب النار".', count: 1, subtext: 'متفق عليه'},
                    {id: 'general14', text: 'اللهم مصرف القلوب صرف قلوبنا على طاعتك".', count: 1, subtext: 'أخرجه مسلم'},
                    {id: 'general15', text: 'اللهم إني عبدك، وابن عبدك، وابن أمتك، ناصيتي بيدك، ماض في حكمك، عدل في قضاؤك، أسألك بكل اسم هو لك سميت به نفسك، أو أنزلته في كتابك، أو علمته أحدا من خلقك، أو استأثرت به في علم الغيب عندك، أن تجعل القرآن ربيع قلبي، ونور صدري، وجلاء حزني، وذهاب همي".', count: 1, subtext: 'أخرجه أحمد'},
                    {id: 'general16', text: 'اللهم أحسنت خلقي فأحسن خلقي".', count: 1, subtext: 'أخرجه أحمد'},
                    {id: 'general17', text: 'اللهم ضع في أرضنا بركتها وزينتها وسكنها".', count: 1, subtext: 'رواه الطبراني في الأوسط'},
                    {id: 'general18', text: 'رب أعني، ولا تعن علي، وانصرني ولا تنصر علي، وامكر لي ولا تمكر علي، واهدني ويسر الهدى لي، وانصرني على من بغى علي، رب اجعلني لك شاكراً، لك ذاكراً، لك راهباً، لك مطواعاً، لك مخبتاً، إليك أواهاً منيباً، رب تقبل توبتي، واغسل حوبتي، وأجب دعواتي، وثبت حجتي، وسدد لساني، واهد قلبي، واسلل سخيمة صدري".', count: 1, subtext: 'رواه أبو داود'},
                    {id: 'general19', text: 'اللَّهُمَّ إِنِّى أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى.', count: 1, subtext: 'مرة واحدة'},
                    {id: 'general20', text: 'اللهم إني أعوذ بك من جَهْدِ الْبَلاَءِ وَدَرَكِ الشَّقَاءِ وَسُوءِ الْقَضَاءِ وَشَمَاطَةِ الأَعْدَاءِ.', count: 1, subtext: 'ثلاث مرات'}
                ]
            }
        ];

                // بيانات الأذكار - إنجليزي
        const azkarCategoriesEn = [
            {
                id: 'morning',
                title: 'Morning Azkar',
                icon: 'fas fa-sun',
                azkar: [
                    {id: 'morning1', text: 'I seek refuge with Allah from Satan, the accursed. Allah! There is no god but Him, the Ever-Living, the Sustainer of existence. [Ayat al-Kursi - Al-Baqarah 255]', count: 1, subtext: 'Whoever says it in the morning will be protected from the jinn until evening.'},
                    {id: 'morning2', text: 'In the name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah, the One. Allah, the Eternal, the Absolute. He begets not, nor was He begotten. And there is none comparable to Him.', count: 3, subtext: 'Surah Al-Ikhlas - Three times'},
                    {id: 'morning3', text: 'In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge with the Lord of the daybreak. From the evil of what He has created. And from the evil of the darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies.', count: 3, subtext: 'Surah Al-Falaq - Three times'},
                    {id: 'morning4', text: 'In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge with the Lord of mankind. The King of mankind. The God of mankind. From the evil of the whisperer who withdraws. Who whispers in the breasts of mankind. Of jinn and mankind.', count: 3, subtext: 'Surah An-Nas - Three times'},
                    {id: 'morning5', text: 'We have reached the morning and at this very time all sovereignty belongs to Allah, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise, and He is over all things omnipotent.', count: 1, subtext: 'Once'},
                    {id: 'morning6', text: 'O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I take refuge with You from the evil of what I have done. I acknowledge Your favor upon me and I acknowledge my sin, so forgive me, for indeed none forgives sins except You.', count: 1, subtext: 'Whoever says it with certainty in the evening and dies that night will enter Paradise.'},
                    {id: 'morning7', text: 'I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace be upon him) as my Prophet.', count: 3, subtext: 'Whoever says it in the morning or evening, Allah will be pleased with him on the Day of Resurrection.'},
                    {id: 'morning8', text: 'O Allah, indeed I have entered the morning calling You, the bearers of Your Throne, Your angels, and all of Your creation to witness that You are Allah, none has the right to be worshipped except You, alone, without partner, and that Muhammad is Your servant and Messenger.', count: 4, subtext: 'Whoever says it, Allah will free him from the Fire.'},
                    {id: 'morning9', text: 'O Allah, whatever blessing has come to me or to any of Your creation at this morning, it is from You alone, without partner, so for You is all praise and to You is all thanks.', count: 1, subtext: 'Whoever says it in the morning has fulfilled the gratitude of that day.'},
                    {id: 'morning10', text: 'Allah is sufficient for me, none has the right to be worshipped except Him, upon Him I rely, and He is the Lord of the Great Throne.', count: 7, subtext: 'Whoever says it, Allah will suffice him in matters of this world and the Hereafter.'},
                    {id: 'morning11', text: 'In the name of Allah, with whose name nothing is harmed on earth nor in the heavens, and He is the All-Hearing, the All-Knowing.', count: 3, subtext: 'Nothing will harm him from Allah.'},
                    {id: 'morning12', text: 'O Allah, by You we have reached the morning and by You we reach the evening, by You we live and by You we die, and to You is the resurrection.', count: 1, subtext: 'Once'},
                    {id: 'morning13', text: 'We have reached the morning upon the fitrah of Islam, upon the word of sincerity, upon the religion of our Prophet Muhammad (peace be upon him), and upon the way of our father Abraham, hanif (monotheist) and Muslim, and he was not of the polytheists.', count: 1, subtext: 'Once'},
                    {id: 'morning14', text: 'Glory and praise be to Allah, as much as the number of His creation, as much as pleases Him, as much as the weight of His Throne, and as much as the ink of His words.', count: 3, subtext: 'Three times'},
                    {id: 'morning15', text: 'O Allah, grant my body health, O Allah, grant my hearing health, O Allah, grant my sight health. There is no god but You.', count: 3, subtext: 'Three times'},
                    {id: 'morning16', text: 'O Allah, I seek refuge with You from disbelief and poverty, and I seek refuge with You from the punishment of the grave. There is no god but You.', count: 3, subtext: 'Three times'},
                    {id: 'morning17', text: 'O Allah, I ask You for pardon and well-being in this life and the Hereafter. O Allah, I ask You for pardon and well-being in my religious and worldly affairs, and my family and my wealth.', count: 1, subtext: 'Once'},
                    {id: 'morning18', text: 'O Ever-Living, O Self-Sustaining, by Your mercy I seek help. Rectify all my affairs and do not leave me to myself even for the blink of an eye.', count: 3, subtext: 'Three times'},
                    {id: 'morning19', text: 'We have reached the morning and at this very time all sovereignty belongs to Allah, the Lord of the worlds. O Allah, I ask You for the good of this day: its conquest, its victory, its light, its blessings, and its guidance.', count: 1, subtext: 'Once'},
                    {id: 'morning20', text: 'O Allah, Knower of the unseen and the witnessed, Creator of the heavens and the earth, Lord and Sovereign of all things, I bear witness that none has the right to be worshipped except You. I seek refuge with You from the evil of myself and from the evil of Satan and his polytheism.', count: 1, subtext: 'Once'},
                    {id: 'morning21', text: 'I seek refuge in the perfect words of Allah from the evil of what He has created.', count: 3, subtext: 'Three times'},
                    {id: 'morning22', text: 'O Allah, send prayers and peace and blessings upon our master Muhammad.', count: 10, subtext: 'Whoever sends blessings upon me ten times in the morning and ten times in the evening, my intercession will reach him on the Day of Resurrection.'},
                    {id: 'morning23', text: 'O Allah, we seek refuge with You from associating partners with You knowingly, and we ask Your forgiveness for what we do not know.', count: 3, subtext: 'Three times'},
                    {id: 'morning24', text: 'O Allah, I seek refuge with You from anxiety and grief, and I seek refuge with You from incapacity and laziness, and I seek refuge with You from cowardice and miserliness, and I seek refuge with You from the burden of debt and the oppression of men.', count: 3, subtext: 'Three times'},
                    {id: 'morning25', text: 'I seek forgiveness from Allah, the Magnificent, whom none has the right to be worshipped except Him, the Ever-Living, the Self-Sustaining, and I repent to Him.', count: 3, subtext: 'Three times'},
                    {id: 'morning26', text: 'O Lord, to You is all praise as befits the majesty of Your countenance and the greatness of Your authority.', count: 3, subtext: 'Three times'},
                    {id: 'morning27', text: 'O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.', count: 1, subtext: 'Once'},
                    {id: 'morning28', text: 'O Allah, You are my Lord, there is no god but You. Upon You I rely, and You are the Lord of the Great Throne. Whatever Allah wills will be, and whatever He does not will will not be. There is no power or strength except through Allah, the Most High, the Magnificent.', count: 1, subtext: 'Once'},
                    {id: 'morning29', text: 'There is no god but Allah alone, without partner. To Him belongs sovereignty and to Him belongs praise, and He is over all things omnipotent.', count: 100, subtext: 'It will be for him the equivalent of freeing ten slaves.'},
                    {id: 'morning30', text: 'Glory and praise be to Allah.', count: 100, subtext: 'His sins will be forgiven even if they are like the foam of the sea.'},
                    {id: 'morning31', text: 'I seek forgiveness from Allah and I repent to Him.', count: 100, subtext: 'One hundred times'}
                ]
            },
            {
                id: 'evening',
                title: 'Evening Azkar',
                icon: 'fas fa-moon',
                azkar: [
                    {id: 'evening1', text: 'Allah! There is no god but Him, the Ever-Living, the Sustainer of existence. [Ayat al-Kursi - Al-Baqarah 255]', count: 1, subtext: 'Whoever says it in the morning will be protected from the jinn until evening.'},
                    {id: 'evening2', text: 'The Messenger has believed in what was revealed to him from his Lord, and the believers as well. [Al-Baqarah 285-286]', count: 1, subtext: 'Whoever recites the last two verses of Surah Al-Baqarah at night, they will suffice him.'},
                    {id: 'evening3', text: 'In the name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah, the One. Allah, the Eternal, the Absolute. He begets not, nor was He begotten. And there is none comparable to Him.', count: 3, subtext: 'Surah Al-Ikhlas - Three times'},
                    {id: 'evening4', text: 'In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge with the Lord of the daybreak.', count: 3, subtext: 'Surah Al-Falaq - Three times'},
                    {id: 'evening5', text: 'In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge with the Lord of mankind.', count: 3, subtext: 'Surah An-Nas - Three times'},
                    {id: 'evening6', text: 'We have reached the evening and at this very time all sovereignty belongs to Allah.', count: 1, subtext: 'Once'},
                    {id: 'evening7', text: 'O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your servant.', count: 1, subtext: 'Whoever says it with certainty in the evening and dies that night will enter Paradise.'},
                    {id: 'evening8', text: 'I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace be upon him) as my Prophet.', count: 3, subtext: 'Whoever says it three times in the morning and three times in the evening, Allah will be pleased with him.'},
                    {id: 'evening9', text: 'O Allah, indeed I have entered the evening calling You to witness that You are Allah, none has the right to be worshipped except You.', count: 4, subtext: 'Whoever says it, Allah will free him from the Fire.'},
                    {id: 'evening10', text: 'O Allah, whatever blessing has come to me or to any of Your creation at this evening, it is from You alone.', count: 1, subtext: 'Whoever says it in the evening has fulfilled the gratitude of that day.'},
                    {id: 'evening11', text: 'Allah is sufficient for me, none has the right to be worshipped except Him, upon Him I rely, and He is the Lord of the Great Throne.', count: 7, subtext: 'Whoever says it, Allah will suffice him.'},
                    {id: 'evening12', text: 'In the name of Allah, with whose name nothing is harmed on earth nor in the heavens, and He is the All-Hearing, the All-Knowing.', count: 3, subtext: 'Whoever says it, nothing will harm him.'},
                    {id: 'evening13', text: 'O Allah, by You we have reached the evening and by You we reach the morning, by You we live and by You we die, and to You is the final return.', count: 1, subtext: 'Once'},
                    {id: 'evening14', text: 'We have reached the evening upon the fitrah of Islam, upon the word of sincerity.', count: 1, subtext: 'Once'},
                    {id: 'evening15', text: 'Glory and praise be to Allah, as much as the number of His creation, as much as pleases Him, as much as the weight of His Throne, and as much as the ink of His words.', count: 3, subtext: 'Three times'},
                    {id: 'evening16', text: 'O Allah, grant my body health, O Allah, grant my hearing health, O Allah, grant my sight health. There is no god but You.', count: 3, subtext: 'Three times'},
                    {id: 'evening17', text: 'O Allah, I seek refuge with You from disbelief and poverty, and I seek refuge with You from the punishment of the grave. There is no god but You.', count: 3, subtext: 'Three times'},
                    {id: 'evening18', text: 'O Allah, I ask You for pardon and well-being in this life and the Hereafter.', count: 1, subtext: 'Once'},
                    {id: 'evening19', text: 'O Ever-Living, O Self-Sustaining, by Your mercy I seek help. Rectify all my affairs and do not leave me to myself even for the blink of an eye.', count: 3, subtext: 'Three times'},
                    {id: 'evening20', text: 'We have reached the evening and at this very time all sovereignty belongs to Allah, the Lord of the worlds.', count: 1, subtext: 'Once'},
                    {id: 'evening21', text: 'O Allah, Knower of the unseen and the witnessed, Creator of the heavens and the earth, Lord and Sovereign of all things, I bear witness that none has the right to be worshipped except You.', count: 1, subtext: 'Once'},
                    {id: 'evening22', text: 'I seek refuge in the perfect words of Allah from the evil of what He has created.', count: 3, subtext: 'Three times'},
                    {id: 'evening23', text: 'O Allah, send prayers and peace and blessings upon our Prophet Muhammad.', count: 10, subtext: 'Whoever sends blessings upon me ten times in the morning and ten times in the evening.'},
                    {id: 'evening24', text: 'O Allah, we seek refuge with You from associating partners with You knowingly, and we ask Your forgiveness for what we do not know.', count: 3, subtext: 'Three times'},
                    {id: 'evening25', text: 'O Allah, I seek refuge with You from anxiety and grief, and I seek refuge with You from incapacity and laziness.', count: 3, subtext: 'Three times'},
                    {id: 'evening26', text: 'I seek forgiveness from Allah, the Magnificent, whom none has the right to be worshipped except Him, the Ever-Living, the Self-Sustaining, and I repent to Him.', count: 3, subtext: 'Three times'},
                    {id: 'evening27', text: 'O Lord, to You is all praise as befits the majesty of Your countenance and the greatness of Your authority.', count: 3, subtext: 'Three times'},
                    {id: 'evening28', text: 'There is no god but Allah alone, without partner. To Him belongs sovereignty and to Him belongs praise, and He is over all things omnipotent.', count: 100, subtext: 'It will be for him the equivalent of freeing ten slaves. (Reported by At-Tirmidhi)'},
                    {id: 'evening29', text: 'O Allah, You are my Lord, there is no god but You. Upon You I rely, and You are the Lord of the Great Throne.', count: 1, subtext: 'Once'},
                    {id: 'evening30', text: 'Glory and praise be to Allah.', count: 100, subtext: 'Whoever says it one hundred times, his sins will be forgiven even if they are like the foam of the sea.'}
                ]
            },
            {
                id: 'sleep',
                title: 'Sleep Azkar',
                icon: 'fas fa-bed',
                azkar: [
                    {id: 'sleep1', text: 'Allah! There is no god but Him, the Ever-Living, the Sustainer of existence. [Ayat al-Kursi - Al-Baqarah 255]', count: 1, subtext: 'Whoever says it when going to sleep will be protected from Satan until morning.'},
                    {id: 'sleep2', text: 'The Messenger has believed in what was revealed to him from his Lord. [Al-Baqarah 285-286]', count: 1, subtext: 'Whoever recites the last two verses of Surah Al-Baqarah at night, they will suffice him.'},
                    {id: 'sleep3', text: 'In Your name, my Lord, I lay my side down, and by You I raise it. If You take my soul, have mercy upon it, and if You release it, protect it.', count: 1, subtext: 'Once'},
                    {id: 'sleep4', text: 'O Allah, protect me from Your punishment on the day You resurrect Your servants.', count: 3, subtext: 'Three times'},
                    {id: 'sleep5', text: 'O Allah, indeed You created my soul and You take its life. To You belongs its death and its life. If You give it life, then protect it, and if You cause it to die, then forgive it.', count: 1, subtext: 'Once'},
                    {id: 'sleep6', text: 'In Your name, O Allah, I die and I live.', count: 1, subtext: 'Once'},
                    {id: 'sleep7', text: 'All praise is for Allah, who fed us, gave us drink, sufficed us, and gave us shelter.', count: 1, subtext: 'Once'},
                    {id: 'sleep8', text: 'O Allah, Knower of the unseen and the witnessed, Creator of the heavens and the earth, Lord and Sovereign of all things, I bear witness that none has the right to be worshipped except You.', count: 1, subtext: 'Once'},
                    {id: 'sleep9', text: 'O Allah, I have submitted myself to You, entrusted my affairs to You, turned my face to You, and leaned my back upon You.', count: 1, subtext: 'Once'},
                    {id: 'sleep10', text: 'Glory be to Allah', count: 33, subtext: 'Thirty-three times'},
                    {id: 'sleep11', text: 'Praise be to Allah', count: 33, subtext: 'Thirty-three times'},
                    {id: 'sleep12', text: 'Allah is the Greatest', count: 34, subtext: 'Thirty-four times'},
                    {id: 'sleep13', text: 'He cupped his hands together, then blew into them and recited: (Say: He is Allah, the One) and (Say: I seek refuge with the Lord of the daybreak) and (Say: I seek refuge with the Lord of mankind) - Allah Almighty has spoken the truth - and he wiped as much of his body as he could, starting with his head, face, and the front part of his body. Recited three times.', count: 3, subtext: 'Three times'}
                ]
            },
            {
                id: 'general',
                title: 'General Supplications',
                icon: 'fas fa-hands-praying',
                azkar: [
                    {id: 'general1', text: 'O Allah, to You I have submitted, in You I have believed, upon You I have relied, to You I turn, and by Your evidence I argue.', count: 1, subtext: 'Agreed upon (Bukhari & Muslim)'},
                    {id: 'general2', text: 'O Allah, our Lord, to You is all praise, filling the heavens and filling the earth, and filling whatever else You will.', count: 1, subtext: 'Reported by Muslim'},
                    {id: 'general3', text: 'O Allah, forgive me my mistakes, my ignorance, and my excesses in my affairs, and what You know better than I.', count: 1, subtext: 'Agreed upon (Bukhari & Muslim)'},
                    {id: 'general4', text: 'O Allah, make faith beloved to us and adorn it in our hearts, and make disbelief, wickedness, and disobedience hateful to us.', count: 1, subtext: 'Reported by Ahmad and Bukhari'},
                    {id: 'general5', text: 'O Allah, indeed You are Pardoning, Generous, You love pardon, so pardon me.', count: 1, subtext: 'Reported by Tirmidhi and Ibn Majah'},
                    {id: 'general6', text: 'O Allah, Lord of Jibril, Mikail, and Israfil, Creator of the heavens and the earth, Knower of the unseen and the witnessed, You judge between Your servants.', count: 1, subtext: 'Reported by Muslim'},
                    {id: 'general7', text: 'My Lord, forgive me and accept my repentance, indeed You are the Acceptor of Repentance, the Most Forgiving.', count: 1, subtext: 'Reported by Ahmad and Tirmidhi'},
                    {id: 'general8', text: 'O Allah, I seek refuge in Your pleasure from Your displeasure, and in Your pardon from Your punishment, and I seek refuge in You from You.', count: 1, subtext: 'Reported by Muslim'},
                    {id: 'general9', text: 'The supplication of Dhul-Nun (Prophet Yunus), when he called out from the belly of the whale: "There is no god but You, glory be to You, indeed I have been among the wrongdoers."', count: 1, subtext: 'No Muslim ever supplicates with it except that Allah answers him.'},
                    {id: 'general10', text: 'O Turner of hearts, make my heart firm upon Your religion.', count: 1, subtext: 'Reported by Ahmad and Tirmidhi'},
                    {id: 'general11', text: 'O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.', count: 1, subtext: 'Reported by Muslim'},
                    {id: 'general12', text: 'O Allah, help me to remember You, to thank You, and to worship You well.', count: 1, subtext: 'Reported by Bukhari and Abu Dawud'},
                    {id: 'general13', text: 'O Allah, our Lord, give us in this world good, and in the Hereafter good, and protect us from the punishment of the Fire.', count: 1, subtext: 'Agreed upon (Bukhari & Muslim)'},
                    {id: 'general14', text: 'O Allah, Controller of hearts, direct our hearts to obey You.', count: 1, subtext: 'Reported by Muslim'},
                    {id: 'general15', text: 'O Allah, I am Your servant, son of Your servant, son of Your maidservant. My forelock is in Your hand, Your judgment upon me is certain, Your decree concerning me is just.', count: 1, subtext: 'Reported by Ahmad'},
                    {id: 'general16', text: 'O Allah, You have perfected my creation, so perfect my character.', count: 1, subtext: 'Reported by Ahmad'},
                    {id: 'general17', text: 'O Allah, place in our land its blessing, its beauty, and its tranquility.', count: 1, subtext: 'Reported by Al-Tabarani in Al-Awsat'},
                    {id: 'general18', text: 'My Lord, help me and do not help others against me, grant me victory and do not grant victory over me, plan for me and do not plan against me.', count: 1, subtext: 'Reported by Abu Dawud'},
                    {id: 'general19', text: 'O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.', count: 1, subtext: 'Once'},
                    {id: 'general20', text: 'O Allah, I seek refuge with You from the hardship of trial, the reach of misery, the evil of decree, and the glee of enemies.', count: 1, subtext: 'Three times'}
                ]
            }
        ];

        // الأذكار الحالية - سيتم تحديثها حسب اللغة
        let azkarCategories = currentLang === 'ar' ? azkarCategoriesAr : azkarCategoriesEn;
        
        // متغيرات localStorage لنصيحة اليوم
        const ADVICE_STORAGE_KEY = 'zadZiad_adviceState';
        const ADVICE_EXPIRY_MINUTES = 5;

        // وظائف التطبيق الرئيسية
        window.onload = function() {
            setTimeout(() => document.getElementById('splash').classList.add('hide-splash'), 400);

            const savedMode = localStorage.getItem('zadZiad_mode') || 'light';
            document.body.setAttribute('data-mode', savedMode);

            const savedColor = localStorage.getItem('zadZiad_color') || 'light';
            document.body.setAttribute('data-color', savedColor);
            document.getElementById('appThemeSelect').value = savedColor;

            document.getElementById('languageSelect').value = currentLang;
            changeLanguage(currentLang);

            const savedDhikr = localStorage.getItem('zadZiad_currentDhikr') || 'سُبْحَانَ اللَّه';
            document.getElementById('sel').value = savedDhikr;
            setD(savedDhikr);

            const savedS = parseInt(localStorage.getItem('zadZiad_sCount')) || 0;
            s = savedS;

            updateMuteButton();
            checkAndResetDaily();
            updateAdvice();
            
            names.forEach((n, index) => { 
                const d = document.createElement('div'); 
                d.className='name-item'; 
                if (currentLang === 'en') {
                    d.innerText = namesEn[index];
                } else {
                    d.innerText = n;
                }
                document.getElementById('namesGrid').appendChild(d); 
            });
            
            renderCategories();
            render();
            updateThemeSelect();
            updateSmartDate();
            scheduleNotifications();
            
            if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
                Notification.requestPermission();
            }
        };

        window.onbeforeunload = function() {
            if (notificationInterval) clearInterval(notificationInterval);
            if (notificationCheckInterval) clearInterval(notificationCheckInterval);
        };

        function scheduleNotifications() {
            checkFixedTimeNotifications();
            if (notificationCheckInterval) clearInterval(notificationCheckInterval);
            notificationCheckInterval = setInterval(checkFixedTimeNotifications, 30000);
            
            if (notificationInterval) clearInterval(notificationInterval);
            notificationInterval = setInterval(sendRandomZekrNotification, 600000);
        }

        function checkFixedTimeNotifications() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const lastNotificationKey = 'lastFixedNotificationDate';
            const lastNotificationDate = localStorage.getItem(lastNotificationKey) || '';
            const todayDateStr = now.toDateString();
            
            if (hours === 7 && minutes === 0) {
                const notificationKey = 'morning_' + todayDateStr;
                if (lastNotificationDate !== notificationKey) {
                    sendNotification(
                        currentLang === 'ar' ? 'أذكار الصباح' : 'Morning Azkar',
                        translations[currentLang].morningReminder
                    );
                    localStorage.setItem(lastNotificationKey, notificationKey);
                }
            } else if (hours === 17 && minutes === 0) {
                const notificationKey = 'evening_' + todayDateStr;
                if (lastNotificationDate !== notificationKey) {
                    sendNotification(
                        currentLang === 'ar' ? 'أذكار المساء' : 'Evening Azkar',
                        translations[currentLang].eveningReminder
                    );
                    localStorage.setItem(lastNotificationKey, notificationKey);
                }
            } else if (hours === 23 && minutes === 0) {
                const notificationKey = 'sleep_' + todayDateStr;
                if (lastNotificationDate !== notificationKey) {
                    sendNotification(
                        currentLang === 'ar' ? 'أذكار النوم' : 'Sleep Azkar',
                        translations[currentLang].sleepReminder
                    );
                    localStorage.setItem(lastNotificationKey, notificationKey);
                }
            }
        }

        function sendNotification(title, body) {
            if (Notification.permission === 'granted') {
                try {
                    const notification = new Notification(title, {
                        body: body,
                        icon: '/icon-192.png',
                        silent: isMuted
                    });
                    setTimeout(() => notification.close(), 5000);
                } catch(e) {
                    console.log('Notification error:', e);
                }
            }
        }

        function sendRandomZekrNotification() {
            const sel = document.getElementById('sel');
            if (sel && sel.options && sel.options.length > 0) {
                const options = Array.from(sel.options);
                const randomIndex = Math.floor(Math.random() * options.length);
                const randomZekr = options[randomIndex].value;
                if (randomZekr) {
                    sendNotification(
                        translations[currentLang].randomZekrTitle || (currentLang === 'ar' ? 'ذكر عشوائي' : 'Random Dhikr'),
                        randomZekr
                    );
                }
            }
        }

        function checkAndResetDaily() {
            const today = new Date().toDateString();
            const lastReset = localStorage.getItem('azkarLastReset');
            if (lastReset !== today) {
                azkarState = {};
                localStorage.setItem('azkarState', JSON.stringify(azkarState));
                saveUserData();
                localStorage.setItem('azkarLastReset', today);
            }
        }

        function renderCategories() {
            const container = document.getElementById('azCategories');
            container.innerHTML = '';
            const grid = document.createElement('div');
            grid.className = 'categories-grid';
            azkarCategories.forEach(category => {
                const card = document.createElement('div');
                card.className = 'category-card';
                card.onclick = () => showCategory(category.id);
                let completed = 0;
                const categoryState = azkarState[category.id] || {};
                category.azkar.forEach(zekr => {
                    if (categoryState[zekr.id] && categoryState[zekr.id].completed) { completed++; }
                });
                card.innerHTML = '<div class="category-icon"><i class="' + category.icon + '"></i></div><div class="category-title">' + category.title + '</div><div class="category-completed">' + completed + '/' + category.azkar.length + '</div>' + (completed === category.azkar.length ? '<div style="color:var(--gold); font-size:0.8rem; margin-top:5px;"><i class="fas fa-check-circle"></i> ' + (currentLang === 'ar' ? 'تم ✅' : 'Done ✅') + '</div>' : '');
                grid.appendChild(card);
            });
            container.appendChild(grid);
        }

        function showCategory(categoryId) {
            const category = azkarCategories.find(c => c.id === categoryId);
            if (!category) return;
            currentCategory = categoryId;
            document.getElementById('azCategories').style.display = 'none';
            document.getElementById('azGroupContent').style.display = 'block';
            document.getElementById('groupTitle').innerText = category.title;
            const container = document.getElementById('azList');
            container.innerHTML = '';
            const categoryState = azkarState[categoryId] || {};
            let allCompleted = true;
            category.azkar.forEach(zekr => {
                const item = document.createElement('div');
                item.className = 'zekr-item';
                const zekrState = categoryState[zekr.id] || { current: zekr.count, completed: false };
                const isCompleted = zekrState.completed;
                if (!isCompleted) allCompleted = false;
                item.innerHTML = '<div class="zekr-text">' + zekr.text + '</div><div class="zekr-subtext">' + zekr.subtext + '</div><div class="zekr-counter"><div class="counter-number">' + (isCompleted ? 0 : zekrState.current) + '</div><button class="counter-btn ' + (isCompleted ? 'completed' : '') + '" onclick="countAzkar(\'' + categoryId + '\', \'' + zekr.id + '\', ' + zekr.count + ', this)">' + (isCompleted ? (currentLang === 'ar' ? 'تم ✅' : 'Done ✅') : (currentLang === 'ar' ? 'عد ' + zekrState.current : 'Count ' + zekrState.current)) + '</button></div>';
                container.appendChild(item);
            });
            const completionMsg = document.getElementById('groupCompletionMsg');
            if (allCompleted) {
                completionMsg.style.display = 'block';
                completionMsg.innerText = translations[currentLang].groupComplete + ' ' + category.title + ' ' + translations[currentLang].todaySuccess;
            } else { completionMsg.style.display = 'none'; }
        }

        function showCategories() {
            document.getElementById('azCategories').style.display = 'block';
            document.getElementById('azGroupContent').style.display = 'none';
            renderCategories();
        }

        function countAzkar(categoryId, zekrId, total, button) {
            if (!azkarState[categoryId]) azkarState[categoryId] = {};
            if (!azkarState[categoryId][zekrId]) { azkarState[categoryId][zekrId] = { current: total, completed: false }; }
            const zekrState = azkarState[categoryId][zekrId];
            if (zekrState.completed) return;
            zekrState.current--;
            playEff();
            g++;
            const counterNumber = button.parentElement.querySelector('.counter-number');
            counterNumber.innerText = zekrState.current;
            if (zekrState.current <= 0) {
                zekrState.completed = true;
                button.classList.add('completed');
                button.innerText = currentLang === 'ar' ? 'تم ✅' : 'Done ✅';
                if (!isMuted) { beepS.currentTime = 0; beepS.play().catch(()=>{}); }
            } else {
                button.innerText = (currentLang === 'ar' ? 'عد ' + zekrState.current : 'Count ' + zekrState.current);
            }
            localStorage.setItem('azkarState', JSON.stringify(azkarState));
            render();
            saveUserData();
            checkCategoryCompletion(categoryId);
        }

        function checkCategoryCompletion(categoryId) {
            const category = azkarCategories.find(c => c.id === categoryId);
            if (!category) return;
            const categoryState = azkarState[categoryId] || {};
            let allCompleted = true;
            category.azkar.forEach(zekr => {
                const zekrState = categoryState[zekr.id];
                if (!zekrState || !zekrState.completed) { allCompleted = false; }
            });
            const completionMsg = document.getElementById('groupCompletionMsg');
            if (allCompleted) {
                completionMsg.style.display = 'block';
                completionMsg.innerText = translations[currentLang].groupComplete + ' ' + category.title + ' ' + translations[currentLang].todaySuccess;
                if (!isMuted) { achievementS.currentTime = 0; achievementS.play().catch(()=>{}); }
                checkAllCategoriesCompletion();
            }
            renderCategories();
        }

        function checkAllCategoriesCompletion() {
            let allCategoriesCompleted = true;
            azkarCategories.forEach(category => {
                const categoryState = azkarState[category.id] || {};
                let categoryCompleted = true;
                category.azkar.forEach(zekr => {
                    const zekrState = categoryState[zekr.id];
                    if (!zekrState || !zekrState.completed) { categoryCompleted = false; }
                });
                if (!categoryCompleted) { allCategoriesCompleted = false; }
            });
            if (allCategoriesCompleted) { showAllCompleteModal(); }
        }

        function showAllCompleteModal() {
            const modal = document.getElementById('allCompleteModal');
            modal.style.display = 'flex';
            if (!isMuted) { allCompleteS.currentTime = 0; allCompleteS.play().catch(()=>{}); }
        }

        function closeAllCompleteModal() {
            document.getElementById('allCompleteModal').style.display = 'none';
        }

        function updateAdvice() { 
            const now = Date.now();
            const storedState = localStorage.getItem(ADVICE_STORAGE_KEY);
            let adviceIndex, expiryTime;
            if (storedState) {
                const parsed = JSON.parse(storedState);
                adviceIndex = parsed.index;
                expiryTime = parsed.expiry;
            }
            if (!storedState || now > expiryTime) {
                adviceIndex = Math.floor(Math.random() * advicesAr.length);
                expiryTime = now + (ADVICE_EXPIRY_MINUTES * 60 * 1000);
                localStorage.setItem(ADVICE_STORAGE_KEY, JSON.stringify({ index: adviceIndex, expiry: expiryTime }));
            }
            const adv = currentLang === 'ar' ? advicesAr[adviceIndex] : advicesEn[adviceIndex];
            document.getElementById('advice').innerText = translations[currentLang].advice + adv; 
        }

        function handleTap() { s++; g++; playEff(); render(); saveUserData(); }

        function playEff() { 
            if (!isMuted) { clickS.currentTime = 0; clickS.play().catch(()=>{}); }
            if(navigator.vibrate) navigator.vibrate(40); 
        }

        function resetS() { 
            if(confirm(translations[currentLang].resetTasbihConfirm)) { s = 0; render(); saveUserData(); } 
        }

        function resetGoodDeeds() { 
            if(confirm(translations[currentLang].resetGoodDeedsConfirm)) { g = 0; render(); saveUserData(); } 
        }

        function setD(v) { 
            document.getElementById('dTitle').innerText = v; 
            s = 0; 
            localStorage.setItem('zadZiad_currentDhikr', v); 
            render();
            saveUserData();
        }

        function render() { 
            document.getElementById('sCount').innerText = s; 
            document.getElementById('gCount').innerText = g.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US'); 
            localStorage.setItem('ziad_final_v1000', g); 
            localStorage.setItem('zadZiad_sCount', s);
            saveUserData();
        }

        function toggleMode() {
            const body = document.body;
            let newMode;
            if (body.getAttribute('data-mode') === 'dark') {
                body.setAttribute('data-mode', 'light');
                newMode = 'light';
            } else {
                body.setAttribute('data-mode', 'dark');
                newMode = 'dark';
            }
            localStorage.setItem('zadZiad_mode', newMode);
            saveUserData();
        }

        function show(id, btn) { 
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page')); 
            document.querySelectorAll('.nav-btn').forEach(b => { b.classList.remove('active'); b.style.color = ''; b.style.transform = ''; }); 
            document.getElementById(id).classList.add('active-page'); 
            btn.classList.add('active');
            if (id === 'hPage') { updateAdvice(); updateSmartDate(); btn.style.color = 'var(--gold)'; btn.style.transform = 'scale(1.1)'; } 
            else if (id === 'zPage') { showCategories(); btn.style.color = 'var(--p)'; } 
            else { btn.style.color = 'var(--p)'; }
        }

        function loadRadio() {
            const container = document.getElementById('radioContainer');
            const iframe = document.getElementById('radioIframe');
            container.style.display = 'block';
            if (!iframe.src || iframe.src === window.location.href) {
                iframe.src = "https://www.holyquranradio.com/";
            }
        }

        function openSettings() { document.getElementById('settingsModal').style.display = 'flex'; }
        function closeSettings() { document.getElementById('settingsModal').style.display = 'none'; }

        function changeLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('zadZiad_lang', lang);
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            azkarCategories = lang === 'ar' ? azkarCategoriesAr : azkarCategoriesEn;
            document.title = translations[lang].title;
            document.querySelector('.logo-text').innerText = translations[lang].title;
            document.querySelector('.ziad-msg').innerText = lang === 'ar' ? "زياد بيقولك صلِّ على النبيّ 🤍" : "Ziad says: Send blessings on the Prophet 🤍";
            updateAdvice();
            document.querySelector('#hPage h2').innerText = translations[lang].homeTitle;
            document.querySelector('#hPage p').innerText = translations[lang].homeDesc;
            document.querySelector('#hPage h4').innerText = lang === 'ar' ? 'أسماء الله الحسنى ٩٩ اسمًا من أحصاها دخل الجنة' : '99 Names of Allah - Whoever enumerates them enters Paradise';
            document.getElementById('developerName').innerText = translations[lang].developerName;
            document.getElementById('developerDesc').innerText = translations[lang].developerDesc;
            document.getElementById('appGoal').innerHTML = translations[lang].appGoal;
            document.getElementById('contactTitle').innerText = translations[lang].contactTitle;
            document.getElementById('backToGroupsText').innerText = translations[lang].backToGroups;
            document.getElementById('radioTitle').innerText = translations[lang].radioTitle;
            document.getElementById('radioDesc').innerText = translations[lang].radioDesc;
            document.getElementById('radioBtn').innerText = translations[lang].radioBtn;
            document.querySelector('.tap-btn').innerText = translations[lang].tasbihBtn;
            document.querySelector('.praise-card > div:first-child').childNodes[0].textContent = translations[lang].hasanat;
            document.getElementById('settingsTitle').innerText = translations[lang].settings;
            document.getElementById('langLabel').innerText = translations[lang].langLabel;
            document.getElementById('appThemeLabel').innerText = translations[lang].appThemeLabel;
            document.getElementById('youtubeText').innerText = translations[lang].youtubeText;
            updateMuteButton();
            document.getElementById('allCompleteTitle').innerText = translations[lang].allCompleteTitle;
            document.getElementById('allCompleteMessage').innerText = translations[lang].allCompleteMessage;
            document.getElementById('allCompleteBtn').innerText = translations[lang].allCompleteBtn;
            const navSpans = document.querySelectorAll('.nav-btn span');
            const navKeys = ['quran','azkar','prayer','home','tasbih','radio','about'];
            navSpans.forEach((span, i) => span.innerText = translations[lang].nav[navKeys[i]]);
            updateThemeSelect();
            const namesGrid = document.getElementById('namesGrid');
            namesGrid.innerHTML = '';
            names.forEach((n, index) => { 
                const d = document.createElement('div'); 
                d.className='name-item'; 
                if (currentLang === 'en') { d.innerText = namesEn[index]; } else { d.innerText = n; }
                namesGrid.appendChild(d); 
            });
            const sel = document.getElementById('sel');
            sel.innerHTML = '';
            const tasbihList = lang === 'ar' ? 
                ['سُبْحَانَ اللَّه', 'الْحَمْدُ لِلَّهِ', 'لَا إِلَهَ إِلَّا الْلَّه', 'الْلَّهُ أَكْبَرُ', 'لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ', 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', 'سُبْحَانَ اللَّهِ الْعَظِيمِ', 'سُبْحَانَ اللهِ العَظِيمِ وَبِحَمْدِهِ', 'لا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ', 'الْلَّهُم صَلِّ وَسَلِم وَبَارِك عَلَى سَيِّدِنَا مُحَمَّد', 'الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ', 'الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ', 'اللَّهُمَّ اغْفِرْ لِي', 'اللَّهُمَّ ارْحَمْنِي', 'اللَّهُمَّ ارْزُقْنِي', 'أستغفر الله الْعَظِيمِ', 'اللَّهُ أَكْبَرُ كَبِيرًا ، وَالْحَمْدُ لِلَّهِ كَثِيرًا ، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً', 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ'] :
                tasbihEn;
            tasbihList.forEach(t => {
                const option = document.createElement('option');
                option.value = t;
                option.textContent = t;
                sel.appendChild(option);
            });
            const savedDhikr = localStorage.getItem('zadZiad_currentDhikr');
            if (savedDhikr && tasbihList.includes(savedDhikr)) {
                sel.value = savedDhikr;
                setD(savedDhikr);
            } else {
                sel.value = tasbihList[0];
                setD(tasbihList[0]);
            }
            renderCategories();
            if (currentCategory) { showCategory(currentCategory); }
            render();
            updateSmartDate();
            saveUserData();
        }

        function updateThemeSelect() {
            const select = document.getElementById('appThemeSelect');
            const themeNames = translations[currentLang].themes;
            Array.from(select.options).forEach(option => {
                const val = option.value;
                if (themeNames[val]) { option.text = themeNames[val]; }
            });
        }

        function changeAppTheme(theme) {
            document.body.setAttribute('data-color', theme);
            localStorage.setItem('zadZiad_color', theme);
            saveUserData();
        }

        function toggleMute() {
            isMuted = !isMuted;
            localStorage.setItem('zadZiad_muted', isMuted);
            updateMuteButton();
            saveUserData();
        }

        function updateMuteButton() {
            const muteBtn = document.getElementById('muteBtn');
            const muteText = document.getElementById('muteText');
            const muteIcon = muteBtn.querySelector('i');
            if (isMuted) {
                muteBtn.classList.add('muted');
                muteText.innerText = translations[currentLang].unmuteText;
                muteIcon.className = 'fas fa-volume-mute';
            } else {
                muteBtn.classList.remove('muted');
                muteText.innerText = translations[currentLang].muteText;
                muteIcon.className = 'fas fa-volume-up';
            }
        }

        function closeAllComplete() {
            document.getElementById('allCompleteModal').style.display = 'none';
        }

        function updateSmartDate() {
            const now = new Date();
            const miladiYear = now.getFullYear();
            const miladiMonth = String(now.getMonth() + 1).padStart(2, '0');
            const miladiDay = String(now.getDate()).padStart(2, '0');
            const dayFormatterAr = new Intl.DateTimeFormat('ar-EG', { weekday: 'long' });
            const dayFormatterEn = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
            const dayStringAr = dayFormatterAr.format(now);
            const dayStringEn = dayFormatterEn.format(now);
            const smartDayAr = document.getElementById('smartDayAr');
            const smartDayEn = document.getElementById('smartDayEn');
            const smartMiladiAr = document.getElementById('smartMiladiAr');
            const smartMiladiEn = document.getElementById('smartMiladiEn');
            const hijriDateDisplay = document.getElementById('hijriDateDisplay');
            try {
                const hijriFormatterAr = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' });
                const hijriFormatterEn = new Intl.DateTimeFormat('en-US-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' });
                if (currentLang === 'ar') {
                    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
                    const miladiDayAr = miladiDay.split('').map(d => arabicNumbers[parseInt(d)]).join('');
                    const miladiMonthAr = miladiMonth.split('').map(d => arabicNumbers[parseInt(d)]).join('');
                    const miladiYearAr = miladiYear.toString().split('').map(d => arabicNumbers[parseInt(d)]).join('');
                    smartMiladiAr.innerText = miladiYearAr + '/' + miladiMonthAr + '/' + miladiDayAr;
                    smartDayAr.innerText = dayStringAr;
                    smartDayEn.innerText = dayStringEn;
                    smartMiladiAr.style.display = 'block';
                    smartMiladiEn.style.display = 'none';
                    smartDayAr.style.display = 'block';
                    smartDayEn.style.display = 'none';
                    hijriDateDisplay.innerText = hijriFormatterAr.format(now);
                } else {
                    smartMiladiEn.innerText = miladiYear + '/' + miladiMonth + '/' + miladiDay;
                    smartDayEn.innerText = dayStringEn;
                    smartDayAr.innerText = dayStringAr;
                    smartMiladiAr.style.display = 'none';
                    smartMiladiEn.style.display = 'block';
                    smartDayAr.style.display = 'none';
                    smartDayEn.style.display = 'block';
                    hijriDateDisplay.innerText = hijriFormatterEn.format(now);
                }
            } catch(e) {
                hijriDateDisplay.innerText = '';
            }
        }

        // ===== دوال المصادقة =====
        function openAuthModal() {
            document.getElementById('authModal').style.display = 'flex';
        }
        function closeAuthModal() {
            document.getElementById('authModal').style.display = 'none';
            phoneVerificationDiv.style.display = 'none';
        }

        function signInWithGoogle() {
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider)
                .then(() => closeAuthModal())
                .catch(error => alert('خطأ: ' + error.message));
        }

        function showPhoneInput() {
            phoneVerificationDiv.style.display = 'block';
        }

        function sendVerificationCode() {
            const phoneNumber = document.getElementById('phoneNumber').value;
            if (!phoneNumber) { alert('الرجاء إدخال رقم الهاتف'); return; }
            const appVerifier = new firebase.auth.RecaptchaVerifier('authModal', { size: 'invisible' });
            auth.signInWithPhoneNumber(phoneNumber, appVerifier)
                .then(result => { confirmationResult = result; alert('تم إرسال الرمز'); })
                .catch(error => alert('خطأ: ' + error.message));
        }

        function verifyCode() {
            const code = document.getElementById('verificationCode').value;
            if (!code) { alert('الرجاء إدخال رمز التحقق'); return; }
            confirmationResult.confirm(code)
                .then(() => closeAuthModal())
                .catch(error => alert('خطأ: ' + error.message));
        }

        function signOut() {
            auth.signOut().then(() => { localStorage.clear(); location.reload(); });
        }

        // ===== حفظ وتحميل البيانات =====
        async function saveUserData() {
            if (!currentUser) return;
            try {
                const userData = {
                    azkarState: azkarState,
                    goodDeeds: g,
                    tasbihCount: s,
                    settings: {
                        lang: currentLang,
                        mode: document.body.getAttribute('data-mode'),
                        color: document.body.getAttribute('data-color'),
                        isMuted: isMuted,
                        currentDhikr: localStorage.getItem('zadZiad_currentDhikr') || 'سُبْحَانَ اللَّه'
                    },
                    lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
                };
                await db.collection('users').doc(currentUser.uid).set(userData, { merge: true });
            } catch (error) {
                console.error('خطأ في حفظ البيانات:', error);
            }
        }

        async function loadUserData(uid) {
            try {
                const doc = await db.collection('users').doc(uid).get();
                if (doc.exists) {
                    const data = doc.data();
                    if (data.azkarState) {
                        azkarState = data.azkarState;
                        localStorage.setItem('azkarState', JSON.stringify(azkarState));
                    }
                    if (data.goodDeeds !== undefined) {
                        g = data.goodDeeds;
                        localStorage.setItem('ziad_final_v1000', g);
                    }
                    if (data.tasbihCount !== undefined) {
                        s = data.tasbihCount;
                        localStorage.setItem('zadZiad_sCount', s);
                    }
                    if (data.settings) {
                        const set = data.settings;
                        if (set.lang) { currentLang = set.lang; localStorage.setItem('zadZiad_lang', set.lang); changeLanguage(set.lang); }
                        if (set.mode) { document.body.setAttribute('data-mode', set.mode); localStorage.setItem('zadZiad_mode', set.mode); }
                        if (set.color) { document.body.setAttribute('data-color', set.color); localStorage.setItem('zadZiad_color', set.color); document.getElementById('appThemeSelect').value = set.color; }
                        if (set.isMuted !== undefined) { isMuted = set.isMuted; localStorage.setItem('zadZiad_muted', isMuted); updateMuteButton(); }
                        if (set.currentDhikr) { localStorage.setItem('zadZiad_currentDhikr', set.currentDhikr); document.getElementById('sel').value = set.currentDhikr; setD(set.currentDhikr); }
                    }
                    render();
                    renderCategories();
                }
            } catch (error) {
                console.error('خطأ في تحميل البيانات:', error);
            }
        }
