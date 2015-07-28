<?php
	header('Content-type:text/json');
	$res = array();
	if($_REQUEST['a'] == 'rank'){
		$res['errcode'] = 0;
		$res['data'] = '9999';
	}
	if($_REQUEST['a'] == 'userrank'){
		$res['errcode'] = 0;
		$res['data'] = '1';
	}
	if($_REQUEST['a'] == 'add'){
		$res['errcode'] = 0;
		$res['data'] = '1';
	}
	if($_REQUEST['a'] == 'build'){
		$res['errcode'] = 0;
	}
	
	print_r( json_encode($res) );
?>