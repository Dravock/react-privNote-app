<?php 
require_once(APIROOT . "/config.php");
require_once(APIROOT . "/base/db.php");

class App_Data extends Database{
    
    private $data;

    public function __construct()
    {
        parent::__construct();
        $this->data = Config::$app_data;

    }

    public function getData($message_id){
        $stmt = $this->conn->prepare("SELECT $this->data.message From $this->data WHERE $this->data.id = :message_id ");
        $stmt->bindParam(':message_id',$message_id);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
    }

    public function postData($obj,$uuid){
        $stmt = $this->conn->prepare( "INSERT INTO $this->data ( id , message ) VALUES (:uuid , :message )" );
        $stmt->bindParam(':message',$obj->message);
        $stmt->bindParam(':uuid',$uuid);
        return $stmt->execute();

    }

    public function deleteData($message_id){
        $stmt = $this->conn->prepare("DELETE FROM $this->data WHERE $this->data.id = :message_id");
        $stmt->bindParam(':message_id',$message_id);
        return $stmt->execute();
    }
}
?>