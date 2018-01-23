<?php
/**
 * @var modX $modx
 */

/* don't execute if in the Manager */
if ($modx->context->get('key') == 'mgr') {
    return;
}

switch ($_SERVER['HTTP_HOST']) {
    case 'dev.fenom-test':
        $modx->switchContext('dev');
        break;
    case 'fenom-test':
        break;
    default:
        $modx->log(modX::LOG_LEVEL_ERROR, 'Check this plugin! May be your headache grew up from here.');
        break;
}