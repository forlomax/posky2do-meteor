// routing

Router.configure({
  layoutTemplate: "ApplicationLayout"
});

Router.route("/", function() {
  this.render("welcome", {
    to: "main" // where i render the 'welcome' template
  });
});

Router.route("/reports", function() {
  this.render("navbar", {
    to: "navbar"
  });
  this.render("reports", {
    to: "main"
  });
});

Router.route("/add", function() {
  this.render("navbar", {
    to: "navbar"
  });
  this.render("add", {
    to: "main"
  });
});
import { Template } from "meteor/templating";
import { Reports } from "../lib/collections.js";
import "./main.html";

// helpers
Template.reports.helpers({
  //reports: [{ text: "My Note 1" }, { text: "My Note 2" }, { text: "My Note 3" }]

  reports() {
    return Reports.find({});
  }
});

Template.reports.events({
  "click .delete-report": function() {
    //Notes.remove(this._id);
    Meteor.call("reports.remove", this);
    return false;
  }
});
