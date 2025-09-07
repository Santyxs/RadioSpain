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
            cover: 'https://musiteca.es/wp-content/uploads/2022/12/Cadena100.svg-copia.jpg',
            id: 'cadena100'
        },
        {
            name: 'Cadena SER',
            url: 'https://28943.live.streamtheworld.com/CADENASER.mp3',
            cover: 'https://cdn.instant.audio/images/logos/emisora-org-es/cadena-ser.png',
            id: 'cadenaSER'
        },
        {
            name: 'Cadena DIAL',
            url: 'https://22543.live.streamtheworld.com/CADENADIAL.mp3',
            cover: 'https://cdn.instant.audio/images/logos/emisora-org-es/cadena-dial.png',
            id: 'cadenaDIAL'
        },
        {
            name: 'COPE',
            url: 'https://sonic.sistemahost.es/8236/stream',
            cover: 'https://cdn.instant.audio/images/logos/emisora-org-es/cope.png',
            id: 'cope'
        },
        {
            name: 'Onda Cero',
            url: 'https://stream-154.zeno.fm/dzqaazsn3p8uv',
            cover: 'https://cdn.instant.audio/images/logos/emisora-org-es/onda-cero.png',
            id: 'ondaCero'
        },
        {
            name: 'Europa FM',
            url: 'https://str1.mediatelekom.net/proxy/europafm1/stream/',
            cover: 'https://yt3.googleusercontent.com/ZQzcBtU39heTx5Kiw5PMHkNYnCztfWmPw1PJ_qTTbIqEfL5p8Hy_mQhasXkr6zPlbkSxhGVI',
            id: 'europaFM'
        },
        {
            name: 'ES Radio',
            url: 'https://streaming.indalteco.net/proxy/esradioalmeria?mp=/stream',
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
            cover: 'https://cdn.instant.audio/images/logos/emisora-org-es/kiss-fm.png',
            id: 'kissFM'
        },
        {
            name: 'Radio María',
            url: 'https://streaming.radiomaria.es/radiomaria.mp3',
            cover: 'https://radiomariacanarias.es/wp-content/uploads/2018/04/radio-maria.jpg',
            id: 'radioMaria'
        }
    ];

    const player = new APlayer({
        container: document.getElementById('aplayer'),
        theme: '#b7daff',
        audio: stations.map(({ name, artist, url, cover }) => ({ name, artist, url, cover })),
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
