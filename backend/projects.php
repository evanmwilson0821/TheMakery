<?php
  header("Access-Control-Allow-Origin: *");

  $projects = array(array(
    "type" => "MANAGEMENT",
    "start_date" => date("y-m-d h:i"),
    "end_date" => "2017-12-13 10:02",
    "input1" => "a",
    "input2" => "b",
    "input3" => "c",
    "input4" => "d",
    "input5" => "e",
    "completed" => true,
    "tasks" => array(array(
      "name" => "name of task 1",
      "tip" => "task 1 tip",
      "completed" => true
    ),array(
      "name" => "name of task 2",
      "tip" => "task 2 tip",
      "completed" => false
    )),
    "review" => array(
      "rate" => 4.5,
      "description" => "this student is great"
    )
  ),array(
    "type" => "ENGINEERING",
    "start_date" => date("y-m-d h:i"),
    "end_date" => "2018-12-13 12:02",
    "input1" => "a1",
    "input2" => "b1",
    "input3" => "c2",
    "input4" => "d1",
    "input5" => "e1",
    "completed" => false,
    "tasks" => array(array(
      "name" => "name of task 3",
      "tip" => "task 3 tip",
      "completed" => false
    ),array(
      "name" => "name of task 4",
      "tip" => "task 4 tip",
      "completed" => false
    )),
    "review" => array(
      "rate" => 2.5,
      "description" => "this student is great too"
    )
  ));

  print_r(json_encode($projects));
?>