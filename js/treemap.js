var labelType, useGradients, nativeTextSupport, animate;

(function() {
    var ua = navigator.userAgent,
        iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
        typeOfCanvas = typeof HTMLCanvasElement,
        nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
        textSupport = nativeCanvasSupport && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
    //I'm setting this based on the fact that ExCanvas provides text support for IE
    //and that as of today iPhone/iPad current text support is lame
    labelType = (!nativeCanvasSupport || (textSupport && !iStuff)) ? 'Native' : 'HTML';
    nativeTextSupport = labelType == 'Native';
    useGradients = nativeCanvasSupport;
    animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
    elem: false,
    write: function(text) {
        if (!this.elem)
            this.elem = document.getElementById('log');
        this.elem.innerHTML = text;
        this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
};


function init() {
    //init data
    var json = {
        "children": [{
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "700",
                            "homme": "5 170",
                            "$color": "#b985b2",
                            "titre": "Conduite et pilotage des politiques de l'intérieur",
                            "note": "Création du Conseil national des activités privées de sécurité (Cnaps), dans le cadre de la loi Loopsi. Une part importante des crédits de cette mission est reversée dans les autres programmes de la mission Administration générale et territoriale de l'Etat ou à la mission Sécurité.",
                            "$area": 700,
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,846.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,846.3&chd=t:593,611,651,700&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,846.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,846.3&chd=t:580,593,611,651&chma=|5"
                        },
                        "id": "Conduite et pilotage des politiques de l'intérieur",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "143",
                            "homme": "41",
                            "$color": "#cf9dc8",
                            "titre": "Vie culturelle et associative",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,556.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,556.4&chd=t:268,184,428,143&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,45.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,45.1&chd=t:41,41,41,41&chma=|5",
                            "note": "Financement des partis. Liberté d'association et reconnaissance d'utilité publique.",
                            "$area": 143
                        },
                        "id": "Vie culturelle et associative",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "1 713",
                            "homme": "27 809",
                            "$color": "#cf7fc3",
                            "titre": "Administration territoriale",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2156.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,2156.7&chd=t:1733,1653,1659,1713&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,30529.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,30529.4&chd=t:27754,29029,28262,27809&chma=|5",
                            "note": "Mission des préfectures et des sous-préfectures. Délivrance de titres (carte d'identité, permis...). Certaines missions de sécurité.",
                            "$area": 1713
                        },
                        "id": "Administration territoriale",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "2 556",
                    "$area": 2556,
                    "note": "Fonctionnement des préfectures. Elections présidentielles et politiques. Vie politique. Culte. ",
                    "homme": "33 020",
                    "titre": "Administration générale et territoriale de l'Etat",
                    "$color": "#b972af",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,3560.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,3560.7&chd=t:2595,2449,2739,2556&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,38394.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,38394.4&chd=t:34904,34100,33402,33020&chma=|5",

                },
                "id": "Administration générale et territoriale de l'Etat",
                "name": "<b>ADMINI</b>",
            }, {
                "children": [{
                    "children": [],
                    "data": {
                        "montant": "357",
                        "homme": "3 361",
                        "$color": "#ea6f54",
                        "titre": "Français à l'étranger et affaires consulaires",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,9214.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,9214.7&chd=t:8377,8254,8325,8325&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,3811.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,3811.5&chd=t:3465,3407,3378,3361&chma=|5",
                        "note": "Assurer l'action consulaire. Prise en charge des élèves français dans les lycées de l'AEFE.",
                        "$area": 357
                    },
                    "id": "Français à l'étranger et affaires consulaires",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "749",
                        "homme": "1 048",
                        "$color": "#ea7f68",
                        "titre": "Diplomatie culturelle et d'influence",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,9214.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,9214.7&chd=t:8377,8254,8325,8325&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,9214.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,9214.7&chd=t:8377,8254,8325,8325&chma=|5",
                        "note": "Modernisation du réseau de l'action culturelle. Promotion de l'influence culturelle et intellectuelle du Français.",
                        "$area": 749
                    },
                    "id": "Diplomatie culturelle et d'influence",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "1 866",
                        "homme": "8 325",
                        "$color": "#ea674a",
                        "titre": "Action de la France en Europe et dans le monde",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2324.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,2324.4&chd=t:1702,1813,1788,1866&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,9214.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,9214.7&chd=t:8377,8254,8325,8325&chma=|5",
                        "note": "Maintien de la paix et de la présence française, fonctionnement du réseau diplomatique et de coopération.",
                        "$area": 1866
                    },
                    "id": "Action de la France en Europe et dans le monde",
                    "name": "Maintien paix",

                }],
                "data": {
                    "montant": "2 973",
                    "$area": 2973,
                    "titre": "Action Extérieure de l'Etat",
                    "note": "Action diplomatique et consulaire. Politique culturelle d'influence. Présidence du G20 et G8.",
                    "homme": "12 734",
                    "$color": "#b14e38",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,3816.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,3816.8&chd=t:2624,2965,2936,2973&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,14384.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,14384.7&chd=t:13077,12897,12885,12734&chma=|5",

                },
                "id": "Action Extérieure de l'Etat",
                "name": "<b>DIPLOMATIE</b>",
            }, {
                "children": [{
                    "children": [],
                    "data": {
                        "montant": "739",
                        "homme": "9 616",
                        "$color": "#7cc8e5",
                        "titre": "Conduite et pilotage des politiques de l'agriculture",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,980.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,980.2&chd=t:848,757,754,739&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,11012.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&",
                        "$area": 739
                    },
                    "id": "Conduite et pilotage des politiques de l'agriculture",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "511",
                        "homme": "4 676",
                        "$color": "#9bc8db",
                        "titre": "Sécurité et qualité sanitaires de l'alimentation",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,642.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,642.2&chd=t:561,509,494,511&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,5806.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,5806.9&chd=t:5279,5336,4742,4676&chma=|5",
                        "note": "Maîtrise des risques sanitaires et phytosanitaires. Préventions des maladies humaines d'origine alimentaire. Accès pour tous à une alimentation de bonne qualité nutritionnelle.",
                        "$area": 511
                    },
                    "id": "Sécurité et qualité sanitaires de l'alimentation",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "315",
                        "homme": "Pas de",
                        "$color": "#7cc8e5",
                        "titre": "Forêt",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,470.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,470.6&chd=t:338,371,362,315&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                        "note": "Accroissement de la récole de bois, gestion durable des forêts, subventions pour l'ONF.",
                        "$area": 315
                    },
                    "id": "Forêt",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "1 793",
                        "homme": "Pas de",
                        "$color": "#71b7d2",
                        "titre": "Economie et développement durable de l'agriculture, de la pêche et des territoires",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2581.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,2581.8&chd=t:1861,2030,1986,1793&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                        "note": "Adapatation des filières agricoles.",
                        "$area": 1793
                    },
                    "id": "Economie et développement durable de l'agriculture, de la pêche et des territoires",
                    "name": "Eco. et dévelop.",

                }],
                "data": {
                    "montant": "3 358",
                    "$area": 3358,
                    "note": "Gestion durable des ressources et aménagement du territoire, compétitivité des agriculteurs, sécurité alimentaire",
                    "homme": "14 292",
                    "titre": "Agriculture, pêche, alimentation, forêt et affaires rurales",
                    "$color": "#38a7d2",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,4677.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,4677.4&chd=t:3610,3669,3598,3358&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,17919&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,17919&chd=t:16290,15710,14727,14292&chma=|5",

                },
                "id": "Agriculture, pêche, alimentation, forêt et affaires rurales",
                "name": "<b>RURALITÉ</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "1 959",
                            "homme": "2 380",
                            "$color": "#ea846d",
                            "titre": "Solidarité avec les pays en développement",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2746.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,2746.9&chd=t:2292,2134,2113,1959&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,3067.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,3067.9&chd=t:2789,2667,2517,2380&chma=|5",
                            "note": "",
                            "$area": 1959
                        },
                        "id": "Solidarité avec les pays en développement",
                        "name": "Solidarité",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "1 161",
                            "homme": "0",
                            "$color": "#ea674a",
                            "titre": "Aide économique et financière au développement",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1548.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1548.3&chd=t:1186,1170,1191,1161&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Participation au FMI, à la Banque Mondiale et aux banques régionales. Abonde différents fonds (micro-finance, agriculture, santé).",
                            "$area": 1161
                        },
                        "id": "Aide économique et financière au développement",
                        "name": "Aide au dév.",

                    }
                ],
                "data": {
                    "montant": "3 120",
                    "$area": 3120,
                    "titre": "Aide publique au développement",
                    "$color": "#b14e38",
                    "note": "Aide aux pays les plus pauvres. Financement de projets écologiques et solidaires. Subventions à l'AFD. Aides aux pays en crise comme Haïti et l'Afghanistan.",
                    "homme": "2 380",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,4332.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,4332.9&chd=t:3514,3334,3333,3120&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,3067.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,3067.9&chd=t:2789,2667,2517,2380&chma=|5",

                },
                "id": "dév",
                "name": "<b>DÉVELOP</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "110",
                            "homme": "32",
                            "$color": "#7cc8e5",
                            "titre": "Indemnisation des victimes de persécutions antisémites et des actes de barbarie en 39-45",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,150.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,150.8&chd=t:96,114,116,110&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,40.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,40.7&chd=t:37,37,37,32&chma=|5",
                            "note": "",
                            "$area": 110
                        },
                        "id": "Indemnisation des victimes de persécutions antisémites et des actes de barbarie en 39-45",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "2 838",
                            "homme": "0",
                            "$color": "#71b7d2",
                            "titre": "Reconnaissance et réparation en faveur du monde combattant",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,3823.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,3823.3&chd=t:3181,3070,2941,2838&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,2845.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,2845.7&chd=t:2587,2386,2113,1587&chma=|5",
                            "note": "",
                            "$area": 2838
                        },
                        "id": "Reconnaissance et réparation en faveur du monde combattant",
                        "name": "Réparation",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "119",
                            "homme": "1 587",
                            "$color": "#98d0e5",
                            "titre": "Liens avec la nation et son armée",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,152.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,152.1&chd=t:152,134,117,119&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,2845.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,2845.7&chd=t:2587,2386,2113,1587&chma=|5",
                            "note": "",
                            "$area": 119
                        },
                        "id": "Liens avec la nation et son armée",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "3 068",
                    "$area": 3068,
                    "homme": "1 619",
                    "titre": "Anciens combattants, mémoire et liens avec la nation",
                    "$color": "#38a7d2",
                    "note": "Solidarité et réparation en faveur des anciens combattants et des victimes civiles de la seconde Guerre Mondiale.",
                    "homme": "1619",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,4127.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,4127.5&chd=t:3430,3319,3175,3068&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,4204.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,4204.2&chd=t:3822,3035,2372,1619&chma=|5",

                },
                "id": "ANCIENS COMBATTANTS",
                "name": "<b>COMB.</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "218",
                            "homme": "1 840",
                            "$color": "#ffd854",
                            "titre": "Cour des comptes et autres juridictions financières",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,278.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,278.2&chd=t:211,214,214,218&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,2025.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,2025.1&chd=t:1841,1840,1840,1840&chma=|5",
                            "note": "",
                            "$area": 218
                        },
                        "id": "Cour des comptes et autres juridictions financières",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "39",
                            "homme": "162",
                            "$color": "#ffe89a",
                            "titre": "Conseil économique, social et environnemental",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,48.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,48.1&chd=t:37,37,37,39&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,178.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,178.2&chd=t:162,162,162,162&chma=|5",
                            "note": "",
                            "$area": 39
                        },
                        "id": "Conseil économique, social et environnemental",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "370",
                            "homme": "3 640",
                            "$color": "#ffeaa3",
                            "titre": "Conseil d'Etat et autres juridictions administratives",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,453.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,453.7&chd=t:322,337,349,370&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,3619&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,3619&chd=t:3290,3343,3578,3640&chma=|5",

                            "$area": 370
                        },
                        "id": "Conseil d'Etat et autres juridictions administratives",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "627",
                    "$area": 627,
                    "titre": "Conseil et contrôle de l'Etat",
                    "homme": "5 642",
                    "$color": "#d4b54d",
                    "note": "Crédits aux institutions de conseil et de contrôle de l'Etat et du Gouvernement.",
                    "homme": "5642",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,781.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,781.3&chd=t:570,589,601,627&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,5822.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,5822.3&chd=t:5293,5345,5580,5642&chma=|5",

                },
                "id": "Conseil et contrôle de l'Etat",
                "name": "<b>ET</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "1 086",
                            "homme": "11 014",
                            "$color": "#fcecac",
                            "titre": "Transmissions des savoirs et démocratisation de la culture",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1394.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1394.9&chd=t:849,1076,1073,1086&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,7703.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,7703.3&chd=t:7003,6867,11124,11014&chma=|5",
                            "note": "Coopération européenne. Déploiement du numérique. Education artistique et culturelle.",
                            "$area": 1086
                        },
                        "id": "Transmissions des savoirs et démocratisation de la culture",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "775",
                            "homme": "0",
                            "$color": "#fce794",
                            "titre": "Création",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1023.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1023.1&chd=t:825,736,787,775&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Deux grands projets : la Philharmonie de Paris et la Rénovation du Palais de Tokyo",
                            "$area": 775
                        },
                        "id": "Création",
                        "name": "Créa",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "777",
                            "homme": "0",
                            "$color": "#ffda5d",
                            "titre": "Patrimoines",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1131&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1131&chd=t:1249,868,870,777&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Projet de Musée des civilisations de l'Europe et de la Méditerranée. Centre National des Archives de Pierrefitte-sur-Seine. Mise en place de la Maison de l'Histoire de France. Restauration du patrimoine historique.",
                            "$area": 777
                        },
                        "id": "Patrimoines",
                        "name": "Patrim.",

                    }
                ],
                "data": {
                    "montant": "2 638",
                    "$area": 2638,
                    "titre": "Culture",
                    "homme": "11 014",
                    "$color": "#d4b54d",
                    "note": "Protection, mise en valeur, conservation. Soutien à la création. Enseignement artistique et culturel.",
                    "homme": "11014",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,3551.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,3551.6&chd=t:2924,2682,2732,2638&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,12342&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,12342&chd=t:11220,11007,11124,11014&chma=|5"

                },
                "id": "Culture",
                "name": "<b>CULTURE</b>",
            }, {
                "children": [{
                    "children": [],
                    "data": {
                        "montant": "10 939",
                        "homme": "12 046",
                        "$color": "#81cae7",
                        "titre": "Equipement des forces",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,14367.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,14367.6&chd=t:11343,10712,11052,10939&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,15737.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,15737.7&chd=t:14307,306564,12542,12046&chma=|5",
                        "note": "Financement des programmes d'armement. Avions Rafale(Dassault). Missiles Javelin (US). Flotte de transports aériens (EADS). Frégates. ",
                        "$area": 10939
                    },
                    "id": "Equipement des forces",
                    "name": "Equipement des forces",

                }, {
                    "children": [],
                    "data": {
                        "montant": "2 847",
                        "homme": "13 106",
                        "$color": "#95d0e7",
                        "titre": "Soutien de la politique de la Défense",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,4076.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,4076.8&chd=t:2479,3014,3136,2847&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,11782.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,11782.1&chd=t:10711,11663,12552,13106&chma=|5",
                        "note": "Administration centrale et politique immobilière du Ministère de la Défense.",
                        "$area": 2847
                    },
                    "id": "Soutien de la politique de la Défense",
                    "name": "Politique de la défense",

                }, {
                    "children": [],
                    "data": {
                        "montant": "22 433",
                        "homme": "257 698",
                        "$color": "#76b8d2",
                        "titre": "Préparation et emploi des forces",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,28979.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,28979.6&chd=t:21540,21891,22292,22433&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,309120.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,309120.9&chd=t:281019,273044,265239,257698&chma=|5",
                        "note": "Formation des militaires. Fonctionnement de nos armées. Présences et opérations à l'étranger. ",
                        "$area": 22433
                    },
                    "id": "Préparation et emploi des forces",
                    "name": "Préparation et emploi des forces",

                }, {
                    "children": [],
                    "data": {
                        "montant": "1 905",
                        "homme": "8 761",
                        "$color": "#76b8d2",
                        "titre": "Environnement et prospective de la politique de la défense",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,9496.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,9496.3&chd=t:8633,8861,8673,8761&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2338.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,2338.7&chd=t:1780,1791,1799,1905&chma=|5",
                        "note": "Financement de la DGSE et la DPSD (renseignement et contre-espionnage).",
                        "$area": 1905
                    },
                    "id": "Environnement et prospective de la politique de la défense",
                    "name": "Prosp.",

                }],
                "data": {
                    "montant": "38 124",
                    "$area": 38124,
                    "homme": "291 611",
                    "titre": "Défense",
                    "$color": "#38a7d2",
                    "note": "Sécurité et défense de la France définie par le Livre Blanc.",
                    "homme": "291 611",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,49765.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,49765.3&chd=t:37144,37409,38281,38124&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,346137&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,346137&chd=t:314670,306564,299006,291611&chma=|5",

                },
                "id": "Défense",
                "name": "<b>DÉFENSE</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "558",
                            "homme": "Pas de",
                            "$color": "#9bc8db",
                            "titre": "Moyens mutualisés des administrations déconcentrées",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,581.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,581.1&chd=t:0,438,447,558&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Fonctionnement des services déconcentrées (en province) de l'Etat. Immobilier.",
                            "$area": 558
                        },
                        "id": "Moyens mutualisés des administrations déconcentrées",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "92",
                            "homme": "736",
                            "$color": "#6ea3b9",
                            "titre": "Protection des droits et libertés",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,120.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,120.9&chd=t:85,91,93,92&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,699.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,699.6&chd=t:636,668,720,736&chma=|5",
                            "note": "Financement des Autorités Administratives Indépendantes, comme le CSA, le Défenseur des Droits, la CNIL et le Contrôleur général des lieux de privation de liberté.",
                            "$area": 92
                        },
                        "id": "Protection des droits et libertés",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "560",
                            "homme": "2 814",
                            "$color": "#6ea3b9",
                            "titre": "Coordination du travail gouvernemental",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,778.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,778.7&chd=t:466,579,599,560&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,1985.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,1985.5&chd=t:1805,2140,2272,2814&chma=|5",
                            "note": "Administration territoriale. Légion d'honneur. Mission interministérielle de lutte contre la drogue et la toxicomanie.",
                            "$area": 560
                        },
                        "id": "Coordination du travail gouvernemental",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "1 210",
                    "$area": 1210,
                    "titre": "Direction de l'action du Gouvernement",
                    "$color": "#4898b9",
                    "homme": "3550",
                    "note": "Services rattachés au Premier Ministre, pour l'assistance et le soutien.",
                    "homme": "3550",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1482&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1482&chd=t:552,1109,1140,1210&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,2685.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,2685.1&chd=t:2441,2808,3492,3550&chma=|5",

                },
                "id": "Direction de l'action du Gouvernement",
                "name": "<b>GOUV.</b>",
            }, {
                "children": [{
                        "children": [],
                        "data": {
                            "montant": "2524",
                            "homme": "59 944",
                            "$color": "#91bd79",
                            "titre": "Conduite et pilotage des politiques de l'écologie, de l'énergie, du développement durable et de la mer",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,4639.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,4639.7&chd=t:3872,3581,3569,2524&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,73789.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,73789.1&chd=t:67081,65863,61524,59944&chma=|5",
                            "note": "Mise en place de politiques écologiqueS. Ressources humaines. ",
                            "$area": 2524
                        },
                        "id": "Conduite et pilotage des politiques de l'écologie, de l'énergie, du développement durable et de la mer",
                        "name": "Grenelle",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "687",
                            "homme": "Pas de",
                            "$color": "#b5ec97",
                            "titre": "Energie, climat et après-mines",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,911.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,911.3&chd=t:845,751,701,687&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Pilotage de la politique énergétique. Lutte contre le réchauffement climatique.",
                            "$area": 687
                        },
                        "id": "Energie, climat et après-mines",
                        "name": "Energ.",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "284",
                            "homme": "631",
                            "$color": "#a9dc8d",
                            "titre": "Prévention des risques",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,405.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,405.6&chd=t:306,303,312,284&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,372.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,372.9&chd=t:339,361,361,631&chma=|5",
                            "note": "Sureté nucléaire. Risques chimiques ou biochimiques.",
                            "$area": 284
                        },
                        "id": "Prévention des risques",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "96",
                            "homme": "Pas de",
                            "$color": "#93dc6c",
                            "titre": "Information géographique et cartographique",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,124.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,124.8&chd=t:73,81,96,96&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Subventions pour l'IGN. Préparation de la fusion IGN - IFN (Inventaire Forestier National)",
                            "$area": 96
                        },
                        "id": "Information géographique et cartographique",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "278",
                            "homme": "Pas de",
                            "$color": "#83dc53",
                            "titre": "Urbanisme, paysages, eau et biodiversité",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,449.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,449.8&chd=t:346,345,346,278&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Protection de l'eau et du milieu vivant",
                            "$area": 278
                        },
                        "id": "Urbanisme, paysages, eau et biodiversité",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "215",
                            "homme": "Pas de",
                            "$color": "#72b84c",
                            "titre": "Météorologie",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,269.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,269.1&chd=t:189,198,207,215&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Subventions à Météo France. Renouvelement des supercalculateurs et des radars",
                            "$area": 215
                        },
                        "id": "Météorologie",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "194",
                            "homme": "Pas de",
                            "$color": "#74dc3b",
                            "titre": "Sécurité et affaires maritimes",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,188.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,188.5&chd=t:134,132,145,194&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Sécurité routière. Contrôle des navires étrangers. Réformes de l'enseignement maritime. Création de l'Ecole nationale supérieure maritime. Promotion de la plaisance.",
                            "$area": 194
                        },
                        "id": "Sécurité, sécurité routière et affaires maritimes",
                        "name": "",

                    },


                    {
                        "children": [],
                        "data": {
                            "montant": "4 076",
                            "homme": "Pas de",
                            "$color": "#85b869",
                            "titre": "Infrastructures et services de transports",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,5599.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,5599.1&chd=t:4312,4060,4307,4076&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Réseau ferroviaire français. Compétitivité des ports. Canal Seine-Nord Europe. ",
                            "$area": 4076
                        },
                        "id": "Infrastructures et services de transports",
                        "name": "Transport",

                    }
                ],
                "data": {
                    "montant": "8 355",
                    "$area": 8355,
                    "homme": "60 575",
                    "titre": "Ecologie, développement et aménagement durables",
                    "$color": "#72b84c",
                    "note": "Engagements du Grenelle de l'Environnement. Politique des transports, urbanisme, gestion des milieux naturels, eau... Maitrise de l'énergie. Lutte contre le réchauffement climatique. Prévention des pollutions des risques naturels et technologiques. Sureté nucléaire. ",

                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,12664.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,12664.6&chd=t:10143,9512,9742,8355&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,73789.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,73789.1&chd=t:67081,66224,61885,60575&chma=|5",

                },
                "id": "Ecologie, développement et aménagement durables",
                "name": "<b>ÉCOLOGIE</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "509",
                            "homme": "1 938",
                            "$color": "#84cc5e",
                            "titre": "Statistiques et études économiques",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,657.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,657.8&chd=t:346,485,506,509&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,2902.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,2902.9&chd=t:2639,2275,2017,1938&chma=|5",
                            "note": "",
                            "$area": 509
                        },
                        "id": "Stratégie économique et fiscale",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "455",
                            "homme": "5 140",
                            "$color": "#aacc98",
                            "titre": "Statistiques et études économiques",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,578.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,578.5&chd=t:418,434,445,455&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,6259&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,6259&chd=t:5690,5487,5221,5140&chma=|5",
                            "note": "Subventions à l'INSEE.",
                            "$area": 455
                        },
                        "id": "Statistiques et études économiques",
                        "name": "",

                    },

                    {
                        "children": [],
                        "data": {
                            "montant": "838",
                            "homme": "5 613",
                            "$color": "#7ecc54",
                            "titre": "Développement des entreprises et de l'emploi",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1315.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1315.6&chd=t:1112,1092,1012,838&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,6680.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,6680.3&chd=t:6073,6025,5772,5613&chma=|5",
                            "note": "Financement d'OSEO et d'Ubifrance.",
                            "$area": 838
                        },
                        "id": "Développement des entreprises et du tourisme",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "1 801",
                    "$area": 1801,
                    "titre": "Economie",
                    "homme": "12 691",
                    "$color": "#72b84c",
                    "note": "Favoriser la croissance et l'innovation. Soutien aux entreprises. Aides à l'emploi.",
                    "homme": "12691",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2611.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,2611.7&chd=t:1934,2063,2009,1801&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,15842.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,15842.2&chd=t:14402,13787,13010,12691&chma=|5",

                },
                "id": "Economie",
                "name": "<b>ÉCO</b>",
            }, {
                "children": [{
                        "children": [],
                        "data": {
                            "montant": "1 617",
                            "homme": "Pas de",
                            "$color": "#DB632B",
                            "titre": "Banque Européenne d'investissement",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2000&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,1617&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Augmentation de capital de la Banque Européenne d'investissement",
                            "$area": 1617
                        },
                        "id": "Banque Européenne d'Investissement",
                        "name": "BEI",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "181",
                            "homme": "Pas de",
                            "$color": "#DB632B",
                            "titre": "Majoration de rentes",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,240.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,240.5&chd=t:204,195,185,300&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "",
                            "$area": 300
                        },
                        "id": "",
                        "name": "Maj.",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "6 523",
                            "homme": "Pas de",
                            "$color": "#DB632B",
                            "titre": "Dotation en capital du mécanisme européen de stabilité",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,8000&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,6523&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "$area": 6523,
                            "note": "Dotation en capital du mécanisme européen de stabilité",
                        },
                        "id": "Epargne",
                        "name": "Dotation en capital du mécanisme européen de stabilité",

                    },

                    {
                        "children": [],
                        "data": {
                            "montant": "725",
                            "homme": "Pas de",
                            "$color": "#DB632B",
                            "titre": "Epargne",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1004.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1004.9&chd=t:1254,1121,773,1500&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Financement du Plan Epagne Logement ou Compte Epargne Logement.",
                            "$area": 1500
                        },
                        "id": "Epargne",
                        "name": "Epargne",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "208",
                            "homme": "Pas de",
                            "$color": "#f58e70",
                            "titre": "Appels en garantie de l'Etat",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,245.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,245.7&chd=t:247,227,189&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Dispositifs pour lesquels l'Etat est garant.",
                            "$area": 400
                        },
                        "id": "Appels en garantie de l'Etat",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "46 895",
                            "homme": "Pas de",
                            "$color": "#ea674a",
                            "titre": "Charge de la dette et trésorerie de l'Etat",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,63404.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,63404.9&chd=t:42279,42450,45382,48773&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Ce qu'on appelle communément la dette publique",
                            "$area": 48773
                        },
                        "id": "Charge de la dette et trésorerie de l'Etat",
                        "name": "Charge de la dette",

                    }
                ],
                "data": {
                    "montant": "56 149",
                    "$area": 56149,
                    "note": "Dette de l'Etat envers ses créanciers",
                    "titre": "Engagements financiers de l'Etat",
                    "$color": "#b14e38",
                    "homme": "Pas de",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,64897.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,64897.3&chd=t:44156,46925,49921,56149&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",

                },
                "id": "Engagements financiers de l'Etat",
                "name": "<b>DETTE DE L'ÉTAT</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "1 325",
                            "homme": "14 706",
                            "$color": "#72b86d",
                            "titre": "Enseignement technique agricole",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1697.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1697.8&chd=t:1259,1290,1306,1325&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,17190.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,17190.8&chd=t:15628,15090,14876,14706&chma=|5",
                            "note": "",
                            "$area": 1325
                        },
                        "id": "Enseignement technique agricole",
                        "name": "Enseign. agri.",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "2 149",
                            "homme": "23 866",
                            "$color": "#72b837",
                            "titre": "Soutien de la politique nationale",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2749.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,2749.5&chd=t:2106,2076,2115,2149&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,27991.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,27991.7&chd=t:25447,24614,24142,23866&chma=|5",
                            "note": "Ressources humaines et logistiques.",
                            "$area": 2149
                        },
                        "id": "Soutien de la politique nationale",
                        "name": "Soutien politique nat.",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "7 082",
                            "homme": "130 772",
                            "$color": "#7cc24f",
                            "titre": "Enseignement privé du premier et second degré",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,9236.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,9236.5&chd=t:7041,7086,7105,7082&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,141981.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,141981.4&chd=t:129074,127944,132205,130772&chma=|5",
                            "note": "Rémunération des enseignants du primaire et secondaire. Financement du forfait d'externat.",
                            "$area": 7082
                        },
                        "id": "Enseignement privé du premier et second degré",
                        "name": "Enseignement privé 1er et 2d degré",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "4 183",
                            "homme": "34039",
                            "$color": "#9fd18b",
                            "titre": "Vie de l'élève",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,5163.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,5163.6&chd=t:3757,3884,3972,4138&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,37095.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,37095.3&chd=t:33723,33947,33880,34039&chma=|5",
                            "note": "Rémunération des assistants d'éducation. Bourses et fonds sociaux. Action sociale.",
                            "$area": 4183
                        },
                        "id": "Vie de l'élève",
                        "name": "Vie élève",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "30 402",
                            "homme": "446 053",
                            "$color": "#82ba5e",
                            "titre": "Enseignement public du second degré",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,38572.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,38572.3&chd=t:29043,29414,29671,30402&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,503351.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,503351.2&chd=t:457592,450892,451706,446053&chma=|5",
                            "note": "Rémunération du personnel. Réorganisation de l'offre scolaire pour réduire les sorties sans qualification. Mieux préparer les élèves aux études supérieures. Réforme du lycée.",
                            "$area": 30402
                        },
                        "id": "Enseignement public du second degré",
                        "name": "Enseignement public du second degré",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "18 863",
                            "homme": "318 626",
                            "$color": "#72b84c",
                            "titre": "Enseignement public du premier degré",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,23605.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,23605.4&chd=t:17608,18041,18158,18863&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,365229.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,365229.7&chd=t:332027,326219,326271,318626&chma=|5",
                            "note": "Rémunération du personnel. Socle commun de connaissance et de compétences. Personnalisation des parcours.",
                            "$area": 18863
                        },
                        "id": "Enseignement public du premier degré",
                        "name": "Enseignement public du premier degré",

                    }
                ],
                "data": {
                    "montant": "64 002",
                    "$area": 64002,
                    "homme": "968 062",
                    "titre": "Enseignement scolaire",
                    "$color": "#72b84c",
                    "note": "Objectif : faire acquérir aux élèves les compétences nécessaires à leur insertion sociale, économique et citoyenne. ",
                    "homme": "968 062",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,81029&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,81029&chd=t:60816,61794,62330,64002&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,1092840.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,1092840.1&chd=t:993491,978706,983060,968062&chma=|5",

                },
                "id": "Enseignement scolaire",
                "name": "<b>ENSEIGNEMENT SCOLAIRE</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "217",
                            "homme": "0",
                            "$color": "#c680bc",
                            "titre": "Fonction publique",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,299&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,299&chd=t:221,220,230,217&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "",
                            "$area": 217
                        },
                        "id": "Fonction publique",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "204",
                            "homme": "Pas de",
                            "$color": "#e1aeda",
                            "titre": "Entretien des bâtiments de l'Etat",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,279.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,279.5&chd=t:169,215,215,204&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "",
                            "$area": 204
                        },
                        "id": "Entretien des bâtiments de l'Etat",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "1 597",
                            "homme": "17 063",
                            "$color": "#e194d6",
                            "titre": "Facilitation et sécurisation des échanges",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2090.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,2090.4&chd=t:1544,1607,1608,1597&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,19256.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,19256.6&chd=t:17506,17129,17435,17063&chma=|5",
                            "note": "Assouplissement des formalités douanières pour renforcer l'attractivité. Lutte contre la fraude douanière.",
                            "$area": 1597
                        },
                        "id": "Facilitation et sécurisation des échanges",
                        "name": "Echanges",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "883",
                            "homme": "5 026",
                            "$color": "#fa9cec",
                            "titre": "Conduite et pilotage des politiques économiques et financières",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1158.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1158.3&chd=t:799,908,891,883&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,5907&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,5907&chd=t:5370,4814,5108,5026&chma=|5",
                            "note": "Financement de différentes structures comme l'Inspection générale des finances ou TRACFIN.",
                            "$area": 883
                        },
                        "id": "Conduite et pilotage des politiques économiques et financières",
                        "name": "Pol.",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "209",
                            "homme": "1 155",
                            "$color": "#ad84a7",
                            "titre": "Stratégie des finances publiques et modernisation de l'Etat",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,370.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,370.5&chd=t:309,344,285,209&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,1169.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,1169.3&chd=t:1063,1096,1139,1155&chma=|5",
                            "note": "Modernisation des RH et du système de paie. Régulation des jeux en ligne. Evalution des Politiques publiques. ",
                            "$area": 209
                        },
                        "id": "Stratégie des finances publiques et modernisation de l'Etat",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "8 514",
                            "homme": "116 251",
                            "$color": "#dc9bd3",
                            "titre": "Gestion fiscale et financière de l'Etat et du secteur public local",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,10979.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,10979.8&chd=t:8419,8450,8446,8514&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,136680.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,136680.5&chd=t:124255,121823,118784,116251&chma=|5",
                            "note": "Gestion du secteur public. Gestion des impôts sur les entreprises et les particuliers.",
                            "$area": 8514
                        },
                        "id": "Gestion fiscale et financière de l'Etat et du secteur public local",
                        "name": "Gestion fiscale",

                    }
                ],
                "data": {
                    "montant": "11 625",
                    "$area": 11625,
                    "homme": "139 495",
                    "titre": "Gestion des finances publiques et des ressources humaines",
                    "$color": "#b972af",
                    "note": "Efforts de rationalisation et d'accroissement de la productivité. Plan de départ d'un fonctionnaire sur deux.",
                    "homme": "139491",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,15180.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,15180.1&chd=t:11564,11747,11677,11625&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,163013.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,163013.4&chd=t:148194,145286,142466,139495&chma=|5",

                },
                "id": "Gestion des finances publiques et des ressources humaines",
                "name": "<b>FINANCES PUB. ET R.H</b>",
            }, {
                "children": [


                    {
                        "children": [],
                        "data": {
                            "montant": "66",
                            "homme": "Pas de",
                            "$color": "#e3acdb",
                            "titre": "Intégration et accès à la nationalité française",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,92.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,92.3&chd=t:79,72,71,66&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Financement de l'Office Français de l'Immigration et de l'Intégration. Insertion des migrants. Aides au retour. Financement de la sous-direction des naturalisations, ",
                            "$area": 66
                        },
                        "id": "Intégration et accès à la nationalité française",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "604",
                            "homme": "587",
                            "$color": "#c696c0",
                            "titre": "Immigration et asile",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,728&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,728&chd=t:478,488,560,604&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,674.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,674.3&chd=t:613,615,612,587&chma=|5",
                            "note": "Lutte contre l'immigration illégale. Administration et délivrance de visas. Soutien aux demandeurs d'asile.",
                            "$area": 604
                        },
                        "id": "Immigration et asile",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "671",
                    "$area": 671,
                    "homme": "587",
                    "titre": "Immigration, asile, intégration",
                    "$color": "#b972af",
                    "note": "Lutte contre l'immigration illégale. Administration de visa. Politique d'asile. Aides au retour.",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,820.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,820.3&chd=t:557,561,631,671&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,674.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,674.3&chd=t:613,615,612,587&chma=|5",

                },
                "id": "Immigration, asile, intégration",
                "name": "<b>IMMI</b>",
            }, {
                "children": [{
                    "children": [],
                    "data": {
                        "montant": "5",
                        "homme": "22",
                        "$color": "#d4b54d",
                        "titre": "Conseil supérieur de la magistrature",
                        "image": "Fonctionnement du Conseil supérieur de la magistrature",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                        "note": "",
                        "$area": 5
                    },
                    "id": "Conseil supérieur de la magistrature",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "300",
                        "homme": "1822",
                        "$color": "#fcecac",
                        "titre": "Conduite et pilotage de la politique de la justice",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,364&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,364&chd=t:243,267,280,300&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,1599.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,1599.4&chd=t:1454,1453,1449,1822&chma=|5",
                        "note": "",
                        "$area": 300
                    },
                    "id": "Conduite et pilotage de la politique de la justice",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "340",
                        "homme": "Pas de",
                        "$color": "#ffda5d",
                        "titre": "Accès au droit et à la justice",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,460.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,460.2&chd=t:294,331,354,340&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                        "note": "Financement de l’aide juridictionnelle",
                        "$area": 340
                    },
                    "id": "Accès au droit et à la justice",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "790",
                        "homme": "8 395",
                        "$color": "#fcecac",
                        "titre": "Protection judiciaire de la jeunesse",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1003.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1003.6&chd=t:784,774,757,772&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,9846.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,9846.1&chd=t:8951,8618,8501,8395&chma=|5",
                        "note": "Financement de 20 nouveaux centres éducatifs fermés",
                        "$area": 790
                    },
                    "id": "Protection judiciaire de la jeunesse",
                    "name": "Mineurs",

                }, {
                    "children": [],
                    "data": {
                        "montant": "3 193",
                        "homme": "35 511",
                        "$color": "#ffda5d",
                        "titre": "Administration pénitentiaire",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,3939&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,3939&chd=t:2691,2821,3030,3193&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,36322&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,36322&chd=t:33020,33860,35057,35511&chma=|5",
                        "note": "Fonctionnement du servic public pénitentiaire. Objectif annoncé de 80 000 places de prison à l’horizon 2017.",
                        "$area": 3193
                    },
                    "id": "Administration pénitentiaire",
                    "name": "Prison",

                }, {
                    "children": [],
                    "data": {
                        "montant": "3 066",
                        "homme": "31 137",
                        "$color": "#fce794",
                        "titre": "Justice judiciaire",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,3871.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,3871.4&chd=t:2835,2960,2978,3066&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,32224.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,32224.5&chd=t:29295,29653,31018,31137&chma=|5",
                        "note": "Fonctionnement de la justice française. Fonctionnement du casier judiciaire national. Formation des professionnels.",
                        "$area": 3066
                    },
                    "id": "Justice judiciaire",
                    "name": "Justice Judiciaire",

                }],
                "data": {
                    "montant": "7 693",
                    "$area": 7693,
                    "titre": "Justice",
                    "homme": "76 887",
                    "note": "Activité des juridictions, service public pénitentiaire, protection judiciaire de la jeunesse, aide juridictionnelle.",
                    "$color": "#d4b54d",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,9646&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,9646&chd=t:6844,7138,7420,7693&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,80023.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,80023.9&chd=t:72749,73594,76025,76887&chma=|5",

                },
                "id": "Justice",
                "name": "<b>JUSTICE</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "149",
                            "homme": "Pas de",
                            "$color": "#DB632B",
                            "titre": "Action audiovisuelle extérieure",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,195&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,195&chd=t:198,206,150,149&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Financement de RFI, France 24 et TV5 Monde",
                            "$area": 149
                        },
                        "id": "Action audiovisuelle extérieure",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "285",
                            "homme": "Pas de",
                            "$color": "#DB632B",
                            "titre": "Contribution à l'audiovisuel et à la diversité radiophonique",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,613.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,613.6&chd=t:497,523,472,285&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Dotation pour France Télévisions. Fin de l'aide spécifique du passage au numérique pour France Télévisions. Aides aux radios locales associatives.",
                            "$area": 285
                        },
                        "id": "Contribution à l'audiovisuel et à la diversité radiophonique",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "267",
                            "homme": "Pas de",
                            "$color": "#CB4F15",
                            "titre": "Livre et industries culturelles",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,356.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,356.2&chd=t:0,303,274,267&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Soutien au Livre. Restauration du quadrilatère Richelieu. Financement d'Hadopi.",
                            "$area": 267
                        },
                        "id": "Livre et industries culturelles",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "514",
                            "homme": "Pas de",
                            "$color": "#BD5321",
                            "titre": "Presse",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,507&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,507&chd=t:417,419,390,514&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Aides à la presse. Fin de l'aide triennale exceptionnelle suite aux Etats Généraux de la presse écrite (2008)",
                            "$area": 514
                        },
                        "id": "Presse",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "1 216",
                    "$area": 1216,
                    "homme": "Pas de",
                    "note": "Aides à la presse, au livre, aux industries culturelles et aux radios associatives locales. Financement (partiel) de France Télévisions et des organismes de l’Audiovisuel extérieur de la France.",
                    "titre": "Médias, livres et industries culturelles",
                    "$color": "#C65B2A",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1674.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1674.4&chd=t:1142,1451,1288,1216&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",

                },
                "id": "MED.",
                "name": "<b>MED.</b>",
            }, {
                "children": [


                    {
                        "children": [],
                        "data": {
                            "montant": "646",
                            "homme": "0",
                            "$color": "#eaa191",
                            "titre": "Conditions de vie outre-mer",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,833.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,833.3&chd=t:720,646,641,646&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Développement du logement social. Lutte contre l'habitat insalubre.",
                            "$area": 646
                        },
                        "id": "Conditions de vie outre-mer",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "1 393",
                            "homme": "4 866",
                            "$color": "#ea674a",
                            "titre": "Emploi outre-mer",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1810.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1810.9&chd=t:1191,1302,1330,1393&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,4086.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,4086.5&chd=t:3715,3789,4176,4866&chma=|5",
                            "note": "Création de zones franches, recentrage des exonérations patronales sur les bas salaires et les petites entreprises. Aide au fret pour limiter le manque de compétitivité des département ultra-marins.",
                            "$area": 1393
                        },
                        "id": "Emploi outre-mer",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "2 039",
                    "$area": 2039,
                    "note": "Amélioration des conditions de vie et du développement économique local.",
                    "homme": "4 866",
                    "titre": "Outre-mer",
                    "$color": "#b14e38",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2644.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,2644.2&chd=t:2023,1977,2034,2039&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,4086.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,4086.5&chd=t:3715,3789,4176,4866&chma=|5",

                },
                "id": "Outre-mer",
                "name": "<b>OUTREMER</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "41",
                            "homme": "Pas de",
                            "$color": "#599db8",
                            "titre": "Interventions territoriales de l'Etat",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,46.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,46.8&chd=t:36,34,36,41&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Aide exceptionnelle d'investissement pour la Corse. Plan Eau-Agriculture en Bretagne. Aide au Marais Poitevin. Plan chlordécone en Guadeloupe et en Martinique.",
                            "$area": 41
                        },
                        "id": "Interventions territoriales de l'Etat",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "280",
                            "homme": "136",
                            "$color": "#66b4d2",
                            "titre": "Impulsion et coordination de la politique d'aménagement du territoire",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,395.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,395.2&chd=t:340,286,304,280&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,176&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,176&chd=t:160,148,141,136&chma=|5",
                            "note": "Financement des pôles d'excellence rurale. Contrats Etat-Régions.",
                            "$area": 280
                        },
                        "id": "Impulsion et coordination de la politique d'aménagement du territoire",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "321",
                    "$area": 321,
                    "homme": "136",
                    "note": "Aménagement du territoire",
                    "titre": "Politiques des territoires",
                    "$color": "#38a7d2",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,442&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,442&chd=t:376,321,340,321&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,176&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,176&chd=t:160,148,141,136&chma=|5",

                },
                "id": "Politiques des territoires",
                "name": "<b>TER</b>",
            }, {
                "children": [


                    {
                        "children": [],
                        "data": {
                            "montant": "817",
                            "homme": "Pas de",
                            "$color": "#70a8ba",
                            "titre": "Cour de Justice de la République",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1.3&chd=t:1,1,1,1&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "",
                            "$area": 817
                        },
                        "id": "Cour de Justice de la République",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "10",
                            "homme": "Pas de",
                            "$color": "#3e8da6",
                            "titre": "Conseil constitutionnel",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,13&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,13&chd=t:11,11,10,10&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "",
                            "$area": 10
                        },
                        "id": "Conseil constitutionnel",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "35",
                            "homme": "Pas de",
                            "$color": "#5a9db9",
                            "titre": "La Chaîne Parlementaire",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,45.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,45.5&chd=t:30,32,35,35&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "",
                            "$area": 35
                        },
                        "id": "La Chaîne Parlementaire",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "333",
                            "homme": "Pas de",
                            "$color": "#79a6b9",
                            "titre": "Sénat",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,432.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,432.9&chd=t:327,327,333,333&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "",
                            "$area": 333
                        },
                        "id": "Sénat",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "533",
                            "homme": "Pas de",
                            "$color": "#549cb9",
                            "titre": "Assemblée Nationale",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,692.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,692.9&chd=t:533,533,533,533&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "",
                            "$area": 533
                        },
                        "id": "Assemblée Nationale",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "111",
                            "homme": "Pas de",
                            "$color": "#6da3b9",
                            "titre": "Présidence de la République",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,144.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,144.3&chd=t:112,112,112,111&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "",
                            "$area": 111
                        },
                        "id": "Présidence de la République",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "1 026",
                    "$area": 1026,
                    "homme": "Pas de",
                    "note": "Fonctionnement des institutions françaises.",
                    "titre": "Pouvoirs publics",
                    "$color": "#4898b9",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1333.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1333.8&chd=t:1022,1017,1016,1026&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",

                },
                "id": "Pouvoirs publics",
                "name": "<b>POUV</b>",
            }, {
                "children": [


                ],
                "data": {
                    "montant": "34",
                    "$area": 34,
                    "homme": "Pas de",
                    "titre": "Provisions",
                    "note": "Financement des mesures générales en matière de rémunérations publiques. Dépenses accidentelles.",
                    "$color": "#C65B2A",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,231.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,231.4&chd=t:58,34,178,34&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",

                },
                "id": "Provisions",
                "name": "<b>P</b>",
            }, {
                "children": [{
                    "children": [],
                    "data": {
                        "montant": "308",
                        "homme": "2 676",
                        "$color": "#fce794",
                        "titre": "Enseignement supérieur et recherche agricoles",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,399.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,399.1&chd=t:303,300,307,308&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,2946.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,2946.9&chd=t:2679,2676,2676,2676&chma=|5",
                        "note": "Financer l'enseignement supérieur et la recherche agricoles, notamment en partenariat avec l'INRA.",
                        "$area": 308
                    },
                    "id": "Enseignement supérieur et recherche agricoles",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "119",
                        "homme": "Pas de",
                        "$color": "#fce794",
                        "titre": "Recherche culturelle et culture scientifique",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,161.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,161.2&chd=t:160,125,124,119&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                        "note": "Diffusion de la culture scientifique après du grand public.",
                        "$area": 119
                    },
                    "id": "Recherche culturelle et culture scientifique",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "192",
                        "homme": "Pas de",
                        "$color": "#fcecac",
                        "titre": "Recherche duale, civile et militaire",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,254.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,254.8&chd=t:196,196,196,192&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                        "note": "Recherche en lien avec l'armée française (exemple : l'aérospatial).",
                        "$area": 192
                    },
                    "id": "Recherche duale, civile et militaire",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "1 006",
                        "homme": "1 334",
                        "$color": "#ffda5d",
                        "titre": "Recherche et enseignement supérieur en matière économique et industrielle",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1297.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1297.4&chd=t:937,1076,998,1006&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,1430&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,1430&chd=t:1300,1310,1314,1334&chma=|5",
                        "note": "Organismes de formation supérieure et de recherche. Soutien et diffusion de l'innovation technologique. Soutien de la recherche industrielle stratégique",
                        "$area": 1006
                    },
                    "id": "Recherche et enseignement supérieur en matière économique et industrielle",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "1 378",
                        "homme": "Pas de",
                        "$color": "#fce794",
                        "titre": "Recherche dans les domaines de l'énergie, du développement et de l'aménagement durables",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1770.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1770.6&chd=t:1296,1371,1362,1378&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                        "note": "Risques. Transport et habitat. Pollution. Energies.",
                        "$area": 1378
                    },
                    "id": "Recherche dans les domaines de l'énergie, du développement et de l'aménagement durables",
                    "name": "",

                }, {
                    "children": [],
                    "data": {
                        "montant": "1 413",
                        "homme": "Pas de",
                        "$color": "#ffda5d",
                        "titre": "Recherche spaciale",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1817.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1817.4&chd=t:1302,1392,1398,1413&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                        "note": "Financement du CNES (Centre national d'études spatial).",
                        "$area": 1413
                    },
                    "id": "Recherche spaciale",
                    "name": "Spac.",

                }, {
                    "children": [],
                    "data": {
                        "montant": "1 282",
                        "homme": "Pas de",
                        "$color": "#fcecac",
                        "titre": "Recherches dans le domaine de la gestion des milieux et des ressources",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1625&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1625&chd=t:1238,1243,1250,1282&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                        "note": "Subventions pour l'INRA (agronomie), le CEMAGREF (machinisme), l'IRD (développement), le CIRAD (agronomie), l'IFREMER (mer) ou le BRGM (mines).",
                        "$area": 1282
                    },
                    "id": "Recherches dans le domaine de la gestion des milieux et des ressources",
                    "name": "Milieux",

                }, {
                    "children": [],
                    "data": {
                        "montant": "5 159",
                        "homme": "Pas de",
                        "$color": "#fce794",
                        "titre": "Recherches scientifiques et technologies pluridisciplinaires",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,6658.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,6658.6&chd=t:5169,5124,5122,5129&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                        "note": "Subventions pour le CNRS, l'INSERM, l'INRIA ou le CEA",
                        "$area": 5159
                    },
                    "id": "Recherches scientifiques et technologies pluridisciplinaires",
                    "name": "Recherche scientifique",

                }, {
                    "children": [],
                    "data": {
                        "montant": "2 325",
                        "homme": "Pas de",
                        "$color": "#fcecac",
                        "titre": "Vie étudiante",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2818.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,2818.4&chd=t:2014,2082,2168,2325&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                        "note": "Bourses. Amélioration du logement édudiant.",
                        "$area": 2325
                    },
                    "id": "Vie étudiante",
                    "name": "Vie étudiante",

                }, {
                    "children": [],
                    "data": {
                        "montant": "12 753",
                        "homme": "17 298",
                        "$color": "#ffda5d",
                        "titre": "Formations supérieures et recherche universitaire",
                        "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,16263&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,16263&chd=t:12145,12272,12510,12753&chma=|5",
                        "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,125551.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,125551.8&chd=t:114138,53513,24485,17298&chma=|5",
                        "note": "Financement de 219 projets de recherches dans le cadre des Investissements d'Avenir. Réforme et préparation à l'autonomie des universités. ",
                        "$area": 12753
                    },
                    "id": "Formations supérieures et recherche universitaire",
                    "name": "Formations supérieures et recherche universitaire",

                }],
                "data": {
                    "montant": "25 935",
                    "homme": "21 308",
                    "$area": 25935,
                    "note": "Politique d'enseignement supérieur, de recherche et de soutien à l'innovation. Aides aux étudiants. Contribution de la France aux organisations internationales de recherche.",
                    "$color": "#d4b54d",
                    "titre": "Recherche et enseignement supérieur",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,33070.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,33070.7&chd=t:24763,25183,25439,25935&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,131998.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,131998.9&chd=t:119999,57988,28495,21308&chma=|5",

                },
                "id": "Recherche et enseignement supérieur",
                "name": "<b>RECHERCHE ET SUPÉRIEUR</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "1 519",
                            "homme": "Pas de",
                            "$color": "#DB632B",
                            "titre": "Régimes sociaux et de retraite de la SEITA et divers",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,2186.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,2186.6&chd=t:1110,1353,1682,1519&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Régimes sociaux des mineurs, des anciens de l'ORTF, de l'Imprimerie Nationale ou des régies ferroviaires d'outre-mer.",
                            "$area": 1519
                        },
                        "id": "Régimes sociaux et de retraite de la SEITA et divers",
                        "name": "Seita",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "840",
                            "homme": "Pas de",
                            "$color": "#CB4F15",
                            "titre": "Régimes sociaux et de retraite des marins",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1112.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1112.8&chd=t:792,797,856,840&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Marins.",
                            "$area": 840
                        },
                        "id": "Régimes sociaux et de retraite des marins",
                        "name": "Marins",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "4 084",
                            "homme": "Pas de",
                            "$color": "#BD5321",
                            "titre": "Régimes sociaux et de retraite des transports terrestres",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,5304&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,5304&chd=t:3824,3876,4080,4084&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Agents de la SNCF ou de la RATP.",
                            "$area": 4084
                        },
                        "id": "Régimes sociaux et de retraite des transports terrestres",
                        "name": "Transport",

                    }
                ],
                "data": {
                    "montant": "6 543",
                    "$area": 6543,
                    "homme": "Pas de",
                    "note": "Régimes spéciaux de retraite.",
                    "titre": "Régimes sociaux et de retraite",
                    "$color": "#C65B2A",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,8603.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,8603.4&chd=t:5726,6027,6618,6543&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",

                },
                "id": "Régimes sociaux et de retraite",
                "name": "<b>RÉGIMES SOC.</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "537",
                            "homme": "Pas de",
                            "$color": "#ffb26c",
                            "titre": "Concours financiers spécifiques et administrations",
                            "image": "",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,452.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,452.4&chd=t:468,476,348,537&chma=|5",
                            "note": "Aides exceptionnelles. Transfert de compétences.",
                            "$area": 537
                        },
                        "id": "Concours financiers spécifiques et administrations",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "906",
                            "homme": "Pas de",
                            "$color": "#ffcda1",
                            "titre": "Concours financiers aux régions",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1162.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1162.2&chd=t:893,894,894,906&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Décentralisation.",
                            "$area": 906
                        },
                        "id": "Concours financiers aux régions",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "488",
                            "homme": "Pas de",
                            "$color": "#ffbd82",
                            "titre": "Concours financiers aux départements",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,638.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,638.3&chd=t:487,491,491,488&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Décentralisation. Gestion des territoires ruraux.",
                            "$area": 488
                        },
                        "id": "Concours financiers aux départements",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "807",
                            "homme": "Pas de",
                            "$color": "#ffa656",
                            "titre": "Concours financiers aux communes et regroupements de communes",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1014&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1014&chd=t:774,775,780,807&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Soutien à l'investissement local, compensation des charges transférées à ces collectivités, développement de l'intercommunalité.",
                            "$area": 807
                        },
                        "id": "Concours financiers aux communes et regroupements de communes",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "2 738",
                    "$area": 2738,
                    "note": "Versement financier dû à la décentralisation. Effort de l'état envers les collectivités territoriales.",
                    "titre": "Relations avec les collectivités territoriales",
                    "$color": "#e1d190",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,3268.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,3268.2&chd=t:2624,2638,2514,2738&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",

                },
                "id": "Relations avec les collectivités territoriales",
                "name": "<b>COL. LOC.</b>",
            },

            {
                "children": [


                    {
                        "children": [],
                        "data": {
                            "montant": "588",
                            "homme": "Pas de",
                            "$color": "#ffe796",
                            "titre": "Protection maladie",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,829.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,829.4&chd=t:585,638,638,588&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Aide médicale de l'Etat. Victimes de l'amiante. Auparavant, la CMU (Couverture Maladie Universelle)complémentaire.",
                            "$area": 588
                        },
                        "id": "Protection maladie",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "700",
                            "homme": "Pas de",
                            "$color": "#ffda5d",
                            "titre": "Prévention, sécurité sanitaire et offre de soins",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,959.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,959.4&chd=t:612,583,738,700&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Projets régionaux de santé. Modernisation de l'offre de soins. Pilotage de la politique de santé publique. Préparation de la réforme du médicament et création de ANSM, l'Agence de Sécurité du Médicament.",
                            "$area": 700
                        },
                        "id": "Prévention, sécurité sanitaire et offre de soins",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "1 288",
                    "$area": 1288,
                    "homme": "Pas de",
                    "titre": "Santé",
                    "note": "Développer la prévention. Organiser une offre de soins de qualité et efficace Assurer la sécurité sanitaire. Favoriser l’accès aux soins et l’indemnisation des publics les plus défavorisés.",
                    "$color": "#d4b54d",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1788.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1788.8&chd=t:1197,1221,1376,1288&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",

                },
                "id": "Santé",
                "name": "<b>SANTÉ</b>",
            }, {
                "children": [


                    {
                        "children": [],
                        "data": {
                            "montant": "7968",
                            "homme": "95 883",
                            "$color": "#b985b2",
                            "titre": "Gendarmerie nationale",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,10207.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,10207.6&chd=t:7514,7722,7852,7968&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,109459.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,109459.9&chd=t:99509,98155,97068,95883&chma=|5",
                            "note": "Maintien de l'ordre public.  Maintenance des casernes. Réorganisation du système des grades.",
                            "$area": 7968
                        },
                        "id": "Gendarmerie nationale",
                        "name": "Gendarmerie nationale",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "9 522",
                            "homme": "143 716",
                            "$color": "#e1a3d9",
                            "titre": "Police Nationale",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,11973&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,11973&chd=t:8858,9038,9210,9522&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,160798&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,160798&chd=t:146180,144790,145434,143716&chma=|5",
                            "note": "Maintien de l'ordre public. Sécurité routière. Police des étrangers. Police Judiciaire. Financement de l'INPS (police scientifique) et l'ENSP (formation des policiers). Amélioration du matériel (comme la vidéo embarquée). Maintenance des commissariats. Vidéo-surveillance.",
                            "$area": 9522
                        },
                        "id": "Police nationale",
                        "name": "Police nationale",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "130",
                            "homme": "0",
                            "$color": "#e1a3d9",
                            "titre": "Sécurité routière",
                            "note": "Sécurité routière",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "$area": 130
                        },
                        "id": "Sécurité routière",
                        "name": "Sécurité routière",

                    }
                ],
                "data": {
                    "montant": "17620",
                    "$area": 17620,
                    "homme": "239 599",
                    "note": "Moyens de la police et de la gendarmerie nationales. Lutte contre la délinquance. Objectif pour 2012 : plus de visibilité et de proximité.",
                    "titre": "Sécurité",
                    "$color": "#b972af",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,22181.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,22181.9&chd=t:16372,16805,17063,17620&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,270257.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,270257.9&chd=t:245689,242945,242502,239599&chma=|5",

                },
                "id": "Sécurité",
                "name": "<b>SÉCURITÉ</b>",
            }, {
                "children": [


                    {
                        "children": [],
                        "data": {
                            "montant": "161",
                            "homme": "Pas de",
                            "$color": "#90b87b",
                            "titre": "Coordination des moyens de secours",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,231.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,231.4&chd=t:191,170,178,161&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Rénovation du système d'alerte. Nouvelles bases héliportées en Guadeloupe et Martinique. Refonte du système de déminage.",
                            "$area": 161
                        },
                        "id": "Coordination des moyens de secours",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "278",
                            "homme": "2 464",
                            "$color": "#59b826",
                            "titre": "Interventions des services opérationnels",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,351&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,351&chd=t:264,254,270,278&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,2313.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,2313.3&chd=t:2103,2499,2472,2464&chma=|5",
                            "note": "Interventions en cas de catastrophes. Lutte contre les feux de forêts. Secours par hélicoptère.",
                            "$area": 278
                        },
                        "id": "Interventions des services opérationnels",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "440",
                    "$area": 440,
                    "homme": "2 464",
                    "note": "Protection des populations. Gestion des crises. Grands programmes d'investissements (système d'alerte). Création de bases héliportées en Guadeloupe et Martinique.",
                    "titre": "Sécurité civile",
                    "$color": "#72b84c",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,582.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,582.4&chd=t:455,434,448,440&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,2768.7&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,2768.7&chd=t:2517,2499,2472,2464&chma=|5",

                },
                "id": "Sécurité civile",
                "name": "<b>CIV</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "1561",
                            "homme": "11 285",
                            "$color": "#CB4F15",
                            "titre": "Conduite et soutien des politiques sanitaires, sociales, du sport, de la jeunesse et de la vie associative",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1930.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1930.5&chd=t:1140,1525,1485,1561&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,14995.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,14995.2&chd=t:13632,10305,12326,11285&chma=|5",
                            "note": "Agences Régionales de Santé. Politiques du sport. Gestion des politiques sociales.",
                            "$area": 1561
                        },
                        "id": "Conduite et soutien des politiques sanitaires, sociales, du sport, de la jeunesse et de la vie associative",
                        "name": "Pol.",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "23",
                            "homme": "Pas de",
                            "$color": "#ea846d",
                            "titre": "Egalité hommes-femmes",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,26&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,26&chd=t:29,21,20,23&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Subventions pour près de 1300 associations (droits des femmes, lutte contre la prostitution, viol, planning familial....)",
                            "$area": 23
                        },
                        "id": "Egalité hommes-femmes",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "11 169",
                            "homme": "Pas de",
                            "$color": "#ea846d",
                            "titre": "Handicap et dépendance",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,13625.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,13625.3&chd=t:9014,9885,10481,11169&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Aides aux personnes handicapées (AAH). Création des maisons du Handicap. Insertion professionnnelle. Aides aux personnes âgées.",
                            "$area": 11169
                        },
                        "id": "Handicap et dépendance",
                        "name": "Handicap / dépendance",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "245",
                            "homme": "Pas de",
                            "$color": "#CB4F15",
                            "titre": "Actions en faveur des familles vulnérables",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,301.6&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,301.6&chd=t:408,242,232,245&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Protection des enfants. Soutien aux familles, notamment monoparentales. Subvention à l'Agence Française de l'Adoption.",
                            "$area": 245
                        },
                        "id": "Actions en faveur des familles vulnérables",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "404",
                            "homme": "Pas de",
                            "$color": "#DB632B",
                            "titre": "Lutte contre la pauvreté : RSA et expérimentations sociales",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,695.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,695.5&chd=t:1607,691,535,404&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Financement partiel du RSA. Expérimentations sociales.",
                            "$area": 404
                        },
                        "id": "Lutte contre la pauvreté. RSA et expérimentations sociales",
                        "name": "RSA",

                    }
                ],
                "data": {
                    "montant": "14 403",
                    "$area": 13403,
                    "homme": "11 285",
                    "note": "Offrir un revenu minimum aux personnes vulnérables. Favoriser l'insertion professionnelle.",
                    "titre": "Solidarité, insertion, égalité des chances",
                    "$color": "#C65B2A",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,16578.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,16578.9&chd=t:12290,12365,12753,13403&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,15210.8&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,15210.8&chd=t:13828,10496,12326,11285&chma=|5"
                },
                "id": "Solidarité, insertion, égalité des chances",
                "name": "<b>SOLIDARITÉ</b>",
            }, {
                "children": [


                    {
                        "children": [],
                        "data": {
                            "montant": "232",
                            "homme": "Pas de",
                            "$color": "#CB4F15",
                            "titre": "Vie associative",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,299&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,299&chd=t:193,213,230,232&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Vie associative. Service civique.",
                            "$area": 232
                        },
                        "id": "Vie associative",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "238",
                            "homme": "Pas de",
                            "$color": "#BD5321",
                            "titre": "Sport",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,321.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,321.1&chd=t:233,216,247,238&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Développement du sport haut-niveau et grand public. Lutte contre le dopage. Vie associative. Service civique.",
                            "$area": 238
                        },
                        "id": "Sport",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "470",
                    "$area": 470,
                    "homme": "Pas de",
                    "note": "Développement du sport haut-niveau et grand public. Lutte contre le dopage.",
                    "titre": "Sport, jeunesse et vie associative",
                    "$color": "#C65B2A",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,620.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,620.1&chd=t:854,430,477,470&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5"
                },
                "id": "Sport, jeunesse et vie associative",
                "name": "<b>SPO</b>",
            }, {
                "children": [

                    {
                        "children": [],
                        "data": {
                            "montant": "783",
                            "homme": "9 899",
                            "$color": "#fceaa1",
                            "titre": "Conception, gestion et évaluation des politiques de l'emploi et du travail",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,965.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,965.9&chd=t:811,744,743,783&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,11946&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,11946&chd=t:10860,10680,10068,9899&chma=|5",
                            "note": "Moyens de soutien dédiés aux autres programmes de la mission. Etudes statistiques et recherche. Fond social européen.",
                            "$area": 783
                        },
                        "id": "Conception, gestion et évaluation des politiques de l'emploi et du travail",
                        "name": "Politiques",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "79",
                            "homme": "Pas de",
                            "$color": "#ffda5d",
                            "titre": "Amélioration de la qualité de l'emploi et des relations du travail",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,104&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,104&chd=t:78,86,80,79&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Santé et sécurité au travail, respect du droit, dialogue social et lutte contre le travail illégal.",
                            "$area": 79
                        },
                        "id": "Amélioration de la qualité de l'emploi et des relations du travail",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "3 739",
                            "homme": "Pas de",
                            "$color": "#fce794",
                            "titre": "Accompagnements des mutations économique et développement de l'emploi",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,5193.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,5193.5&chd=t:4634,4544,3995,3739&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Financement de l'alternance. Prévention du licenciement. Aides au reclassement des salariés. Financement de l'AFPA (formations professionnelles). ",
                            "$area": 3739
                        },
                        "id": "Accompagnements des mutations économiques et développement de l'emploi",
                        "name": "Mutations éco.",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "5 716",
                            "homme": "Pas de",
                            "$color": "#ffda5d",
                            "titre": "Accès et retour à l'emploi",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,6977.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,6977.1&chd=t:5878,6199,5367,5716&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Retour à l'emploi. Financement des contrats aidés. Fonds de solidarité pour les demandeurs d'emploi en fin de droits. Insertion. Financement de Pôle Emploi.",
                            "$area": 5716
                        },
                        "id": "Accès et retour à l'emploi",
                        "name": "Accès / retour à l'emploi",

                    }
                ],
                "data": {
                    "montant": "10 316",
                    "$area": 10316,
                    "homme": "9 899",
                    "note": "Actions en faveur de l’emploi et de la lutte contre le chômage. Soutien direct à l’emploi, au reclassement ou à la formation des demandeurs d’emploi. Formation professionnelle. Financement de l’allocation spécifique de solidarité (pour les demandeurs d'emploi en fin de droits). Financement de Pôle Emploi.",
                    "titre": "Travail et emploi",
                    "$color": "#d4b54d",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,13243.1&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,13243.1&chd=t:11402,11574,10187,10316&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,11946&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,11946&chd=t:10860,10680,10068,9899&chma=|5"

                },
                "id": "Travail et emploi",
                "name": "<b>TRAVAIL / EMPLOI</b>",
            }, {
                "children": [{
                        "children": [],
                        "data": {
                            "montant": "504",
                            "homme": "Pas de",
                            "$color": "#f4a46c",
                            "titre": "Politique de la ville et Grand Paris",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,712.4&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,712.4&chd=t:704,624,548,504&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Renovation urbaine. Contrats urbains de cohésion sociale. Equilibre socioéconomique entre les communes. Création de Zones franches. Programme Réussite éducative ou Adultes relais.",
                            "$area": 504
                        },
                        "id": "Politique de la ville",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "816",
                            "homme": "Pas de",
                            "$color": "#f4a46c",
                            "titre": "Conduite des politiques de l'égalité des territoires, du logement et de la ville",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Renovation urbaine. Contrats urbains de cohésion sociale. Equilibre socioéconomique entre les communes. Création de Zones franches. Programme Réussite éducative ou Adultes relais.",
                            "$area": 816
                        },
                        "id": "Conduite des politiques de l'égalité des territoires, du logement et de la ville",
                        "name": "",

                    },


                    {
                        "children": [],
                        "data": {
                            "montant": "562",
                            "homme": "Pas de",
                            "$color": "#f7ab62",
                            "titre": "Urbanisme, territoires et amélioration de l'offre de logement",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,474.5&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,474.5&chd=t:629,501,365,562&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Développement de l'offre de logement social. Soutien à l'accession à la propriété. PTZ+. Lutte contre l'habitat indigne.",
                            "$area": 562
                        },
                        "id": "Urbanisme, territoires et amélioration de l'offre de logement",
                        "name": "",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "4 893",
                            "homme": "Pas de",
                            "$color": "#ffbe83",
                            "titre": "Accès à l'aide au logement",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,7283.9&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,7283.9&chd=t:5369,5301,5603,4893&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "Financement des aides au logement, APL ou APS.",
                            "$area": 4893
                        },
                        "id": "Accès à l'aide au logement",
                        "name": "Aide au logement",

                    }, {
                        "children": [],
                        "data": {
                            "montant": "1 223",
                            "homme": "Pas de",
                            "$color": "#ffaa5d",
                            "titre": "Prévention de l'exclusion et insertion des personnes vulnérables",
                            "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,1565.2&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,1565.2&chd=t:1101,1204,1204,1223&chma=|5",
                            "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",
                            "note": "",
                            "$area": 1223
                        },
                        "id": "Prévention de l'exclusion et insertion des personnes vulnérables",
                        "name": "",

                    }
                ],
                "data": {
                    "montant": "7 998",
                    "homme": "Pas de",
                    "$area": 7998,
                    "titre": "Ville et logement",
                    "$color": "#ff9739",
                    "note": "Favoriser l'accès au logement, proposer une offre diversifiée. Aides au logement. Lutter contre l'habitat indigne. Rénovation urbaine. Solutions d'hébergement pour les personnes en grande difficulté. ",
                    "image": "http://chart.apis.google.com/chart?chxl=1:|2010|2011|2012|2013&chxr=0,0,10037.3&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=21538594&chds=0,10037.3&chd=t:7806,7631,7721,7998&chma=|5",
                    "image1": "http://chart.apis.google.com/chart?chxl=1:|2009|2010|2011|2012&chxr=0,0,0&chxt=y,x&chbh=33,4,7&chs=200x150&cht=bvs&chco=F4453D9E&chds=0,0&chd=t:0,0,0,0&chma=|5",

                },
                "id": "Egalité des territoires, ville et logement",
                "name": "<b>VILLE</b>",
            }

        ],

        "data": {
            "$color": "#000000",
            "montant": "291",
            "titre": "Budget prévisionnel"
        },
        "id": "root",
        "name": ""
    };
    //end
    //init TreeMap
    var tm = new $jit.TM.Squarified({
        //where to inject the visualization
        injectInto: 'infovis',
        //parent box title heights
        titleHeight: 22,

        //enable animations
        animate: animate,
        //box offsets
        offset: 0.8,
        //Attach left and right click events
        Events: {
            enable: true,
            onClick: function(node) {
                if (node) tm.enter(node);
            },
            onRightClick: function() {
                tm.out();

            }
        },
        duration: 0,
        //Enable tips
        Tips: {
            enable: true,
            //add positioning offsets
            offsetX: 5,
            offsetY: 5,
            //implement the onShow method to
            //add content to the tooltip when a node
            //is hovered
            onShow: function(tip, node, isLeaf, domElement) {
                var html = "<div class=\"tip-title\">" + "</div><div class=\"tip-text\">";
                var data = node.data;
                if (data.titre) {
                    html += "<div class=\"surtitre\">" + data.titre + "</div>" + "</br>";
                }
                if (data.note) {
                    html += "<div class=\"note\">" + data.note + "</div></br>";
                }

                if (data.montant) {
                    html += "<table><tr><td><div class=\"titre\">" + "<img src=\"images/argent.png\" height=\"35\" align=\"left\"></img>" + "&nbsp;&nbsp;" + data.montant + " millions d'euros&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</div></td>";
                }
                if (data.homme) {
                    html += "<td><div class=\"titre\">" + "<img src=\"images/man.png\" height=\"35\" align=\"left\" margin-left=\"40\"></img>" + "&nbsp;&nbsp;" + data.homme + " fonctionnaires (ETP en 2012)" + "</div></td></tr>";
                }
                if (data.image) {
                    html += "</br><tr><td><img src=\"" + data.image + "\" class=\"album\" /></td>";
                }


                if (data.image1) {
                    html += "<td><img src=\"" + data.image1 + "\" class=\"album1\" /></td></tr></table>";
                }



                tip.innerHTML = html;
            }
        },
        //Add the name of the node in the correponding label
        //This method is called once, on label creation.
        onCreateLabel: function(domElement, node) {
            domElement.innerHTML = node.name;
            var style = domElement.style;
            style.display = '';
            style.border = '1px solid transparent';
            domElement.onmouseover = function() {
                style.border = '1px solid #9FD4FF';
            };
            domElement.onmouseout = function() {
                style.border = '1px solid transparent';
            };
        }
    });
    tm.loadJSON(json);
    tm.refresh();
    //end
    //add events to radio buttons
    var sq = $jit.id('r-sq'),
        st = $jit.id('r-st'),
        sd = $jit.id('r-sd');
    var util = $jit.util;
    util.addEvent(sq, 'change', function() {
        if (!sq.checked) return;
        util.extend(tm, new $jit.Layouts.TM.Squarified);
        tm.refresh();
    });
    util.addEvent(st, 'change', function() {
        if (!st.checked) return;
        util.extend(tm, new $jit.Layouts.TM.Strip);
        tm.layout.orientation = "v";
        tm.refresh();
    });
    util.addEvent(sd, 'change', function() {
        if (!sd.checked) return;
        util.extend(tm, new $jit.Layouts.TM.SliceAndDice);
        tm.layout.orientation = "v";
        tm.refresh();
    });
    //add event to the back button
    var back = $jit.id('back');
    $jit.util.addEvent(back, 'click', function() {
        tm.out();
    });
}
