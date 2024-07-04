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
loginLinkElement.href = '#'; // 设置为空链接以便触发弹出窗口
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
        showPopupBeforeUnload();
    };

    detailsDiv.appendChild(button);
    itemDiv.appendChild(img);
    itemDiv.appendChild(detailsDiv);
    productSection.appendChild(itemDiv);
});

