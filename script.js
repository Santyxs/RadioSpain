document.addEventListener('DOMContentLoaded', () => {
    const stations = [
        {
            name: 'Los 40 Principales',
            url: 'https://25453.live.streamtheworld.com/LOS40.mp3',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/3jk5k9pcxrp9.jpg',
            id: 'los40'
        },
        {
            name: 'Cadena 100',
            url: 'https://server9.emitironline.com:9373/radio',
            cover: 'https://cdn.instant.audio/images/logos/emisora-org-es/cadena-cien.png',
            id: 'cadena100'
        },
        {
            name: 'Cadena SER',
            url: 'https://28943.live.streamtheworld.com/CADENASER.mp3',
            cover: 'https://cadenaser.com/estaticos/recursosgraficos/podcast/podcast-son-caratula.png',
            id: 'cadenaSER'
        },
        {
            name: 'Cadena DIAL',
            url: 'https://22543.live.streamtheworld.com/CADENADIAL.mp3',
            cover: 'https://www.cadenadial.com/wp-content/uploads/2019/02/logo-dial-1.jpg',
            id: 'cadenaDIAL'
        },
        {
            name: 'COPE',
            url: 'https://sonic.sistemahost.es/8236/stream',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/556/cadena-cope.fb1248fc.png',
            id: 'cope'
        },
        {
            name: 'Onda Cero',
            url: 'https://live.ondacero.es/ondacero/audio/master.m3u8',
            cover: 'https://lalistadelafm.com/wp-content/uploads/2023/09/Onda-Cero.jpg',
            id: 'ondaCero'
        },
        {
            name: 'Europa FM',
            url: 'https://streaming2.mediatelekom.net/europafm.mp3',
            cover: 'https://yt3.googleusercontent.com/ZQzcBtU39heTx5Kiw5PMHkNYnCztfWmPw1PJ_qTTbIqEfL5p8Hy_mQhasXkr6zPlbkSxhGVI',
            id: 'europaFM'
        },
        {
            name: 'ES Radio',
            url: 'https://streaming.esradio.fm/esradio.mp3',
            cover: 'https://static-2.ivoox.com/radios/5/7/2/2/9991600232275_XL.jpg',
            id: 'esRadio'
        },
        {
            name: 'Radio Olé',
            url: 'https://25253.live.streamtheworld.com/RADIOLE.mp3',
            cover: 'https://static.mytuner.mobi/media/tvos_radios/hp9JgkDT82.png',
            id: 'radioOle'
        },
        {
            name: 'KISS FM',
            url: 'https://kissfm.kissfmradio.cires21.com/kissfm.mp3',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/117/kiss-fm.51b9402b.jpg',
            id: 'kissFM'
        },
        {
            name: 'Radio María',
            url: 'http://dreamsiteradiocp.com:8060',
            cover: 'https://radiomariacanarias.es/wp-content/uploads/2018/04/radio-maria.jpg',
            id: 'radioMaria'
        },
        {
            name: 'Canal Sur Radio',
            url: 'https://rtva-live-radio.flumotion.com/rtva/csr.mp3',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKYV2WMvrk8hJzrjdih9QOjKePkEzbjNw6g&s',
            id: 'canalSur'
        },
        {
            name: 'Radio Clásica',
            url: 'http://str1.mediatelekom.net:8110/stream',
            cover: 'https://emisorasderadioonline.es/wp-content/uploads/2021/05/Radio-Cl%C3%A1sica.jpg',
            id: 'radioClasica'
        },
        {
            name: 'Radio Marca',
            url: 'https://directo.teleelx.es:8000/radio.mp3',
            cover: 'https://cdn.instant.audio/images/logos/emisora-org-es/marca.png',
            id: 'radioMarca'
        },
        {
            name: 'Radio Galega',
            url: 'https://27873.live.streamtheworld.com/SER_GALICIA.mp3',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/997/radio-galega.460f9154.png',
            id: 'radioGalega'
        },
        {
            name: 'Intereconomía',
            url: 'https://streaming.intereconomia.com/siliconorg',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/WAsBY8S326.jpg',
            id: 'intereconomia'
        },
        {
            name: 'Viva la Rumba',
            url: 'https://as100.globalhost1.com/8104/stream?n=b894f8bebb53a5bc67eb',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/555/viva-la-rumba.2c3a7fc4.jpg',
            id: 'vivalarumba'
        },
        {
            name: 'Si Radio',
            url: 'https://broadcast.radioponiente.org:8030/;stream.nsv',
            cover: 'https://cdn.instant.audio/images/logos/emisora-org-es/ourense-si.png',
            id: 'siradio'
        },
        {
            name: 'Ibiza Hits',
            url: 'https://streaming.broadcast.radio/ibiza-live-radio',
            cover: 'https://cdn.instant.audio/images/logos/emisora-org-es/ibiza-hits.png',
            id: 'ibizahits'
        },
        {
            name: 'M80 Radio',
            url: 'https://en-directo.frequence-radio.com/amp/redirect.php?radio=m80',
            cover: 'https://cdn.instant.audio/images/logos/emisora-org-es/m80-asturias.png',
            id: 'm80radio'
        },
        {
            name: 'CatRadio',
            url: 'https://en-directo.frequence-radio.com/amp/redirect.php?radio=catradio',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/876/catalunya-radio-directe.c8154d75.png',
            id: 'catradio'
        },
        {
            name: 'Canarias Radio',
            url: 'https://bbkissfmcanarias.kissfmradio.cires21.com/bbkissfmcanarias.mp3',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPdyK-iGZXnrh5EpLKjb3M3uHTLE3ysQ-ykJuJiIVbN91awT5RTUfQrLCHHUHYRo5-jU&usqp=CAU',
            id: 'canariasradio'
        },
        {
            name: 'Xtra FM',
            url: 'https://stream2.internetgirona.com:8000',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/375/xtra-fm-884.b06212b3.png',
            id: 'xtrafm'
        },
        {
            name: 'Radio Tropical',
            url: 'https://frontend.radiohdvivo.com/radiotropical/live',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5k7Ph6JY-2m91IZ7jLA8joMOdtBBK00aHcg&s',
            id: 'radiotropical'
        },
        {
            name: 'Gozadera FM',
            url: 'https://azura.abcorp.es/radio/8030/live',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/032/gozadera-fm.8ccaae79.png',
            id: 'gozaderafm'
        },
        {
            name: 'Tropicana',
            url: 'https://eu1.lhdserver.es:3139/stream',
            cover: 'https://static.wixstatic.com/media/fe43d3_c6608653a9c241cea0294b8bb4180525~mv2.png',
            id: 'tropicana'
        },
        {
            name: 'Hit FM',
            url: 'https://adhandler.kissfmradio.cires21.com/get_link?url=https://bbhitfm.kissfmradio.cires21.com/bbhitfm.mp3',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/640/hit-fm.477231d3.png',
            id: 'hitfm'
        },
        {
            name: 'La Flamenca FM',
            url: 'https://live.radioart.com/fFlamenco.mp3',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/46cgsq27ge3l.png',
            id: 'laflamenca'
        },
        {
            name: 'Motiva FM',
            url: 'https://stream.mediasector.es/radio/8120/motiva.mp3',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/5zamcfkpg2ah.png',
            id: 'motivafm'
        },
        {
            name: 'Melodía FM',
            url: 'https://stream.radiomelodia.com.pe:8000/radio.mp3',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/749/melodia-fm-spain.fc1b90ac.jpg',
            id: 'melodiafm'
        },
        {
            name: 'Loca FM',
            url: 'https://s3.we4stream.com:2020/stream/locafm',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/qBQVRR4HES.jpg',
            id: 'locafm'
        },
        {
            name: 'Radio Voz',
            url: 'https://live.radiovoz.es/mp3/stream_lugo.mp3',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/8nmaw7qdh2f7.jpg',
            id: 'radioVoz'
        },
        {
            name: 'Rumberos FM',
            url: 'https://str1.mediatelekom.net:9952/live',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/wvyf5ug4zutd.png',
            id: 'rumberosfm'
        },
        {
            name: 'Radio Cumbia',
            url: 'https://securestream.radioshd.info:7004',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/r63hmYYGW9.png',
            id: 'radiocumbia'
        },
        {
            name: 'Canal Fiesta Radio',
            url: 'https://rtva-live-radio.flumotion.com/rtva/cfr.mp3',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/065/canal-fiesta-radio.b7f1aeff.png',
            id: 'canalfiesta'
        },
        {
            name: 'Radio Mediterráneo',
            url: 'https://radiomediterraneo.stream.laut.fm/radiomediterraneo',
            cover: 'https://www.radio.es/300/lautfm-radiomediterraneo.png?version=616cebb88d07a2353960d186e5e23809',
            id: 'radiomediterraneo'
        },
        {
            name: 'Radio Zumbala',
            url: 'https://eu1.lhdserver.es:3069/stream',
            cover: 'https://cdn.onlineradiobox.com/img/l/4/116584.v5.png',
            id: 'zumbalafm'
        },
        {
            name: 'Radio Popular',
            url: 'https://stream.mediasector.es/listen/radio_popular/radiopopular.mp3',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1llBiO57TJn_e9kXu9gy-cVeZkjdooJGY7Q&s',
            id: 'radiopopular'
        },
        {
            name: 'Radio Rebelde',
            url: 'http://stream.radiojar.com/qkxht62hy8hvv',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/598/radio-rebelde-1041.c8b23fea.png',
            id: 'radiorebelde'
        },
        {
            name: 'Radio Verbena',
            url: 'https://streaming12.elitecomunicacion.es:8222/stream',
            cover: 'https://static2.mytuner.mobi/media/tvos_radios/2xk6jbk8esks.jpg',
            id: 'radioverbena'
        }
    ];

    const player = new APlayer({
        container: document.getElementById('aplayer'),
        theme: '#b7daff',
        audio: stations.map(({ name, url, cover }) => ({ name, url, cover })),
        loop: false,
        lrcType: 0,
        preload: 'none'
    });

    player.on('loadeddata', () => {
        console.log('🎵 APlayer listo');
    });

    const switchStation = (index) => {
        player.list.switch(index);
        player.play();

        document.querySelectorAll('.station').forEach(el => el.classList.remove('activa'));
        document.querySelectorAll('.station')[index]?.classList.add('activa');
    };

    stations.forEach((station, index) => {
        const card = document.getElementById(station.id);
        if (card) {
            card.addEventListener('click', () => {
                console.log(`▶️ Reproduciendo: ${station.name}`);
                switchStation(index);
            });
        }
    });
});
