#!/bin/bash
# This is a script used by the devcontainer to build the project

# install dependencies
yarn install

# Build Server Dependencies
yarn lovenotes @lovenotes/server-native build

# Create database
yarn lovenotes @lovenotes/server prisma migrate reset -f
