from flask import Flask, render_template, request, session, flash, redirect, url_for, jsonify, flash
import pymongo
from pymongo import MongoClient
import requests

app = Flask(__name__)



if __name__ == "__main__":
  app.run(host="0.0.0.0", port='35')