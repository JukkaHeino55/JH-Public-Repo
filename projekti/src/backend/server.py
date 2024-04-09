import pyodbc 
import json
from flask import Flask,jsonify
from flask_cors import CORS, cross_origin
from dao import DB_Links_DAO

app = Flask(__name__,static_url_path="",static_folder="public")
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type/json'


@app.route("/")
@app.route("/index")
def index():
    return "Palautus serveriltä"

@app.route("/getLinks")
def getLinks():
    print("Haku suoritetaan")
    dao = DB_Links_DAO()
    results = dao.get_elements(0)  # .json()
    print("Haku suoritettu ja palautetaan vastaus")
    print(results)
    return results

@app.route("/testJSON")
def testJSON():
    print("Test JSON alkaa")
    data = {}
    data["nimi"] = "Nimi 1"
    data["osoite"] = "Osoite 1"
    json_data = json.dumps(data)
    print("Test JSON loppuu")

    lista = []
    data = {}
    data["id"] = 1
    data["nimi"] = 'Jukka'
    data["osoite"] = 'Katu 1'
    lista.append(data)
    data = {}
    data["id"] = 2
    data["nimi"] = 'Lupu'
    data["osoite"] = 'Katu 2'
    lista.append(data)

    json_data = json.dumps(lista)
    print("JSON==>")
    print(json_data)
    print("<==JSON")



    return json_data

app.run("127.0.0.1",port=8080)