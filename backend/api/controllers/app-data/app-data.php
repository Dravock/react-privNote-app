<?php
require_once("../../base/start.php");
require_once(APIROOT . "/controllers/app-data/app-data.query.php");

// HELPER FUNCTIONS
function gen_uuid() {
    return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        // 32 bits for "time_low"
        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),

        // 16 bits for "time_mid"
        mt_rand( 0, 0xffff ),

        // 16 bits for "time_hi_and_version",
        // four most significant bits holds version number 4
        mt_rand( 0, 0x0fff ) | 0x4000,

        // 16 bits, 8 bits for "clk_seq_hi_res",
        // 8 bits for "clk_seq_low",
        // two most significant bits holds zero and one for variant DCE1.1
        mt_rand( 0, 0x3fff ) | 0x8000,

        // 48 bits for "node"
        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
    );
}

// API CALLS 
function getMessage() {
    try {
        $message_id = $_GET['id'];
        
        $query = new App_Data();
        $result = $query->getData($message_id);
        $delete_message = $query->deleteData($message_id);
        
        http_response_code(200);
        echo json_encode($result);
    } catch (Throwable $e) {
        http_response_code(500);
    }
}

function postMessage () {
    try {
        $post_json  = file_get_contents('php://input');
        $obj = json_decode($post_json);
        
        $query = new App_Data();
        $v4_uuID = gen_uuid();

        if(!$query->postData($obj,$v4_uuID)) {
            throw new Exception('Something went wrong');
            return;
        }

        http_response_code(200);
        echo $v4_uuID;
        return;
    } catch (Throwable $e) {
        http_response_code(500);
    }
}

function removeMessage () {
    try {
        $post_json  = file_get_contents('php://input');
        $obj = json_decode($post_json);
        $query = new App_Data();

        if(!$query->deleteData($obj->id)) {
            throw new Exception('Something went wrong');
            return;
        }
        http_response_code(200);
    } catch (Throwable $e) {
        http_response_code(500);
    }
}

$api = new RestApi('getMessage', 'postMessage',null, 'removeMessage');

?>