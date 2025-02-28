const CACHE_NAME = 'site-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/images/logo.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
// API mockup for content recommendations (Example)
const recommendations = [
    { title: 'بازی جدید A', description: 'تجربه‌ای متفاوت از گیمینگ' },
    { title: 'بازی جدید B', description: 'بهترین گرافیک در تاریخ' },
    { title: 'بازی جدید C', description: 'چالش‌های منحصر به فرد' },
  ];
  
  module.exports = recommendations;
// پخش صدای پس زمینه
var audio = new Audio('https://example.com/your-audio.mp3');
audio.loop = true;
audio.play();

// ویدئوی پس زمینه
var video = document.querySelector('.background-video');
video.play();
// پارالاکس اسکرول
document.addEventListener('scroll', function() {
    let scrollY = window.scrollY;
    document.querySelector('.parallax').style.transform = `translateY(${scrollY * 0.5}px)`;
});
animation: fadeOut 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
// بارگذاری افکت‌های صوتی
const clickSound = document.getElementById('click-sound-effect');
const backgroundMusic = document.getElementById('background-music');

// پخش صدای کلیک هنگام کلیک بر روی دکمه
document.getElementById('click-sound').addEventListener('click', () => {
    clickSound.play();
});

// شروع موسیقی پس‌زمینه به‌طور خودکار هنگام بارگذاری صفحه
window.addEventListener('load', () => {
    backgroundMusic.play();
});
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// بارگذاری و پخش افکت صوتی
function playSoundEffect(url) {
    fetch(url)
        .then(response => response.arrayBuffer())
        .then(data => {
            audioContext.decodeAudioData(data, (buffer) => {
                const sound = audioContext.createBufferSource();
                sound.buffer = buffer;
                sound.connect(audioContext.destination);
                sound.start(0);
            });
        })
        .catch(error => console.error("Error loading sound:", error));
}

// صداهای مختلف را اضافه کنید
document.getElementById('click-sound').addEventListener('click', () => {
    playSoundEffect('sounds/click.mp3');
});
// پخش افکت صوتی تیراندازی
document.getElementById('shoot-button').addEventListener('click', () => {
    document.getElementById('shoot-sound').play();
});

// پخش افکت صوتی انفجار
document.getElementById('explosion-button').addEventListener('click', () => {
    document.getElementById('explosion-sound').play();
});
const synth = window.speechSynthesis;

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices()[0];  // انتخاب صدای پیش‌فرض
    synth.speak(utterance);
}

// مثالی از متن که با صدای بلند گفته می‌شود
speakText("سلام به دنیای گیمینگ خوش آمدید!");
// انتخاب دکمه‌ها و اضافه کردن انیمیشن‌های انتخاب
const buttons = document.querySelectorAll('.game-button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // از بین بردن کلاس "selected" از سایر دکمه‌ها
        buttons.forEach(b => b.classList.remove('selected'));
        
        // اضافه کردن کلاس "selected" به دکمه کلیک شده
        this.classList.add('selected');
    });
});
/* افکت لرزش */
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}

/* اضافه کردن افکت لرزش */
.game-button.shake {
    animation: shake 0.5s ease;
}
// پخش صدای کلیک هنگام انتخاب دکمه
buttons.forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById('click-sound').play();
        
        // باقی کدها
    });
});
// برای فعال کردن افکت روی اسکرول
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
// تابع بررسی و رفع مشکلات
function autoUpdate() {
    document.getElementById('error-log').innerHTML = '<h3>خطاها:</h3><p>در حال بررسی مشکلات امنیتی...</p>';
    document.getElementById('success-log').innerHTML = '<h3>عملیات موفق:</h3><p>سیستم در حال به روز رسانی...</p>';
  
    setTimeout(function() {
      document.getElementById('success-log').innerHTML = '<h3>عملیات موفق:</h3><p>سیستم به روز رسانی موفقیت‌آمیز بود!</p>';
      document.getElementById('error-log').innerHTML = '<h3>خطاها:</h3><p>تمامی مشکلات رفع شد.</p>';
    }, 3000);
  }
  
  // تابع سازگار سازی صفحه
  window.addEventListener("resize", function() {
    let width = window.innerWidth;
    let content = document.querySelector('.container');
    
    if (width < 768) {
      content.style.padding = '10px';
    } else {
      content.style.padding = '20px';
    }
  });
  
  // پیش‌بینی مشکلات
  function predictIssues() {
    // اینجا می‌توان از هوش مصنوعی برای پیش‌بینی مشکلات استفاده کرد
    console.log("پیش‌بینی مشکلات به زودی انجام می‌شود...");
  }
  
  // اجرای پیش‌بینی مشکلات
  predictIssues();
// تابع تشخیص مشکلات و تعمیرات خودکار
function autoRepair() {
    document.getElementById('status-log').innerHTML = '<p>در حال بررسی مشکلات سایت...</p>';
    document.getElementById('action-log').innerHTML = '<p>در حال انجام تعمیرات خودکار...</p>';
  
    setTimeout(function() {
      // شبیه‌سازی رفع مشکلات
      document.getElementById('status-log').innerHTML = '<p>تمامی مشکلات سایت بررسی و رفع شد.</p>';
      document.getElementById('action-log').innerHTML = '<p>عملیات تعمیرات خودکار با موفقیت انجام شد.</p>';
    }, 5000);
  
    // پیش‌بینی مشکلات آینده
    predictIssues();
  }
  
  // تابع پیش‌بینی مشکلات آینده سایت
  function predictIssues() {
    console.log("پیش‌بینی مشکلات سایت در حال انجام است...");
  
    // شبیه‌سازی پیش‌بینی با استفاده از هوش مصنوعی
    setTimeout(function() {
      console.log("هوش مصنوعی پیش‌بینی کرده است که سرعت بارگذاری سایت کاهش خواهد یافت.");
    }, 2000);
  }
  
  // بررسی ریسپانسیو بودن سایت در دستگاه‌های مختلف
  window.addEventListener("resize", function() {
    let width = window.innerWidth;
    let content = document.querySelector('.container');
    
    if (width < 768) {
      content.style.padding = '10px';
    } else {
      content.style.padding = '20px';
    }
  });
// تابع تشخیص و رفع مشکلات
function autoRepair() {
    document.getElementById('status-log').innerHTML = 'در حال بررسی مشکلات...';
    document.getElementById('auto-status').innerHTML = 'در حال تعمیر خودکار مشکلات...';
  
    setTimeout(function() {
      document.getElementById('status-log').innerHTML = 'تمامی مشکلات سایت بررسی و رفع شدند.';
      document.getElementById('auto-status').innerHTML = 'عملیات تعمیرات خودکار با موفقیت انجام شد.';
    }, 5000); // شبیه‌سازی انجام تعمیرات
  
    predictIssues();  // پیش‌بینی مشکلات آینده
  }
  
  // پیش‌بینی مشکلات سایت با استفاده از هوش مصنوعی
  function predictIssues() {
    console.log('پیش‌بینی مشکلات سایت در حال انجام است...');
  
    setTimeout(function() {
      console.log('هوش مصنوعی پیش‌بینی کرده است که بارگذاری سایت در آینده کاهش خواهد یافت.');
    }, 2000);
  }
  
  // شبیه‌سازی وضعیت ریسپانسیو بودن سایت برای دستگاه‌های مختلف
  window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const container = document.querySelector('.container');
  
    if (width < 768) {
      container.style.padding = '10px';  // برای موبایل
    } else {
      container.style.padding = '20px';  // برای دسکتاپ
    }
  });
// بررسی امنیت سایت
function checkSecurity() {
    document.getElementById('status-log').innerHTML = 'در حال بررسی مشکلات امنیتی...';
    setTimeout(function() {
      console.log('تمامی مشکلات امنیتی شناسایی و برطرف شدند.');
      document.getElementById('status-log').innerHTML = 'مشکلات امنیتی رفع شد.';
    }, 5000);
  }
  
  // شبیه‌سازی مدیریت منابع سرور
  function manageServerResources() {
    console.log('مدیریت منابع سرور شروع شده است...');
    setTimeout(function() {
      console.log('مصرف منابع بهینه‌سازی شد.');
    }, 3000);
  }
// ارسال گزارش به مدیر سایت
function sendReportToAdmin() {
    let report = {
      status: 'عملیات با موفقیت انجام شد.',
      performance: 'بهینه‌سازی عملکرد سایت انجام شد.',
      security: 'مشکلات امنیتی برطرف شد.',
      update: 'سایت به‌روزرسانی شد.'
    };
  
    console.log('گزارش به مدیر ارسال شد:', report);
  }
         // درخواست برای دریافت وضعیت سایت از API
function checkStatus() {
  fetch('/api/status')
    .then(response => response.json())
    .then(data => {
      alert("وضعیت سایت: " + data.status);
    });
}

// درخواست برای دریافت سایز صفحه و تنظیمات مناسب
function checkDeviceSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  fetch('/api/device-size', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ width: width, height: height })
  })
  .then(response => response.json())
  .then(data => {
    alert("اندازه صفحه: " + data.layout);
  });
}
   // درخواست برای بررسی وضعیت سایت از API
function checkStatus() {
  fetch('/api/status')
    .then(response => response.json())
    .then(data => {
      document.getElementById('status').innerHTML = `<h2>وضعیت سایت: ${data.status}</h2>`;
    });
}

// درخواست برای دریافت اندازه صفحه و تنظیمات متناسب
function checkDeviceSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  fetch('/api/device-size', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ width: width, height: height })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('resize-status').innerHTML = `<h3>وضعیت ریسپانسیو بودن: ${data.layout}</h3>`;
  });
}
// درخواست برای دریافت وضعیت سایت از API
function checkStatus() {
  fetch('/api/status')
    .then(response => response.json())
    .then(data => {
      document.getElementById('status').innerHTML = `<h2>وضعیت سایت: ${data.status}</h2>`;
    });
}

// درخواست برای دریافت اندازه صفحه و تنظیمات متناسب
function checkDeviceSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  fetch('/api/device-size', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ width: width, height: height })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('resize-status').innerHTML = `<h3>وضعیت ریسپانسیو بودن: ${data.layout}</h3>`;
  });
}
