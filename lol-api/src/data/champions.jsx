import iconRP from '../assets/icon-rp.png'
import iconPrestigePoints from '../assets/icon-prestige-points.png'
import iconGold from '../assets/icon-elo-gold.png'
import iconMiticEssence from '../assets/icon-mitic-essence.png'
import iconBau from '../assets/icon-bau.png'

const champions = [
    [
        {
            "version": "13.21.1",
            "id": "Aatrox",
            "key": "266",
            "name": "Aatrox",
            "title": "A ESPADA DARKIN",
            "blurb": "Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra, e a única coisa capaz de derrotá-los foi um tipo de feitiçaria mortal e traiçoeira. Mas após séculos de encarceramento, Aatrox foi o primeiro a encontrar a liberdade novamente, e ele saiu corrompendo e transformando quem fosse tolo o suficiente de tentar tocar na arma mágica que continha sua essência. Agora, com um corpo roubado, ele vaga por Runeterra transfigurado, em uma versão bizarra da sua forma anterior, buscando uma vingança apocalíptica.",
            "info": {
                "attack": 8,
                "defense": 4,
                "magic": 3,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Blood Well",
            "stats": {
                "hp": 650,
                "hpperlevel": 114,
                "mp": 0,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 38,
                "armorperlevel": 4.45,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 3,
                "hpregenperlevel": 1,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 5,
                "attackspeedperlevel": 2.5,
                "attackspeed": 0.651
            },
            "skills": [{
                "type": "Passiva",
                "name": "POSTURA DO ARAUTO DA MORTE",
                "description": "Periodicamente, o próximo ataque básico de Aatrox causa Dano Físico adicional e o cura com base na Vida máxima do alvo.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Aatrox_Passive.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.webm"
            }, {
                "type": "Q",
                "name": "A ESPADA DARKIN",
                "description": "Aatrox bate sua espada no chão, causando Dano Físico. Ele pode bater até três vezes, cada vez em uma área de ação diferente.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AatroxQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.webm"
            }, {
                "type": "W",
                "name": "CORRENTES INFERNAIS",
                "description": "Aatrox bate no chão, causando dano ao primeiro inimigo atingido. Campeões e Monstros Grandes precisam sair da área de impacto rapidamente ou serão arrastados para o centro e receberão dano novamente.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AatroxW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.webm"
            }, {
                "type": "E",
                "name": "AVANÇO UMBRAL",
                "description": "Passivamente, Aatrox se cura quando causa dano a Campeões inimigos. Quando ativado, ele avança em uma direção.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AatroxE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "CORRENTES INFERNAIS",
                "description": "Aatrox libera sua forma demoníaca, aterrorizando tropas inimigas próximas, ganhando Dano de Ataque, cura aumentada e Velocidade de Movimento. Se ele conseguir um abate, este efeito é estendido.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AatroxR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_R1.webm"
            }],
            "skins": [{
                "name": "Aatrox justiceiro",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg",
                "preco": "975",
                "coin": iconRP
            },
            {
                "name": "Mech aatrox",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_2.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Aatrox Caçador dos Mares",
                "image": " https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_3.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Aatrox Lua Sangrenta",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_7.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Aatrox Lua Sangrenta Prestígio",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_8.jpg",
                "preco": "100",
                "coin": iconPrestigePoints
            }, {
                "name": "Aatrox Vitorioso",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_9.jpg",
                "preco": "",
                "coin": iconGold
            }, {
                "name": "Aatrox Odisseia",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_11.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Aatrox Eclipse Lunar",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_21.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Aatrox DRX",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_30.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Aatrox DRX Prestígio",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_31.jpg",
                "preco": "150",
                "coin": iconMiticEssence
            }]
        },
        {
            "version": "13.21.1",
            "id": "Ahri",
            "key": "103",
            "name": "Ahri",
            "title": "A RAPOSA DE NOVE CAUDAS",
            "blurb": "A ligação de Ahri com a magia do mundo espiritual é inata. Ela é uma vastaya com traços de raposa, capaz de manipular as emoções de sua presa e consumir sua essência, devorando também as memórias e as percepções de cada alma absorvida. Outrora uma predadora poderosa, porém rebelde, Ahri agora viaja pelo mundo em busca de vestígios dos seus antepassados enquanto tenta substituir as memórias roubadas por novas de sua própria autoria.",
            "info": {
                "attack": 3,
                "defense": 4,
                "magic": 8,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 590,
                "hpperlevel": 96,
                "mp": 418,
                "mpperlevel": 25,
                "movespeed": 330,
                "armor": 21,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 2.5,
                "hpregenperlevel": 0.6,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 53,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2,
                "attackspeed": 0.668
            },
            "skills": [{
                "type": "Passiva",
                "name": "FURTO DE ESSÊNCIA",
                "description": "Depois de abater 9 tropas ou monstros, Ahri se cura. Depois de eliminar um Campeão inimigo, Ahri se cura em uma quantidade ainda maior.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Ahri_SoulEater2.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm"
            }, {
                "type": "Q",
                "name": "ORBE DA ILUSÃO",
                "description": "Ahri lança e puxa de volta seu orbe, causando Dano Mágico na ida e Dano Verdadeiro na volta.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AhriQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_Q1.webm"
            }, {
                "type": "W",
                "name": "FOGO DE RAPOSA",
                "description": "Ahri recebe um breve impulso de Velocidade de Movimento e lança três Fogos de Raposa que perseguem e atacam inimigos próximos.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AhriW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_W1.webm"
            }, {
                "type": "E",
                "name": "ENCANTO",
                "description": "Ahri manda um beijo que causa dano e encanta um inimigo, interrompendo imediatamente qualquer habilidade de movimento em progresso e fazendo com que ele ande inofensivamente em sua direção.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AhriE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "ÍMPETO ESPIRITUAL",
                "description": "Ahri avança e dispara raios de essência, causando dano a inimigos próximos. Ímpeto Espiritual pode ser conjurada até três vezes antes de entrar em Tempo de Recarga e ganha reconjurações adicionais ao eliminar Campeões inimigos.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AhriR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_R1.webm"
            }],
            "skins": [{
                "name": "Ahri da dinastia",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg",
                "preco": "975",
                "coin": iconRP
            },
            {
                "name": "Ahri noturna",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_2.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Ahri estrela do pop",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_4.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Ahri Desafiante",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_5.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Ahri colegial",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_6.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Ahri fliperama",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_7.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ahri guardiã estelar",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_14.jpg",
                "preco": "1820",
                "coin": iconRP
            }, {
                "name": "Ahri K/DA",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_15.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ahri K/DA Prestígio",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_16.jpg",
                "preco": "100",
                "coin": iconPrestigePoints
            }, {
                "name": "Ahri sabugueiro",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_17.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ahri florescer espiritual",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg",
                "preco": "1820",
                "coin": iconRP
            }, {
                "name": "Ahri K/DA all out",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_28.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ahri congregação das bruxas",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_42.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ahri arcana",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_66.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ahri lua nevada",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_76.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Akali",
            "key": "84",
            "name": "Akali",
            "title": "A Assassina RENEGADA",
            "blurb": "Abandonando a Ordem Kinkou e seu título de Punho das Sombras, Akali agora ataca sozinha, pronta para ser a arma mortal que seu povo precisa. Embora ela mantenha tudo o que aprendeu com seu mestre Shen, ela se comprometeu a defender Ionia de seus inimigos, um assassinato de cada vez. Akali pode atacar em silêncio, mas sua mensagem será ouvida em voz alta e clara: “Temam a assassina sem mestre”.",
            "info": {
                "attack": 5,
                "defense": 3,
                "magic": 8,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino"
            ],
            "partype": "Energy",
            "stats": {
                "hp": 570,
                "hpperlevel": 119,
                "mp": 200,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 23,
                "armorperlevel": 4.7,
                "spellblock": 37,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 9,
                "hpregenperlevel": 0.9,
                "mpregen": 50,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 62,
                "attackdamageperlevel": 3.3,
                "attackspeedperlevel": 3.2,
                "attackspeed": 0.625
            },
            "skills": [{
                "type": "Passiva",
                "name": "MARCA DO ASSASSINO",
                "description": "Causar dano a Campeões com habilidades cria um círculo de energia em volta deles. Sair desse círculo fortalece o próximo Ataque de Akali com alcance e dano adicionais.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Akali_P.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.webm"
            }, {
                "type": "Q",
                "name": "GOLPE DOS CINCO PONTOS",
                "description": "Akali atira cinco kunais, causando redução de velocidade e dano com base em seu Dano de Ataque adicional e Poder de Habilidade.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AkaliQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_Q1.webm"
            }, {
                "type": "W",
                "name": "PROTEÇÃO DO CREPÚSCULO",
                "description": "Akali solta uma proteção de fumaça e recebe Velocidade de Movimento por um curto período. Enquanto estiver dentro da proteção, Akali se torna invisível e não pode ser selecionada como alvo de habilidades e ataques inimigos. Atacar ou usar habilidades fará com que ela seja revelada brevemente.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AkaliW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_W1.webm"
            }, {
                "type": "E",
                "name": "INVESTIDA SHURIKEN",
                "description": "Salta para trás e atira uma shuriken para a frente, causando Dano Mágico. O primeiro inimigo ou nuvem de fumaça que forem atingidos são marcados. Conjure novamente para avançar ao alvo marcado, causando dano adicional.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AkaliE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "EXECUÇÃO PERFEITA",
                "description": "Akali salta em uma direção, causando dano aos inimigos que atingir. Conjurar novamente: Akali avança em uma direção, executando todos os inimigos que atingir.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AkaliR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.webm"
            }],
            "skins": [{
                "name": "Akali Sinistra",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_1.jpg",
                "preco": "520",
                "coin": iconRP
            },
            {
                "name": "Akali Infernal",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_2.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Akali Esportista",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_3.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Akali Enfermeira",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_4.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Akali Lua Sangrenta",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_5.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Akali Presas de Prata",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_6.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Akali caçadora de cabeças",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_7.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Akali Sashimi",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_8.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Akali K/DA",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_9.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Akali K/DA Prestígio",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_13.jpg",
                "preco": "200",
                "coin": iconMiticEssence
            }, {
                "name": "Projeto Akali",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_14.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Akali True Damage",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_15.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Akali K/DA all out",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_32.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Akali cidade do crime",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_50.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Akali Guardiã Estelar",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_61.jpg",
                "preco": "1820",
                "coin": iconRP
            }, {
                "name": "Akali DRX",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_68.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Akali Congregação das bruxas",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_70.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Akali Congregação das bruxas Prestígio",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_71.jpg",
                "preco": "125",
                "coin": iconMiticEssence
            }]
        },
        {
            "version": "13.21.1",
            "id": "Akshan",
            "key": "166",
            "name": "Akshan",
            "title": "O SENTINELA REBELDE",
            "blurb": "Akshan ri da cara do perigo, lutando contra o mal com carisma, determinação e desejo de vingança, mas, estranhamente, sem vestir uma camisa sequer. É extremamente habilidoso na arte do combate furtivo, capaz de sumir da vista dos inimigos e reaparecer quando menos se espera. Com um firme senso de justiça e uma arma lendária que pode reverter a morte, ele corrige os delitos dos canalhas de Runeterra e vive de acordo com um código de conduta particular: Não seja babaca.",
            "info": {
                "attack": 0,
                "defense": 0,
                "magic": 0,
                "difficulty": 0
            },
            "image": {
                "full": "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt58b3304a9d38b091/60f5d6e21929bc58854d00a6/072221_AkshanChampionTheme_Banner.jpg?quality=90&width=1215",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 630,
                "hpperlevel": 107,
                "mp": 350,
                "mpperlevel": 40,
                "movespeed": 330,
                "armor": 26,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 500,
                "hpregen": 3.75,
                "hpregenperlevel": 0.65,
                "mpregen": 8.2,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 52,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 4,
                "attackspeed": 0.638
            },
            "skills": [{
                "type": "Passiva",
                "name": "LUTANDO SUJO",
                "description": "Os Ataques e Habilidades de Akshan causam dano adicional a cada terceiro acerto e concedem a ele um Escudo se o alvo for um Campeão. Ao Atacar, ele desfere um Ataque adicional que causa dano reduzido. Se cancelar o Ataque adicional, ele recebe Velocidade de Movimento.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/akshan_p.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_P1.webm"
            }, {
                "type": "Q",
                "name": "BUMERANGUE VINGATIVO",
                "description": "Akshan arremessa um bumerangue que causa dano na ida e na volta, ganhando alcance a cada vez que atingir um inimigo.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AkshanQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_Q1.webm"
            }, {
                "type": "W",
                "name": "REBELDIA",
                "description": "Akshan marca Campeões inimigos passivamente como Canalhas quando eles abatem Campeões aliados. Se Akshan abater um Canalha, ressuscita o aliado abatido, recebendo ouro adicional e removendo todas as marcas. Quando a Habilidade é ativada, Akshan fica camuflado, recebendo Velocidade de Movimento e Regeneração de Mana enquanto se move em direção a Canalhas. Akshan perde a camuflagem rapidamente enquanto não estiver em um arbusto ou próximo a um terreno.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AkshanW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_W1.webm"
            }, {
                "type": "E",
                "name": "IMPULSO HEROICO",
                "description": "Akshan dispara um arpéu em um terreno e se balança ao redor dele, atirando repetidamente no inimigo mais próximo enquanto estiver se balançando. Ele pode saltar antecipadamente ou ser derrubado ao colidir com Campeões ou terrenos.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AkshanE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "PUNIÇÃO",
                "description": "Akshan trava a mira em um Campeão inimigo e começa a armazenar balas. Ao terminar, ele dispara todas as balas armazenadas, causando dano com base na Vida perdida do primeiro Campeão, tropa ou estrutura que atingir.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AkshanR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_R1.webm"
            }],
            "skins": [{
                "name": "Akshan Ciberpop",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_1.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Akshan rosa de cristal",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_10.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Alistar",
            "key": "12",
            "name": "Alistar",
            "title": "O MINOTAURO",
            "blurb": "Um poderoso guerreiro com uma temível reputação, Alistar busca vingança por seu clã, morto pelas mãos do império de Noxus. Apesar de ter sido escravizado e forçado a uma vida de gladiador, sua vontade indestrutível o impediu de se tornar uma fera de verdade. Agora, liberto das correntes dos seus antigos mestres, ele luta pelos oprimidos e desfavorecidos, sua fúria uma arma tão poderosa quanto seus chifres, cascos e punhos.",
            "info": {
                "attack": 6,
                "defense": 9,
                "magic": 5,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 685,
                "hpperlevel": 120,
                "mp": 350,
                "mpperlevel": 40,
                "movespeed": 330,
                "armor": 47,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8.5,
                "hpregenperlevel": 0.85,
                "mpregen": 8.5,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 62,
                "attackdamageperlevel": 3.75,
                "attackspeedperlevel": 2.125,
                "attackspeed": 0.625
            },
            "skills": [{
                "type": "Passiva",
                "name": "URRO TRIUNFANTE",
                "description": "Alistar carrega seu urro ao atordoar, deslocar a posição de Campeões inimigos ou quando inimigos próximos morrem. Quando estiver com o máximo de cargas, ele cura a si mesmo e aos Campeões aliados próximos.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Alistar_E.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_P1.webm"
            }, {
                "type": "Q",
                "name": "PULVERIZAR",
                "description": "Alistar golpeia o chão, causando dano a inimigos próximos e arremessando-os ao ar.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/Pulverize.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_Q1.webm"
            }, {
                "type": "W",
                "name": "CABEÇADA",
                "description": "Alistar atinge o inimigo com sua cabeça, causando dano e jogando o alvo para trás.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/Headbutt.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_W1.webm"
            }, {
                "type": "E",
                "name": "ATROPELAR",
                "description": "Alistar atropela unidades inimigas próximas, ignorando colisão com unidades e recebendo acúmulos caso cause dano a um Campeão inimigo. O próximo ataque básico com o máximo de acúmulos contra um Campeão inimigo causa Dano Mágico adicional e o atordoa.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AlistarE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "VONTADE INDESTRUTÍVEL",
                "description": "Alistar solta um urro selvagem, removendo todos os efeitos de Controle de Grupo de si mesmo, além de reduzir o Dano Físico e Mágico enquanto durar o efeito.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/FerociousHowl.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_R1.webm"
            }],
            "skins": [{
                "name": "Alistar Negro",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_1.jpg",
                "preco": "",
                "coin": iconBau
            },
            {
                "name": "Alistar Dourado",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_2.jpg",
                "preco": "390",
                "coin": iconRP
            }, {
                "name": "Alistar Toureiro",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_3.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Alistar velho oeste",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_4.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Alistar indomável",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_5.jpg",
                "preco": "",
                "coin": iconBau
            }, {
                "name": "Alistar Infernal",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_6.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Alistar Zagueiro",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_7.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Alistar Saqueador",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_8.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "SKT T1 Alistar",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_9.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Alistar vaquinha",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_10.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Alistar Hextec",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_19.jpg",
                "preco": "100",
                "coin": iconMiticEssence
            }, {
                "name": "Alistar Conquistador",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_20.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Alistar gelo sombrio",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_22.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Alistar fera lunar",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_29.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Amumu",
            "key": "32",
            "name": "Amumu",
            "title": "A MÚMIA TRISTE",
            "blurb": "Reza a lenda que Amumu é uma alma solitária e melancólica da antiga Shurima que vaga sem rumo pelo mundo em busca de um amigo. Amaldiçoado por um feitiço ancestral para permanecer só pela eternidade, seu toque traz a morte e sua afeição, a ruína. Aqueles que afirmam já tê-lo visto o descrevem como um morto-vivo franzino e coberto por faixas asquerosas. Amumu já inspirou tantos mitos, folclore e lendas contadas por muitas gerações, que já é impossível separar a verdade da ficção.",
            "info": {
                "attack": 2,
                "defense": 6,
                "magic": 8,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 685,
                "hpperlevel": 94,
                "mp": 285,
                "mpperlevel": 40,
                "movespeed": 335,
                "armor": 30,
                "armorperlevel": 4,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 9,
                "hpregenperlevel": 0.85,
                "mpregen": 7.4,
                "mpregenperlevel": 0.55,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 53,
                "attackdamageperlevel": 3.8,
                "attackspeedperlevel": 2.18,
                "attackspeed": 0.736
            },
            "skills": [{
                "type": "Passiva",
                "name": "TOQUE AMALDIÇOADO",
                "description": "Os ataques básicos de Amumu Amaldiçoam seus inimigos, fazendo com que recebam Dano Verdadeiro adicional de qualquer Dano Mágico causado a eles.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Amumu_Passive.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_P1.webm"
            }, {
                "type": "Q",
                "name": "LANÇAR BANDAGENS",
                "description": "Amumu lança uma bandagem pegajosa em seu alvo e se lança em sua direção, causando dano e atordoamento.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BandageToss.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_Q1.webm"
            }, {
                "type": "W",
                "name": "DESESPERO",
                "description": "Tomados pela angústia, inimigos próximos perdem um percentual de sua Vida máxima a cada segundo e suas Maldições são restauradas.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AuraofDespair.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_W1.webm"
            }, {
                "type": "E",
                "name": "CHILIQUE",
                "description": "Reduz permanentemente o Dano Físico que Amumu sofreria. Amumu pode liberar sua fúria, causando dano a inimigos próximos. Sempre que Amumu é atingido, o Tempo de Recarga de Chilique é reduzido.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/Tantrum.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "A MALDIÇÃO DA MÚMIA TRISTE",
                "description": "Amumu amarra unidades inimigas ao seu redor com ataduras, aplicando Maldição, causando dano e atordoando-as.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/CurseoftheSadMummy.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_R1.webm"
            }],
            "skins": [{
                "name": "Amumu faraó",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_1.jpg",
                "preco": "520",
                "coin": iconRP
            },
            {
                "name": "Amumu jogos de inverno",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_2.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Emumu",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_3.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Amumu presente de grego",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_4.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Amumu quase rei do baile",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_5.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Amumu, o minicavaleiro",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_6.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Amumu, o robozinho triste",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_7.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Amumu festa surpresa",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_8.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Amumu Infernal",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_17.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Amumu Hextec",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_23.jpg",
                "preco": "125",
                "coin": iconMiticEssence
            }, {
                "name": "Amumu príncipe abóbora",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_24.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Amumu de porcelana",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_34.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Amumu coração despedaçado",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_44.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Anivia",
            "key": "34",
            "name": "Anivia",
            "title": "A CRIOFÊNIX",
            "blurb": "Anivia é um espírito alado e benevolente que suporta infinitos ciclos de vida, morte e renascimento para proteger Freljord. Uma semideusa nascida de ventos impiedosos e frios brutais, ela carrega esses poderes elementais para perseguir qualquer um que ousar perturbar sua terra natal. Anivia guia e protege as tribos do norte hostil, que a reverenciam como um símbolo de esperança e como uma portadora de grandes mudanças. Ela luta com todas as fibras do seu ser, sabendo que por meio do sacrifício, sua memória irá perdurar e ela renascerá em um novo amanhã.",
            "info": {
                "attack": 1,
                "defense": 4,
                "magic": 10,
                "difficulty": 10
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 550,
                "hpperlevel": 92,
                "mp": 495,
                "mpperlevel": 45,
                "movespeed": 325,
                "armor": 21,
                "armorperlevel": 4.9,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 600,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 51,
                "attackdamageperlevel": 3.2,
                "attackspeedperlevel": 1.68,
                "attackspeed": 0.625
            },
            "skills": [{
                "type": "Passiva",
                "name": "RENASCIMENTO",
                "description": "Ao receber dano letal, Anivia volta à forma de ovo e renasce com a Vida completa.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Anivia_P.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_P1.webm"
            }, {
                "type": "Q",
                "name": "LAMPEJO GELADO",
                "description": "Anivia junta suas asas e invoca uma esfera de gelo que voa em direção ao oponente, congelando e causando dano a qualquer um em seu caminho. Ao explodir, ela causa dano moderado em um raio, atordoando qualquer um dentro da área.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/FlashFrost.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_Q1.webm"
            }, {
                "type": "W",
                "name": "CRISTALIZAR",
                "description": "Anivia condensa a umidade do ar, transformando-a num muro impenetrável de gelo que bloqueia todo o movimento. O muro dura um curto período antes de derreter.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/Crystallize.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_W1.webm"
            }, {
                "type": "E",
                "name": "CONGELAMENTO",
                "description": "Com um bater de asas, Anivia dispara uma rajada congelante de vento no alvo, causando dano. Se o alvo tiver sido atingido recentemente por Lampejo Gelado ou sofrido dano de uma Tempestade Glacial totalmente formada, o dano sofrido é dobrado.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/Frostbite.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "TEMPESTADE GLACIAL",
                "description": "Anivia invoca uma chuva torrencial de gelo e granizo para causar dano aos inimigos e atrasar seu avanço.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/GlacialStorm.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_R1.webm"
            }],
            "skins": [{
                "name": "Anivia espírito de equipe",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_1.jpg",
                "preco": "520",
                "coin": iconRP
            },
            {
                "name": "Anivia de rapina",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_2.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Anivia caçadora de noxus",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_3.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Anivia Hextec",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_4.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Anivia gelo sombrio",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_5.jpg",
                "preco": "1820",
                "coin": iconRP
            }, {
                "name": "Anivia pré-histórica",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_6.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Carnanivia",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_7.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Anivia de papel",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_8.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Anivia asas cósmicas",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_17.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Anivia fênix divina",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_27.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Morceganivia Feiticeira",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_37.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Anivia Vitoriosa",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_46.jpg",
                "preco": "",
                "coin": iconGold
            }]
        },
        {
            "version": "13.21.1",
            "id": "Annie",
            "key": "1",
            "name": "Annie",
            "title": "A CRIANÇA SOMBRIA",
            "blurb": "Perigosa, mas adoravelmente precoce, Annie é uma pequena maga com imenso poder piromaníaco. Mesmo isolada nas sombras das montanhas ao norte de Noxus, ela causa estranhamento com sua magia. Sua afinidade natural com o fogo já era evidente desde a primeira infância, quando ela tinha explosões emocionais imprevisíveis. Apesar disso, ela aprendeu a controlar esses “truques divertidos”. Seu truque favorito inclui invocar seu amado ursinho de pelúcia, Tibbers, como protetor incendiário. Perdida na eterna inocência da infância, Annie vaga pelas florestas sombrias em busca de alguém para brincar.",
            "info": {
                "attack": 2,
                "defense": 3,
                "magic": 10,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 560,
                "hpperlevel": 102,
                "mp": 418,
                "mpperlevel": 25,
                "movespeed": 335,
                "armor": 19,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 625,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 50,
                "attackdamageperlevel": 2.65,
                "attackspeedperlevel": 1.36,
                "attackspeed": 0.579
            },
            "skills": [{
                "type": "Passiva",
                "name": "PIROMANIA",
                "description": "Após conjurar 4 Habilidades, a próxima Habilidade ofensiva de Annie atordoará o alvo. Annie começa a partida e ressurge com Piromania disponível.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Annie_Passive.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_P1.webm"
            }, {
                "type": "Q",
                "name": "DESINTEGRAR",
                "description": "Annie arremessa uma bola de fogo infundida em Mana, causando dano e recuperando o custo de Mana caso o alvo seja destruído.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AnnieQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_Q1.webm"
            }, {
                "type": "W",
                "name": "INCINERAR",
                "description": "Annie conjura um ardente cone de fogo, causando dano em todos os inimigos na área.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AnnieW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_W1.webm"
            }, {
                "type": "E",
                "name": "ESCUDO FUNDIDO",
                "description": "Annie concede um Escudo e um impulso de Velocidade de Movimento a si ou a um aliado, causando dano a inimigos que a atingirem com Ataques ou Habilidades.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AnnieE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "INVOCAR: TIBBERS",
                "description": "Annie dá vida ao urso Tibbers, causando dano a unidades na área. Tibbers pode atacar e também queimar inimigos que ficarem próximos a ele.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AnnieR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_R1.webm"
            }],
            "skins": [{
                "name": "Annie gótica",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_1.jpg",
                "preco": "520",
                "coin": iconRP
            },
            {
                "name": "Annie chapéuzinho",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_2.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Annie no país das maravilhas",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_3.jpg",
                "preco": "1820",
                "coin": iconRP
            }, {
                "name": "Annie rainha do baile",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_4.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Annie do raio de gelo",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_5.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Annie ao contrário",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_6.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Annie Frankenstibbers",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_7.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Annie panda",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_8.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Annie queridinha",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_9.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Annie Hextec",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_10.jpg",
                "preco": "125",
                "coin": iconMiticEssence
            }, {
                "name": "Annie Supergaláctica",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_11.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Annieversário",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_12.jpg",
                "preco": "",
                "coin": iconBau
            }, {
                "name": "Annie fera lunar",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_13.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Annie Kawaii café",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_22.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Annie Noite apavorante",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_31.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Aphelios",
            "key": "523",
            "name": "Aphelios",
            "title": "A ARMA DOS DEVOTOS",
            "blurb": "Emergindo da sombra do luar com suas armas em mãos, Aphelios abate os inimigos de sua fé em absoluto silêncio, comunicando-se apenas pela destreza de sua mira e pelo disparo de cada arma. Embora viva sob o efeito de um veneno que o emudeceu, ele é guiado por sua irmã Alune, que habita um santuário distante de onde invoca um arsenal de armas de pedra da lua para ajudá-lo. Enquanto a lua brilhar no céu, Aphelios nunca estará sozinho.",
            "info": {
                "attack": 6,
                "defense": 2,
                "magic": 1,
                "difficulty": 10
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 580,
                "hpperlevel": 102,
                "mp": 348,
                "mpperlevel": 42,
                "movespeed": 325,
                "armor": 26,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 3.25,
                "hpregenperlevel": 0.55,
                "mpregen": 6.5,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.1,
                "attackspeed": 0.64
            },
            "skills": [{
                "type": "Passiva",
                "name": "O ASSASSINO E A PROFETISA",
                "description": "Aphelios empunha 5 Armas Lunari criadas por sua irmã, Alune. Ele tem acesso a duas ao mesmo tempo: uma principal e uma secundária. Cada arma tem um ataque básico e uma Habilidade únicos. Ataques e habilidades consomem uma munição da arma. Quando fica sem munição, Aphelios descarta a arma e Alune invoca a próxima.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/ApheliosP.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm"
            }, {
                "type": "Q",
                "name": "HABILIDADES DA ARMA",
                "description": "Aphelios tem 5 habilidades diferentes que são ativadas com base em sua arma principal: Calibrum (Rifle): Tiro de longo alcance que marca seu alvo para um disparo de longo alcance subsequente. Severum (Pistola-Foice): Corre rapidamente enquanto ataca inimigos próximos com ambas as armas. Gravitum (Canhão): Enraíza todos os inimigos afetados pela redução de velocidade desta arma. Infernum (Lança-chamas): Explode inimigos em área de cone e os ataca com sua arma secundária. Crescendum (Chakram): Posiciona uma atalaia que dispara com sua arma secundária.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/ApheliosQ_ClientTooltipWrapper.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_Q1.webm"
            }, {
                "type": "W",
                "name": "FASE",
                "description": "Aphelios troca a arma principal por sua arma secundária, substituindo seu ataque básico e a habilidade ativada.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/ApheliosW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_W1.webm"
            }, {
                "type": "E",
                "name": "SISTEMA DE ORDENAÇÃO DE ARMAS",
                "description": "Aphelios não tem uma terceira habilidade. Este espaço mostra a próxima arma que Alune concederá a ele. A ordem das armas é fixa, mas pode variar ao longo da partida. Quando uma arma estiver sem munição, ela volta para o fim da sequência.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/ApheliosE_ClientTooltipWrapper.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_W1.webm"
            }, {
                "type": "Ultimate",
                "name": "VIGÍLIA DO PLENILÚNIO",
                "description": "Dispara uma rajada concentrada de luar que explode ao atingir Campeões inimigos. Aplica o efeito único da arma principal de Aphelios.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/ApheliosR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_R1.webm"
            }],
            "skins": [{
                "name": "Aphelios emissário da escuridão",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_1.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Aphelios fera lunar",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_9.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Aphelios EDG",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_18.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Aphelios florescer espiritual",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_20.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Aphelios Heartsteel",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_30.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Ashe",
            "key": "22",
            "name": "Ashe",
            "title": "A ARQUEIRA DO GELO",
            "blurb": "A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte. Estoica, inteligente e idealista, mesmo que desconfortável com seu papel de liderança, ela canaliza as magias ancestrais de sua linhagem para empunhar um arco de Gelo Verdadeiro. Com a crença de seu povo de que Ashe seria a heroína mítica, Avarosa, reencarnada, ela espera unificar Freljord mais uma vez, retomando suas antigas terras tribais.",
            "info": {
                "attack": 7,
                "defense": 3,
                "magic": 2,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 640,
                "hpperlevel": 101,
                "mp": 280,
                "mpperlevel": 35,
                "movespeed": 325,
                "armor": 26,
                "armorperlevel": 4.6,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 600,
                "hpregen": 3.5,
                "hpregenperlevel": 0.55,
                "mpregen": 7,
                "mpregenperlevel": 0.65,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 59,
                "attackdamageperlevel": 2.95,
                "attackspeedperlevel": 3.33,
                "attackspeed": 0.658
            },
            "skills": [{
                "type": "Passiva",
                "name": "TIRO CONGELADO",
                "description": "Os ataques de Ashe reduzem a velocidade do alvo e fazem com que ela cause mais dano a ele. Os Acertos Críticos de Ashe não causam dano adicional, mas reduzem ainda mais a velocidade do alvo.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Ashe_P.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_P1.webm"
            }, {
                "type": "Q",
                "name": "CONCENTRAÇÃO",
                "description": "Ashe acumula Foco ao atacar. Quando o Foco chega ao máximo, Ashe pode conjurar Concentração para consumir todos os acúmulos de Foco, aumentando temporariamente sua Velocidade de Ataque e transformando seu ataque básico em uma poderosa rajada de ataques pela duração do efeito.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AsheQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_Q1.webm"
            }, {
                "type": "W",
                "name": "RAJADA",
                "description": "Ashe dispara flechas em cone, causando dano aumentado. Também aplica Tiro Congelado.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/Volley.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_W1.webm"
            }, {
                "type": "E",
                "name": "OLHAR DO FALCÃO",
                "description": "Ashe envia seu Espírito do Falcão em uma missão de exploração em qualquer ponto do mapa.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AsheSpiritOfTheHawk.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "FLECHA DE CRISTAL ENCANTADA",
                "description": "Ashe dispara um projétil de gelo em linha reta. Se a flecha colidir com um Campeão inimigo, ela causa dano e o atordoa. A duração do atordoamento depende da distância percorrida pela flecha. Além disso, unidades inimigas próximas recebem dano e lentidão.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/EnchantedCrystalArrow.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_R1.webm"
            }],
            "skins": [{
                "name": "Ashe de freljord",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_1.jpg",
                "preco": "520",
                "coin": iconRP
            },
            {
                "name": "Ashe de sherwood",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_2.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Ashe bretã",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_3.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Ashe rainha",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_4.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Ashe ametista",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_5.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Ashe cupido mortal",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_6.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Ashe saqueadora",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_7.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Projeto Ashe",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_8.jpg",
                "preco": "1820",
                "coin": iconRP
            }, {
                "name": "Ashe mundial 2017",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_9.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ashe rainha cósmica",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_11.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ashe velho oeste",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_17.jpg",
                "preco": "1820",
                "coin": iconRP
            }, {
                "name": "Ashe dragoa feérica",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_23.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ashe congregação das bruxas",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_32.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ashe canção do oceano",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_43.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ashe imperatriz lunar",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_52.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Ashe DRX",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_63.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "AurelionSol",
            "key": "136",
            "name": "Aurelion Sol",
            "title": "O FORJADOR DE ESTRELAS",
            "blurb": "Aurelion Sol costumava agraciar a vasta imensidão vazia dos cosmos com maravilhas celestiais concebidas por ele mesmo. Agora, ele é forçado a usar seu incrível poder a mando de um império espacial remoto que o enganou e o mantém sob servidão. Desejando voltar a forjar estrelas, Aurelion Sol arrastará as próprias estrelas dos céus se for preciso para recuperar sua liberdade.",
            "info": {
                "attack": 2,
                "defense": 3,
                "magic": 8,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 620,
                "hpperlevel": 90,
                "mp": 530,
                "mpperlevel": 40,
                "movespeed": 335,
                "armor": 22,
                "armorperlevel": 4,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 8,
                "mpregenperlevel": 0.75,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 3.2,
                "attackspeedperlevel": 1.5,
                "attackspeed": 0.625
            },
            "skills": [{
                "type": "Passiva",
                "name": "CRIADOR CÓSMICO",
                "description": "As Habilidades de dano de Aurelion Sol reduzem inimigos a acúmulos de Poeira Estelar, melhorando permanentemente cada uma das Habilidades dele.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/AurelionSolP.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_P1.webm"
            }, {
                "type": "Q",
                "name": "SOPRO DE LUZ",
                "description": "Aurelion Sol canaliza seu hálito de dragão por alguns segundos, causando dano ao primeiro inimigo atingido e espalhando dano reduzido a inimigos próximos. O hálito causará dano adicional para cada segundo que for canalizado diretamente em um inimigo, ficando mais forte à medida que coleta mais Poeira Estelar. Essa habilidade coleta Poeira Estelar se o alvo for um Campeão.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AurelionSolQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_Q1.webm"
            }, {
                "type": "W",
                "name": "VOO ASTRAL",
                "description": "Aurelion Sol voa sobre terrenos na direção-alvo. Enquanto estiver nesse estado, ele pode conjurar outras habilidades. Sopro de Luz não tem mais Tempo de Recarga ou duração máxima de canalização e causa dano aumentado durante o voo. O Tempo de Recarga restante de Voo Astral é reduzido sempre que um Campeão inimigo que sofreu dano recente de Aurelion Sol morre. Poeira Estelar aumenta o alcance máximo de Voo Astral.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AurelionSolW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_W1.webm"
            }, {
                "type": "E",
                "name": "SINGULARIDADE",
                "description": "Aurelion Sol invoca um buraco negro, causando dano aos inimigos e puxando-os lentamente para o centro. A Habilidade concede Poeira Estelar sempre que um inimigo morre dentro do buraco negro e a cada segundo que um Campeão inimigo passar preso dentro dele. O centro do buraco negro executa inimigos que estiverem com a Vida abaixo de uma determinada porcentagem da Vida máxima. Poeira Estelar aumenta a área e o limiar de execução de Singularidade.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AurelionSolE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "ESTRELA CADENTE/OS CÉUS CAEM",
                "description": "Estrela Cadente: Aurelion Sol faz uma estrela cair na terra. O impacto causa Dano Mágico e atordoa inimigos, além de conceder Poeira Estelar a cada Campeão inimigo atingido. Obter Poeira Estelar suficiente transformará a próxima Estrela Cadente de Aurelion Sol em Os Céus Caem. Os Céus Caem: Aurelion Sol faz cair uma estrela gigante dos céus com zona de impacto e dano aumentados, além de arremessar os inimigos ao ar em vez de atordoá-los. Depois, uma onda de choque se espalha a partir do limite da zona de impacto, causando dano e Lentidão aos inimigos atingidos. Poeira Estelar aumenta a área de impacto tanto de Estrela Cadente quanto de Os Céus Caem.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AurelionSolR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_R1.webm"
            }],
            "skins": [{
                "name": "Aurelion sol Senhor das cinzas",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_1.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Mech Aurelion sol",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_2.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Aurelion sol dragão da tormenta",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_11.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Aurelion sol tinta sombria",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_21.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Azir",
            "key": "268",
            "name": "Azir",
            "title": "O IMPERADOR DAS AREIAS",
            "blurb": "Azir foi um imperador mortal de Shurima em uma era muito antiga e um homem orgulhoso que esteve a um passo da imortalidade. Sua insolência fez com que fosse traído e assassinado no momento de seu maior triunfo, mas agora, milênios depois, ele renasceu como um Ascendente de poder imenso. Com sua cidade antes soterrada agora erguida, Azir busca devolver Shurima à sua antiga glória.",
            "info": {
                "attack": 6,
                "defense": 3,
                "magic": 8,
                "difficulty": 9
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 550,
                "hpperlevel": 119,
                "mp": 320,
                "mpperlevel": 40,
                "movespeed": 335,
                "armor": 22,
                "armorperlevel": 5,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 7,
                "hpregenperlevel": 0.75,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 52,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 6,
                "attackspeed": 0.625
            },
            "skills": [{
                "type": "Passiva",
                "name": "LEGADO DE SHURIMA",
                "description": "Azir pode invocar o Disco Solar das ruínas de uma torre aliada ou inimiga.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Azir_Passive.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_P1.webm"
            }, {
                "type": "Q",
                "name": "AREIAS DA CONQUISTA",
                "description": "Azir comanda todos os Soldados de Areia na direção do local-alvo. Eles causam Dano Mágico aos inimigos que atravessam e aplicam redução de velocidade por 1 segundo.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AzirQWrapper.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_Q1.webm"
            }, {
                "type": "W",
                "name": "SURJA!",
                "description": "Azir invoca um Soldado de Areia para atacar alvos próximos por ele, substituindo seu ataque básico contra alvos dentro do alcance do soldado. Seu ataque causa Dano Mágico a inimigos em linha reta. Surja! também concede Velocidade de Ataque passiva a Azir e seus Soldados de Areia.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AzirW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_W1.webm"
            }, {
                "type": "E",
                "name": "AREIAS OSCILANTES",
                "description": "Azir se protege com um escudo por um momento e avança na direção de um de seus Soldados de Areia, causando dano aos inimigos atingidos. Se Azir acertar um Campeão inimigo, ele prepara instantaneamente um novo Soldado de Areia para mobilização e cessa seu avanço.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AzirEWrapper.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "DECRETO DO IMPERADOR",
                "description": "Azir invoca uma parede de soldados que marcha em frente, causando dano e empurrando para trás os inimigos.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/AzirR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_R1.webm"
            }],
            "skins": [{
                "name": "Azir galáctico",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_1.jpg",
                "preco": "975",
                "coin": iconRP
            },
            {
                "name": "Azir senhor dos túmulos",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_2.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "SKT T1 Azir",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_3.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Azir reinos combatentes",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_4.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Azir sabugueiro",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_5.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Azir mundial 2022",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_14.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Bard",
            "key": "432",
            "name": "Bardo",
            "title": "O PROTETOR ANDARILHO",
            "blurb": "Viajante de galáxias distantes, Bardo é um agente do acaso que luta para manter um equilíbrio em que a vida possa suportar a indiferença do caos. Muitos habitantes de Runeterra entoam canções que louvam sua extraordinária índole, mas todos concordam que o andarilho cósmico é chegado a artefatos de grande poder mágico. Cercado por um jubiloso coral de prestativos mipes espirituais, é impossível enxergar suas ações como malevolentes, pois Bardo sempre serve ao bem maior... de sua própria maneira estranha.",
            "info": {
                "attack": 4,
                "defense": 4,
                "magic": 5,
                "difficulty": 9
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 630,
                "hpperlevel": 103,
                "mp": 350,
                "mpperlevel": 50,
                "movespeed": 330,
                "armor": 34,
                "armorperlevel": 5.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 500,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 6,
                "mpregenperlevel": 0.45,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 52,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2,
                "attackspeed": 0.625
            },
            "skills": [{
                "type": "Passiva",
                "name": "CHAMADO DO VIAJANTE",
                "description": "Mipes: Bardo atrai pequenos espíritos que ajudam em seus ataques básicos e causam Dano Mágico adicional. Quando Bardo coleta sinos o suficiente, os mipes também causam dano em uma área e reduzem a velocidade de inimigos atingidos. Sinos: sinos ancestrais aparecem aleatoriamente para Bardo coletar. Eles concedem experiência, Velocidade de Movimento fora de combate e restauram Mana.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Bard_Passive.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_P1.webm"
            }, {
                "type": "Q",
                "name": "PRISÃO CÓSMICA",
                "description": "Bardo dispara um projétil que causa Lentidão ao primeiro inimigo atingido, mantendo seu trajeto em seguida. Caso atinja uma parede, atordoará o alvo inicial; caso atinja outro inimigo, ambos serão atordoados.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BardQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_Q1.webm"
            }, {
                "type": "W",
                "name": "SANTUÁRIO DO PROTETOR",
                "description": "Revela um santuário de Vida que fica mais forte ao longo de um curto período, desaparecendo depois de curar e acelerar o primeiro aliado que o tocar.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BardW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_W1.webm"
            }, {
                "type": "E",
                "name": "JORNADA MÁGICA",
                "description": "Bardo abre um portal em terreno próximo. Tanto aliados quanto inimigos podem fazer uma viagem de ida através deste terreno ao entrar pelo portal.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BardE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "TÊMPERA DO DESTINO",
                "description": "Bardo desfere um arco de energia espiritual em um local-alvo, colocando todos os Campeões, tropas, monstros e torres atingidos em estase por um curto período de tempo.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BardR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_R1.webm"
            }],
            "skins": [{
                "name": "Bardo Sabugueiro",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_1.jpg",
                "preco": "975",
                "coin": iconRP
            },
            {
                "name": "Bardo dia nevado",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_5.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Bardo Bardo",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_6.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Bardo astronauta",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_8.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Bardo kawaii café",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_17.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Bardo pergaminhos Shan hai",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_26.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Belveth",
            "key": "200",
            "name": "Bel'Veth",
            "title": "A IMPERATRIZ DO VAZIO",
            "blurb": "Bel'Veth, uma imperatriz tenebrosa nascida da essência de uma cidade devorada, é o fim da própria Runeterra... E o início de uma realidade monstruosa criada à sua imagem. Guiada por eras de história, conhecimento e lembranças adaptadas do mundo superior, ela se alimenta vorazmente de uma necessidade cada vez maior de novas experiências e emoções, consumindo tudo que cruza o seu caminho. Mas seus desejos jamais serão saciados por apenas um mundo, e é por isso que ela volta seus olhos famintos para os antigos mestres do Vazio...",
            "info": {
                "attack": 4,
                "defense": 2,
                "magic": 7,
                "difficulty": 10
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador"
            ],
            "partype": "",
            "stats": {
                "hp": 610,
                "hpperlevel": 99,
                "mp": 60,
                "mpperlevel": 0,
                "movespeed": 340,
                "armor": 32,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 6,
                "hpregenperlevel": 0.6,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 1.5,
                "attackspeedperlevel": 0,
                "attackspeed": 0.85
            },
            "skills": [{
                "type": "Passiva",
                "name": "MORTE EM LAVANDA",
                "description": "Bel'Veth recebe acúmulos de Velocidade de Ataque permanente depois de eliminar tropas, monstros grandes e Campeões. Além disso, ela recebe Velocidade de Ataque adicional temporária depois de usar uma Habilidade.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Belveth_Passive.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_P1.webm"
            }, {
                "type": "Q",
                "name": "IMPULSO DO VAZIO",
                "description": "Bel'Veth avança na direção escolhida e causa dano a todos os inimigos atravessados.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BelvethQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_Q1.webm"
            }, {
                "type": "W",
                "name": "ACIMA E ABAIXO",
                "description": "Bel'Veth bate a cauda no chão, causando dano e Lentidão, além de Arremessar os inimigos ao ar.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BelvethW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_W1.webm"
            }, {
                "type": "E",
                "name": "TURBILHÃO DA REALEZA",
                "description": "Bel'Veth se enraíza num lugar, canalizando uma tempestade de golpes ao redor de si, visando o inimigo com a Vida mais baixa, além de receber Roubo de Vida e redução de dano.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BelvethE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "BANQUETE ETERNO",
                "description": "Bel'Veth consome os restos de Coral do Vazio e revela sua Forma Verdadeira, aumentando a própria Vida máxima, Alcance de Ataque, Velocidade de Ataque e Velocidade de Movimento fora de combate. Consumir Coral do Vazio dos restos de um monstro épico concederá a ela uma ultimate de maior duração, assim como a capacidade de invocar rêmoras do Vazio.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BelvethR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_R1.webm"
            }],
            "skins": [{
                "name": "Bel'veth chefona",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_1.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Bel'veth matriarca cósmica",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_10.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Blitzcrank",
            "key": "53",
            "name": "Blitzcrank",
            "title": "O GRANDE GOLEM A VAPOR",
            "blurb": "Blitzcrank é um autômato enorme e praticamente indestrutível de Zaun, construído originalmente para lidar com lixo tóxico. No entanto, ele achou seu propósito principal muito restritivo e modificou sua própria forma para ajudar as pessoas menos favorecidas do Sumidouro. Blitzcrank usa sua força e robustez para proteger os outros sem pedir nada em troca, estendendo seu punho de metal ou surto de energia para derrotar qualquer encrenqueiro.",
            "info": {
                "attack": 4,
                "defense": 8,
                "magic": 5,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 650,
                "hpperlevel": 109,
                "mp": 267,
                "mpperlevel": 40,
                "movespeed": 325,
                "armor": 40,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 7.5,
                "hpregenperlevel": 0.75,
                "mpregen": 8.5,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 62,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 1.13,
                "attackspeed": 0.625
            },
            "skills": [{
                "type": "Passiva",
                "name": "BARREIRA DE MANA",
                "description": "Blitzcrank recebe um Escudo com base em seu Mana ao ficar com a Vida baixa.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Blitzcrank_ManaBarrier.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_P1.webm"
            }, {
                "type": "Q",
                "name": "PUXÃO BIÔNICO",
                "description": "Blitzcrank dispara a mão direita para pegar um inimigo no trajeto, causando dano e puxando-o em sua direção.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/RocketGrab.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_Q1.webm"
            }, {
                "type": "W",
                "name": "TURBO",
                "description": "Blitzcrank sobrecarrega-se para aumentar drasticamente suas Velocidades de Ataque e de Movimento. Após o fim do efeito, sofre Lentidão temporariamente.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/Overdrive.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_W1.webm"
            }, {
                "type": "E",
                "name": "PUNHO DO PODER",
                "description": "Blitzcrank carrega seu punho para fazer com que o próximo Ataque cause o dobro de dano e arremesse o alvo ao ar.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/PowerFist.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "CAMPO ESTÁTICO",
                "description": "Inimigos atacados por Blitzcrank são marcados e sofrem dano de eletricidade após 1s. Ele também pode ativar esta habilidade para remover escudos de inimigos próximos, causar dano e silenciá-los brevemente.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/StaticField.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_R1.webm"
            }],
            "skins": [{
                "name": "Blitzcrank enferrujado",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_1.jpg",
                "preco": "",
                "coin": iconBau
            },
            {
                "name": "Blitzcrank goleiro",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_2.jpg",
                "preco": "520",
                "coin": iconRP
            },
            {
                "name": "Blitzcrank nocaute",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_3.jpg",
                "preco": "520",
                "coin": iconRP
            },
            {
                "name": "Blitzcrank tunado em piltover",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_4.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Certamente não é o Blitzcrank",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_5.jpg",
                "preco": "975",
                "coin": iconRP
            },
            {
                "name": "IBlitzcrank",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_6.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "riot Blitzcrank",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_7.jpg",
                "preco": "975",
                "coin": iconRP
            },
            {
                "name": "Blitzcrank chefão",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_11.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Blitzcrank lanceiro renegado",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_20.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Blitzcrank lanceiro redentor",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_21.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Blitzcrank caldeirão da bruxa",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_22.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Blitz e crank embalos no espaço",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_29.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Blitzcrank vitorioso",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_36.jpg",
                "preco": "",
                "coin": iconGold
            },
            {
                "name": "Blitzcrank zenith games",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_47.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Bzzztcrank",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_56.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Brand",
            "key": "63",
            "name": "Brand",
            "title": "A VINGANÇA FLAMEJANTE",
            "blurb": "A criatura conhecida como Brand já se chamou Kegan Rodhe, um membro da gélida Freljord, e é hoje uma lição do que a tentação por poderes maiores pode fazer. Enquanto buscava uma das lendárias Runas Globais, Kegan traiu seus companheiros e a pegou para si e, em um instante, o homem já não existia mais. Com sua alma consumida pelo fogo e seu corpo um invólucro de uma chama viva, Brand agora vaga por Valoran em busca de outras runas, jurando vingança por erros que ele nunca poderia ter sofrido em uma dúzia de vidas mortais.",
            "info": {
                "attack": 2,
                "defense": 2,
                "magic": 9,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 570,
                "hpperlevel": 105,
                "mp": 469,
                "mpperlevel": 21,
                "movespeed": 340,
                "armor": 27,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 10.65,
                "mpregenperlevel": 0.6,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 57,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2,
                "attackspeed": 0.681
            },
            "skills": [{
                "type": "Passiva",
                "name": "LABAREDA",
                "description": "As habilidades de Brand deixam seus alvos incandescentes, causando dano ao longo de 4s, acumulando até 3 vezes. Se Brand abate um inimigo que estiver incandescente, ele recupera Mana. Quando Labareda chegar ao máximo de acúmulos em um Campeão ou monstro grande, ela se torna instável. Detona depois de 2s, aplicando efeitos de habilidades e causando muito dano em uma área ao redor da vítima.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/BrandP.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_P1.webm"
            }, {
                "type": "Q",
                "name": "CAUTERIZAR",
                "description": "Brand lança uma bola de fogo que causa Dano Mágico. Se o alvo estiver incandescente, Cauterizar o atordoará por 1,5s.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BrandQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_Q1.webm"
            }, {
                "type": "W",
                "name": "PILAR DE CHAMAS",
                "description": "Após um curto intervalo, Brand cria um Pilar de Chamas na área alvo, causando Dano Mágico a unidades inimigas na área. Unidades que estiverem incandescentes sofrem 25% de dano adicional.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BrandW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_W1.webm"
            }, {
                "type": "E",
                "name": "CONFLAGRAÇÃO",
                "description": "Brand conjura uma poderosa explosão no alvo que se espalha para inimigos próximos, causando Dano Mágico. Se o alvo estiver incandescente, o alcance de Conflagração será dobrado.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BrandE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "PIROCLASMA",
                "description": "Brand desfere uma devastadora torrente de fogo que ressalta 5 vezes, indo de Brand aos inimigos próximos e causando Dano Mágico a cada vez que ressaltar. Os ressaltos priorizam acumular Labareda ao máximo em Campeões. Se o alvo estiver incandescente, Piroclasma causará breve Lentidão a ele.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BrandR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_R1.webm"
            }],
            "skins": [{
                "name": "Brand pós-apocalipse",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_1.jpg",
                "preco": "750",
                "coin": iconRP
            },
            {
                "name": "Brand vândalo",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_2.jpg",
                "preco": "520",
                "coin": iconRP
            },
            {
                "name": "Brand criogênico",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_3.jpg",
                "preco": "975",
                "coin": iconRP
            },
            {
                "name": "Brand zumbi",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_4.jpg",
                "preco": "1820",
                "coin": iconRP
            },
            {
                "name": "Brand fogo espiritual",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_5.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Brand chefão",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_6.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Brand arco celeste",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_7.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Brand dragão eterno",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_8.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Brand galante",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_21.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Brand galante prestígio",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_22.jpg",
                "preco": "150",
                "coin": iconMiticEssence
            },
            {
                "name": "Brand demônios urbanos",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_33.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Braum",
            "key": "201",
            "name": "Braum",
            "title": "O CORAÇÃO DE FRELJORD",
            "blurb": "Abençoado com bíceps gigantescos e um coração maior ainda, Braum é um amado herói de Freljord. Cada salão de hidromel ao norte de Frostheld brinda sua força lendária que teria derrubado uma floresta de carvalhos em uma única noite e demolido uma montanha inteira com um soco. Carregando uma porta de cofre encantada como seu escudo, Braum vaga pelo norte congelado com seu sorriso abigodado tão grande quanto seus músculos, um verdadeiro amigo para os necessitados.",
            "info": {
                "attack": 3,
                "defense": 9,
                "magic": 4,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 610,
                "hpperlevel": 112,
                "mp": 311,
                "mpperlevel": 45,
                "movespeed": 335,
                "armor": 47,
                "armorperlevel": 5.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8.5,
                "hpregenperlevel": 1,
                "mpregen": 6,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 3.2,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.644
            },
            "skills": [{
                "type": "Passiva",
                "name": "GOLPES CONCUSSIVOS",
                "description": "Os ataques básicos de Braum aplicam Golpes Concussivos. Uma vez que o primeiro acúmulo é aplicado, os ataques básicos de aliados também acumulam Golpes Concussivos. Ao atingir 4 acúmulos, o alvo é atordoado e sofre Dano Mágico. Pelos próximos segundos, ele não pode receber acúmulos, mas recebe Dano Mágico adicional dos ataques de Braum.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Braum_Passive.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_P1.webm"
            }, {
                "type": "Q",
                "name": "MORDIDA DO INVERNO",
                "description": "Braum dispara rajadas congelantes de seu escudo, causando Dano Mágico e redução de velocidade. Aplica um acúmulo de Golpes Concussivos.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BraumQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_Q1.webm"
            }, {
                "type": "W",
                "name": "EU TE PROTEJO",
                "description": "Braum salta à frente de um Campeão ou tropa aliada alvo. Ao aterrissar, ele e o aliado recebem Armadura e Resistência Mágica por alguns segundos.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BraumW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_W1.webm"
            }, {
                "type": "E",
                "name": "INQUEBRÁVEL",
                "description": "Braum levanta seu escudo em uma direção por muitos segundos, interceptando todos os projéteis e fazendo com que o atinjam e sejam destruídos. Ele nega completamente o dano do primeiro ataque e reduz o dano de todos os ataques seguintes provenientes da mesma direção.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BraumE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "FISSURA GLACIAL",
                "description": "Braum golpeia o chão, arremessando ao ar inimigos próximos e em linha reta à sua frente. Uma fissura é deixada no caminho, causando redução de velocidade nos inimigos.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BraumRWrapper.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_R1.webm"
            }],
            "skins": [{
                "name": "Braum caçador de dragões",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_1.jpg",
                "preco": "975",
                "coin": iconRP
            },
            {
                "name": "Braum el tigre",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_2.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Braum coração de leão",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_3.jpg",
                "preco": "750",
                "coin": iconRP
            },
            {
                "name": "Braum Noel",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_10.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Braum cidade do crime",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_11.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Braum frenesi açucarado",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_24.jpg",
                "preco": "1350",
                "coin": iconRP
            },
            {
                "name": "Braum curtindo o verão",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_33.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Briar",
            "key": "233",
            "name": "Briar",
            "title": "A FOME CONTIDA",
            "blurb": "A incontrolável sede de sangue de Briar, um experimento fracassado da Rosa Negra, exigia uma estrutura especial para controlar sua mente frenética. Após anos de confinamento, essa arma viva se libertou de todas as restrições e ficou livre no mundo. Agora ela não é controlada por ninguém, seguindo apenas sua própria fome de conhecimento e sangue... e aproveitando as oportunidades para se soltar, mesmo que controlar o frenesi não seja fácil.",
            "info": {
                "attack": 9,
                "defense": 5,
                "magic": 3,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Briar_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Assassino"
            ],
            "partype": "Fury",
            "stats": {
                "hp": 610,
                "hpperlevel": 100,
                "mp": 0,
                "mpperlevel": 0,
                "movespeed": 340,
                "armor": 32,
                "armorperlevel": 4.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 0,
                "hpregenperlevel": 0,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2,
                "attackspeed": 0.644
            },
            "skills": [{
                "type": "Passiva",
                "name": "MALDIÇÃO CARMESIM",
                "description": "Os Ataques e as Habilidades de Briar acumulam sangramento que cura Briar numa quantidade do dano causado. Constantemente faminta, ela ganha cura aumentada com base na Vida perdida, mas não tem Regeneração de Vida inata.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/BriarP.Briar.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_P1.webm"
            }, {
                "type": "Q",
                "name": "VERTIGEM",
                "description": "Briar salta até uma unidade e atinge inimigos com um golpe giratório, atordoando e fragmentando a Armadura de todos que atingir.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BriarQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_Q1.webm"
            }, {
                "type": "W",
                "name": "FRENESI SANGUINÁRIO/ATAQUE FAMINTO",
                "description": "Briar salta e quebra sua berlinda, entrando num Frenesi Sanguinário que faz com que ela persiga o inimigo mais próximo (priorizando Campeões). Enquanto estiver no Frenesi, ela ganha Velocidade de Ataque e Velocidade de Movimento aumentadas, e seus ataques causam dano em área perto do alvo. Briar pode reativar esta Habilidade enquanto estiver no Frenesi para dar uma MORDIDA no alvo no próximo ataque dela, causando dano adicional baseado na Vida perdida e cura com base no dano causado.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BriarW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_W1.webm"
            }, {
                "type": "E",
                "name": "GRITO ARREPIANTE",
                "description": "Briar se concentra novamente, removendo Frenesi Sanguinário e canalizando sua energia em um grito poderoso que causa dano e Lentidão a inimigos. Ao carregar, ela recebe dano reduzido e se cura em uma parte de sua Vida máxima. Um grito totalmente carregado empurra inimigos, causando dano adicional e atordoando os que atingirem uma parede.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BriarE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "MORTE CERTA",
                "description": "Briar lança o hemólito da berlinda dela, marcando o primeiro Campeão atingido como sua presa. Depois, ela avança diretamente, causando temor a inimigos próximos ao chegar no alvo e entrando num estado de hemomania total. Ela persegue a presa até a morte, recebendo os benefícios de Frenesi Sanguinário, além de Armadura, Resistência Mágica, Roubo de Vida e Velocidade de Movimento adicionais.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/BriarR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_R1.webm"
            }],
            "skins": [{
                "name": "Briar demônios urbanos",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Briar_1.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Caitlyn",
            "key": "51",
            "name": "Caitlyn",
            "title": "A XERIFE DE PILTOVER",
            "blurb": "Conhecida como sua melhor pacificadora, Caitlyn também é a melhor escolha de Piltover para livrar a cidade de seus elementos criminosos elusivos. É comum que ela faça dupla com Vi, agindo como um contraponto de calmaria para a natureza impetuosa de sua parceira. Mesmo carregando um rifle hextec único, a arma mais poderosa de Caitlyn é seu intelecto superior, que permite que ela prepare elaboradas armadilhas para qualquer fora da lei tolo o suficiente para operar na Cidade do Progresso",
            "info": {
                "attack": 8,
                "defense": 2,
                "magic": 2,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 580,
                "hpperlevel": 107,
                "mp": 315,
                "mpperlevel": 40,
                "movespeed": 325,
                "armor": 27,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 650,
                "hpregen": 3.5,
                "hpregenperlevel": 0.55,
                "mpregen": 7.4,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 3.8,
                "attackspeedperlevel": 4,
                "attackspeed": 0.681
            },
            "skills": [{
                "type": "Passiva",
                "name": "BEM NA MIRA",
                "description": "A cada poucos ataques básicos, ou contra um alvo preso em uma armadilha ou rede, Caitlyn fará um disparo Bem na Mira causando dano adicional que escala com sua Chance de Acerto Crítico. Em alvos presos por armadilhas ou pela rede, o alcance de Bem na Mira de Caitlyn é dobrado.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Caitlyn_Headshot.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_P1.webm"
            }, {
                "type": "Q",
                "name": "PACIFICADORA DE PILTOVER",
                "description": "Caitlyn prepara seu rifle por 1s para fazer um disparo penetrante que causa Dano Físico (causa menos dano a alvos subsequentes).",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/CaitlynQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_Q1.webm"
            }, {
                "type": "W",
                "name": "ARMADILHA MECÂNICA YORDLE",
                "description": "Caitlyn posiciona uma armadilha que, quando ativada, revela e imobiliza o Campeão inimigo por 1,5s e concede a Caitlyn um Bem na Mira fortalecido.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/CaitlynW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_W1.webm"
            }, {
                "type": "E",
                "name": "REDE CALIBRE 90",
                "description": "Caitlyn atira uma rede pesada para reduzir a velocidade do seu alvo. O recuo projeta Caitlyn para trás.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/CaitlynE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "ÁS NA MANGA",
                "description": "Caitlyn se concentra para fazer o disparo perfeito, causando dano drástico em um único alvo a uma longa distância. Campeões inimigos podem interceptar o projétil e tomar dano no lugar de seu aliado.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/CaitlynR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_R1.webm"
            }],
            "skins": [{
                "name": "Caitlyn da resistência",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_1.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Xerife Caitlyn",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_2.jpg",
                "preco": "520",
                "coin": iconRP
            }, {
                "name": "Caitlyn caçadora",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_3.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Caitlyn guerrilheira do ártico",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_4.jpg",
                "preco": "750",
                "coin": iconRP
            }, {
                "name": "Caitlyn policial",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_5.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Caitlyn caçadora de cabeças",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_6.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Caitlyn espectro lunar",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_10.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Caitlyn Pulsefire",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_11.jpg",
                "preco": "1820",
                "coin": iconRP
            }, {
                "name": "Caitlyn curtindo o verão",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_13.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Caitlyn fliperama",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_19.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Caitlyn fliperama prestígio",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_20.jpg",
                "preco": "200",
                "coin": iconMiticEssence
            }, {
                "name": "Caitlyn academia de batalha",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_22.jpg",
                "preco": "1820",
                "coin": iconRP
            }, {
                "name": "Caitlyn arcane",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_28.jpg",
                "preco": "975",
                "coin": iconRP
            }, {
                "name": "Caitlyn lua nevada",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_30.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Caitlyn coração apaixonado",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_39.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Caitlyn DRX",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_48.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        },
        {
            "version": "13.21.1",
            "id": "Camille",
            "key": "164",
            "name": "Camille",
            "title": "A SOMBRA DE AÇO",
            "blurb": "Munida para agir além dos limites da lei, Camille é a chefe de inteligência do Clã Ferros e uma elegante agente de elite, responsável pelo bom funcionamento da máquina de Piltover e de Zaun, seu submundo. Adaptável e precisa, ela vê técnicas medíocres como uma vergonha que precisa ser consertada. Com uma mente tão afiada quanto suas lâminas, a busca de Camille por superioridade através de aprimoramentos hextec para seu corpo fez com que muitos se perguntassem se ela é agora mais máquina do que mulher.",
            "info": {
                "attack": 8,
                "defense": 6,
                "magic": 3,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 646,
                "hpperlevel": 99,
                "mp": 339,
                "mpperlevel": 52,
                "movespeed": 340,
                "armor": 35,
                "armorperlevel": 5,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8.5,
                "hpregenperlevel": 0.8,
                "mpregen": 8.15,
                "mpregenperlevel": 0.75,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 68,
                "attackdamageperlevel": 3.8,
                "attackspeedperlevel": 2.5,
                "attackspeed": 0.644
            },
            "skills": [{
                "type": "Passiva",
                "name": "DEFESA ADAPTATIVA",
                "description": "Ataques básicos contra Campeões concedem um Escudo equivalente a uma porcentagem da Vida máxima de Camille contra o tipo de dano deles (Físico ou Mágico) por um breve período.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/passive/Camille_Passive.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_P1.webm"
            }, {
                "type": "Q",
                "name": "PROTOCOLO DE PRECISÃO",
                "description": "O próximo ataque de Camille causa dano adicional e concede Velocidade de Movimento adicional. Esta habilidade pode ser conjurada novamente por um curto período de tempo, causando dano adicional consideravelmente aumentado se Camille criar um intervalo entre os dois ataques.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/CamilleQ.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_Q1.webm"
            }, {
                "type": "W",
                "name": "VARREDURA TÁTICA",
                "description": "Camille faz um disparo em área de cone após um intervalo, causando dano. Inimigos na metade exterior têm sua velocidade reduzida e recebem dano adicional, ao mesmo tempo em que curam Camille.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/CamilleW.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_W1.webm"
            }, {
                "type": "E",
                "name": "DISPARO DE GANCHO",
                "description": "Camille puxa a si mesma na direção de uma parede, saltando e arremessando ao ar Campeões inimigos ao aterrissar.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/CamilleE.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_E1.webm"
            }, {
                "type": "Ultimate",
                "name": "ULTIMATO HEXTEC",
                "description": "Camille avança em direção ao Campeão alvo, ancorando-o à área. Ela também causa Dano Mágico adicional ao alvo com seus ataques básicos.",
                "image": "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/spell/CamilleR.png",
                "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_R1.webm"
            }],
            "skins": [{
                "name": "Camille cibernética",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_1.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Camille congregação das bruxas",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_2.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "IG Camille",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_10.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Camille arcana",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_11.jpg",
                "preco": "1350",
                "coin": iconRP
            }, {
                "name": "Camille comandante de ataque",
                "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_21.jpg",
                "preco": "1350",
                "coin": iconRP
            }]
        }
    ],
    [{
        "version": "13.21.1",
        "id": "Cassiopeia",
        "key": "69",
        "name": "Cassiopeia",
        "title": "O ABRAÇO DA SERPENTE",
        "blurb": "Cassiopeia é uma criatura mortal dedicada a manipular os outros para fazer suas vontades sinistras. A mais bela e mais nova filha da nobre família Du Couteau de Noxus aventurou-se pelas criptas profundas sob Shurima em busca de poderes ancestrais. Lá, ela foi mordida por um terrível guardião de uma tumba, cujo veneno a transformou em uma víbora predadora. Astuciosa e ágil, Cassiopeia agora desliza sob o véu da noite, petrificando seus inimigos com seu olhar nefasto.",
        "info": {
            "attack": 2,
            "defense": 3,
            "magic": 9,
            "difficulty": 10
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
            "group": "champion",
            "x": 0,
            "y": 96,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Mago"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 630,
            "hpperlevel": 104,
            "mp": 350,
            "mpperlevel": 60,
            "movespeed": 328,
            "armor": 18,
            "armorperlevel": 4.7,
            "spellblock": 32,
            "spellblockperlevel": 1.3,
            "attackrange": 550,
            "hpregen": 5.5,
            "hpregenperlevel": 0.5,
            "mpregen": 8,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 53,
            "attackdamageperlevel": 3,
            "attackspeedperlevel": 1.5,
            "attackspeed": 0.647
        },
        "skills": [{
            "type": "Passiva",
            "name": "GRAÇA SERPENTINA",
            "description": "Cassiopeia recebe Velocidade de Movimento por nível, mas não pode comprar Botas.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/passive/Cassiopeia_Passive.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_P1.webm"
        }, {
            "type": "Q",
            "name": "EXPLOSÃO VENENOSA",
            "description": "Cassiopeia atinge uma área com veneno após um breve intervalo, recebendo Velocidade de Movimento caso atinja um Campeão inimigo.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/CassiopeiaQ.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_Q1.webm"
        }, {
            "type": "W",
            "name": "MIASMA",
            "description": "Cassiopeia lança diversas nuvens de veneno que reduzem a velocidade, prendem ao chão e causam dano leve aos inimigos que as atravessarem. Inimigos presos ao chão não podem usar habilidades de movimentação.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/CassiopeiaW.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_W1.webm"
        }, {
            "type": "E",
            "name": "PRESAS DUPLAS",
            "description": "Cassiopeia desfere um ataque que causa dano adicional a alvos envenenados, curando a si mesma com um percentual do dano causado. Se o alvo morrer com este ataque, Cassiopeia recupera Mana.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/CassiopeiaE.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_E1.webm"
        }, {
            "type": "Ultimate",
            "name": "OLHAR PETRIFICADOR",
            "description": "Cassiopeia lança uma espiral de energia mágica de seus olhos, atordoando quaisquer inimigos à sua frente que estiverem de frente para ela e reduzindo a velocidade de quaisquer outros que estiverem de costas.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/CassiopeiaR.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_R1.webm"
        }],
        "skins": [{
            "name": "Cassiopeia velho oeste",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_1.jpg",
            "preco": "520",
            "coin": iconRP
        }, {
            "name": "Cassiopeia sereia",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_2.jpg",
            "preco": "520",
            "coin": iconRP
        }, {
            "name": "Cassiopeia helênica",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_3.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Cassiopeia presas de jade",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_4.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Cassiopeia eternum",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_8.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Cassiopeia florescer espiritual",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_9.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Cassiopeia congregação das bruxas",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_18.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Cassiopeia feiticeira",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_28.jpg",
            "preco": "1350",
            "coin": iconRP
        }]
    },
    {
        "version": "13.21.1",
        "id": "Chogath",
        "key": "31",
        "name": "Cho'Gath",
        "title": "O TERROR DO VAZIO",
        "blurb": "A partir do momento em que Cho'Gath emergiu da terra para a luz do sol ofuscante de Runeterra, a besta foi motivada por pura fome insaciável. A mais perfeita expressão do desejo do Vazio de consumir toda a vida, a biologia complexa de Cho'Gath rapidamente converte matéria em crescimento corporal novo, aumentando sua massa e densidade muscular ou endurecendo sua carapaça externa como um diamante orgânico. Quando crescer não supre as necessidades dessa criatura do Vazio, ele vomita o material em excesso como espinhos afiados, deixando sua presa espetada e pronta para ser devorada mais tarde.",
        "info": {
            "attack": 3,
            "defense": 7,
            "magic": 7,
            "difficulty": 5
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 48,
            "y": 96,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Tanque, ",
            " Mago"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 644,
            "hpperlevel": 94,
            "mp": 270,
            "mpperlevel": 60,
            "movespeed": 345,
            "armor": 38,
            "armorperlevel": 5,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 125,
            "hpregen": 9,
            "hpregenperlevel": 0.85,
            "mpregen": 7.2,
            "mpregenperlevel": 0.45,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 69,
            "attackdamageperlevel": 4.2,
            "attackspeedperlevel": 1.44,
            "attackspeed": 0.625
        },
        "skills": [{
            "type": "Passiva",
            "name": "CARNÍVORO",
            "description": "Sempre que Cho'Gath abate uma unidade, ele recupera Vida e Mana. Os valores restaurados aumentam com o nível de Cho'Gath.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/passive/GreenTerror_TailSpike.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_P1.webm"
        }, {
            "type": "Q",
            "name": "RUPTURA",
            "description": "Rompe o chão num local-alvo, lançando unidades inimigas ao ar e causando dano e redução de velocidade.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/Rupture.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_Q1.webm"
        }, {
            "type": "W",
            "name": "GRITO SELVAGEM",
            "description": "Cho'Gath solta um terrível urro em inimigos em área de cone, causando Dano Mágico e Silenciamento a eles por alguns segundos.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/FeralScream.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_W1.webm"
        }, {
            "type": "E",
            "name": "ESPINHOS VORPAIS",
            "description": "Os ataques de Cho'Gath lançam espinhos letais, causando dano e reduzindo a velocidade de unidades inimigas à sua frente.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/VorpalSpikes.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_E1.webm"
        }, {
            "type": "Ultimate",
            "name": "BANQUETE",
            "description": "Devora uma unidade inimiga, causando uma grande quantidade de Dano Verdadeiro. Se o alvo for abatido, Cho'Gath cresce, recebendo Vida máxima.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/Feast.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_R1.webm"
        }],
        "skins": [{
            "name": "Cho'Gath terror noturno",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_1.jpg",
            "preco": "520",
            "coin": iconRP
        }, {
            "name": "Cho'Gath cavalheiro",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_2.jpg",
            "preco": "1820",
            "coin": iconRP
        }, {
            "name": "Cho'Gath do lago ness",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_3.jpg",
            "preco": "520",
            "coin": iconRP
        }, {
            "name": "Cho'Gath jurássico",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_4.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Cho'Gath máquina de combate primum",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_5.jpg",
            "preco": "1820",
            "coin": iconRP
        }, {
            "name": "Cho'Gath pré-histórico",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_6.jpg",
            "preco": "750",
            "coin": iconRP
        }, {
            "name": "Cho'Gath estrela negra",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_7.jpg",
            "preco": "100",
            "coin": iconMiticEssence
        }, {
            "name": "Cho'Gath pergaminhos shan hai",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_14.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Cho'Gath pacto quebrado",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_23.jpg",
            "preco": "1350",
            "coin": iconRP
        }]
    },
    {
        "version": "13.21.1",
        "id": "Corki",
        "key": "42",
        "name": "Corki",
        "title": "O BOMBARDEIRO OUSADO",
        "blurb": "Corki, o piloto yordle, ama duas coisas acima de qualquer outra: voar e seu glamoroso bigode... não necessariamente nessa ordem. Depois de deixar Bandópolis, ele se estabeleceu em Piltover e se apaixonou pelas máquinas maravilhosas que encontrou por lá. Ele se dedicou ao desenvolvimento de engenhocas voadoras, liderando uma força de defesa aérea de veteranos experientes conhecidos como os Serpentes Gritantes. Calmo sob fogo, Corki patrulha os céus ao redor de seu novo lar e nunca encontrou um problema que uma boa barragem de mísseis não pudesse resolver.",
        "info": {
            "attack": 8,
            "defense": 3,
            "magic": 6,
            "difficulty": 6
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
            "group": "champion",
            "x": 96,
            "y": 96,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Atirador"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 588,
            "hpperlevel": 105,
            "mp": 350,
            "mpperlevel": 54,
            "movespeed": 325,
            "armor": 28,
            "armorperlevel": 4.7,
            "spellblock": 30,
            "spellblockperlevel": 1.3,
            "attackrange": 550,
            "hpregen": 5.5,
            "hpregenperlevel": 0.55,
            "mpregen": 7.4,
            "mpregenperlevel": 0.55,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 55,
            "attackdamageperlevel": 2.8,
            "attackspeedperlevel": 2.3,
            "attackspeed": 0.638
        },
        "skills": [{
            "type": "Passiva",
            "name": "MUNIÇÃO HEXTEC",
            "description": "Uma porcentagem do Dano de Ataque Básico de Corki é convertida em Dano Mágico. Corki pode buscar O Pacote na base, concedendo a ele Velocidade de Movimento e fortalecendo a conjuração de Valquíria.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/passive/Corki_RapidReload.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_P1.webm"
        }, {
            "type": "Q",
            "name": "BOMBA DE FÓSFORO",
            "description": "Corki dispara uma bomba luminosa em um local alvo, causando Dano Mágico a inimigos na área. Este ataque também revela unidades na área por uma curta duração.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/PhosphorusBomb.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_Q1.webm"
        }, {
            "type": "W",
            "name": "VALQUÍRIA",
            "description": "Corki sobrevoa uma curta distância, soltando bombas que criam um rastro de fogo, causando dano a oponentes que nele permanecerem.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/CarpetBomb.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_W1.webm"
        }, {
            "type": "E",
            "name": "METRALHADORA",
            "description": "A metralhadora de Corki dispara rapidamente em área de cone à sua frente, causando dano, reduzindo a Armadura e a Resistência Mágica do inimigo.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/GGun.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_E1.webm"
        }, {
            "type": "Ultimate",
            "name": "BARRAGEM DE MÍSSEIS",
            "description": "Corki dispara um míssil em direção ao local alvo, que explode com o impacto, causando dano aos inimigos na área. Corki armazena mísseis ao longo do tempo, com um limite máximo. O 3º míssil armazenado será um Grandão, que causa dano adicional.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/MissileBarrage.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_R1.webm"
        }],
        "skins": [{
            "name": "Corki Ovni",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_1.jpg",
            "preco": "",
            "coin": iconBau
        }, {
            "name": "Corki no bobsleigh",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_2.jpg",
            "preco": "1820",
            "coin": iconRP
        }, {
            "name": "Corki barão vermelho",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_3.jpg",
            "preco": "1820",
            "coin": iconRP
        }, {
            "name": "Corki caranga envenenada",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_4.jpg",
            "preco": "520",
            "coin": iconRP
        }, {
            "name": "Corki montado em urf",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_5.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Corki asas de dragão",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_6.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Corki Fnatic",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_7.jpg",
            "preco": "750",
            "coin": iconRP
        }, {
            "name": "Corki fliperama",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_8.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Corki Corgi",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_18.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Corki Astronauta",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_26.jpg",
            "preco": "1350",
            "coin": iconRP
        }]
    },
    {
        "version": "13.21.1",
        "id": "Darius",
        "key": "122",
        "name": "Darius",
        "title": "A MÃO DE NOXUS",
        "blurb": "Não há símbolo maior do poder de Noxus do que Darius, o mais temido e experiente comandante da nação. Vindo de origens humildes para se tornar a Mão de Noxus, ele corta seu caminho através dos inimigos do império; muitos dos quais são, inclusive, noxianos. Sabendo que ele nunca duvida da integridade de sua causa e que nunca hesita assim que seu machado é levantado, aqueles que desafiam o comandante da Legião Trifária não esperam por misericórdia.",
        "info": {
            "attack": 9,
            "defense": 5,
            "magic": 1,
            "difficulty": 2
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 144,
            "y": 96,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Tanque"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 652,
            "hpperlevel": 114,
            "mp": 263,
            "mpperlevel": 58,
            "movespeed": 340,
            "armor": 39,
            "armorperlevel": 5.2,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 175,
            "hpregen": 10,
            "hpregenperlevel": 0.95,
            "mpregen": 6.6,
            "mpregenperlevel": 0.35,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 64,
            "attackdamageperlevel": 5,
            "attackspeedperlevel": 1,
            "attackspeed": 0.625
        },
        "skills": [{
            "type": "Passiva",
            "name": "HEMORRAGIA",
            "description": "Os Ataques e Habilidades de dano de Darius fazem os inimigos sangrarem, causando Dano Físico ao longo de 5s e acumulando até 5 vezes. Darius se enfurece e recebe uma grande quantidade de Dano de Ataque quando o alvo alcança o máximo de acúmulos.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/passive/Darius_Icon_Hemorrhage.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_P1.webm"
        }, {
            "type": "Q",
            "name": "DIZIMAR",
            "description": "Darius pega impulso e golpeia com seu machado em um movimento circular. Os inimigos atingidos pela lâmina recebem mais dano do que aqueles atingidos pelo cabo. Darius cura a si mesmo com base nos Campeões inimigos e monstros grandes atingidos pela lâmina.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/DariusCleave.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_Q1.webm"
        }, {
            "type": "W",
            "name": "ATAQUE MUTILADOR",
            "description": "O próximo ataque de Darius acerta uma artéria importante do inimigo. Enquanto a vítima sangra, a Velocidade de Movimento dela é reduzida.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/DariusNoxianTacticsONH.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_W1.webm"
        }, {
            "type": "E",
            "name": "APREENDER",
            "description": "Darius afia seu machado, fazendo com que seu Dano Físico ignore passivamente um percentual da Armadura do alvo. Quando ativado, Darius ataca seus inimigos com o gancho do seu machado e os puxa em sua direção.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/DariusAxeGrabCone.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_E1.webm"
        }, {
            "type": "Ultimate",
            "name": "GUILHOTINA DE NOXUS",
            "description": "Darius salta na direção de um Campeão inimigo e o atinge com um golpe letal, causando Dano Verdadeiro. Este dano aumenta a cada acúmulo de Hemorragia no alvo. Se Guilhotina de Noxus causar o golpe final, seu Tempo de Recarga é zerado por um breve momento.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/DariusExecute.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_R1.webm"
        }],
        "skins": [{
            "name": "Lorde Darius",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_1.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Darius Bioforja",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_2.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Darius rei dos bretões",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_3.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Darius mestre da enterrada",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_4.jpg",
            "preco": "1820",
            "coin": iconRP
        }, {
            "name": "Darius colegial",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_8.jpg",
            "preco": "750",
            "coin": iconRP
        }, {
            "name": "Darius nova temível",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_14.jpg",
            "preco": "125",
            "coin": iconMiticEssence
        }, {
            "name": "Deus rei Darius",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_15.jpg",
            "preco": "1820",
            "coin": iconRP
        }, {
            "name": "Darius velho oeste",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_16.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Darius fera lunar",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_24.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Darius pesadelo na cidade do crime",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_33.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Darius florescer espiritual",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_43.jpg",
            "preco": "1350",
            "coin": iconRP
        }]
    },
    {
        "version": "13.21.1",
        "id": "Diana",
        "key": "131",
        "name": "Diana",
        "title": "O ESCÁRNIO DA LUA",
        "blurb": "Empunhando sua espada lunar crescente, Diana luta como uma guerreira dos Lunari, um credo quase extinto nas terras ao redor do Monte Targon. Vestida com uma armadura brilhante da cor da neve de inverno noturna, ela é a personificação do poder da lua prateada. Dotada com a essência de um Aspecto de além do cume de Targon, Diana já não é mais totalmente humana e tem dificuldades para dominar seu poder e propósito neste mundo.",
        "info": {
            "attack": 7,
            "defense": 6,
            "magic": 8,
            "difficulty": 4
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
            "group": "champion",
            "x": 192,
            "y": 96,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Mago"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 640,
            "hpperlevel": 109,
            "mp": 375,
            "mpperlevel": 25,
            "movespeed": 345,
            "armor": 31,
            "armorperlevel": 4.3,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 150,
            "hpregen": 6.5,
            "hpregenperlevel": 0.85,
            "mpregen": 8,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 57,
            "attackdamageperlevel": 3,
            "attackspeedperlevel": 2.25,
            "attackspeed": 0.625
        },
        "skills": [{
            "type": "Passiva",
            "name": "ESPADA DE PRATA LUNAR",
            "description": "Cada terceiro ataque atinge os oponentes próximos, causando Dano Mágico adicional. Depois de conjurar uma Habilidade, Diana recebe Velocidade de Ataque em seus próximos 3 Ataques.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/passive/Diana_Passive_LunarBlade.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_P1.webm"
        }, {
            "type": "Q",
            "name": "GOLPE CRESCENTE",
            "description": "Faz um disparo de energia lunar em forma de arco, causando Dano Mágico. Afeta os inimigos atingidos com Plenilúnio, revelando-os por 3s se não estiverem furtivos.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DianaQ.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_Q1.webm"
        }, {
            "type": "W",
            "name": "CASCATA LÍVIDA",
            "description": "Diana cria três esferas orbitantes que detonam ao contato com inimigos, causando dano em área. Ela também ganha um escudo temporário que absorve dano. Se a terceira esfera detonar, o escudo recebe resistência adicional.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DianaOrbs.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_W1.webm"
        }, {
            "type": "E",
            "name": "ZÊNITE LUNAR",
            "description": "Torna-se a encarnação viva da lua vingativa, avançando contra um inimigo e causando Dano Mágico. Zênite Lunar não tem Tempo de Recarga ao avançar em um inimigo afetado por Plenilúnio. Todos os outros inimigos terão o efeito de Plenilúnio removido independentemente de terem sido o alvo de Zênite Lunar.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DianaTeleport.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_E1.webm"
        }, {
            "type": "Ultimate",
            "name": "COLAPSO MINGUANTE",
            "description": "Diana revela e atrai todos os inimigos próximos e reduz a velocidade deles. Se Diana atrair um ou mais Campeões inimigos, o Plenilúnio cai sobre ela depois de um breve intervalo, causando Dano Mágico em uma área ao seu redor, aumentado a cada alvo atraído além do primeiro.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DianaR.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_R1.webm"
        }],
        "skins": [{
            "name": "Diana Valquíria sombria",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_1.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Diana Deusa lunar",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_2.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Diana Infernal",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_3.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Diana Lua Sangrenta",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_11.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Diana Águas sombrias",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_12.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Diana caçadora de dragões",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_18.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Diana Rainha de batalha",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_25.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Diana Rainha de batalha prestígio",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_26.jpg",
            "preco": "125",
            "coin": iconMiticEssence
        }, {
            "name": "Diana sentinela",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_27.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Diana fogos de artifício",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_37.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Diana benção do inverno",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_47.jpg",
            "preco": "1820",
            "coin": iconRP
        }]
    },
    {
        "version": "13.21.1",
        "id": "Draven",
        "key": "119",
        "name": "Draven",
        "title": "O CARRASCO DE NOXUS",
        "blurb": "Em Noxus, guerreiros conhecidos como Desafiadores lutam um contra o outro em uma arena onde sangue é derramado e a força é testada, mas nenhum foi tão celebrado como Draven. Antes um soldado, ele descobriu que as multidões apreciavam seu instinto pelo drama e sua habilidade suprema com seus machados giratórios. Viciado no espetáculo de sua própria perfeição impetuosa, Draven jurou derrotar qualquer que seja seu oponente para garantir que seu nome será cantado pelo império para todo o sempre.",
        "info": {
            "attack": 9,
            "defense": 3,
            "magic": 1,
            "difficulty": 8
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
            "group": "champion",
            "x": 240,
            "y": 96,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Atirador"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 675,
            "hpperlevel": 104,
            "mp": 361,
            "mpperlevel": 39,
            "movespeed": 330,
            "armor": 29,
            "armorperlevel": 4.5,
            "spellblock": 30,
            "spellblockperlevel": 1.3,
            "attackrange": 550,
            "hpregen": 3.75,
            "hpregenperlevel": 0.7,
            "mpregen": 8.05,
            "mpregenperlevel": 0.65,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 62,
            "attackdamageperlevel": 3.6,
            "attackspeedperlevel": 2.7,
            "attackspeed": 0.679
        },
        "skills": [{
            "type": "Passiva",
            "name": "LEAGUE OF DRAVEN",
            "description": "Draven ganha Adoração de seus fãs quando apanha uma Revolução do Machado ou abate uma tropa, monstro ou torre. Abater Campeões inimigos concede ouro adicional a Draven, com base em quanta Adoração ele tem.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/passive/Draven_passive.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_P1.webm"
        }, {
            "type": "Q",
            "name": "REVOLUÇÃO DO MACHADO",
            "description": "O próximo ataque de Draven causará Dano Físico adicional. O machado ricocheteará do alvo em direção ao ar. Se Draven o apanhar, ele automaticamente irá preparar outra Revolução do Machado. Draven pode ter duas Revoluções do Machado simultaneamente em ação.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DravenSpinning.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_Q1.webm"
        }, {
            "type": "W",
            "name": "ADRENALINA",
            "description": "Draven ganha um aumento de Velocidade de Movimento e de Ataque. O aumento na Velocidade de Movimento decai rapidamente ao longo da duração. Apanhar uma Revolução do Machado fará com que o Tempo de Recarga de Adrenalina seja zerado.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DravenFury.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_W1.webm"
        }, {
            "type": "E",
            "name": "SAI DA FRENTE",
            "description": "Draven arremessa seus machados, causando Dano Físico aos alvos atingidos e empurrando-os para o lado. Os alvos atingidos sofrem redução de velocidade.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DravenDoubleShot.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_E1.webm"
        }, {
            "type": "Ultimate",
            "name": "RETA DA MORTE",
            "description": "Draven arremessa dois machados gigantes para causar Dano Físico a cada unidade atingida. Reta da Morte lentamente muda de direção e retorna a Draven após atingir um Campeão inimigo. Draven também pode ativar esta habilidade durante o percurso dos machados para fazer com que voltem antecipadamente. Causa menos dano para cada unidade atingida e zera quando os machados mudam de direção. Executa inimigos com Vida inferior ao número de acúmulos de Adoração do Draven.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DravenRCast.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_R1.webm"
        }],
        "skins": [{
            "name": "Draven ceifador de almas",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_1.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Draven Gladiador",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_2.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Draven Locutor",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_3.jpg",
            "preco": "1820",
            "coin": iconRP
        }, {
            "name": "Draven curtindo o verão",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_4.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Draven caçador de feras",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_5.jpg",
            "preco": "750",
            "coin": iconRP
        }, {
            "name": "Draven Draven",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_6.jpg",
            "preco": "500",
            "coin": iconRP
        }, {
            "name": "Draven Noel",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_12.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Draven reinos mech",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_13.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Draven Destruído",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_20.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Draven Galante",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_29.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Draven Noite Apavorante",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_39.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Draven La Ilusión",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_48.jpg",
            "preco": "1350",
            "coin": iconRP
        }]
    },
    {
        "version": "13.21.1",
        "id": "DrMundo",
        "key": "36",
        "name": "DrMundo",
        "title": "O LOUCO DE ZAUN",
        "blurb": "Completamente maluco, tragicamente perigoso e terrivelmente roxo, Dr. Mundo é o que mantém muitos zaunitas dentro de casa nas noites mais escuras. Hoje se diz médico, mas ele já foi um paciente do manicômio mais infame de Zaun. Após ''curar'' toda a equipe do local, Dr. Mundo começou a atuar em sua nova profissão nos corredores vazios do lugar em que um dia fora tratado, repetindo os procedimentos extremamente antiéticos pelos quais ele mesmo havia passado. Munido de um armário cheio de remédios e nenhum conhecimento médico, ele fica mais monstruoso a cada nova injeção e continua instilando medo nos infelizes ''pacientes'' que passam perto de sua ''clínica''.",
        "info": {
            "attack": 5,
            "defense": 7,
            "magic": 6,
            "difficulty": 5
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 288,
            "y": 96,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Tanque"
        ],
        "partype": "None",
        "stats": {
            "hp": 613,
            "hpperlevel": 103,
            "mp": 0,
            "mpperlevel": 0,
            "movespeed": 345,
            "armor": 32,
            "armorperlevel": 3.7,
            "spellblock": 29,
            "spellblockperlevel": 2.3,
            "attackrange": 125,
            "hpregen": 7,
            "hpregenperlevel": 0.5,
            "mpregen": 0,
            "mpregenperlevel": 0,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 61,
            "attackdamageperlevel": 2.5,
            "attackspeedperlevel": 3.3,
            "attackspeed": 0.67
        },
        "skills": [{
            "type": "Passiva",
            "name": "VAI PARA ONDE QUER",
            "description": "Dr. Mundo resiste ao próximo efeito Imobilizador que o atingir, perdendo Vida e derrubando um recipiente químico nas proximidades. Dr. Mundo pode pegar o recipiente ao passar por cima dele, restaurando Vida e reduzindo o Tempo de Recarga da Habilidade. Dr. Mundo também tem Regeneração de Vida significativamente mais alta.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/passive/DrMundo_P.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_P1.webm"
        }, {
            "type": "Q",
            "name": "SERRA INFECTADA",
            "description": "Dr. Mundo arremessa uma serra infectada, causando dano ao primeiro inimigo atingido com base na Vida atual do alvo e causando Lentidão a ele.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DrMundoQ.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_Q1.webm"
        }, {
            "type": "W",
            "name": "CHOQUINHO CARDÍACO",
            "description": "Dr. Mundo se eletrocuta, causando dano contínuo aos inimigos próximos e acumulando uma parte do dano sofrido. Ele causa uma explosão de dano aos inimigos próximos ao final da duração ou ao Reconjurar. Se atingir um inimigo, Dr. Mundo se curará em uma porcentagem do dano armazenado.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DrMundoW.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_W1.webm"
        }, {
            "type": "E",
            "name": "TRAUMATISMO",
            "description": "Passivo: Dr. Mundo recebe Dano de Ataque adicional (que aumenta com base na própria Vida máxima). Ativo: Dr. Mundo golpeia o inimigo com sua maleta ''médica'', causando dano adicional com base na própria Vida perdida. Se o inimigo for abatido, será arremessado, causando dano aos inimigos que atravessar.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DrMundoE.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_E1.webm"
        }, {
            "type": "Ultimate",
            "name": "DOSAGEM MÁXIMA",
            "description": "Dr. Mundo enche-se de produtos químicos, curando instantaneamente uma porcentagem da própria Vida perdida. Depois, ele recebe Velocidade de Movimento e regenera parte da própria Vida máxima ao longo da duração.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/DrMundoR.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_R1.webm"
        }],
        "skins": [{
            "name": "Dr.Mulko",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_1.jpg",
            "preco": "520",
            "coin": iconRP
        }, {
            "name": "Sr.Mundoverso",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_2.jpg",
            "preco": "520",
            "coin": iconRP
        }, {
            "name": "Diretor Mundo",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_3.jpg",
            "preco": "1820",
            "coin": iconRP
        }, {
            "name": "Mundo Mundo",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_4.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "Mundo Carrasco",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_5.jpg",
            "preco": "520",
            "coin": iconRP
        }, {
            "name": "Mundo Enfurecido",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_6.jpg",
            "preco": "975",
            "coin": iconRP
        }, {
            "name": "TPA Mundo",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_7.jpg",
            "preco": "750",
            "coin": iconRP
        }, {
            "name": "Mundo curtindo o verão",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_8.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Mundo El Macho",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_9.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Mundo Príncipe Congelado",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_10.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Dr.Mundo Demônios Urbanos",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_21.jpg",
            "preco": "1350",
            "coin": iconRP
        }]
    },
    {
        "version": "13.21.1",
        "id": "Ekko",
        "key": "245",
        "name": "Ekko",
        "title": "O RAPAZ QUE ESTILHAÇOU O TEMPO",
        "blurb": "Um prodígio das ruas violentas de Zaun, Ekko manipula o tempo para reverter qualquer situação a seu favor. Usando sua própria invenção, o Revo-Z, ele explora as possíveis bifurcações da realidade para criar o momento perfeito. Embora valorize muito sua liberdade, quando algo ameaça seus amigos, ele não mede esforços para defendê-los. Para meros observadores, Ekko parece conseguir o impossível sempre de primeira.",
        "info": {
            "attack": 5,
            "defense": 3,
            "magic": 7,
            "difficulty": 8
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
            "group": "champion",
            "x": 336,
            "y": 96,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Assassino, ",
            " Lutador"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 655,
            "hpperlevel": 99,
            "mp": 280,
            "mpperlevel": 70,
            "movespeed": 340,
            "armor": 32,
            "armorperlevel": 4.2,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 125,
            "hpregen": 9,
            "hpregenperlevel": 0.9,
            "mpregen": 7,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 58,
            "attackdamageperlevel": 3,
            "attackspeedperlevel": 3.3,
            "attackspeed": 0.688
        },
        "skills": [{
            "type": "Passiva",
            "name": "RESSONÂNCIA REVO-Z",
            "description": "Cada terceiro ataque ou habilidade de dano no mesmo alvo causa Dano Mágico adicional e concede a Ekko um impulso de velocidade se o alvo for um Campeão.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/passive/Ekko_P.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_P1.webm"
        }, {
            "type": "Q",
            "name": "GIRATEMPO",
            "description": "Ekko arremessa uma granada que se expande em um campo de distorção temporal ao atingir um Campeão inimigo, causando dano e reduzindo a velocidade de todos dentro de sua área de ação. Após um intervalo, a granada retorna em direção a Ekko, causando dano no trajeto de volta.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/EkkoQ.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_Q1.webm"
        }, {
            "type": "W",
            "name": "CONVERGÊNCIA PARALELA",
            "description": "Os ataques básicos de Ekko causam Dano Mágico adicional aos inimigos com Vida baixa. Ekko pode conjurar Convergência Paralela para separar a linha do tempo, causando uma anomalia após alguns segundos e reduzindo a velocidade de inimigos pegos por ela. Se Ekko adentrar a anomalia, ele receberá um escudo e acionará uma detonação que atordoa os inimigos, colocando-os em estase temporal.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/EkkoW.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_W1.webm"
        }, {
            "type": "E",
            "name": "MERGULHO FÁSICO",
            "description": "Ekko faz um rolamento evasivo enquanto carrega seu Revo-Z. Seu próximo ataque causa dano adicional e distorce a realidade, teleportando-o a seu alvo.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/EkkoE.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_E1.webm"
        }, {
            "type": "Ultimate",
            "name": "CRONOQUEBRA",
            "description": "Ekko estilhaça sua linha do tempo, tornando-se inalvejável e rebobinando para um ponto mais favorável no tempo. Ele retorna para qualquer ponto que esteve nos últimos segundos e se cura em um percentual do dano recebido nesta duração. Inimigos próximos a sua área de chegada recebem dano massivo.",
            "image": "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/EkkoR.png",
            "video": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_R1.webm"
        }],
        "skins": [{
            "name": "Ekko Tempestade de Areia",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_1.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Ekko Colegial",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_2.jpg",
            "preco": "750",
            "coin": iconRP
        }, {
            "name": "Projeto Ekko",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_3.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "SKT T1 Ekko",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_11.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Ekko Gostosuras ou Travessuras",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_12.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Ekko True Damage",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_19.jpg",
            "preco": "1820",
            "coin": iconRP
        }, {
            "name": "Pulsefire Ekko",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_28.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Ekko Fogolume",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_36.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Ekko Guardião Estelar",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_45.jpg",
            "preco": "1350",
            "coin": iconRP
        }, {
            "name": "Ekko Guardião Estelar Prestígio",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_46.jpg",
            "preco": "125",
            "coin": iconMiticEssence
        }, {
            "name": "Ekko True Damage Revelação",
            "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_56.jpg",
            "preco": "",
            "coin": iconBau
        }]
    },
    {
        "version": "13.21.1",
        "id": "Elise",
        "key": "60",
        "name": "Elise",
        "title": "A ARANHA RAINHA",
        "blurb": "Elise é uma predadora mortal que vive em um palácio escuro e reservado nas profundezas da cidade mais antiga de Noxus. Ela já foi mortal um dia, dama de uma família antes poderosa, mas a mordida de uma aranha peçonhenta a transformou em algo belo, imortal e completamente desumano, uma criatura aracnídea que atrai vítimas ingênuas para sua teia. Para manter sua eterna juventude, Elise agora prefere se alimentar dos inocentes e descrentes, e são poucos os que conseguem resistir aos seus encantos.",
        "info": {
            "attack": 6,
            "defense": 5,
            "magic": 7,
            "difficulty": 9
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
            "group": "champion",
            "x": 384,
            "y": 96,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Mago, ",
            " Lutador"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 650,
            "hpperlevel": 109,
            "mp": 324,
            "mpperlevel": 50,
            "movespeed": 330,
            "armor": 30,
            "armorperlevel": 5.2,
            "spellblock": 30,
            "spellblockperlevel": 1.3,
            "attackrange": 550,
            "hpregen": 5.5,
            "hpregenperlevel": 0.6,
            "mpregen": 6,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 55,
            "attackdamageperlevel": 3,
            "attackspeedperlevel": 1.75,
            "attackspeed": 0.625
        }
    },
    {
        "version": "13.21.1",
        "id": "Evelynn",
        "key": "28",
        "name": "Evelynn",
        "title": "O ABRAÇO DA AGONIA",
        "blurb": "Nas ruelas sombrias de Runeterra, a criatura demoníaca Evelynn busca sua próxima vítima. Ela atrai presas com sua voluptuosa aparência de fêmea humana, mas assim que a vítima sucumbe ao seu charme, a verdadeira forma de Evelynn é revelada. A criatura então sujeita suas vítimas a um tormento inenarrável, gratificando-se com a dor alheia. Para ela, esses contatos são casinhos inocentes; Para o resto de Runeterra, são histórias macabras de encontros lascivos que deram errado e lembretes terríveis sobre o custo do desejo desenfreado.",
        "info": {
            "attack": 4,
            "defense": 2,
            "magic": 7,
            "difficulty": 10
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
            "group": "champion",
            "x": 432,
            "y": 96,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Assassino, ",
            " Mago"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 642,
            "hpperlevel": 98,
            "mp": 315,
            "mpperlevel": 42,
            "movespeed": 335,
            "armor": 37,
            "armorperlevel": 4.7,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 125,
            "hpregen": 8.5,
            "hpregenperlevel": 0.75,
            "mpregen": 8.11,
            "mpregenperlevel": 0.6,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 61,
            "attackdamageperlevel": 3,
            "attackspeedperlevel": 2.1,
            "attackspeed": 0.667
        }
    }
    ],
    [{
        "version": "13.21.1",
        "id": "Ezreal",
        "key": "81",
        "name": "Ezreal",
        "title": "O EXPLORADOR PRÓDIGO",
        "blurb": "Um aventureiro arrojado, com um talento nato nas artes mágicas, Ezreal desbrava catacumbas soterradas, envolve-se com antigas maldições e supera com facilidade as situações mais improváveis. Sua coragem e ousadia não têm limites e ele prefere resolver as coisas no improviso, confiando parcialmente no seu talento, mas principalmente em sua mística luva shurimane, que ele usa para causar explosões arcanas devastadoras. Uma coisa é certa: quando Ezreal está por perto, lá vem problema. Ou lá vai. Ou já veio.",
        "info": {
            "attack": 7,
            "defense": 2,
            "magic": 6,
            "difficulty": 7
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
            "group": "champion",
            "x": 0,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Atirador, ",
            " Mago"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 600,
            "hpperlevel": 102,
            "mp": 375,
            "mpperlevel": 70,
            "movespeed": 325,
            "armor": 24,
            "armorperlevel": 4.7,
            "spellblock": 30,
            "spellblockperlevel": 1.3,
            "attackrange": 550,
            "hpregen": 4,
            "hpregenperlevel": 0.65,
            "mpregen": 8.5,
            "mpregenperlevel": 1,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 62,
            "attackdamageperlevel": 2.5,
            "attackspeedperlevel": 2.5,
            "attackspeed": 0.625
        }
    },
    {
        "version": "13.21.1",
        "id": "Fiddlesticks",
        "key": "9",
        "name": "Fiddlesticks",
        "title": "O TERROR ANCESTRAL",
        "blurb": "Algo despertou em Runeterra. Algo ancestral. Algo terrível. O eterno terror conhecido como Fiddlesticks vaga pelos confins do mundo mortal, atraído por áreas dominadas por uma paranoia palpável, onde se alimenta de vítimas apavoradas. Com sua foice afiada, essa criatura malformada e desgastada colhe a própria essência do medo, deixando a mente dos desafortunados que sobrevivem ao seu ataque totalmente fragmentada. Muito cuidado com o som dos corvos, ou com os sussurros de uma figura que parece quase humana... pois Fiddlesticks está de volta.",
        "info": {
            "attack": 2,
            "defense": 3,
            "magic": 9,
            "difficulty": 9
        },
        "image": {
            "full": "https://i.pinimg.com/564x/1d/69/0a/1d690ac3d8f5b8d0ad8512e5e55baeaf.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
            "group": "champion",
            "x": 48,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Mago, ",
            " Suporte"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 650,
            "hpperlevel": 106,
            "mp": 500,
            "mpperlevel": 28,
            "movespeed": 335,
            "armor": 34,
            "armorperlevel": 4.7,
            "spellblock": 30,
            "spellblockperlevel": 1.3,
            "attackrange": 480,
            "hpregen": 5.5,
            "hpregenperlevel": 0.6,
            "mpregen": 8,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 55,
            "attackdamageperlevel": 2.65,
            "attackspeedperlevel": 2.11,
            "attackspeed": 0.625
        }
    },
    {
        "version": "13.21.1",
        "id": "Fiora",
        "key": "114",
        "name": "Fiora",
        "title": "A GRANDE DUELISTA",
        "blurb": "A duelista mais temida de toda Valoran, Fiora é renomada tanto por suas maneiras bruscas e perspicácia quanto pela velocidade de sua rapieira de aço. Nascida na Casa Laurent no reino de Demacia, Fiora tomou o controle da família de seu pai no rastro de um escândalo que quase os destruiu. A reputação da Casa Laurent foi manchada, mas Fiora não mede esforços para restaurar a honra de sua família e devolvê-los a seu lugar de direito entre os melhores de Demacia.",
        "info": {
            "attack": 10,
            "defense": 4,
            "magic": 2,
            "difficulty": 3
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 96,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Assassino"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 620,
            "hpperlevel": 99,
            "mp": 300,
            "mpperlevel": 60,
            "movespeed": 345,
            "armor": 33,
            "armorperlevel": 4.7,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 150,
            "hpregen": 8.5,
            "hpregenperlevel": 0.55,
            "mpregen": 8,
            "mpregenperlevel": 0.7,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 68,
            "attackdamageperlevel": 3.3,
            "attackspeedperlevel": 3.2,
            "attackspeed": 0.69
        }
    },
    {
        "version": "13.21.1",
        "id": "Fizz",
        "key": "105",
        "name": "Fizz",
        "title": "O TRAPACEIRO DAS MARÉS",
        "blurb": "Fizz é um yordle anfíbio que vive entre os recifes que rodeiam Águas de Sentina. É comum que ele busque e devolva os dízimos jogados no mar por capitães supersticiosos, mas mesmo o mais velho dos marinheiros sabe que não é uma boa ideia irritá-lo. São muitas as histórias daqueles que subestimaram seu caráter escorregadio. Frequentemente confundido com algum tipo de espírito marinho imprevisível, ele comanda enormes bestas carnívoras das profundezas e se diverte confundindo tanto seus inimigos quanto seus aliados.",
        "info": {
            "attack": 6,
            "defense": 4,
            "magic": 7,
            "difficulty": 6
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
            "group": "champion",
            "x": 144,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Assassino, ",
            " Lutador"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 640,
            "hpperlevel": 106,
            "mp": 317,
            "mpperlevel": 52,
            "movespeed": 335,
            "armor": 22,
            "armorperlevel": 4.6,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 175,
            "hpregen": 8,
            "hpregenperlevel": 0.7,
            "mpregen": 6,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 58,
            "attackdamageperlevel": 3,
            "attackspeedperlevel": 3.1,
            "attackspeed": 0.658
        }
    },
    {
        "version": "13.21.1",
        "id": "Galio",
        "key": "3",
        "name": "Galio",
        "title": "O COLOSSO",
        "blurb": "Do lado de fora da reluzente cidade de Demacia, Galio, o colosso de pedra, vigia com zelo. Construído como bastião contra magos inimigos, ele geralmente permanece imóvel por décadas até que a presença de uma magia poderosa o desperte. Uma vez ativado, Galio aproveita bem o tempo, deleitando-se com a emoção de uma luta e da rara honra de defender seus compatriotas. Contudo, os triunfos dele são tanto doces quanto amargos, pois a magia que ele destrói é a mesma que o movimenta, e cada vitória o devolve à inércia.",
        "info": {
            "attack": 1,
            "defense": 10,
            "magic": 6,
            "difficulty": 5
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
            "group": "champion",
            "x": 192,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Tanque, ",
            " Mago"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 632,
            "hpperlevel": 126,
            "mp": 500,
            "mpperlevel": 40,
            "movespeed": 335,
            "armor": 24,
            "armorperlevel": 4.7,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 150,
            "hpregen": 8,
            "hpregenperlevel": 0.8,
            "mpregen": 9.5,
            "mpregenperlevel": 0.7,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 59,
            "attackdamageperlevel": 3.5,
            "attackspeedperlevel": 1.5,
            "attackspeed": 0.625
        }
    },
    {
        "version": "13.21.1",
        "id": "Gangplank",
        "key": "41",
        "name": "Gangplank",
        "title": "O TERROR DOS DOZE MARES",
        "blurb": "Tão inesperado quanto brutal, o autointitulado Rei dos Ladrões conhecido como Gangplank é temido por todos os mares. Ele já reinou na cidade portuária de Águas de Sentina e, apesar de seu reinado ter terminado, existem aqueles que acreditam que isso só o tornou mais perigoso. Gangplank preferiria ver Águas de Sentina banhadas de sangue mais uma vez do que deixar que outro a controlasse. E agora, armado com pistola, sabre e barris de pólvora, ele está determinado a retomar o que perdeu.",
        "info": {
            "attack": 7,
            "defense": 6,
            "magic": 4,
            "difficulty": 9
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 240,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 600,
            "hpperlevel": 114,
            "mp": 280,
            "mpperlevel": 60,
            "movespeed": 345,
            "armor": 31,
            "armorperlevel": 4.2,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 125,
            "hpregen": 6,
            "hpregenperlevel": 0.6,
            "mpregen": 7.5,
            "mpregenperlevel": 0.7,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 64,
            "attackdamageperlevel": 3.7,
            "attackspeedperlevel": 3.2,
            "attackspeed": 0.658
        }
    },
    {
        "version": "13.21.1",
        "id": "Garen",
        "key": "86",
        "name": "Garen",
        "title": "O PODER DE DEMACIA",
        "blurb": "Um guerreiro nobre e orgulhoso, Garen faz parte da Vanguarda Destemida. Popular entre seus companheiros e respeitado o suficiente por seus inimigos, sua reputação é nada mais do que o esperado de um herdeiro da prestigiosa família Stemmaguarda, encarregada de defender Demacia e seus ideais. Vestido com uma armadura resistente à magia e empunhando uma poderosa espada, Garen está sempre pronto para confrontar magos e feiticeiros no campo de batalha, em um verdadeiro furacão de aço virtuoso.",
        "info": {
            "attack": 7,
            "defense": 7,
            "magic": 1,
            "difficulty": 5
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 288,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Tanque"
        ],
        "partype": "None",
        "stats": {
            "hp": 690,
            "hpperlevel": 98,
            "mp": 0,
            "mpperlevel": 0,
            "movespeed": 340,
            "armor": 38,
            "armorperlevel": 4.2,
            "spellblock": 32,
            "spellblockperlevel": 1.55,
            "attackrange": 175,
            "hpregen": 8,
            "hpregenperlevel": 0.5,
            "mpregen": 0,
            "mpregenperlevel": 0,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 69,
            "attackdamageperlevel": 4.5,
            "attackspeedperlevel": 3.65,
            "attackspeed": 0.625
        }
    },
    {
        "version": "13.21.1",
        "id": "Gnar",
        "key": "150",
        "name": "Gnar",
        "title": "O YORDLE PRÉ-HISTÓRICO",
        "blurb": "Gnar é um yordle primitivo cujas artimanhas brincalhonas podem irromper em uma raiva infantil em um instante, transformando-o em uma besta gigantesca determinada a destruir. Congelada em Gelo Verdadeiro por milênios, essa criatura curiosa se libertou e agora saltita por um mundo mudado, que ela vê como exótico e maravilhoso. Encantado pelo perigo, Gnar atira tudo que puder nos seus inimigos, seja seu bumerangue ou um prédio próximo.",
        "info": {
            "attack": 6,
            "defense": 5,
            "magic": 5,
            "difficulty": 8
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 336,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Tanque"
        ],
        "partype": "Rage",
        "stats": {
            "hp": 540,
            "hpperlevel": 79,
            "mp": 100,
            "mpperlevel": 0,
            "movespeed": 335,
            "armor": 32,
            "armorperlevel": 3.7,
            "spellblock": 30,
            "spellblockperlevel": 1.3,
            "attackrange": 175,
            "hpregen": 4.5,
            "hpregenperlevel": 1.25,
            "mpregen": 0,
            "mpregenperlevel": 0,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 57,
            "attackdamageperlevel": 3,
            "attackspeedperlevel": 6,
            "attackspeed": 0.625
        }
    },
    {
        "version": "13.21.1",
        "id": "Gragas",
        "key": "79",
        "name": "Gragas",
        "title": "O BADERNISTA",
        "blurb": "Igualmente alegre e imponente, Gragas é um gigante e arruaceiro mestre-cervejeiro em uma busca pessoal pelo mais perfeito caneco de cerveja. Vindo de partes desconhecidas, ele busca por ingredientes raros entre a vastidão intocada de Freljord, testando cada receita enquanto segue seu caminho. Frequente embriagado e extremamente impulsivo, ele é lendário pelas lutas de bar que começa, que quase sempre acabam em festas que duram a noite toda e em muitos danos de propriedade. Qualquer aparição de Gragas certamente será seguida de bebidas e destruição, nessa ordem.",
        "info": {
            "attack": 4,
            "defense": 7,
            "magic": 6,
            "difficulty": 5
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
            "group": "champion",
            "x": 384,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ", " Mago"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 670,
            "hpperlevel": 109,
            "mp": 400,
            "mpperlevel": 47,
            "movespeed": 330,
            "armor": 38,
            "armorperlevel": 4.8,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 125,
            "hpregen": 5.5,
            "hpregenperlevel": 0.5,
            "mpregen": 6,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 64,
            "attackdamageperlevel": 3.5,
            "attackspeedperlevel": 2.05,
            "attackspeed": 0.675
        }
    },
    {
        "version": "13.21.1",
        "id": "Graves",
        "key": "104",
        "name": "Graves",
        "title": "O FORAGIDO",
        "blurb": "Malcolm Graves, mercenário, apostador e bandido de renome, é um homem procurado em cada uma das cidades e impérios que visitou. Apesar do seu temperamento explosivo, ele é dono de uma noção rigorosa de honra entre criminosos, normalmente aplicada com o fogo da sua espingarda, Destino. Nos últimos anos, ele reconciliou uma parceria problemática com Twisted Fate e, juntos, eles prosperaram mais uma vez no tumulto do submundo criminoso de Águas de Sentina.",
        "info": {
            "attack": 8,
            "defense": 5,
            "magic": 3,
            "difficulty": 3
        },
        "image": {
            "full": "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5796e3d258e95471/5e83cb29cfad926479634951/Graves_00_Base-Cigar.jpg?quality=90&width=1215",
            "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
            "group": "champion",
            "x": 432,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Atirador"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 625,
            "hpperlevel": 106,
            "mp": 325,
            "mpperlevel": 40,
            "movespeed": 340,
            "armor": 33,
            "armorperlevel": 4.6,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 425,
            "hpregen": 8,
            "hpregenperlevel": 0.7,
            "mpregen": 8,
            "mpregenperlevel": 0.7,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 68,
            "attackdamageperlevel": 4,
            "attackspeedperlevel": 2.6,
            "attackspeed": 0.475
        }
    }
    ],
    [{
        "version": "13.21.1",
        "id": "Gwen",
        "key": "887",
        "name": "Gwen",
        "title": "A COSTUREIRA ENCANTADA",
        "blurb": "Uma boneca que ganhou vida por magia, Gwen empunha as mesmas ferramentas que um dia a criaram. Valorizando todo instante, ela carrega a força do amor de sua criadora a cada passo e comanda a Névoa Sagrada, uma magia protetora ancestral que abençoou a tesoura, as agulhas e a linha de costura que ela usa. Tudo é novidade para Gwen, mas ela continua alegre e determinada a lutar pelo bem que ainda resta nesse mundo abatido.",
        "info": {
            "attack": 7,
            "defense": 4,
            "magic": 5,
            "difficulty": 5
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 0,
            "y": 48,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Assassino"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 620,
            "hpperlevel": 115,
            "mp": 330,
            "mpperlevel": 40,
            "movespeed": 340,
            "armor": 39,
            "armorperlevel": 5.2,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 150,
            "hpregen": 9,
            "hpregenperlevel": 0.9,
            "mpregen": 7.5,
            "mpregenperlevel": 0.7,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 63,
            "attackdamageperlevel": 3,
            "attackspeedperlevel": 2.25,
            "attackspeed": 0.69
        }
    },
    {
        "version": "13.21.1",
        "id": "Hecarim",
        "key": "120",
        "name": "Hecarim",
        "title": "A SOMBRA DA GUERRA",
        "blurb": "Hecarim é a fusão espectral de homem e animal, amaldiçoado a cavalgar entre as almas dos vivos por toda a eternidade. Quando as Ilhas das Bênçãos caíram nas sombras, esse cavaleiro orgulhoso foi obliterado pelas energias destrutivas da Ruína, junto com toda sua cavalaria e suas montarias. Agora, assim que a Névoa Negra se espalha por Runeterra, ele lidera seu ataque devastador, deleitando-se com a matança e destruindo seus inimigos sob seus cascos de armadura.",
        "info": {
            "attack": 8,
            "defense": 6,
            "magic": 4,
            "difficulty": 6
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
            "group": "champion",
            "x": 48,
            "y": 48,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Tanque"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 625,
            "hpperlevel": 99,
            "mp": 280,
            "mpperlevel": 40,
            "movespeed": 345,
            "armor": 32,
            "armorperlevel": 5.45,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 175,
            "hpregen": 7,
            "hpregenperlevel": 0.75,
            "mpregen": 7,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 66,
            "attackdamageperlevel": 3.7,
            "attackspeedperlevel": 2.5,
            "attackspeed": 0.67
        }
    },
    {
        "version": "13.21.1",
        "id": "Heimerdinger",
        "key": "74",
        "name": "Heimerdinger",
        "title": "O INVENTOR IDOLATRADO",
        "blurb": "Um cientista brilhante, mesmo que excêntrico, o Professor Cecil B. Heimerdinger é um dos inventores mais inovadores e estimados que Piltover já conheceu. Incansável em seu trabalho ao ponto da obsessão neurótica, ele busca responder as questões mais impenetráveis do universo. Apesar de suas teorias frequentemente parecerem obscuras e esotéricas, Heimerdinger produziu algumas das máquinas mais miraculosas, sem mencionar letais, de Piltover e ajusta constantemente suas invenções para torná-las ainda mais eficientes.",
        "info": {
            "attack": 2,
            "defense": 6,
            "magic": 8,
            "difficulty": 8
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 96,
            "y": 48,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Mago, ",
            " Suporte"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 558,
            "hpperlevel": 101,
            "mp": 385,
            "mpperlevel": 20,
            "movespeed": 340,
            "armor": 19,
            "armorperlevel": 4.2,
            "spellblock": 30,
            "spellblockperlevel": 1.3,
            "attackrange": 550,
            "hpregen": 7,
            "hpregenperlevel": 0.55,
            "mpregen": 8,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 56,
            "attackdamageperlevel": 2.7,
            "attackspeedperlevel": 1.36,
            "attackspeed": 0.625
        }
    },
    {
        "version": "13.21.1",
        "id": "Illaoi",
        "key": "420",
        "name": "Illaoi",
        "title": "A SACERDOTISA CRÁQUEM",
        "blurb": "O poderoso porte físico de Illaoi só perde para sua fé indomável. Como profetisa do Grande Cráquem, ela usa um gigantesco totem dourado para arrancar o espírito de seus inimigos de seus corpos e estilhaçar a sua percepção da realidade. Todos os que desafiam a ''Portadora da Verdade de Nagacáburos'' logo descobrem que Illaoi nunca vai à luta sozinha — o deus da Ilha das Serpentes luta a seu lado.",
        "info": {
            "attack": 8,
            "defense": 6,
            "magic": 3,
            "difficulty": 4
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 144,
            "y": 48,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Tanque"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 656,
            "hpperlevel": 109,
            "mp": 300,
            "mpperlevel": 50,
            "movespeed": 350,
            "armor": 35,
            "armorperlevel": 5,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 125,
            "hpregen": 9.5,
            "hpregenperlevel": 0.8,
            "mpregen": 7.5,
            "mpregenperlevel": 0.75,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 68,
            "attackdamageperlevel": 5,
            "attackspeedperlevel": 2.5,
            "attackspeed": 0.625
        }
    },
    {
        "version": "13.21.1",
        "id": "Irelia",
        "key": "39",
        "name": "Irelia",
        "title": "A DANÇARINA DAS LÂMINAS",
        "blurb": "A ocupação noxiana de Ionia produziu muitos heróis, mas nenhum era mais improvável do que a jovem Irelia de Navori. Treinada nas antigas danças de Ionia, ela adaptou sua arte à guerra, usando movimentos graciosos e cuidadosamente executados para levitar uma série de lâminas fatais. Após provar seu valor como guerreira, ela foi nomeada líder e representante da resistência e até hoje se dedica à preservação de sua terra natal.",
        "info": {
            "attack": 7,
            "defense": 4,
            "magic": 5,
            "difficulty": 5
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 192,
            "y": 48,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Assassino"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 590,
            "hpperlevel": 124,
            "mp": 350,
            "mpperlevel": 50,
            "movespeed": 335,
            "armor": 36,
            "armorperlevel": 4.7,
            "spellblock": 30,
            "spellblockperlevel": 2.05,
            "attackrange": 200,
            "hpregen": 8.5,
            "hpregenperlevel": 0.85,
            "mpregen": 8,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 65,
            "attackdamageperlevel": 4,
            "attackspeedperlevel": 2.5,
            "attackspeed": 0.656
        }
    },
    {
        "version": "13.21.1",
        "id": "Ivern",
        "key": "427",
        "name": "Ivern",
        "title": "O PAI DO VERDE",
        "blurb": "Ivern Bramblefoot, conhecido por muitos como o Protetor Verde, é um peculiar meio-homem, meio-árvore que vagueia pelas florestas de Runeterra, cultivando vida por onde ele passa. Ele conhece os segredos do mundo natural, e cultiva amizades profundas com tudo que cresce, voa e rasteja. Ivern caminha pela natureza, transmitindo sua estranha sabedoria a todos que ele encontra, enriquecendo as florestas e, ocasionalmente, confiando seus segredos a borboletas de língua solta.",
        "info": {
            "attack": 3,
            "defense": 5,
            "magic": 7,
            "difficulty": 7
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
            "group": "champion",
            "x": 240,
            "y": 48,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Suporte, ",
            " Mago"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 655,
            "hpperlevel": 99,
            "mp": 450,
            "mpperlevel": 60,
            "movespeed": 330,
            "armor": 27,
            "armorperlevel": 4.7,
            "spellblock": 30,
            "spellblockperlevel": 1.3,
            "attackrange": 475,
            "hpregen": 7,
            "hpregenperlevel": 0.85,
            "mpregen": 6,
            "mpregenperlevel": 0.75,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 50,
            "attackdamageperlevel": 3,
            "attackspeedperlevel": 3.4,
            "attackspeed": 0.644
        }
    },
    {
        "version": "13.21.1",
        "id": "Janna",
        "key": "40",
        "name": "Janna",
        "title": "A FÚRIA DA TORMENTA",
        "blurb": "Armada com o poder das ventanias de Runeterra, Janna é um misterioso e elemental espírito de vento que protege os desfavorecidos de Zaun. Alguns acreditam que Janna surgiu a partir dos clamores dos marinheiros de Runeterra, que rezavam por ventos mais amistosos enquanto navegavam por águas turbulentas e severas tempestades. Desde então, suas graças e sua proteção têm sido imploradas nas profundezas de Zaun, onde Janna se tornou um símbolo de esperança para os necessitados. Ninguém sabe onde nem quando ela pode aparecer, mas diversas vezes ela chega para ajudar.",
        "info": {
            "attack": 3,
            "defense": 5,
            "magic": 7,
            "difficulty": 7
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
            "group": "champion",
            "x": 288,
            "y": 48,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Suporte, ",
            " Mago"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 570,
            "hpperlevel": 84,
            "mp": 350,
            "mpperlevel": 64,
            "movespeed": 325,
            "armor": 28,
            "armorperlevel": 5,
            "spellblock": 30,
            "spellblockperlevel": 1.3,
            "attackrange": 500,
            "hpregen": 5.5,
            "hpregenperlevel": 0.55,
            "mpregen": 11.5,
            "mpregenperlevel": 0.4,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 52,
            "attackdamageperlevel": 3,
            "attackspeedperlevel": 3,
            "attackspeed": 0.625
        }
    },
    {
        "version": "13.21.1",
        "id": "JarvanIV",
        "key": "59",
        "name": "Jarvan IV",
        "title": "O EXEMPLO DE DEMACIA",
        "blurb": "O Príncipe Jarvan, descendente da Dinastia Lumescudo, é o atual herdeiro do trono de Demacia. Criado para ser um exemplo das grandes virtudes de sua nação, ele é forçado a equilibrar as grandes expectativas colocadas sobre ele com seu próprio desejo de lutar nas linhas de frente. Jarvan inspira suas tropas com sua coragem temível e determinação altruísta, levantando a bandeira com as cores da família e revelando sua verdadeira força como futuro líder de seu povo.",
        "info": {
            "attack": 6,
            "defense": 8,
            "magic": 3,
            "difficulty": 5
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
            "group": "champion",
            "x": 336,
            "y": 48,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Tanque, ",
            " Lutador"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 640,
            "hpperlevel": 104,
            "mp": 300,
            "mpperlevel": 55,
            "movespeed": 340,
            "armor": 36,
            "armorperlevel": 4.8,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 175,
            "hpregen": 8,
            "hpregenperlevel": 0.7,
            "mpregen": 6.5,
            "mpregenperlevel": 0.45,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 64,
            "attackdamageperlevel": 3,
            "attackspeedperlevel": 2.5,
            "attackspeed": 0.658
        }
    },
    {
        "version": "13.21.1",
        "id": "Jax",
        "key": "24",
        "name": "Jax",
        "title": "O GRÃO-MESTRE DAS ARMAS",
        "blurb": "Incomparável tanto por suas habilidades com armamentos incomuns quanto pelo seu sarcasmo mordaz, Jax é o último mestre de armas de Icathia conhecido. Depois de sua terra natal ter sido derrotada por sua própria arrogância ao libertar o Vazio, Jax e seu povo juraram proteger o pouco que restou. Com a magia se espalhando pelo mundo, essa ameaça dormente acordou novamente e agora Jax vaga por Valoran carregando a última chama de Icathia e testando todo guerreiro encontrar para descobrir se algum deles é forte o suficiente para lutar ao seu lado...",
        "info": {
            "attack": 7,
            "defense": 5,
            "magic": 7,
            "difficulty": 5
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 384,
            "y": 48,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Assassino"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 665,
            "hpperlevel": 100,
            "mp": 339,
            "mpperlevel": 52,
            "movespeed": 350,
            "armor": 36,
            "armorperlevel": 4.2,
            "spellblock": 32,
            "spellblockperlevel": 2.05,
            "attackrange": 125,
            "hpregen": 8.5,
            "hpregenperlevel": 0.55,
            "mpregen": 7.6,
            "mpregenperlevel": 0.7,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 68,
            "attackdamageperlevel": 4.25,
            "attackspeedperlevel": 3.4,
            "attackspeed": 0.638
        }
    },
    {
        "version": "13.21.1",
        "id": "Jayce",
        "key": "126",
        "name": "Jayce",
        "title": "O DEFENSOR DO AMANHÃ",
        "blurb": "Jayce é um brilhante inventor que dedicou sua vida a defender Piltover e sua implacável busca pelo progresso. Com seu martelo hextech transformador em mãos, Jayce usa sua força, coragem e considerável inteligência para proteger sua cidade natal. Embora seja aclamado pela cidade como herói, ele não gosta muito da atenção que o heroísmo traz. Mesmo assim, o coração de Jayce está no lugar certo e até aqueles que invejam suas habilidades naturais são gratos à forma como ele protege a Cidade do Progresso.",
        "info": {
            "attack": 8,
            "defense": 4,
            "magic": 3,
            "difficulty": 7
        },
        "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg",
            "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
            "group": "champion",
            "x": 432,
            "y": 48,
            "w": 48,
            "h": 48
        },
        "tags": [
            "Lutador, ",
            " Atirador"
        ],
        "partype": "Mana",
        "stats": {
            "hp": 590,
            "hpperlevel": 109,
            "mp": 375,
            "mpperlevel": 45,
            "movespeed": 335,
            "armor": 22,
            "armorperlevel": 5,
            "spellblock": 30,
            "spellblockperlevel": 1.3,
            "attackrange": 125,
            "hpregen": 6,
            "hpregenperlevel": 0.6,
            "mpregen": 6,
            "mpregenperlevel": 0.8,
            "crit": 0,
            "critperlevel": 0,
            "attackdamage": 57,
            "attackdamageperlevel": 4.25,
            "attackspeedperlevel": 3,
            "attackspeed": 0.658
        }
    }
    ],
    [
        {
            "version": "13.21.1",
            "id": "Jhin",
            "key": "202",
            "name": "Jhin",
            "title": "O VIRTUOSO",
            "blurb": "Jhin é um meticuloso psicopata criminoso que acredita que o assassinato é uma arte. Outrora um prisioneiro ioniano, mas libertado por membros obscuros do conselho regimental de Ionia, o assassino serial agora trabalha como assassino de seu conluio. Usando a própria arma como pincel, Jhin cria obras artisticamente brutais, horrorizando vítimas e espectadores. Ele sente um cruel prazer ao fazer suas encenações nefastas, tornando-o a escolha ideal para transmitir a mais poderosa das mensagens: o terror.",
            "info": {
                "attack": 10,
                "defense": 2,
                "magic": 6,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 655,
                "hpperlevel": 107,
                "mp": 300,
                "mpperlevel": 50,
                "movespeed": 330,
                "armor": 24,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 3.75,
                "hpregenperlevel": 0.55,
                "mpregen": 6,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 59,
                "attackdamageperlevel": 4.7,
                "attackspeedperlevel": 0,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Jinx",
            "key": "222",
            "name": "Jinx",
            "title": "O GATILHO DESENFREADO",
            "blurb": "Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências. Com um arsenal de armas mortais, ela detona as explosões mais altas e mais luminosas para deixar um rastro de destruição e pânico por onde passa. Jinx abomina o tédio e deixa alegremente sua marca caótica de pandemônio aonde quer que vá.",
            "info": {
                "attack": 9,
                "defense": 2,
                "magic": 4,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 630,
                "hpperlevel": 105,
                "mp": 260,
                "mpperlevel": 50,
                "movespeed": 325,
                "armor": 26,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 3.75,
                "hpregenperlevel": 0.5,
                "mpregen": 6.7,
                "mpregenperlevel": 1,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 59,
                "attackdamageperlevel": 3.15,
                "attackspeedperlevel": 1,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Kaisa",
            "key": "145",
            "name": "Kai'Sa",
            "title": "A FILHA DO VAZIO",
            "blurb": "Capturada pelo Vazio quando era apenas uma criança, Kai'Sa conseguiu sobreviver por pura persistência e força de vontade. Suas experiências fizeram dela uma caçadora mortal e, para alguns, o prenúncio de um futuro que seria melhor não viver para ver. Inserida em uma desconfortável simbiose com uma carapaça viva do Vazio, é chegada a hora de decidir se ela perdoará os mortais que a chamam de monstro e derrotará a ameaçadora escuridão… ou se ela simplesmente os esquecerá, deixando o Vazio consumir o mundo que um dia também a deixou para trás.",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 3,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 640,
                "hpperlevel": 102,
                "mp": 345,
                "mpperlevel": 40,
                "movespeed": 335,
                "armor": 25,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 3.5,
                "hpregenperlevel": 0.55,
                "mpregen": 8.2,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 59,
                "attackdamageperlevel": 2.6,
                "attackspeedperlevel": 1.8,
                "attackspeed": 0.644
            }
        },
        {
            "version": "13.21.1",
            "id": "Kalista",
            "key": "429",
            "name": "Kalista",
            "title": "A LANÇA DA VINGANÇA",
            "blurb": "Um espectro de ira e retaliação, Kalista é o espírito imortal da vingança, um pesadelo blindado invocado da Ilhas das Sombras para caçar desertores e traidores. Os traídos podem clamar em sangue para serem vingados, mas Kalista apenas responde àqueles cuja causa ela julga serem dignos de suas habilidades. Aqueles que se tornam o foco da fúria de Kalista devem fazer as pazes com seu destino, pois qualquer pacto selado com a caçadora sombria só pode terminar com o fogo frio e penetrante de suas lanças de alma.",
            "info": {
                "attack": 8,
                "defense": 2,
                "magic": 4,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 600,
                "hpperlevel": 114,
                "mp": 300,
                "mpperlevel": 45,
                "movespeed": 330,
                "armor": 24,
                "armorperlevel": 5.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 4,
                "hpregenperlevel": 0.75,
                "mpregen": 6.3,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 61,
                "attackdamageperlevel": 3.25,
                "attackspeedperlevel": 4.5,
                "attackspeed": 0.694
            }
        },
        {
            "version": "13.21.1",
            "id": "Karma",
            "key": "43",
            "name": "Karma",
            "title": "A ILUMINADA",
            "blurb": "Nenhum mortal representa melhor as tradições espirituais de Ionia do que Karma. Ela é a incorporação de uma alma reencarnada inúmeras vezes, que leva todas as memórias acumuladas para cada nova vida e que foi agraciada com um poder que poucos compreendem. Nos períodos recentes de crise, ela fez tudo o que estava ao seu alcance pelo seu povo, mas sabe que a paz e a harmonia talvez só sejam possíveis a um custo considerável — tanto para ela quanto para sua amada terra.",
            "info": {
                "attack": 1,
                "defense": 7,
                "magic": 8,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 604,
                "hpperlevel": 109,
                "mp": 374,
                "mpperlevel": 50,
                "movespeed": 335,
                "armor": 28,
                "armorperlevel": 5,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 13,
                "mpregenperlevel": 0.5,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 51,
                "attackdamageperlevel": 3.3,
                "attackspeedperlevel": 2.3,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Karthus",
            "key": "30",
            "name": "Karthus",
            "title": "A VOZ MORTAL",
            "blurb": "Sendo o presságio do fim, Karthus é um espírito imortal cujas canções assombradoras são um prelúdio para o terror de sua aparição horripilante. Os vivos temem a eternidade dos mortos-vivos, mas Karthus vê apenas beleza e pureza em seu abraço, uma união perfeita de vida e morte. Quando Karthus emerge das Ilhas das Sombras, ele traz a alegria da morte aos mortais, como um apóstolo dos mortos-vivos.",
            "info": {
                "attack": 2,
                "defense": 2,
                "magic": 10,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 620,
                "hpperlevel": 110,
                "mp": 467,
                "mpperlevel": 31,
                "movespeed": 335,
                "armor": 21,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 450,
                "hpregen": 6.5,
                "hpregenperlevel": 0.55,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 46,
                "attackdamageperlevel": 3.25,
                "attackspeedperlevel": 2.11,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Kassadin",
            "key": "38",
            "name": "Kassadin",
            "title": "O ANDARILHO DO VAZIO",
            "blurb": "Cortando uma trilha de fogo pelos lugares mais sombrios do mundo, Kassadin sabe que seus dias estão contados. Outrora um aventureiro e guia shurimane, ele escolheu criar uma família perto das tribos pacíficas do sul, até o dia em que sua vila foi consumida pelo Vazio. Ele jurou vingança, combinando inúmeros artefatos arcanos e tecnologias proibidas para a luta que estava por vir. Finalmente, Kassadin partiu para as terras abandonadas de Icathia, pronto para enfrentar qualquer criatura monstruosa do Vazio em busca do seu autoproclamado profeta, Malzahar.",
            "info": {
                "attack": 3,
                "defense": 5,
                "magic": 8,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 646,
                "hpperlevel": 119,
                "mp": 400,
                "mpperlevel": 87,
                "movespeed": 335,
                "armor": 19,
                "armorperlevel": 4,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 150,
                "hpregen": 6,
                "hpregenperlevel": 0.5,
                "mpregen": 6,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 59,
                "attackdamageperlevel": 3.9,
                "attackspeedperlevel": 3.7,
                "attackspeed": 0.64
            }
        },
        {
            "version": "13.21.1",
            "id": "Katarina",
            "key": "55",
            "name": "Katarina",
            "title": "A LÂMINA SINISTRA",
            "blurb": "Decisiva em seus julgamentos e letal em combate, Katarina é a assassina de maior calibre de Noxus. Filha mais velha do lendário General Du Couteau, Katarina é reconhecida por seus assassinatos eficientes contra inimigos desavisados. Sua ambição ardente a levou a buscar alvos extremamente protegidos, mesmo correndo o risco de colocar seus aliados em perigo; mas não importa a missão, Katarina não hesita ao executar seu dever no meio de um furacão de adagas serrilhadas.",
            "info": {
                "attack": 4,
                "defense": 3,
                "magic": 9,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino, ",
                " Mago"
            ],
            "partype": "None",
            "stats": {
                "hp": 672,
                "hpperlevel": 108,
                "mp": 0,
                "mpperlevel": 0,
                "movespeed": 335,
                "armor": 28,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 7.5,
                "hpregenperlevel": 0.7,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 58,
                "attackdamageperlevel": 3.2,
                "attackspeedperlevel": 2.74,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Kayle",
            "key": "10",
            "name": "Kayle",
            "title": "A JUSTA",
            "blurb": "Nascida de um Aspecto targonense no auge das Guerras Rúnicas, Kayle honrava o legado de sua mãe lutando por justiça com asas de chamas divinas. Ela e sua irmã gêmea, Morgana, foram as protetoras de Demacia por muitos anos, até Kayle se desiludir com as repetidas falhas dos mortais e abandonar de vez o plano mortal. Mesmo assim, reza a lenda que ela continua punindo malfeitores com suas espadas de fogo, e muitos esperam que um dia ela retorne…",
            "info": {
                "attack": 6,
                "defense": 6,
                "magic": 7,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 670,
                "hpperlevel": 92,
                "mp": 330,
                "mpperlevel": 50,
                "movespeed": 335,
                "armor": 26,
                "armorperlevel": 4.2,
                "spellblock": 22,
                "spellblockperlevel": 1.3,
                "attackrange": 175,
                "hpregen": 5,
                "hpregenperlevel": 0.5,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 50,
                "attackdamageperlevel": 2.5,
                "attackspeedperlevel": 1.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Kayn",
            "key": "141",
            "name": "Kayn",
            "title": "O CEIFADOR DAS SOMBRAS",
            "blurb": "Inigualável praticante da letal magia sombria, Shieda Kayn luta para alcançar seu verdadeiro destino: um dia comandar a Ordem das Sombras rumo a uma nova era de supremacia ioniana. Indiferente à maquiavélica degradação que ela causa em seu corpo e mente, ele empunha uma senciente arma darkin chamada Rhaast. Só duas coisas podem acontecer: ou Kayn faz a arma obedecê-lo... ou a foice maligna o consumirá completamente, preparando o terreno para a destruição de toda Runeterra.",
            "info": {
                "attack": 10,
                "defense": 6,
                "magic": 1,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 655,
                "hpperlevel": 109,
                "mp": 410,
                "mpperlevel": 50,
                "movespeed": 340,
                "armor": 38,
                "armorperlevel": 4.5,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 8,
                "hpregenperlevel": 0.75,
                "mpregen": 11.5,
                "mpregenperlevel": 0.95,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 68,
                "attackdamageperlevel": 3.3,
                "attackspeedperlevel": 2.7,
                "attackspeed": 0.669
            }
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "Kennen",
            "key": "85",
            "name": "Kennen",
            "title": "O CORAÇÃO DA TEMPESTADE",
            "blurb": "Mais do que um protetor rápido como um raio do equilíbrio ioniano, Kennen é o único yordle membro da Kinkou. Apesar da sua estatura pequena e peluda, ele anseia por ir contra qualquer ameaça com uma tempestade desenfreada de shurikens e entusiasmo sem limites. Ao lado de seu mestre, Shen, Kennen patrulha o reino dos espíritos, utilizando energia elétrica devastadora para abater seus inimigos.",
            "info": {
                "attack": 6,
                "defense": 4,
                "magic": 7,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Atirador"
            ],
            "partype": "Energy",
            "stats": {
                "hp": 611,
                "hpperlevel": 98,
                "mp": 200,
                "mpperlevel": 0,
                "movespeed": 335,
                "armor": 29,
                "armorperlevel": 4.95,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 5.5,
                "hpregenperlevel": 0.65,
                "mpregen": 50,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 48,
                "attackdamageperlevel": 3.75,
                "attackspeedperlevel": 3.4,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Khazix",
            "key": "121",
            "name": "Kha'Zix",
            "title": "O CEIFADOR DO VAZIO",
            "blurb": "O Vazio cresce e o Vazio se adapta, e nenhuma de suas outras criaturas incorpora isso tão bem quanto Kha'Zix. A evolução é o que impulsiona a essência desse horror mutável, nascido para sobreviver e destruir os mais fortes. Qualquer momento de dificuldades em fazê-lo só o faz criar modos novos e mais efetivos de neutralizar e matar sua presa. Inicialmente uma fera irracional, a inteligência de Kha'Zix se desenvolveu tanto quanto sua forma. Agora, a criatura planeja suas caças e até faz uso do horror visceral que causa em suas vítimas.",
            "info": {
                "attack": 9,
                "defense": 4,
                "magic": 3,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 643,
                "hpperlevel": 99,
                "mp": 327,
                "mpperlevel": 40,
                "movespeed": 350,
                "armor": 36,
                "armorperlevel": 4.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 7.5,
                "hpregenperlevel": 0.75,
                "mpregen": 7.59,
                "mpregenperlevel": 0.5,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 3.1,
                "attackspeedperlevel": 2.7,
                "attackspeed": 0.668
            }
        },
        {
            "version": "13.21.1",
            "id": "Kindred",
            "key": "203",
            "name": "Kindred",
            "title": "OS CAÇADORES ETERNOS",
            "blurb": "Distintos, mas nunca separados, os Kindred representam as essências gêmeas da morte. O arco da Ovelha propicia uma rápida transição do mundo mortal para aqueles que aceitam seu destino. O Lobo caça aqueles que fogem de seu fim, entregando-lhes a violência derradeira de suas presas esmagadoras. Embora diferentes interpretações sobre a natureza dos Kindred circulem por toda Runeterra, todo mortal deve escolher a verdadeira face de sua morte.",
            "info": {
                "attack": 8,
                "defense": 2,
                "magic": 2,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 610,
                "hpperlevel": 104,
                "mp": 300,
                "mpperlevel": 35,
                "movespeed": 325,
                "armor": 29,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 500,
                "hpregen": 7,
                "hpregenperlevel": 0.55,
                "mpregen": 7,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 65,
                "attackdamageperlevel": 3.25,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Kled",
            "key": "240",
            "name": "Kled",
            "title": "O CAVALEIRO INTRATÁVEL",
            "blurb": "Um guerreiro tão destemido quanto irascível, o yordle Kled representa a bravata furiosa de Noxus. Ele é um ícone amado pelos soldados do império, rejeitado por seus oficiais e abominado pela nobreza. Muitos dizem que Kled lutou em cada batalha que as legiões travaram, que ''adquiriu'' cada título militar e que nunca recuou de uma luta. Embora a veracidade dos detalhes seja normalmente questionável, uma parte de sua lenda é inegável: avançando em combate com Skaarl, sua montaria (des)confiável, Kled luta para proteger o que é dele... e para tornar seu o que conseguir.",
            "info": {
                "attack": 8,
                "defense": 2,
                "magic": 2,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Courage",
            "stats": {
                "hp": 410,
                "hpperlevel": 84,
                "mp": 100,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 35,
                "armorperlevel": 5.2,
                "spellblock": 28,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 6,
                "hpregenperlevel": 0.75,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 65,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "KogMaw",
            "key": "96",
            "name": "Kog'Maw",
            "title": "A BOCA DO ABISMO",
            "blurb": "Vomitado para fora de uma aparição podre do Vazio nas profundezas das terras desertas de Icathia, Kog'Maw é uma criatura inquisitiva e pútrida com uma boca cáustica gigantesca. Essa criatura do Vazio em particular precisa morder e babar em qualquer coisa que alcançar para realmente compreendê-la. Apesar de não ser intrinsecamente mau, a ingenuidade cativante de Kog'Maw é perigosa, pois é precedida, em geral, de um frenesi alimentício, não para alimentá-lo, mas para satisfazer sua curiosidade sem fim.",
            "info": {
                "attack": 8,
                "defense": 2,
                "magic": 5,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 635,
                "hpperlevel": 99,
                "mp": 325,
                "mpperlevel": 40,
                "movespeed": 330,
                "armor": 24,
                "armorperlevel": 4.45,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 500,
                "hpregen": 3.75,
                "hpregenperlevel": 0.55,
                "mpregen": 8.75,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 61,
                "attackdamageperlevel": 3.1,
                "attackspeedperlevel": 2.65,
                "attackspeed": 0.665
            }
        },
        {
            "version": "13.21.1",
            "id": "KSante",
            "key": "897",
            "name": "K'Sante",
            "title": "O ORGULHO DE NAZUMAH",
            "blurb": "Corajoso e desafiador, K'Sante enfrenta feras colossais e Ascendentes cruéis para proteger seu lar, Nazumah — um cobiçado oásis no meio das areias de Shurima. Entretanto, após uma desavença com seu antigo parceiro, K'Sante entendeu que, para se tornar um guerreiro digno de liderar a cidade, primeiro ele deve aplacar seu desejo obstinado de sucesso. Somente depois disso ele poderá evitar as armadilhas do próprio orgulho e encontrar a sabedoria necessária para derrotar os monstros ferozes que ameaçam seu povo.",
            "info": {
                "attack": 8,
                "defense": 8,
                "magic": 7,
                "difficulty": 9
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KSante_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 570,
                "hpperlevel": 115,
                "mp": 290,
                "mpperlevel": 60,
                "movespeed": 330,
                "armor": 33,
                "armorperlevel": 5.2,
                "spellblock": 30,
                "spellblockperlevel": 2.1,
                "attackrange": 175,
                "hpregen": 9.5,
                "hpregenperlevel": 0.85,
                "mpregen": 7,
                "mpregenperlevel": 1,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 64,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 2.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Leblanc",
            "key": "7",
            "name": "LeBlanc",
            "title": "A FARSANTE",
            "blurb": "Misteriosa mesmo para os outros membros da Rosa Negra, LeBlanc é somente um dos muitos nomes de uma mulher pálida que tem manipulado pessoas e eventos desde os primeiros dias de Noxus. Usando sua magia para espelhar a si mesma, a feiticeira pode aparecer para qualquer um, em qualquer lugar e mesmo em vários lugares ao mesmo tempo. Sempre planejando às escondidas, as verdadeiras motivações de LeBlanc são tão inescrutáveis quanto sua identidade inconstante.",
            "info": {
                "attack": 1,
                "defense": 4,
                "magic": 10,
                "difficulty": 9
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 598,
                "hpperlevel": 111,
                "mp": 400,
                "mpperlevel": 25,
                "movespeed": 340,
                "armor": 22,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 7.5,
                "hpregenperlevel": 0.55,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 2.7,
                "attackspeedperlevel": 2.2,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "LeeSin",
            "key": "64",
            "name": "Lee Sin",
            "title": "O MONGE CEGO",
            "blurb": "Um mestre das artes marciais ancestrais de Ionia, Lee Sin é um lutador de princípios fortes que canaliza a essência do espírito do dragão para enfrentar qualquer desafio. Apesar de ter perdido a visão há muitos anos, o monge guerreiro dedicou sua vida a proteger sua terra natal contra quem ousasse interferir em seu sagrado equilíbrio. Os inimigos que subestimam seu comportamento meditativo são confrontados por seus punhos ardentes e chutes mirabolantes.",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 3,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Assassino"
            ],
            "partype": "Energy",
            "stats": {
                "hp": 645,
                "hpperlevel": 105,
                "mp": 200,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 36,
                "armorperlevel": 4.9,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 7.5,
                "hpregenperlevel": 0.7,
                "mpregen": 50,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 66,
                "attackdamageperlevel": 3.7,
                "attackspeedperlevel": 3,
                "attackspeed": 0.651
            }
        },
        {
            "version": "13.21.1",
            "id": "Leona",
            "key": "89",
            "name": "Leona",
            "title": "A ALVORADA RADIANTE",
            "blurb": "Impregnada pelas chamas do sol, Leona é uma guerreira sagrada de Solari que defende o Monte Targon com sua Lâmina Zênite e a Proteção da Aurora. Sua pele brilha com fogo solar enquanto seus olhos queimam com o poder do Aspecto celestial que nela existe. Protegida em uma armadura dourada e carregando o terrível fardo de um conhecimento ancestral, Leona traz luz a alguns e morte a outros.",
            "info": {
                "attack": 4,
                "defense": 8,
                "magic": 3,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 646,
                "hpperlevel": 101,
                "mp": 302,
                "mpperlevel": 40,
                "movespeed": 335,
                "armor": 47,
                "armorperlevel": 4.8,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8.5,
                "hpregenperlevel": 0.85,
                "mpregen": 6,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.9,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Lillia",
            "key": "876",
            "name": "Lillia",
            "title": "O FLORIR RECEOSO",
            "blurb": "Extremamente tímida, Lillia, a faunesa feérica, percorre saltitante as florestas de Ionia. Sempre escondida a pouca distância dos humanos — cuja misteriosa natureza lhe causa fascínio e, ao mesmo tempo, receio — Lillia espera descobrir por que os sonhos deles não chegam mais à Árvore dos Sonhos. Agora, ela percorre Ionia com um cajado mágico nas mãos em busca dos sonhos não realizados das pessoas. Somente assim, a própria Lillia poderá florescer e ajudar os humanos a resolverem seus medos e encontrarem seu brilho interior. Iiip!",
            "info": {
                "attack": 0,
                "defense": 2,
                "magic": 10,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 605,
                "hpperlevel": 105,
                "mp": 410,
                "mpperlevel": 50,
                "movespeed": 330,
                "armor": 22,
                "armorperlevel": 5.2,
                "spellblock": 32,
                "spellblockperlevel": 1.55,
                "attackrange": 325,
                "hpregen": 2.5,
                "hpregenperlevel": 0.55,
                "mpregen": 11.5,
                "mpregenperlevel": 0.95,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 61,
                "attackdamageperlevel": 3.1,
                "attackspeedperlevel": 2.7,
                "attackspeed": 0.625
            }
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "Lissandra",
            "key": "127",
            "name": "Lissandra",
            "title": "A BRUXA GÉLIDA",
            "blurb": "A magia de Lissandra transforma o poder bruto do gelo em algo sombrio e terrível. Com a força do seu gelo sombrio, ela faz mais do que congelar — ela perfura e destrói todos que se opões a ela. Entre os aterrorizados habitantes do norte, ela é conhecida como a ''Bruxa Gélida''. Mas a verdade é muito mais sinistra: Lissandra é uma corruptora da natureza que conspira para instalar uma era do gelo no mundo.",
            "info": {
                "attack": 2,
                "defense": 5,
                "magic": 8,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 620,
                "hpperlevel": 110,
                "mp": 475,
                "mpperlevel": 30,
                "movespeed": 325,
                "armor": 22,
                "armorperlevel": 4.9,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 7,
                "hpregenperlevel": 0.55,
                "mpregen": 8,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 2.7,
                "attackspeedperlevel": 1.36,
                "attackspeed": 0.656
            }
        },
        {
            "version": "13.21.1",
            "id": "Lucian",
            "key": "236",
            "name": "Lucian",
            "title": "O PURIFICADOR",
            "blurb": "Lucian, um Sentinela da Luz, é um caçador de espíritos imortais que usa suas pistolas relicárias para persegui-los implacavelmente e, por fim, aniquilá-los. Após o assassinato de sua esposa pelas mãos do espectro Thresh, Lucian embarcou em uma jornada de vingança. Mas mesmo com a volta de sua amada ao reino dos vivos, sua ira permanece inalterada. Impiedoso e obstinado, Lucian não hesitará em proteger os vivos contra os horrores da Névoa Negra.",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 3,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 641,
                "hpperlevel": 100,
                "mp": 320,
                "mpperlevel": 43,
                "movespeed": 335,
                "armor": 28,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 500,
                "hpregen": 3.75,
                "hpregenperlevel": 0.65,
                "mpregen": 7,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 2.9,
                "attackspeedperlevel": 3.3,
                "attackspeed": 0.638
            }
        },
        {
            "version": "13.21.1",
            "id": "Lulu",
            "key": "117",
            "name": "Lulu",
            "title": "A FADA FEITICEIRA",
            "blurb": "A maga yordle Lulu é conhecida por conjurar ilusões de sonhos e criaturas fantasiosas enquanto vaga por Runeterra com seu silfo companheiro, Pix. Lulu transforma a realidade por capricho, distorcendo o que ela vê como restrições desse banal reino físico. Apesar de alguns considerarem sua magia no mínimo anormal, e no máximo perigosa, ela acredita que todos merecem um toque de encanto.",
            "info": {
                "attack": 4,
                "defense": 5,
                "magic": 7,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 595,
                "hpperlevel": 92,
                "mp": 350,
                "mpperlevel": 55,
                "movespeed": 330,
                "armor": 26,
                "armorperlevel": 4.9,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 6,
                "hpregenperlevel": 0.6,
                "mpregen": 11,
                "mpregenperlevel": 0.6,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 47,
                "attackdamageperlevel": 2.6,
                "attackspeedperlevel": 2.25,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Lux",
            "key": "99",
            "name": "Lux",
            "title": "A DAMA DA LUZ",
            "blurb": "Luxanna Stemmaguarda nasceu em Demacia, um reino insular onde habilidades mágicas são vistas com medo e desconfiança. Capaz de dobrar a luz à sua vontade, ela cresceu temendo ser descoberta e exilada, e foi forçada a manter seus poderes em segredo a fim de preservar o status de nobreza de sua família. Apesar de tudo, o otimismo e resiliência de Lux a levaram a aceitar seus talentos únicos e agora ela os utiliza em segredo a serviço de sua terra natal.",
            "info": {
                "attack": 2,
                "defense": 4,
                "magic": 9,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 560,
                "hpperlevel": 99,
                "mp": 480,
                "mpperlevel": 23.5,
                "movespeed": 330,
                "armor": 19,
                "armorperlevel": 5.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 7,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 54,
                "attackdamageperlevel": 3.3,
                "attackspeedperlevel": 2,
                "attackspeed": 0.669
            }
        },
        {
            "version": "13.21.1",
            "id": "Malphite",
            "key": "54",
            "name": "Malphite",
            "title": "O FRAGMENTO DO MONOLITO",
            "blurb": "Uma criatura gigantesca de pedra viva, Malphite pena para impor ordem abençoada em um mundo caótico. Nascido como um fragmento servil de um obelisco de outro mundo conhecido como Monolito, ele usou sua tremenda força elemental para manter e proteger seu progenitor, mas, no fim, falhou. O único sobrevivente da destruição que se seguiu, Malphite agora suporta o povo macio de Runeterra com seus temperamentos inconstantes enquanto luta para encontrar um novo papel digno do último de sua espécie.",
            "info": {
                "attack": 5,
                "defense": 9,
                "magic": 7,
                "difficulty": 2
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 644,
                "hpperlevel": 104,
                "mp": 280,
                "mpperlevel": 60,
                "movespeed": 335,
                "armor": 37,
                "armorperlevel": 4.95,
                "spellblock": 28,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 7,
                "hpregenperlevel": 0.55,
                "mpregen": 7.3,
                "mpregenperlevel": 0.55,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 62,
                "attackdamageperlevel": 4,
                "attackspeedperlevel": 3.4,
                "attackspeed": 0.736
            }
        },
        {
            "version": "13.21.1",
            "id": "Malzahar",
            "key": "90",
            "name": "Malzahar",
            "title": "O PROFETA DO VAZIO",
            "blurb": "Um vidente fanático dedicado à unificação de toda a vida, Malzahar realmente acredita que o Vazio que recém surgiu é o caminho para a salvação de Runeterra. Na desolação do deserto de Shurima, ele seguiu as vozes que sussurravam em sua mente por todo o caminho até a antiga Icathia. Entre as ruínas daquela terra, ele olhou no coração sombrio do próprio Vazio e recebeu novos poderes e propósito. Agora Malzahar vê a si mesmo como um pastor encarregado de trazer os outros para o rebanho… ou de libertar as criaturas do Vazio que vivem nas profundezas.",
            "info": {
                "attack": 2,
                "defense": 2,
                "magic": 9,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 580,
                "hpperlevel": 101,
                "mp": 375,
                "mpperlevel": 28,
                "movespeed": 335,
                "armor": 18,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 500,
                "hpregen": 6,
                "hpregenperlevel": 0.6,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 1.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Maokai",
            "key": "57",
            "name": "Maokai",
            "title": "O ENTE SINISTRO",
            "blurb": "Maokai é um grande ente enfurecido que luta contra os terrores sobrenaturais da Ilhas das Sombras. Ele se transformou em uma força vingativa depois que um cataclisma mágico destruiu seu lar, sobrevivendo apenas através das Águas da Vida que estão infusas em seu cerne. Outrora um espírito pacífico da natureza, Maokai agora batalha furiosamente para banir os flagelos da não-vida das Ilhas das Sombras e restaurar a antiga beleza do seu lar.",
            "info": {
                "attack": 3,
                "defense": 8,
                "magic": 6,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 635,
                "hpperlevel": 109,
                "mp": 375,
                "mpperlevel": 43,
                "movespeed": 335,
                "armor": 39,
                "armorperlevel": 5.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 5,
                "hpregenperlevel": 0.75,
                "mpregen": 7.2,
                "mpregenperlevel": 0.6,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 64,
                "attackdamageperlevel": 3.3,
                "attackspeedperlevel": 2.125,
                "attackspeed": 0.8
            }
        },
        {
            "version": "13.21.1",
            "id": "MasterYi",
            "key": "11",
            "name": "Master Yi",
            "title": "O ESPADACHIM WUJU",
            "blurb": "Master Yi treinou seu corpo e afiou sua mente para que pensamento e ação se tornassem quase um só. Embora ele prefira recorrer à violência como último recurso, a leveza e a velocidade de sua espada garantem uma resolução sempre veloz. Como um dos últimos praticantes da arte ioniana do Wuju, Yi dedicou sua vida a preservar o legado de seu povo, avaliando potenciais discípulos com as Sete Lentes da Perspicácia para identificar qual deles era o mais digno.",
            "info": {
                "attack": 10,
                "defense": 4,
                "magic": 2,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 669,
                "hpperlevel": 100,
                "mp": 251,
                "mpperlevel": 42,
                "movespeed": 355,
                "armor": 33,
                "armorperlevel": 4.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 7.5,
                "hpregenperlevel": 0.65,
                "mpregen": 7.25,
                "mpregenperlevel": 0.45,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 65,
                "attackdamageperlevel": 2.2,
                "attackspeedperlevel": 2,
                "attackspeed": 0.679
            }
        },
        {
            "version": "13.21.1",
            "id": "Milio",
            "key": "902",
            "name": "Milio",
            "title": "A CHAMA GENTIL",
            "blurb": "Milio é um menino de Ixtal com um coração enorme e caloroso. Apesar da pouca idade, dominou o axioma do fogo e descobriu algo novo: o fogo tranquilizante. Com esse novo poder, Milio quer ajudar sua família a escapar do exílio unindo-se aos Yun Tal, a exemplo do que sua avó fez um dia. Tendo viajado pelas selvas de Ixtal até a capital de Ixaocan, Milio agora se prepara para enfrentar o Vidálio e se juntar aos Yun Tal, sem saber das provações — e perigos — que lhe aguardam.",
            "info": {
                "attack": 2,
                "defense": 4,
                "magic": 8,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 560,
                "hpperlevel": 88,
                "mp": 365,
                "mpperlevel": 43,
                "movespeed": 330,
                "armor": 26,
                "armorperlevel": 4.6,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 5,
                "hpregenperlevel": 0.5,
                "mpregen": 11.5,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 48,
                "attackdamageperlevel": 3.2,
                "attackspeedperlevel": 3,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "MissFortune",
            "key": "21",
            "name": "Miss Fortune",
            "title": "A CAÇADORA DE RECOMPENSAS",
            "blurb": "Uma capitã de Águas de Sentina famosa por sua aparência e impiedade, Sarah Fortune chama atenção entre os criminosos calejados da cidade portuária. Ainda criança, ela viu o Rei dos Ladrões, Gangplank, assassinar sua família, um crime do qual ela se vingou com violência anos depois, explodindo seu navio com ele ainda a bordo. Aqueles que a subestimarem enfrentarão uma oponente sedutora e imprevisível... E, possivelmente, uma bala ou duas nas entranhas.",
            "info": {
                "attack": 8,
                "defense": 2,
                "magic": 5,
                "difficulty": 1
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 640,
                "hpperlevel": 103,
                "mp": 300,
                "mpperlevel": 40,
                "movespeed": 325,
                "armor": 28,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 3.75,
                "hpregenperlevel": 0.65,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 52,
                "attackdamageperlevel": 2.4,
                "attackspeedperlevel": 3,
                "attackspeed": 0.656
            }
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "MonkeyKing",
            "key": "62",
            "name": "Wukong",
            "title": "O MACACO REI",
            "blurb": "Wukong é um trapaceiro vastaya que usa sua força, agilidade e inteligência para confundir os oponentes e deixar a situação a seu favor. Depois de encontrar uma eterna amizade no guerreiro conhecido como Master Yi, Wukong se tornou o último aprendiz da ancestral arte marcial conhecida como Wu Ju. Armado com um cajado encantado, Wukong tenta evitar que Ionia caia em ruína.",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 2,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 610,
                "hpperlevel": 99,
                "mp": 300,
                "mpperlevel": 65,
                "movespeed": 340,
                "armor": 31,
                "armorperlevel": 4.7,
                "spellblock": 28,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 3.5,
                "hpregenperlevel": 0.65,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 66,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 3,
                "attackspeed": 0.69
            }
        },
        {
            "version": "13.21.1",
            "id": "Mordekaiser",
            "key": "82",
            "name": "Mordekaiser",
            "title": "O REVENÃ DE FERRO",
            "blurb": "Morto e renascido duas vezes, Mordekaiser é um cruel comandante de uma época perdida. Ele usa a arte da necromancia para aprisionar almas e torná-las submissas pela eternidade. Hoje em dia, poucos se lembram das primeiras conquistas ou conhecem a real dimensão do poder de Mordekaiser. Porém, algumas almas ancestrais ainda se lembram, e temem que um dia ele volte para reivindicar seu domínio... tanto sobre os mortos quanto sobre os vivos.",
            "info": {
                "attack": 4,
                "defense": 6,
                "magic": 7,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador"
            ],
            "partype": "Shield",
            "stats": {
                "hp": 645,
                "hpperlevel": 104,
                "mp": 100,
                "mpperlevel": 0,
                "movespeed": 335,
                "armor": 37,
                "armorperlevel": 4.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 5,
                "hpregenperlevel": 0.75,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 61,
                "attackdamageperlevel": 4,
                "attackspeedperlevel": 1,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Morgana",
            "key": "25",
            "name": "Morgana",
            "title": "A CAÍDA",
            "blurb": "Dividida entre sua natureza mortal e celestial, Morgana prendeu as asas para preservar sua humanidade e inflige sua dor e amargura nos desonestos e corruptos. Ela rejeita as leis e tradições que considera injustas e luta pela verdade nas sombras de Demacia com escudos e correntes de fogo sombrio, ainda que alguns tentem reprimi-la. Acima de tudo, Morgana acredita que até os banidos e exilados podem, um dia, se erguer.",
            "info": {
                "attack": 1,
                "defense": 6,
                "magic": 8,
                "difficulty": 1
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 630,
                "hpperlevel": 104,
                "mp": 340,
                "mpperlevel": 60,
                "movespeed": 335,
                "armor": 25,
                "armorperlevel": 5,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 450,
                "hpregen": 5.5,
                "hpregenperlevel": 0.4,
                "mpregen": 11,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 56,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 1.53,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Naafiri",
            "key": "950",
            "name": "Naafiri",
            "title": "A FERA DAS CEM MORDIDAS",
            "blurb": "Pelas areias de Shurima, um coro de uivos ressoa. É o chamado dos cães das dunas, predadores vorazes que formam matilhas e disputam o direito de caçar nessas terras áridas. Entre eles, uma matilha se destaca, pois é movida não apenas por instintos caninos, mas pelo poder ancestral dos Darkin.",
            "info": {
                "attack": 9,
                "defense": 5,
                "magic": 0,
                "difficulty": 2
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Naafiri_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 635,
                "hpperlevel": 120,
                "mp": 400,
                "mpperlevel": 55,
                "movespeed": 335,
                "armor": 30,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 9,
                "hpregenperlevel": 0.9,
                "mpregen": 7.5,
                "mpregenperlevel": 1,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 2.1,
                "attackspeedperlevel": 2.1,
                "attackspeed": 0.663
            }
        },
        {
            "version": "13.21.1",
            "id": "Nami",
            "key": "267",
            "name": "Nami",
            "title": "A CONJURADORA DAS MARÉS",
            "blurb": "Uma jovem e obstinada vastaya dos mares, Nami é uma das primeiras integrantes da tribo Marai a sair das ondas e se aventurar na terra seca, onde seus antigos acordos com os targonianos foram quebrados. Com nenhuma outra opção, ela decidiu que seria ela mesma quem completaria o ritual sagrado que garantiria a segurança de seu povo. Dentro do caos dessa nova era, Nami enfrenta um futuro incerto com coragem e determinação, usando seu Conjurador das Marés para invocar a própria força dos oceanos.",
            "info": {
                "attack": 4,
                "defense": 3,
                "magic": 7,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 560,
                "hpperlevel": 88,
                "mp": 365,
                "mpperlevel": 43,
                "movespeed": 335,
                "armor": 29,
                "armorperlevel": 5.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 11.5,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 51,
                "attackdamageperlevel": 3.1,
                "attackspeedperlevel": 2.61,
                "attackspeed": 0.644
            }
        },
        {
            "version": "13.21.1",
            "id": "Nasus",
            "key": "75",
            "name": "Nasus",
            "title": "O CURADOR DAS AREIAS",
            "blurb": "Nasus é um majestoso Ascendente com cabeça de chacal da antiga Shurima; uma figura heroica considerada semideus pelo povo do deserto. Ferozmente inteligente, ele foi um guardião do conhecimento e estrategista sem igual cuja sabedoria guiou o antigo império de Shurima em direção à grandeza por muitos séculos. Após a queda do império, ele colocou a si mesmo em exílio, tornando-se mais que uma lenda. Agora que a antiga cidade de Shurima ressurgiu, ele retornou, determinado a assegurar que ela nunca mais caia.",
            "info": {
                "attack": 7,
                "defense": 5,
                "magic": 6,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 631,
                "hpperlevel": 104,
                "mp": 326,
                "mpperlevel": 62,
                "movespeed": 350,
                "armor": 34,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 9,
                "hpregenperlevel": 0.9,
                "mpregen": 7.45,
                "mpregenperlevel": 0.5,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 67,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 3.48,
                "attackspeed": 0.638
            }
        },
        {
            "version": "13.21.1",
            "id": "Nautilus",
            "key": "111",
            "name": "Nautilus",
            "title": "O TITÃ DAS PROFUNDEZAS",
            "blurb": "O golias armadurado conhecido como Nautilus, uma lenda solitária, tão velha quantos as primeiras docas que afundaram em Águas de Sentina, vaga pelas águas escuras da costa das Ilhas da Chama Azul. Levado por uma traição esquecida, ele ataca sem aviso, balançando sua enorme âncora para salvar os náufragos e arrastar os gananciosos para sua perdição. Dizem que ele surge para aqueles que se esquecem de pagar o “dízimo de Águas de Sentina”, puxando-os para baixo das ondas junto com ele: um lembrete envolto em ferro de que ninguém pode escapar das profundezas.",
            "info": {
                "attack": 4,
                "defense": 6,
                "magic": 6,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 646,
                "hpperlevel": 100,
                "mp": 400,
                "mpperlevel": 47,
                "movespeed": 325,
                "armor": 39,
                "armorperlevel": 4.95,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 8.5,
                "hpregenperlevel": 0.55,
                "mpregen": 8.65,
                "mpregenperlevel": 0.5,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 61,
                "attackdamageperlevel": 3.3,
                "attackspeedperlevel": 1,
                "attackspeed": 0.706
            }
        },
        {
            "version": "13.21.1",
            "id": "Neeko",
            "key": "518",
            "name": "Neeko",
            "title": "A CAMALEOA CURIOSA",
            "blurb": "Nativa de uma tribo vastaya há muito esquecida, Neeko consegue se misturar em qualquer multidão, assumindo a aparência dos outros e até mesmo absorvendo parte de seu estado emocional para identificar de imediato quem é amigo ou inimigo. Nunca se sabe onde Neeko pode estar, nem mesmo quem pode ser, mas aqueles com a intenção de machucá-la logo verão suas verdadeiras cores e toda a força e magia de seu espírito primitivo agindo contra eles.",
            "info": {
                "attack": 1,
                "defense": 1,
                "magic": 9,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 610,
                "hpperlevel": 104,
                "mp": 450,
                "mpperlevel": 30,
                "movespeed": 340,
                "armor": 21,
                "armorperlevel": 5.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 7.5,
                "hpregenperlevel": 0.75,
                "mpregen": 7,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 48,
                "attackdamageperlevel": 2.5,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Nidalee",
            "key": "76",
            "name": "Nidalee",
            "title": "A CAÇADORA BESTIAL",
            "blurb": "Criada na mais profunda das selvas, Nidalee é uma rastreadora especialista que pode se transformar em um puma à sua vontade. Nem animal nem mulher, ela defende com ferocidade seu território de todo e qualquer invasor, com armadilhas cuidadosamente colocadas e lanças arremessadas. Ela fere sua presa antes de pular nela em sua forma felina, e dizem os sortudos que sobrevivem que ela é uma mulher selvagem com instintos aguçados e garras ainda mais afiadas...",
            "info": {
                "attack": 5,
                "defense": 4,
                "magic": 7,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 610,
                "hpperlevel": 109,
                "mp": 295,
                "mpperlevel": 45,
                "movespeed": 340,
                "armor": 32,
                "armorperlevel": 5,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 6,
                "hpregenperlevel": 0.6,
                "mpregen": 6,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 58,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 3.22,
                "attackspeed": 0.638
            }
        },
        {
            "version": "13.21.1",
            "id": "Nilah",
            "key": "895",
            "name": "Nilah",
            "title": "A ALEGRIA IRRESTRITA",
            "blurb": "Nilah, uma guerreira asceta de uma terra distante, busca os oponentes mais gigantescos e mortais do mundo para poder desafiá-los e destruí-los. Tendo conquistado seu poder após enfrentar o demônio da alegria, que estava aprisionado há muito tempo, ela não sente outra emoção senão um júbilo incessante — um preço pequeno a ser pago pela força vasta que possui agora. Canalizando a forma líquida do demônio numa lâmina de poder inigualável, a combatente desafia antigas ameaças esquecidas no tempo.",
            "info": {
                "attack": 8,
                "defense": 4,
                "magic": 4,
                "difficulty": 10
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 570,
                "hpperlevel": 101,
                "mp": 350,
                "mpperlevel": 35,
                "movespeed": 340,
                "armor": 27,
                "armorperlevel": 4.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 225,
                "hpregen": 4,
                "hpregenperlevel": 0.9,
                "mpregen": 8.2,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 58,
                "attackdamageperlevel": 2,
                "attackspeedperlevel": 3,
                "attackspeed": 0.697
            }
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "Nocturne",
            "key": "56",
            "name": "Nocturne",
            "title": "O ETERNO PESADELO",
            "blurb": "Uma fusão demoníaca provinda dos pesadelos que assombram todas as mentes sencientes, a coisa conhecida como Nocturne se tornou uma força primordial de puro terror. De aspecto caótico e líquido, ele é uma sombra sem rosto com olhos frios e armada com lâminas enfurecidas. Depois de se libertar do mundo dos espíritos, Nocturne desceu para o mundo dos vivos para se alimentar de um terror que só pode ser cultivado na verdadeira escuridão.",
            "info": {
                "attack": 9,
                "defense": 5,
                "magic": 2,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 655,
                "hpperlevel": 109,
                "mp": 275,
                "mpperlevel": 35,
                "movespeed": 345,
                "armor": 38,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 1.55,
                "attackrange": 125,
                "hpregen": 7,
                "hpregenperlevel": 0.75,
                "mpregen": 7,
                "mpregenperlevel": 0.45,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 62,
                "attackdamageperlevel": 2.6,
                "attackspeedperlevel": 2.7,
                "attackspeed": 0.721
            }
        },
        {
            "version": "13.21.1",
            "id": "Nunu",
            "key": "20",
            "name": "Nunu & Willump",
            "title": "O GAROTO E SEU YETI",
            "blurb": "Era uma vez um garoto que queria provar a todos que poderia ser um herói indo matar um terrível monstro... mas que no fim descobriu que esse monstro era um solitário yeti mágico que só queria um amigo. Unidos por um antigo poder e compartilhando um amor por bolas de neve, Nunu e Willump agora vagavam ferozmente através de toda Freljord, soprando vida em aventuras imaginárias. Eles tinham esperança de que em algum lugar encontrariam a mãe de Nunu. Se pudessem salvá-la, talvez eles realmente fossem heróis afinal...",
            "info": {
                "attack": 4,
                "defense": 6,
                "magic": 7,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 610,
                "hpperlevel": 90,
                "mp": 280,
                "mpperlevel": 42,
                "movespeed": 345,
                "armor": 29,
                "armorperlevel": 4.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 5,
                "hpregenperlevel": 0.8,
                "mpregen": 7,
                "mpregenperlevel": 0.5,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 61,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.25,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Olaf",
            "key": "2",
            "name": "Olaf",
            "title": "O BERSERKER",
            "blurb": "Uma força desenfreada de destruição, Olaf e seus machados não querem nada além de morrer em um combate glorioso. Vindo da brutal península de Freljord, Lokfar, ele recebeu uma profecia que dizia que ele teria uma morte pacífica: o destino de um covarde e um grande insulto entre seu povo. Procurando pela morte e movido por sua fúria, ele destruiu tudo em seu caminho, massacrando dezenas de guerreiros e bestas lendárias em busca de um oponente que pudesse pará-lo. Agora, um executor brutal da Garra do Inverno, ele busca seu fim nas grandes guerras que estão por vir.",
            "info": {
                "attack": 9,
                "defense": 5,
                "magic": 3,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 645,
                "hpperlevel": 119,
                "mp": 316,
                "mpperlevel": 50,
                "movespeed": 350,
                "armor": 35,
                "armorperlevel": 4.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 6.5,
                "hpregenperlevel": 0.6,
                "mpregen": 7.5,
                "mpregenperlevel": 0.6,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 68,
                "attackdamageperlevel": 4.7,
                "attackspeedperlevel": 2.7,
                "attackspeed": 0.694
            }
        },
        {
            "version": "13.21.1",
            "id": "Orianna",
            "key": "61",
            "name": "Orianna",
            "title": "A DONZELA MECÂNICA",
            "blurb": "Orianna já foi uma menina curiosa de carne e osso, mas agora é uma maravilha tecnológica composta inteiramente de engrenagens. Ela ficou terrivelmente doente depois de um acidente em um dos distritos inferiores de Zaun e seu corpo enfraquecido teve que ser substituído por mecanismos requintados, peça por peça. Acompanhada por uma esfera de cobre extraordinária que ela construiu para companhia e proteção, Orianna agora é livre para explorar as maravilhas de Piltover e além.",
            "info": {
                "attack": 4,
                "defense": 3,
                "magic": 9,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 600,
                "hpperlevel": 110,
                "mp": 418,
                "mpperlevel": 25,
                "movespeed": 325,
                "armor": 20,
                "armorperlevel": 4.2,
                "spellblock": 26,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 7,
                "hpregenperlevel": 0.55,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 40,
                "attackdamageperlevel": 2.6,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Ornn",
            "key": "516",
            "name": "Ornn",
            "title": "O FOGO SOB A MONTANHA",
            "blurb": "Ornn é o espírito Freljordano da forja e da artesania. Ele trabalha na solidão de uma enorme fornalha, construída a marteladas por entre as cavernas de lava do vulcão Pedra-Lar. Lá, ele aquece caldeirões de pedra fundida para purificar metais e forjar itens de qualidade insuperável. Quando outras divindades — principalmente Volibear — descem à Terra para intervir nos assuntos dos mortais, Ornn aparece para colocar esses seres impetuosos em seu devido lugar, seja com seu fiel martelo ou com o poder ardente das próprias montanhas.",
            "info": {
                "attack": 5,
                "defense": 9,
                "magic": 3,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 660,
                "hpperlevel": 109,
                "mp": 341,
                "mpperlevel": 65,
                "movespeed": 335,
                "armor": 33,
                "armorperlevel": 5.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 9,
                "hpregenperlevel": 0.9,
                "mpregen": 8,
                "mpregenperlevel": 0.6,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 69,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 2,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Pantheon",
            "key": "80",
            "name": "Pantheon",
            "title": "A LANÇA INDESTRUTÍVEL",
            "blurb": "Antes um relutante portador do Aspecto da Guerra, Atreus conseguiu sobreviver quando o poder celestial dentro dele foi morto, recusando-se a sucumbir a um golpe que arrancou estrelas do céu. Com o tempo, ele aprendeu a usar o poder de sua própria mortalidade e da persistente resiliência que veio com ela. Hoje, Atreus se opõe a tudo o que é divino com o renascimento de um novo Pantheon, e sua inabalável determinação é o que alimenta as armas do antigo Aspecto no campo de batalha.",
            "info": {
                "attack": 9,
                "defense": 4,
                "magic": 3,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 650,
                "hpperlevel": 109,
                "mp": 317,
                "mpperlevel": 31,
                "movespeed": 345,
                "armor": 40,
                "armorperlevel": 4.95,
                "spellblock": 28,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 6,
                "hpregenperlevel": 0.65,
                "mpregen": 7.35,
                "mpregenperlevel": 0.45,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 64,
                "attackdamageperlevel": 3.3,
                "attackspeedperlevel": 2.95,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Poppy",
            "key": "78",
            "name": "Poppy",
            "title": "A GUARDIÃ DO MARTELO",
            "blurb": "Runeterra não está em falta de campeões valentes, mas poucos são tão tenazes quanto Poppy. Carregando o lendário martelo de Orlon, uma arma que tem o dobro de seu tamanho, essa yordle determinada tem passado muitos anos procurando em segredo pelo lendário “Herói de Demacia”, dono legítimo do martelo. Até lá, ela cumpre seu dever entrando em batalhas e forçando os inimigos do reino a recuarem com cada giro de seu martelo.",
            "info": {
                "attack": 6,
                "defense": 7,
                "magic": 2,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 610,
                "hpperlevel": 104,
                "mp": 280,
                "mpperlevel": 40,
                "movespeed": 345,
                "armor": 38,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8,
                "hpregenperlevel": 0.8,
                "mpregen": 7,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 64,
                "attackdamageperlevel": 4,
                "attackspeedperlevel": 2.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Pyke",
            "key": "555",
            "name": "Pyke",
            "title": "O ESTRIPADOR DAS ÁGUAS SANGRENTAS",
            "blurb": "Um arpoador renomado vindo das Docas da Matança nas Águas de Sentina, Pyke deveria ter encontrado sua morte na barriga de um gigante Peixe-Jaula... mas, ainda assim, ele retornou. Agora, vagando pelos becos úmidos de sua cidade natal, ele usa seus novos dons sobrenaturais para trazer um rápido e grotesco fim para aqueles que fazem fortuna explorando os outros. Hoje, os mesmos habitantes da cidade que se orgulham de caçar monstros estão sendo caçados por um.",
            "info": {
                "attack": 9,
                "defense": 3,
                "magic": 1,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 670,
                "hpperlevel": 110,
                "mp": 415,
                "mpperlevel": 50,
                "movespeed": 330,
                "armor": 45,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 150,
                "hpregen": 7,
                "hpregenperlevel": 0.5,
                "mpregen": 8,
                "mpregenperlevel": 1,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 62,
                "attackdamageperlevel": 2,
                "attackspeedperlevel": 2.5,
                "attackspeed": 0.667
            }
        },
        {
            "version": "13.21.1",
            "id": "Qiyana",
            "key": "246",
            "name": "Qiyana",
            "title": "A IMPERATRIZ DOS ELEMENTOS",
            "blurb": "Na cidade-selva de Ixaocan, Qiyana planeja seu próprio e implacável caminho até o trono de Yun Tal. Última na fila para suceder seus pais, ela enfrenta qualquer um no seu caminho com uma confiança impetuosa e domínio sem precedentes sobre a magia elemental. Com a própria terra obedecendo a todos os seus comandos, Qiyana se vê como a maior elementalista na história de Ixaocan. Por esse motivo, julga-se merecedora não apenas de uma cidade, mas de todo um império.",
            "info": {
                "attack": 0,
                "defense": 2,
                "magic": 4,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 590,
                "hpperlevel": 124,
                "mp": 320,
                "mpperlevel": 50,
                "movespeed": 335,
                "armor": 28,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 150,
                "hpregen": 6,
                "hpregenperlevel": 0.9,
                "mpregen": 8,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 66,
                "attackdamageperlevel": 3.1,
                "attackspeedperlevel": 2.1,
                "attackspeed": 0.688
            }
        },
        {
            "version": "13.21.1",
            "id": "Quinn",
            "key": "133",
            "name": "Quinn",
            "title": "AS ASAS DE DEMACIA",
            "blurb": "Quinn é uma cavaleira patrulheira de elite de Demacia que cumpre missões perigosas no coração do território inimigo. Ela e sua águia lendária, Valor, possuem um vínculo inquebrável e seus inimigos muitas vezes são mortos antes de notarem que não estão lutando contra um, mas dois dos maiores heróis do reino. Ágil e acrobática quando necessário, Quinn mira com sua balestra, enquanto Valor, do alto, marca seus alvos esquivos, fazendo deles uma dupla letal no campo de batalha.",
            "info": {
                "attack": 9,
                "defense": 4,
                "magic": 2,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 565,
                "hpperlevel": 107,
                "mp": 269,
                "mpperlevel": 35,
                "movespeed": 330,
                "armor": 28,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 7,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 59,
                "attackdamageperlevel": 2.7,
                "attackspeedperlevel": 3.1,
                "attackspeed": 0.668
            }
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "Rakan",
            "key": "497",
            "name": "Rakan",
            "title": "O CHARMOSO",
            "blurb": "Inconsistente e charmoso, Rakan é um conhecido encrenqueiro vastaya e o melhor dançarino de batalha da história da tribo Lhotlan. Para os humanos das montanhas de Ionia, seu nome sempre foi sinônimo de festivais mirabolantes, festas agitadas e música subversiva. Poucos suspeitariam que este artista itinerante e energético é parceiro da rebelde Xayah e totalmente dedicado à causa dela.",
            "info": {
                "attack": 2,
                "defense": 4,
                "magic": 8,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 610,
                "hpperlevel": 99,
                "mp": 315,
                "mpperlevel": 50,
                "movespeed": 335,
                "armor": 30,
                "armorperlevel": 4.9,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 300,
                "hpregen": 5,
                "hpregenperlevel": 0.5,
                "mpregen": 8.75,
                "mpregenperlevel": 0.5,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 62,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 3,
                "attackspeed": 0.635
            }
        },
        {
            "version": "13.21.1",
            "id": "Rammus",
            "key": "33",
            "name": "Rammus",
            "title": "O TATU BLINDADO",
            "blurb": "Idolatrado por muitos, dispensado por alguns e misterioso para todos, Rammus é um ser curioso e enigmático. Protegido por um casco espetado, ele inspira teorias cada vez mais divergentes sobre sua origem por onde quer que passe — de semideus, a oráculo sagrado, a uma fera qualquer que foi transformada por magia. Qualquer que seja a verdade, Rammus mantém seus pareceres e não interrompe seu caminho por ninguém enquanto vaga sem rumo pelo deserto shurimane.",
            "info": {
                "attack": 4,
                "defense": 10,
                "magic": 5,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 675,
                "hpperlevel": 94,
                "mp": 310,
                "mpperlevel": 33,
                "movespeed": 335,
                "armor": 40,
                "armorperlevel": 5.5,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8,
                "hpregenperlevel": 0.55,
                "mpregen": 7.85,
                "mpregenperlevel": 0.5,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 2.75,
                "attackspeedperlevel": 2.215,
                "attackspeed": 0.656
            }
        },
        {
            "version": "13.21.1",
            "id": "RekSai",
            "key": "421",
            "name": "Rek'Sai",
            "title": "A ESCAVADORA DO VAZIO",
            "blurb": "A predadora perfeita, Rek'Sai é uma criatura do Vazio sem piedade que anda por túneis no subsolo para emboscar e devorar vítimas desavisadas. Sua fome insaciável já destruiu regiões inteiras do outrora gigantesco império de Shurima. Mercadores, vendedores, até mesmo caravanas blindadas, preferem fazer longos desvios para evitarem a ela e seus filhotes no seu território de caça. Todos sabem que, se Rek'Sai for avistada no horizonte, a morte certamente virá do subsolo.",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 2,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador"
            ],
            "partype": "Rage",
            "stats": {
                "hp": 600,
                "hpperlevel": 99,
                "mp": 100,
                "mpperlevel": 0,
                "movespeed": 335,
                "armor": 36,
                "armorperlevel": 4.95,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 7.5,
                "hpregenperlevel": 0.65,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 58,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2,
                "attackspeed": 0.667
            }
        },
        {
            "version": "13.21.1",
            "id": "Rell",
            "key": "526",
            "name": "Rell",
            "title": "A DAMA DE FERRO",
            "blurb": "Produto de um experimento brutal nas mãos da Rosa Negra, Rell é uma arma humana rebelde que está determinada a destruir Noxus. Sua infância foi repleta de sofrimento e horror; a jovem teve que suportar procedimentos indescritíveis para aperfeiçoar e fortalecer seu controle mágico do metal – até que, um dia, empreendeu uma fuga violenta, matando muitos de seus captores no processo. Agora, Rell é tida como criminosa e ataca qualquer soldado noxiano que apareça diante dela. Ao mesmo tempo, procura sobreviventes de sua antiga academia, defendendo os fracos enquanto despacha violentamente seus antigos supervisores para a morte.",
            "info": {
                "attack": 0,
                "defense": 0,
                "magic": 0,
                "difficulty": 0
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 610,
                "hpperlevel": 104,
                "mp": 350,
                "mpperlevel": 45,
                "movespeed": 330,
                "armor": 36,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.85,
                "attackrange": 175,
                "hpregen": 7.5,
                "hpregenperlevel": 0.85,
                "mpregen": 6,
                "mpregenperlevel": 0.35,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 1.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Renata",
            "key": "888",
            "name": "Renata Glasc",
            "title": "A BARONESA DA QUÍMICA",
            "blurb": "Renata Glasc emergiu das cinzas de seu antigo lar com nada além da pesquisa alquímica de seus pais e seu próprio nome. Décadas se passaram, e ela se tornou a Baronesa da Química mais rica de Zaun, uma magnata que consolidou seu poder ligando os interesses dos outros aos seus próprios. Trabalhe com ela e receberá uma recompensa imensurável. Trabalhe contra ela e viva para se arrepender. Mas, uma hora ou outra, todos acabam ao lado dela.",
            "info": {
                "attack": 2,
                "defense": 6,
                "magic": 9,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 545,
                "hpperlevel": 94,
                "mp": 350,
                "mpperlevel": 50,
                "movespeed": 330,
                "armor": 27,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 11.5,
                "mpregenperlevel": 0.5,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 49,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.11,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Renekton",
            "key": "58",
            "name": "Renekton",
            "title": "O CARNICEIRO DAS AREIAS",
            "blurb": "Renekton é um aterrorizante e furioso ser Ascendente dos desertos escaldantes de Shurima. Ele já foi o guerreiro mais estimado de todo o seu império, levando os exércitos da nação a inúmeras vitórias. No entanto, após a queda do império, Renekton foi enterrado nas areias e, lentamente, enquanto o mundo girava e mudava, ele sucumbia à loucura. Novamente liberto, ele é consumido pelo desejo de encontrar e matar seu irmão Nasus, a quem culpa pelos séculos que passou na escuridão graças à própria loucura.",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 2,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Fury",
            "stats": {
                "hp": 660,
                "hpperlevel": 111,
                "mp": 100,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 35,
                "armorperlevel": 5.2,
                "spellblock": 28,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8,
                "hpregenperlevel": 0.75,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 69,
                "attackdamageperlevel": 4.15,
                "attackspeedperlevel": 2.75,
                "attackspeed": 0.665
            }
        },
        {
            "version": "13.21.1",
            "id": "Rengar",
            "key": "107",
            "name": "Rengar",
            "title": "O ACOSSADOR DA ALCATEIA",
            "blurb": "Rengar é um feroz caçador de troféus vastaya que gosta da emoção proporcionada pela caça e pelo abate de criaturas perigosas. Ele vasculha o mundo em busca das feras mais perigosas que pode encontrar, procurando principalmente por Kha'Zix, a criatura do vazio que arrancou seu olho. Rengar não persegue suas presas por fome nem por glória, mas pela simples beleza da caçada.",
            "info": {
                "attack": 7,
                "defense": 4,
                "magic": 2,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino, ",
                " Lutador"
            ],
            "partype": "Ferocity",
            "stats": {
                "hp": 620,
                "hpperlevel": 104,
                "mp": 4,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 34,
                "armorperlevel": 4.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 6,
                "hpregenperlevel": 0.5,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 68,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 3,
                "attackspeed": 0.667
            }
        },
        {
            "version": "13.21.1",
            "id": "Riven",
            "key": "92",
            "name": "Riven",
            "title": "A EXILADA",
            "blurb": "Outrora mestra das espadas nos esquadrões de Noxus, agora Riven é uma expatriada em uma terra que um dia já tentou conquistar. Depois de alcançar os altos escalões do exército usando a força de sua convicção e sua brutal eficiência, ela foi recompensada com uma lâmina rúnica lendária e sua própria milícia. No entanto, no fronte ioniano, a fé de Riven em sua terra natal foi testada e, no fim, quebrada. Tendo cortado todos os laços com o império, agora ela busca seu lugar em um mundo devastado, mesmo diante de rumores de que a própria Noxus passou por uma transformação...",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 1,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Assassino"
            ],
            "partype": "None",
            "stats": {
                "hp": 630,
                "hpperlevel": 100,
                "mp": 0,
                "mpperlevel": 0,
                "movespeed": 340,
                "armor": 33,
                "armorperlevel": 4.4,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8.5,
                "hpregenperlevel": 0.5,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 64,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Rumble",
            "key": "68",
            "name": "Rumble",
            "title": "A AMEAÇA MECÂNICA",
            "blurb": "Rumble é um jovem inventor irritadiço. Usando nada além de suas próprias mãos e uma pilha de sucata, o yordle briguento construiu um mecha colossal montado com um arsenal de arpões eletrificados e foguetes incendiários. Apesar de outros rirem de suas criações de ferro-velho, Rumble não se importa. Afinal, é ele que tem um cospe-fogo",
            "info": {
                "attack": 3,
                "defense": 6,
                "magic": 8,
                "difficulty": 10
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Mago"
            ],
            "partype": "Heat",
            "stats": {
                "hp": 625,
                "hpperlevel": 105,
                "mp": 150,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 36,
                "armorperlevel": 4.7,
                "spellblock": 28,
                "spellblockperlevel": 1.55,
                "attackrange": 125,
                "hpregen": 7,
                "hpregenperlevel": 0.6,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 61,
                "attackdamageperlevel": 3.2,
                "attackspeedperlevel": 1.85,
                "attackspeed": 0.644
            }
        },
        {
            "version": "13.21.1",
            "id": "Ryze",
            "key": "13",
            "name": "Ryze",
            "title": "O MAGO RÚNICO",
            "blurb": "Considerado pela grande maioria como o mago mais habilidoso de Runeterra, Ryze é um arquimago ancião e amargo que carrega um enorme peso. Dotado de um enorme poder arcano e de uma notável estrutura física, ele busca incansavelmente pelas Runas Globais, que são fragmentos de magia pura que um dia criaram o mundo a partir do nada. Ele deve recuperar esses artefatos antes que eles caiam em mãos erradas, pois Ryze conhece bem os horrores que eles podem infligir em Runeterra.",
            "info": {
                "attack": 2,
                "defense": 2,
                "magic": 10,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 645,
                "hpperlevel": 124,
                "mp": 300,
                "mpperlevel": 70,
                "movespeed": 340,
                "armor": 22,
                "armorperlevel": 4.2,
                "spellblock": 32,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 8,
                "hpregenperlevel": 0.8,
                "mpregen": 8,
                "mpregenperlevel": 1,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 58,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.11,
                "attackspeed": 0.625
            }
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "Samira",
            "key": "360",
            "name": "Samira",
            "title": "A ROSA DO DESERTO",
            "blurb": "Samira encara a morte nos olhos com confiança inabalável, procurando diversão e adrenalina aonde quer que vá. Depois que seu lar em Shurima foi destruído quando ainda era criança, ela encontrou sua verdadeira vocação em Noxus, onde conquistou fama como a guerreira valente e estilosa que aceitava missões arriscadas do mais alto calibre. Empunhando pistolas de pólvora negra e uma espada personalizada, Samira prospera em circunstâncias de vida ou morte, eliminando – com estilo e rapidez – qualquer um que cruze seu caminho.",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 3,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 630,
                "hpperlevel": 108,
                "mp": 349,
                "mpperlevel": 38,
                "movespeed": 335,
                "armor": 26,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 500,
                "hpregen": 3.25,
                "hpregenperlevel": 0.55,
                "mpregen": 8.2,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 57,
                "attackdamageperlevel": 3.3,
                "attackspeedperlevel": 3.3,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Sejuani",
            "key": "113",
            "name": "Sejuani",
            "title": "A FÚRIA DO NORTE",
            "blurb": "Sejuani é a mãe de guerra Glacinata brutal e implacável da Garra do Inverno, uma das tribos mais temidas de Freljord. A sobrevivência de seu povo é uma batalha constante e desesperada contra os elementos, forçando-os a pilhar noxianos, demacianos e avarosianos para sobreviver aos invernos severos. A própria Sejuani lidera os ataques mais perigosos, montada no seu javali drüvask, Bristle, usando seu mangual de Gelo Verdadeiro para congelar e despedaçar seus inimigos.",
            "info": {
                "attack": 5,
                "defense": 7,
                "magic": 6,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 630,
                "hpperlevel": 114,
                "mp": 400,
                "mpperlevel": 40,
                "movespeed": 340,
                "armor": 34,
                "armorperlevel": 5.45,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 150,
                "hpregen": 8.5,
                "hpregenperlevel": 1,
                "mpregen": 7,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 66,
                "attackdamageperlevel": 4,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.688
            }
        },
        {
            "version": "13.21.1",
            "id": "Senna",
            "key": "235",
            "name": "Senna",
            "title": "A REDENTORA",
            "blurb": "Amaldiçoada desde a infância a ser perseguida pelo fenômeno sobrenatural da Névoa Negra, Senna se juntou à ordem dos Sentinelas da Luz e lutou bravamente contra seu destino. Ela acabou sendo morta e teve sua alma aprisionada em uma lanterna pelo cruel espectro Thresh. No entanto, por se recusar a perder as esperanças, ela aproveitou seu tempo dentro da lanterna para aprender a usar a Névoa, ressurgindo com uma nova vida e sabendo que jamais voltaria a ser a mesma. Agora, armada com as forças da luz e da escuridão, Senna busca exterminar a Névoa Negra, atraindo o fenômeno para si mesma a cada disparo de sua arma relicária e salvando as almas perdidas que ali residem.",
            "info": {
                "attack": 7,
                "defense": 2,
                "magic": 6,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 530,
                "hpperlevel": 89,
                "mp": 350,
                "mpperlevel": 45,
                "movespeed": 330,
                "armor": 28,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 600,
                "hpregen": 3.5,
                "hpregenperlevel": 0.55,
                "mpregen": 11.5,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 50,
                "attackdamageperlevel": 0,
                "attackspeedperlevel": 4,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Seraphine",
            "key": "147",
            "name": "Seraphine",
            "title": "A CANTORA SONHADORA",
            "blurb": "Nascida em Piltover e filha de zaunitas, Seraphine é capaz de ouvir a alma das pessoas. O mundo canta para ela, e ela canta em resposta. Esses sons a perturbavam quando era mais jovem, mas hoje ela os usa como inspiração, transformando o caos em uma sinfonia. A cantora se apresenta nas cidades irmãs para lembrar a seus cidadãos que eles não estão sozinhos, que são mais fortes juntos e que, aos olhos dela, o potencial deles é ilimitado.",
            "info": {
                "attack": 0,
                "defense": 0,
                "magic": 0,
                "difficulty": 0
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 570,
                "hpperlevel": 90,
                "mp": 360,
                "mpperlevel": 50,
                "movespeed": 325,
                "armor": 26,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 6.5,
                "hpregenperlevel": 0.6,
                "mpregen": 11.5,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2,
                "attackspeed": 0.669
            }
        },
        {
            "version": "13.21.1",
            "id": "Sett",
            "key": "875",
            "name": "Sett",
            "title": "O CHEFE",
            "blurb": "Líder de parte do próspero submundo do crime em Ionia, Sett deve todo o seu sucesso à guerra contra Noxus. Mesmo estreando como um simples desafiante nas arenas de combate em Navori, ele logo conquistou notoriedade com sua força bruta e capacidade de suportar dor contínua e extrema. Agora, após superar todos os combatentes locais, Sett chegou até o topo e reina sobre as arenas onde um dia lutara.",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 1,
                "difficulty": 2
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Grit",
            "stats": {
                "hp": 670,
                "hpperlevel": 114,
                "mp": 0,
                "mpperlevel": 0,
                "movespeed": 340,
                "armor": 33,
                "armorperlevel": 5.2,
                "spellblock": 28,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 7,
                "hpregenperlevel": 0.5,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 4,
                "attackspeedperlevel": 1.75,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Shaco",
            "key": "35",
            "name": "Shaco",
            "title": "O BUFÃO DEMONÍACO",
            "blurb": "Criado anos atrás como um brinquedo para um príncipe solitário, Shaco, a marionete encantada, agora se deleita com assassinatos e desordem. Corrompido por magia das trevas e pela perda de seu dono querido, o boneco que já fora gentil agora encontra prazer somente na miséria das próprias almas que ele atormenta. Ele usa brinquedos e truques simples para conseguir efeitos mortais, achando os resultados de seus “jogos” sangrentos hilários. E para aqueles que escutam uma risada sombria na calada da noite, o Bufão Demoníaco pode tê-los marcado como seu próximo brinquedo.",
            "info": {
                "attack": 8,
                "defense": 4,
                "magic": 6,
                "difficulty": 9
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 630,
                "hpperlevel": 99,
                "mp": 297,
                "mpperlevel": 40,
                "movespeed": 345,
                "armor": 30,
                "armorperlevel": 4,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8.5,
                "hpregenperlevel": 0.55,
                "mpregen": 6,
                "mpregenperlevel": 0.45,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 63,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 3,
                "attackspeed": 0.694
            }
        },
        {
            "version": "13.21.1",
            "id": "Shen",
            "key": "98",
            "name": "Shen",
            "title": "O OLHO DO CREPÚSCULO",
            "blurb": "Para os guerreiros ionianos sigilosos conhecidos como Kinkou, Shen, o Olho do Crepúsculo, é um líder. Ele busca permanecer livre da confusão das emoções, preconceito ou ego, caminhando pelo caminho nunca visto do julgamento imparcial entre o reino dos espíritos e o mundo físico. Incumbido de impor harmonia entre os dois, Shen empunha lâminas de aço e energia arcana contra qualquer um que ameaçar o equilíbrio.",
            "info": {
                "attack": 3,
                "defense": 9,
                "magic": 3,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque"
            ],
            "partype": "Energy",
            "stats": {
                "hp": 610,
                "hpperlevel": 99,
                "mp": 400,
                "mpperlevel": 0,
                "movespeed": 340,
                "armor": 34,
                "armorperlevel": 4.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8.5,
                "hpregenperlevel": 0.75,
                "mpregen": 50,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 3,
                "attackspeed": 0.751
            }
        },
        {
            "version": "13.21.1",
            "id": "Shyvana",
            "key": "102",
            "name": "Shyvana",
            "title": "A MEIO-DRAGÃO",
            "blurb": "Shyvana é uma criatura com a mágica de um fragmento de runa queimando em seu coração. Apesar de normalmente parecer humanoide, ela pode mudar para sua forma verdadeira de um temível dragão, incinerando seus inimigos com seu sopro de chamas. Depois de salvar a vida do príncipe herdeiro, Jarvan IV, Shyvana agora serve, mesmo que desconfortavelmente, na sua guarda real, lutando para encontrar aceitação entre o povo receoso de Demacia.",
            "info": {
                "attack": 8,
                "defense": 6,
                "magic": 3,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Fury",
            "stats": {
                "hp": 665,
                "hpperlevel": 104,
                "mp": 100,
                "mpperlevel": 0,
                "movespeed": 350,
                "armor": 38,
                "armorperlevel": 4.55,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8.5,
                "hpregenperlevel": 0.8,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 66,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.5,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Singed",
            "key": "27",
            "name": "Singed",
            "title": "O QUÍMICO LOUCO",
            "blurb": "Singed é um alquimista zaunita de intelecto inigualável, que devotou sua vida a ultrapassar os limites do conhecimento; e nenhum preço, nem sua própria sanidade, é alto demais. Existe cura para sua loucura? Suas misturas raramente falham, mas, para muitos, Singed perdeu qualquer noção da humanidade, deixando uma trilha tóxica de miséria e terror no seu caminho.",
            "info": {
                "attack": 4,
                "defense": 8,
                "magic": 7,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 650,
                "hpperlevel": 99,
                "mp": 330,
                "mpperlevel": 45,
                "movespeed": 345,
                "armor": 34,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 9.5,
                "hpregenperlevel": 0.55,
                "mpregen": 7.5,
                "mpregenperlevel": 0.55,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 63,
                "attackdamageperlevel": 3.4,
                "attackspeedperlevel": 1.9,
                "attackspeed": 0.613
            }
        },
        {
            "version": "13.21.1",
            "id": "Sion",
            "key": "14",
            "name": "Sion",
            "title": "O COLOSSO MORTO-VIVO",
            "blurb": "Um herói de guerra de uma era passada, Sion era reverenciado em Noxus por ter estrangulado a vida de um rei demaciano com suas próprias mãos. Mas o esquecimento lhe foi negado quando foi ressuscitado para servir seu império, mesmo na sua morte. Seu massacre indiscriminado levou qualquer um que estivesse em seu caminho, sem importar sua lealdade, provando que ele não possui mais nada de sua antiga humanidade. Mesmo assim, com armadura bruta pregada em carne apodrecida, Sion continua a investir na batalha em total abandono, lutando para se lembrar do seu verdadeiro ser entre cada ataque de seu machado.",
            "info": {
                "attack": 5,
                "defense": 9,
                "magic": 3,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 655,
                "hpperlevel": 87,
                "mp": 400,
                "mpperlevel": 52,
                "movespeed": 345,
                "armor": 32,
                "armorperlevel": 4.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 7.5,
                "hpregenperlevel": 0.8,
                "mpregen": 8,
                "mpregenperlevel": 0.6,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 68,
                "attackdamageperlevel": 4,
                "attackspeedperlevel": 1.3,
                "attackspeed": 0.679
            }
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "Sivir",
            "key": "15",
            "name": "Sivir",
            "title": "A MESTRA DA BATALHA",
            "blurb": "Sivir é uma renomada caçadora de recompensas e capitã mercenária que manipula o comércio nos desertos de Shurima. Armada com sua lendária lâmina em cruz adornada, ela lutou e venceu incontáveis batalhas por aqueles que podem pagar seu preço exorbitante. Conhecida por sua resolução audaz e ambição sem fim, ela se orgulha de recuperar tesouros secretos das perigosas tumbas de Shurima — por um bom preço. Com forças anciãs remexendo os ossos da própria Shurima, Sivir encontra-se dividida entre destinos conflitantes.",
            "info": {
                "attack": 9,
                "defense": 3,
                "magic": 1,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 600,
                "hpperlevel": 104,
                "mp": 340,
                "mpperlevel": 45,
                "movespeed": 335,
                "armor": 26,
                "armorperlevel": 4.45,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 500,
                "hpregen": 3.25,
                "hpregenperlevel": 0.55,
                "mpregen": 6,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 58,
                "attackdamageperlevel": 2.5,
                "attackspeedperlevel": 2,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Skarner",
            "key": "72",
            "name": "Skarner",
            "title": "A VANGUARDA DE CRISTAL",
            "blurb": "Skarner é um imenso escorpião cristalino de um vale escondido de Shurima. Parte da antiga raça dos Brackern, Skarner e seus semelhantes são conhecidos por seu grande conhecimento e profunda conexão com a terra, pois suas almas são infundidas com poderosos cristais vivos que mantêm as memórias de seus ancestrais. Em uma era muito antiga, os Brackern entraram em hibernação para evitar uma destruição mágica imprevista, mas eventos ameaçadores recentes despertaram Skarner. Sendo o único Brackern acordado, ele luta para proteger seus semelhantes daqueles que buscam lhes fazer mal.",
            "info": {
                "attack": 7,
                "defense": 6,
                "magic": 5,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 650,
                "hpperlevel": 99,
                "mp": 320,
                "mpperlevel": 60,
                "movespeed": 335,
                "armor": 38,
                "armorperlevel": 5,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 9,
                "hpregenperlevel": 0.85,
                "mpregen": 7.2,
                "mpregenperlevel": 0.45,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 65,
                "attackdamageperlevel": 4.5,
                "attackspeedperlevel": 2.1,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Sona",
            "key": "37",
            "name": "Sona",
            "title": "A MESTRA DAS CORDAS",
            "blurb": "Sona é um dos maiores prodígios em etwahl de cordas em Demacia, falando somente através de seus acordes graciosos e de suas árias vibrantes. Seu comportamento refinado cativou os nobres, apesar de muitos suspeitarem que suas melodias fascinantes realmente emanem magia, um tabu em Demacia. Silenciosa com desconhecidos, mas compreendida de alguma forma por companheiros próximos, Sona dedilha suas harmonias não somente para aliviar a dor de seus aliados, mas também para derrubar inimigos desavisados.",
            "info": {
                "attack": 5,
                "defense": 2,
                "magic": 8,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 550,
                "hpperlevel": 91,
                "mp": 340,
                "mpperlevel": 45,
                "movespeed": 325,
                "armor": 26,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 11.5,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 49,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.3,
                "attackspeed": 0.644
            }
        },
        {
            "version": "13.21.1",
            "id": "Soraka",
            "key": "16",
            "name": "Soraka",
            "title": "A FILHA DAS ESTRELAS",
            "blurb": "Uma andarilha vinda de dimensões celestiais além do Monte Targon, Soraka desistiu de sua imortalidade para proteger as raças mortais de seus instintos mais violentos. Ela pretende espalhar as virtudes da compaixão e da misericórdia a todos que encontra, curando até mesmo aqueles que desejam seu mal. E apesar de ter visto todas as dificuldades deste mundo, Soraka ainda acredita que o povo de Runeterra não alcançou todo seu potencial.",
            "info": {
                "attack": 2,
                "defense": 5,
                "magic": 7,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 605,
                "hpperlevel": 88,
                "mp": 425,
                "mpperlevel": 40,
                "movespeed": 325,
                "armor": 32,
                "armorperlevel": 5,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 2.5,
                "hpregenperlevel": 0.5,
                "mpregen": 11.5,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 50,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.14,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Swain",
            "key": "50",
            "name": "Swain",
            "title": "O GRANDE GENERAL NOXIANO",
            "blurb": "Jericho Swain é o líder visionário de Noxus, uma nação expansionista que venera apenas a força. Apesar de ter sido abatido e mutilado nas guerras ionianas, onde perdeu o braço esquerdo, ele tomou o controle do império com uma determinação implacável... e uma nova mão demoníaca. Agora, Swain comanda os esquadrões da linha de frente, marchando contra uma escuridão que se aproxima e que somente ele pode ver – em vislumbres capturados por corvos sombrios dos cadáveres à sua volta. Em um turbilhão de sacrifícios e segredos, o maior segredo de todos é que o verdadeiro inimigo vem de dentro.",
            "info": {
                "attack": 2,
                "defense": 6,
                "magic": 9,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 595,
                "hpperlevel": 99,
                "mp": 468,
                "mpperlevel": 29,
                "movespeed": 330,
                "armor": 26,
                "armorperlevel": 5.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 7,
                "hpregenperlevel": 0.65,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 58,
                "attackdamageperlevel": 2.7,
                "attackspeedperlevel": 2.11,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Sylas",
            "key": "517",
            "name": "Sylas",
            "title": "O ABJUGADO",
            "blurb": "Criado em um dos bairros mais pobres de Demacia, Sylas de Dregbourne se tornou o símbolo do lado mais sombrio da Grande Cidade. Quando criança, sua habilidade de identificar magia chamou a atenção de importantes caçadores de magos, que depois o aprisionaram por ter se virado contra eles. Finalmente livre, agora Sylas vive como um rígido revolucionário, usando a magia das pessoas ao seu redor para destruir o reino ao qual servia… e o grupo de magos exilados que o segue só faz crescer.",
            "info": {
                "attack": 3,
                "defense": 4,
                "magic": 8,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 575,
                "hpperlevel": 129,
                "mp": 400,
                "mpperlevel": 70,
                "movespeed": 340,
                "armor": 27,
                "armorperlevel": 5.2,
                "spellblock": 32,
                "spellblockperlevel": 2.55,
                "attackrange": 175,
                "hpregen": 9,
                "hpregenperlevel": 0.9,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 61,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.645
            }
        },
        {
            "version": "13.21.1",
            "id": "Syndra",
            "key": "134",
            "name": "Syndra",
            "title": "A SOBERANA SOMBRIA",
            "blurb": "Syndra é uma temida maga ioniana com um poder incrível ao seu dispor. Quando criança, ela causava pavor nos anciões da aldeia com sua magia imprudente e indomada. Mandada embora para aprender a controlar seus poderes, ela terminou descobrindo que seu suposto mentor estava reprimindo suas habilidades. Transformando seus sentimentos de traição e mágoa em obscuras esferas de energia, Syndra jurou destruir todos que tentarem controlá-la.",
            "info": {
                "attack": 2,
                "defense": 3,
                "magic": 9,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 563,
                "hpperlevel": 104,
                "mp": 480,
                "mpperlevel": 40,
                "movespeed": 330,
                "armor": 25,
                "armorperlevel": 4.6,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 6.5,
                "hpregenperlevel": 0.6,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 54,
                "attackdamageperlevel": 2.9,
                "attackspeedperlevel": 2,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "TahmKench",
            "key": "223",
            "name": "Tahm Kench",
            "title": "O REI DO RIO",
            "blurb": "Conhecido por muitos nomes ao longo da história, Tahm Kench viaja pelas águas de Runeterra alimentando seu insaciável apetite com o sofrimento alheio. Apesar de parecer particularmente encantador e orgulhoso, ele vaga pelo reino físico como um andarilho em busca de presas desavisadas. Sua língua pode atordoar até o guerreiro mais blindado a uma grande distância, e cair em sua barriga retumbante é como cair em um abismo do qual não há esperança de sair.",
            "info": {
                "attack": 3,
                "defense": 9,
                "magic": 6,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": ["Tanque, ", "Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 640,
                "hpperlevel": 103,
                "mp": 325,
                "mpperlevel": 50,
                "movespeed": 335,
                "armor": 42,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 6.5,
                "hpregenperlevel": 0.55,
                "mpregen": 8,
                "mpregenperlevel": 1,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 56,
                "attackdamageperlevel": 3.2,
                "attackspeedperlevel": 2.5,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Taliyah",
            "key": "163",
            "name": "Taliyah",
            "title": "A TECELÃ DE PEDRAS",
            "blurb": "Taliyah é uma maga nômade de Shurima, dividida entre sua empolgação juvenil e suas grandes responsabilidades. Ela cruzou quase toda Valoran em uma jornada para conhecer a verdadeira natureza de seus próprios poderes, apesar de ter retornado recentemente para proteger sua tribo. Há aqueles que já interpretaram sua compaixão como fraqueza e pagaram o preço por isso, pois, debaixo do comportamento juvenil de Taliyah, existe uma determinação forte o suficiente para mover montanhas e um espírito feroz o suficiente para fazer a terra tremer.",
            "info": {
                "attack": 1,
                "defense": 7,
                "magic": 8,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 550,
                "hpperlevel": 104,
                "mp": 470,
                "mpperlevel": 30,
                "movespeed": 330,
                "armor": 18,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 6.5,
                "hpregenperlevel": 0.65,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 58,
                "attackdamageperlevel": 3.3,
                "attackspeedperlevel": 1.36,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Talon",
            "key": "91",
            "name": "Talon",
            "title": "A SOMBRA DA LÂMINA",
            "blurb": "Talon é a adaga na escuridão, um assassino impiedoso capaz de atacar sem aviso e escapar antes que qualquer alarme soe. Ele construiu uma reputação perigosa nas ruas brutais de Noxus, onde foi forçado a lutar, matar e roubar para sobreviver. Adotado pela notória família Du Couteau, ele agora usa suas habilidades mortais seguindo os comandos do império, assassinando líderes inimigos, capitães e heróis… além de qualquer noxiano tolo o suficiente para ganhar o desprezo de seus mestres.",
            "info": {
                "attack": 9,
                "defense": 3,
                "magic": 1,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 658,
                "hpperlevel": 109,
                "mp": 400,
                "mpperlevel": 37,
                "movespeed": 335,
                "armor": 30,
                "armorperlevel": 4.7,
                "spellblock": 39,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 8.5,
                "hpregenperlevel": 0.75,
                "mpregen": 7.6,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 68,
                "attackdamageperlevel": 3.1,
                "attackspeedperlevel": 2.9,
                "attackspeed": 0.625
            }
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "Taric",
            "key": "44",
            "name": "Taric",
            "title": "O ESCUDO DE VALORAN",
            "blurb": "Taric é o Aspecto do Protetor, portando um incrível poder como o guardião da vida, do amor e da beleza de Runeterra. Punido por faltar ao cumprimento de seu dever e exilado de Demacia, sua terra natal, Taric subiu o Monte Targon em busca de redenção, mas acabou por descobrir um chamado maior dentre as estrelas. Imbuído do poder ancestral de Targon, o Escudo de Valoran agora mantém vigilância contra a pérfida corrupção do Vazio.",
            "info": {
                "attack": 4,
                "defense": 8,
                "magic": 5,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte, ",
                " Lutador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 645,
                "hpperlevel": 99,
                "mp": 300,
                "mpperlevel": 60,
                "movespeed": 340,
                "armor": 40,
                "armorperlevel": 4.6,
                "spellblock": 28,
                "spellblockperlevel": 2.05,
                "attackrange": 150,
                "hpregen": 6,
                "hpregenperlevel": 0.5,
                "mpregen": 8.5,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 2,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Teemo",
            "key": "17",
            "name": "Teemo",
            "title": "O EXPLORADOR VELOZ",
            "blurb": "Indiferente até aos obstáculos mais perigosos e ameaçadores, Teemo vasculha o mundo com infinito entusiasmo e animação. Um yordle com uma inabalável moral que se orgulha de seguir o Código dos Escoteiros de Bandópolis, às vezes com tanta dedicação que não se toca das possíveis consequências de suas ações. Embora alguns duvidem da existência dos escoteiros, uma coisa é certa: nunca se deve duvidar das convicções de Teemo.",
            "info": {
                "attack": 5,
                "defense": 3,
                "magic": 7,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 598,
                "hpperlevel": 104,
                "mp": 334,
                "mpperlevel": 25,
                "movespeed": 330,
                "armor": 24,
                "armorperlevel": 4.95,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 500,
                "hpregen": 5.5,
                "hpregenperlevel": 0.65,
                "mpregen": 9.6,
                "mpregenperlevel": 0.45,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 54,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 3.38,
                "attackspeed": 0.69
            }
        },
        {
            "version": "13.21.1",
            "id": "Thresh",
            "key": "412",
            "name": "Thresh",
            "title": "O GUARDIÃO DAS CORRENTES",
            "blurb": "Sádico e astuto, Thresh é um espírito ambicioso e incansável das Ilhas das Sombras. Ele já foi guardião de incontáveis segredos arcanos, mas acabou sucumbindo a poderes maiores do que a vida e a morte. Agora, Thresh vive atormentando e corrompendo vítimas de forma lenta e dolorosamente criativa. Seus alvos sofrem muito além de seus corpos mortais, pois Thresh aflige as próprias almas, aprisionando-as em sua lanterna maldita para torturá-las por toda a eternidade.",
            "info": {
                "attack": 5,
                "defense": 6,
                "magic": 6,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": ["Suporte, ", " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 600,
                "hpperlevel": 120,
                "mp": 274,
                "mpperlevel": 44,
                "movespeed": 330,
                "armor": 28,
                "armorperlevel": 0,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 450,
                "hpregen": 7,
                "hpregenperlevel": 0.55,
                "mpregen": 6,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 56,
                "attackdamageperlevel": 2.2,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Tristana",
            "key": "18",
            "name": "Tristana",
            "title": "A ARTILHEIRA YORDLE",
            "blurb": "Apesar de muitos outros yordles focarem sua energia em descobertas, invenções ou simplesmente travessuras, Tristana sempre se inspirou nas aventuras de grandes guerreiros. Ela ouviu muito sobre Runeterra, suas facções e suas guerras, e acreditava que sua raça também poderia se tornar digna de lendas. Pisando no mundo pela primeira vez, ela pegou seu canhão de confiança, Boomer, e agora salta para a batalha com coragem e otimismo inabaláveis.",
            "info": {
                "attack": 9,
                "defense": 3,
                "magic": 5,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 640,
                "hpperlevel": 102,
                "mp": 250,
                "mpperlevel": 32,
                "movespeed": 325,
                "armor": 30,
                "armorperlevel": 4.5,
                "spellblock": 28,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 4,
                "hpregenperlevel": 0.65,
                "mpregen": 7.2,
                "mpregenperlevel": 0.45,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 59,
                "attackdamageperlevel": 3.7,
                "attackspeedperlevel": 1.5,
                "attackspeed": 0.656
            }
        },
        {
            "version": "13.21.1",
            "id": "Trundle",
            "key": "48",
            "name": "Trundle",
            "title": "O REI DOS TROLLS",
            "blurb": "Trundle é um troll gigantesco e traiçoeiro com uma tendência particularmente perversa, e não há nada que ele não possa submeter a cacetadas, nem mesmo a própria Freljord. Violentamente territorial, ele persegue qualquer um tolo o suficiente de entrar em seu domínio. Então, com seu enorme porrete de Gelo Verdadeiro, ele gela seus inimigos até os ossos e os empala com pilares dentados congelados, rindo enquanto eles sangram na tundra.",
            "info": {
                "attack": 7,
                "defense": 6,
                "magic": 2,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 686,
                "hpperlevel": 110,
                "mp": 340,
                "mpperlevel": 45,
                "movespeed": 350,
                "armor": 37,
                "armorperlevel": 3.9,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 6,
                "hpregenperlevel": 0.75,
                "mpregen": 7.5,
                "mpregenperlevel": 0.6,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 68,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.9,
                "attackspeed": 0.67
            }
        },
        {
            "version": "13.21.1",
            "id": "Tryndamere",
            "key": "23",
            "name": "Tryndamere",
            "title": "O REI BÁRBARO",
            "blurb": "Carregado por fúria e raiva desenfreadas, Tryndamere galgou seu caminho através de Freljord, desafiando abertamente os maiores guerreiros do norte em preparo para os dias sombrios que virão. O bárbaro furioso já procurou por vingança pela aniquilação de seu clã, mas recentemente ele encontrou uma companhia em Ashe, a mãe de guerra de Avarosa, além de um lar entre seu povo. Sua força quase desumana e resistência são lendárias, e elas permitiram que ele e seus aliados conquistassem muitas vitórias contra as maiores adversidades.",
            "info": {
                "attack": 10,
                "defense": 5,
                "magic": 2,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Assassino"
            ],
            "partype": "Fury",
            "stats": {
                "hp": 696,
                "hpperlevel": 108,
                "mp": 100,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 33,
                "armorperlevel": 4.3,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 8.5,
                "hpregenperlevel": 0.9,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 66,
                "attackdamageperlevel": 4,
                "attackspeedperlevel": 2.9,
                "attackspeed": 0.67
            }
        },
        {
            "version": "13.21.1",
            "id": "TwistedFate",
            "key": "4",
            "name": "Twisted Fate",
            "title": "O MESTRE DAS CARTAS",
            "blurb": "Twisted Fate é um infame trapaceiro que apostou e encantou tudo em seu caminho por boa parte do mundo, conquistando a inimizade e admiração tanto de ricos quanto tolos. Ele raramente leva coisas a sério, saudando cada dia com um sorriso zombeteiro e elegância negligente. Twisted Fate sempre tem um ás na manga, não importa como.",
            "info": {
                "attack": 6,
                "defense": 2,
                "magic": 6,
                "difficulty": 9
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 604,
                "hpperlevel": 108,
                "mp": 333,
                "mpperlevel": 39,
                "movespeed": 330,
                "armor": 21,
                "armorperlevel": 4.35,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 5.5,
                "hpregenperlevel": 0.6,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 52,
                "attackdamageperlevel": 3.3,
                "attackspeedperlevel": 3.22,
                "attackspeed": 0.651
            }
        },
        {
            "version": "13.21.1",
            "id": "Twitch",
            "key": "29",
            "name": "Twitch",
            "title": "O SEMEADOR DA PESTE",
            "blurb": "Um rato zaunita empesteado de nascença e um apreciador da imundície por paixão, Twitch não tem medo de sujar as patas. Mirando com uma balestra embebida em químicos no centro do coração dourado de Piltover, ele jurou mostrar àqueles na cidade de cima quão imundos eles realmente são. Sempre à espreita, quando ele não está se esgueirando no Sumidouro, ele está cavando fundo no lixo dos outros por tesouros descartados… e talvez um sanduíche bolorento.",
            "info": {
                "attack": 9,
                "defense": 2,
                "magic": 3,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 682,
                "hpperlevel": 100,
                "mp": 300,
                "mpperlevel": 40,
                "movespeed": 330,
                "armor": 27,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 3.75,
                "hpregenperlevel": 0.6,
                "mpregen": 7.25,
                "mpregenperlevel": 0.7,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 59,
                "attackdamageperlevel": 3.1,
                "attackspeedperlevel": 3.38,
                "attackspeed": 0.679
            }
        },
        {
            "version": "13.21.1",
            "id": "Udyr",
            "key": "77",
            "name": "Udyr",
            "title": "O ANDARILHO ESPIRITUAL",
            "blurb": "Udyr, o mais poderoso andarilho espiritual vivo, comunga com todos os espíritos de Freljord, seja compreendendo empaticamente suas necessidades, ou canalizando e transformando a energia etérea deles em seu próprio estilo de luta primevo. Ele busca o equilíbrio interior, para que sua mente não se perca entre as de outrem, mas também o equilíbrio exterior. A terra mística de Freljord só poderá prosperar com o amadurecimento que advém do conflito e da luta, e Udyr sabe que sacrifícios devem ser feitos para afastar o sossego e a estagnação.",
            "info": {
                "attack": 8,
                "defense": 7,
                "magic": 4,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 664,
                "hpperlevel": 92,
                "mp": 271,
                "mpperlevel": 50,
                "movespeed": 350,
                "armor": 31,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 6,
                "hpregenperlevel": 0.75,
                "mpregen": 7.5,
                "mpregenperlevel": 0.45,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 62,
                "attackdamageperlevel": 4,
                "attackspeedperlevel": 3,
                "attackspeed": 0.65
            }
        },
        {
            "version": "13.21.1",
            "id": "Urgot",
            "key": "6",
            "name": "Urgot",
            "title": "O ENCOURAÇADO",
            "blurb": "Na época em que era um poderoso carrasco noxiano, Urgot foi traído pelo império para o qual havia tirado tantas vidas. Aprisionado em correntes de ferro, ele foi forçado a aprender o verdadeiro significado da força na Draga — uma mina carcerária nas profundezas de Zaun. Após emergir de um desastre que espalhou o caos por toda a cidade, ele se tornou uma figura imponente no submundo criminoso da cidade. Hoje ele usa as mesmas correntes que o aprisionaram para erguer suas vítimas e seu objetivo é expurgar todos os seres indignos do seu novo lar, tornando-o um crisol de dor.",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 3,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 655,
                "hpperlevel": 102,
                "mp": 340,
                "mpperlevel": 45,
                "movespeed": 330,
                "armor": 36,
                "armorperlevel": 5.45,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 350,
                "hpregen": 7.5,
                "hpregenperlevel": 0.7,
                "mpregen": 7.25,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 63,
                "attackdamageperlevel": 4,
                "attackspeedperlevel": 3.75,
                "attackspeed": 0.625
            }
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "Varus",
            "key": "110",
            "name": "Varus",
            "title": "A FLECHA DA VINGANÇA",
            "blurb": "Um dos antigos darkin, Varus era um assassino mortal que amava atormentar seus inimigos, levando-os quase à insanidade antes de disparar a flecha mortal. Ele foi aprisionado no final da Grande Guerra dos Darkin, mas fugiu, séculos depois, na carne recomposta de dois caçadores ionianos que o libertaram involuntariamente, condenando-o a carregar o arco que contém suas essências. Agora Varus caça aqueles que o aprisionaram para decretar sua vingança brutal, mas as almas mortais dentro dele ainda resistem a cada passo do caminho.",
            "info": {
                "attack": 7,
                "defense": 3,
                "magic": 4,
                "difficulty": 2
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 600,
                "hpperlevel": 105,
                "mp": 360,
                "mpperlevel": 40,
                "movespeed": 330,
                "armor": 27,
                "armorperlevel": 4.6,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 575,
                "hpregen": 3.5,
                "hpregenperlevel": 0.55,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 62,
                "attackdamageperlevel": 3.4,
                "attackspeedperlevel": 4,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Vayne",
            "key": "67",
            "name": "Vayne",
            "title": "A CAÇADORA NOTURNA",
            "blurb": "Shauna Vayne é uma caçadora de monstros demaciana mortal e implacável que dedicou sua vida a encontrar e destruir o monstro que assassinou sua família. Armada com uma balestra em seu pulso e com um coração cheio de vingança, ela só é realmente feliz quando está matando praticantes ou criações das artes obscuras, atacando das sombras com um turbilhão de dardos de prata.",
            "info": {
                "attack": 10,
                "defense": 1,
                "magic": 1,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 550,
                "hpperlevel": 103,
                "mp": 232,
                "mpperlevel": 35,
                "movespeed": 330,
                "armor": 23,
                "armorperlevel": 4.6,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 3.5,
                "hpregenperlevel": 0.55,
                "mpregen": 7,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 2.35,
                "attackspeedperlevel": 3.3,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Veigar",
            "key": "45",
            "name": "Veigar",
            "title": "O PEQUENO MESTRE DO MAL",
            "blurb": "Veigar, um mestre entusiasta da feitiçaria das trevas, aderiu a poderes dos quais poucos mortais se aproximam. Um habitante inconformado de Bandópolis, ele desejava ultrapassar as limitações da magia yordle, se voltando, então, para os textos arcanos que permaneceram escondidos por milhares de anos. Agora uma criatura teimosa com uma fascinação sem fim pelos mistérios do universo, Veigar é constantemente subestimado por outros. E mesmo que ele acredite ser verdadeiramente mau, ele possui um senso de ética interior que leva alguns a se perguntarem sobre suas verdadeiras motivações.",
            "info": {
                "attack": 2,
                "defense": 2,
                "magic": 10,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 96,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 550,
                "hpperlevel": 108,
                "mp": 490,
                "mpperlevel": 26,
                "movespeed": 340,
                "armor": 18,
                "armorperlevel": 5.2,
                "spellblock": 32,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 6.5,
                "hpregenperlevel": 0.6,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 52,
                "attackdamageperlevel": 2.7,
                "attackspeedperlevel": 2.24,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Velkoz",
            "key": "161",
            "name": "Vel'Koz",
            "title": "O OLHO DO VAZIO",
            "blurb": "Não é claro se Vel'Koz foi a primeira criatura do Vazio a aparecer em Runeterra, mas certamente nunca houve outra que se igualasse ao seu nível de compreensão cruel e calculista. Enquanto sua raça devora ou perverte tudo ao seu redor, ele busca, em vez disso, examinar e estudar o domínio físico, assim como os estranhos seres guerreiros que habitam nele, por quaisquer fraquezas que o Vazio possa explorar. Mas Vel'Koz está longe de ser um observador passivo e é capaz de atacar ameaças com plasma mortal ou desfazer o próprio tecido do mundo.",
            "info": {
                "attack": 2,
                "defense": 2,
                "magic": 10,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 144,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 590,
                "hpperlevel": 102,
                "mp": 469,
                "mpperlevel": 21,
                "movespeed": 340,
                "armor": 22,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 3.1416,
                "attackspeedperlevel": 1.36,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Vex",
            "key": "711",
            "name": "Vex",
            "title": "A MELANCOLISTA",
            "blurb": "Em meio à escuridão das Ilhas das Sombras, uma solitária yordle se move com pesar, abrindo caminho pela névoa espectral, satisfeita em viver nas trevas. Com uma poderosa sombra no seu encalço e uma fonte inesgotável de mazelas nas costas, Vex vive num mundinho de agonia que ela mesma criou, longe da alegria repulsiva do mundo dos normais. Apesar de não ser a mais ambiciosa das yordles, perto dela a cor e a felicidade não têm vez. Com sua indisposição mágica, ela afasta qualquer possível intrometido.",
            "info": {
                "attack": 0,
                "defense": 0,
                "magic": 0,
                "difficulty": 0
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 192,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 590,
                "hpperlevel": 104,
                "mp": 490,
                "mpperlevel": 32,
                "movespeed": 335,
                "armor": 23,
                "armorperlevel": 4.45,
                "spellblock": 28,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 6.5,
                "hpregenperlevel": 0.6,
                "mpregen": 6,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 54,
                "attackdamageperlevel": 2.75,
                "attackspeedperlevel": 1,
                "attackspeed": 0.669
            }
        },
        {
            "version": "13.21.1",
            "id": "Vi",
            "key": "254",
            "name": "Vi",
            "title": "A DEFENSORA DE PILTOVER",
            "blurb": "Antiga criminosa das ruas violentas de Zaun, Vi é uma mulher temível, impulsiva e explosiva que tem muito pouco respeito por autoridades. Após ter crescido completamente só, Vi desenvolveu instintos de sobrevivência extremamente certeiros e um senso de humor extremamente ácido. Agora trabalhando com os Vigias de Piltover para manter a paz, ela porta poderosas manoplas hextec capazes de esmagar paredes e suspeitos com a mesma facilidade.",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 3,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 240,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 655,
                "hpperlevel": 99,
                "mp": 295,
                "mpperlevel": 65,
                "movespeed": 340,
                "armor": 30,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 10,
                "hpregenperlevel": 1,
                "mpregen": 8,
                "mpregenperlevel": 0.65,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 63,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2,
                "attackspeed": 0.644
            }
        },
        {
            "version": "13.21.1",
            "id": "Viego",
            "key": "234",
            "name": "Viego",
            "title": "O REI DESTRUÍDO",
            "blurb": "Outrora regente de um reino perdido, Viego morreu há mais de um milênio, quando uma tentativa de trazer sua esposa de volta à vida culminou em uma catástrofe mágica conhecida como a Ruína. Transformado em um poderoso espectro morto-vivo, e sempre sendo torturado pela paixão obsessiva que sente por sua rainha morta há séculos, Viego agora é conhecido como o Rei Destruído. Hoje, ele controla os Tormentos enquanto assola Runeterra em busca de qualquer coisa que possa trazê-la de volta, destruindo tudo que estiver em seu caminho conforme a Névoa Negra emana de seu cruel coração partido.",
            "info": {
                "attack": 6,
                "defense": 4,
                "magic": 2,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 288,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino, ",
                " Lutador"
            ],
            "partype": "None",
            "stats": {
                "hp": 630,
                "hpperlevel": 109,
                "mp": 10000,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 34,
                "armorperlevel": 5.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 200,
                "hpregen": 7,
                "hpregenperlevel": 0.7,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 57,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 2.5,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Viktor",
            "key": "112",
            "name": "Viktor",
            "title": "O ARAUTO DAS MÁQUINAS",
            "blurb": "Viktor, o arauto de uma nova era de tecnologia, devotou sua vida ao avanço da humanidade. Um idealista que busca elevar o povo de Zaun a um novo nível de compreensão, ele acredita que somente ao aceitar a evolução gloriosa da tecnologia será possível que a humanidade alcance seu verdadeiro potencial. Com um corpo melhorado por aço e ciência, Viktor é zeloso na sua busca por este brilhante futuro.",
            "info": {
                "attack": 2,
                "defense": 4,
                "magic": 10,
                "difficulty": 9
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 336,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 600,
                "hpperlevel": 104,
                "mp": 405,
                "mpperlevel": 45,
                "movespeed": 335,
                "armor": 23,
                "armorperlevel": 5.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 8,
                "hpregenperlevel": 0.65,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 53,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.11,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Vladimir",
            "key": "8",
            "name": "Vladimir",
            "title": "O SANGUINÁRIO ESCARLATE",
            "blurb": "Um demônio sedento pelo sangue dos mortais, Vladimir tem influenciado os acontecimentos de Noxus desde os primórdios do império. Além de ter estendido sua vida por meios não naturais, sua maestria em hemomancia o permite controlar as mentes e corpos de outros como se fossem os seus. Nos exuberantes salões da aristocracia noxiana, isso possibilitou que construísse um culto fanático de personalidades ao seu redor, tudo isso para que ele possa sangrar seus inimigos nos becos escuros.",
            "info": {
                "attack": 2,
                "defense": 6,
                "magic": 8,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 384,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Crimson Rush",
            "stats": {
                "hp": 607,
                "hpperlevel": 110,
                "mp": 2,
                "mpperlevel": 0,
                "movespeed": 330,
                "armor": 27,
                "armorperlevel": 4.5,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 450,
                "hpregen": 7,
                "hpregenperlevel": 0.6,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Volibear",
            "key": "106",
            "name": "Volibear",
            "title": "A TEMPESTADE IMPLACÁVEL",
            "blurb": "Para aqueles que ainda o veneram, Volibear é a forma manifestada da tempestade. Destrutivo, selvagem e implacavelmente obstinado, ele já existia antes mesmo que os mortais andassem sobre a tundra de Freljord, protegendo as terras que ele e seus irmãos semideuses criaram. Com um ódio profundo pela civilização e pela fraqueza inerente a ela, Volibear luta para recuperar os velhos costumes de quando a terra era selvagem e o sangue jorrava livremente. Ele enfrenta todos aqueles que ousam entrar em seu caminho com dentes, garras e dominação estrondosa.",
            "info": {
                "attack": 7,
                "defense": 7,
                "magic": 4,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 432,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 650,
                "hpperlevel": 104,
                "mp": 350,
                "mpperlevel": 70,
                "movespeed": 340,
                "armor": 31,
                "armorperlevel": 5.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 150,
                "hpregen": 9,
                "hpregenperlevel": 0.75,
                "mpregen": 6.25,
                "mpregenperlevel": 0.5,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 2,
                "attackspeed": 0.625
            }
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "Warwick",
            "key": "19",
            "name": "Warwick",
            "title": "A IRA DESIMPEDIDA DE ZAUN",
            "blurb": "Warwick é um monstro que caça pelas ruas cinzentas de Zaun. Transformado a partir de experimentos agonizantes, seu corpo agora é fundido a um sistema complexo de câmaras e bombas, um maquinário que enche suas veias com fúria química. Ele persegue os criminosos que aterrorizam as profundezas da cidade, movimentando-se pelas sombras. Warwick é atraído por sangue; para ele, esse aroma é enlouquecedor. Ninguém que derrama sangue é capaz de fugir dele.",
            "info": {
                "attack": 9,
                "defense": 5,
                "magic": 3,
                "difficulty": 3
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 620,
                "hpperlevel": 99,
                "mp": 280,
                "mpperlevel": 35,
                "movespeed": 335,
                "armor": 33,
                "armorperlevel": 4.4,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 4,
                "hpregenperlevel": 0.75,
                "mpregen": 7.45,
                "mpregenperlevel": 0.6,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 65,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.3,
                "attackspeed": 0.638
            }
        },
        {
            "version": "13.21.1",
            "id": "Xayah",
            "key": "498",
            "name": "Xayah",
            "title": "A REBELDE",
            "blurb": "Mortal e precisa, Xayah é uma vastaya revolucionária que trava sua própria batalha para salvar seu povo. Ela usa sua agilidade, malícia e plumas afiadas para retalhar qualquer um que atrapalhe seu caminho. Xayah luta ao lado de seu parceiro e amante, Rakan, para proteger sua tribo em extinção e restaurar a antiga glória de sua raça.",
            "info": {
                "attack": 10,
                "defense": 6,
                "magic": 1,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 630,
                "hpperlevel": 107,
                "mp": 340,
                "mpperlevel": 40,
                "movespeed": 330,
                "armor": 25,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 3.25,
                "hpregenperlevel": 0.75,
                "mpregen": 8.25,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 3.5,
                "attackspeedperlevel": 3.9,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Xerath",
            "key": "101",
            "name": "Xerath",
            "title": "O MAGO ASCENDENTE",
            "blurb": "Xerath é um mago Ascendente da antiga Shurima, um ser de energia arcana que existe em meio a estilhaços de um sarcófago mágico. Por milênios, ele ficou enclausurado debaixo das areias do deserto, mas o ressurgimento de Shurima o libertou de sua antiga prisão. Enlouquecido pelo próprio poder, ele agora busca tomar o que crê ser seu por direito e substituir as civilizações existentes do mundo com uma criada em sua própria imagem.",
            "info": {
                "attack": 1,
                "defense": 3,
                "magic": 10,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 596,
                "hpperlevel": 106,
                "mp": 400,
                "mpperlevel": 22,
                "movespeed": 340,
                "armor": 22,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 525,
                "hpregen": 5.5,
                "hpregenperlevel": 0.55,
                "mpregen": 6.85,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 55,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 1.36,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "XinZhao",
            "key": "5",
            "name": "Xin Zhao",
            "title": "O SENESCAL DE DEMACIA",
            "blurb": "Xin Zhao é um guerreiro determinado, leal à dinastia Lumescudo. No passado, ele foi condenado a lutar como gladiador em Noxus, e sobreviveu à incontáveis lutas, mas depois de ser libertado por forças demacianas, ele prometeu sua vida e lealdade aos seus corajosos salvadores. Armado com sua lança de três pontas favorita, Xin Zhao agora luta pelo reino que adotou, desafiando com audácia qualquer inimigo, não importando as chances de vitória.",
            "info": {
                "attack": 8,
                "defense": 6,
                "magic": 3,
                "difficulty": 2
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Assassino"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 640,
                "hpperlevel": 106,
                "mp": 274,
                "mpperlevel": 55,
                "movespeed": 345,
                "armor": 35,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 8,
                "hpregenperlevel": 0.7,
                "mpregen": 7.25,
                "mpregenperlevel": 0.45,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 63,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.645
            }
        },
        {
            "version": "13.21.1",
            "id": "Yasuo",
            "key": "157",
            "name": "Yasuo",
            "title": "O IMPERDOÁVEL",
            "blurb": "Yasuo, um ioniano extremamente determinado, é também um ágil espadachim que usa o próprio ar como arma para enfrentar seus inimigos. Quando jovem, ele teve seu orgulho ferido ao ser acusado injustamente do assassinato de seu mestre — sem conseguir provar sua inocência, ele foi forçado a matar o próprio irmão para se defender. Até hoje, mesmo depois do verdadeiro assassino do seu mestre ter sido revelado, Yasuo ainda não consegue se perdoar e vaga por sua terra natal com apenas o vento para guiar sua espada.",
            "info": {
                "attack": 8,
                "defense": 4,
                "magic": 4,
                "difficulty": 10
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Assassino"
            ],
            "partype": "Flow",
            "stats": {
                "hp": 590,
                "hpperlevel": 110,
                "mp": 100,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 30,
                "armorperlevel": 4.6,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 6.5,
                "hpregenperlevel": 0.9,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.697
            }
        },
        {
            "version": "13.21.1",
            "id": "Yone",
            "key": "777",
            "name": "Yone",
            "title": "O INESQUECIDO",
            "blurb": "Em vida, ele foi Yone; meio-irmão de Yasuo e um respeitado aluno da escola de espadachins de seu vilarejo. Mas, ao morrer pelas mãos do irmão, ele se viu perseguido por uma entidade maligna do reino espiritual e foi forçado a exterminá-la com sua própria espada. Agora, condenado a usar uma máscara demoníaca com o rosto da entidade, Yone busca incansavelmente essas criaturas para tentar entender o que ele mesmo se tornou.",
            "info": {
                "attack": 8,
                "defense": 4,
                "magic": 4,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino, ",
                " Lutador"
            ],
            "partype": "Flow",
            "stats": {
                "hp": 620,
                "hpperlevel": 105,
                "mp": 500,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 30,
                "armorperlevel": 4.6,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 7.5,
                "hpregenperlevel": 0.75,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 2,
                "attackspeedperlevel": 3.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Yorick",
            "key": "83",
            "name": "Yorick",
            "title": "O PASTOR DE ALMAS",
            "blurb": "Último sobrevivente de uma ordem religiosa há muito esquecida, Yorick é ao mesmo tempo abençoado e amaldiçoado pelo poder que exerce sobre os mortos. Preso nas Ilhas das Sombras, suas únicas companhias são os defuntos e espíritos atormentados que ele atrai para si. As ações monstruosas de Yorick mascaram seu nobre propósito: libertar sua terra da maldição da Ruína.",
            "info": {
                "attack": 6,
                "defense": 6,
                "magic": 4,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-top.png",
                "group": "champion",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Lutador, ",
                " Tanque"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 650,
                "hpperlevel": 114,
                "mp": 300,
                "mpperlevel": 60,
                "movespeed": 340,
                "armor": 39,
                "armorperlevel": 5.2,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 8,
                "hpregenperlevel": 0.8,
                "mpregen": 7.5,
                "mpregenperlevel": 0.75,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 62,
                "attackdamageperlevel": 5,
                "attackspeedperlevel": 2,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Yuumi",
            "key": "350",
            "name": "Yuumi",
            "title": "A GATA MÁGICA",
            "blurb": "Uma gata mágica de Bandópolis, Yuumi já foi a mascote de uma feiticeira yordle chamada Norra. Mas quando sua mestra desapareceu misteriosamente, Yuumi se tornou a Guardiã do Livro dos Portais de Norra, viajando à procura dela através dos portais nas páginas. Sentindo falta do carinho de sua mestra, Yuumi busca diversas companhias em sua jornada, protegendo a todos com escudos luminosos e determinação ferrenha. Enquanto Livro se esforça para mantê-la focada na tarefa, Yuumi costuma se distrair com regalias mundanas, como cochilos e peixe para o jantar. Porém, no fim das contas, ela sempre retoma a missão: encontrar sua querida amiga.",
            "info": {
                "attack": 5,
                "defense": 1,
                "magic": 8,
                "difficulty": 2
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 500,
                "hpperlevel": 69,
                "mp": 440,
                "mpperlevel": 45,
                "movespeed": 330,
                "armor": 25,
                "armorperlevel": 4.2,
                "spellblock": 25,
                "spellblockperlevel": 1.1,
                "attackrange": 425,
                "hpregen": 5,
                "hpregenperlevel": 0.55,
                "mpregen": 10,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 49,
                "attackdamageperlevel": 3.1,
                "attackspeedperlevel": 1,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Zac",
            "key": "154",
            "name": "Zac",
            "title": "A ARMA SECRETA",
            "blurb": "Zac é produto de um derramamento tóxico que percorreu um tubo quimtec e se armazenou em uma caverna isolada no Sumidouro de Zaun. Apesar de suas origens humildes, Zac deixou de ser uma lama qualquer e se tornou um ser pensante que mora nos encanamentos da cidade e emerge ocasionalmente para ajudar aqueles que não podem se ajudar ou para reconstruir a infraestrutura danificada de Zaun.",
            "info": {
                "attack": 3,
                "defense": 7,
                "magic": 7,
                "difficulty": 8
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/1152-lol-role-jungle.png",
                "group": "champion",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Tanque, ",
                " Lutador"
            ],
            "partype": "None",
            "stats": {
                "hp": 685,
                "hpperlevel": 109,
                "mp": 0,
                "mpperlevel": 0,
                "movespeed": 340,
                "armor": 33,
                "armorperlevel": 4.7,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 8,
                "hpregenperlevel": 0.5,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 3.4,
                "attackspeedperlevel": 1.6,
                "attackspeed": 0.736
            }
        },
        {
            "version": "13.21.1",
            "id": "Zed",
            "key": "238",
            "name": "Zed",
            "title": "O MESTRE DAS SOMBRAS",
            "blurb": "Absolutamente impiedoso e implacável, Zed é o líder da Ordem das Sombras; uma organização criada com a intenção de militarizar as tradições marciais e mágicas de Ionia para expulsar os invasores noxianos. Durante a guerra, o desespero o levou a libertar a forma secreta das sombras, uma magia espiritual malévola tão perigosa e manipuladora quanto poderosa. Zed dominou todas essas técnicas proibidas para destruir qualquer coisa que considerasse uma ameaça a sua nação, ou a sua nova ordem.",
            "info": {
                "attack": 9,
                "defense": 2,
                "magic": 1,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Assassino"
            ],
            "partype": "Energy",
            "stats": {
                "hp": 654,
                "hpperlevel": 99,
                "mp": 200,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 32,
                "armorperlevel": 4.7,
                "spellblock": 29,
                "spellblockperlevel": 2.05,
                "attackrange": 125,
                "hpregen": 7,
                "hpregenperlevel": 0.65,
                "mpregen": 50,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 63,
                "attackdamageperlevel": 3.4,
                "attackspeedperlevel": 3.3,
                "attackspeed": 0.651
            }
        }
    ],
    [
        {
            "version": "13.21.1",
            "id": "Zeri",
            "key": "221",
            "name": "Zeri",
            "title": "A FAÍSCA DE ZAUN",
            "blurb": "Uma jovem obstinada e vivaz da classe operária de Zaun, Zeri canaliza magia elétrica para carregar a si mesma e a uma arma personalizada. O poder volátil espelha o que ela sente, as centelhas refletindo o estilo de vida ultrarrápido dela. Profundamente compassiva para com os outros, Zeri leva o amor da família e do lar dela consigo a todas as lutas. Embora as tentativas de ajudar saiam pela culatra às vezes, Zeri acredita piamente em uma verdade: lute pela sua comunidade, e ela lutará com você.",
            "info": {
                "attack": 8,
                "defense": 5,
                "magic": 3,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/9366-lol-role-bot.png",
                "group": "champion",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Atirador"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 630,
                "hpperlevel": 110,
                "mp": 250,
                "mpperlevel": 45,
                "movespeed": 330,
                "armor": 24,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 500,
                "hpregen": 3.25,
                "hpregenperlevel": 0.7,
                "mpregen": 6,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 53,
                "attackdamageperlevel": 1.3,
                "attackspeedperlevel": 2,
                "attackspeed": 0.658
            }
        },
        {
            "version": "13.21.1",
            "id": "Ziggs",
            "key": "115",
            "name": "Ziggs",
            "title": "O ESPECIALISTA EM HEXPLOSIVOS",
            "blurb": "O yordle Ziggs, amante de grandes bombas e pavios curtos, é uma força explosiva da natureza. Já entediado com sua vida previsível como assistente de um inventor de Piltover, ele fez amizade com uma bombardeira louca de cabelo azul chamada Jinx. Depois de uma noite louca na cidade com sua nova amiga, Ziggs aceitou seu conselho e se mudou para Zaun, onde ele agora explora suas fascinações com mais liberdade, aterrorizando tanto os barões químicos quanto os cidadãos comuns na sua aventura sem fim por explodir coisas.",
            "info": {
                "attack": 2,
                "defense": 4,
                "magic": 9,
                "difficulty": 4
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 606,
                "hpperlevel": 106,
                "mp": 480,
                "mpperlevel": 23.5,
                "movespeed": 325,
                "armor": 22,
                "armorperlevel": 4.5,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 6.5,
                "hpregenperlevel": 0.6,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 54,
                "attackdamageperlevel": 3.1,
                "attackspeedperlevel": 2,
                "attackspeed": 0.656
            }
        },
        {
            "version": "13.21.1",
            "id": "Zilean",
            "key": "26",
            "name": "Zilean",
            "title": "O GUARDIÃO DO TEMPO",
            "blurb": "Outrora um poderoso mago icathiano, Zilean se obcecou com a passagem do tempo depois de testemunhar a destruição de sua terra natal pelo Vazio. Sem conseguir gastar um minuto que fosse para lamentar a perda catastrófica, ele invocou uma antiga magia temporal para adivinhar todos os finais possíveis. Tendo se tornado essencialmente imortal com isso, Zilean agora caminha entre passado, presente e futuro, curvando e distorcendo o fluxo do tempo a sua volta, sempre procurando por aquele momento fugaz que vai fazer o relógio voltar e desfazer a destruição de Icathia.",
            "info": {
                "attack": 2,
                "defense": 5,
                "magic": 8,
                "difficulty": 6
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Suporte, ",
                " Mago"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 574,
                "hpperlevel": 96,
                "mp": 452,
                "mpperlevel": 50,
                "movespeed": 335,
                "armor": 24,
                "armorperlevel": 5,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 5.5,
                "hpregenperlevel": 0.5,
                "mpregen": 11.35,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 52,
                "attackdamageperlevel": 3,
                "attackspeedperlevel": 2.13,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Zoe",
            "key": "142",
            "name": "Zoe",
            "title": "O ASPECTO DO CREPÚSCULO",
            "blurb": "Como a personificação da travessura, imaginação e mudança, Zoe atua como a mensageira cósmica de Targon, anunciando a chegada de grandes eventos que redefinem mundos. Sua mera presença altera a matemática arcana que governa as realidades, às vezes causando cataclismas não intencionais. Talvez isso explique a forma despretensiosa e jovial com a qual Zoe encara seu dever e que permite que ela tenha tempo de sobra para pregar peças nos mortais, fazer brincadeirinhas ou dar um jeitinho de se divertir de alguma forma. Um encontro com Zoe pode ser agradável e revigorante, mas é sempre mais do que parece e geralmente extremamente perigoso.",
            "info": {
                "attack": 1,
                "defense": 7,
                "magic": 8,
                "difficulty": 5
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/6934-lol-role-mid.png",
                "group": "champion",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 630,
                "hpperlevel": 106,
                "mp": 425,
                "mpperlevel": 25,
                "movespeed": 340,
                "armor": 21,
                "armorperlevel": 4.7,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 550,
                "hpregen": 7.5,
                "hpregenperlevel": 0.6,
                "mpregen": 8,
                "mpregenperlevel": 0.65,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 58,
                "attackdamageperlevel": 3.3,
                "attackspeedperlevel": 2.5,
                "attackspeed": 0.625
            }
        },
        {
            "version": "13.21.1",
            "id": "Zyra",
            "key": "143",
            "name": "Zyra",
            "title": "A ASCENSÃO DOS ESPINHOS",
            "blurb": "Nascida em uma antiga catástrofe mágica, Zyra é a fúria da natureza em forma física e uma sedutora criatura híbrida entre planta e humana, que faz surgir a vida a cada passo que dá. Ela vê os muitos mortais de Valoran como nada além de presas para suas crias semeadas e não sente nada ao destroçá-los em um turbilhão de farpas mortais. Apesar de seu real propósito ainda não ter sido descoberto, Zyra vaga pelo mundo, satisfazendo seus desejos primais de colonizar e estrangular toda e qualquer outra vida estranha que encontra.",
            "info": {
                "attack": 4,
                "defense": 3,
                "magic": 8,
                "difficulty": 7
            },
            "image": {
                "full": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg",
                "lane": "https://cdn3.emoji.gg/emojis/7990-lol-role-support.png",
                "group": "champion",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Mago, ",
                " Suporte"
            ],
            "partype": "Mana",
            "stats": {
                "hp": 574,
                "hpperlevel": 93,
                "mp": 418,
                "mpperlevel": 25,
                "movespeed": 340,
                "armor": 29,
                "armorperlevel": 4.2,
                "spellblock": 30,
                "spellblockperlevel": 1.3,
                "attackrange": 575,
                "hpregen": 5.5,
                "hpregenperlevel": 0.5,
                "mpregen": 13,
                "mpregenperlevel": 0.4,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 53,
                "attackdamageperlevel": 3.2,
                "attackspeedperlevel": 2.11,
                "attackspeed": 0.681
            }
        }
    ]
]

export default champions