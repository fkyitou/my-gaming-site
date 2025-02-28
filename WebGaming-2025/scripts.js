<script>
    // متغیرها برای صدا و کنترل‌های آن
    const audioElement = document.getElementById('background-music');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const increaseVolumeButton = document.getElementById('increaseVolumeButton');
    const decreaseVolumeButton = document.getElementById('decreaseVolumeButton');

    // پخش و توقف صدا با دکمه‌ها
    playButton.addEventListener('click', function() {
        audioElement.play();
    });

    pauseButton.addEventListener('click', function() {
        audioElement.pause();
    });

    // افزایش و کاهش حجم صدا
    increaseVolumeButton.addEventListener('click', function() {
        if (audioElement.volume < 1) {
            audioElement.volume += 0.1; // افزایش حجم صدا
        }
    });

    decreaseVolumeButton.addEventListener('click', function() {
        if (audioElement.volume > 0) {
            audioElement.volume -= 0.1; // کاهش حجم صدا
        }
    });

    // استفاده از Web Audio API برای افکت‌های صوتی پیشرفته
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audioElement);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    // افکت‌های صوتی پیشرفته (ایجاد نمای صوتی از گرافیک)
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function visualize() {
        analyser.getByteFrequencyData(dataArray);
        // پردازش داده‌های صوتی (نمایش گرافیک و...)
        requestAnimationFrame(visualize);
    }
    visualize();

    // قطع صدا پس از لود کامل صفحه
    window.onload = function() {
        audioElement.play();  // اطمینان از پخش خودکار صدا پس از لود صفحه
    };

        // بعد از بارگذاری کامل صفحه، صفحه لودینگ را مخفی کنیم
        window.onload = function() {
            setTimeout(function() {
                document.getElementById('loading-screen').style.display = 'none';
                document.querySelector('.content').style.display = 'block';
            }, 3000); // صفحه لودینگ برای 3 ثانیه نمایش داده می‌شود
        };
    
            window.onload = function() {
                document.querySelector("video").play();
            };
        
        function chatResponse() {
            let question = document.getElementById("chatInput").value;
            document.getElementById("chatResponse").innerText = "Processing...";
            setTimeout(() => {
                document.getElementById("chatResponse").innerText = "AI Response: " + question;
            }, 1500);
        }
        
        $(document).ready(function() {
            $("#loginForm").submit(function(event) {
                event.preventDefault();
                let username = $("#username").val();
                let password = $("#password").val();
                if (username === "amirhosinehemmati" && password === "2222") {
                    $("#login-message").html("Login successful! Redirecting...");
                    setTimeout(() => {
                        window.location.href = "https://ultimate-gaming-world.com";
                    }, 2000);
                } else {
                    $("#login-message").html("Invalid credentials. Please try again.");
                }
            });
        });
    
        document.addEventListener("DOMContentLoaded", function() {
            gsap.from(".glow-text", {opacity: 0, y: -50, duration: 1.5, ease: "power2.out"});
            gsap.from(".cyber-button", {opacity: 0, scale: 0.5, duration: 0.8, stagger: 0.2, ease: "power2.out"});
            gsap.to(".animated-bg", {background: "linear-gradient(45deg, #ff00ff, #0000ff)", duration: 3, repeat: -1, yoyo: true});
            gsap.from(".neon-text", {textShadow: "0 0 20px #fff", duration: 2, repeat: -1, yoyo: true});
        });
     
        document.addEventListener("DOMContentLoaded", function() {
            gsap.from(".glow-text", {opacity: 0, y: -50, duration: 1.5, ease: "power2.out"});
            gsap.from(".cyber-button", {opacity: 0, scale: 0.5, duration: 0.8, stagger: 0.2, ease: "power2.out"});
        });
    function detectDevice() {
  const ua = navigator.userAgent;
  
  if (/android/i.test(ua)) {
    return 'android';
  } else if (/iphone|ipad|ipod/i.test(ua)) {
    return 'ios';
  } else if (/windows phone/i.test(ua)) {
    return 'windows';
  } else if (/macintosh|mac os x/i.test(ua)) {
    return 'mac';
  } else {
    return 'desktop';
  }
}

const device = detectDevice();
console.log(device); // نوع دیوایس شناسایی شده

// بر اساس نوع دیوایس می‌تونی استایل‌ها یا تنظیمات خاصی رو اعمال کنی
if (device === 'android' || device === 'ios') {
  document.body.style.fontSize = "14px"; // تنظیمات موبایل
} else {
  document.body.style.fontSize = "16px"; // تنظیمات دسکتاپ
}
window.addEventListener('resize', function() {
    let width = window.innerWidth;
    
    if (width <= 767) {
      document.body.style.fontSize = "14px"; // برای موبایل
    } else if (width <= 1024) {
      document.body.style.fontSize = "16px"; // برای تبلت
    } else {
      document.body.style.fontSize = "18px"; // برای دسکتاپ
    }
  });
  
  // وقتی که صفحه لود میشه
  window.dispatchEvent(new Event('resize'));
  // تغییر بین حالت شب و روز
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // ذخیره وضعیت حالت شب در localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});

// بارگذاری حالت شب از localStorage در زمان لود صفحه
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
// پخش و توقف صدا
const audioElement = new Audio('background-music.mp3');
audioElement.loop = true; // پخش مداوم

const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

playButton.addEventListener('click', () => {
    audioElement.play();
});

pauseButton.addEventListener('click', () => {
    audioElement.pause();
});

// تغییر حجم صدا
const increaseVolumeButton = document.getElementById('increaseVolumeButton');
const decreaseVolumeButton = document.getElementById('decreaseVolumeButton');

increaseVolumeButton.addEventListener('click', () => {
    if (audioElement.volume < 1) {
        audioElement.volume += 0.1;
    }
});

decreaseVolumeButton.addEventListener('click', () => {
    if (audioElement.volume > 0) {
        audioElement.volume -= 0.1;
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'amirhosinehemmati' && password === '2222') {
        document.getElementById('login-message').innerText = "Login successful!";
        setTimeout(() => {
            window.location.href = "https://ultimate-gaming-world.com";
        }, 2000); // بعد از 2 ثانیه به سایت جدید هدایت می‌کند
    } else {
        document.getElementById('login-message').innerText = "Invalid credentials. Please try again.";
    }
});
// تصویرها را فقط زمانی که به نمایش در می‌آیند، بارگذاری کن
const lazyImages = document.querySelectorAll('img.lazy');

const lazyLoad = () => {
    lazyImages.forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight) {
            image.src = image.dataset.src;
            image.classList.remove('lazy');
        }
    });
};

window.addEventListener('scroll', lazyLoad);
window.addEventListener('load', lazyLoad);
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    
    if (width <= 767) {
        // موبایل
        document.body.style.fontSize = '14px';
    } else if (width <= 1024) {
        // تبلت
        document.body.style.fontSize = '16px';
    } else {
        // دسکتاپ
        document.body.style.fontSize = '18px';
    }
});

// در زمان بارگذاری صفحه
window.dispatchEvent(new Event('resize'));
document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".glow-text", { opacity: 0, y: -50, duration: 1.5, ease: "power2.out" });
    gsap.from(".cyber-button", { opacity: 0, scale: 0.5, duration: 0.8, stagger: 0.2, ease: "power2.out" });
    gsap.to(".animated-bg", { background: "linear-gradient(45deg, #ff00ff, #0000ff)", duration: 3, repeat: -1, yoyo: true });
    gsap.from(".neon-text", { textShadow: "0 0 20px #fff", duration: 2, repeat: -1, yoyo: true });
});
function detectDevice() {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
        return 'android';
    } else if (/iphone|ipad|ipod/i.test(ua)) {
        return 'ios';
    } else if (/windows phone/i.test(ua)) {
        return 'windows';
    } else if (/macintosh|mac os x/i.test(ua)) {
        return 'mac';
    } else {
        return 'desktop';
    }
}

const device = detectDevice();
console.log(device); // نوع دستگاه شناسایی شده

// بر اساس دستگاه تنظیمات مختلف
if (device === 'android' || device === 'ios') {
    document.body.style.fontSize = '14px'; // موبایل
} else {
    document.body.style.fontSize = '16px'; // دسکتاپ
}
window.onload = function() {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 3000); // 3 ثانیه لودینگ نمایش داده می‌شود
};
function chatResponse() {
    const question = document.getElementById("chatInput").value;
    document.getElementById("chatResponse").innerText = "Processing...";

    setTimeout(() => {
        document.getElementById("chatResponse").innerText = "AI Response: " + question;
    }, 1500); // 1.5 ثانیه تا پاسخ بیاد
}
const lazyImages = document.querySelectorAll('img.lazy');

const lazyLoad = () => {
    lazyImages.forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight) {
            image.src = image.dataset.src;
            image.classList.remove('lazy');
        }
    });
};

window.addEventListener('scroll', lazyLoad);
window.addEventListener('load', lazyLoad);
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(registration => console.log('Service Worker registered', registration))
    .catch(error => console.log('Service Worker registration failed', error));
  }
  document.getElementById('search').addEventListener('input', function(e) {
    const query = e.target.value;
    // Call API or search functionality for auto-completion
});
gsap.from(".hero-image", { opacity: 0, y: 50, duration: 1 });
gsap.to(".glow-text", { opacity: 1, textShadow: "0 0 20px #ff00ff", duration: 2, repeat: -1, yoyo: true });
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// بارگذاری حالت شب از localStorage در زمان لود صفحه
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    
    if (width <= 767) {
        document.body.style.fontSize = '14px'; // موبایل
    } else if (width <= 1024) {
        document.body.style.fontSize = '16px'; // تبلت
    } else {
        document.body.style.fontSize = '18px'; // دسکتاپ
    }
});

// در زمان بارگذاری صفحه
window.dispatchEvent(new Event('resize'));
const sanitizeInput = (input) => {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
};
// در صورتی که از سرویس Tawk.to استفاده می‌کنید:
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/your_tawk_id/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
const recommendedArticles = (userHistory) => {
    // فرض کنید userHistory یک آرایه از مقالات قبلی است که کاربر مشاهده کرده
    const recommendations = fetch(`/api/recommendations?history=${userHistory}`)
        .then(response => response.json())
        .then(data => {
            // نمایش پیشنهادات
            displayRecommendations(data);
        });
};
fetch('/api/news')
    .then(response => response.json())
    .then(data => {
        const newsSection = document.getElementById('latest-news');
        data.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h3>${news.title}</h3>
                <p>${news.description}</p>
            `;
            newsSection.appendChild(newsItem);
        });
    });
// استفاده از WebAssembly برای پردازش سریع
fetch('module.wasm').then(response => response.arrayBuffer()).then(bytes => {
    WebAssembly.instantiate(bytes).then(module => {
        console.log("Wasm module loaded!");
        // استفاده از ماژول WebAssembly
    });
});
// Service Worker برای PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('Service Worker registered with scope: ', registration.scope);
    }).catch(function(error) {
        console.log('Service Worker registration failed: ', error);
    });
}
// انیمیشن‌های پیشرفته با GSAP
gsap.from(".feature-box", { opacity: 0, scale: 0.5, duration: 1.5 });
gsap.to(".background", { backgroundPosition: "100% 100%", duration: 10, repeat: -1, yoyo: true });
// طراحی شخصی‌شده با استفاده از Machine Learning
const userPreferences = getUserPreferences();
applyCustomDesign(userPreferences);
<img src="image-small.jpg" srcset="image-large.jpg 1024w, image-medium.jpg 768w, image-small.jpg 320w" sizes="(max-width: 1024px) 100vw, 50vw" alt="Responsive image">
// اعتبارسنجی ورودی‌ها
const sanitizeInput = (input) => {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
};
fetch('/api/endpoint', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});
// چت بات با استفاده از هوش مصنوعی
async function getChatbotResponse(userInput) {
    const response = await fetch('/api/chatbot', {
        method: 'POST',
        body: JSON.stringify({ message: userInput }),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data.response;
}
// سیستم پیشنهاد دهنده بر اساس یادگیری ماشین
async function getRecommendations(userId) {
    const response = await fetch(`/api/recommendations?userId=${userId}`);
    const recommendations = await response.json();
    displayRecommendations(recommendations);
}
// GraphQL Query برای دریافت داده‌ها
const query = `{
    articles {
        title
        content
    }
}`;

fetch('/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
})
.then(response => response.json())
.then(data => console.log(data));
// تنظیمات اولیه
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const navItems = header.querySelectorAll('a');
  
    // انیمیشن ساده در بارگذاری
    gsap.from(header, { opacity: 0, y: -50, duration: 1 });
  
    // تغییرات طراحی بر اساس دستگاه
    adjustLayoutBasedOnDevice();
  
    // رویدادهای مختلف در سایت
    navItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        gsap.to(item, { scale: 1.1, duration: 0.3 });
      });
  
      item.addEventListener('mouseout', () => {
        gsap.to(item, { scale: 1, duration: 0.3 });
      });
    });
  });
  
  // تشخیص نوع دستگاه
  function detectDevice() {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      return 'android';
    } else if (/iphone|ipad|ipod/i.test(ua)) {
      return 'ios';
    } else if (/windows phone/i.test(ua)) {
      return 'windows';
    } else if (/macintosh|mac os x/i.test(ua)) {
      return 'mac';
    } else {
      return 'desktop';
    }
  }
  
  // تنظیمات خودکار بر اساس نوع دستگاه
  function adjustLayoutBasedOnDevice() {
    const device = detectDevice();
    if (device === 'android' || device === 'ios') {
      document.body.style.fontSize = '14px'; // موبایل
    } else {
      document.body.style.fontSize = '16px'; // دسکتاپ
    }
  }
  
  // بارگذاری محتوای دینامیک با Fetch API
  async function loadContent() {
    try {
      const response = await fetch('/api/recommendations');
      const data = await response.json();
      displayRecommendations(data);
    } catch (error) {
      console.error('Error loading content:', error);
    }
  }
  
  function displayRecommendations(data) {
    const container = document.getElementById('recommendations');
    data.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('recommendation-item');
      div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
      container.appendChild(div);
    });
  }
  
  // صدا و کنترل‌های آن
  const audioElement = document.getElementById('background-music');
  document.getElementById('playButton').addEventListener('click', () => audioElement.play());
  document.getElementById('pauseButton').addEventListener('click', () => audioElement.pause());
    // انیمیشن ورود المان‌ها به صفحه با GSAP
gsap.from(".feature", { opacity: 0, x: -200, duration: 1, stagger: 0.3 });
gsap.to(".background", { backgroundPosition: "100% 100%", duration: 10, repeat: -1, yoyo: true });
/* دکمه با انیمیشن */
button {
    background-color: #ff00ff;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  button:hover {
    background-color: #0000ff;
    transform: scale(1.1);
  }
// درخواست ورود امن با JWT
async function login(username, password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
    } else {
      alert('Login failed');
    }
  }
// تنظیم HSTS در سرور
// (بسته به پیکربندی سرور شما این تنظیمات انجام می‌شود)
const lazyImages = document.querySelectorAll('img.lazy');
const lazyLoad = () => {
  lazyImages.forEach(image => {
    if (image.getBoundingClientRect().top < window.innerHeight) {
      image.src = image.dataset.src;
      image.classList.remove('lazy');
    }
  });
};
window.addEventListener('scroll', lazyLoad);
window.addEventListener('load', lazyLoad);
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const audioElement = document.getElementById('background-music');
    
    // پخش و توقف صدا
    playButton.addEventListener('click', function() {
      audioElement.play();
    });
    
    pauseButton.addEventListener('click', function() {
      audioElement.pause();
    });
  
    // بارگذاری محتوای توصیه‌ها از API (نمونه)
    loadContent();
  
    // تشخیص دستگاه و اعمال تنظیمات
    adjustLayoutBasedOnDevice();
  
    // تنظیمات تعاملات کاربری
    setupButtonAnimations();
  });
  
  // بارگذاری محتوای توصیه‌ها از سرور (API)
  async function loadContent() {
    try {
      const response = await fetch('/api/recommendations');
      const data = await response.json();
      displayRecommendations(data);
    } catch (error) {
      console.error('Error loading content:', error);
    }
  }
  
  function displayRecommendations(data) {
    const recommendationsContainer = document.getElementById('recommendations');
    data.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('recommendation-item');
      div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
      recommendationsContainer.appendChild(div);
    });
  }
  
  // تنظیمات خودکار بر اساس نوع دستگاه
  function adjustLayoutBasedOnDevice() {
    const ua = navigator.userAgent;
    if (/android/i.test(ua) || /iphone|ipad|ipod/i.test(ua)) {
      document.body.style.fontSize = '14px'; // تنظیمات موبایل
    } else {
      document.body.style.fontSize = '18px'; // تنظیمات دسکتاپ
    }
  }
  
  // انیمیشن برای دکمه‌ها
  function setupButtonAnimations() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
      });
      button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
      });
    });
  }
<script>
    // متغیرها برای صدا و کنترل‌های آن
    const audioElement = document.getElementById('background-music');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const increaseVolumeButton = document.getElementById('increaseVolumeButton');
    const decreaseVolumeButton = document.getElementById('decreaseVolumeButton');

    // پخش و توقف صدا با دکمه‌ها
    playButton.addEventListener('click', function() {
        audioElement.play();
    });

    pauseButton.addEventListener('click', function() {
        audioElement.pause();
    });

    // افزایش و کاهش حجم صدا
    increaseVolumeButton.addEventListener('click', function() {
        if (audioElement.volume < 1) {
            audioElement.volume += 0.1; // افزایش حجم صدا
        }
    });

    decreaseVolumeButton.addEventListener('click', function() {
        if (audioElement.volume > 0) {
            audioElement.volume -= 0.1; // کاهش حجم صدا
        }
    });

    // استفاده از Web Audio API برای افکت‌های صوتی پیشرفته
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audioElement);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    // افکت‌های صوتی پیشرفته (ایجاد نمای صوتی از گرافیک)
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function visualize() {
        analyser.getByteFrequencyData(dataArray);
        // پردازش داده‌های صوتی (نمایش گرافیک و...)
        requestAnimationFrame(visualize);
    }
    visualize();

    // قطع صدا پس از لود کامل صفحه
    window.addEventListener('load', function() {
        // جلوگیری از پخش خودکار در برخی مرورگرها
        document.getElementById('loading-screen').style.display = 'none';
        document.querySelector('.content').style.display = 'block';

        // فقط در صورت نیاز پخش صدا را شروع کن
        playButton.addEventListener('click', () => audioElement.play());
    });

    // تابع تشخیص دستگاه
    function detectDevice() {
        const ua = navigator.userAgent;
        if (/android/i.test(ua)) {
            return 'android';
        } else if (/iphone|ipad|ipod/i.test(ua)) {
            return 'ios';
        } else if (/windows phone/i.test(ua)) {
            return 'windows';
        } else if (/macintosh|mac os x/i.test(ua)) {
            return 'mac';
        } else {
            return 'desktop';
        }
    }

    const device = detectDevice();
    console.log(device); // نوع دیوایس شناسایی شده

    // بر اساس نوع دیوایس می‌تونی استایل‌ها یا تنظیمات خاصی رو اعمال کنی
    if (device === 'android' || device === 'ios') {
        document.body.style.fontSize = "14px"; // تنظیمات موبایل
    } else {
        document.body.style.fontSize = "16px"; // تنظیمات دسکتاپ
    }

    // تنظیم اندازه صفحه بر اساس سایز پنجره
    window.addEventListener('resize', function() {
        let width = window.innerWidth;
        if (width <= 767) {
            document.body.style.fontSize = "14px"; // برای موبایل
        } else if (width <= 1024) {
            document.body.style.fontSize = "16px"; // برای تبلت
        } else {
            document.body.style.fontSize = "18px"; // برای دسکتاپ
        }
    });
  
    // وقتی که صفحه لود میشه
    window.dispatchEvent(new Event('resize'));

    // دستورات gsap برای انیمیشن‌ها
    document.addEventListener("DOMContentLoaded", function() {
        gsap.from(".glow-text", {opacity: 0, y: -50, duration: 1.5, ease: "power2.out"});
        gsap.from(".cyber-button", {opacity: 0, scale: 0.5, duration: 0.8, stagger: 0.2, ease: "power2.out"});
        gsap.to(".animated-bg", {background: "linear-gradient(45deg, #ff00ff, #0000ff)", duration: 3, repeat: -1, yoyo: true});
        gsap.from(".neon-text", {textShadow: "0 0 20px #fff", duration: 2, repeat: -1, yoyo: true});
    });

    // فرم ورود
    $(document).ready(function() {
        $("#loginForm").submit(function(event) {
            event.preventDefault();
            let username = $("#username").val();
            let password = $("#password").val();
            if (username === "amirhosinehemmati" && password === "2222") {
                $("#login-message").html("Login successful! Redirecting...");
                setTimeout(() => {
                    window.location.href = "https://ultimate-gaming-world.com";
                }, 2000);
            } else {
                $("#login-message").html("Invalid credentials. Please try again.");
            }
        });
    });

    // پاسخ به چت
    function chatResponse() {
        let question = document.getElementById("chatInput").value;
        document.getElementById("chatResponse").innerText = "Processing...";
        setTimeout(() => {
            document.getElementById("chatResponse").innerText = "AI Response: " + question;
        }, 1500);
    }
</script>
// دکمه "بازگشت به بالا"
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// اسکرول به بالا
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ربات چت هوش مصنوعی
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatOutput = document.getElementById("chatOutput");

    // ارسال پیام کاربر به ربات
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("user-message");
    messageDiv.textContent = userInput;
    chatOutput.appendChild(messageDiv);

    // شبیه‌سازی پاسخ ربات
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message");
    botMessageDiv.textContent = "پاسخ ربات: " + userInput;
    chatOutput.appendChild(botMessageDiv);

    // پاک کردن ورودی
    document.getElementById("userInput").value = "";
}
// دکمه "بازگشت به بالا"
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// اسکرول به بالا
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ربات چت هوش مصنوعی
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatOutput = document.getElementById("chatOutput");

    if (userInput.trim() === "") {
        return;
    }

    // نمایش پیام کاربر
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("user-message");
    userMessageDiv.textContent = userInput;
    chatOutput.appendChild(userMessageDiv);

    // شبیه‌سازی پاسخ ربات
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message");

    // نمونه‌ای از پاسخ‌های ربات
    let botResponse = "من نمی‌توانم این را متوجه شوم.";
    if (userInput.toLowerCase().includes("سلام")) {
        botResponse = "سلام! چطور می‌توانم به شما کمک کنم؟";
    } else if (userInput.toLowerCase().includes("خبر")) {
        botResponse = "اخبار جدید گیمینگ را بررسی کنید!";
    }

    botMessageDiv.textContent = botResponse;
    chatOutput.appendChild(botMessageDiv);

    // اسکرول به پایین
    chatOutput.scrollTop = chatOutput.scrollHeight;

    // پاک کردن ورودی
    document.getElementById("userInput").value = "";
}
const canvas = document.getElementById('gamingCanvas');
const ctx = canvas.getContext('2d');

let x = 0;
let y = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // پاک کردن صفحه
  ctx.fillStyle = '#ff0080';
  ctx.fillRect(x, y, 50, 50); // ایجاد مربع
  x += 2; // حرکت به سمت راست
  y += 2; // حرکت به سمت پایین

  if (x > canvas.width) x = 0; // بازگشت به نقطه شروع
  if (y > canvas.height) y = 0;

  requestAnimationFrame(draw); // انیمیشن ادامه پیدا کند
}

draw();
// جاوا اسکریپت برای ایجاد افکت‌های حرکت موس
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = `${e.clientY - 10}px`;
    cursor.style.left = `${e.clientX - 10}px`;
});

document.addEventListener('mouseover', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.classList.add('active');
});

document.addEventListener('mouseout', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.classList.remove('active');
});
<canvas id="gameCanvas" width="800" height="600"></canvas>
<script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    let circleX = 0;
    let circleY = 0;
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // پاک کردن صفحه
        ctx.beginPath();
        ctx.arc(circleX, circleY, 30, 0, Math.PI * 2, false);
        ctx.fillStyle = '#ff0080';
        ctx.fill();
        circleX += 2; // حرکت به سمت راست
        circleY += 2; // حرکت به سمت پایین

        if (circleX > canvas.width) circleX = 0; // بازگشت به نقطه شروع
        if (circleY > canvas.height) circleY = 0;

        requestAnimationFrame(animate); // ادامه انیمیشن
    }

    animate();
</script>
text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
box-shadow: 0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080;
transition: box-shadow 0.3s ease-in-out;
@keyframes glow {
    0% { box-shadow: 0 0 10px #ff0080, 0 0 20px #ff0080; }
    50% { box-shadow: 0 0 50px #ff0044, 0 0 100px #ff0044; }
    100% { box-shadow: 0 0 10px #ff0080, 0 0 20px #ff0080; }
  }
  button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
  }
  @keyframes slideUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  section {
    animation: slideUp 1s ease-out;
  }
@keyframes moveBackground {
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
}
.hero-section {
  background: url('hero-background.jpg') center/cover no-repeat;
  animation: moveBackground 10s linear infinite;
}
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="20" fill="none" stroke="#ff0080" stroke-width="5">
    <animate attributeName="r" from="20" to="30" dur="0.5s" repeatCount="indefinite" />
  </circle>
</svg>
<canvas id="gameCanvas" width="800" height="600"></canvas>
<script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    let circleX = 50, circleY = 50, radius = 30;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ff0080';
        ctx.fill();
        circleX += 1;
        radius += Math.sin(circleX * 0.1) * 2;

        requestAnimationFrame(animate);
    }

    animate();
</script>
document.querySelector('button').addEventListener('mousemove', (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.target.style.transform = `rotate(${x / 10}deg) translate(${x / 2}px, ${y / 2}px)`;
});
            
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="20" fill="none" stroke="#ff0066" stroke-width="5">
    <animate attributeName="r" from="20" to="30" dur="0.5s" repeatCount="indefinite" />
  </circle>
</svg>
let text = "Welcome to the Gaming World!";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("dynamic-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
<canvas id="gameCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  let x = canvas.width / 2;
  let y = canvas.height - 30;
  let dx = 2;
  let dy = -2;

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#ff0066';
    ctx.fill();
    ctx.closePath();
  }

  function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    if (x + dx > canvas.width || x + dx < 0) {
      dx = -dx;
    }
    if (y + dy > canvas.height || y + dy < 0) {
      dy = -dy;
    }
    requestAnimationFrame(updateGame);
  }

  updateGame();
</script>
<link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
.page-transition {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  .page-transition-loaded {
    opacity: 1;
  }
  @keyframes glow {
    0% {
      text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000;
    }
    50% {
      text-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000;
    }
    100% {
      text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000;
    }
  }
  
  .glowing-text {
    animation: glow 1.5s infinite;
  }
gsap.from(".element", { duration: 1, x: -100, opacity: 0 });
.glowing-button {
  background: #ff6600;
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
}

.glowing-button:hover {
  background: #ff0033;
  box-shadow: 0 0 15px #ff0033, 0 0 20px #ff0033;
  transform: scale(1.1);
}
gsap.from(".content", { duration: 1, opacity: 0, y: 50 });
gsap.to(".content", { duration: 1, opacity: 1, y: 0 });
nav ul li a:hover {
  color: #ffd700;
  background-color: #333;
  transition: background-color 0.3s ease-in-out;
}
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
@keyframes bgAnimation {
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
}

.animated-background {
  background: linear-gradient(45deg, #ff0066, #33ccff);
  background-size: 200% 200%;
  animation: bgAnimation 10s linear infinite;
}
<canvas id="gameCanvas"></canvas>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("gameCanvas") });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
</script>
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

function animateCamera() {
  camera.position.x = Math.sin(Date.now() * 0.001) * 5;
  camera.position.y = Math.cos(Date.now() * 0.001) * 5;
  camera.lookAt(0, 0, 0);
}

function animate() {
  requestAnimationFrame(animate);
  animateCamera();
  renderer.render(scene, camera);
}

animate();
document.addEventListener('DOMContentLoaded', function () {
    // مخفی کردن صفحه لودینگ پس از بارگذاری محتوا
    setTimeout(function () {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 5000); // 5 ثانیه

    // تغییرات در دکمه ارسال چت
    const button = document.querySelector('.ai-chatbot button');
    button.addEventListener('click', function () {
        const userInput = document.querySelector('.ai-chatbot input').value;
        if (userInput) {
            alert('پاسخ به: ' + userInput); // پاسخ موقتی برای چت بات
            document.querySelector('.ai-chatbot input').value = ''; // پاک کردن فیلد ورودی
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // مخفی کردن صفحه لودینگ پس از بارگذاری محتوا
    setTimeout(function () {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 5000); // 5 ثانیه

    // تغییرات در دکمه ارسال چت
    const button = document.querySelector('.ai-chatbot button');
    button.addEventListener('click', function () {
        const userInput = document.querySelector('.ai-chatbot input').value;
        if (userInput) {
            alert('پاسخ به: ' + userInput); // پاسخ موقتی برای چت بات
            document.querySelector('.ai-chatbot input').value = ''; // پاک کردن فیلد ورودی
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // انیمیشن‌های متنی
    const title = document.querySelector('h1');
    let text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    function typeText() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeText, 100);
        }
    }

    typeText();
    
    // انیمیشن چرخش 3D با استفاده از Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z = 5;
    
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    
    animate();
});
document.addEventListener('DOMContentLoaded', function () {
    // انیمیشن تایپ
    const title = document.querySelector('h1');
    let text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    function typeText() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeText, 100);
        }
    }

    typeText();

    // انیمیشن چرخش 3D با استفاده از Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z = 5;
    
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    
    animate();
});
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
@keyframes neonGlow {
    0% {
        text-shadow: 0 0 5px #ff0044, 0 0 10px #ff0044, 0 0 15px #ff0044;
    }
    50% {
        text-shadow: 0 0 20px #ff0044, 0 0 30px #ff0044, 0 0 40px #ff0044;
    }
    100% {
        text-shadow: 0 0 5px #ff0044, 0 0 10px #ff0044, 0 0 15px #ff0044;
    }
}

h1 {
    animation: neonGlow 1.5s infinite alternate;
}
@keyframes rotate3d {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
/* افکت Fade In */
.element {
  opacity: 0; /* مخفی */
  transition: opacity 1s ease-in-out; /* تغییرات به آرامی */
}

.element.visible {
  opacity: 1; /* ظاهر شدن */
}

/* افکت Fade Out */
.element.hidden {
  opacity: 0; /* مخفی شدن */
}
/* تغییر رنگ و روشنایی */
.element {
  background-color: #333;
  color: #fff;
  opacity: 0.8;
  transition: background-color 0.5s ease, opacity 0.5s ease;
}

.element:hover {
  background-color: #ff6347;  /* رنگ روشن‌تر هنگام hover */
  opacity: 1;  /* افزایش شفافیت */
}
// وقتی صفحه کامل بارگذاری شد، صفحه لودینگ محو شود و محتوای اصلی نمایش یابد
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const content = document.querySelector('.content');

    // محو شدن صفحه لودینگ پس از 3 ثانیه
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // پنهان کردن صفحه لودینگ
        content.style.display = 'block'; // نمایش محتوای اصلی
    }, 3000); // تاخیر 3 ثانیه
});
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script>
    gsap.from(".box", {duration: 2, x: -100, opacity: 0, scale: 0.5});
</script>

<div class="box" style="width: 100px; height: 100px; background-color: red;"></div>
<style>
    .parallax {
        background-image: url('background.jpg');
        height: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

<div class="parallax">
    <h1>سایت گیمینگ</h1>
    <p>تجربه‌ای بی‌نظیر از بازی‌ها</p>
</div>
<style>
    .explosion {
        animation: explosion 0.5s ease-out;
    }

    @keyframes explosion {
        0% {
            transform: scale(0.1);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>

<button class="explosion">انفجار</button>
// Grab the canvas element from HTML
const canvas = document.getElementById('earthCanvas');

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create Earth (Sphere) with detailed texture
const geometry = new THREE.SphereGeometry(1, 64, 64);
const texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/markheath/earth3d/master/images/earthmap1k.jpg');
const normalMap = new THREE.TextureLoader().load('https://raw.githubusercontent.com/markheath/earth3d/master/images/earth_normal_map.jpg');
const material = new THREE.MeshStandardMaterial({
    map: texture,
    normalMap: normalMap,
    emissive: new THREE.Color(0x111111),
    emissiveIntensity: 0.1
});
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// Add Sunlight (simulating the Sun)
const sunLight = new THREE.PointLight(0xffffff, 1.5, 100);
sunLight.position.set(5, 5, 5);
scene.add(sunLight);

// Ambient Light to simulate the environment light
const ambientLight = new THREE.AmbientLight(0x444444);
scene.add(ambientLight);

// Set the camera position
camera.position.z = 5;

// Animation function for the Earth and Sunlight
function animate() {
    requestAnimationFrame(animate);

    // Earth rotation to simulate day and night
    earth.rotation.y += 0.005;

    // Render the scene
    renderer.render(scene, camera);
}

// Start the animation loop
animate();

// Adjust the canvas size on window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
// JavaScript to handle loading and content display
window.addEventListener('load', function () {
    // Hide loading screen after page is fully loaded
    document.querySelector('.loading-screen').style.display = 'none';
    // Show main content
    document.querySelector('.content').style.display = 'block';
});
// Optional JavaScript for enhancing interactivity, such as animations or dynamic content

// Example: Scroll animation effect for header links
document.querySelectorAll('.nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// تعامل با دکمه "شروع کنید"
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
    alert('بازی شروع شد!');
});

// افزودن تعاملات بیشتر برای انیمیشن‌ها یا کارهای دیگر می‌توانید در اینجا پیاده‌سازی کنید.
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
