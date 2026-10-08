(() => {
    "use strict";

    const start = () => {
        const style = document.createElement("style");

        style.textContent = `
            #hawwa-prank {
                position: fixed;
                inset: 0;
                z-index: 2147483647;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                background:
                    radial-gradient(circle at 50% 35%, #17243d 0%, #070912 45%, #020307 100%);
                font-family: Arial, sans-serif;
                color: white;
                text-align: center;
            }

            .hp-grid {
                position: absolute;
                inset: 0;
                opacity: .16;
                background-image:
                    linear-gradient(rgba(0,255,213,.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,255,213,.15) 1px, transparent 1px);
                background-size: 45px 45px;
                transform: perspective(500px) rotateX(55deg) scale(1.8);
                transform-origin: center bottom;
                animation: gridMove 8s linear infinite;
            }

            .hp-glow {
                position: absolute;
                width: 500px;
                height: 500px;
                border-radius: 50%;
                background: #00ffd522;
                filter: blur(100px);
                animation: glowPulse 3s ease-in-out infinite;
            }

            .hp-card {
                position: relative;
                z-index: 10;
                width: min(680px, 88vw);
                padding: 42px 38px;
                border: 1px solid #00ffd577;
                border-radius: 28px;
                background: rgba(10, 13, 25, .9);
                backdrop-filter: blur(20px);
                box-shadow:
                    0 0 20px #00ffd522,
                    0 0 80px #00ffd511,
                    inset 0 0 40px #ffffff05;
                animation: cardIn .8s cubic-bezier(.2,.8,.2,1);
            }

            .hp-icon {
                font-size: 72px;
                margin-bottom: 12px;
                animation: iconFloat 2.5s ease-in-out infinite;
            }

            .hp-title {
                margin: 0;
                font-size: clamp(27px, 5vw, 43px);
                font-weight: 900;
                letter-spacing: -1px;
                background: linear-gradient(90deg, #fff, #00ffd5, #fff);
                background-size: 200% auto;
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                animation: shine 2.5s linear infinite;
            }

            .hp-subtitle {
                margin: 14px 0 25px;
                font-size: 25px;
                font-weight: 800;
            }

            .hp-terminal {
                margin: 20px auto 25px;
                padding: 18px;
                width: min(500px, 100%);
                text-align: left;
                border-radius: 14px;
                background: #030509;
                border: 1px solid #ffffff12;
                font-family: monospace;
                font-size: 14px;
                line-height: 1.8;
                color: #8dffea;
                box-shadow: inset 0 0 25px #000;
            }

            .hp-white {
                color: white;
            }

            .hp-progress {
                height: 8px;
                margin-top: 12px;
                border-radius: 20px;
                background: #ffffff10;
                overflow: hidden;
            }

            .hp-progress-bar {
                width: 0%;
                height: 100%;
                background: linear-gradient(90deg, #00ffd5, #8affea);
                box-shadow: 0 0 15px #00ffd5;
                transition: width .2s ease;
            }

            .hp-message {
                min-height: 28px;
                font-size: 18px;
                margin: 18px 0;
                color: #d8def0;
            }

            .hp-badge {
                display: inline-block;
                margin: 15px 0;
                padding: 14px 24px;
                border-radius: 100px;
                border: 1px solid #00ffd5;
                background: #00ffd511;
                font-weight: 900;
                letter-spacing: 2px;
                box-shadow: 0 0 25px #00ffd522;
                animation: badgePulse 1.8s ease-in-out infinite;
            }

            .hp-button {
                margin-top: 18px;
                padding: 15px 28px;
                border: none;
                border-radius: 14px;
                cursor: pointer;
                background: #00ffd5;
                color: #00110e;
                font-size: 16px;
                font-weight: 900;
                transition: transform .2s, box-shadow .2s;
            }

            .hp-button:hover {
                transform: scale(1.07);
                box-shadow: 0 0 30px #00ffd577;
            }

            .hp-footer {
                margin-top: 18px;
                color: #71788c;
                font-size: 13px;
            }

            .hp-particle {
                position: absolute;
                bottom: -20px;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: #00ffd5;
                opacity: .7;
                animation: particleRise linear infinite;
            }

            .hp-confetti {
                position: absolute;
                top: -20px;
                width: 8px;
                height: 15px;
                animation: confettiFall linear forwards;
            }

            @keyframes cardIn {
                from {
                    opacity: 0;
                    transform: scale(.7) translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
            }

            @keyframes iconFloat {
                0%,100% {
                    transform: translateY(0) rotate(-3deg);
                }
                50% {
                    transform: translateY(-12px) rotate(3deg);
                }
            }

            @keyframes shine {
                to {
                    background-position: 200% center;
                }
            }

            @keyframes badgePulse {
                0%,100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.04);
                }
            }

            @keyframes glowPulse {
                0%,100% {
                    transform: scale(.9);
                    opacity: .5;
                }
                50% {
                    transform: scale(1.1);
                    opacity: .9;
                }
            }

            @keyframes particleRise {
                from {
                    transform: translateY(0);
                    opacity: 0;
                }
                20% {
                    opacity: .7;
                }
                to {
                    transform: translateY(-110vh);
                    opacity: 0;
                }
            }

            @keyframes confettiFall {
                from {
                    opacity: 1;
                    transform: translateY(0) rotate(0);
                }
                to {
                    opacity: 0;
                    transform: translateY(110vh) rotate(900deg);
                }
            }

            @keyframes gridMove {
                from {
                    background-position: 0 0;
                }
                to {
                    background-position: 0 45px;
                }
            }
        `;

        const overlay = document.createElement("div");
        overlay.id = "hawwa-prank";

        overlay.innerHTML = `
            <div class="hp-grid"></div>
            <div class="hp-glow"></div>

            <div class="hp-card">
                <div id="hp-stage">
                    <div class="hp-icon">⚙️</div>

                    <h1 class="hp-title">
                        PROMOTION PROCESSING
                    </h1>

                    <div class="hp-terminal">
                        <div>&gt; Initializing promotion...</div>
                        <div>&gt; Checking programming skills...</div>
                        <div>&gt; HTML basics detected ✅</div>
                        <div>&gt; Calculating seniority...</div>
                        <div class="hp-white">
                            &gt; Please stand by...
                        </div>

                        <div class="hp-progress">
                            <div class="hp-progress-bar"></div>
                        </div>
                    </div>

                    <div class="hp-message">
                        Analyzing skills...
                    </div>
                </div>
            </div>
        `;

        document.head.appendChild(style);
        document.body.appendChild(overlay);

        const progress = overlay.querySelector(".hp-progress-bar");
        const message = overlay.querySelector(".hp-message");

        const messages = [
            "Analyzing HTML skills...",
            "Checking <div> knowledge...",
            "Checking CSS knowledge...",
            "Searching for JavaScript experience...",
            "Calculating seniority...",
            "This is looking suspicious...",
            "Promotion approved anyway 😂"
        ];

        let value = 0;

        const timer = setInterval(() => {
            value += Math.floor(Math.random() * 9) + 5;

            if (value > 100) value = 100;

            progress.style.width = value + "%";

            const index = Math.min(
                Math.floor(value / 15),
                messages.length - 1
            );

            message.textContent = messages[index];

            if (value >= 100) {
                clearInterval(timer);
                setTimeout(showFinal, 700);
            }
        }, 320);

        function showFinal() {
            overlay.querySelector("#hp-stage").innerHTML = `
                <div class="hp-icon">🎉</div>

                <h1 class="hp-title">
                    CONGRATULATIONS HAWWA!
                </h1>

                <div class="hp-subtitle">
                    💻 SENIOR PROGRAMMER 💻
                </div>

                <div class="hp-badge">
                    ⭐ PROMOTION APPROVED ⭐
                </div>

                <div class="hp-message">
                    You have officially mastered
                    <strong>HTML basics</strong>. 😎
                    <br><br>
                    Your promotion is completely legitimate.
                    <br>
                    Probably.
                </div>

                <div style="font-size:32px; margin:20px 0;">
                    😂 😂 😂
                </div>

                <button class="hp-button">
                    ACCEPT MY PROMOTION
                </button>

                <div class="hp-footer">
                    Approved by the International Committee
                    of People Who Know Basic HTML™
                </div>
            `;

            createParticles();
            launchConfetti();
            playSound();

            overlay
                .querySelector(".hp-button")
                .addEventListener("click", showEnding);
        }

        function showEnding() {
            overlay.querySelector(".hp-card").innerHTML = `
                <div class="hp-icon">😂</div>

                <h1 class="hp-title">
                    OKAY OKAY...
                </h1>

                <div class="hp-subtitle">
                    YOU CAN HAVE YOUR PAGE BACK.
                </div>

                <div class="hp-message">
                    Senior Programmer status revoked.
                    <br><br>
                    <strong>Reason:</strong>
                    Only knowing basic HTML. 😭
                </div>

                <div style="font-size:28px;">
                    Welcome back, junior. 😂
                </div>
            `;

            setTimeout(() => {
                overlay.style.transition = "opacity .8s ease";
                overlay.style.opacity = "0";

                setTimeout(() => {
                    overlay.remove();
                    style.remove();
                }, 800);
            }, 2200);
        }

        function createParticles() {
            for (let i = 0; i < 35; i++) {
                const particle = document.createElement("div");

                particle.className = "hp-particle";
                particle.style.left = Math.random() * 100 + "%";
                particle.style.animationDuration =
                    (4 + Math.random() * 7) + "s";
                particle.style.animationDelay =
                    Math.random() * 4 + "s";

                overlay.appendChild(particle);
            }
        }

        function launchConfetti() {
            const colors = [
                "#00ffd5",
                "#ff4ecd",
                "#ffe66d",
                "#7aa7ff",
                "#ffffff"
            ];

            for (let i = 0; i < 120; i++) {
                const confetti = document.createElement("div");

                confetti.className = "hp-confetti";
                confetti.style.left = Math.random() * 100 + "%";
                confetti.style.background =
                    colors[Math.floor(Math.random() * colors.length)];

                confetti.style.animationDuration =
                    (2 + Math.random() * 3) + "s";

                confetti.style.animationDelay =
                    Math.random() * .8 + "s";

                overlay.appendChild(confetti);

                setTimeout(() => confetti.remove(), 5500);
            }
        }

        function playSound() {
            try {
                const AudioContext =
                    window.AudioContext ||
                    window.webkitAudioContext;

                if (!AudioContext) return;

                const ctx = new AudioContext();
                const notes = [523.25, 659.25, 783.99, 1046.5];

                notes.forEach((frequency, index) => {
                    const oscillator = ctx.createOscillator();
                    const gain = ctx.createGain();

                    const startTime =
                        ctx.currentTime + index * 0.12;

                    oscillator.type = "sine";
                    oscillator.frequency.value = frequency;

                    gain.gain.setValueAtTime(0, startTime);
                    gain.gain.linearRampToValueAtTime(
                        0.12,
                        startTime + 0.03
                    );
                    gain.gain.exponentialRampToValueAtTime(
                        0.001,
                        startTime + 0.35
                    );

                    oscillator.connect(gain);
                    gain.connect(ctx.destination);

                    oscillator.start(startTime);
                    oscillator.stop(startTime + 0.4);
                });

                setTimeout(() => ctx.close(), 1500);
            } catch (_) {
                // Audio is optional.
            }
        }
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
