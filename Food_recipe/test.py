from flask.globals import request
import requests

BASE = "http://127.0.0.1:5000/"

data= [{"full_name": "simreteab", "user_name": "sim", "email": "se", "password":"123", "user_type": "user"},
       {"full_name": "simreteab", "user_name": "sim", "email": "se", "password":"123", "user_type": "user"},
       {"full_name": "simreteab", "user_name": "sim", "email": "se", "password":"123", "user_type": "user"}]

    #    {"Recipe_title": "shiro", "Description": "wow cook", "Serving_Quantity": "4", "total_time": "30min",   "recipe_img_link": "http//my/photo", "Tempvidio_link": "https//youtube.com/jfhdk", "dish_type": "dish",    "course_meal": "breakfast", "season": "fasting", "step_number": ["1","2","3"], "instruction": ["add shiro","add water", "add salt"], "quantity": ["1","2","3"],
    # "unit": ["cup","kg","1lt"], "ingredient_Name": ["berbere","water","salt"]}
    
# response = requests.patch(BASE + "user/2", {})
# print(response.json())
for i in range(len(data)):
    response = requests.put(BASE + "user/" + str(i), data[i])
    print(response.json())

# response = requests.delete(BASE + "video/0")
# print(response)
# input()
# response = requests.get(BASE + "video/6")
# print(response.json())
#response = requests.put(BASE + "vidio/1",{"name":"simreteab","likes": 10, "views":1000})
#print(response.json())
# input()
# response = requests.get(BASE + "video/1")
# print(response.json())