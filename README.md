[![Magnet.me Logo](https://cdn.magnet.me/images/logo-2015-full.svg)](https://magnet.me?ref=github-transip-stonith "Discover the best companies, jobs and internships at Magnet.me")

[![GitHub release](https://img.shields.io/github/release/magnetme/transip-stonith.svg)](https://github.com/Magnetme/transip-stonith/releases)
[![Docker pulls](https://img.shields.io/docker/pulls/magnetme/transip-stonith.svg)](https://hub.docker.com/r/magnetme/transip-stonith/)
[![Docker build](https://img.shields.io/docker/automated/magnetme/transip-stonith.svg)](https://hub.docker.com/r/magnetme/transip-stonith/)
[![Code Climate](https://img.shields.io/codeclimate/github/magnetme/transip-stonith.svg)](https://codeclimate.com/github/Magnetme/transip-stonith)
[![Github stars](https://img.shields.io/github/stars/magnetme/transip-stonith.svg?style=social&label=Star)](https://github.com/Magnetme/transip-stonith)

# TransIP STONITH (Shoot the other node in the head)

We use the following simple script/Docker container at [Magnet.me](https://magnet.me?ref=github-transip-stonith "Discover the best companies, jobs and internships at Magnet.me") to kill a machine really hard if another node becomes a master for an HA-environment.

You can use the container like this (assumed the private key is stored in `/tmp/privateKey`):
 
 ```bash
 docker run \
	 -v /tmp/privateKey:/opt/privateKey \
	 -e TRANSIP_USER=magnetme \
	 -e DOOMED_VPS=magnetme-vps69 \
	 magnetme/transip-stonith
 ```
