from pymongo import MongoClient


uri = "mongodb+srv://demo:1Vo2caG3dg3OcDIS@theloveofanimals-demo.3q6euwa.mongodb.net/?retryWrites=true&w=majority&appName=theloveofanimals-demo"

#Here i've created a class that will begin the process of creating an API token; since we are sill ind evelopment I'm going to initiate a blanket "all" which won't be stringent on what systems access it
#Eventually as we role out the final product, we can expect to transition to only allowing certain ipv6 users to access the API along with a their token
aws = MongoClient(uri)
aws_server = aws['tokens']
protocol = aws_server['security_settings']
tokens = aws_server['authorized_users']

users = aws_server['users']
profiles = users['user_profile']