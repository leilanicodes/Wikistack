// import { Router } from "express";
const express = require("express");
const Router = express.Router();
const { Page } = require("../models");
const { addPage } = require("../views");

Router.get("/", (req, res, next) => {
  res.redirect("/wiki");
});

Router.post("/", async (req, res, next) => {
  // res.json(req.body);
  console.log("req: ", req.body);
  //   res.send("got to POST /wiki/");

  try {
    const page = new Page({
      title: req.body.title,
      content: req.body.content,
    });
    await page.save();
    res.redirect("/");
    res.json(req.body); // last thing you want to have happen, besides error handling
  } catch (error) {
    next(error);
  }
});

Router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = Router;
