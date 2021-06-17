from appFolder import db, api
import app
from safrs import SAFRSBase, SAFRSAPI



class AdminModel(SAFRSBase, db.Model):
    __tablename__ = "admin_table"
    admin_id=db.Column(db.Integer, primary_key=True, autoincrement=True)
    username= db.Column(db.String(100), nullable=False)
    password=db.Column(db.String(50), nullable=False)

    # def __repr__(self):
    #     return f"(username = {username}, password = {password})"
class ChefCollecModel(SAFRSBase, db.Model):
    __tablename__ = "chef_collec_table"
    chef_menu_ID=db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_ID= db.Column(db.Integer,  nullable=False)#db.ForeignKey('user_table.user_id'), 
    recipe_ID=db.Column(db.Integer,  nullable=False)#db.ForeignKey('Recipe_table.recipe_ID'), 

    # def __repr__(self):
    #     return f"(username = {username}, password = {password})"

class IngredientTableModel(SAFRSBase, db.Model):
    __tablename__ = "Ingredient_table"
    ingredient_ID=db.Column(db.Integer, primary_key=True, autoincrement=True)
    ingredient_Name= db.Column(db.String(50), nullable=False)
    #ingredRecip = db.relationship('RecipeIngredientTable', backref='ingredRecipe', lazy=True)


    # def __repr__(self):
    #     return f"(username = {username}, password = {password})"
class TempIngredientTableModel(SAFRSBase, db.Model):
    __tablename__ = "Ingredient_table_temp"
    ingredient_ID=db.Column(db.Integer, primary_key=True, autoincrement=True)
    ingredient_Name= db.Column(db.String(50), nullable=False)
    #ingredRecipTemp = db.relationship('TempRecipeIngred', backref='ingredRecipeTemp', lazy=True)


class RecipeDetailTableModel(SAFRSBase, db.Model):
    __tablename__ = "recipe_detail_table"
    recipe_detail_ID=db.Column(db.Integer, primary_key=True, autoincrement=True)
    recipe_ID= db.Column(db.Integer, nullable=False)#db.ForeignKey('Recipe_table.recipe_ID'),
    dish_type=db.Column(db.String(50), nullable=False)
    course_meal=db.Column(db.String(50), nullable=False)
    season=db.Column(db.String(50), nullable=False)

class TempRecipeDetailTableModel(SAFRSBase, db.Model):
    __tablename__ = "recipe_detail_temp"
    recipe_detail_ID=db.Column(db.Integer, primary_key=True, autoincrement=True)
    recipe_ID= db.Column(db.Integer, nullable=False)#db.ForeignKey('recipe_table_temp.recipe_ID'), 
    dish_type=db.Column(db.String(50), nullable=False)
    course_meal=db.Column(db.String(50), nullable=False)
    season=db.Column(db.String(50), nullable=False)

class TempRecipeIngred(SAFRSBase, db.Model):
    __tablename__ = "recipe_ing_temp"
    recipe_ing_ID= db.Column(db.Integer, primary_key=True, autoincrement=True)
    recipe_ID= db.Column(db.Integer, nullable=False)#db.ForeignKey('recipe_table_temp.recipe_ID'), 
    ingredient_ID=db.Column(db.Integer, nullable=False)#db.ForeignKey('Ingredient_table_temp.ingredient_ID'), 
    quantity = db.Column(db.String(50), nullable=False)
    unit = db.Column(db.String(50), nullable=False)

class RecipeIngredientTable(SAFRSBase, db.Model):
    __tablename__ = "recipe_ingredient_table"
    recipe_ing_ID= db.Column(db.Integer, primary_key=True, autoincrement=True)
    recipe_ID= db.Column(db.Integer, nullable=False)#db.ForeignKey('Recipe_table.recipe_ID'), 
    ingredient_ID=db.Column(db.Integer, nullable=False)#db.ForeignKey('Ingredient_table.ingredient_ID'), 
    quantity = db.Column(db.String(50), nullable=False)
    unit = db.Column(db.String(50), nullable=False)
 
class RecipeStepTable(SAFRSBase, db.Model):
    __tablename__="recipe_step_table"
    recipe_step_id=db.Column(db.Integer, primary_key=True, autoincrement=True)
    recipe_ID= db.Column(db.Integer, nullable=False)#db.ForeignKey('Recipe_table.recipe_ID'), 
    step_number=db.Column(db.Integer, nullable=False)
    instruction=db.Column(db.String(50), nullable=False)

class Recipe_table(SAFRSBase, db.Model):
    __tablename__="Recipe_table"
    recipe_ID= db.Column(db.Integer, primary_key=True, autoincrement=True)
    Recipe_title=db.Column(db.String(50), nullable=False)
    Description =db.Column(db.String(50), nullable=False)
    Serving_Quantity=db.Column(db.String(50), nullable=False)
    total_time=db.Column(db.String(50), nullable=False)
    recipe_img_link=db.Column(db.String(500),nullable=False)
    vidio_link=db.Column(db.String(500),nullable=False)
    #collect = db.relationship('ChefCollecModel', backref='RecipeCollect', lazy=True)
    #detail = db.relationship('RecipeDetailTableModel', backref='idDetail', lazy=True)
    #recipeIng = db.relationship('RecipeIngredientTable', backref='recipeIng', lazy=True)
    #recipeStep= db.relationship('RecipeStepTable', backref='recipeIng', lazy=True)
    #recipeReview=db.relationship('ReviewTable', backref='recipeReview', lazy=True)
    #collectionRecipe = db.relationship('UserCollectionTable', backref='collectionRecipe', lazy=True)



class TempRecipeTable(SAFRSBase, db.Model):
    __tablename__="recipe_table_temp"
    recipe_ID= db.Column(db.Integer, primary_key=True, autoincrement=True)
    Recipe_title=db.Column(db.String(50), nullable=False)
    Description =db.Column(db.String(50), nullable=False)
    Serving_Quantity=db.Column(db.String(50), nullable=False)
    total_time=db.Column(db.String(50), nullable=False)
    recipe_img_link=db.Column(db.String(500),nullable=False)
    Tempvidio_link=db.Column(db.String(500),nullable=False)

    #detailTemp = db.relationship('TempRecipeDetailTableModel', backref='idDetailTemp', lazy=True)
    #recipeIngTemp = db.relationship('TempRecipeIngred', backref='recipeIngTemp', lazy=True)
    #recipeStepTemp= db.relationship('RecipeStepTblTemp', backref='recipeIngTemp', lazy=True)


class RecipeStepTblTemp(SAFRSBase, db.Model):
    __tablename__="recipe_step_table_temp"
    recipe_step_id=db.Column(db.Integer, primary_key=True, autoincrement=True)
    recipe_ID= db.Column(db.Integer, nullable=False)#db.ForeignKey('recipe_table_temp.recipe_ID'), 
    step_number=db.Column(db.Integer, nullable=False)
    instruction=db.Column(db.String(50), nullable=False)

class ReviewTable(SAFRSBase, db.Model):
    __tablename__="review_table"
    review_id=db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id=db.Column(db.Integer, nullable=False)#db.ForeignKey('user_table.user_id'),
    username =db.Column(db.String(50), nullable=False)#db.ForeignKey('user_table.user_name'), 
    review=db.Column(db.String(50), nullable=False)
    rating=db.Column(db.Integer, nullable=False)
    recipe_ID=db.Column(db.Integer, nullable=False)#db.ForeignKey('Recipe_table.recipe_ID'), 

class UserCollectionTable(SAFRSBase, db.Model):
    __tablename__="user_collection_table"
    user_col_ID=db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_ID=db.Column(db.Integer, nullable=False)#db.ForeignKey('user_table.user_id'),
    recipe_ID=db.Column(db.Integer, nullable=False)#db.ForeignKey('Recipe_table.recipe_ID')

class UserTable(SAFRSBase, db.Model):
    __tablename__="user_table" 
    user_id=db.Column(db.Integer, primary_key=True, autoincrement=True)
    full_name=db.Column(db.String(50), nullable=False)
    user_name=db.Column(db.String(50), nullable=False)
    email= db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)
    user_type = db.Column(db.String(50), nullable=False)
    #chefcollection = db.relationship('ChefCollecModel', backref='collect', lazy=True)
    #userReview= db.relationship('ReviewTable', backref='userReview', lazy=True)
    #username = db.relationship('ReviewTable', backref='username', lazy=True)
    #userCollection = db.relationship('UserCollectionTable', backref='userCollection', lazy=True)

    
#db.create_all()