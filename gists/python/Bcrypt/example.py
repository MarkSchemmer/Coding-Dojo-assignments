'''

With your virtual environment activated, run
 the following command:

(py3Env) $ pip install flask-bcrypt
In your Flask project's server.py file,
 include the following, among the other 
 packages we need to import (such as PyMySQL):

from flask import Flask
from flask_bcrypt import Bcrypt        
app = Flask(__name__)        
bcrypt = Bcrypt(app)    
 # we are creating an object called bcrypt, 
                        
 # which is made by invoking the function 
 # Bcrypt with our app as an argument
After making the object bcrypt, we have 
access to two methods that we will use to
 generate our password hashes and to 
 compare passwords.

To generate a hash, provide the password 
to be hashed as an argument

bcrypt.generate_password_hash(password_string)

To compare passwords, provide the hash as the
 first argument and the password to be checked 
 as the second argument

bcrypt
.check_password_hash(hashed_password, password_string)

Let's explore the generate_password_hash() method. If we pass it a string and print the result, we may see something like this:

Note:

     when preforming a query in flask if nothing is return you can do a simple 
     if query_response : for some reason that is a boolean statement 
     if has data then true else false!
'''