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
                border: 2px solid #f2ff00;
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
                color: #f2ff00;
                background: #000;
                border-bottom: 1px solid #f2ff00;
                letter-spacing: 1px;
            }

            .promo-header-img {
                width: 100%;
                display: block;
                margin: 0;
            }
            .teks-berjaalan {
                border-bottom: 1px solid #f2ff00;
                border-top: 1px solid #f2ff00;
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
                border-bottom: 1px solid #f2ff00;
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
                background: #f2ff00;
                color: #000000;
                border: 1px solid #f2ff00;
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
                border-bottom: 1px solid #f2ff00;
                line-height: 1.6;
                font-size: 13px;
            }
            .promo-table {
                width: 100% !important;
                border-collapse: collapse;
                margin: 15px 0;
            }
            .promo-table td {
                border: 1px solid #f2ff00;
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
            <div class="promo-text-header">🔥 PROMO TERBARU MIO500 🔥</div>

            <div class="teks-berjaalan">
                <marquee scrollamount="5">SELAMAT DATANG DI MIO500 - SITUS TOGEL & SLOT ONLINE TERPERCAYA - DEPOSIT MINIMAL RP 25.000 - WITHDRAW MINIMAL RP 50.000 - SALAM JACKPOT!</marquee>
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
                BONUS NEW MEMBER UP TO 100%
            </h2>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #444; font-size: 14px;">
            SYARAT & KETENTUAN :
        </p>
        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 13px; margin-bottom: 20px;">
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Berlaku untuk semua player baru <b>MIO500</b>.</li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Hanya berlaku untuk permainan <b>SLOT</b>.</li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Minimal Deposit: <span style="color: #00ff00; font-weight: bold;">IDR 50.000</span></li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Maksimal Bonus: <span style="color: #00ff00; font-weight: bold;">IDR 100.000</span></li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Target TurnOver: <b>X10</b></li>
            <li style="margin-bottom: 8px;">> Klaim otomatis saat deposit pertama.</li>
        </ul>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 15px; border-radius: 10px; border: 1px solid #ffd700; margin-bottom: 20px;">
            <p style="color: #ffd700; font-weight: bold; margin-top: 0; text-align: center; text-decoration: underline;">CARA KLAIM & PERHITUNGAN</p>
            <div style="background: #000; padding: 10px; border-radius: 10px; font-size: 12px; border-left: 4px solid #ffd700;">
                <b>Contoh:</b> Depo 50,000 + 100% = 50.000 <br>
                Total TO: 50.000 x 15 = <b>750.000</b>
            <p style="font-size: 12px; margin-bottom: 10px;">TO yang harus dicapai untuk Withdraw.</p>
            </div>
        </div>

        <div style="font-size: 11px; color: #aaa; text-align: justify; border-top: 1px solid #444; padding-top: 10px;">
            <strong style="color: #ff4d4d;">PERHATIAN:</strong> Dilarang ada kesamaan IP atau manipulasi data. Keputusan <b>MIO500</b> mutlak.
        </div>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-2-column-1.jpg" alt="Garansi Kekalahan MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                 GARANSI KEKALAHAN 100% 
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Main Tanpa Ragu di <span style="color:var(--third-color); font-weight:bold;">MIO500</span> <br>
            </p>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 12px; border-radius: 8px; border: 1px solid var(--third-color); margin-bottom: 15px; text-align: center;">
            <p style="color: #fff; font-size: 13px; margin: 0;">Khusus Member Baru Slot (Deposit Pertama)</p>
            <p style="color: var(--third-color); font-size: 15px; font-weight: bold; margin: 5px 0;">SALDO BALIK 100% JIKA KALAH!</p>
        </div>

        <p style="color: var(--third-color); font-weight: bold; margin-bottom: 8px; font-size: 14px; text-transform: uppercase;">Syarat & Ketentuan :</p>
        <ul style="list-style: none; padding-left: 0; color: #eee; font-size: 12px; margin-bottom: 15px;">
            <li style="padding: 5px 0; border-bottom: 1px solid #333;">> Berlaku khusus <b>New Member</b> di permainan <b>SLOT</b>.</li>
            <li style="padding: 5px 0; border-bottom: 1px solid #333;">> Minimal Deposit untuk klaim promo ini: <b style="color:var(--third-color);">IDR 50.000</b>.</li>
            <li style="padding: 5px 0; border-bottom: 1px solid #333;">> Maksimal Saldo Garansi: <b style="color:var(--third-color);">IDR 100.000</b>.</li>
            <li style="padding: 5px 0; border-bottom: 1px solid #333;">> Saldo diklaim via <b>Livechat / WA</b> saat saldo pertama habis.</li>
            <li style="padding: 5px 0; border-bottom: 1px solid #333;">> Target Turnover Ringan: <b style="color: #ff4500;">15x</b>.</li>
            <li style="padding: 5px 0;">> Berlaku via <b>BANK & E-WALLET</b> (Tidak berlaku PULSA).</li>
        </ul>

        <div style="background: #252525; border-left: 4px solid var(--third-color); padding: 12px; margin: 15px 0; border-radius: 5px;">
            <p style="color: #ffd700; font-weight: bold; font-size: 12px; margin-bottom: 5px;">CONTOH PERHITUNGAN TURNOVER:</p>
            <p style="font-size: 13px; color: #fff; margin: 0;">
                [DEPOSIT + BONUS] x 15 = TOTAL TO [50.000 + 50.000] x 15 = 1.500.000 <br>
                Target TO: 100.000 x 8 = <b style="color: #00ff00;">1.500.000</b>
            </p>
        </div>

        <div style="background: #000; padding: 10px; border-radius: 5px; border-left: 4px solid #ff4500; margin-bottom: 15px;">
            <p style="font-size: 12px; color: #fff; margin: 0;">
                <b style="color: #ff4500;">ESTIMASI WD:</b> Maksimal WD adalah <b>2X</b> dari First Deposit. <br>
                <small style="color: #bbb;">Contoh: Depo 100rb, maka maksimal saldo yang bisa di WD adalah 200rb.</small>
            </p>
        </div>

        <div style="text-align: center; margin-bottom: 15px;">
            <a href="https://direct.lc.chat/19644804/" style="background: var(--third-color); color: #000; padding: 10px 20px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block; text-transform: uppercase;">
                Klaim Garansi Sekarang 
            </a>
        </div>

        <p style="font-size: 11px; color: #999; text-align: justify; font-style: italic; border-top: 1px solid #444; padding-top: 8px;">
            <b>NB:</b> Promo hangus jika member sudah melakukan Withdraw atau Deposit ke-2 sebelum klaim. Dilarang keras manipulasi IP atau <i>Hold Spin</i>. Keputusan <b>MIO500</b> adalah Mutlak.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-3-column-1.jpg" alt="Bonus New Member 30% MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 10px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS NEW MEMBER 30% MIO500
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Tambahan Saldo Melimpah Khusus Player Baru!
            </p>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Berlaku untuk semua Member Baru <b>MIO500</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Wajib klaim melalui <b>Live Chat</b> (Maksimal 2 jam setelah depo).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Minimal Deposit: <b style="color:var(--third-color);">IDR 100.000</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Maksimal Bonus: <b style="color:var(--third-color);">IDR 300.000</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Berlaku khusus untuk permainan <b style="color: #00ff00;">SLOT</b>.</li>
            <li style="margin-bottom: 6px;">> Syarat Withdraw: Target Turnover <b style="color: #ff4500;">8X</b>.</li>
        </ul>

        <div style="background: #252525; border-left: 4px solid var(--third-color); padding: 12px; margin: 15px 0; border-radius: 5px;">
            <p style="color: #ffd700; font-weight: bold; font-size: 12px; margin-bottom: 5px;">CONTOH PERHITUNGAN TURNOVER:</p>
            <p style="font-size: 13px; color: #fff; margin: 0;">
                Depo 100.000 + Bonus 30.000 = 130.000 <br>
                Target TO: 130.000 x 8 = <b style="color: #00ff00;">1.040.000</b>
            </p>
        </div>

        <div style="background: #331111; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p style="color: #ff4d4d; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">PERHATIAN :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; font-style: italic;">
                Bonus hangus jika saldo sudah dimainkan sebelum klaim, ada kesamaan IP, atau menggunakan VPN/Proxy. Keputusan <b>MIO500</b> adalah mutlak.
            </p>
        </div>

        <div style="text-align: center;">
            <a href="https://direct.lc.chat/19644804/" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
                KLAIM BONUS 30% SEKARANG
            </a>
        </div>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-4-column-1.jpg" alt="Bonus Harian MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 10px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS DEPOSIT HARIAN 10%
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0; font-weight: bold;">
                <span style="color: #00ff00;">BEBAS KLAIM BERKALI-KALI SETIAP HARI!</span>
            </p>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Minimal Deposit: <b style="color:var(--third-color);">IDR 50.000</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Maksimal Bonus per Klaim: <b style="color:var(--third-color);">IDR 50.000</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Bonus bisa diklaim <b>Berkali-kali</b> (Setiap Deposit).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Hanya berlaku untuk permainan <b style="color: #00ff00;">SLOT</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Wajib Klaim <b>SEBELUM</b> saldo dimainkan.</li>
            <li style="margin-bottom: 6px;">> Syarat Withdraw: Turnover Sangat Rendah <b style="color: #ff4500;">HANYA X3</b>.</li>
        </ul>

        <div style="background: #252525; border-left: 4px solid #00ff00; padding: 12px; margin: 15px 0; border-radius: 5px;">
            <p style="color: #ffd700; font-weight: bold; font-size: 12px; margin-bottom: 5px;">CONTOH PERHITUNGAN TO X3:</p>
            <p style="font-size: 13px; color: #fff; margin: 0;">
                Depo 100.000 + Bonus 10.000 = 110.000 <br>
                Target TO: 110.000 x 3 = <b style="color: #00ff00;">330.000</b> (Sangat Mudah!)
            </p>
        </div>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 10px; border-radius: 5px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 13px; margin: 0 0 5px 0;">LARANGAN & SANKSI :</p>
            <ul style="padding-left: 18px; color: #ccc; font-size: 11px; margin: 0; font-style: italic;">
                <li>Dilarang ada <b>KESAMAAN IP ADDRESS</b> antar user.</li>
                <li>Dilarang menggunakan <b>VPN, PROXY, SSH, atau TUNNELING</b>.</li>
                <li>Dilarang keras melakukan <b>HOLD SPIN / GANTUNG SPIN</b>.</li>
                <li>Bermain di luar SLOT (Togel/Bola) = <b>SALDO DITARIK SEMUA!</b></li>
            </ul>
        </div>

        <div style="text-align: center; margin-top: 15px;">
            <a href="/" style="background: var(--third-color); color: #000; padding: 8px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block;">
                DEPOSIT & KLAIM HARIAN
            </a>
        </div>

        <p style="font-size: 10px; color: #777; text-align: center; margin-top: 10px;">
            Semua keputusan <b>MIO500</b> bersifat mutlak dan tidak dapat diganggu gugat.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-5-column-1.jpg" alt="Bonus Turnover MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS TURNOVER 1%
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                <span style="background: #ffd700; color: #000; padding: 2px 10px; border-radius: 20px; font-weight: bold;">SLOT & LIVE CASINO</span>
            </p>
        </div>

        <div style="display: flex; justify-content: space-around; margin-bottom: 15px; text-align: center;">
            <div style="background: #252525; padding: 8px; border-radius: 5px; width: 45%; border: 1px solid #444;">
                <small style="color: #bbb; display: block;">TANPA BATAS</small>
                <b style="color: #00ff00; font-size: 14px;">MAKSIMAL BONUS</b>
            </div>
            <div style="background: #252525; padding: 8px; border-radius: 5px; width: 45%; border: 1px solid #444;">
                <small style="color: #bbb; display: block;">OTOMATIS</small>
                <b style="color: #00ff00; font-size: 14px;">MASUK KE AKUN</b>
            </div>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">KEUNTUNGAN MEMBER :</p>
        
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span>Promo Turnover ini hanya berlaku untuk jenis permainan slot, live casino & arcade</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span>Perhitungan Bonus Turnover akan di berikan dari Total Turn Over yang berarti perputaran bettingan anda selama 1 minggu baik kalah maupun menang.</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span>Periode Hitungan Turnover dari Kamis s/d Rabu.</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span><b>Bonus Turnover akan di bagikan setiap hari Kamis & Di kreditkan secara otomatis</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span>Turnover tidak memiliki batas atau minimum untuk mendapatkan bonus ini hanya di perlukan aktif bermain slot</span>
            </li>
            <li style="margin-bottom: 8px; display: flex; align-items: flex-start;">
                <span style="color: var(--third-color); margin-right: 8px;">></span>
                <span>Berikut cara perhitungan bonus Rollingan slot, live casino & arcade :</span>
            </li>
            <li style="color:#f1ed0f"><span style="font-size:12px">Member A bermain slot dengan putaran bettingan Rp.800.000 x 1% = Rp 8.000 (Bonus Rollingan yang di dapatkan)</span></li>
            <li style="color:#f1ed0f"><span style="font-size:12px">Member B bermain slot dengan putaran bettingan Rp.118.000.000 x 1% = Rp 1.180.000(Bonus Rollingan yang di dapatkan)</span></li>
            

        </ul>

        <div style="background: rgba(255, 215, 0, 0.05); border: 1px dashed var(--third-color); padding: 10px; border-radius: 5px; margin-top: 15px;">
            <p style="font-size: 11px; color: #ccc; margin: 0; text-align: center; font-style: italic;">
                * Pihak <b>MIO500</b> berhak membatalkan bonus jika ditemukan indikasi kecurangan (Bonus Hunter/Safety Bet). Syarat & ketentuan dapat berubah sewaktu-waktu. Keputusan MIO500 adalah Mutlak.
            </p>
        </div>

        <div style="text-align: center; margin-top: 15px;">
            <a href="/credit-history" style="background: linear-gradient(180deg, #ffd700, #b8860b); color: #000; padding: 10px 30px; border-radius: 25px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block; box-shadow: 0 4px 15px rgba(0,0,0,0.4);">
                MAIN & TINGKATKAN TURNOVER
            </a>
        </div>
    </div>
</div>
            
<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-6-column-1.jpg" alt="Cashback Mingguan MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS CASHBACK KHUSUS SLOT | ARCADE | Live Casino 10%
            </h3>
        </div>

        <table style="width: 100%; color: #fff; font-size: 12px; border-collapse: collapse; margin-bottom: 15px; text-align: center;">
            <tr style="background: #333; color: #ffd700;">
                <th style="padding: 10px; border: 1px solid #444;">Total Kekalahan (Lose)</th>
                <th style="padding: 10px; border: 1px solid #444;">Bonus</th>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #444;">100.000 - 50.000.000</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">5%</td>
            </tr>
            <tr style="background: #222;">
                <td style="padding: 8px; border: 1px solid #444;">50.000.001 - 100.000.000</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">7%</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #444;">dt atas Rp.100.000.000</td>
                <td style="padding: 8px; border: 1px solid #444; color: #00ff00; font-weight: bold;">10%</td>
            </tr>
        </table>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 13px; margin-bottom: 15px;">
            <li style="margin-bottom: 5px;">> Promo Cashback Kekalahan ini hanya berlaku untuk jenis permainan slot, arcade & live casino</li>
            <li style="margin-bottom: 5px;">> Periode Hitungan cashback kekalahan dari Sabtu s/d Jumat.</li>
            <li style="margin-bottom: 5px;">> Bonus Cashback akan di bagikan setiap hari Minggu & Di kreditkan secara otomatis</li>
            <li style="margin-bottom: 5px;">> Minimal untuk mendapatkan bonus kekalahan ini adalah Rp.100.000,-</li>
            <li style="margin-bottom: 5px;">> Bonus dapat diwithdrawkan atau dimainkan di semua permainan mio500</li>
            <li style="margin-bottom: 5px;">> Minimal untuk mendapatkan bonus kekalahan ini adalah Rp.100.000,-</li>
            <li style="margin-bottom: 5px;">Contoh perhitungan member :</li>
            <li style="margin-bottom: 5px;"><li style="color:#f1da0f"></li>Member A mengalami kekalahan Rp.500.000 x 5% = Rp .25.000 (Bonus kekalahan 5% yang di dapatkan)</li>
            <li style="margin-bottom: 5px;"><li style="color:#f1da0f"></li>Member B mengalami kekalahan Rp.63.000.000 x 7% = Rp .4.410.000 (Bonus kekalahan 7% yang di dapatkan)</li>
            <li style="margin-bottom: 5px;"><li style="color:#f1da0f"></li>Member C mengalami kekalahan Rp.125.000.000 x 10% = Rp .12.500.000 (Bonus kekalahan 10% yang di dapatkan)</li>
        </ul>

        <div style="background: rgba(255, 51, 51, 0.1); border-left: 4px solid #ff3333; padding: 10px; margin-bottom: 15px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">LARANGAN KETAT & ANTI-FRAUD :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.4;">
                Dilarang keras melakukan <b>Safety Bet</b> (Bet kiri-kanan), kesamaan data rekening, atau IP address yang sama. Jika ditemukan kejanggalan atau manipulasi, pihak <b style="color:var(--third-color);">MIO500</b> berhak membatalkan bonus dan membekukan saldo kemenangan.
            </p>
        </div>

        <p style="font-size: 11px; color: #888; text-align: center; font-style: italic;">
            Keputusan <b>MIO500</b> bersifat Mutlak dan Final. Syarat & ketentuan dapat berubah tanpa pemberitahuan.
        </p>

        <div style="text-align: center; margin-top: 15px;">
            <a href="/credit-history" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block; text-transform: uppercase;">
                Cek Riwayat Kekalahan
            </a>
        </div>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-7-column-1.jpg" alt="Cashback Sportbook MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                âš½CASHBACK SPORTBOOK 5%
            </h3>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 12px; border-radius: 8px; border: 1px solid #00ff00; margin-bottom: 15px; text-align: center;">
            <span style="color: #00ff00; font-weight: bold; font-size: 14px;">BONUS CAIR SETIAP HARI SELASA</span><br>
            <small style="color: #ccc;">Paling lambat jam 15:00 WIB (Otomatis)</small>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 13px;">
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Bonus cashback berlaku untuk semua permainan SPORTBOOK.</li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Minimal kekalahan dalam 1 minggu (Senin-Minggu) adalah <b style="color:var(--third-color);">IDR 100.000</b>.</li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Bonus Cashback <b>5%</b> dihitung dari Total Lose (Kekalahan Bersih).</li>
            <li style="margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 5px;">> Tidak ada batas maksimal bonus (<b>UNLIMITED</b>).</li>
            <li style="margin-bottom: 8px;">> Bonus dibagikan otomatis ke akun tanpa perlu klaim manual.</li>
        </ul>

        <div style="background: #252525; border-left: 4px solid var(--third-color); padding: 10px; margin: 15px 0; border-radius: 5px;">
            <small style="color: #ccc; display: block;">SIMULASI CASHBACK:</small>
            <p style="font-size: 13px; color: #fff; margin: 0;">
                Kekalahan Seminggu: Rp 1.000.000 <br>
                Bonus 5%: 1.000.000 x 5% = <b style="color: #00ff00;">IDR 50.000</b>
            </p>
        </div>

        <div style="border: 1px solid #ff3333; padding: 10px; border-radius: 5px; background: rgba(255, 51, 51, 0.05);">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">LARANGAN KERAS :</p>
            <p style="font-size: 11px; color: #bbb; margin: 0; line-height: 1.4;">
                Dilarang melakukan <b>Safety Bet</b> (Bet Kiri-Kanan), Cuci Bil, atau Kesamaan IP Address. Jika terindikasi melakukan kecurangan, pihak <b style="color:var(--third-color);">MIO500</b> berhak membatalkan seluruh bonus dan kemenangan anda.
            </p>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <a href="/sport" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block;">
                PASANG TARUHAN BOLA
            </a>
        </div>

        <p style="font-size: 11px; color: #777; text-align: center; margin-top: 15px; border-top: 1px solid #333; padding-top: 10px;">
            Keputusan <b>MIO500</b> adalah mutlak & tidak dapat diganggu gugat.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-8-column-1.jpg" alt="Bonus Referral MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS MEMBER GET MEMBER 10%
            </h3>
            <p style="font-size: 13px; color: #fff; margin: 5px 0;">
                Main Tanpa Modal? Bisa! Ajak Teman Anda Gabung di <span style="color:var(--third-color); font-weight:bold;">MIO500</span>
            </p>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 12px; border-radius: 8px; border: 1px solid #ffd700; margin-bottom: 15px; text-align: center;">
            <span style="color: #ffd700; font-weight: bold; font-size: 14px;">BONUS 10% DARI TOTAL DEPO TEMAN</span><br>
            <small style="color: #00ff00;">Tanpa Perlu Deposit Sendiri untuk Klaim!</small>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 12px; margin-bottom: 15px;">
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Wajib klaim di hari yang sama dengan deposit teman (Lewat hari = Hangus).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Teman yang diajak wajib deposit minimal <b style="color:var(--third-color);">IDR 50.000</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Teman yang diajak wajib menyelesaikan minimal <b style="color: #ffd700;">1X Turnover</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Berlaku untuk kelipatan jumlah teman yang diajak (Tanpa Batas!).</li>
            <li style="margin-bottom: 6px;">> Syarat Withdraw bonus ini adalah Turnover <b style="color: #ff4500;">X3</b> saja.</li>
        </ul>

        <div style="background: #000; padding: 10px; border-radius: 5px; border-left: 4px solid var(--third-color); margin-bottom: 15px;">
            <p style="color: var(--third-color); font-weight: bold; font-size: 12px; margin-bottom: 5px;">CARA KLAIM (VIA LIVECHAT/WA):</p>
            <p style="font-size: 11px; color: #fff; margin: 0; font-family: monospace;">
                User ID Anda : <br>
                User ID Teman : <br>
                Bukti Depo Teman : (Screenshot)
            </p>
        </div>

        <div style="background: #252525; padding: 10px; border-radius: 5px; margin-bottom: 15px; border: 1px dashed #555;">
            <small style="color: #ccc; display: block;">CONTOH BONUS:</small>
            <p style="font-size: 12px; color: #fff; margin: 0;">
                Ajak 5 Teman (Depo @100rb) = Total 500rb.<br>
                Bonus Anda: 500.000 x 10% = <b style="color: #00ff00;">IDR 50.000 (SALDO GRATIS)</b>
            </p>
        </div>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 8px; border-radius: 5px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 3px 0;">PERATURAN ANTI-KECURANGAN :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.3; font-style: italic;">
                Dilarang keras adanya kesamaan IP Address, Nama Rekening, atau No.HP antara pengajak dan yang diajak. Jika ditemukan indikasi <b>Bonus Hunter</b> atau manipulasi data, MIO500 akan memblokir akun secara permanen.
            </p>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <a href="https://klikmio.cc/utama" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block;">
                AJAK TEMAN SEKARANG 
            </a>
        </div>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-9-column-1.jpg" alt="Bonus Download APK MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                BONUS DOWNLOAD APLIKASI MIO500
            </h3>
            <div style="margin-top: 10px;">
                <span style="background: #00ff00; color: #000; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 15px;">
                    HADIAH SALDO: IDR 5.000
                </span>
            </div>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">CARA KLAIM BONUS :</p>
        <ol style="padding-left: 20px; color: #ffffff; font-size: 13px; margin-bottom: 15px;">
            <li style="margin-bottom: 5px;">Download Aplikasi Resmi <b>MIO500</b> melalui link di website.</li>
            <li style="margin-bottom: 5px;">Install dan Login menggunakan Akun Anda di Aplikasi.</li>
            <li style="margin-bottom: 5px;">Kirim Screenshot saat Anda sudah login di dalam Aplikasi ke <b>Livechat / WA</b>.</li>
            <li style="margin-bottom: 5px;">Bonus saldo <b>Rp 5.000</b> akan langsung ditambahkan ke akun Anda.</li>
        </ol>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #eee; font-size: 12px; margin-bottom: 15px;">
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Promo berlaku untuk semua member yang sudah pernah melakukan <b>Minimal 1x Deposit</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Hanya berlaku untuk 1 Akun / 1 Device (Perangkat HP).</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Syarat Withdraw bonus ini adalah Turnover <b>1X</b> saja.</li>
            <li style="margin-bottom: 6px;">> Bonus hanya dapat diklaim <b>1 kali</b> per member.</li>
        </ul>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">ANTI-CHEAT PROTECTION :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.4; font-style: italic;">
                Dilarang keras menghapus dan menginstall ulang aplikasi untuk klaim berkali-kali. Kesamaan IP atau manipulasi data akan menyebabkan bonus dan kemenangan dibatalkan secara permanen.
            </p>
        </div>

        <div style="text-align: center;">
            <a href="https://klikmio.cc/apkmio" style="background: linear-gradient(180deg, #ffd700, #b8860b); color: #000; padding: 10px 25px; border-radius: 30px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block; box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);">
                DOWNLOAD APK SEKARANG 
            </a>
        </div>

        <p style="font-size: 10px; color: #666; text-align: center; margin-top: 15px;">
            Keputusan <b>MIO500</b> adalah mutlak. Nikmati kemudahan akses 24 jam dengan Aplikasi MIO500.
        </p>
    </div>
</div>

<div class="promo-block">
    <button class="collapsible">
        <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-10-column-1.jpg" alt="Extra Bonus Referral MIO500">
    </button>

    <div class="promo-content" style="background-color: #1a1a1a; padding: 15px; border-radius: 0 0 8px 8px; line-height: 1.6;">
        
        <div style="text-align:center; border-bottom: 2px double var(--third-color); padding-bottom: 12px; margin-bottom: 15px;">
            <h3 style="color:var(--third-color); font-weight:bold; font-size:18px; margin: 0; text-transform: uppercase;">
                > BONUS EXTRA AJAK TEMAN 10% ( DEPOSIT AWAL )
            </h3>
        </div>

        <div style="background: linear-gradient(145deg, #222, #333); padding: 10px; border-radius: 8px; border: 1px solid #00ff00; margin-bottom: 15px; text-align: center;">
            <span style="color: #00ff00; font-weight: bold; font-size: 14px;">BONUS LANGSUNG MASUK KE DOMPET</span><br>
            <small style="color: #ccc;">Tanpa Menunggu Pembagian Mingguan!</small>
        </div>

        <p style="color: #ffd700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #444; font-size: 14px;">SYARAT & KETENTUAN :</p>
        <ul style="list-style-type: none; padding-left: 0; color: #ffffff; font-size: 12px; margin-bottom: 15px;">
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Bonus 10% Extra ajak teman (reffrensi) akan di berikan jika mengajak teman bermain & bergabung di situs Mio500</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Bonus dapat di turunkan jika teman sudah bermain selesai</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Bonus Extra 10% hanya dapat di Claim 1x / Userid</b>.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">> Perhitungan bonus akan di hitung dari Deposit Awal Teman (reffrensi) anda.</li>
            <li style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;"><b style="color: #fffb00;">Contoh :</b>Member A mengajak B untuk bergabung = B melakukan deposit Rp.100.000 = Rp.10.000 (Yang wajib di dapatkan oleh member A)</li>
            <li style="margin-bottom: 6px;">> Bonus hanya dapat di Claim 5 x 24 jam, jika melewat dari hari di tentukan bonus tidak dapat di berikan kembali</li>
            <li style="margin-bottom: 6px;">> Hubungi Customer Service kami melalu Livechat dan Whatsapp Official Kami</li>
            <li style="margin-bottom: 6px;">> Jika kedapatan melakukan tindak kecurangan seperti : Kesamaan Data Player, Penipuan Deposit, Kesamaan Alamat IP, Melakukan Safety Bet, Invest, Maka pihak Mio500 Berhak membatalkan bonus deposit tanpa dispensasi.</li>
            <li style="margin-bottom: 6px;">> Maximal Bonus Extra ajak teman yang di berikan adalah Rp.100.000,-</li>
            <li style="margin-bottom: 6px;">> Semua keputasan Olxtoto bersifat mutlak dan tidak dapat di Ganggu Gugat.</li>
        </ul>

        <div style="background: rgba(255, 51, 51, 0.1); border: 1px solid #ff3333; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p style="color: #ff3333; font-weight: bold; font-size: 12px; margin: 0 0 5px 0;">ANTI-KECURANGAN (STRICT RULE) :</p>
            <p style="font-size: 11px; color: #ccc; margin: 0; line-height: 1.4; font-style: italic;">
                Dilarang keras ada <b>Kesamaan IP, Nama Rekening, atau Data</b> lainnya. Penggunaan VPN/Proxy/SSH sangat dilarang. Jika ditemukan manipulasi "Self-Referral", pihak <b style="color:var(--third-color);">MIO500</b> akan memblokir permanen ID pengajak dan yang diajak.
            </p>
        </div>

        <div style="text-align: center;">
            <a href="https://direct.lc.chat/19644804/" style="background: var(--third-color); color: #000; padding: 10px 25px; border-radius: 5px; font-weight: bold; text-decoration: none; font-size: 13px; display: inline-block; text-transform: uppercase;">
                Klaim Bonus Referal Sekarang
            </a>
        </div>

        <p style="font-size: 11px; color: #777; text-align: center; margin-top: 15px; border-top: 1px solid #333; padding-top: 10px;">
            Keputusan <b>MIO500</b> bersifat Mutlak dan tidak dapat diganggu gugat.
        </p>
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
