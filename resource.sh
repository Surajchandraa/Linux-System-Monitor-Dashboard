#!/bin/bash

cpu_info=$(top -bn1 | grep '^%Cpu')
id_value=$(echo "$cpu_info" | cut -d',' -f4 | cut -d' ' -f2)
echo "$id_value"

cpu_percentage=$($cpu:34:37)
    memory=$(free | awk '/Mem/{printf "%.2f\n", $3/$2 * 100}')
    echo "{\"cpu\": \"$id_value%\", \"memory\": \"$memory%\"}"
   

