#!/bin/sh

export DISPLAY=:0

cd /home/alena/Документы/QA_AUTO/qa_auto_5_initial/environment/grid

 ./hub.sh &
 ./node.sh &

