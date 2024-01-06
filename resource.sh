#!/bin/bash

memory=$(free -t | grep 'Mem:' | awk '{print $4}')
total_memory=$(free -t | grep 'Mem:' | awk '{print $2}')

bat=$(upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep "percentage" | awk '{print $2+0}')
bat_time=$(upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep "time to full" | awk '{print $4 $5}')
bat_time2=$(upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep "time to empty" | awk '{print $4 $5}')
battery_status=$(upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep "state" | awk '{print $2}')
battery_health=$(upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep "capacity" | awk '{print $2}')
power_consumption=$(upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep "energy-rate" | awk '{print $2 $3}')
battery_technology=$(upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep "technology" | awk '{print $2}')
cycle_count=$(upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep "charge-cycles" | awk '{print $2}')

uptime=$(uptime -p)

disk_usage_percent=$(df -h / | awk 'NR==2 {print $5}')
disk_usage_absolute=$(df -h / | awk 'NR==2 {print $3}')

echo "[{\"free_Ram\": $memory,\"Total_Ram\": $total_memory},{\"battery_percentage\":$bat,\"Time_to_full\":\"$bat_time\",\"Time_to_empty\":\"$bat_time2\",\"Battery_Status\":\"$battery_status\",\"Battery_Health\":\"$battery_health\",\"Power_Consumption\":\"$power_consumption\",\"Battery_Technology\":\"$battery_technology\",\"Cycle_Count\":\"$cycle_count\"},{\"System_uptime\":\"$uptime\"},{\"Disk_usage_percentage\":\"$disk_usage_percent\",\"Disk_usage_absolute\":\"$disk_usage_absolute\"}]"

