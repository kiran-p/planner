<?php
$host="localhost"; // Host name
$username="root"; // Mysql username
$password=""; // Mysql password
$db_name="planner_data"; // Database name
$tbl_name="events"; // Table name

// Connect to server and select database.
mysql_connect("$host", "$username", "$password")or
die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");

// username and password sent from form
$textsearch = isset($_POST['searchText']) ? $_POST["searchText"] : "";
// To protect MySQL injection (more detail about MySQL injection)
$textsearch = stripslashes($textsearch);
$textsearch = mysql_real_escape_string($textsearch);

 header('Cache-Control: no-cache, must-revalidate');
 header('Content-type: application/json');

$sql = "SELECT * FROM $tbl_name WHERE type='$textsearch' OR summary='$textsearch' OR startTime='$textsearch' OR endTime='$textsearch' OR description='$textsearch' OR location='$textsearch' OR region='$textsearch' OR city='$textsearch' OR cost='$textsearch' OR cuisine='$textsearch' OR date='$textsearch'";

$result = mysql_query($sql);


if(mysql_num_rows($result)){
    echo '{"data":[';

    $first = true;
    while($row=mysql_fetch_assoc($result)){
        //  cast results to specific data types
        $json_str = "{";
        $json_str .=  "\"type\" :" . json_encode($row['type']) . ",";
        $json_str .= "\"summary\" :" . json_encode($row['summary']) . ",";
        $json_str .= "\"start\" :";
        $json_str .= "{";
        $json_str .= "\"date\" :" . json_encode($row['startTime']) . "";
        $json_str .= "}," ;
        $json_str .= "\"end\" :"  ;
        $json_str .= "{";
        $json_str .= "\"date\" :" . json_encode($row['endTime']) . "";
        $json_str .= "},";
        $json_str .= "\"description\" :" . json_encode($row['description']) . ",";
        $json_str .= "\"location\" :" . json_encode($row['location']) . ",";
        $json_str .= "\"region\" :" . json_encode($row['region']) . ",";
        $json_str .= "\"city\" :" . json_encode($row['city']) . ",";
        $json_str .= "\"cost\" :" . json_encode($row['cost']) . ",";
        $json_str .= "\"cuisine\" :" . json_encode($row['cuisine']) . ",";
        $json_str .= "\"image\" :" . json_encode($row['image']) . ",";
        $json_str .= "\"day\" :" . json_encode($row['date']) . "";
        $json_str .= "}";
        if($first) {
            $first = false;
        } else {
            echo ',';
        }
        echo $json_str;
    }
    echo ']}';
} else {
    echo '[]';
}
?>