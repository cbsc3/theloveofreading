import random
import uuid
from pymongo import MongoClient
from datetime import date

#Then, we will alsi make the shift to environment vairbles but I am just making a demo, so we're not to worried about security
uri = "mongodb+srv://demo:1Vo2caG3dg3OcDIS@theloveofanimals-demo.3q6euwa.mongodb.net/?retryWrites=true&w=majority&appName=theloveofanimals-demo"

#Here i've created a class that will begin the process of creating an API token; since we are sill ind evelopment I'm going to initiate a blanket "all" which won't be stringent on what systems access it
#Eventually as we role out the final product, we can expect to transition to only allowing certain ipv6 users to access the API along with a their token
aws = MongoClient(uri)
aws_server = aws['theloveofanimals-demo']
protocol = aws_server['security_settings']
tokens = aws_server['authorized_users']


"""

class api_token:
    def __init__(self, ip_authorization=str, user=str, password=str, uuid=str):
        ip_authorization = self.ip_authorization
        user = self.user
        password = self.str
        uuid = self.uuid
    def create_token(self):
        # Generate a unique token using UUID
        token = str(uuid.uuid4())
        # Get the current date
        current_date = date.today().strftime("%Y-%m-%d")
        
        # Create a new token entry in the database
        aws.tokens.insert_one({
            "token": token,
            "ip_authorization": self.ip_authorization,
            "user": self.user,
            "password": self.password,
            "uuid": self.uuid,
            "created_at": current_date
        })
        
        return token




"""

