from flask import Blueprint, render_template, request

main = Blueprint("main", __name__)

# This route serves the index page of the application.


@main.route("/", methods=["GET"])
def index():
    return render_template("index.html")
