<?php
// Before removing this file, please verify the PHP ini setting `auto_prepend_file` does not point to this.

// This file was the current value of auto_prepend_file during the Wordfence WAF installation (Fri, 14 Feb 2025 11:05:16 +0000)
if (file_exists('C:/Users/sdesr/AppData/Local/Programs/Local/resources/extraResources/local-bootstrap.php')) {
	include_once 'C:/Users/sdesr/AppData/Local/Programs/Local/resources/extraResources/local-bootstrap.php';
}
if (file_exists(__DIR__.'/wp-content/plugins/wordfence/waf/bootstrap.php')) {
	define("WFWAF_LOG_PATH", __DIR__.'/wp-content/wflogs/');
	include_once __DIR__.'/wp-content/plugins/wordfence/waf/bootstrap.php';
}