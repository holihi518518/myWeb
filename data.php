<?php
$action = $_POST['action'] ?? '';
$dataFile = 'data.txt';

// 读取文件内容
function readDataFile() {
    global $dataFile;
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        $lines = explode("\n", trim($content));
        $visitorCount = intval(array_shift($lines));  // 第一个元素是总访问人数
        $productViewCounts = [];
        foreach ($lines as $line) {
            list($productId, $viewCount) = explode(': ', $line);
            $productViewCounts[$productId] = intval($viewCount);
        }
        return ['visitor_count' => $visitorCount, 'product_view_counts' => $productViewCounts];
    }
    return ['visitor_count' => 0, 'product_view_counts' => []];
}

// 写入文件内容
function writeDataFile($visitorCount, $productViewCounts) {
    global $dataFile;
    $content = $visitorCount . "\n";
    foreach ($productViewCounts as $productId => $viewCount) {
        $content .= $productId . ': ' . $viewCount . "\n";
    }
    file_put_contents($dataFile, trim($content));
}

if ($action === 'get_counts') {
    $data = readDataFile();
    echo json_encode($data);
} elseif ($action === 'update_visitor_count') {
    $data = readDataFile();
    $visitorCount = $data['visitor_count'] + 1;  // 增加访问人数
    $productViewCounts = $data['product_view_counts'];
    writeDataFile($visitorCount, $productViewCounts);
    echo json_encode(['visitor_count' => $visitorCount]);
} elseif ($action === 'update_view_count') {
    $productId = $_POST['productId'] ?? '';
    $viewCount = $_POST['viewCount'] ?? 0;

    $data = readDataFile();
    $visitorCount = $data['visitor_count'];
    $productViewCounts = $data['product_view_counts'];
    
    $productViewCounts[$productId] = $viewCount;
    writeDataFile($visitorCount, $productViewCounts);
    echo json_encode(['product_view_counts' => $productViewCounts]);
}
?>
