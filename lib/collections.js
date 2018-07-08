import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

export const Reports = new Mongo.Collection("reports");

Meteor.methods({
  "reports.new-report"(text) {
    check(text, String);

    // Check if user is logged in
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Reports.insert({
      text,
      ceratedAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  "reports.remove"(report) {
    check(report._id, String);

    if (report.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Reports.remove(report._id);
  }
});
