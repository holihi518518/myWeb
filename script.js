
// 产品数据（省略内容，提供了 const products 变量）
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
let visitorCount = 0;
let viewCounts = {};

// 从服务器获取当前的访客计数和产品点阅人次计数
function fetchCounts() {
    fetch('data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'get_counts'
        })
    })
    .then(response => response.json())
    .then(data => {
        // 更新访客计数
        visitorCount = data.visitor_count;
        viewCounts = data.product_view_counts || {};
        localStorage.setItem('visitorCount', visitorCount);
        localStorage.setItem('viewCounts', JSON.stringify(viewCounts));
        updateVisitorCountDisplay();

        // 增加访问人数
        updateVisitorCount();

        // 初始化产品列表
        displayProducts();
    })
    .catch(error => console.error('Error getting counts:', error));
}

// 更新网页上的显示
function updateVisitorCountDisplay() {
    const visitorCountElement = document.getElementById('visitor-count-number');
    if (visitorCountElement) {
        visitorCountElement.innerText = visitorCount;
    }
}

// 更新总访问人数
function updateVisitorCount() {
    fetch('data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'update_visitor_count'
        })
    })
    .then(response => response.json())
    .then(data => {
        // 更新总访问人数
        visitorCount = data.visitor_count;
        localStorage.setItem('visitorCount', visitorCount);
        updateVisitorCountDisplay();
    })
    .catch(error => console.error('Error updating visitor count:', error));
}

// 更新总访问人数显示
function updateVisitorCountDisplay() {
    const visitorCountElement = document.getElementById('visitor-count-number');
    if (visitorCountElement) {
        visitorCountElement.innerText = visitorCount;
    }
}

// 页面加载时初始化数据
window.onload = () => {
    fetchCounts();  // 获取数据并初始化产品列表
    updateVisitorCount();  // 更新总访问人数

    // 点击“登入购买”按钮时调用 updateViewCounter 函数
    document.querySelectorAll('.action-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-product-id');
            if (productId) {
                updateViewCounter(productId);  // 传入当前产品的 ID
            }
        });
    });
};



// 合并推荐人网址和会员登录网址
const links = [
    "https://reurl.cc/qVjoNq",
    "https://reurl.cc/OM8aE9",
    "https://reurl.cc/z1joZa"
];

const randomLoginLink = links[Math.floor(Math.random() * links.length)];
const loginLinkElement = document.getElementById('login-link');
if (loginLinkElement) {
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
}

function showPopupBeforeUnload() {
    const popupOverlay = document.createElement('div');
    popupOverlay.classList.add('popup-overlay');
    document.body.appendChild(popupOverlay);

    const popup = document.createElement('div');
    popup.classList.add('popup'); // 使用新的 popup 类别

    const closeButton = document.createElement('button');
    closeButton.innerText = '關閉X';
    closeButton.classList.add('close-button');
    closeButton.onclick = () => {
        popupOverlay.remove();
        popup.remove();
    };
    popup.appendChild(closeButton);

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
    actionButton.innerText = '複製推薦碼'; // 初始显示的按钮文字

    actionButton.onclick = async () => {
        if (actionButton.innerText === '複製推薦碼') {
            try {
                await navigator.clipboard.writeText(code.innerText);
                actionButton.innerText = '下一步'; // 变更按钮文字
                actionButton.classList.add('enabled'); // 使按钮样式变更
                code.classList.add('flash'); // 添加闪烁效果类
                setTimeout(() => {
                    code.classList.remove('flash'); // 移除闪烁效果类
                }, 1000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        } else {
            // 在“下一步”按钮被点击时导航到推荐人链接
            window.location.href = randomLoginLink;
        }
    };

    buttonContainer.appendChild(actionButton);
    popup.appendChild(codeContainer);
    popup.appendChild(buttonContainer);

    // 点击背景时关闭对话框
    popupOverlay.addEventListener('click', () => {
        popupOverlay.remove();
        popup.remove();
    });

    document.body.appendChild(popupOverlay);
    document.body.appendChild(popup);
}

// 展示产品清单
function displayProducts() {
    const productSection = document.getElementById('product-section');

    // 先排序产品列表，将热门产品排在前面
    const sortedProducts = products.slice().sort((a, b) => {
        const viewCounts = JSON.parse(localStorage.getItem('viewCounts')) || {};
        return (viewCounts[b.id] || 0) - (viewCounts[a.id] || 0);
    });

    sortedProducts.forEach((product, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.style.position = 'relative'; // 确保图标绝对定位于该容器内

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
        counterDiv.innerHTML = `<span>點購人次: </span><span id="counter-${product.id}">${(JSON.parse(localStorage.getItem('viewCounts')) || {})[product.id] || 0}</span>`;

        // 创建“登录购买”按钮
        const button = document.createElement('button');
        button.innerText = '登入購買';
        button.onclick = (event) => {
            event.preventDefault();
            updateViewCounter(product.id);
            showPopupBeforeUnload();
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

        // 添加“人气商品”图标到前三名商品
        if (index < 3) {
            const icon = document.createElement('div');
            icon.classList.add('popular-icon');
            itemDiv.appendChild(icon);
        }
    });

    // 调用函数以展示热门商品
    displayTopProducts();
}


// 创建放大显示图片的函数
function createPopupImage(src) {
    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    document.body.appendChild(overlay);

    const popupImage = document.createElement('div');
    popupImage.classList.add('popup');

    const image = document.createElement('img');
    image.src = src;
    image.classList.add('popup-image');
    popupImage.appendChild(image);

    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.classList.add('close-button');
    closeButton.onclick = () => {
        overlay.remove();
        popupImage.remove();
    };
    popupImage.appendChild(closeButton);

    overlay.onclick = () => {
        overlay.remove();
        popupImage.remove();
    };

    document.body.appendChild(popupImage);
}




// 确保在页面加载完毕后调用
document.addEventListener('DOMContentLoaded', () => {
    setupImageClickEvents(); // 设置产品图片的点击事件
});


// 更新产品的点阅人次计数器
function updateViewCounter(productId) {
    const viewCounts = JSON.parse(localStorage.getItem('viewCounts')) || {};
    viewCounts[productId] = (viewCounts[productId] || 0) + 1;
    localStorage.setItem('viewCounts', JSON.stringify(viewCounts));
    document.getElementById(`counter-${productId}`).innerText = viewCounts[productId];

    fetch('data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'increment_product_view_count',
            productId: productId
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Product view count updated:', data);
    })
    .catch(error => console.error('Error updating product view count:', error));
}

// 展示热门商品榜单的前三名商品
function displayTopProducts() {
    const sortedProducts = products.slice().sort((a, b) => {
        const viewCounts = JSON.parse(localStorage.getItem('viewCounts')) || {};
        return (viewCounts[b.id] || 0) - (viewCounts[a.id] || 0);
    });

    const topProductsContainer = document.getElementById('top-products');
    topProductsContainer.innerHTML = ''; // 清空容器

    sortedProducts.slice(0, 3).forEach(product => {
        const topItemDiv = document.createElement('div');
        topItemDiv.classList.add('top-product-item');

        const img = document.createElement('img');
        img.src = product.imgSrc;
        img.alt = product.name;
        img.classList.add('product-image');

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('product-details');
        detailsDiv.innerHTML = `
            <p>${product.name}</p>
            <p>${product.description}</p>
            <p>${product.price}</p>
        `;

        topItemDiv.appendChild(img);
        topItemDiv.appendChild(detailsDiv);

        const popularIcon = document.createElement('div');
        popularIcon.classList.add('popular-icon');
        topItemDiv.appendChild(popularIcon);

        topProductsContainer.appendChild(topItemDiv);
    });
}

// 初始化访客计数器和产品列表
fetch('data.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        action: 'increment_visitor_count'
    })
})
.then(response => response.json())
.then(data => {
    visitorCount = data.visitor_count;
    localStorage.setItem('visitorCount', visitorCount);
    updateVisitorCountDisplay();
})
.catch(error => console.error('Error updating visitor count:', error));

displayProducts();
