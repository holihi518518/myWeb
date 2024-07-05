const products = [
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A001-2.png",
        name: "桂花紅茶MCT蛋白飲 /12入",
        description: "商品編號：A001<br>",
        price: "建議售價:NT$1,580"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/C001-1.png",
        name: "DS激嫩酵母洗面露",
        description: "商品編號：C001<br>",
        price: "建議售價:NT$880"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A002-2.png",
        name: "厚乳咖啡MCT蛋白飲 /12入",
        description: "商品編號：A002<br>",
        price: "建議售價:NT$1,580"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A003-2.png",
        name: "莓日孅 /10入",
        description: "商品編號：A003<br>",
        price: "建議售價:NT$680"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A010-2.png",
        name: "暢快莓 /10顆",
        description: "商品編號：A010<br>",
        price: "建議售價:NT$680"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A008-2.png",
        name: "綠纖子 /6入",
        description: "商品編號：A008<br>",
        price: "建議售價:NT$780"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E002-1.jpg",
        name: "星釀燕窩飲",
        description: "商品編號：E002<br>",
        price: "建議售價:NT$1,680"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E003-1.jpg",
        name: "星醇滴雞精",
        description: "商品編號：E003<br>",
        price: "建議售價:NT$1,680"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E004-1.jpg",
        name: "星粹魚精",
        description: "商品編號：E004<br>",
        price: "建議售價:NT$1,680"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/D001-1.png",
        name: "三秒復活酸修護素",
        description: "商品編號：D001<br>",
        price: "建議售價:NT$1,280"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E013-1.jpg",
        name: "富婆凍膜",
        description: "商品編號：E013<br>",
        price: "建議售價:NT$1,980"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E021-1.jpg",
        name: "多功能電烤盤",
        description: "商品編號：E021<br>",
        price: "建議售價:NT$1,680"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E015-1.jpg",
        name: "體脂機",
        description: "商品編號：E015<br>",
        price: "建議售價:NT$1,180"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/E024-1.jpg",
        name: "啡感性咖啡杯-10入套組",
        description: "商品編號：E024<br>",
        price: "建議售價:NT$199"
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
    createPopup('請先登入會員<br>複製推薦碼以進行下一步<br>', 'TW22623623', '複製推薦碼', actionButtonHandler);
});
loginLinkElement.style.backgroundColor = '#9f9900';
loginLinkElement.style.color = "white";
loginLinkElement.style.padding = "10px 20px";
loginLinkElement.style.fontSize = "16px";
loginLinkElement.style.borderRadius = "5px";
loginLinkElement.style.textDecoration = "none";
loginLinkElement.style.display = "inline-block";

// 建立彈出對話框的函數
function createPopup(message, codeText, actionButtonText, actionButtonHandler) {
    const popupOverlay = document.createElement('div');
    popupOverlay.classList.add('popup-overlay');
    document.body.appendChild(popupOverlay);

    const popup = document.createElement('div');
    popup.classList.add('popup'); 

    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    popup.appendChild(messageElement);

    const codeContainer = document.createElement('div');
    codeContainer.classList.add('code-container');

    const code = document.createElement('p');
    code.innerText = codeText;
    code.style.fontWeight = 'bold';
    code.style.userSelect = 'text'; 
    codeContainer.appendChild(code);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons');

    const actionButton = document.createElement('button');
    actionButton.classList.add('action-button');
    actionButton.innerText = actionButtonText;

    actionButton.onclick = async () => {
        await actionButtonHandler(actionButton, code);
    };

    buttonContainer.appendChild(actionButton);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerText = '關閉 X';
    closeButton.onclick = () => {
        document.body.removeChild(popupOverlay);
        document.body.removeChild(popup);
    };

    popup.appendChild(closeButton);
    popup.appendChild(codeContainer);
    popup.appendChild(buttonContainer);

    document.body.appendChild(popup);

    popup.classList.add('show');
}

async function actionButtonHandler(actionButton, code) {
    if (actionButton.innerText === '複製推薦碼') {
        try {
            await navigator.clipboard.writeText(code.innerText);
            actionButton.innerText = '下一步';
            actionButton.classList.add('enabled');
            code.classList.add('flash');
            setTimeout(() => {
                code.classList.remove('flash');
                code.style.color = 'grey';
            }, 1000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    } else if (actionButton.innerText === '下一步') {
        window.location.href = randomLoginLink;
    }
}

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
            overlay.remove();
            popup.remove();
        }, 300);
    }
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

    const button = document.createElement('button');
    button.innerText = '登入購買';
    button.onclick = (event) => {
        event.preventDefault();
        createPopup('請先登入會員<br>複製推薦碼以進行下一步<br>', 'TW22623623', '複製推薦碼', actionButtonHandler);
    };

    detailsDiv.appendChild(button);
    itemDiv.appendChild(img);
    itemDiv.appendChild(detailsDiv);
    productSection.appendChild(itemDiv);
});