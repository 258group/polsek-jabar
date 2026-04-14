document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname === '/promotion') {
        const promoStyle = `
        <style>
            :root {
                --first-color: #000;
                --second-color: #fff;
                --third-color: #e4ff00;
                --fourth-color: #d2eb00;
            }
            .promo-container-main {
                width: 100%;
                max-width: 650px;
                background: var(--first-color);
                border: 2px solid #ffd800;
                display: block;
                margin: 20px auto;
                border-radius: 15px;
                overflow: hidden;
                font-family: 'Arial', sans-serif;
                color: var(--second-color);
                box-shadow: 0 0 20px rgb(255 247 0 / 30%);
            }

            .promo-text-header {
                text-align: center;
                padding: 15px 10px;
                font-weight: bold;
                font-size: 16px;
                color: #ffd800;
                background: #000;
                border-bottom: 1px solid #ffd800;
                letter-spacing: 1px;
            }

            .promo-header-img {
                width: 100%;
                display: block;
                margin: 0;
            }
            .teks-berjaalan {
                border-bottom: 1px solid #ffd800;
                border-top: 1px solid #ffd800;
                padding: 8px 0;
                background: #000;
            }
            .teks-berjaalan marquee {
                font-size: 14px;
                text-transform: uppercase;
                font-weight: bold;
                display: block;
                color: var(--second-color);
            }
            .menu-wrapper {
                background: var(--first-color);
                padding: 15px 10px;
                display: flex;
                justify-content: center;
                border-bottom: 1px solid #ffd800;
            }
            .menu-item {
                list-style-type: none;
                margin: 0;
                padding: 0;
                display: flex;
                gap: 10px;
                width: 100%;
                justify-content: center;
            }
            .menu-item li {
                flex: 1;
                max-width: 120px;
                background: #ffd800;
                color: #000000;
                border: 1px solid #ffd800;
                padding: 10px 5px;
                font-size: 12px;
                font-weight: 800;
                border-radius: 8px;
                cursor: pointer;
                text-transform: uppercase;
                text-align: center;
                transition: 0.3s;
            }
            .menu-item li:hover {
                background: var(--third-color);
                transform: translateY(-2px);
            }
            .promo-block {
                width: 100%;
                margin: 0 !important;
                padding: 0 !important;
                display: block;
                line-height: 0;
            }
            .collapsible {
                background: transparent;
                cursor: pointer;
                padding: 0;
                border: none;
                outline: none;
                width: 100%;
                display: block;
                line-height: 0;
            }
            .collapsible img {
                width: 100%;
                display: block;
                margin: 0;
                border: none;
                transition: filter 0.3s;
            }
            .collapsible:hover img {
                filter: brightness(1.2);
            }
            .promo-content {
                display: none;
                padding: 20px;
                background-color: #0a0a0a;
                border-bottom: 1px solid #ffd800;
                line-height: 1.6;
                font-size: 13px;
            }
            .promo-table {
                width: 100% !important;
                border-collapse: collapse;
                margin: 15px 0;
            }
            .promo-table td {
                border: 1px solid #ffd800;
                padding: 10px;
                text-align: center;
            }
            @media screen and (max-width: 480px) {
                .promo-container-main {
                    margin: 10px auto;
                    max-width: 96%;
                    border-radius: 10px;
                }
                .menu-item li {
                    font-size: 10px;
                    padding: 8px 2px;
                }
                .teks-berjaalan marquee {
                    font-size: 12px;
                }
            }
        </style>
        `;

        const promoHTML = `
        <div class="promo-container-main">
            <div class="promo-text-header">🔥 PROMO TERBARU MURAH898 🔥</div>

            <div class="teks-berjaalan">
                <marquee scrollamount="5">SELAMAT DATANG DI MURAH898 - SITUS TOGEL & SLOT ONLINE TERPERCAYA - DEPOSIT MINIMAL RP 10.000 - WITHDRAW MINIMAL RP 50.000 - SALAM JACKPOT!</marquee>
            </div>

            <div class="menu-wrapper">
                <ul class="menu-item">
                    <li onclick="window.open('/register')">DAFTAR</li>
                    <li onclick="window.open('/login')">LOGIN</li>
                    <li onclick="window.open('https://direct.lc.chat/19019745/')">LIVECHAT</li>
                </ul>
            </div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-1-column-1.jpg" alt="Bonus New Member 100%">
    </button>

<div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
    <div style="text-align:center; border-bottom: 2px double #ffd700; padding-bottom: 10px; margin-bottom: 20px;">
        <h2 style="color:#ffd700; font-weight:bold; font-size:20px; margin: 0; text-transform: uppercase;">
            SELAMAT DATANG DI MURAH898
        </h2>
    </div>

    <div style="background: linear-gradient(145deg, #222, #333); padding: 15px; border-radius: 10px; border: 1px solid #ffd700; margin-bottom: 20px;">
        <p style="color: #ffd700; font-weight: bold; margin-top: 0; text-align: center; text-decoration: underline;">
            INFORMASI HALAMAN BONUS MURAH898
        </p>
        <p style="color: #eee; font-size: 13px; text-align: center; margin: 0;">
            Halaman ini disediakan sebagai pusat informasi promo dan bonus menarik dari <b>MURAH898</b> yang berlaku untuk semua member, baik member baru maupun member lama.
        </p>
    </div>

    <div style="color:#eee; font-size:13px; margin-bottom: 15px;">
        Kami menyambut seluruh member dengan pengalaman bermain yang lebih nyaman dan menguntungkan di <b>MURAH898</b>. 
        Semua informasi promo akan ditampilkan secara transparan agar mudah dipahami oleh setiap pengguna.
    </div>

    <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 13px;">
        <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Berlaku untuk semua member <b>MURAH898</b>.</li>
        <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Minimal Deposit: <span style="color: #00ff00; font-weight: bold;">IDR 10.000</span></li>
        <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Minimal Withdraw: <span style="color: #00ff00; font-weight: bold;">IDR 50.000</span></li>
    </ul>

</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-2-column-1.jpg" alt="Garansi Kekalahan MURAH898">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                 GARANSI KEKALAHAN 100% 
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Main Tanpa Ragu di <span style="color:var(--third-color); font-weight:bold;">MURAH898</span> <br>
            </p>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 12px; border-radius: 8px; border: 1px solid var(--third-color); margin-bottom: 15px; text-align: center;">
            <p style="color: #fff; font-size: 13px; margin: 0;">Khusus Member Slot (Deposit Pertama)</p>
            <p style="color: var(--third-color); font-size: 15px; font-weight: bold; margin: 5px 0;">SALDO BALIK 100% JIKA KALAH!</p>
        </div>

        <p style="color: var(--third-color); font-weight: bold; margin-bottom: 8px; font-size: 14px; text-transform: uppercase;">Syarat & Ketentuan :</p>
        <ul style="list-style: none; padding-left: 0; color: #eee; font-size: 12px; margin-bottom: 15px;">

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Bonus Garansi Kekalahan 100% berlaku untuk seluruh member baru di <b>MURAH898</b>.</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Minimal deposit <b>IDR 50.000</b> untuk dapat klaim Garansi 100%.</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Maksimal bonus garansi 100% adalah <b>IDR 100.000</b>.</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Syarat withdraw setelah mencapai turnover (TO) x8 dari total deposit + bonus.</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Promo ini hanya berlaku untuk permainan <b>SLOT</b> (game lain tidak berlaku).</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Bonus wajib di claim sendiri pada saat pengisian formulir deposit.</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Minimal dan maksimal saldo yang dapat di withdraw adalah <b>IDR 800.000</b>.</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Untuk saldo masuk ke rekening hanya <b>IDR 400.000</b>, selebihnya akan hangus.</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Waktu yang diberikan hanya 1 hari, bila lewat maka saldo akan hangus.</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Promo tidak dapat digabungkan dengan promo atau event lain.</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 <b>MURAH898</b> berhak membatalkan bonus apabila ditemukan indikasi kecurangan atau penipuan.</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Tidak boleh ada kesamaan IP dengan player lain / penggunaan VPN.</li>

            <li style="padding: 5px 0; border-bottom: 1px solid #333;">💎 Apabila data tidak valid maka kemenangan & bonus tidak dapat di withdraw dan akan di hanguskan.</li>

            <li style="padding: 5px 0;">💎 Keputusan <b>MURAH898</b> adalah mutlak dan tidak dapat diganggu gugat.</li>

        </ul>

        <div style="text-align: center; margin-bottom: 15px;">
            <a href="https://direct.lc.chat/19644804/" style="background: var(--third-color); color: #000; padding: 10px 20px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block; text-transform: uppercase;">
                Klaim Garansi Sekarang 
            </a>
        </div>

    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-3-column-1.jpg" alt="Bonus New Member 30% MURAH898">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 10px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS NEW MEMBER 30% MURAH898
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Tambahan Saldo Khusus Member Baru
            </p>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">
            SYARAT & KETENTUAN :
        </p>
        
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Bonus hanya berlaku untuk member baru yang pertama kali deposit di <b>MURAH898</b>.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Minimal Deposit untuk mendapatkan bonus new member adalah <b>IDR 50.000</b>.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Promo WAJIB claim pada saat isi formulir deposit dan bisa claim manual menggunakan kode <b>"BONUSNEWMEMBER30%"</b> (Khusus Slot).
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Contoh perhitungan: Deposit 200.000 + 30% = 60.000 bonus, total saldo menjadi 260.000.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Maksimal bonus new member yang diberikan adalah <b>IDR 100.000</b> per claim.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Syarat withdraw adalah 8x turnover dari nilai deposit + bonus member baru.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Batas waktu claim promo ini hanya 1x24 jam dari deposit pertama.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Promo New Member tidak dapat digabungkan dengan bonus lainnya.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Jika ditemukan kecurangan seperti kesamaan data, IP, penipuan deposit, safety bet, atau investasi, maka <b>MURAH898</b> berhak membatalkan bonus tanpa dispensasi.
            </li>

            <li style="margin-bottom: 6px;">
                💎 Semua keputusan <b>MURAH898</b> bersifat mutlak dan tidak dapat diganggu gugat.
            </li>

        </ul>

    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-4-column-1.jpg" alt="Bonus Harian MURAH898">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 10px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS HARIAN 10%
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0; font-weight: bold;">
                <span style="color: #00ff00;">BEBAS KLAIM BERKALI-KALI SETIAP HARI!</span>
            </p>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">
            SYARAT & KETENTUAN :
        </p>
        
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Bonus deposit berlaku untuk SLOT GAME <b>MURAH898</b>.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Promo bonus deposit WAJIB claim saat isi formulir deposit atau dengan memasukkan kode <b>"BONUSDEPOSIT10%"</b>.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Minimal deposit untuk mendapatkan bonus ini adalah <b>IDR 50.000</b>.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Contoh perhitungan: Deposit 50.000 + 10% = 5.000 bonus, maka credit menjadi 55.000.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Maksimal bonus deposit yang diberikan adalah <b>IDR 100.000</b> per hari.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Bonus deposit akan di-reset setiap hari pukul 00:00 WIB.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Syarat withdraw adalah 5x turnover dari nilai deposit + bonus deposit.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Jika ditemukan kecurangan seperti kesamaan data player, penipuan deposit, kesamaan IP address, safety bet, atau investasi, maka pihak <b>MURAH898</b> berhak membatalkan bonus tanpa dispensasi.
            </li>

            <li style="margin-bottom: 6px;">
                💎 Semua keputusan <b>MURAH898</b> bersifat mutlak dan tidak dapat diganggu gugat.
            </li>

        </ul>

        <div style="text-align: center; margin-top: 15px;">
            <a href="/" style="background: var(--third-color); color: #000; padding: 8px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block;">
                DEPOSIT & KLAIM HARIAN
            </a>
        </div>

    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-5-column-1.jpg" alt="Bonus Turnover MURAH898">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS TURNOVER SLOT & CASINO 1%
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                <span style="background: #ffd700; color: #000; padding: 2px 10px; border-radius: 20px; font-weight: bold;">SLOT & LIVE CASINO</span>
            </p>
        </div>

        <p style="color: #eee; font-size: 13px; margin-bottom: 15px; text-align: center;">
            <b>MURAH898</b> dengan Bonus TurnOver terbesar 1% 💎 hanya berlaku untuk semua permainan Slot & Live Casino.
        </p>

        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">

            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                💎 Bonus akan dibagikan paling lama pukul 12.00 WIB setiap hari Senin.
            </li>

            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                💎 Bonus dibagikan secara otomatis (tidak perlu klaim) setiap hari Senin.
            </li>

            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                💎 Pihak <b>MURAH898</b> berhak membatalkan semua yang berhubungan dengan bonus apabila ditemukan adanya kecurangan atau kejanggalan.
            </li>

            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                💎 Syarat dan ketentuan dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
            </li>

            <li style="margin-bottom: 8px;">
                💎 Keputusan <b>MURAH898</b> bersifat mutlak dan final, tidak dapat diganggu gugat.
            </li>

        </ul>

    </div>
</div>
            
<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-6-column-1.jpg" alt="Cashback Mingguan MURAH898">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS CASHBACK SLOT & CASINO 10%
            </h3>
        </div>

        <p style="color:#eee; font-size:13px; margin-bottom:15px; text-align:center;">
            <b>MURAH898</b> dengan bonus cashback dari total kekalahan selama 1 minggu khusus permainan SLOT & CASINO.
        </p>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">
            SYARAT & KETENTUAN :
        </p>

        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 13px; margin-bottom: 15px;">

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Bonus diberikan dari total kekalahan selama satu minggu untuk permainan SLOT & CASINO.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Bonus dibagikan otomatis ke akun user setiap hari Senin.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Minimal kekalahan untuk mendapatkan bonus adalah <b>IDR 300.000</b>.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Bonus diberikan kepada member yang aktif bermain selama periode 1 minggu.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Perhitungan: total kekalahan x 10% = cashback yang didapatkan.
            </li>

            <li style="margin-bottom: 6px;">
                💎 Contoh:  
                Member A 300.000 x 5% = 15.000  
                Member B 75.000.000 x 7% = 5.250.000  
                Member C 110.000.000 x 10% = 11.000.000
            </li>

        </ul>

        <div style="background: rgba(255, 51, 51, 0.1); border-left: 4px solid #ff3333; padding: 10px; margin-bottom: 15px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">
                PERHATIAN :
            </p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.4;">
                Dilarang melakukan kecurangan seperti safety bet, kesamaan data rekening, atau IP address yang sama. Jika ditemukan pelanggaran, pihak <b>MURAH898</b> berhak membatalkan bonus dan membekukan saldo kemenangan.
            </p>
        </div>

        <p style="font-size: 11px; color: #888; text-align: center; font-style: italic;">
            Keputusan <b>MURAH898</b> bersifat mutlak dan final, dapat berubah sewaktu-waktu tanpa pemberitahuan.
        </p>

        <div style="text-align: center; margin-top: 15px;">
            <a href="/credit-history" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block; text-transform: uppercase;">
                CEK RIWAYAT CASHBACK
            </a>
        </div>

    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-7-column-1.jpg" alt="Cashback Sportbook MURAH898">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                ⚽ CASHBACK SPORTBOOK 5%
            </h3>
        </div>

        <p style="color:#eee; font-size:13px; margin-bottom:15px; text-align:center;">
            <b>MURAH898</b> dengan bonus cashback sportsbook 5% untuk semua member.
        </p>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">
            SYARAT & KETENTUAN :
        </p>
        
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Bonus dihitung berdasarkan total kekalahan selama 1 minggu periode (Kamis - Rabu).
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Bonus dapat diklaim setiap hari Kamis, minimal kekalahan Rp.500.000.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Bonus cashback tidak dapat digabungkan dengan promo lainnya.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Pihak <b>MURAH898</b> berhak membatalkan bonus dan kemenangan jika ditemukan kesamaan IP, bonus hunter, safety bet, atau kecurangan sistem.
            </li>

            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                💎 Pihak <b>MURAH898</b> berhak melakukan penyesuaian tanpa pemberitahuan terlebih dahulu.
            </li>

            <li style="margin-bottom: 6px;">
                💎 Keputusan <b>MURAH898</b> bersifat mutlak dan tidak dapat diganggu gugat.
            </li>

        </ul>

        <p style="font-size: 11px; color: #aaa; margin-top: 10px; text-align: center;">
            NB: Untuk mengikuti promosi cashback, member wajib konfirmasi ke customer service. Taruhan virtual, e-soccer, dan SABA virtual tidak termasuk cashback.
        </p>

    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-8-column-1.jpg" alt="Event Turnover MURAH898">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                EVENT LOMBA TURNOVER MURAH898
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Hadiah Besar Untuk Top Player Mingguan!
            </p>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 12px; border-radius: 8px; border: 1px solid #ffd700; margin-bottom: 15px; text-align: center;">
            <span style="color: #ffd700; font-weight: bold; font-size: 14px;">TOTAL HADIAH LOMBA TURNOVER</span><br>
            <small style="color: #00ff00;">Motor • Android • Emas • Uang Tunai</small>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">
            DAFTAR HADIAH BERDASARKAN JUARA :
        </p>

        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 13px; margin-bottom: 15px;">

            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 6px;">
                🥇 JUARA 1 — <b style="color:#ffd700;">1 UNIT MOTOR + UANG TUNAI RP 10.000.000</b>
            </li>

            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 6px;">
                🥈 JUARA 2 — <b style="color:#c0c0c0;">1 UNIT HP ANDROID FLAGSHIP + UANG TUNAI RP 5.000.000</b>
            </li>

            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 6px;">
                🥉 JUARA 3 — <b style="color:#cd7f32;">EMAS 10 GRAM + UANG TUNAI RP 2.500.000</b>
            </li>

            <li style="margin-bottom: 8px;">
                🎁 JUARA 4–10 — <b style="color:#00ff00;">BONUS CASH RP 500.000 – 1.000.000</b>
            </li>

        </ul>

        <div style="background: #252525; padding: 10px; border-radius: 5px; margin-bottom: 15px; border: 1px dashed #555;">
            <small style="color: #ccc; display: block;">PERIODE EVENT:</small>
            <p style="font-size: 12px; color: #fff; margin: 0;">
                Mingguan (Senin - Minggu) <br>
                Perhitungan berdasarkan total turnover tertinggi
            </p>
        </div>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 8px; border-radius: 5px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 3px 0;">
                PERATURAN EVENT :
            </p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.3; font-style: italic;">
                Pihak <b>MURAH898</b> berhak melakukan verifikasi data dan membatalkan hadiah jika ditemukan kecurangan, multi akun, atau aktivitas tidak wajar. Keputusan bersifat mutlak.
            </p>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <a href="https://klikmio.cc/utama" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block;">
                IKUTI LOMBA SEKARANG
            </a>
        </div>

    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-9-column-1.jpg" alt="Pasaran MURAH898">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                PASARAN LAMA MURAH898
            </h3>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 12px; border-radius: 8px; border: 1px solid #ffd700; margin-bottom: 15px; text-align: center;">
            <span style="color: #ffd700; font-weight: bold; font-size: 14px;">
                HONGKONG POOLS & SYDNEY POOLS
            </span>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">
            HADIAH :
        </p>

        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 13px; margin-bottom: 15px;">

            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                4D — <b style="color:#ffd700;">10.000</b>
            </li>

            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                3D — <b style="color:#c0c0c0;">1.000</b>
            </li>

            <li style="margin-bottom: 8px;">
                2D — <b style="color:#cd7f32;">100</b>
            </li>

        </ul>

    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-10-column-1.jpg" alt="Promo MURAH898">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
    </div>
</div>
            </div>
        `;

        let navbar = document.querySelector('.menubar.navbar.navbar-dark.bg-dark.py-2.px-2.d-none.d-xl-block') || 
                     document.querySelector('.menubar.navbar.navbar-dark.bg-dark.py-2.px-2.d-xl-none');

        if (navbar) {
            navbar.insertAdjacentHTML('afterend', promoStyle + promoHTML);

            document.querySelectorAll('.collapsible').forEach(button => {
                button.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const isOpen = content.style.display === 'block';
                    
                    document.querySelectorAll('.promo-content').forEach(c => c.style.display = 'none');
                    
                    content.style.display = isOpen ? 'none' : 'block';
                });
            });
        }
    }
});
