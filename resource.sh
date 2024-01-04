#!/bin/bash

cpu_info=$(top -bn1 | grep '^%Cpu')
id_value=$(echo "$cpu_info" | cut -d',' -f4 | cut -d' ' -f2)
float=$(echo "$id_value" | bc -l)
cpu_percentage=$(echo "100.0 - $float" | bc)



memory=$(free -tm | grep 'Total' | awk '{print($4)}')
total_memory=$(free -tm | grep 'Total' | awk '{print($2)}')
echo "{\"cpu\": $cpu_percentage, \"free_Ram\": $memory,\"Total_Ram\": $total_memory}"


   
