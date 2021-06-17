from flask import Flask, request, jsonify
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from appFolder.models import RecipeIngredientTable, RecipeStepTable, UserTable, Recipe_table, UserCollectionTable, TempRecipeTable, TempRecipeIngred, TempRecipeDetailTableModel, RecipeStepTblTemp, TempIngredientTableModel, ChefCollecModel, RecipeDetailTableModel, ReviewTable
from werkzeug.security import generate_password_hash, check_password_hash
from appFolder import app, db, api
from safrs import SAFRSBase, SAFRSAPI

user_put_args = reqparse.RequestParser()
user_put_args.add_argument('full_name', type=str, help='full name of the user is required', required=True)
user_put_args.add_argument('user_name', type=str, help='user name of the user is required', required=True)
user_put_args.add_argument('email', type=str, help='email of the user is required', required=True)
user_put_args.add_argument('password', type=str, help='password of the user is required', required=True)
user_put_args.add_argument('user_type', type=str, help='user type of the user is required', required=True)

recipe_put_args = reqparse.RequestParser()
user_put_args.add_argument('Recipe_title', type=str, help='full name of the user is required', required=True)
user_put_args.add_argument('Description', type=str, help='user name of the user is required', required=True)
user_put_args.add_argument('Serving_Quantity', type=str, help='email of the user is required', required=True)
user_put_args.add_argument('total_time', type=str, help='password of the user is required', required=True)
user_put_args.add_argument('recipe_img_link', type=str, help='user type of the user is required', required=True)
user_put_args.add_argument('vidio_link', type=str, help='user type of the user is required', required=True)

admin_update_args = reqparse.RequestParser()
admin_update_args.add_argument('Recipe_title', type=str, help='full name of the user is required')
admin_update_args.add_argument('Description', type=str, help='user name of the user is required')
admin_update_args.add_argument('Serving_Quantity', type=str, help='email of the user is required')
admin_update_args.add_argument('total_time', type=str, help='password of the user is required')
admin_update_args.add_argument('recipe_img_link', type=str, help='user type of the user is required')
admin_update_args.add_argument('vidio_link', type=str, help='user type of the user is required')
admin_update_args.add_argument('dish_type', type=str, help='dish type of the user is required')
admin_update_args.add_argument('course_meal', type=str, help='user type of the user is required')
admin_update_args.add_argument('season', type=str, help='user type of the user is required')


resource_fields = {
    'user_id': fields.Integer,
    'full_name': fields.String,
    'user_name': fields.String,
    'email': fields.String,
    'password': fields.String,
    'user_type': fields.String
}
recipe_fields = {
    'recipe_ID': fields.Integer,
    'Recipe_title': fields.String,
    'Description': fields.String,
    'Serving_Quantity': fields.String,
    'total_time': fields.String,
    'recipe_img_link': fields.String,
    'vidio_link': fields.String
}
all_fields = {
    'user_id': fields.Integer,
    'recipe_ID': fields.Integer,
    'Recipe_title': fields.String,
    'Description': fields.String,
    'Serving_Quantity': fields.String,
    'total_time': fields.String,
    'recipe_img_link': fields.String,
    'Tempvidio_link': fields.String,
    'dish_type': fields.String,
    'course_meal': fields.String,
    'season': fields.String,
    'step_number': fields.List(fields.Nested('step_number')),
    'instruction': fields.List(fields.Nested('instruction')),
    'quantity': fields.List(fields.Nested('quantity')),
    'unit':  fields.List(fields.Nested('unit')),
    'ingredient_ID': fields.List(fields.Nested('ingredient_ID')),
    'ingredient_Name': fields.List(fields.Nested('ingredient_Name'))
}

category_fields = {
    'recipe_detail_ID': fields.Integer,
    'recipe_ID': fields.Integer,
    'dish_type': fields.String,
    'course_meal': fields.String,
    'season': fields.String
}

review_fields = {
    'review_id': fields.Integer,
    'user_id': fields.Integer,
    'username': fields.String,
    'review': fields.String,
    'rating': fields.Integer,
    'recipe_ID': fields.Integer
}

admin_update_fields = {
    'Recipe_title': fields.String,
    'Description': fields.String,
    'Serving_Quantity': fields.String, 
    'total_time': fields.String, 
    'recipe_img_link': fields.String, 
    'vidio_link': fields.String, 
    'dish_type': fields.String, 
    'course_meal': fields.String, 
    'season': fields.String
}

#signin or login

class UseSignIn(Resource):
    def post(self):
        userName = request.json['user_name']
        password = request.json['password'] 
        result = UserTable.query.filter_by(user_name=userName).first()
        if result:
            if result.password == password:
                res_json = {
                'user_id': result.user_id,
                'user_name': result.user_name,
                'user_type': result.user_type
                }
                return jsonify(res_json)
        return {"message":"not login"} 

#signup or register

class UserSignUp(Resource):
    @marshal_with(resource_fields)
    def post(self):
        new_user = UserTable()
        new_user.full_name = request.json['full_name']
        new_user.password = request.json['password']
        new_user.user_name = request.json['user_name']
        new_user.user_type = request.json['user_type']
        new_user.email = request.json['email']

        db.session.add(new_user)
        db.session.commit()
        return new_user

#search

class UserSearch(Resource):
    @marshal_with(recipe_fields)
    def get(self, search_term):
        """
        Get recipes search
        """
        results = Recipe_table.query.filter(Recipe_table.Recipe_title.like('%'+search_term+'%')).all()
        if results:
            return results
        return {"result": "not found"}

class TempUserSearch(Resource):
    @marshal_with(recipe_fields)
    def get(self, search_term):
        results = Recipe_table.query.filter(Recipe_table.Recipe_title.like('%'+search_term+'%')).all()
        if results:
            return results
        return {"result": "not found"}

#user collection

class UserCollection(Resource):
    def post(self, recipe_id, user_id):
        user_col = UserCollectionTable()
        result1 = UserTable.query.filter_by(user_id=user_id).first()
        result2 = Recipe_table.query.filter_by(recipe_ID=recipe_id).first()
        
        if result1 and result2:
            user_col.user_ID = result1.user_id
            user_col.recipe_ID = result2.recipe_ID
            db.session.add(user_col)
            db.session.commit()
            return {"user_col": "USER COLLECTION POST SUCCESSFULLY"}
        return {"usercol": "the ids are not found in the other table"}

#recipe 

class NewRecipe(Resource):
    def post(self):
        new_recipe = Recipe_table()
        new_recipe.Recipe_title = request.json['Recipe_title']
        new_recipe.Description = request.json['Description']
        new_recipe.Serving_Quantity = request.json['Serving_Quantity']
        new_recipe.total_time = request.json['total_time']
        new_recipe.recipe_img_link = request.json['recipe_img_link']
        new_recipe.vidio_link = request.json['vidio_link']

        db.session.add(new_recipe)
        db.session.commit()
        return {"recipe table": "register new recipie"}

class AllRecipeList(Resource):
    @marshal_with(recipe_fields)
    def get(self):
        result = Recipe_table.query.all()
        if result:
            return result
        return {"noting":"found"}

class TempAllRecipeList(Resource):
    @marshal_with(recipe_fields)
    def get(self):
        result = TempRecipeTable.query.all()
        if result:
            return result
        return {"noting":"found"}

#chef collection table and chef add recipe to database

class TempChefAddRecipe(Resource):
    #@marshal_with(all_fields)
    def post(self, user_id):
        new_recipe = TempRecipeTable()
        new_detail = TempRecipeDetailTableModel()
        new_chef_col = ChefCollecModel()
        new_recipe.Recipe_title = request.json['Recipe_title']
        new_recipe.Description = request.json['Description']
        new_recipe.Serving_Quantity = request.json['Serving_Quantity']
        new_recipe.total_time = request.json['total_time']
        new_recipe.recipe_img_link = request.json['recipe_img_link']
        new_recipe.Tempvidio_link = request.json['Tempvidio_link']
        db.session.add(new_recipe)
        db.session.commit()
        result1 = TempRecipeTable.query.filter_by(Recipe_title=request.json['Recipe_title']).first()
        new_detail.recipe_ID = result1.recipe_ID
        new_detail.dish_type = request.json['dish_type']
        new_detail.course_meal = request.json['course_meal']
        new_detail.season = request.json['season']
        db.session.add(new_detail)
        db.session.commit()
        for i in range (len(request.json['step_number'])):
            new_step = RecipeStepTblTemp()

            result1 = TempRecipeTable.query.filter_by(Recipe_title=request.json['Recipe_title']).first()
            new_step.recipe_ID = result1.recipe_ID
            new_step.step_number = (request.json['step_number'])[i]
            new_step.instruction = (request.json['instruction'])[i]
            db.session.add(new_step)
            db.session.commit()
        for i in range (len(request.json['ingredient_Name'])):
            new_ing = TempIngredientTableModel()
            new_ing.ingredient_Name = (request.json['ingredient_Name'])[i]
            db.session.add(new_ing)
            db.session.commit()
        
        for i in range (len(request.json['ingredient_Name'])):
            new_rec_ing = TempRecipeIngred()
            result2 = TempIngredientTableModel.query.filter_by(ingredient_Name=request.json['ingredient_Name'][i]).first()
            result1 = TempRecipeTable.query.filter_by(Recipe_title=request.json['Recipe_title']).first()

            new_rec_ing.recipe_ID =result1.recipe_ID
            new_rec_ing.ingredient_ID=result2.ingredient_ID
            new_rec_ing.quantity = (request.json['quantity'])[i]
            new_rec_ing.unit = (request.json['unit'])[i]
            db.session.add(new_rec_ing)
            db.session.commit()
        result3 = UserTable.query.filter_by(user_id=user_id).first()
        new_chef_col.user_ID=result3.user_id
        new_chef_col.recipe_ID = result1.recipe_ID
        db.session.add(new_chef_col)
        db.session.commit()

        return_json = {'user_id': user_id,
           'recipe_ID': result1.recipe_ID,
        'Recipe_title': request.json['Recipe_title'],
        'Description': request.json['Description'],
        'Serving_Quantity': request.json['Serving_Quantity'],
        'total_time': request.json['total_time'],
        'recipe_img_link': request.json['recipe_img_link'],
        'Tempvidio_link': request.json['Tempvidio_link'],
        'dish_type': request.json['dish_type'],
        'course_meal': request.json['course_meal'],
        'season': request.json['season'],
        'step_number': request.json['step_number'],
        'instruction': request.json['instruction'],
        'quantity': request.json['quantity'],
        'unit':  request.json['unit'],
        #'ingredient_ID': fields.List(fields.Nested('ingredient_ID')),
        'ingredient_Name': request.json['ingredient_Name']
        }
        return  jsonify(return_json)

#category

class CategoryCourseMealOrSeason(Resource):
    @marshal_with(recipe_fields)
    def get(self, SearchItem):
        result1=RecipeDetailTableModel.query.filter_by(course_meal=SearchItem).all()
        result2=RecipeDetailTableModel.query.filter_by(season=SearchItem).all()
        result3=Recipe_table.query.all()

        resAll=[]
        if result1:
            for result in result1:
                for res in result3:
                    if result.recipe_ID == res.recipe_ID:
                        resAll.append(res)

        elif result2:
            for i in range (len(result2)-1):
                result = result2[i]
                for res in result3:
                    if result.recipe_ID == res.recipe_ID:
                        resAll.append(res)
                        result2.pop(i)
        
        return resAll

class Review(Resource):
    @marshal_with(review_fields)
    def get(self, id):
        result=ReviewTable.query.filter_by(recipe_ID=id).all()
        if result:
            return result
        return "recipe id not found"

    @marshal_with(review_fields)
    def post(self, id):
        new_review = ReviewTable()
        new_review.user_id = id
        new_review.username = request.json['username']
        new_review.review = request.json['review']
        new_review.rating = request.json['rating']
        new_review.recipe_ID = request.json['recipe_ID']

        db.session.add(new_review)
        db.session.commit()
        return new_review

#Admin
class Admin(Resource):
    @marshal_with(admin_update_fields)
    def patch(self, id):
        args = admin_update_args.parse_args()
        result1 = Recipe_table.query.filter_by(recipe_ID=id).first()
        result2 = RecipeDetailTableModel.query.filter_by(recipe_ID=id).first()
        if not result1 or result2:
            abort(404, message="id doesn't exist, cannot update")

        if args['Recipe_title']:
            result1.Recipe_title = args['Recipe_title']
        if args['Description']:
            result1.Description = args['Description']
        if args['Serving_Quantity']:
            result1.Serving_Quantity = args['Serving_Quantity']
        if args['total_time']:
            result1.total_time = args['total_time']
        if args['recipe_img_link']:
            result1.recipe_img_link = args['recipe_img_link']
        if args['vidio_link']:
            result1.vidio_link = args['vidio_link']
        if args['dish_type']:
            result2.dish_type = args['dish_type']
        if args['course_meal']:
            result2.course_meal = args['course_meal']
        if args['season']:
            result2.season = args['season']

        db.session.commit()

        return result1,result2
    def delete(self, id):
        result1 = Recipe_table.query.filter_by(recipe_ID=id).first()
        result2 = RecipeDetailTableModel.query.filter_by(recipe_ID=id).first()
        result3 = RecipeStepTable.query.filter_by(recipe_ID=id).first()
        result4 = RecipeIngredientTable.query.filter_by(recipe_ID=id).first()
       
        if result2:
            db.session.delete(result2)
            db.session.commit()
        if result3:
            db.session.delete(result3)
            db.session.commit()
        if result4:
            db.session.delete(result4)
            db.session.commit()
        if result1:
            db.session.delete(result1)
            db.session.commit()

        return 'deleted successfully'

class AdminTask(Resource):
    def delete(self, id):
        result1 = TempRecipeTable.query.filter_by(recipe_ID=id).first()
        result2 = TempRecipeDetailTableModel.query.filter_by(recipe_ID=id).first()
        result3 = RecipeStepTblTemp.query.filter_by(recipe_ID=id).first()
        result4 = TempRecipeIngred.query.filter_by(recipe_ID=id).first()
       
        if result2:
            db.session.delete(result2)
            db.session.commit()
        if result3:
            db.session.delete(result3)
            db.session.commit()
        if result4:
            db.session.delete(result4)
            db.session.commit()
        if result1:
            db.session.delete(result1)
            db.session.commit()

        return 'deleted successfully'

    #def post

class GetRecipeDetail(Resource):
    def get(self, recipe_id):
        
        result1 = TempRecipeTable.query.filter_by(recipe_ID=recipe_id).first()
        result2 = TempRecipeDetailTableModel.query.filter_by(recipe_ID=recipe_id).first()
        result3 = RecipeStepTblTemp.query.filter_by(recipe_ID=recipe_id).all()
        result4 = TempRecipeIngred.query.filter_by(recipe_ID=recipe_id).all()
        result5 = TempIngredientTableModel.query.all()
        step_number =[]
        for result in result3:
            step_number.append(result.step_number)

        instruction = []
        for result in result3:
            step_number.append(result.instruction)
        
        quantity = []
        for result in result4:
            quantity.append(result.quantity)

        unit = []
        for result in result4:
            unit.append(result.unit)

        id = []
        for result in result4:
            id.append(result.ingredient_ID)
        print(id)

        ing_name = []
        for i in id:
            for result in result5:
                if result.ingredient_ID == i:
                    ing_name.append(result.ingredient_Name)
            
        return_json = {
        'Recipe_title': result1.Recipe_title,
        'Description': result1.Description,
        'Serving_Quantity': result1.Serving_Quantity,
        'total_time': result1.total_time,
        'recipe_img_link': result1.recipe_img_link,
        'Tempvidio_link': result1.Tempvidio_link,
        'dish_type': result2.dish_type,
        'course_meal': result2.course_meal,
        'season': result2.season,
        'step_number': step_number,
        'instruction': instruction,
        'quantity': quantity,
        'unit': unit,
        #'ingredient_ID': fields.List(fields.Nested('ingredient_ID')),
        'ingredient_Name': ing_name
        }
        return  jsonify(return_json)


def create_api(app, HOST="localhost", PORT=5000, API_PREFIX=""):
    api = SAFRSAPI(app, host=HOST, port=PORT, prefix=API_PREFIX)
    api.expose_object(UserTable)
    #api.expose_methods(UseSignIn)
    
    print("Created API: http://{}:{}/{}".format(HOST, PORT, API_PREFIX))

#
create_api(app)   
api.add_resource(UseSignIn, "/login")
api.add_resource(UserSignUp,  "/register")
api.add_resource(UserSearch, '/users/search/<search_term>')
api.add_resource(TempUserSearch, '/usersTemp/search/<search_term>')
api.add_resource(UserCollection, '/users/<int:recipe_id>/<int:user_id>')
api.add_resource(NewRecipe, '/newRecipe')
api.add_resource(AllRecipeList, '/allRecipe')
api.add_resource(TempAllRecipeList, '/allTempRecipe')
api.add_resource(TempChefAddRecipe, '/postAllTempRecipe/<int:user_id>')
api.add_resource(CategoryCourseMealOrSeason, '/category/<SearchItem>')
api.add_resource(Review, '/review/<int:id>')
api.add_resource(Admin, '/Admin/<int:id>')#admin delete and update
api.add_resource(AdminTask, '/Admintask/<int:id>')
api.add_resource(GetRecipeDetail, '/GetAllTempData/<int:recipe_id>')












