from fastapi import FastAPI,Path
from typing import Optional
from pydantic import BaseModel

app=FastAPI()


students={
    1:{
        "name":"john",
        "age":21,
        "class":"year 12"
        
    }
}


# Creating an endpoint -> amazon.com/delete-user
# delete-user is an endpoint
# GET,POST,PUT,DELETE

# interface for post method
class Student(BaseModel):
    name:str
    age:int
    year:str

# interface for put method
class UpdateStudent(BaseModel):
    name:Optional[str]=None
    age:Optional[int]=None
    year:Optional[str]=None

@app.get("/")
def index():
    # Returning json data
    return {"name": "First Data"}

# google.com/get-student/1

# data in body but fast api parses it automatically 
# and we don't have to define it like req.body...... and take the argument as student_id:int
# post -> pydantic model -> schema validation like zod for backend
# path parameter
@app.get("/get-student/{student_id}")
# gt->greater than #lt->less than
# input data schema validation 
def get_student(student_id:int=Path(description="The ID of the student you want to view")):
    return students[student_id]
 
# query parameter
# google.com/results?search=Python
@app.get("/get-by-name/{student_id}")
# to make this query parameter name optional 
# python does not allow you to have non-optional parameter before
# an optional parameter, so fast api covers this 
# thus have to write *, before for this parameter to work 
def get_student(*,student_id:int,name:Optional[str]=None,test:int):
    for student_id in students:
        if students[student_id]["name"] == name:
            return students[student_id]
    return {"Data":"Not found"}


# post method 
@app.post("/create-student/{student_id}")
def create_student(student_id:int,student:Student):
    if student_id in students:
        return {"Error":"Student exists"}
    
    students[student_id]=student
    return students[student_id]

# put method
@app.put("/update-student/{student_id}")
def update_student(student_id:int,student:UpdateStudent):
    if(student_id not in students):
        return{"Error":"Student does not exist"}
    
    if student.name != None:
        students[student_id].name=student.name
    if student.age != None:
        students[student_id].age=student.age
    if student.year != None:
        students[student_id].year=student.year

    return students[student_id]

# delete method
@app.delete("delete-student/{student_id}")
def delete_student(student_id:int):
    if(student_id not in students):
        return {"Error":"Student does not exist"}
    
    del students[student_id]
    return {"Message":"Student deleted successfuly"}


