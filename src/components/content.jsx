import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const ContentIjen = (props) => {
    const [fullText, setFullText] = useState(false)

    function onChangeFull() {
        setFullText(!fullText)
        props.onChangeAutoplay(fullText)
        const textElement = document.getElementById('content-text')
        
        textElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
    return (
        <>
        <div className='w-full h-full flex flex-col mb-10 justify-end items-start gap-y-1 overflow-auto'>
            <div className='w-full flex text-lg justify-start items-center gap-x-2'>
                <FontAwesomeIcon icon={faLocationDot} className='text-red-500' />
                <a href='https://goo.gl/maps/N6FanA8Q9GSpXida6' target='_blank'>
                    <span className='text-xs text-white'>Gunung Ijen, Banyuwangi</span>
                </a>
            </div>
            <span className='text-4xl text-white font-bold'>KAWAH IJEN</span>
            <div className={`text-xs text-white w-2/3 pr-4 ${fullText? 'h-full overflow-y-auto':'h-16 overflow-hidden'}`}>
                <span id='content-text'>
                Kawah Ijen adalah sebuah danau kawah yang bersifat asam yang berada di puncak Gunung Ijen dengan kedalaman danau 200 
                meter dan luas kawah mencapai 5.466 Hektar. Danau kawah Ijen dikenal merupakan danau air asam kuat terbesar di dunia. 
                Kawah Ijen berada dalam wilayah Cagar Alam Taman Wisata Ijen Kabupaten Bondowoso dan Kabupaten Banyuwangi, Jawa Timur. 
                Fenomena eternal blue fire atau api biru abadi berada di dalam kawah Ijen, dan pemandangan alami ini hanya terjadi di 
                dua tempat di dunia yaitu Etiopia (gunung Dallol) dan Ijen.[butuh rujukan] Blue fire hanya dapat dilihat oleh mata 
                manusia saat tidak ada cahaya, karenanya waktu ideal untuk melihatnya adalah jam 2 hingga jam 4 dini hari, karena 
                pendakian Gunung Ijen baru mulai dibuka jam 2 dini hari. Dari Kawah Ijen, kita dapat melihat pemandangan gunung lain 
                yang ada di kompleks Pegunungan Ijen, di antaranya adalah puncak Gunung Marapi yang berada di timur Kawah Ijen, Gunung 
                Raung, Gunung Suket, dan Gunung Rante.
                <p/>
                <br/>
                Kawah Ijen menunjukkan jenis fitur vulkanik khusus yang umum di Indonesia, dengan diameter sekitar 1 kilometer 
                dan kedalaman 175 meter. Lantainya ditutupi sepenuhnya oleh danau yang hangat, berwarna hijau biru susu yang 
                ditahan oleh bendungan yang dibangun bertahun-tahun yang lalu oleh Belanda, untuk menjaga air panas yang sarat 
                mineral dari hujan tanah tanaman di bawahnya. Suhu turun pada malam hari, di dekat bibir kawah bisa turun menjadi 
                sekitar 5 ° Celcius. Jalan tersebut berakhir di Jampit, di mana tersedia tempat berlindung yang sangat mendasar. 
                Dimungkinkan juga untuk tidur di stasiun vulkanologi tua di atas bukit, sekarang digunakan oleh pengumpul belerang, 
                tetapi izin harus diperoleh sebelumnya
                <p/>
                <br/>
                Untuk mencapai kawah Gunung Ijen di Banyuwangi, pengunjung dapat menggunakan kereta api ekonomi dengan tujuan 
                Banyuwangi dan turun di Stasiun Banyuwangi Kota kemudian naik ojek dengan tujuan Kecamatan Licin dan Desa Tamansari. 
                Dari Tamansari, perjalanan dilanjutkan menuju Paltuding dengan menumpang truk pengangkut belerang atau menggunakan 
                bus dan turun di Banyuwangi kota kemudian naik ojek bisa langsung ke Paltuding atau ke Desa Tamansari juga bisa 
                namun dengan menggunakan bus tarif yang dikeluarkan akan lebih mahal. Pintu gerbang utama ke Cagar Alam Taman Wisata 
                Kawah Ijen terletak di Paltuding, yang juga merupakan Pos PHPA (Perlindungan Hutan dan Pelestarian Alam). 
                Alternatif rute adalah Bondowoso - Wonosari - Tapen - Sempol - Paltuding. Fasilitas lain yang dapat dinikmati 
                oleh pengunjung antara lain pondok wisata dan warung yang menjual keperluan pendakian untuk menyaksikan keindahan 
                kawah Ijen. Dari Paltuding berjalan kaki dengan jarak sekitar 3 km. Lintasan awal sejauh 2 KM cukup berat karena 
                menanjak. Sebagian besar jalur adalah dengan kemiringan 25-35 derajat. Selain menanjak, struktur tanahnya juga 
                berpasir sehingga menambah semakin berat langkah kaki karena harus menahan berat badan agar tidak merosot ke belakang. 
                Setelah beristirahat di Warung Pos Bundar (pos yang unik karena memiliki bentuk lingkaran), jalur selanjutnya naik agak 
                curam dan licin, dilanjutkan 1 KM terakhir relatif landai, tetapi wisatawan / pendaki disuguhi pemandangan deretan 
                pegunungan yang sangat indah. Untuk turun menuju ke kawah harus melintasi medan berbatu-batu sejauh 800 meter dengan 
                kondisi yang terjal hingga kemiringan 45 derajat.
                </span>
            </div>
            <button className='text-underline text-xs text-blue-500 h-fit hover:font-bold transition-all ease-in-out duration-300' onClick={onChangeFull}>
                {!fullText?'Baca Selengkapnya...':'Baca Pendek...'}
            </button>
        </div>
        </>
    )
}

export const ContentDjawatan = (props) => {
    const [fullText, setFullText] = useState(false)

    function onChangeFull() {
        setFullText(!fullText)
        props.onChangeAutoplay(fullText)
        const textElement = document.getElementById('content-text')
        
        textElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    return (
        <>
        <div className='w-full h-full flex flex-col mb-10 justify-end items-start gap-y-1 overflow-auto'>
            <div className='w-full flex text-lg justify-start items-center gap-x-2'>
                <FontAwesomeIcon icon={faLocationDot} className='text-red-500' />
                <a href='https://goo.gl/maps/YHU7AZJaqZxXD1sy6' target='_blank'>
                    <span className='text-xs text-white'>Benculuk, Banyuwangi</span>
                </a>
            </div>
            <span className='text-4xl text-white font-bold'>DJAWATAN</span>
            <div className={`text-xs text-white w-2/3 pr-4 ${fullText? 'h-full overflow-y-auto':'h-16 overflow-hidden'}`}>
                <span id='content-text'>
                De Djawatan adalah hutan wisata yang berlokasi di Benculuk, Cluring, Kabupaten Banyuwangi. 
                Pepohonan di De Djawatan adalah trembesi yang dipenuhi dengan tumbuhan epifit. 
                Pengunjung sering kali berfoto dengan latar pemandangan pepohonan ini.
                <p/>
                <br/>
                Pada 2017, tempat ini sempat viral di media sosial dan dikunjungi oleh banyak orang, 
                tetapi saat itu tempat ini masihlah tempat penimbunan kayu Perhutani. 
                Setelah menimbang potensi wisata dari tempat tersebut, Dinas Pariwisata Kabupaten Banyuwangi 
                bersama Perhutani Kesatuan Pemangkuan Hutan (KPH) Banyuwangi selaku pemilik lahan resmi membuka 
                De Djawatan sebagai tempat wisata pada Juni 2018.
                <p/>
                <br/>
                Pohon trembesi merupakan tumbuhan mayoritas di De Djawatan sekaligus menjadi daya tarik utama. 
                Ini adalah alasan terbesar pengunjung untuk datang berwisata ke kawasan sejuk yang resmi masuk 
                dalam daftar obyek wisata Dinas Pariwisata Kabupaten Banyuwangi sejak Juni 2018. Tumbuhan bernama 
                ilmiah Samanea saman tersebut tumbuh subur di De Djawatan dengan ketinggian 25-30 meter dari permukaan tanah.
                Menurut Administratur Perhutani KPH Banyuwangi Selatan Panca Putra Sihite, pohon-pohon trembesi di De Djawatan 
                jumlahnya ratusan batang, sepertiganya berusia 100-200 tahun. Trembesi dikenal sebagai pohon hujan karena kemampuan 
                besarnya dalam menyerap air sehingga menyebabkan dahannya begitu lembab dan menjadi rumah paling nyaman bagi 
                tumbuhan epifit, seperti jenis paku-pakuan. Rumput-rumputan pun ikut tumbuh subur di sekitar trembesi.
                Pohon asli Amerika Selatan ini dapat cepat tumbuh membesar dengan karakteristik khas, yaitu belasan 
                dahan pohonnya meliuk-liuk melebar membentuk kanopi atau payung. Kesuburan tanah latosol berunsur hara 
                yang memadai di kawasan De Djawatan ikut berpengaruh terhadap pertumbuhan dan perkembangan pohon-pohon 
                trembesi hingga tinggi menjulang dan membuat kawasan sekitarnya menjadi teduh.
                </span>
            </div>
            <button className='text-underline text-xs text-blue-500 h-fit hover:font-bold transition-all ease-in-out duration-300' onClick={onChangeFull}>
                {!fullText?'Baca Selengkapnya...':'Baca Pendek...'}
            </button>
        </div>
        </>
    )
}

export const ContentRedisland = (props) => {
    const [fullText, setFullText] = useState(false)

    function onChangeFull() {
        setFullText(!fullText)
        props.onChangeAutoplay(fullText)
        const textElement = document.getElementById('content-text')
        
        textElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
    return (
        <>
        <div className='w-full h-full flex flex-col mb-10 justify-end items-start gap-y-1 overflow-auto'>
            <div className='w-full flex text-lg justify-start items-center gap-x-2'>
                <FontAwesomeIcon icon={faLocationDot} className='text-red-500' />
                <a href='https://goo.gl/maps/hQ9z7GWKjjps8Hx36' target='_blank'>
                    <span className='text-xs text-white'>Pesanggaran, Banyuwangi</span>
                </a>
            </div>
            <span className='text-4xl text-white font-bold'>PULAU MERAH</span>
            <div className={`text-xs text-white w-2/3 pr-4 ${fullText? 'h-full overflow-y-auto':'h-16 overflow-hidden'}`}>
                <span id='content-text'>
                Pulau Merah atau Pulo Merah ( Red Island dalam Bahasa Inggris) adalah objek wisata pantai yang terletak di Kecamatan Pesanggaran, Kabupaten Banyuwangi, 
                Provinsi Jawa Timur. Di pantai ini terdapat sebuah bukit hijau kecil dengan tanah berwarna merah yang terletak 
                di dekat bibir pantai. Bukit tersebut dapat dikunjungi dengan berjalan kaki saat air laut surut. 
                Di Pulau Merah terdapat Pura yang digunakan pemeluk agama Hindu melaksanakan ibadah ataupun upacara Mekiyis. 
                Kawasan wisata ini dikelola oleh Perum Perhutani Unit II Jawa Timur, KPH Banyuwangi Selatan.
                <p/>
                <br/>
                Sebelumnya, masyarakat lokal menyebut pantai ini sebagai Pantai Ringin Pintu. Namun, semakin banyak pengunjung yang 
                membuat nama pantai ini semakin dikenal. Sehingga, melihat potensi wisata tersebut, pemerintah daerah akhirnya mengelola 
                dan memberi nama baru pada pantai tersebut, sebagaimana nama yang dikenal saat ini.
                Tidak hanya itu, pemerintah juga berupaya meningkatkan potensi wisata di sekitar pantai tersebut dengan membangun 
                dan menambahkan sejumlah fasilitas pendukung. Salah satunya, adalah akses menuju ke Pantai Pulau Merah yang lebih 
                mudah saat ini. Kemudian, ada juga fasilitas lainnya yang membuat pengunjung semakin betah, seperti penginapan dan 
                juga toilet.Perkembangan pantai ini dimulai sejak tahun 2001, sehingga kini sudah berhasil dikenal sebagai salah 
                satu destinasi wisata skala internasional. Walaupun sempat porak poranda karena adanya tsunami tahun 1990-an, pantai 
                ini tetap menjadi salah satu destinasi wisata unggul di Banyuwangi, Jawa Timur.
                <p/>
                <br/>
                Pantai Pulau Merah bisa dibilang memiliki matahari terbenam atau sunset terbaik di Banyuwangi. 
                Matahari terbenam disini benar-benar terlihat cantik dan berwarna oranye kemerahan, dipadu dengan panorama 
                pantai yang indah. Umumnya, wisatawan mengincar waktu sore hari untuk berkunjung ke Pulau Merah sehingga bisa 
                menikmati matahari terbenamnya yang cantik sembari duduk santai di kursi pantai.
                </span>
            </div>
            <button className='text-underline text-xs text-blue-500 h-fit hover:font-bold transition-all ease-in-out duration-300' onClick={onChangeFull}>
                {!fullText?'Baca Selengkapnya...':'Baca Pendek...'}
            </button>
        </div>
        </>
    )
}