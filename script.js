const products = [
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A001-2.png",
        name: "桂花紅茶MCT蛋白飲 /12入",
        description: "商品編號：A001<br>",
        price: "建議售價:NT$1,580"
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
        name: "綠纖子 /6入",
        description: "商品編號：A008<br>",
        price: "建議售價:NT$780"
    },
    {
        imgSrc: "https://www.yucheng-cms.com/MYCData/MYC01SS/Images/Product/A008-2.png",
        name: "暢快莓 /10顆",
        description: "商品編號：A010<br>",
        price: "建議售價:NT$680"
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
loginLinkElement.href = randomLoginLink;
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
    message.innerHTML = '稍後進入會員資料填寫<br>請先複製以下推薦碼<br>';
    popup.appendChild(message);

    const code = document.createElement('p');
    code.innerText = 'TW22623623';
    code.style.fontWeight = 'bold';
    code.style.userSelect = 'text'; // 使文本可复制
    popup.appendChild(code);

    const copyButton = document.createElement('button');
    copyButton.innerText = '一鍵複製';
    copyButton.onclick = async () => {
        try {
            await navigator.clipboard.writeText(code.innerText);
            copyButton.disabled = true; // 禁用複製按鈕
            closeButton.style.backgroundColor = '#449900'; // 改變關閉按鈕顏色
            closeButton.href = randomLoginLink; // 設置關閉按鈕為超連結
            closeButton.style.pointerEvents = 'auto'; // 允許點擊
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    popup.appendChild(copyButton);

    const closeButton = document.createElement('a'); // 改為超連結
    closeButton.innerText = '下一步';
    closeButton.href = '#';
    closeButton.style.backgroundColor = '#004d00'; // 初始深綠色
    closeButton.style.color = 'white';
    closeButton.style.padding = '10px 20px';
    closeButton.style.fontSize = '14px';
    closeButton.style.borderRadius = '5px';
    closeButton.style.textDecoration = 'none';
    closeButton.style.marginTop = '10px';
    closeButton.style.pointerEvents = 'none'; // 初始禁用
    closeButton.onclick = () => {
        document.body.removeChild(popup);
    };
    popup.appendChild(closeButton);

    // 添加間隔
    copyButton.style.marginRight = '10px'; // 設置複製按鈕和關閉按鈕的間隔

    document.body.appendChild(popup);
}

// 添加事件监听器，当点击会员登入按钮或购买按钮时显示弹出对话框
loginLinkElement.addEventListener('click', (event) => {
    event.preventDefault();
    showPopupBeforeUnload();
});

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
    button.innerText = '購買';
    button.onclick = (event) => {
        event.preventDefault();
        showPopupBeforeUnload();
    };

    detailsDiv.appendChild(button);
    itemDiv.appendChild(img);
    itemDiv.appendChild(detailsDiv);
    productSection.appendChild(itemDiv);
});

// 顯示推薦碼的彈出對話框
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    showPopupBeforeUnload();
});
