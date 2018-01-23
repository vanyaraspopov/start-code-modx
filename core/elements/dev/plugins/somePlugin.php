<?php
/**
 * @var modX $modx
 */

$context = $modx->context->get('key');
$modx->log(modX::LOG_LEVEL_ERROR, "Current context: $context");