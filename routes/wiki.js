// import { Router } from "express";
const express = require("express");
const Router = express.Router();
const { addPage } = require("../views");

Router.get("/", (req, res, next) => {
  res.send("got to GET /wiki/");
});

Router.post("/", (req, res, next) => {
  res.send("got to POST /wiki/");
});

Router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = Router;
