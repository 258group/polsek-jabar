document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname === '/promotion') {

        const promoStyle = `
        <style>
        :root {
            --bg: #0a0a0a;
            --card: #111;
            --gold: #f2ff00;
            --gold-soft: #d4e800;
            --text: #ffffff;
        }

        body {
            background: var(--bg);
        }

        .promo-container {
            max-width: 650px;
            margin: 15px auto;
            background: var(--card);
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 0 25px rgba(255,255,0,0.15);
            font-family: Arial, sans-serif;
        }

        /* HEADER TEXT */
        .promo-title {
            text-align: center;
            padding: 15px;
            font-weight: bold;
            color: var(--gold);
            font-size: 16px;
            border-bottom: 1px solid #333;
            letter-spacing: 1px;
        }

        /* MARQUEE */
        .running-text {
            border-top: 1px solid #333;
            border-bottom: 1px solid #333;
            padding: 6px 0;
            font-size: 12px;
            background: #000;
        }

        /* MENU */
        .menu {
            display: flex;
            gap: 8px;
            padding: 10px;
            position: sticky;
            top: 0;
            background: #000;
            z-index: 10;
        }

        .menu div {
            flex: 1;
            background: var(--gold);
            color: #000;
            text-align: center;
            padding: 8px;
            font-size: 11px;
            font-weight: bold;
            border-radius: 6px;
            cursor: pointer;
            transition: 0.2s;
        }

        .menu div:hover {
            transform: translateY(-2px);
            background: var(--gold-soft);
        }

        /* PROMO CARD */
        .promo-card {
            border-bottom: 1px solid #222;
        }

        .promo-btn {
            width: 100%;
            border: none;
            background: none;
            padding: 0;
            cursor: pointer;
        }

        .promo-btn img {
            width: 100%;
            display: block;
        }

        /* CONTENT */
        .promo-content {
            max-height: 0;
            overflow: hidden;
            transition: all 0.4s ease;
            background: #111;
            padding: 0 15px;
        }

        .promo-content.active {
            padding: 15px;
            max-height: 1000px;
        }

        .promo-content h3 {
            color: var(--gold);
            margin-bottom: 10px;
            text-align: center;
        }

        .promo-content ul {
            padding-left: 15px;
            font-size: 12px;
            line-height: 1.5;
        }

        .promo-content li {
            margin-bottom: 5px;
        }

        /* BUTTON */
        .claim-btn {
            display: block;
            text-align: center;
            margin-top: 15px;
            padding: 10px;
            background: var(--gold);
            color: #000;
            border-radius: 6px;
            font-weight: bold;
            text-decoration: none;
        }

        .claim-btn:hover {
            background: var(--gold-soft);
        }

        @media(max-width:480px){
            .menu div {font-size:10px;}
        }
        </style>
        `;

        const promoHTML = `
        <div class="promo-container">

            <div class="promo-title">
                🔥 PROMO TERBARU MIO500 🔥
            </div>

            <div class="running-text">
                <marquee>WELCOME MIO500 • BONUS BESAR SETIAP HARI • WD CEPAT • MAIN SEKARANG!</marquee>
            </div>

            <div class="menu">
                <div onclick="window.open('/register')">DAFTAR</div>
                <div onclick="window.open('/login')">LOGIN</div>
                <div onclick="window.open('https://direct.lc.chat/19019745/')">LIVECHAT</div>
            </div>

            <!-- CARD 1 -->
            <div class="promo-card">
                <button class="promo-btn">
                    <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-1-column-1.jpg">
                </button>
                <div class="promo-content">
                    <h3>BONUS NEW MEMBER 100%</h3>
                    <ul>
                        <li>Minimal deposit 50.000</li>
                        <li>Bonus max 100.000</li>
                        <li>Turnover x10</li>
                    </ul>
                    <a href="/register" class="claim-btn">KLAIM SEKARANG</a>
                </div>
            </div>

            <!-- CARD 2 -->
            <div class="promo-card">
                <button class="promo-btn">
                    <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-2-column-1.jpg">
                </button>
                <div class="promo-content">
                    <h3>GARANSI KEKALAHAN 100%</h3>
                    <ul>
                        <li>Khusus member baru</li>
                        <li>Saldo kembali jika kalah</li>
                        <li>Turnover ringan</li>
                    </ul>
                    <a href="/" class="claim-btn">MAIN SEKARANG</a>
                </div>
            </div>

            <!-- CARD 3 -->
            <div class="promo-card">
                <button class="promo-btn">
                    <img src="https://veldrive.com/1krznbAJ/2026/04/15/row-4-column-1.jpg">
                </button>
                <div class="promo-content">
                    <h3>BONUS HARIAN 10%</h3>
                    <ul>
                        <li>Bisa klaim berkali-kali</li>
                        <li>Turnover hanya x3</li>
                        <li>Khusus slot</li>
                    </ul>
                    <a href="/" class="claim-btn">DEPOSIT SEKARANG</a>
                </div>
            </div>

        </div>
        `;

        let target = document.querySelector('.menubar');
        if (target) {
            target.insertAdjacentHTML('afterend', promoStyle + promoHTML);

            const buttons = document.querySelectorAll('.promo-btn');

            buttons.forEach(btn => {
                btn.addEventListener('click', function () {
                    const content = this.nextElementSibling;

                    document.querySelectorAll('.promo-content').forEach(c => {
                        if (c !== content) c.classList.remove('active');
                    });

                    content.classList.toggle('active');
                });
            });
        }
    }
});
