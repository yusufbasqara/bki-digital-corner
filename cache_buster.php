<?php
/**
 * POJOK BKI 4.0 - Cache Buster Helper
 * File ini membantu generate version number untuk file statis
 */

// Function untuk generate cache buster berdasarkan file modification time
function getCacheBuster($filename) {
    if (file_exists($filename)) {
        return filemtime($filename);
    }
    return time(); // fallback ke current time
}

// Function untuk generate URL dengan cache buster
function assetUrl($filename) {
    $version = getCacheBuster($filename);
    return $filename . '?v=' . $version;
}

// Function untuk output HTML dengan anti-cache headers
function outputWithAntiCache() {
    // Set anti-cache headers
    header("Cache-Control: no-cache, no-store, must-revalidate");
    header("Pragma: no-cache");
    header("Expires: 0");
    
    // Set content type
    header("Content-Type: text/html; charset=UTF-8");
}

// Auto-call anti-cache headers
outputWithAntiCache();

// Global variables untuk template
$cssUrl = assetUrl('style.css');
$jsUrl = assetUrl('script.js');
$currentTime = time();

// Helper function untuk digunakan di HTML
function asset($file) {
    return assetUrl($file);
}

// Version info untuk debugging
$version_info = [
    'generated_at' => date('Y-m-d H:i:s'),
    'cache_buster' => $currentTime,
    'css_version' => getCacheBuster('style.css'),
    'js_version' => getCacheBuster('script.js')
];

// Output version info as JavaScript variable (untuk debugging)
echo "<script>window.cacheInfo = " . json_encode($version_info) . ";</script>\n";
?>