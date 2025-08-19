from flask import Flask, render_template, request, session, flash, redirect, url_for, jsonify, flash
import pymongo
from pymongo import MongoClient
import requests
from aws_dependencies import aws, tokens, protocol, profiles

app = Flask(__name__)

#Here I am just going to begin the precepts of an authentication system, but all of the nuts and bolts of the system operastins will be developed at a later date

@app.route('/create_account', methods=['GET', 'POST'])
def authentication():
  first_name = request.headers.get('First-Name')
  password = request.headers.get('Password')
  email = request.headers.get('Email')
  return jsonify({
    "message": "Account creation endpoint",
    "first_name": first_name,
    "email": email
  })
  
  

if __name__ == "__main__":
  app.run(host="0.0.0.0", port='35')