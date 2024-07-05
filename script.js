
// 计数器的初始值
let visitorCount = 0;

// 检查 sessionStorage 中是否存在访问标记
const hasVisited = sessionStorage.getItem('hasVisited');
if (!hasVisited) {
    // 如果标记不存在，则增加访问次数并保存到 localStorage
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
        visitorCount = parseInt(storedCount, 10);
    } else {
        visitorCount = 0; // 如果没有存储值，初始化为0
    }
    visitorCount += 1;
    localStorage.setItem('visitorCount', visitorCount);
    sessionStorage.setItem('hasVisited', 'true'); // 设置标记为已访问
} else {
    // 如果标记存在，则直接获取并显示当前的计数
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
        visitorCount = parseInt(storedCount, 10);
    }
}

// 更新网页上的显示
const visitorCountElement = document.getElementById('visitor-count-number');
visitorCountElement.innerText = visitorCount;



const products = [
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A001-2.png",
        name: "桂花紅茶MCT蛋白飲 /12入",
        description: "商品編號：A001<br>",
        price: "建議售價:NT$1,580",
        id: 'A001'  // 添加一个唯一的商品 ID
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/C001-1.png",
        name: "DS激嫩酵母洗面露",
        description: "商品編號：C001<br>",
        price: "建議售價:NT$880",
        id: 'C001'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A002-2.png",
        name: "厚乳咖啡MCT蛋白飲 /12入",
        description: "商品編號：A002<br>",
        price: "建議售價:NT$1,580",
        id: 'A002'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A003-2.png",
        name: "莓日孅 /10入",
        description: "商品編號：A003<br>",
        price: "建議售價:NT$680",
        id: 'A003'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A010-2.png",
        name: "暢快莓 /10顆",
        description: "商品編號：A010<br>",
        price: "建議售價:NT$680",
        id: 'A010'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A008-2.png",
        name: "綠纖子 /6入",
        description: "商品編號：A008<br>",
        price: "建議售價:NT$780",
        id: 'A008'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E002-1.jpg",
        name: "星釀燕窩飲",
        description: "商品編號：E002<br>",
        price: "建議售價:NT$1,680",
        id: 'E002'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E003-1.jpg",
        name: "星醇滴雞精",
        description: "商品編號：E003<br>",
        price: "建議售價:NT$1,680",
        id: 'E003'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E004-1.jpg",
        name: "星粹魚精",
        description: "商品編號：E004<br>",
        price: "建議售價:NT$1,680",
        id: 'E004'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/D001-1.png",
        name: "三秒復活酸修護素",
        description: "商品編號：D001<br>",
        price: "建議售價:NT$1,280",
        id: 'D001'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E013-1.jpg",
        name: "富婆凍膜",
        description: "商品編號：E013<br>",
        price: "建議售價:NT$1,980",
        id: 'E013'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E021-1.jpg",
        name: "多功能電烤盤",
        description: "商品編號：E021<br>",
        price: "建議售價:NT$1,680",
        id: 'E021'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E015-1.jpg",
        name: "體脂機",
        description: "商品編號：E015<br>",
        price: "建議售價:NT$1,180",
        id: 'E015'
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E024-1.jpg",
        name: "啡感性咖啡杯-10入套組",
        description: "商品編號：E024<br>",
        price: "建議售價:NT$199",
        id: 'E024'
    }
];

// 合併推薦人網址和會員登入網址
const links = [
    "https://reurl.cc/qVjoNq",
    "https://reurl.cc/OM8aE9",
    "https://reurl.cc/z1joZa"
];

// 隨機選擇會員登入鏈接
const randomLoginLink = links[Math.floor(Math.random() * links.length)];
const loginLinkElement = document.getElementById('login-link');
loginLinkElement.href = '#'; 
loginLinkElement.addEventListener('click', (event) => {
    event.preventDefault();
    showPopupBeforeUnload();
});
loginLinkElement.style.backgroundColor = '#9f9900';
loginLinkElement.style.color = "white";
loginLinkElement.style.padding = "10px 20px";
loginLinkElement.style.fontSize = "16px";
loginLinkElement.style.borderRadius = "5px";
loginLinkElement.style.textDecoration = "none";
loginLinkElement.style.display = "inline-block";

// 建立彈出對話框的函數
function showPopupBeforeUnload() {
    const popupOverlay = document.createElement('div');
    popupOverlay.classList.add('popup-overlay');
    document.body.appendChild(popupOverlay);

    const popup = document.createElement('div');
    popup.classList.add('popup'); // 使用新的 popup 類別

    const message = document.createElement('p');
    message.innerHTML = '請先登入會員<br>複製推薦碼以進行下一步<br>';
    popup.appendChild(message);

    const codeContainer = document.createElement('div');
    codeContainer.classList.add('code-container');

    const code = document.createElement('p');
    code.innerText = 'TW22623623';
    code.style.fontWeight = 'bold';
    code.style.userSelect = 'text'; // 使文本可复制
    codeContainer.appendChild(code);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons'); // 按钮容器

    const actionButton = document.createElement('button');
    actionButton.classList.add('action-button');
    actionButton.innerText = '複製推薦碼'; // 初始顯示的按鈕文字

    actionButton.onclick = async () => {
        if (actionButton.innerText === '複製推薦碼') {
            try {
                await navigator.clipboard.writeText(code.innerText);
                actionButton.innerText = '下一步'; // 變更按鈕文字
                actionButton.classList.add('enabled'); // 使按鈕樣式變更
                code.classList.add('flash'); // 添加閃爍效果類
                setTimeout(() => {
                    code.classList.remove('flash'); // 移除閃爍效果類
                    code.style.color = 'grey'; // 改變顏色為灰色
                }, 1000); // 閃爍持續時間
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        } else if (actionButton.innerText === '下一步') {
            window.location.href = randomLoginLink; // 前往下一步網址
        }
    };

    buttonContainer.appendChild(actionButton);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerText = '關閉 X'; /*關閉圖示*/
    closeButton.onclick = () => {
        document.body.removeChild(popupOverlay);
        document.body.removeChild(popup);
    };

    popup.appendChild(closeButton);
    popup.appendChild(codeContainer);
    popup.appendChild(buttonContainer);

    document.body.appendChild(popup);

    // 添加動畫效果
    popup.classList.add('show');
}

// 顯示產品清單
const productSection = document.getElementById('product-section');

products.forEach(product => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const img = document.createElement('img');
    img.src = product.imgSrc;
    img.alt = product.name;
    img.classList.add('product-image');

    img.onclick = () => {
        createPopupImage(product.imgSrc);
    };

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('product-details');
    detailsDiv.innerHTML = `
        <p style="font-size: 20px;">${product.name}</p>
        <p style="font-size: 12px;">${product.description}</p>
        <p style="font-size: 16px;">${product.price}</p>
    `;

    // 创建显示点阅人次的元素
    const counterDiv = document.createElement('div');
    counterDiv.classList.add('view-counter');
    counterDiv.innerHTML = `<span>點閱人數: </span><span id="counter-${product.id}">0</span>`;
    
    // 创建“登入購買”按钮
    const button = document.createElement('button');
    button.innerText = '登入購買';
    button.onclick = (event) => {
        event.preventDefault();
        showPopupBeforeUnload();
        
        // 更新点阅人次
        updateViewCounter(product.id);
    };

    // 创建按钮和点阅人次计数器的容器
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.appendChild(button);
    buttonContainer.appendChild(counterDiv);

    detailsDiv.appendChild(buttonContainer);
    itemDiv.appendChild(img);
    itemDiv.appendChild(detailsDiv);
    productSection.appendChild(itemDiv);
});

// 更新点阅人次计数
function updateViewCounter(productId) {
    // 从 localStorage 中获取当前计数
    let viewCounts = JSON.parse(localStorage.getItem('viewCounts')) || {};
    viewCounts[productId] = (viewCounts[productId] || 0) + 1;

    // 将更新后的计数存储到 localStorage 中
    localStorage.setItem('viewCounts', JSON.stringify(viewCounts));

    // 更新页面上的点阅人次显示
    const counterElement = document.getElementById(`counter-${productId}`);
    if (counterElement) {
        counterElement.innerText = viewCounts[productId];
    }
}

// 初始化页面时更新点阅人次显示
function initializeCounters() {
    let viewCounts = JSON.parse(localStorage.getItem('viewCounts')) || {};
    products.forEach(product => {
        const counterElement = document.getElementById(`counter-${product.id}`);
        if (counterElement) {
            counterElement.innerText = viewCounts[product.id] || 0;
        }
    });
}

initializeCounters();

// 展示放大图片的函数
function createPopupImage(src) {
    const overlay = document.createElement('div');
    overlay.className = 'popup-image-overlay';

    const popup = document.createElement('div');
    popup.className = 'popup-image-popup';

    const img = document.createElement('img');
    img.src = src;
    img.className = 'popup-image';

    const closeButton = document.createElement('button');
    closeButton.className = 'popup-image-close-button';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
        closePopupImage();
    });

    popup.appendChild(closeButton);
    popup.appendChild(img);

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    setTimeout(() => {
        overlay.classList.add('show');
        popup.classList.add('show');
    }, 10);

    overlay.addEventListener('click', () => {
        closePopupImage();
    });

    function closePopupImage() {
        overlay.classList.remove('show');
        popup.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(overlay);
            document.body.removeChild(popup);
        }, 300);
    }
}